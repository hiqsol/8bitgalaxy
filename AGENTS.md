# 8-bit galaxy

Docs are organized as Obsidian compatible wiki
Every page has:
- frontmatter: status, scope and optionally: aliases
- numbered bullet point rules
- numbered bullet point notes

Docs include rules, notes and meta pages.
Backlog holds all open review items: issues `I<n>`, proposals `P<n>`
and simplifications `S<n>`; an item keeps its number when it moves.
Write the points of an issue or proposal as lettered bullets
`- a) ...`, so they can be referred to as `P24 a`.
Run `make check` (`bin/checkdocs`) and `make lint` (markdownlint)
after editing docs.
Lines are at most 70 characters (tab counts as 4), tables and code
blocks excepted, `make wrap` (`bin/wrapmd`) rewraps longer lines.
The pre-commit hook runs both, enable it with `make hooks`.
Docs must contain only actual, current information.
Do not keep legacy or historical information in docs.
Delete obsolete information, resolved issues and resolved proposals.
When a proposal is accepted, incorporate its result into the
applicable rules before deleting the proposal.

Keep rules and notes concise.
IMPORTANT: exceptions and specific cases live only on the specific
page, never on the general page. A general rule doesn't list or
mention the cases that change it: the specific page states its
exception on its own, e.g. Distance doesn't mention Void, the Void
page says a route can't pass it; Turn doesn't mention Trade, the
Trade page says the partner's Hand cards join at the starter's Turn.
Indent nested rules with tabs.
Don't miss my input, organize it all into rules/notes.

## Page templates

Write a page like the best existing page of its kind:

- Basic action: `docs/BasicActions/Attack.md`
- Technology action: `docs/TechnologyActions/Upgrade.md`
- Technology modifier: `docs/TechnologyModifiers/Ambush.md`
- Card type: `docs/Cards/Ship.md`
- Property: `docs/Properties/Range.md`
- State: `docs/States/Damaged.md`
- Power: `docs/Resources/AttackPower.md`
- Class, Origin, Role: `docs/Types/Social.md`
- Home pile: `docs/Home/Hand.md`
- Space type: `docs/Field/Asteroids.md`

## Code

The game is in `packages/`, see `README.md` and
`adr/0001-engine-and-multiplayer.md`:

- Rules belong in `packages/engine`, never in the client or server
- After editing `docs/Cards/Deck.md` or the technology table run
  `npm run cards`, the engine test checks they are in sync
- Run `npm test` and `npm run typecheck` after code changes
- Engine comments link rules pages as `[[Page]]`, values the docs
  don't set are marked `ASSUMPTION` in `scenario.ts`
