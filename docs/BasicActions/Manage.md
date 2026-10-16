---
status: draft
scope: core
---

1. **Manage** is [[BasicAction]] of any [[Class]], within the table below
2. **Manage** allows to manipulate cards:
	1. **Rotate** ([[End]]):
		1. [[Structure]] to strong end - [[Restore]]
		2. [[Structure]] to weak end - [[Deplete]]
		3. [[Actor]] to the other end - switch its [[Class]]
	2. **Shift**:
		1. Between [[Slot]]s within the same [[IPS]]
			1. [[Action]] has to be directed to the [[Star]]
		2. Between piles within [[Laboratory]] or [[Factory]] row
			1. **Direction**: to corresponding [[BuildingFacility]]
3. **Cost**: 1 resource per operation with card
4. **Manage** action can be done with any power, but:
	1. only the type of power given by the **starter**, see [[PerformAction]]
	2. with limitations, see table below

| Object    | Mil | Cul | Pro | Sci |
|-----------|-----|-----|-----|-----|
| Base      |     |     |  +  |  +  |
| Colony    |     |  +  |     |  +  |
| Ship      |  +  |     |  +  |  +  |
| Hero      |  +  |  +  |     |  +  |

#### Notes

1. E.g. [[Military]] power allows manage [[Hero]] and [[Ship]] cards
2. Movement keeps the card's [[End]], only **Manage** rotates it
