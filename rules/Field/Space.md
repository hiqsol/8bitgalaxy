---
status: draft
scope: core
aliases: [InterStellar Space, Length, Space bag]
---

1. **Space** is a [[Field]] [[Tile]], see [[Component]]
2. **Space** represents **Interstellar Space** and separates [[Star]]
   from each other
3. Each [[Star]] side has 2 **Space** [[Tile]]s, so a [[Star]] has 12,
   named by o'clock bearing:
	1. 1-2 upper right side, 3-4 right, 5-6 lower right, 7-8 lower
	   left, 9-10 left, 11-12 upper left
	2. A [[Tile]] on a side shared by two [[Star]]s belongs to both:
	   1↔8, 2↔7, 3↔10, 4↔9, 5↔12, 6↔11
	3. Each [[Tile]] is separate: explored and passed on its own, so
	   two [[Star]]s are linked by 2 routes
	4. [[Tile]]s connect where they touch, along an edge or at a
	   corner point: a **Space** connects to the [[Star]]s it borders,
	   to the other **Space** of its side and to the **Spaces**
	   meeting at its corners
4. A **Space** is [[Hidden]] until its [[Tile]] is laid:
	1. At the beginning of the game only the [[Tile]]s the
	   [[Scenario]] places lie on the [[Field]]
	2. The other **Space** [[Tile]]s are in the **Space bag**
	3. Revealing a [[Hidden]] **Space** lays a [[Tile]] drawn at
	   random from the **Space bag**, the [[Scenario]] sets how
5. [[Card]]s can't stop in a **Space**, and a route can't pass a
   [[Hidden]] one, see [[Distance]]
6. **Space** [[Tile]]s have multiple [[Property|Properties]]:
	1. [[ExtraPrice]] - printed on the [[Front]], the [[Price]] is
	   **Length** + [[ExtraPrice]]
	2. **Type**
	3. **Length** - 1 to 8, the **Space**'s [[Level]], independent of
	   [[Type]]
	4. [[Ability]] - given by its [[Type]]
7. [[Type]]s of **Space**:
	1. Normal
	2. [[Asteroids]]
	3. [[BlackHole|Black hole]]
	4. [[Void]]
	5. [[Supernova]]
	6. [[HyperPass|Hyper pass]]
	7. [[Relic]]

#### Notes

1. A [[Hidden]] **Space** is unknown: its **Length**, [[Type]] and
   [[Price]] are found together, when its [[Tile]] is laid
2. **Length** goes up to 8, like [[Level]] and [[Range]]: long
   **Spaces** are rare, as high [[Level]]s in the [[Deck]]
3. Routes go around a [[Star]] through **Spaces** alone: passing a
   [[Star]] costs its [[Level]], going around costs the **Spaces**
4. A **Space** [[Tile]] is a pressboard piece, the **Space bag** holds
   the ones not laid
5. Better [[Type]]s cost more to [[Explore]]: a higher [[ExtraPrice]]
6. No [[Class]]: a **Space** is valued by its **Length** and its
   [[Type]] alone
