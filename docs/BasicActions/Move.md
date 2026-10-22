---
status: draft
scope: core
---

1. **Move** is [[BasicAction]]
2. **Move** lets cards that move on their own, [[Range]] above 0,
   change place:
	1. Within one [[Star]] system: from one [[IPS]] slot to other
	2. From one [[Star]] to another
3. Can't finish in [[Space]]
4. **Requirements**: [[Range]] only, no [[Power]]: the [[Distance]] to
   the destination must be within the moving group's Range
5. Several cards can move together in a group, see [[Range]]
	1. Direct participants in the destination don't move, but add
	   their [[Range]] and [[Capacity]] to the moving group
6. [[Ship]]s of the group carry other cards as **cargo**:
	1. The total [[Size]] of cargo is within the group's total
	   [[Capacity]]
	2. Every cargo card needs a Ship in the group whose [[Class]]
	   handles it, see [[Class]]
	3. Any Ship carries [[Hero]]es
	4. Cargo is a target, not a participant
7. Destination [[IPS]] must have a free [[Slot]] for every moving and
   carried card
8. After **Move**: see [[Deplete]]

#### Notes

1. [[Actor]]s move on their own, a **Move** costs only its starter
2. [[Structure]]s have Range 0: they change Slots with [[Manage]]
   Shift or go as cargo, both cost a starter: the player has options
3. E.g. a [[Colony]] is carried only by Culture and Science Ships:
   colony ships
4. Cards waiting at the destination pull the group in: they stay, but
   their Range and Capacity help it arrive
