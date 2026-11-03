---
status: draft
scope: meta
---

# 8-bit galaxy

Docs are organized as Obsidian compatible wiki
Every page has:
- frontmatter: status, scope and optionally: aliases
- numbered bullet point rules
- numbered bullet point notes

Docs include rules, notes and meta pages.
[[Backlog]] holds all open review items: issues `I<n>`, proposals
`P<n>` and simplifications `S<n>`; an item keeps its number when it
moves.
Write the points of an issue or proposal as lettered bullets
`- a) ...`, so they can be referred to as `P24 a`.
Cite a rule as an item link: `[[Upgrade#7.2]]` is rule 7.2 of
[[Upgrade]], `[[Upgrade#Notes#2]]` its note 2, `make check` reports a
link to a missing item. [[Rules]] pages link pages, items are
cited mostly from meta, game and lore pages: inserting or deleting a
rule renumbers the ones after it, so fix the links to them, references
in the editor (`uwiki lsp`) list them.
A capitalized word is a defined term, a lowercase one plain English:
write [[Level]] for a card's [[Level]], but the level of [[Control]].
A term is a page name or an alias, an alias bold in an item leads to
it: `aliases: [Tile]` and `**Tile**` in [[Component#2.2]].
Link every mention of a term, a page doesn't link itself: `make link`
(`uwiki link`) links them, `make check` warns about unlinked ones.
Run `make check` (`uwiki check`, `bin/checkdocs`) and `make lint`
(markdownlint, `uwiki wrap --check`) after editing docs.
Lines are at most 70 characters (tab counts as 4), tables and code
blocks excepted, `make wrap` (`uwiki wrap`) rewraps longer lines.
The pre-commit hook runs both, enable it with `make hooks`.
The repo is one wiki: checks, lint and the build take every
markdown file, every page must be reachable by links from
`README.md`.
`uwiki.toml` holds uwiki defaults and the frontmatter schema,
its `status` and `scope` values are the ones `rules/index.md` lists.
[[Move]] or rename a page with `uwiki mv <from> <to>`, it rewrites
every link to it and moves it with `git mv`.
`make links` checks external links, `make stats` counts pages.
`make view` builds the wiki into `build/8bitgalaxy.html` and opens
it, `make serve` serves it rebuilding on change.
Docs must contain only actual, current information.
Do not keep legacy or historical information in docs.
Delete obsolete information, resolved issues and resolved proposals.
When a proposal is accepted, incorporate its result into the
applicable rules before deleting the proposal.

Keep rules and notes concise.
IMPORTANT: exceptions and specific cases live only on the specific
page, never on the general page. A general rule doesn't list or
mention the cases that change it: the specific page states its
exception on its own, e.g. [[Distance]] doesn't mention [[Void]], the
[[Void]] page says a route can't pass it; [[Turn]] doesn't mention
[[Trade]], the
[[Trade]] page says the partner's [[Hand]] [[Card]]s join at the
[[Starter]]'s [[Turn]].
Same for scopes: a `core` page doesn't depend on the Human [[Deck]], a
specific [[Technology]] or the first [[Duel]] setup, those live on
`duel` pages, e.g. [[Combat]] doesn't mention [[Explore]], [[Explore]]
says it reveals
[[Hidden]] [[Card]]s in a [[Combat]]. A catalog may list pages of any
scope.
Indent nested rules with tabs.
Don't miss my input, organize it all into rules/notes.

## Page templates

Write a page like the best existing page of its kind:

- [[BasicAction|Basic action]]: `rules/BasicActions/Attack.md`
- [[TechnologyAction|Technology action]]:
  `rules/TechnologyActions/Upgrade.md`
- [[TechnologyModifier|Technology modifier]]:
  `rules/TechnologyModifiers/Ambush.md`
- [[Card]] [[Type]]: `rules/Cards/Ship.md`
- [[Property]]: `rules/Properties/Range.md`
- [[State]]: `rules/States/Damaged.md`
- [[Power]]: `rules/Resources/MilitaryPower.md`
- [[Class]], [[Origin]], [[Role]]: `rules/Types/Social.md`
- [[Home]] pile: `rules/Home/Hand.md`
- [[Space]] type: `rules/Field/Asteroids.md`
