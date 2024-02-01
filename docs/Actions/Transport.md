1. **Transport** action allows [[Move]] cargo with [[Ship]]s
2. Cargo can be: cards, reserves
3. Requirements:
     - [[Range]]
     - [[Capacity]]
4. Total [[Capacity]] of the group is sum of capacities of direct participants
5. [[Hero]] can increase [[Capacity]] or [[Range]], but can't transport alone
6. Type limitations in table below

| Object    | Mil | Soc | Ind | Sci |
|-----------|-----|-----|-----|-----|
| Hero      |  +  |  +  |     |  +  |
| Ship      |  +  |     |  +  |  +  |
| Colony    |     |  +  |     |  +  |
| Base      |     |     |  +  |  +  |
| Materials |  +  |  +  |  +  |  +  |

#### Notes

- e.g. [[Colony]] can only be transported with [[Social]] ships
- Logic behind the table is following:
	- Military ships can convoy cards that can move on itself
	- Colonization (social) ships can transport social cards
	- Industrial ships can transport industrial cards
	- Scientific ships can transport anything
	- Materials can be transported with any ships
