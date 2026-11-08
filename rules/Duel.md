---
status: draft
scope: duel
---

1. **Duel** is the first [[Scenario]], the minimal playable game
2. 2 players, competitive, no [[GalaxyDeck]]
3. One player is the Human [[Faction]], the other the Alien
   [[Faction]], each with its own copy of the [[Deck]], see
   [[StartDraw]]
4. [[Field]]: 7 [[Star]]s in rows of 2, 3 and 2: `00 01`, `10 11 12`,
   `20 21`, their [[Slot]]s:
	1. [[Home]] [[Star]]s and `11`: 5 [[Unit]] and 5 [[Structure]]
	   [[Slot]]s
	2. `10` and `12`: 5 [[Unit]] and 3 [[Structure]] [[Slot]]s
	3. `01` and `20`: 3 [[Unit]] and 5 [[Structure]] [[Slot]]s
5. [[Home]] [[Star]]s in opposite corners: `00` and `21`
6. [[Space]]s:
	1. The 8 [[Void]]s of [[Length]] 1 around `11`, at 1, 4, 5, 6, 7,
	   10, 11 and 12 o'clock, are placed as in `game.png`, the other
	   52 [[Space]]s are [[Hidden]]
	2. The [[Space bag]] holds 52 [[Tile]]s, halving by [[Type]] and
	   by [[Length]], see the table below; their [[Type]] pages are
	   played, `advanced` ones too
	3. Revealing a [[Hidden]] [[Space]] draws 2 [[Tile]]s from the
	   [[Space bag]], the last one if only one is left: the player
	   picks one to lay, its [[Price]] is the [[Cost]] of an
	   [[Explore]], the other goes back into the bag; a failed
	   [[Explore]] lays none, both go back
7. [[Home]] [[Star]]s: a [[Homeworld]] [[Hyperstructure]] 2/1,
   [[Science]] on both [[End]]s, [[Archive]] on both, the [[Strong]]
   [[End]]'s Secondary is +1 [[Energy]]. Other [[Star]]s are [[Wild]]
8. [[Ancient]] deck: 12 [[Ancient]]s, [[Defense]] 1, 2 and 3, four of
   each
9. [[WorldDeck|World deck]]: the [[World]] [[Card]]s of [[WorldDeck]],
   shuffled
10. A [[Technology]] printed on a [[Deck]] [[Card]] is played by its
    page, an `advanced` one too, with the `advanced` rules it needs
11. Setup: [[StartDraw]]
12. [[Field]] schematic: hex is a [[Star]], `[ ]` home [[Star]], each
    side has 2 [[Space]] [[Tile]]s, one per symbol:
```
		     ╱ ╲   ╱ ╲
		    ╱   ╲ ╱   ╲
		   │[00] │ 01  │
		   │     │     │
		  ╱ ╲   ╱ ╲   ╱ ╲
		 ╱   ╲ ╱   ╲ ╱   ╲
		│ 10  │ 11  │ 12  │
		│     │     │     │
		 ╲   ╱ ╲   ╱ ╲   ╱
		  ╲ ╱   ╲ ╱   ╲ ╱
		   │ 20  │[21] │
		   │     │     │
		    ╲   ╱ ╲   ╱
		     ╲ ╱   ╲ ╱
```

| [[Type]] | [[ExtraPrice]] | [[Tile]]s | [[Length]] 1 | 2 | 3 | 4 | 5 | 6 |
|------|-----|----|----|----|---|---|---|---|
| Normal | 1 | 26 | 12 | 7 | 3 | 2 | 2 | - |
| [[Asteroids]] | 1 on 7, 2 on 6 | 13 | 7 | 3 | 2 | 1 | - | - |
| [[Void]] | 0 | 7 | 4 | 2 | 1 | - | - | - |
| [[BlackHole\|Black hole]] | 2 | 4 | 1 | 1 | 1 | - | - | 1 |
| [[HyperPass\|Hyper pass]] | 4 | 2 | 2 | - | - | - | - | - |
| All | | 52 | 26 | 13 | 7 | 3 | 2 | 1 |

#### Notes

1. The layout is shown in `game.png`, see [[index]]
2. [[Void]]s keep the home [[Star]]s apart: there is no short route
   between them
3. The `duel` scope is what this game adds to the `core` rules: this
   setup, the [[Deck]] and its [[Technology|Technologies]], see
   [[Technology]]
4. The [[Homeworld]] pays its [[Energy]] when it joins a [[Science]]
   [[Action]], [[Receive]] is the [[Action]] for it alone
5. Human and Alien are like white and black in chess: two young
   civilizations with the same [[Card]]s, only the color and design of
   the [[Faction]] tell the decks apart. The [[Ancient]]s guard the
   [[Wild]] [[Star]]s, see [[Lore]]
