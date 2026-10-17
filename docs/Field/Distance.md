---
status: draft
scope: core
---

1. **Distance** of a route is the sum of lengths of all its segments but the first one
2. A route is a chain of [[Field]] segments, each connected to the next, see [[Space]]
3. Segment lengths:
	1. [[Star]] - 1
	2. [[Space]] - its length property
4. **Distance** within one [[Star]] is 0: an action inside one Star needs no [[Range]]

#### Notes

1. Examples:
	1. Star → Space(1) → Star = 0 + 1 + 1 = 2
	2. Star → Space(2) → Space(1) → Star = 0 + 2 + 1 + 1 = 4
	3. Within one Star = 0: the route is a single segment
