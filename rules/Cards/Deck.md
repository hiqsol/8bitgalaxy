---
status: issues
scope: duel
aliases: [Crown, Starting cards]
---

1. **Deck** lists the [[Card]]s of the Human and the Alien
   [[Faction]], one line per [[Card]]: the two are symmetric, the same
   [[Card]]s by values, only the color and design of the [[Faction]]
   differ
2. A line is the [[Card]] in [[Notation]]:
	1. Full name: [[Type]] letter, then each [[End]], [[Strong]]
	   first, as printed: [[Level]] + [[ExtraPrice]] and [[Class]]
	   letter, m [[Military]], c [[Culture]], p [[Production]], s
	   [[Science]]
	2. Then what each [[End]] gives, apart by `/`: [[PrimaryAbility]],
	   then [[SecondaryAbility]]; [[Power]] `2m`, [[Plus]] `+1m`,
	   `+1d` [[Defense]], `+1r` [[Range]], `+1l` [[Capacity]],
	   [[Technology]] by name, a combined [[Ability]] joined by `+`
	3. Then `<<` the [[Prerequisites]] as [[Level]] and [[Class]]
	   pairs, `*2m`, same for both [[End]]s
	4. `2×` - two copies
3. [[Card]] name is [[Type]] with [[Strong]] [[End]] [[Level]] and
   [[Class]]
4. **Deck** holds 52 [[Card]]s, counted by the [[Level]] of the
   [[Strong]] [[End]]:
	1. Up to [[Level]] 2: 8 [[Ship]]s, 4 [[Tool]]s and 4 each of
	   [[Hero]], [[Base]] and [[Colony]]
	2. [[Level]] 4: 4 each of [[Ship]], [[Hero]], [[Base]] and
	   [[Colony]]
	3. [[Level]] 6: 2 each of [[Ship]] and [[Hero]], and 4
	   [[Hyperstructure]]s
	4. [[Level]] 8: 1 each of [[Ship]] and [[Hero]], and 2
	   [[Hyperstructure]]s
5. A [[Card]] has its [[Weak]] [[End]] one [[Level]] below its
   [[Strong]] [[End]]: 1/0, 2/1, 4/3, 6/5, 8/7
6. Every [[Class]] has as many [[End]]s at each [[Level]] as any other
   [[Class]]: 2 at [[Level]] 0, 6 at [[Level]] 1, 4 at [[Level]]s 2 to
   4, 2 at 5 and 6, 1 at 7 and 8
7. Every [[Class]] has one [[Level]] 8 [[Card]], its **crown**:
   [[Ship]] 8M, [[Hero]] 8S, [[Hyperstructure]] 8P and
   [[Hyperstructure]] 8C
8. **Starting cards** are 4 [[Ship]]s 1/0, one of each [[Class]]:
   [[Level]] 1, Primary 1, nothing else; the [[Weak]] [[End]] is
   `0+1`, Primary 0, of the [[Class]] of the [[Weak]] [[End]] of the
   [[Ship]] 2/1: 1M/0S, 1C/0M, 1P/0C, 1S/0P, see [[StartDraw]]
9. **Tools** are 4 [[Card]]s 1/0, one of each [[Class]], made like the
   **Starting cards** with both [[End]]s of one [[Class]], see
   [[Tool]]

```text
S1+0m/0+1s:    1m                    / 0s
S1+0c/0+1m:    1c                    / 0m
S1+0p/0+1c:    1p                    / 0c
S1+0s/0+1p:    1s                    / 0p
S2+1m/1+2s:    1m Retreat            / 1s +1s
S2+1c/1+2m:    1c Trade              / 1m +1m
S2+1p/1+2c:    1p Extract            / 1c +1c
S2+1s/1+2p:    1s Explore            / 1p +1p
S4+1m/3+2c:    2m Smuggle            / 2c +1c             << *1c *2m
S4+1c/3+2m:    2c Upgrade            / 2m +1m             << *1m *2c
S4+1p/3+2s:    2p Upgrade            / 2s +1s             << *1s *2p
S4+1s/3+2p:    2s Exhaust            / 2p +1p             << *1p *2s
S6+1m/5+2s:    3m Siege              / 3s Jump            << *4m
S6+1p/5+2c:    3p Boarding           / 3c Settle          << *4p
S8+1m/7+2s:    4m Decapitation       / 4s Barrier         << *4c *4s *6m

H2+1m/1+1c:    2m Explore            / 2c Upgrade
H2+1c/1+1p:    2c Recover            / 2p Upgrade
H2+1p/1+1s:    2p Recover            / 2s Recycle
H2+1s/1+1m:    2s Recycle            / 2m Explore
H4+1m/3+1p:    3m Stealth            / 3p Recover+Upgrade << *1p *2m
H4+1c/3+1s:    3c Recover+Upgrade    / 3s Navigation      << *1s *2c
H4+1p/3+1m:    3p Upgrade            / 3m Stealth         << *1m *2p
H4+1s/3+1c:    3s Navigation         / 3c Upgrade         << *1c *2s
H6+1c/5+1m:    4c Envoy              / 4m Defection       << *4c
H6+1s/5+1p:    4s Invent             / 4p FieldRepair     << *4s
H8+1s/7+1m:    5s UnifiedTheory      / 5m Counterintelligence << *4m *4p *6s

B2+1m/1+1m:    Militarization+1d +1m / Militarization
B2+1c/1+1c:    Trade +1c             / Trade
B2+1p/1+1p:    Shipyard +1p          / Shipyard
B2+1s/1+1s:    Recycle +1s           / Recycle
B4+1m/3+1m:    Stealth +3m           / Stealth            << *2m
B4+1c/3+1c:    Academy +3c           / Academy            << *2c
B4+1p/3+1p:    +3l +3p               / +1l                << *2p
B4+1s/3+1s:    Navigation +3s        / Navigation         << *2s

C2+1m/1+1m:    Explore +2m           / Explore
C2+1c/1+1c:    Academy +2c           / Academy
C2+1p/1+1p:    Extract +2p           / Extract
C2+1s/1+1s:    Explore +2s           / Explore
C4+1m/3+1m:    Militarization+3d +4m / Militarization+2d  << *2m
C4+1c/3+1c:    Export +4c            / Export             << *2c
C4+1p/3+1p:    MegaYard +4p          / MegaYard           << *2p
C4+1s/3+1s:    +3r +4s               / +1r                << *2s

HS6+0m/5+0m:   Jamming +1e           / Jamming            << *4m
HS6+0p/5+0p:   DysonCollector +1e    / DysonCollector     << *4p
HS6+0c/5+0c:   Festival +1e          / Festival           << *4c
HS6+0s/5+0s:   GreatLibrary +1e      / GreatLibrary       << *4s
HS8+0c/7+0c:   Heritage +2e          / Heritage           << *4m *4p *6c
HS8+0p/7+0p:   StellarForge +2e      / StellarForge       << *4c *4s *6p

T1+0m/0+1m:    1m                    / 0m
T1+0c/0+1c:    1c                    / 0c
T1+0p/0+1p:    1p                    / 0p
T1+0s/0+1s:    1s                    / 0s
```

#### Notes

1. The [[Card]]s up to [[Level]] 4 are imported from the legacy code
   (`legacy/src/legacy/js/Model/Decks/Human.js`), to be reviewed,
   except the [[Ship]]s 1/0 and the values set by the patterns; the
   [[Card]]s 6/5 and 8/7 are the Crossroads variant, still unplayed in
   a full [[Duel]]
2. Patterns:
	1. [[Actor]]s: Primary is [[Power]], Secondary is `+1` or
	   [[Technology]], a [[Technology]] on both [[End]]s from
	   [[Level]] 6, [[End]]s have different [[Class]]es
	2. [[Structure]]s: Primary is [[Technology]] or a non-[[Power]]
	   [[Plus]] at both [[End]]s, Secondary is [[Power]] at [[Strong]]
	   [[End]] only, both [[End]]s have the same [[Class]]: a
	   [[Depleted]] [[Structure]] keeps the [[Technology]] but gives
	   no [[Power]]; a [[Hyperstructure]]'s Secondary is [[Energy]]
	   instead, `+1e` on a 6/5, `+2e` on an 8/7
	3. [[Ship]] [[End]]s have equal [[Level]] + ExtraPrice, so
	   [[Size]] doesn't change with rotation
	4. [[Ship]] Primary is half the [[Strong]] [[Level]], [[Hero]]
	   Primary one more, at both [[End]]s, above 1/0
	5. [[Prerequisites]] below the **Crowns**: none up to [[Level]] 2;
	   for a [[Level]] 4 [[Card]] [[Level]] 2 of the [[Strong]]
	   [[End]]'s [[Class]], plus for an [[Actor]] [[Level]] 1 of the
	   [[Weak]] [[End]]'s [[Class]]; for a [[Level]] 6 [[Card]]
	   [[Level]] 4 of its [[Strong]] [[End]]'s [[Class]] only
	6. A **Crown** needs [[Level]] 6 of its [[Class]] and [[Level]] 4
	   of two other [[Class]]es: three [[Participants]]
	7. [[Price]] of a [[Card]] is its [[Strong]] [[Level]] + 1: 3, 5,
	   7, 9; a [[Card]] 1/0 costs 1; a [[Hyperstructure]] has
	   [[ExtraPrice]] 0, both [[Create]]s cost 11 for a 6/5, 15 for an
	   8/7
	8. [[Base]] Secondary is the [[Strong]] [[Level]] − 1 and
	   [[Colony]] Secondary equals the [[Strong]] [[Level]]
3. From [[Level]] 4 each [[Strong]] [[Level]] holds half the [[Card]]s
   of the one below, like the Trade Deck of Star Realms above
   cost 2: big [[Card]]s are few, decisive and contested. The
   [[Card]]s 1/0, 4 [[Ship]]s and 4 [[Tool]]s, are added for the
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
12. A combined print is one [[Ability]]: `Recover+Upgrade` of
    [[Hero]] 4M [[Weak]] and [[Hero]] 4C [[Strong]],
    `Militarization+1d` of [[Base]] 2M
13. The [[Weak]] [[End]] `0+1` of a [[Card]] 1/0 tells its
    [[Strong]] [[End]]: one [[Level]] more, and for a [[Ship]] the
    same [[Size]] 1, see the patterns. [[Level]] 0 meets no
    [[Prerequisites]], but its [[Class]] lets a **Starting card**
    start an [[Action]] of another [[Class]], e.g. a [[Manage]] in
    [[Science]]
