---
status: draft
scope: duel
---

1. **Duel** is the first [[Scenario]], the minimal playable game
2. 2 players, competitive, no [[GalaxyDeck]]
3. One player is the Human [[Faction]], the other the Alien Faction,
   each with its own copy of the [[Deck]], see [[StartDraw]]
4. [[Field]]: 7 Stars in rows of 2, 3 and 2: `00 01`, `10 11 12`,
   `20 21`, their [[Slot]]s:
	1. Home Stars and `11`: 5 [[Unit]] and 5 [[Structure]] Slots
	2. `10` and `12`: 5 Unit and 3 Structure Slots
	3. `01` and `20`: 3 Unit and 5 Structure Slots
5. Home Stars in opposite corners: `00` and `21`
6. Every [[Space]] has length 1, [[Void]]s are placed as in
   `game.png`
7. Home [[Star]]s: a [[Homeworld]] Hyperstructure 2/1, [[Science]]
   on both Ends, [[Archive]] on both, the strong End's Secondary is +1
   [[Energy]]. Other Stars are [[Wild]]
8. [[Ancient]] deck: 12 Ancients, [[Defense]] 1, 2 and 3, four of each
9. World deck: every [[World]] card, shuffled
10. A [[Technology]] printed on a [[Deck]] card is played by its page,
    an `advanced` one too, with the `advanced` rules it needs
11. Setup: [[StartDraw]]
12. Field schematic: hex is a [[Star]], `[ ]` home Star, each side
    has 2 [[Space]] tiles, one per symbol:
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

#### Notes

1. The layout is shown in `game.png`, see [[index]]
2. [[Void]]s keep the home Stars apart: there is no short route
   between them
3. The `duel` scope is what this game adds to the `core` rules: this
   setup, the [[Deck]] and its technologies, see [[Technology]]
4. The Homeworld pays its Energy when it joins a Science action,
   [[Receive]] is the action for it alone
5. Human and Alien are like white and black in chess: two young
   civilizations with the same cards, only the color and design of the
   Faction tell the decks apart. The [[Ancient]]s guard the Wild
   Stars, see [[Lore]]
