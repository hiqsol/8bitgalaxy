---
status: issues
scope: duel
aliases: [Crown, Starting cards]
---

1. **Deck** lists the [[Card]]s of the Human and the Alien
   [[Faction]], one row per [[End]]: the two are symmetric, the same
   [[Card]]s by values, only the color and design of the [[Faction]]
   differ
2. Columns:
	1. **Level** - [[Level]] + [[ExtraPrice]], as printed on the
	   [[Card]]
	2. **Class** - [[Class]]: M [[Military]], C [[Culture]], P
	   [[Production]], S [[Science]]
	3. **Primary** - [[PrimaryAbility]]: [[Power]] of the [[End]]'s
	   [[Class]], `X+Y` for [[Actor]]s, other [[Plus]] or
	   [[Technology]]
	4. **Secondary** - [[SecondaryAbility]]: [[Plus]] [[Power]] `+N`
	   or [[Technology]]
	5. **Prerequisites** - [[Prerequisites]] as [[Level]] and
	   [[Class]] pairs, same for both [[End]]s
3. [[Card]] name is [[Type]] with [[Strong]] [[End]] [[Level]] and
   [[Class]]
4. **Deck** holds 56 [[Card]]s, counted by the [[Level]] of the
   [[Strong]] [[End]]:
	1. Up to [[Level]] 2: 8 [[Ship]]s, 8 [[Tool]]s and 4 each of
	   [[Hero]], [[Base]] and [[Colony]]
	2. [[Level]] 4: 4 each of [[Ship]], [[Hero]], [[Base]] and
	   [[Colony]]
	3. [[Level]] 6: 2 each of [[Ship]] and [[Hero]], and 4
	   [[Hyperstructure]]s
	4. [[Level]] 8: 1 each of [[Ship]] and [[Hero]], and 2
	   [[Hyperstructure]]s
5. A two-ended [[Card]] has an even [[Level]] on its [[Strong]]
   [[End]] and one less on its [[Weak]] [[End]]: 2/1, 4/3, 6/5, 8/7
6. Every [[Class]] has as many [[End]]s at each [[Level]] as any other
   [[Class]]: 7 at [[Level]] 1, 4 at [[Level]]s 2 to 4, 2 at 5 and 6,
   1 at 7 and 8
7. Every [[Class]] has one [[Level]] 8 [[Card]], its **crown**:
   [[Ship]] 8M, [[Hero]] 8S, [[Hyperstructure]] 8P and
   [[Hyperstructure]] 8C
8. **Starting cards** are 4 one-ended [[Ship]]s 1/0, one of each
   [[Class]], the [[Weak]] [[End]] blank: [[Level]] 1, Primary 1,
   nothing else, see [[StartDraw]]
9. **Tools** are 8 one-ended [[Card]]s 1/0, two of each [[Class]],
   made like the **Starting cards**, see [[Tool]]

| [[Card]] | [[End]] | [[Level]] | [[Class]] | Primary | Secondary | [[Prerequisites]] |
|------|-----|-------|-------|---------|-----------|---------------|
| [[Ship]] 1M | [[Strong]] | 1 | M | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Ship]] 1C | [[Strong]] | 1 | C | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Ship]] 1P | [[Strong]] | 1 | P | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Ship]] 1S | [[Strong]] | 1 | S | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Ship]] 2M | [[Strong]] | 2+1 | M | 1 | [[Retreat]] | - |
|  | [[Weak]] | 1+2 | S | 1 | +1 |  |
| [[Ship]] 2C | [[Strong]] | 2+1 | C | 1 | [[Trade]] | - |
|  | [[Weak]] | 1+2 | M | 1 | +1 |  |
| [[Ship]] 2P | [[Strong]] | 2+1 | P | 1 | [[Extract]] | - |
|  | [[Weak]] | 1+2 | C | 1 | +1 |  |
| [[Ship]] 2S | [[Strong]] | 2+1 | S | 1 | [[Explore]] | - |
|  | [[Weak]] | 1+2 | P | 1 | +1 |  |
| [[Ship]] 4M | [[Strong]] | 4+1 | M | 2 | [[Smuggle]] | 1C, 2M |
|  | [[Weak]] | 3+2 | C | 2 | +1 |  |
| [[Ship]] 4C | [[Strong]] | 4+1 | C | 2 | [[Upgrade]] | 1M, 2C |
|  | [[Weak]] | 3+2 | M | 2 | +1 |  |
| [[Ship]] 4P | [[Strong]] | 4+1 | P | 2 | [[Upgrade]] | 1S, 2P |
|  | [[Weak]] | 3+2 | S | 2 | +1 |  |
| [[Ship]] 4S | [[Strong]] | 4+1 | S | 2 | [[Exhaust]] | 1P, 2S |
|  | [[Weak]] | 3+2 | P | 2 | +1 |  |
| [[Ship]] 6M | [[Strong]] | 6+1 | M | 3 | TBD | 3S, 4M |
|  | [[Weak]] | 5+2 | S | 3 | +1 |  |
| [[Ship]] 6P | [[Strong]] | 6+1 | P | 3 | TBD | 3C, 4P |
|  | [[Weak]] | 5+2 | C | 3 | +1 |  |
| [[Ship]] 8M | [[Strong]] | 8+1 | M | 4 | TBD | 4C, 4S, 6M |
|  | [[Weak]] | 7+2 | S | 4 | +1 |  |
| [[Hero]] 2M | [[Strong]] | 2+1 | M | 2 | [[Explore]] | - |
|  | [[Weak]] | 1+1 | C | 2 | [[Upgrade]] |  |
| [[Hero]] 2C | [[Strong]] | 2+1 | C | 2 | [[Recover]] | - |
|  | [[Weak]] | 1+1 | P | 2 | [[Upgrade]] |  |
| [[Hero]] 2P | [[Strong]] | 2+1 | P | 2 | [[Recover]] | - |
|  | [[Weak]] | 1+1 | S | 2 | [[Recycle]] |  |
| [[Hero]] 2S | [[Strong]] | 2+1 | S | 2 | [[Recycle]] | - |
|  | [[Weak]] | 1+1 | M | 2 | [[Explore]] |  |
| [[Hero]] 4M | [[Strong]] | 4+1 | M | 3 | [[Stealth]] | 1P, 2M |
|  | [[Weak]] | 3+1 | P | 3 | [[Recover]], [[Upgrade]] |  |
| [[Hero]] 4C | [[Strong]] | 4+1 | C | 3 | [[Recover]], [[Upgrade]] | 1S, 2C |
|  | [[Weak]] | 3+1 | S | 3 | [[Navigation]] |  |
| [[Hero]] 4P | [[Strong]] | 4+1 | P | 3 | [[Upgrade]] | 1M, 2P |
|  | [[Weak]] | 3+1 | M | 3 | [[Stealth]] |  |
| [[Hero]] 4S | [[Strong]] | 4+1 | S | 3 | [[Navigation]] | 1C, 2S |
|  | [[Weak]] | 3+1 | C | 3 | [[Upgrade]] |  |
| [[Hero]] 6C | [[Strong]] | 6+1 | C | 4 | TBD | 3M, 4C |
|  | [[Weak]] | 5+1 | M | 4 | TBD |  |
| [[Hero]] 6S | [[Strong]] | 6+1 | S | 4 | TBD | 3P, 4S |
|  | [[Weak]] | 5+1 | P | 4 | TBD |  |
| [[Hero]] 8S | [[Strong]] | 8+1 | S | 5 | TBD | 4M, 4P, 6S |
|  | [[Weak]] | 7+1 | M | 5 | TBD |  |
| [[Base]] 2M | [[Strong]] | 2+1 | M | [[Militarization]], +1 [[Defense]] | +1 | - |
|  | [[Weak]] | 1+1 | M | [[Militarization]] | - |  |
| [[Base]] 2C | [[Strong]] | 2+1 | C | [[Trade]] | +1 | - |
|  | [[Weak]] | 1+1 | C | [[Trade]] | - |  |
| [[Base]] 2P | [[Strong]] | 2+1 | P | [[Shipyard]] | +1 | - |
|  | [[Weak]] | 1+1 | P | [[Shipyard]] | - |  |
| [[Base]] 2S | [[Strong]] | 2+1 | S | [[Recycle]] | +1 | - |
|  | [[Weak]] | 1+1 | S | [[Recycle]] | - |  |
| [[Base]] 4M | [[Strong]] | 4+1 | M | [[Stealth]] | +3 | 2M |
|  | [[Weak]] | 3+1 | M | [[Stealth]] | - |  |
| [[Base]] 4C | [[Strong]] | 4+1 | C | [[Academy]] | +3 | 2C |
|  | [[Weak]] | 3+1 | C | [[Academy]] | - |  |
| [[Base]] 4P | [[Strong]] | 4+1 | P | +3 [[Capacity]] | +3 | 2P |
|  | [[Weak]] | 3+1 | P | +1 [[Capacity]] | - |  |
| [[Base]] 4S | [[Strong]] | 4+1 | S | [[Navigation]] | +3 | 2S |
|  | [[Weak]] | 3+1 | S | [[Navigation]] | - |  |
| [[Colony]] 2M | [[Strong]] | 2+1 | M | [[Explore]] | +2 | - |
|  | [[Weak]] | 1+1 | M | [[Explore]] | - |  |
| [[Colony]] 2C | [[Strong]] | 2+1 | C | [[Academy]] | +2 | - |
|  | [[Weak]] | 1+1 | C | [[Academy]] | - |  |
| [[Colony]] 2P | [[Strong]] | 2+1 | P | [[Extract]] | +2 | - |
|  | [[Weak]] | 1+1 | P | [[Extract]] | - |  |
| [[Colony]] 2S | [[Strong]] | 2+1 | S | [[Explore]] | +2 | - |
|  | [[Weak]] | 1+1 | S | [[Explore]] | - |  |
| [[Colony]] 4M | [[Strong]] | 4+1 | M | [[Militarization]], +3 [[Defense]] | +4 | 2M |
|  | [[Weak]] | 3+1 | M | [[Militarization]], +2 [[Defense]] | - |  |
| [[Colony]] 4C | [[Strong]] | 4+1 | C | [[Export]] | +4 | 2C |
|  | [[Weak]] | 3+1 | C | [[Export]] | - |  |
| [[Colony]] 4P | [[Strong]] | 4+1 | P | [[MegaYard]] | +4 | 2P |
|  | [[Weak]] | 3+1 | P | [[MegaYard]] | - |  |
| [[Colony]] 4S | [[Strong]] | 4+1 | S | +3 [[Range]] | +4 | 2S |
|  | [[Weak]] | 3+1 | S | +1 [[Range]] | - |  |
| [[Hyperstructure]] 6M | [[Strong]] | 6+1 | M | TBD | +6 | 4M |
|  | [[Weak]] | 5+1 | M | TBD | - |  |
| [[Hyperstructure]] 6P | [[Strong]] | 6+1 | P | TBD | +6 | 4P |
|  | [[Weak]] | 5+1 | P | TBD | - |  |
| [[Hyperstructure]] 6C | [[Strong]] | 6+1 | C | TBD | +5 | 4C |
|  | [[Weak]] | 5+1 | C | TBD | - |  |
| [[Hyperstructure]] 6S | [[Strong]] | 6+1 | S | TBD | +5 | 4S |
|  | [[Weak]] | 5+1 | S | TBD | - |  |
| [[Hyperstructure]] 8C | [[Strong]] | 8+1 | C | TBD | +8 | 4M, 4P, 6C |
|  | [[Weak]] | 7+1 | C | TBD | - |  |
| [[Hyperstructure]] 8P | [[Strong]] | 8+1 | P | TBD | +7 | 4C, 4S, 6P |
|  | [[Weak]] | 7+1 | P | TBD | - |  |
| [[Tool]] 1M | [[Strong]] | 1 | M | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1M | [[Strong]] | 1 | M | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1C | [[Strong]] | 1 | C | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1C | [[Strong]] | 1 | C | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1P | [[Strong]] | 1 | P | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1P | [[Strong]] | 1 | P | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1S | [[Strong]] | 1 | S | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |
| [[Tool]] 1S | [[Strong]] | 1 | S | 1 | - | - |
|  | [[Weak]] | - | - | - | - |  |

#### Notes

1. [[Card]]s without TBD are imported from the legacy code
   (`src/legacy/js/Model/Decks/Human.js`), to be reviewed, except the
   [[Ship]]s 1/0 and the values set by the patterns; TBD is a value
   still to design, the TBD [[End]]s are for the `+Draw` [[Plus]] and
   planned [[Technology|Technologies]], see [[Technology]]
2. Patterns:
	1. [[Actor]]s: Primary is [[Power]], Secondary is `+1` or
	   [[Technology]], [[End]]s have different [[Class]]es
	2. [[Structure]]s: Primary is [[Technology]] or a non-[[Power]]
	   [[Plus]] at both [[End]]s, Secondary is [[Power]] at [[Strong]]
	   [[End]] only, both [[End]]s have the same [[Class]]: a
	   [[Depleted]] [[Structure]] keeps the [[Technology]] but gives
	   no [[Power]]
	3. [[Ship]] [[End]]s have equal [[Level]] + ExtraPrice, so
	   [[Size]] doesn't change with rotation
	4. [[Ship]] Primary is half the [[Strong]] [[Level]], [[Hero]]
	   Primary one more, at both [[End]]s
	5. [[Prerequisites]] below the **Crowns**: none up to [[Level]] 2,
	   then the [[Strong]] [[Level]] − 2 of the [[Strong]] [[End]]'s
	   [[Class]], plus for an [[Actor]] the [[Strong]] [[Level]] − 3
	   of the [[Weak]] [[End]]'s [[Class]]
	6. A **Crown** needs [[Level]] 6 of its [[Class]] and [[Level]] 4
	   of two other [[Class]]es: three [[Participants]]
	7. [[Price]] of a [[Card]] is its [[Strong]] [[Level]] + 1: 3, 5,
	   7, 9
	8. [[Base]] Secondary is the [[Strong]] [[Level]] − 1 and
	   [[Colony]] Secondary equals the [[Strong]] [[Level]]
3. From [[Level]] 4 each [[Strong]] [[Level]] holds half the [[Card]]s
   of the one below, like the Trade Deck of Star Realms above
   cost 2: big [[Card]]s are few, decisive and contested. The
   [[Card]]s 1/0, 4 [[Ship]]s and 8 [[Tool]]s, are added for the
   starting deck
4. [[End]]s balance the [[Class]]es, not [[Strong]] [[End]]s: an
   [[Actor]] gives a [[Level]] of its [[Weak]] [[End]]'s [[Class]]
   too, for [[Prerequisites]] and [[Singularity]]
5. [[Ship]] and [[Hero]] climb to [[Level]] 8 by [[Upgrade]]. [[Base]]
   and [[Colony]] [[End]] at [[Level]] 4; the six [[Structure]]
   [[Card]]s at [[Level]]s 6 and 8 are [[Hyperstructure]]s built by
   their own rule
6. The **Crowns** are the [[Card]]s of [[Singularity]]. Reaching all
   four takes both [[Origin]]s and both [[Hub]]s
7. **Starting cards** and [[Tool]]s are like Scouts and Vipers of Star
   Realms: the [[Ship]]s 1/0 with [[Ship]] 2M, 2C, 2P, 2S are the 8
   [[Ship]]s of the starting deck, see [[StartDraw]]. The [[Tool]]s
   are in the **Deck**: with the same [[Back]] as the other [[Card]]s
   of the [[Faction]] a shuffle doesn't tell them apart
8. The legacy [[Hero]]es take [[Level]]s like the other [[Card]]s,
   each keeps its [[End]]s and [[Ability|Abilities]], the [[Strong]]
   [[End]]s give [[Level]]s 2 and 4 one of each [[Class]]: legacy
   [[Hero]] 1M is 2M, 1P is 2P, 2M is 2S, 2C is 2C, 3M is 4P, 3C is
   4S, 4M is 4M, 4C is 4C; Primary and [[Prerequisites]] follow the
   patterns
9. [[Technology]] [[Class]]es and scopes are in [[Technology]]
10. [[Explore]] on a [[Military]] [[End]] is printed as **Recon**
11. Human and Alien are for even, [[Symmetric]] games: every
    [[Technology]] of the **Deck** serves both. Later [[Faction]]s
    will be [[Asymmetric]], with decks and [[Technology|Technologies]]
    of their own
12. A combined print is one [[Ability]]: "[[Recover]], [[Upgrade]]" of
    [[Hero]] 4M [[Weak]] and [[Hero]] 4C [[Strong]],
    "[[Militarization]], +1 [[Defense]]" of [[Base]] 2M
