---
status: draft
scope: core
---

![game](https://8bitgalaxy.com/images/game.png)

- 4x Strategy with:
    - deck building
    - worker placement
    - engine building
- Main game rule is [[PerformAction]], start with it
- These docs are the source of truth for the rules
- Game is played by 1+ players with different options, see [[Scenario]]
- First focus: minimal playable duel without [[Alien]]s, playable with AI

#### Inspiration

1. **Star Realms**: deck building and [[Turn]], but more complex: plus a [[Field]]
2. **Twilight Imperium**: 4X on a [[Field]], but faster: simpler turns, politics as an extension
3. **Chess**: even contest, no luck in [[Combat]], see [[GameBalance]]; losing all [[Hero]]es is checkmate, see [[Goal]]

#### Scopes

Every page states its `scope` in frontmatter:

1. `core` - minimal playable game
2. `advanced` - more technologies and rules on top of core
3. Extensions:
	1. `aliens` - [[Alien]]s, [[Event]]s, [[Derelict]]s
	2. `objectives` - [[Objective]]s and victory points
	3. `politics` - [[Politics]]

#### Status

Every page states its `status` in frontmatter:

1. `stub` - empty or unfinished
2. `draft` - written, not approved
3. `stable` - approved
