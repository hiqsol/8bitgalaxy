# 8-bit galaxy

Docs are organized as Obsidian compatible wiki
Every page has:
- frontmatter: status, scope and optionally: aliases
- numbered bullet point rules
- notes

Docs include rules, notes and reviews.
Reviews number issues `I<n>` and proposals `P<n>`, continuing across review files.
Write the points of an issue or proposal as lettered bullets `- a) ...`, so they can be referred to as `P24 a`.
Run `make check` (`bin/checkdocs`) after editing docs.
Docs must contain only actual, current information.
Do not keep legacy or historical information in docs.
Delete obsolete information, resolved issues and resolved proposals.
When a proposal is accepted, incorporate its result into the applicable rules before deleting the proposal.

Keep rules and notes concise.
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
