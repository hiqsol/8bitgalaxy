// Parses the Deck and the Technology catalog of the rules into card definitions.
// Self-contained: run by plain node in scripts/cards.ts.
import type { Ability, CardDef, CardType, EndDef, Klass, PlusKind, Prerequisite, TechScope } from '../types.ts';

/** [[Type]] letters of the card notation, see [[Notation]] */
const TYPES: Record<string, CardType> = {
  S: 'Ship',
  H: 'Hero',
  B: 'Base',
  C: 'Colony',
  HS: 'Hyperstructure',
  T: 'Tool',
};
/** [[Plus]] letters besides a Class letter: power of that Class */
const PLUS_KINDS: Record<string, PlusKind> = { d: 'defense', r: 'range', l: 'capacity' };
const SCOPES: TechScope[] = ['core', 'duel', 'advanced', 'events', 'objectives', 'politics'];
/** a value still to design, prints nothing yet */
const TBD = 'TBD';

const klassOf = (letter: string): Klass => {
  if (!/^[mcps]$/.test(letter)) throw new Error(`bad class ${letter}`);
  return letter.toUpperCase() as Klass;
};

/** Lines of the first ```text block after the heading-less rules: the Deck listing */
function deckLines(md: string): string[] {
  const m = md.match(/```text\n([\s\S]*?)```/);
  if (!m) throw new Error('no text block with the Deck');
  return m[1].split('\n').filter((l) => l.trim() !== '');
}

/** One printed item: `2m` Power, `+1m` Plus, `+1d` Defense, a Technology; `A+B` combines them */
export function parseAbility(token: string, klass: Klass): Ability[] {
  if (token === TBD) return [];
  const power = token.match(/^(\d+)([mcps])$/);
  if (power) {
    if (klassOf(power[2]) !== klass) throw new Error(`power ${token} of another class than ${klass}`);
    return [{ kind: 'power', base: Number(power[1]), field: 0 }];
  }
  const plus = token.match(/^\+(\d+)([a-z])$/);
  if (plus) {
    const n = Number(plus[1]);
    if (PLUS_KINDS[plus[2]]) return [{ kind: 'plus', what: PLUS_KINDS[plus[2]], n }];
    if (klassOf(plus[2]) !== klass) throw new Error(`plus ${token} of another class than ${klass}`);
    return [{ kind: 'plus', what: 'power', n }];
  }
  // a combined print is one Ability: `Recover+Upgrade`, `Militarization+1d`
  const parts = token.split(/\+(?=[A-Z\d])/);
  if (parts.length > 1) return parts.flatMap((p, i) => parseAbility(i ? (/^\d/.test(p) ? `+${p}` : p) : p, klass));
  if (/^[A-Z][A-Za-z]+$/.test(token)) return [{ kind: 'tech', tech: token }];
  throw new Error(`can't parse ability ${token}`);
}

/** What an End gives: the first item is the Primary, the rest the Secondary */
function parseGives(text: string, head: { level: number; extraCost: number; klass: Klass }): EndDef {
  const [primary = '', ...secondary] = text.trim().split(/\s+/).filter(Boolean);
  return {
    ...head,
    primary: primary ? parseAbility(primary, head.klass) : [],
    secondary: secondary.flatMap((t) => parseAbility(t, head.klass)),
  };
}

/** Card definitions from rules/Cards/Deck.md, a line per card in [[Notation]] */
export function parseDeck(md: string): CardDef[] {
  return deckLines(md).map((line) => {
    const m = line.match(/^(?:(\d+)× )?([A-Z]+)(\d+)([+-]\d+)([mcps])\/(\d+)([+-]\d+)([mcps]):\s+(.*?)\s*\/\s*(.*?)\s*(?:<<\s*(.*))?$/);
    if (!m) throw new Error(`can't parse card ${line}`);
    const [, copies, letter, sLevel, sExtra, sKlass, wLevel, wExtra, wKlass, sGives, wGives, prereqs] = m;
    const type = TYPES[letter];
    if (!type) throw new Error(`bad type ${letter} in ${line}`);
    const strong = { level: Number(sLevel), extraCost: Number(sExtra), klass: klassOf(sKlass) };
    const weak = { level: Number(wLevel), extraCost: Number(wExtra), klass: klassOf(wKlass) };
    const def: CardDef = {
      id: `${type} ${strong.level}${strong.klass}`,
      type,
      strong: parseGives(sGives, strong),
      weak: parseGives(wGives, weak),
      prerequisites: parsePrerequisites(prereqs ?? ''),
      culturePoints: 0,
    };
    if (copies) def.copies = Number(copies);
    return def;
  });
}

function parsePrerequisites(text: string): Prerequisite[] {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => {
      const m = p.match(/^\*(\d+)([mcps])$/);
      if (!m) throw new Error(`bad prerequisite ${p}`);
      return { level: Number(m[1]), klass: klassOf(m[2]) };
    });
}

/** Technology scopes from the catalog list of rules/Concepts/Technology.md */
export function parseTechScopes(md: string): Record<string, TechScope> {
  const list = md.split(/^#### List\n/m)[1];
  if (!list) throw new Error('no #### List of technologies');
  // an item and its indented continuation lines
  const items = list.split(/\n(?=\d+\. )/).map((item) => item.replace(/\n\s+/g, ' '));
  const scopes: Record<string, TechScope> = {};
  for (const item of items) {
    const m = item.match(/^\d+\. \[\[([^\]|]+)\]\]: .+? - .+? - .+? - .+? - (\w+)/);
    if (!m) continue;
    const scope = m[2] as TechScope;
    if (!SCOPES.includes(scope)) throw new Error(`bad scope ${scope} of ${m[1]}`);
    scopes[m[1]] = scope;
  }
  if (!Object.keys(scopes).length) throw new Error('no technologies in the list');
  return scopes;
}
