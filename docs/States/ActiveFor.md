---
status: draft
scope: core
---

1. **Active for** is a card [[State]] relative to a [[Faction]]
2. Card is **active for** faction when:
	1. It is not [[Damaged]]
	2. It is [[ControlledBy]] the faction
	3. It is on the [[Field]], in [[Hand]] or in [[History]]
3. A [[Hidden]] card is active too, it is revealed to count for the [[Goal]]
   paths
4. Cards in [[Reserve]], [[Discard]], [[Factory]] and [[Laboratory]] are not
   **active**
5. Used by:
	1. [[PerformAction]]: participants are active cards
	2. The [[Goal]] paths: [[CulturePoints]] and [[Singularity]] count active
	   cards

#### Notes

1. [[History]] cards are out of play but still active: past greatness counts
