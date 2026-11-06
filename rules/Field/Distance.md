---
status: polish
scope: core
---

1. **Distance** of a route is the sum of all its [[Tile]]s but the
   first one: a [[Star]] counts its [[Level]], a [[Space]] its
   [[Length]]
2. A route is a chain of [[Field]] [[Tile]]s, each connected to the
   next, see [[Space]]

#### Notes

1. **Distance** within one [[Star]] is 0, a route of one [[Tile]]: an
   [[Action]] inside one [[Star]] needs no [[Range]]
2. Examples with [[Star]]s of [[Level]] 1:
	1. [[Star]] → [[Space]](1) → [[Star]] = 0 + 1 + 1 = 2
	2. [[Star]] → [[Space]](2) → [[Space]](1) → [[Star]] = 0 + 2 + 1 +
	   1 = 4
	3. [[Star]] → [[Space]](1) → [[Star]] → [[Space]](3) → [[Star]] =
	   0 + 1 + 1 + 3 + 1 = 6
