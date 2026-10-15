---
status: draft
scope: core
---

1. **Distance** of a route is the sum of lengths of all its segments but the first one
2. A route is a chain of [[Field]] segments, each sharing a common side with the next
3. Segment lengths:
	1. [[Star]] - 1
	2. [[Space]] - its length property
4. **Distance** within one [[Star]] is 1

#### Notes

1. Examples:
	1. Star → Space(1) → Star = 0 + 1 + 1 = 2
	2. Star → Space(2) → Space(1) → Star = 0 + 2 + 1 + 1 = 4
