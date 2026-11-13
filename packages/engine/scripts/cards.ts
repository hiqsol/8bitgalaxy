// Generates src/data/deck.json from the rules docs: npm run cards
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parseAliases, parseDeck, parseTechScopes, TECH_FOLDERS } from '../src/deck/parse.ts';

const docs = new URL('../../../rules/', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, docs), 'utf8');
const techPages = Object.fromEntries(
  TECH_FOLDERS.flatMap((dir) =>
    readdirSync(new URL(`${dir}/`, docs))
      .filter((f) => f.endsWith('.md'))
      .map((f) => [f.slice(0, -3), read(`${dir}/${f}`)]),
  ),
);

const data = {
  source: 'rules/Cards/Deck.md, rules/Concepts/Technology.md, aliases of Technology pages',
  cards: parseDeck(read('Cards/Deck.md'), parseAliases(techPages)),
  techScopes: parseTechScopes(read('Concepts/Technology.md')),
};
// One card per line, for readable diffs
const json = JSON.stringify({ ...data, cards: ['@'] }, null, 1)
  .replace('"@"', data.cards.map((c) => JSON.stringify(c)).join(',\n  '));
writeFileSync(new URL('../src/data/deck.json', import.meta.url), json + '\n');
console.log(`${data.cards.length} cards, ${Object.keys(data.techScopes).length} technologies`);
