---
status: draft
scope: duel
---

1. **Duel** is the first [[Scenario]], the minimal playable game
2. 2 players, competitive, no [[GalaxyDeck]]
3. Each player has the Human [[Deck]], see [[StartDraw]]
4. [[Field]]: 7 Stars in rows of 2, 3 and 2: `00 01`, `10 11 12`,
   `20 21`
5. Home Stars in opposite corners: `00` and `21`
6. Every [[Space]] has length 1, [[Void]]s are placed as in
   `game.png`
7. Home [[Star]]s: a [[Hyperstructure|Homeworld]], its [[Ability]]
   gives 1 [[Energy]]. Other Stars are [[Wild]]
8. [[Alien]] deck: 12 Aliens, [[Defense]] 1, 2 and 3, four of each
9. Setup: [[StartDraw]]
10. Field schematic: hex is a [[Star]], `[ ]` home Star, each side
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
   setup, the Human [[Deck]] and its technologies, see [[Technology]]
