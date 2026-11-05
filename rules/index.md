---
status: polish
scope: core
---

![game](../public/images/game.png)

1. 4X strategy with:
	1. [[DeckBuilding|Deck building]]
	2. Worker placement
	3. Engine building
2. Main game rule is [[PerformAction]], start with it
3. These docs are the source of truth for the rules
4. Game is played by 1+ players with different options, see
   [[Scenario]]
5. First focus: the [[Duel]], minimal playable game without the
   [[GalaxyDeck]], playable with AI

#### Inspiration

1. **Star Realms**: deck building and [[Turn]], but more complex: plus
   a [[Field]]
2. **Twilight Imperium**: 4X on a [[Field]], but faster: simpler
   [[Turn]]s, politics as an extension
3. **Chess**: even contest, no luck in [[Combat]], see
   [[GameBalance]]; losing all [[Hero]]es is checkmate, see
   [[PaxGalactica|Pax Galactica]]

#### Scopes

Every page states its `scope` in frontmatter:

1. `core` - streamlined rules, independent of a [[Faction]] deck, a
   [[Technology]] and a [[Scenario]]
	1. Core is an extensible framework: it gives core numbers, e.g.
	   the [[Hand]] size, and a [[Faction]] or any [[Card]] can change
	   any rule, the change lives on its own page
2. `duel` - minimal playable game on top of core: the [[Duel]] setup,
   the Human and Alien [[Deck]] and its [[Technology|Technologies]]
3. `advanced` - more [[Technology|Technologies]] and rules on top of
   duel
4. Extensions:
	1. `events` - the [[Galaxy]] plays its [[GalaxyDeck]]:
	   [[Event]]s, [[Derelict]]s, [[WarpStorm|Warp storm]]s
	2. `objectives` - [[Objective]]s, [[History]] and [[Legacy]]
	3. `politics` - [[Politics]]
5. `meta` - [[Backlog]], review and documentation support, e.g.
   [[Pseudographics]], kept in [meta/](../meta/Backlog.md)
6. `playtest` - [[Playtest]] procedure, [[Notation]] and played
   games, kept in [games/](../games/README.md)
7. `idea` - out of the rules, kept in [ideas/](../ideas/README.md)
   for later
8. `lore` - the setting, kept in [lore/](../lore/LoreVariants.md)

#### Status

Every page states its `status` in frontmatter:

1. `stub` - a name or an idea, not enough to play or read
2. `draft` - written and playable as read, not reviewed yet
3. `issues` - has a known issue: an open issue or proposal of the
   [[Backlog]], or a blocker in [[Guidance]]
4. `polish` - almost stable: works as written, only a
   simplification or a question to watch in playtest is open
5. `stable` - approved by the designer: played or reviewed and
   nothing open cites it, reopened only by evidence from a played
   game
6. `living` - a working meta page that never finishes, e.g.
   [[Backlog]], [[Guidance]]
