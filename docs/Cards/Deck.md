---
status: draft
scope: core
---

1. **Deck** lists all cards of the Human [[Faction]], one row per
   [[End]]
2. Columns:
	1. **Level** - [[Level]] + [[ExtraPrice]], as printed on the card
	2. **Class** - [[Class]]: M [[Military]], C [[Culture]], P
	   [[Production]], S [[Science]]
	3. **Primary** - [[PrimaryAbility]]: [[Power]] of the end's class,
	   `X+Y` for [[Actor]]s, other [[Plus]] or [[Technology]]
	4. **Secondary** - [[SecondaryAbility]]: [[Plus]] power `+N` or
	   [[Technology]]
	5. **Prerequisites** - [[Prerequisites]] as level and class pairs,
	   same for both ends
3. Card name is [[Type]] with strong end level and class

| Card | End | Level | Class | Primary | Secondary | Prerequisites |
|------|-----|-------|-------|---------|-----------|---------------|
| Ship 2M | strong | 2+1 | M | 1 | [[Retreat]] | - |
|  | weak | 1+2 | S | 1 | +1 |  |
| Ship 2C | strong | 2+1 | C | 1 | [[Trade]] | - |
|  | weak | 1+2 | M | 1 | +1 |  |
| Ship 2P | strong | 2+1 | P | 1 | [[Extract]] | - |
|  | weak | 1+2 | C | 1 | +1 |  |
| Ship 2S | strong | 2+1 | S | 1 | [[Explore]] | - |
|  | weak | 1+2 | P | 1 | +1 |  |
| Ship 4M | strong | 4+1 | M | 2 | [[Smuggle]] | 1C, 2M |
|  | weak | 3+2 | C | 2 | +1 |  |
| Ship 4C | strong | 4+1 | C | 2 | [[Upgrade]] | 1M, 2C |
|  | weak | 3+2 | M | 2 | +1 |  |
| Ship 4P | strong | 4+1 | P | 2 | [[Upgrade]] | 1S, 2P |
|  | weak | 3+2 | S | 2 | +1 |  |
| Ship 4S | strong | 4+1 | S | 2 | [[Exhaust]] | 1P, 2S |
|  | weak | 3+2 | P | 2 | +1 |  |
| Hero 1M | strong | 1+1 | M | 1 | [[Explore]] | - |
|  | weak | 1+1 | C | 1 | [[Upgrade]] |  |
| Hero 1P | strong | 1+1 | P | 1 | [[Recover]] | - |
|  | weak | 1+1 | S | 1 | [[Recycle]] |  |
| Hero 2M | strong | 2+1 | M | 2 | [[Explore]] | - |
|  | weak | 2+1 | S | 2 | [[Recycle]] |  |
| Hero 2C | strong | 2+1 | C | 2 | [[Recover]] | - |
|  | weak | 2+1 | P | 2 | [[Upgrade]] |  |
| Hero 3M | strong | 3+1 | M | 2 | [[Stealth]] | 1M, 1P |
|  | weak | 3+1 | P | 2 | [[Upgrade]] |  |
| Hero 3C | strong | 3+1 | C | 2 | [[Upgrade]] | 1C, 1S |
|  | weak | 3+1 | S | 2 | [[Navigation]] |  |
| Hero 4M | strong | 4+1 | M | 3 | [[Stealth]] | 2M, 2P |
|  | weak | 4+1 | P | 3 | [[Recover]], [[Upgrade]] |  |
| Hero 4C | strong | 4+1 | C | 3 | [[Recover]], [[Upgrade]] | 2C, 2S |
|  | weak | 4+1 | S | 3 | [[Navigation]] |  |
| Base 2M | strong | 2+1 | M | [[Militarization]], +1 Defense | +1 | - |
|  | weak | 1+1 | M | [[Militarization]] | - |  |
| Base 2C | strong | 2+1 | C | [[Trade]] | +1 | - |
|  | weak | 1+1 | C | [[Trade]] | - |  |
| Base 2P | strong | 2+1 | P | [[Shipyard]] | +1 | - |
|  | weak | 1+1 | P | [[Shipyard]] | - |  |
| Base 2S | strong | 2+1 | S | [[Recycle]] | +1 | - |
|  | weak | 1+1 | S | [[Recycle]] | - |  |
| Base 4M | strong | 4+1 | M | [[Stealth]] | +3 | 2M |
|  | weak | 3+1 | M | [[Stealth]] | - |  |
| Base 4C | strong | 4+1 | C | [[Academy]] | +3 | 2C |
|  | weak | 3+1 | C | [[Academy]] | - |  |
| Base 4P | strong | 4+1 | P | +3 Capacity | +3 | 2P |
|  | weak | 3+1 | P | +1 Capacity | - |  |
| Base 4S | strong | 4+1 | S | [[Navigation]] | +3 | 2S |
|  | weak | 3+1 | S | [[Navigation]] | - |  |
| Colony 2M | strong | 2+1 | M | [[Explore]] | +2 | - |
|  | weak | 1+1 | M | [[Explore]] | - |  |
| Colony 2C | strong | 2+1 | C | [[Academy]] | +2 | - |
|  | weak | 1+1 | C | [[Academy]] | - |  |
| Colony 2P | strong | 2+1 | P | [[Extract]] | +2 | - |
|  | weak | 1+1 | P | [[Extract]] | - |  |
| Colony 2S | strong | 2+1 | S | [[Explore]] | +2 | - |
|  | weak | 1+1 | S | [[Explore]] | - |  |
| Colony 4M | strong | 4+1 | M | [[Militarization]], +3 Defense | +3 | 2M |
|  | weak | 3+1 | M | [[Militarization]], +2 Defense | - |  |
| Colony 4C | strong | 4+1 | C | [[Export]] | +3 | 2C |
|  | weak | 3+1 | C | [[Export]] | - |  |
| Colony 4P | strong | 4+1 | P | [[MegaYard]] | +3 | 2P |
|  | weak | 3+1 | P | [[MegaYard]] | - |  |
| Colony 4S | strong | 4+1 | S | +3 Range | +3 | 2S |
|  | weak | 3+1 | S | +1 Range | - |  |

#### Notes

1. Imported from the legacy code
   (`src/legacy/js/Model/Decks/Human.js`), to be reviewed
2. Patterns:
	1. [[Actor]]s: Primary is power, Secondary is `+1` or technology,
	   ends have different classes
	2. [[Structure]]s: Primary is technology or a non-power [[Plus]]
	   at both ends, Secondary is power at strong end only, both ends
	   have the same class
	3. [[Ship]] ends have equal Level + ExtraPrice, so [[Size]]
	   doesn't change with rotation
3. Technology classes and scopes are in [[Technology]]
4. [[Explore]] on a [[Military]] end is printed as **Recon**
