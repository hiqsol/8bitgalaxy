---
status: draft
scope: core
---

1. **Range** is implicit card [[Property]] derived from [[Level]] and
   [[Type]]
2. **Range** is the [[Distance]] card can cover
3. Mobility types:
	1. Moving - can move on itself, **Range** > 0: [[Ship]], [[Hero]]
	2. Carried - can't move on itself but can be cargo of a [[Move]],
	   **Range** = 0: [[Base]], [[Colony]]
	3. Immovable - can not be moved: [[Hyperstructure]]
4. Default value:
	1. Current [[Level]] for moving cards
	2. 0 for [[Structure]]
5. **Range** of a group, the participants from one [[IPS]], is the sum
   of the Ranges of its cards, plus Range from [[Support]], see
   [[PerformAction]]

#### Notes

1. Big groups go far: [[Pinning]], [[Void]] and hidden [[Space]] stop
   them
