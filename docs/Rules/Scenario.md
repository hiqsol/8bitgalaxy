---
status: draft
scope: core
---

1. **Scenario** is a predefined framework that describes setup for a game session.
2. It can include:
	1. Number of players
	2. Game mode: solo, co-op, competitive
	3. Layout of the game board:
		1. Shape of the game board
		2. Placement of starting systems
		3. Placement of [[Void]]s
	4. List of [[Alien]] cards
3. **First duel**:
	1. 2 players, competitive, no [[Alien]]s
	2. [[Field]]: 7 Stars in rows of 2, 3 and 2: `00 01`, `10 11 12`, `20 21`
	3. Home Stars in opposite corners: `00` and `21`
	4. Every [[Space]] has length 1
	5. Setup: [[StartDraw]]
	6. Field schematic: hex is a [[Star]], `[ ]` home Star, each side has 2 [[Space]] segments, one per symbol:
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

1. First duel layout is shown in `game.png`, see [[index]]
