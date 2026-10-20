// Generates src/data/deck.json from the rules docs: npm run cards
import { readFileSync, writeFileSync } from 'node:fs';
import { parseDeck, parseTechScopes } from '../src/deck/parse.ts';

const docs = new URL('../../../docs/', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, docs), 'utf8');

const data = {
  source: 'docs/Cards/Deck.md, docs/Concepts/Technology.md',
  cards: parseDeck(read('Cards/Deck.md')),
  techScopes: parseTechScopes(read('Concepts/Technology.md')),
};
// One card per line, for readable diffs
const json = JSON.stringify({ ...data, cards: ['@'] }, null, 1)
  .replace('"@"', data.cards.map((c) => JSON.stringify(c)).join(',\n  '));
writeFileSync(new URL('../src/data/deck.json', import.meta.url), json + '\n');
console.log(`${data.cards.length} cards, ${Object.keys(data.techScopes).length} technologies`);
