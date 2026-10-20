import type { ActionKind } from '@8bitgalaxy/engine';

export const ACTION_KINDS: Record<ActionKind, string> = {
  move: 'Move',
  attack: 'Attack',
  explore: 'Explore',
  research: 'Research',
  create: 'Create',
  upgrade: 'Upgrade',
  recover: 'Recover',
  manage: 'Manage',
};

/** How to draft each action, shown in the action panel */
export const ACTION_HINTS: Record<ActionKind, string> = {
  move: 'Pick the destination Star, select the Actors in the source that move, optionally cargo. Requires Range only.',
  attack: 'Pick the target Star, select attacking cards: at least one Military Actor. Then the defender answers.',
  explore: 'Pick a hidden tile (or a rival hidden card). Needs a participant with Explore and its Cost in M or S power.',
  research: 'Click a Laboratory pile; the destination is the Star with your hub for the card. Costs the card Cost in S power.',
  create: 'Click Factory piles. Actors: destination is the hub Star; Structures: source is the hub Star, destination where built.',
  upgrade: 'Pick the old card (Discard or Field) and click a Factory pile with the new one. Needs Upgrade and the hub.',
  recover: 'Pick your Damaged card, the source is the hub Star. Needs Recover and the hub. Costs its Level.',
  manage: "Add operations: rotate or shift cards in the destination Star, or shift piles. 1 power of the starter's Class each.",
};
