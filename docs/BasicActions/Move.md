---
status: draft
scope: core
---

1. **Move** is [[BasicAction]]
2. **Move** allows to move card(s):
	1. Within one [[Star]] system: from one [[IPS]] slot to other
	2. From one [[Star]] to another
3. Can't finish in [[Space]]
4. [[Distance]] to the destination must be within [[Range]]
	1. Range can be increased with [[Support]]
5. Destination [[IPS]] must have a free [[Slot]] for every moving card
6. Several cards can move together in group
	1. [[Range]] of the group is the sum of the ranges of the direct participants, see [[Range]]
7. Moving [[Actor]]s are not depleted after **Move**, see [[Deplete]]
8. Moving cards keep their [[End]], only [[Manage]] rotates it
9. The route obeys [[Pinning]]
