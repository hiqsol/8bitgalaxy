---
status: draft
scope: duel
---

1. **Deck** lists the cards of the Human and the Alien [[Faction]],
   one row per [[End]]: the two are symmetric, the same cards by
   values, only the color and design of the Faction differ
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
4. **Deck** holds 56 cards, counted by the [[Level]] of the strong
   End:
	1. Up to Level 2: 8 Ships, 8 [[Tool]]s and 4 each of Hero, Base
	   and Colony
	2. Level 4: 4 each of Ship, Hero, Base and Colony
	3. Level 6: 2 each of Ship and Hero, and 4 Hyperstructures
	4. Level 8: 1 each of Ship and Hero, and 2 Hyperstructures
5. A two-ended card has an even Level on its strong End and one less
   on its weak End: 2/1, 4/3, 6/5, 8/7
6. Every [[Class]] has as many ends at each Level as any other Class:
   7 at Level 1, 4 at Levels 2 to 4, 2 at 5 and 6, 1 at 7 and 8
7. Every Class has one Level 8 card, its **crown**: Ship 8M, Hero 8S,
   Hyperstructure 8P and Hyperstructure 8C
8. **Starting cards** are 4 one-ended Ships 1/0, one of each Class,
   the weak End blank: Level 1, Primary 1, nothing else, see
   [[StartDraw]]
9. **Tools** are 8 one-ended cards 1/0, two of each Class, made like
   the starting cards, see [[Tool]]

| Card | End | Level | Class | Primary | Secondary | Prerequisites |
|------|-----|-------|-------|---------|-----------|---------------|
| Ship 1M | strong | 1 | M | 1 | - | - |
|  | weak | - | - | - | - |  |
| Ship 1C | strong | 1 | C | 1 | - | - |
|  | weak | - | - | - | - |  |
| Ship 1P | strong | 1 | P | 1 | - | - |
|  | weak | - | - | - | - |  |
| Ship 1S | strong | 1 | S | 1 | - | - |
|  | weak | - | - | - | - |  |
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
| Ship 6M | strong | 6+1 | M | 3 | TBD | 3S, 4M |
|  | weak | 5+2 | S | 3 | +1 |  |
| Ship 6P | strong | 6+1 | P | 3 | TBD | 3C, 4P |
|  | weak | 5+2 | C | 3 | +1 |  |
| Ship 8M | strong | 8+1 | M | 4 | TBD | 4C, 4S, 6M |
|  | weak | 7+2 | S | 4 | +1 |  |
| Hero 2M | strong | 2+1 | M | 2 | [[Explore]] | - |
|  | weak | 1+1 | C | 2 | [[Upgrade]] |  |
| Hero 2C | strong | 2+1 | C | 2 | [[Recover]] | - |
|  | weak | 1+1 | P | 2 | [[Upgrade]] |  |
| Hero 2P | strong | 2+1 | P | 2 | [[Recover]] | - |
|  | weak | 1+1 | S | 2 | [[Recycle]] |  |
| Hero 2S | strong | 2+1 | S | 2 | [[Recycle]] | - |
|  | weak | 1+1 | M | 2 | [[Explore]] |  |
| Hero 4M | strong | 4+1 | M | 3 | [[Stealth]] | 1P, 2M |
|  | weak | 3+1 | P | 3 | [[Recover]], [[Upgrade]] |  |
| Hero 4C | strong | 4+1 | C | 3 | [[Recover]], [[Upgrade]] | 1S, 2C |
|  | weak | 3+1 | S | 3 | [[Navigation]] |  |
| Hero 4P | strong | 4+1 | P | 3 | [[Upgrade]] | 1M, 2P |
|  | weak | 3+1 | M | 3 | [[Stealth]] |  |
| Hero 4S | strong | 4+1 | S | 3 | [[Navigation]] | 1C, 2S |
|  | weak | 3+1 | C | 3 | [[Upgrade]] |  |
| Hero 6C | strong | 6+1 | C | 4 | TBD | 3M, 4C |
|  | weak | 5+1 | M | 4 | TBD |  |
| Hero 6S | strong | 6+1 | S | 4 | TBD | 3P, 4S |
|  | weak | 5+1 | P | 4 | TBD |  |
| Hero 8S | strong | 8+1 | S | 5 | TBD | 4M, 4P, 6S |
|  | weak | 7+1 | M | 5 | TBD |  |
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
| Colony 4M | strong | 4+1 | M | [[Militarization]], +3 Defense | +4 | 2M |
|  | weak | 3+1 | M | [[Militarization]], +2 Defense | - |  |
| Colony 4C | strong | 4+1 | C | [[Export]] | +4 | 2C |
|  | weak | 3+1 | C | [[Export]] | - |  |
| Colony 4P | strong | 4+1 | P | [[MegaYard]] | +4 | 2P |
|  | weak | 3+1 | P | [[MegaYard]] | - |  |
| Colony 4S | strong | 4+1 | S | +3 Range | +4 | 2S |
|  | weak | 3+1 | S | +1 Range | - |  |
| Hyperstructure 6M | strong | 6+1 | M | TBD | +6 | 4M |
|  | weak | 5+1 | M | TBD | - |  |
| Hyperstructure 6P | strong | 6+1 | P | TBD | +6 | 4P |
|  | weak | 5+1 | P | TBD | - |  |
| Hyperstructure 6C | strong | 6+1 | C | TBD | +5 | 4C |
|  | weak | 5+1 | C | TBD | - |  |
| Hyperstructure 6S | strong | 6+1 | S | TBD | +5 | 4S |
|  | weak | 5+1 | S | TBD | - |  |
| Hyperstructure 8C | strong | 8+1 | C | TBD | +8 | 4M, 4P, 6C |
|  | weak | 7+1 | C | TBD | - |  |
| Hyperstructure 8P | strong | 8+1 | P | TBD | +7 | 4C, 4S, 6P |
|  | weak | 7+1 | P | TBD | - |  |
| Tool 1M | strong | 1 | M | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1M | strong | 1 | M | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1C | strong | 1 | C | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1C | strong | 1 | C | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1P | strong | 1 | P | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1P | strong | 1 | P | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1S | strong | 1 | S | 1 | - | - |
|  | weak | - | - | - | - |  |
| Tool 1S | strong | 1 | S | 1 | - | - |
|  | weak | - | - | - | - |  |

#### Notes

1. Cards without TBD are imported from the legacy code
   (`src/legacy/js/Model/Decks/Human.js`), to be reviewed, except the
   Ships 1/0 and the values set by the patterns; TBD is a value still
   to design, the TBD ends are for the `+Draw` [[Plus]] and planned
   technologies, see [[Technology]]
2. Patterns:
	1. [[Actor]]s: Primary is power, Secondary is `+1` or technology,
	   ends have different classes
	2. [[Structure]]s: Primary is technology or a non-power [[Plus]]
	   at both ends, Secondary is power at strong end only, both ends
	   have the same class: a [[Depleted]] structure keeps the
	   technology but gives no [[Power]]
	3. [[Ship]] ends have equal Level + ExtraPrice, so [[Size]]
	   doesn't change with rotation
	4. [[Ship]] Primary is half the strong Level, [[Hero]] Primary
	   one more, at both ends
	5. [[Prerequisites]] below the crowns: none up to Level 2, then
	   the strong Level − 2 of the strong end's Class, plus for an
	   [[Actor]] the strong Level − 3 of the weak end's Class
	6. A crown needs Level 6 of its Class and Level 4 of two other
	   Classes: three participants
	7. [[Price]] of a card is its strong Level + 1: 3, 5, 7, 9
	8. [[Base]] Secondary is the strong Level − 1 and [[Colony]]
	   Secondary equals the strong Level
3. From Level 4 each strong Level holds half the cards of the one
   below, like the Trade Deck of Star Realms above cost 2: big cards
   are few, decisive and contested. The cards 1/0, 4 Ships and 8
   Tools, are added for the starting deck
4. Ends balance the Classes, not strong ends: an [[Actor]] gives a
   Level of its weak end's Class too, for [[Prerequisites]] and
   [[Singularity]]
5. Ship and Hero climb to Level 8 by [[Upgrade]]. Base and Colony end
   at Level 4; the six Structure cards at Levels 6 and 8 are
   [[Hyperstructure]]s built by their own rule
6. The crowns are the cards of [[Singularity]]. Reaching all four
   takes both [[Origin]]s and both [[Hub]]s. A [[World]], at most
   Level 6, stays below them
7. Starting cards and [[Tool]]s are like Scouts and Vipers of Star
   Realms: the Ships 1/0 with Ship 2M, 2C, 2P, 2S are the 8 Ships of
   the starting deck, see [[StartDraw]]. The Tools are in the Deck:
   with the same back as the other cards of the [[Faction]] a shuffle
   doesn't tell them apart
8. The legacy Heroes take Levels like the other cards, each keeps its
   ends and abilities, the strong ends give Levels 2 and 4 one of
   each Class: legacy Hero 1M is 2M, 1P is 2P, 2M is 2S, 2C is 2C,
   3M is 4P, 3C is 4S, 4M is 4M, 4C is 4C; Primary and Prerequisites
   follow the patterns
9. Technology classes and scopes are in [[Technology]]
10. [[Explore]] on a [[Military]] end is printed as **Recon**
11. Human and Alien are for even, symmetric games: every technology
    of the Deck serves both. Later Factions will be asymmetric, with
    decks and technologies of their own
12. A combined print is one [[Ability]]: "Recover, Upgrade" of Hero
    4M weak and Hero 4C strong, "Militarization, +1 Defense" of Base
    2M
