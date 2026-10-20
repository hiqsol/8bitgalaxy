// Parses the card tables of the rules docs into card definitions.
// Self-contained: run by plain node in scripts/cards.ts.
import type { Ability, CardDef, CardType, EndDef, Klass, Prerequisite, TechScope } from '../types.ts';

const CLASSES = ['M', 'C', 'P', 'S'];
const TYPES = ['Ship', 'Hero', 'Base', 'Colony'];
const PLUS_KINDS: Record<string, string> = {
  Defense: 'defense',
  Capacity: 'capacity',
  Range: 'range',
  Draw: 'draw',
  Restore: 'restore',
};

/** Table rows of a markdown text: arrays of trimmed cells, header and separator excluded. */
export function tableRows(md: string, header: string): string[][] {
  const lines = md.split('\n');
  const start = lines.findIndex((l) => l.startsWith('|') && l.includes(header));
  if (start < 0) throw new Error(`no table with header ${header}`);
  const rows: string[][] = [];
  for (const line of lines.slice(start + 2)) {
    if (!line.startsWith('|')) break;
    rows.push(line.slice(1, -1).split('|').map((c) => c.trim()));
  }
  return rows;
}

const unlink = (s: string) => s.replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, '$1');

export function parseAbilities(cell: string, isPrimary: boolean): Ability[] {
  const text = cell.trim();
  if (text === '-' || text === '') return [];
  return text.split(',').map((raw) => {
    const s = raw.trim();
    const link = s.match(/^\[\[([^\]|]*)(?:\|[^\]]*)?\]\]$/);
    if (link) return { kind: 'tech', tech: link[1] } as Ability;
    const power = s.match(/^(\d+)(?:\+(\d+))?$/);
    if (power && isPrimary) {
      return { kind: 'power', base: Number(power[1]), field: Number(power[2] ?? 0) } as Ability;
    }
    const plus = s.match(/^\+(\d+)(?: (\w+))?$/);
    if (plus) {
      const what = plus[2] ? PLUS_KINDS[plus[2]] : 'power';
      if (!what) throw new Error(`unknown plus ${s}`);
      return { kind: 'plus', what, n: Number(plus[1]) } as Ability;
    }
    if (/^[a-z]+$/.test(s)) return { kind: 'tech', tech: s } as Ability;
    throw new Error(`can't parse ability ${s}`);
  });
}

function parseLevel(cell: string): { level: number; extraCost: number } {
  const m = cell.match(/^(\d+)([+-]\d+)?$/);
  if (!m) throw new Error(`bad level ${cell}`);
  return { level: Number(m[1]), extraCost: Number(m[2] ?? 0) };
}

function parsePrerequisites(cell: string): Prerequisite[] {
  if (cell === '-' || cell === '') return [];
  return cell.split(',').map((p) => {
    const m = p.trim().match(/^(\d+)([MCPS])$/);
    if (!m) throw new Error(`bad prerequisite ${p}`);
    return { level: Number(m[1]), klass: m[2] as Klass };
  });
}

function parseEnd(row: string[]): EndDef {
  const [, , level, klass, primary, secondary] = row;
  if (!CLASSES.includes(klass)) throw new Error(`bad class ${klass}`);
  return {
    ...parseLevel(level),
    klass: klass as Klass,
    primary: parseAbilities(unlinkKeep(primary), true),
    secondary: parseAbilities(unlinkKeep(secondary), false),
  };
}

// Keep [[Tech]] links (they mark technologies), drop aliases only.
const unlinkKeep = (s: string) => s.replace(/\[\[([^\]|]*)\|[^\]]*\]\]/g, '[[$1]]');

/** Card definitions from docs/Cards/Deck.md */
export function parseDeck(md: string): CardDef[] {
  const rows = tableRows(md, '| Card |');
  const cards: CardDef[] = [];
  for (let i = 0; i < rows.length; i += 2) {
    const strong = rows[i];
    const weak = rows[i + 1];
    if (strong[1] !== 'strong' || weak?.[1] !== 'weak') {
      throw new Error(`expected strong/weak rows at ${strong.join('|')}`);
    }
    const name = unlink(strong[0]);
    const type = name.split(' ')[0];
    if (!TYPES.includes(type)) throw new Error(`bad type ${name}`);
    cards.push({
      id: name,
      type: type as CardType,
      strong: parseEnd(strong),
      weak: parseEnd(weak),
      prerequisites: parsePrerequisites(strong[6]),
      culturePoints: 0,
    });
  }
  return cards;
}

/** Technology scopes from docs/Concepts/Technology.md */
export function parseTechScopes(md: string): Record<string, TechScope> {
  const scopes: Record<string, TechScope> = {};
  for (const row of tableRows(md, '| Technology |')) {
    const name = row[0].replace(/^\[\[|\]\]$/g, '').replace(/`/g, '');
    scopes[name] = row[3] as TechScope;
  }
  return scopes;
}
