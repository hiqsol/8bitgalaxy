---
status: polish
scope: core
aliases: [Cargo]
---

1. **Move** is [[BasicAction]]
2. **Move** lets [[Card]]s that move on their own, [[Range]] above 0,
   change place:
	1. Within one [[Star]]: from one [[Slot]] to another
	2. From one [[Star]] to another
3. **Requirements**: [[Range]] only, no [[Power]]
4. Several [[Card]]s can move together in a [[Group]], see [[Range]]
	1. [[Direct participant]]s in the [[Destination]] don't move, but
	   add their [[Capacity]] to the moving [[Group]]
5. [[Ship]]s of the [[Group]] carry other [[Card]]s as **cargo**:
	1. The total [[Size]] of **Cargo** is within the [[Group]]'s total
	   [[Capacity]]
	2. Every **Cargo** [[Card]] needs a [[Ship]] in the [[Group]]
	   whose [[Class]] handles it
6. Its [[Unit]] [[Direct participant]]s don't [[Deplete]]: they hold
   their [[Slot]]s, the moving ones in the [[Destination]]

#### Notes

1. E.g. a [[Colony]] is carried only by [[Culture]] and [[Science]]
   [[Ship]]s: colony ships
