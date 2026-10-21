# 8-bit galaxy

Docs are organized as Obsidian compatible wiki
Every page has:
- frontmatter: status, scope and optionally: aliases
- numbered bullet point rules
- notes

Docs include rules, notes and reviews.
RulesReview numbers issues `RI<n>` and proposals `RP<n>`.
DesignReview numbers issues `DI<n>` and proposals `DP<n>`.
SimplificationReview numbers simplifications `S<n>`.
Write the points of an issue or proposal as lettered bullets
`- a) ...`, so they can be referred to as `RP24 a`.
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
- Technology modifier: `docs/TechnologyModifiers/Stealth.md`
- Card type: `docs/Cards/Ship.md`
- Property: `docs/Properties/Range.md`
- State: `docs/States/Damaged.md`
- Power: `docs/Resources/AttackPower.md`
- Class, Origin, Role: `docs/Types/Social.md`
- Home pile: `docs/Home/Hand.md`
- Space type: `docs/Field/Asteroids.md`
