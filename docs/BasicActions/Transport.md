---
status: draft
scope: core
---

1. **Transport** is [[BasicAction]] of any [[Class]], within the table below
2. **Transport** allows to [[Move]] **cargo** with [[Ship]]s
3. **Cargo** can be: cards, [[Materials]]
4. **Requirements**:
	1. [[Range]]
	2. [[Capacity]]
5. Total [[Capacity]] of the moving group is sum of capacities of its cards
6. [[Hero]] can increase [[Capacity]] or [[Range]], but can't transport alone
7. Type limitations in the table below
8. Transported cards are cargo, not participants
9. Moving direct participants and transported cards are not depleted after
   Transport
10. Supporters are depleted as usual
11. Destination [[IPS]] must have a free [[Slot]] for every transported card

| Object    | Mil | Cul | Pro | Sci |
| --------- | --- | --- | --- | --- |
| Base      |     |     | +   | +   |
| Colony    |     | +   |     | +   |
| Ship      | +   |     | +   | +   |
| Hero      | +   | +   | +   | +   |
| Materials | +   | +   | +   | +   |

#### Notes

1. e.g. [[Colony]] can only be transported with [[Culture]] and [[Science]]
   ships
2. Logic behind the table is following:
	1. [[Military]] ships can convoy cards that can move on itself
	2. [[Culture]] (Colonization) ships can transport [[Social]] cards
	3. [[Production]] ships can transport [[Industrial]] cards
	4. [[Science]] ships can transport anything
	5. [[Hero]]s and [[Materials]] can be transported with any ships
