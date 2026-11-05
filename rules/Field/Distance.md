---
status: polish
scope: core
---

1. **Distance** of a route is the sum of [[Length]]s of all its
   [[Tile]]s but the first one
2. A route is a chain of [[Field]] [[Tile]]s, each connected to the
   next, see [[Space]]
3. [[Tile]] [[Length]]s:
	1. [[Star]] - 1
	2. [[Space]] - its [[Length]] [[Property]]
4. **Distance** within one [[Star]] is 0: an [[Action]] inside one
   [[Star]] needs no [[Range]]

#### Notes

1. Examples:
	1. [[Star]] → [[Space]](1) → [[Star]] = 0 + 1 + 1 = 2
	2. [[Star]] → [[Space]](2) → [[Space]](1) → [[Star]] = 0 + 2 + 1 +
	   1 = 4
