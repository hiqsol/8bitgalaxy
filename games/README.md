---
status: draft
scope: playtest
---

# Played games

The three first duel playtest games of 2026-10-22/23, rewritten in the
[[Notation]] of [meta/Notation.md](../meta/Notation.md).

| Game | A, home S00 | B, home S21 | Result | [[Turn]]s |
|---|---|---|---|---|
| [1](game1.md) | Warlord (Opus) | Architect (Opus) | 1-0 by [[Military]] | 10 |
| [2](game2.md) | Brute (Haiku) | Scholar (Opus) | 0-1 by [[Singularity]] | 16 |
| [3](game3.md) | Turtle (Sonnet) | Gambler (Sonnet) | 1-0 by [[Singularity]] | 25 |

- The report [FirstDuelPlaytest.md](FirstDuelPlaytest.md) sums the
  games up and lists the rulings `RG<game>-<n>` that the comments
  name. The old records stay in the playtest folder named at its top:
  `RULES.md`, `NOTATION.md` and the 8BGN logs.

## How to read

```text
1a. Create at Academy: C2m@Fac3 -> S00s4 << 3c
    S1c@Hand:1c + C2c@S00s1:Academy+2c = 3c
    S1c->Discard, C2c=>C1c
```

[[Turn]] 1, play a: [[Create]] at the [[Academy]]. C2m comes from
[[Factory]] pile 3 into [[Structure]] [[Slot]] 4 of S00, it requires 3
[[Culture]]. The [[Hand]] [[Card]] S1c gives 1 [[Culture]], the
[[Colony]] C2c in [[Structure]] [[Slot]] 1 of S00 gives its
[[Academy]] and 2 [[Culture]]. Then S1c goes to the [[Discard]] and
C2c is
[[Depleted]]: its [[Weak]] [[End]] C1c is up.

A [[Card]] is its [[Type]], then the [[Level]] and [[Class]] of its
upper [[End]]: `S2m` is a [[Ship]] with its [[Level]] 2 [[Military]]
[[End]] up. A [[Card]] on its [[Weak]] [[End]] shows both [[End]]s,
the upper first: `S1c/1p` is the [[Ship]]-1p/1c on its
[[Weak]] [[End]]. A place is a [[Star]] and a [[Slot]]: `S00u4` is
[[Unit]] [[Slot]] 4,
`S00s1` [[Structure]] [[Slot]] 1, `S00o3` the [[Space]] [[Tile]] at 3
o'clock. `#` starts a comment, `RG1-5` names a ruling of the referee.
The rest is in [meta/Notation.md](../meta/Notation.md).

## Rules of that day

The games follow the playtest digest `RULES.md`, not today's docs:

1. [[Star]]s and [[Space]]s start face down,
   [Explore](../rules/TechnologyActions/Explore.md) reveals them. A
   revealed [[Star]] shows its kind and its [[Unit]]+[[Structure]]
   split, and as many [[Ancient]]s appear in it as its ExtraPrice:
   `S01 => Defense 3+1 with A?`. Today a
   [World](../rules/Galaxy/World.md) [[Card]] gives a [[Star]] its
   kind.
2. [[Star]] kinds: [[Defense]] (+1 [[Defense]]), [[Military]] (+1
   [[MilitaryPower|Military power]]), [[Science]] (+1
   [[SciencePower|Science power]]), [[Shipyard]] (a [[Hub]]),
   [[Energy]] (+1 [[Energy]]). [[Home]] [[Star]]s have 4+4 [[Slot]]s.
3. Every [[Space]] [[Tile]] is Normal, [[Length]] 1, [[Price]] 2:
   `S00o3 => Space+1r`. A [[Tile]] is named by the o'clock bearing of
   a [[Star]], as in the playtest table: `S00o3` lies between S00 and
   S01.
4. At the start of an own [[Turn]] a player gets 1 [[Energy]], at most
   5: the `Energy` of a [[Turn]] line counts it.
5. A [[Takeoff]] goes to a [[Star]] the player controls, not to a
   [[Disputed]] one.
6. In a [[Combat]] every [[Hand]] [[Card]] is committed face down:
   `Hidden`.
7. [[Factory]] piles: 1 [[Hero]], 2 [[Base]], 3 [[Colony]].
   [[Laboratory]] piles: 1 [[Ship]], 2 [[Hero]], 3 [[Base]], 4
   [[Colony]]. A researched [[Card]] may go onto any [[Factory]] pile.
8. Each player starts with the [[Card]]s of the table below: 10 in the
   [[Reserve]] (`S1*`, `S2*`, `H1m`, `H1p`), `C2c` and `B2p` at home,
   the rest in the [[Factory]] and the [[Laboratory]].

## Cards

A line per [[Card]], a spec of
[meta/Notation.md](../meta/Notation.md): the full name, then what each
[[End]] gives, Primary then Secondary, the [[End]]s apart by `/`, then
`<<` the [[Prerequisites]]. A [[Technology]] is its flavour name, a
blank one is in parentheses. The [[Price]] is the [[Strong]] [[End]]'s
[[Level]] + [[ExtraPrice]].

```text
S1m/1s:     1m              / 1s
S1c/1m:     1c              / 1m
S1p/1c:     1p              / 1c
S1s/1p:     1s              / 1p
S2+1m/1+2s: 1m Retreat      / 1s +1s
S2+1c/1+2m: 1c (Trade)      / 1m +1m
S2+1p/1+2c: 1p (Extract)    / 1c +1c
S2+1s/1+2p: 1s Survey       / 1p +1p

H1+1m/1+1c: 1m Recon        / 1c Grow
H1+1p/1+1s: 1p Recover      / 1s (Recycle)
H2+1m/2+1s: 2m Recon        / 2s (Recycle)
H2+1c/2+1p: 2c Recover      / 2p Enhance

B2+1m/1+1m: +1d +1m         / -
B2+1c/1+1c: +1c             / -
B2+1s/1+1s: +1s             / -
B2+1p/1+1p: Shipyard +1p    / Shipyard

C2+1c/1+1c: Academy +2c     / Academy
C2+1m/1+1m: Recon +2m       / Recon
C2+1p/1+1p: +2p             / -
C2+1s/1+1s: Survey +2s      / Survey

S4+1m/3+2c: 2m (Smuggle)    / 2c +1c             << *1c *2m
S4+1c/3+2m: 2c Grow         / 2m +1m             << *1m *2c
S4+1p/3+2s: 2p Enhance      / 2s +1s             << *1s *2p
S4+1s/3+2p: 2s (Exhaust)    / 2p +1p             << *1p *2s

H3+1m/3+1p: 2m Stealth      / 2p Enhance         << *1m *1p
H3+1c/3+1s: 2c Grow         / 2s Navigation      << *1c *1s
H4+1m/4+1p: 3m Stealth      / 3p Recover+Enhance << *2m *2p
H4+1c/4+1s: 3c Recover+Grow / 3s Navigation      << *2c *2s

B4+1m/3+1m: Stealth +3m     / Stealth            << *2m
B4+1c/3+1c: Academy +3c     / Academy            << *2c
B4+1p/3+1p: +3l +3p         / +1l                << *2p
B4+1s/3+1s: Navigation +3s  / Navigation         << *2s

C4+1m/3+1m: +3d +3m         / +2d                << *2m
C4+1c/3+1c: +3c             / -                  << *2c
C4+1p/3+1p: MegaYard +3p    / MegaYard           << *2p
C4+1s/3+1s: +3r +3s         / +1r                << *2s
```
