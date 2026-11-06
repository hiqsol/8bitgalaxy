---
status: draft
scope: meta
---

# Docs

How the wiki is kept. [[ReviewProcess]] sets when an item opens and
closes.

1. Every page has frontmatter:
	1. `status` - how far the page is, see Status below
	2. `scope` - the part of the game or the docs it belongs to, see
	   Scopes below
	3. `aliases` - optional, other names of its term
2. Review items live in [[Backlog]]: issues `I<n>`, proposals `P<n>`
   and simplifications `S<n>`, blockers `B<n>` in [[Guidance]]
	1. An item keeps its number when it moves
	2. Its points are lettered bullets `- a) ...`, cited as `P24 a`
	3. It cites the rule it is about by item link, `[[Upgrade#7.2]]`
	   or `[[Upgrade#Notes#2]]`
3. The open items about a page set its `status`

## Scopes

A page in `rules/` takes the module it belongs to as its `scope`, see
[[Rules]]. The other folders take a docs scope:

1. `meta` - [[Backlog]], review and documentation support, e.g.
   [[Pseudographics]], in `meta/` and the repo root
2. `playtest` - [[Playtest]] procedure, [[Notation]] and played games,
   in `games/`, `meta/` and the repo root
3. `idea` - out of the rules, kept for later in `ideas/`
4. `lore` - the setting, in `lore/`

## Status

1. `stub` - a name or an idea, not enough to play or read
2. `draft` - written and playable as read, not reviewed yet
3. `issues` - has a known issue: an open issue or proposal of the
   [[Backlog]], or a blocker in [[Guidance]]
4. `polish` - reviewed, no open issue, waits for the designer's
   approval
5. `stable` - approved by the designer: played or reviewed and
   nothing open cites it, reopened only by evidence from a played
   game
6. `living` - a working meta page that never finishes, e.g.
   [[Backlog]], [[Guidance]]
