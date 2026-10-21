// Interaction state: what the next click means. Pure UI, the rules stay in the engine.
import {
  type ActionDecl,
  type ActionKind,
  controller,
  type EndName,
  isActor,
  locate,
  type Location,
  type Move,
  type Participant,
  type PlayerId,
  type Row,
  type SupportUse,
  type View,
} from '@8bitgalaxy/engine';
import { reactive } from 'vue';
import { game, send } from './session';

/** What a click on the board picks while an action is drafted */
export type Pick = 'participant' | 'source' | 'destination' | 'cargo' | 'target' | 'recover' | 'old' | 'rotate' | 'shift';

export const ui = reactive({
  /** card shown in the inspector */
  inspect: null as string | null,
  /** Hand card with its menu open */
  menu: null as string | null,
  mode: 'idle' as 'idle' | 'takeoff' | 'action' | 'manual',
  takeoff: { card: '', end: 'strong' as EndName, hidden: false },
  draft: null as ActionDecl | null,
  pick: 'participant' as Pick,
  /** Manage Shift: the Structure waiting for its new Slot */
  shiftCard: '',
  /** table mode: the card to put somewhere */
  manualCard: '',
  combat: { card: '', end: 'strong' as EndName, use: 'primary' as SupportUse, boost: 0 },
  saved: [] as string[],
});

const view = () => game.view as View;
const seat = () => game.seat!;

export function reset(): void {
  ui.menu = null;
  ui.mode = 'idle';
  ui.draft = null;
  ui.pick = 'participant';
  ui.shiftCard = '';
  ui.manualCard = '';
  ui.combat.card = '';
  ui.saved = [];
}

export function where(uid: string): Location | null {
  try {
    return locate(view(), uid);
  } catch {
    return null;
  }
}

const inMyHand = (uid: string) => view().homes[seat()]?.hand.includes(uid);

/** A Star the seat controls, the home Star first */
export function defaultSource(): string {
  const v = view();
  const stars = Object.values(v.stars);
  const home = stars.find((s) => s.home === seat() && controller(v, s.id) === seat());
  return (home ?? stars.find((s) => controller(v, s.id) === seat()) ?? stars[0]).id;
}

export function startTakeoff(card: string): void {
  reset();
  ui.mode = 'takeoff';
  ui.takeoff = { card, end: 'strong', hidden: false };
}

export function startAction(card: string, kind: ActionKind): void {
  reset();
  const source = defaultSource();
  ui.mode = 'action';
  ui.draft = {
    kind,
    starter: card,
    starterEnd: 'strong',
    starterUse: 'primary',
    source,
    destination: source,
    participants: [],
    boost: {},
    cargo: [],
    research: kind === 'research' ? { pile: 0 } : undefined,
    create: kind === 'create' ? { piles: [] } : undefined,
    manage: kind === 'manage' ? [] : undefined,
  };
  ui.pick = kind === 'explore' || kind === 'attack' || kind === 'move' ? 'destination' : 'participant';
}

export function startManual(): void {
  reset();
  ui.mode = 'manual';
}

function toggleParticipant(uid: string): void {
  const d = ui.draft!;
  if (uid === d.starter) return;
  const i = d.participants.findIndex((p) => p.card === uid);
  if (i >= 0) {
    d.participants.splice(i, 1);
    return;
  }
  const loc = where(uid);
  if (!loc) return;
  let p: Participant = { card: uid };
  if (loc.zone === 'hand') p = { card: uid, end: 'strong', use: 'primary' };
  else if (loc.zone === 'slot' && loc.star !== d.source && loc.star !== d.destination) p = { card: uid, use: 'primary' };
  d.participants.push(p);
}

/** Does a participant from another Star than the source and destination need a use */
export function isRemote(p: Participant): boolean {
  const loc = where(p.card);
  const d = ui.draft;
  return !!d && loc?.zone === 'slot' && loc.star !== d.source && loc.star !== d.destination;
}

function toggle(list: string[], uid: string): void {
  const i = list.indexOf(uid);
  if (i >= 0) list.splice(i, 1);
  else list.push(uid);
}

export function clickCard(uid: string): void {
  const v = view();
  ui.inspect = uid;
  if (ui.mode === 'manual') {
    ui.manualCard = ui.manualCard === uid ? '' : uid;
    return;
  }
  if (v.combat) {
    if (v.combat.toAct !== seat()) return;
    if (v.combat.phase === 'save') {
      toggle(ui.saved, uid);
      return;
    }
    const loc = where(uid);
    if (loc && (inMyHand(uid) || (loc.zone === 'slot' && v.cards[uid]?.owner === seat()))) {
      ui.combat = { card: uid, end: 'strong', use: 'primary', boost: 0 };
    }
    return;
  }
  if (ui.mode === 'action' && ui.draft) {
    const d = ui.draft;
    switch (ui.pick) {
      case 'cargo':
        d.cargo ??= [];
        toggle(d.cargo, uid);
        return;
      case 'target':
        d.target = { kind: 'card', card: uid, reveal: true };
        d.destination = (where(uid) as { star?: string })?.star ?? d.destination;
        ui.pick = 'participant';
        return;
      case 'recover':
        d.recover = { card: uid };
        d.destination = (where(uid) as { star?: string })?.star ?? d.destination;
        ui.pick = 'participant';
        return;
      case 'old': {
        const loc = where(uid);
        d.upgrade = { old: uid, pile: d.upgrade?.pile ?? 0, oldTo: d.upgrade?.oldTo };
        if (loc?.zone === 'slot') d.destination = loc.star;
        ui.pick = 'participant';
        return;
      }
      case 'rotate':
        d.manage ??= [];
        d.manage.push({ op: 'rotate', card: uid });
        d.destination = (where(uid) as { star?: string })?.star ?? d.destination;
        return;
      case 'shift':
        ui.shiftCard = uid;
        d.destination = (where(uid) as { star?: string })?.star ?? d.destination;
        return;
      default:
        toggleParticipant(uid);
        return;
    }
  }
  if (inMyHand(uid) && v.turn.player === seat() && !v.winner) ui.menu = ui.menu === uid ? null : uid;
}

export async function clickSlot(star: string, row: Row, index: number): Promise<void> {
  if (ui.mode === 'takeoff' && row === 'units') {
    const t = ui.takeoff;
    if (await act({ type: 'takeoff', card: t.card, star, slot: index, end: t.end, hidden: t.hidden })) reset();
    return;
  }
  if (ui.mode === 'manual' && ui.manualCard) {
    if (await act({ type: 'manual', op: { op: 'moveCard', card: ui.manualCard, to: { zone: 'slot', star, row, index } } })) ui.manualCard = '';
    return;
  }
  if (ui.mode === 'action' && ui.draft) {
    if (ui.pick === 'shift' && ui.shiftCard) {
      ui.draft.manage ??= [];
      ui.draft.manage.push({ op: 'shift', card: ui.shiftCard, slot: index });
      ui.shiftCard = '';
      return;
    }
    if (ui.draft.kind === 'move' || ui.draft.kind === 'create') {
      // a click on a free Slot places the last selected traveller there
      const last = ui.draft.kind === 'create' ? null : ui.draft.participants.at(-1)?.card;
      if (last) ui.draft.slots = { ...ui.draft.slots, [last]: index };
      ui.draft.destination = star;
    }
  }
}

export function clickTile(id: string): void {
  const v = view();
  if (ui.mode === 'manual') {
    const tile = v.stars[id] ?? v.spaces[id];
    if (tile && !tile.revealed) void act({ type: 'manual', op: { op: 'revealTile', id } });
    return;
  }
  if (ui.mode !== 'action' || !ui.draft) return;
  const d = ui.draft;
  if (ui.pick === 'source') {
    if (v.stars[id]) d.source = id;
    ui.pick = 'participant';
    return;
  }
  d.destination = id;
  if (d.kind === 'explore') {
    const tile = v.stars[id] ?? v.spaces[id];
    if (tile && !tile.revealed) d.target = { kind: 'tile', id };
  }
  if (ui.pick === 'destination') ui.pick = 'participant';
}

export async function clickPile(to: Location): Promise<void> {
  if (ui.mode === 'manual' && ui.manualCard) {
    if (await act({ type: 'manual', op: { op: 'moveCard', card: ui.manualCard, to } })) ui.manualCard = '';
  }
}

export type PileZone = 'factory' | 'laboratory';

/** A Factory or Laboratory pile click: picks it for the drafted action, or is a table move target */
export function pickPile(player: PlayerId, zone: PileZone, pile: number): void {
  const d = ui.draft;
  if (ui.mode === 'manual') {
    const cards = view().homes[player][zone][pile].cards;
    if (!ui.manualCard && cards.length) ui.manualCard = cards[cards.length - 1];
    else void clickPile({ zone, player, pile });
    return;
  }
  if (!d || player !== seat()) return;
  if (zone === 'laboratory' && d.kind === 'research') {
    if (d.research && d.research.pile !== pile && ui.pick === 'target') d.research.toLab = pile;
    else d.research = { pile };
  }
  if (zone === 'factory' && d.kind === 'create') d.create!.piles.push(pile);
  if (zone === 'factory' && d.kind === 'upgrade') d.upgrade = { old: d.upgrade?.old ?? '', pile, oldTo: d.upgrade?.oldTo };
  if (d.kind === 'manage') {
    const prev = d.manage!.at(-1);
    const op = zone === 'factory' ? 'factoryShift' : 'labShift';
    if (prev && prev.op === op && prev.to === -1) prev.to = pile;
    else d.manage!.push({ op, from: pile, to: -1 });
  }
}

/** Is the pile picked by the drafted action */
export function pilePicked(player: PlayerId, zone: PileZone, i: number): boolean {
  const d = ui.draft;
  if (!d || player !== seat()) return false;
  if (zone === 'laboratory') return !!(d.research?.pile === i || d.research?.toLab === i || d.manage?.some((o) => o.op === 'labShift' && (o.from === i || o.to === i)));
  return !!(d.create?.piles.includes(i) || d.upgrade?.pile === i || d.manage?.some((o) => o.op === 'factoryShift' && (o.from === i || o.to === i)));
}

/** The roles of a card in the drafted action, Combat or table move */
export function cardMarks(uid: string): string[] {
  const m: string[] = [];
  const d = ui.draft;
  if (d) {
    if (d.starter === uid) m.push('starter');
    if (d.participants.some((p) => p.card === uid)) m.push('participant');
    if (d.cargo?.includes(uid)) m.push('cargo');
    const t = d.target;
    if ((t?.kind === 'card' && t.card === uid) || d.recover?.card === uid || d.upgrade?.old === uid) m.push('target');
    if (d.manage?.some((o) => 'card' in o && o.card === uid) || ui.shiftCard === uid) m.push('target');
  }
  if (ui.mode === 'takeoff' && ui.takeoff.card === uid) m.push('starter');
  if (ui.manualCard === uid) m.push('manual');
  if (ui.menu === uid) m.push('menu');
  if (ui.combat.card === uid) m.push('participant');
  if (ui.saved.includes(uid)) m.push('saved');
  if (game.view?.combat?.entries.some((e) => e.card === uid)) m.push('fighting');
  return m;
}

/** Send a move, true when it is applied */
export async function act(move: Move): Promise<boolean> {
  const error = await send(move);
  return error === null;
}

export async function submitAction(): Promise<void> {
  if (ui.draft && (await act({ type: 'action', action: JSON.parse(JSON.stringify(ui.draft)) }))) reset();
}

export const isUnitCard = (v: View, uid: string) => isActor(v.cards[uid]);
