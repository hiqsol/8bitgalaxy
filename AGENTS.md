---
status: draft
scope: meta
---

# 8-bit galaxy

An Obsidian style wiki: a page has frontmatter, numbered rules and
numbered notes, nested ones indented with tabs; [[Docs]]
defines the `scope` and `status` values.

1. Organize all my input into concise rules and notes
2. Keep only current information: delete obsolete text and resolved
   items, apply an accepted proposal to the rules first; a study
   shrinks to an entry in [[Studies]] once its decisions are made
3. IMPORTANT: an exception lives only on its specific page, the
   general page doesn't mention it: [[Distance]] doesn't mention
   [[Void]], a `core` page doesn't depend on a `duel` one
4. A capitalized word is a defined term, a page name or an alias, and
   is linked; a lowercase one is plain English
5. Cite a rule by item link: `[[Upgrade#7.2]]`,
   `[[Upgrade#Notes#2]]`; fix them when rules renumber
6. Open items live in [[Backlog]] and [[Guidance]], they set the
   `status` of the page they are about; `stable` only when I approve
7. Write a page like the best one of its kind in `rules/`:
   `BasicActions/Attack`, `TechnologyActions/Upgrade`,
   `TechnologyModifiers/Ambush`, `Cards/Ship`, `Properties/Range`,
   `States/Damaged`, `Resources/MilitaryPower`, `Types/Social`,
   `Home/Hand`, `Field/Asteroids`
8. After editing run `make link check lint`, `uwiki wrap` the files
   you edited; move or rename a page with `uwiki mv`

## Code

The game is in `packages/`, see `README.md` and
`adr/0001-engine-and-multiplayer.md`:

- The engine holds the rules, never the client or the server
- After editing `rules/Cards/Deck.md` or the technology table run
  `npm run cards`, the engine test checks they are in sync
- Run `npm test` and `npm run typecheck` after code changes
- Engine comments link rules pages as `[[Page]]`, values the rules
  don't set are marked `ASSUMPTION` in `scenario.ts`
