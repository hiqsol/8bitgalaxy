---
status: draft
scope: meta
---

# Docs

How the wiki is kept.

1. Every page has frontmatter:
	1. `status` - how far the page is, see Status below
	2. `scope` - the part of the game or the docs it belongs to, see
	   Scopes below
	3. `aliases` - optional, other names of its term
	4. `tags` - optional, groups of pages across folders, see Tags
	   below
2. Review items live in [[Backlog]]: issues `I:<n>`, proposals `P:<n>`
   and simplifications `S:<n>`, blockers `B:<n>` in [[Guidance]]
	1. An item keeps its number when it moves
	2. Its points are lettered bullets `- a) ...`, cited as `P:24 a`
	3. It cites the rule it is about by item link, `[[Upgrade#7.2]]`
	   or `[[Upgrade#Notes#2]]`
3. The open items about a page set its `status`
4. A study is a `draft` page in `meta/` until its decisions are
   applied or rejected, then it shrinks to an entry in [[Studies]]

## Scopes

A page in `rules/` takes the module it belongs to as its `scope`, see
[[Rules]]. The other folders take a docs scope:

1. `meta` - [[Backlog]], [[Studies]], review and documentation
   support, in `meta/` and the repo root
2. `playtest` - [[Playtest]] procedure, [[Notation]] and played games,
   in `games/`, `meta/` and the repo root
3. `idea` - out of the rules, kept for later in `ideas/`
4. `lore` - the setting, in `lore/`

## Tags

A page in `rules/` lists its `tags` in frontmatter to filter pages
across folders, e.g. the Obsidian search `tag:#tech [scope:core]`
finds the core [[Technology|Technologies]], `tag:#tech` finds
`tech/action` too. A [[Technology]] takes the tags of its kind,
[[Class]] and catalog item in [[Technology]], first and in this order,
bin/checkdocs keeps them so; then the topic tags, set by hand.

1. [[Technology]] kind, by folder:
	1. `tech/action` - a [[TechnologyAction]]
	2. `tech/modifier` - a [[TechnologyModifier]]
	3. `tech/hub` - a [[Hub]]
2. [[Class]] of a [[Technology]], as its first rule names it:
	1. `class/military`
	2. `class/culture`
	3. `class/production`
	4. `class/science`
3. [[Card]] [[Type]] carrying a [[Technology]], as in the catalog:
	1. `on/ship`
	2. `on/hero`
	3. `on/base`
	4. `on/colony`
	5. `on/hyperstructure`
	6. `on/tool`
4. [[Technology]] state in the catalog:
	1. `planned` - no [[Card]] of the [[Deck]] carries it yet
	2. `galaxy` - the [[Galaxy]] has it
5. Topic, what the page is about:
	1. `topic/combat` - fighting: [[Attack]], [[Combat]] and
	   [[Defense]]
	2. `topic/hidden` - [[Hidden]] [[Card]]s and [[Space]]s, revealing
	   them
	3. `topic/movement` - [[Move]], routes, [[Distance]] and
	   [[Pinning]]
	4. `topic/deck` - the deck building cycle: [[Reserve]], [[Hand]],
	   [[Discard]]
	5. `topic/economy` - [[Resource]]s: [[Goods]], [[Energy]],
	   [[Power]], [[Trade]]
	6. `topic/build` - getting new [[Card]]s: [[Create]],
	   [[Research]], [[Upgrade]], [[Hub]]s
	7. `topic/damage` - [[Damaged]], [[Destroy]] and repair
	8. `topic/capture` - taking rival [[Card]]s and [[Star]]s
	9. `topic/hero` - [[Hero]]es, the [[Faction]] leaders

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
