# Played games

The three first duel playtest games of 2026-10-22/23, rewritten in the
notation of [docs/Notation.md](../docs/Notation.md).

| Game | A, home S00 | B, home S21 | Result | Turns |
|---|---|---|---|---|
| [1](game1.md) | Warlord (Opus) | Architect (Opus) | 1-0 by Military | 10 |
| [2](game2.md) | Brute (Haiku) | Scholar (Opus) | 0-1 by Singularity | 16 |
| [3](game3.md) | Turtle (Sonnet) | Gambler (Sonnet) | 1-0 by Singularity | 25 |

- The old records stay as they were: the report `FirstDuelPlaytest.md`
  and the playtest folder named at its top, with `RULES.md`,
  `NOTATION.md`, the 8BGN logs and the rulings `RG<game>-<n>` that the
  comments name.

## How to read

```text
1a. Create at Academy: C2m@Fac3 -> S00s4 << 3c
    S1c@Hand|1c + C2c@S00s1|Academy,2c = 3c
    S1c->Discard, C2c=>C1c
```

Turn 1, play a: Create at the Academy. C2m comes from Factory pile 3
into Structure slot 4 of S00, it requires 3 Culture. The Hand card S1c
gives 1 Culture, the Colony C2c in Structure slot 1 of S00 gives its
Academy and 2 Culture. Then S1c goes to the Discard and C2c is
Depleted: its weak end C1c is up.

A card is its type, then the Level and Class of its upper end: `S2m`
is a Ship with its Level 2 Military end up. A card on its weak end
shows both ends, the upper first: `S1c/1p` is the Ship-1p/1c on its
weak end. A place is a Star and a slot: `S00u4` is Unit slot 4,
`S00s1` Structure slot 1, `S00o3` the Space tile at 3 o'clock. `#`
starts a comment, `RG1-5` names a ruling of the referee. The rest is
in [docs/Notation.md](../docs/Notation.md).

## Rules of that day

The games follow the playtest digest `RULES.md`, not today's docs:

1. Stars and Spaces start face down,
   [Explore](../docs/TechnologyActions/Explore.md) reveals them. A
   revealed Star shows its kind and its Unit+Structure split, and as
   many Ancients appear in it as its ExtraPrice:
   `S01 => Defense|3+1 with A?`. Today a
   [World](../docs/Concepts/World.md) card gives a Star its kind.
2. Star kinds: Defense (+1 Defense), Military (+1 Military power),
   Science (+1 Science power), Shipyard (a hub), Energy (+1 Energy).
   Home Stars have 4+4 slots.
3. Every Space tile is Normal, Length 1, Price 2: `S00o3 => Space|1r`.
   A tile is named by the o'clock bearing of a Star, as in the
   playtest table: `S00o3` lies between S00 and S01.
4. At the start of an own turn a player gets 1 Energy, at most 5: the
   `Energy` of a turn line counts it.
5. A Takeoff goes to a Star the player controls, not to a Disputed
   one.
6. In a Combat every Hand card is committed face down: `Hidden`.
7. Factory piles: 1 Hero, 2 Base, 3 Colony. Laboratory piles: 1 Ship,
   2 Hero, 3 Base, 4 Colony. A researched card may go onto any Factory
   pile.
8. Each player starts with the cards of the table below: 10 in the
   Reserve (`S1*`, `S2*`, `H1m`, `H1p`), `C2c` and `B2p` at home, the
   rest in the Factory and the Laboratory.

## Cards

Full name, then each end: its Level and Class, then Primary /
Secondary. A technology is its flavour name, a blank one is in
parentheses.

| Card | Full name | Strong end | Weak end | Price | Prerequisites |
|---|---|---|---|---|---|
| `S1m` | `Ship-1m/1s` | `1m` 1 | `1s` 1 | 1 |  |
| `S1c` | `Ship-1c/1m` | `1c` 1 | `1m` 1 | 1 |  |
| `S1p` | `Ship-1p/1c` | `1p` 1 | `1c` 1 | 1 |  |
| `S1s` | `Ship-1s/1p` | `1s` 1 | `1p` 1 | 1 |  |
| `S2m` | `Ship-2+1m/1+2s` | `2+1m` 1 / Retreat | `1+2s` 1 / +1 | 3 |  |
| `S2c` | `Ship-2+1c/1+2m` | `2+1c` 1 / (Trade) | `1+2m` 1 / +1 | 3 |  |
| `S2p` | `Ship-2+1p/1+2c` | `2+1p` 1 / (Extract) | `1+2c` 1 / +1 | 3 |  |
| `S2s` | `Ship-2+1s/1+2p` | `2+1s` 1 / Survey | `1+2p` 1 / +1 | 3 |  |
| `H1m` | `Hero-1+1m/1+1c` | `1+1m` 1 / Recon | `1+1c` 1 / Grow | 2 |  |
| `H1p` | `Hero-1+1p/1+1s` | `1+1p` 1 / Recover | `1+1s` 1 / (Recycle) | 2 |  |
| `H2m` | `Hero-2+1m/2+1s` | `2+1m` 2 / Recon | `2+1s` 2 / (Recycle) | 3 |  |
| `H2c` | `Hero-2+1c/2+1p` | `2+1c` 2 / Recover | `2+1p` 2 / Enhance | 3 |  |
| `B2m` | `Base-2+1m/1+1m` | `2+1m` +1 Defense / +1 | `1+1m`  | 3 |  |
| `B2c` | `Base-2+1c/1+1c` | `2+1c` +1 | `1+1c`  | 3 |  |
| `B2s` | `Base-2+1s/1+1s` | `2+1s` +1 | `1+1s`  | 3 |  |
| `B2p` | `Base-2+1p/1+1p` | `2+1p` Shipyard / +1 | `1+1p` Shipyard | 3 |  |
| `C2c` | `Colony-2+1c/1+1c` | `2+1c` Academy / +2 | `1+1c` Academy | 3 |  |
| `C2m` | `Colony-2+1m/1+1m` | `2+1m` Recon / +2 | `1+1m` Recon | 3 |  |
| `C2p` | `Colony-2+1p/1+1p` | `2+1p` +2 | `1+1p`  | 3 |  |
| `C2s` | `Colony-2+1s/1+1s` | `2+1s` Survey / +2 | `1+1s` Survey | 3 |  |
| `S4m` | `Ship-4+1m/3+2c` | `4+1m` 2 / (Smuggle) | `3+2c` 2 / +1 | 5 | `*1c,*2m` |
| `S4c` | `Ship-4+1c/3+2m` | `4+1c` 2 / Grow | `3+2m` 2 / +1 | 5 | `*1m,*2c` |
| `S4p` | `Ship-4+1p/3+2s` | `4+1p` 2 / Enhance | `3+2s` 2 / +1 | 5 | `*1s,*2p` |
| `S4s` | `Ship-4+1s/3+2p` | `4+1s` 2 / (Exhaust) | `3+2p` 2 / +1 | 5 | `*1p,*2s` |
| `H3m` | `Hero-3+1m/3+1p` | `3+1m` 2 / Stealth | `3+1p` 2 / Enhance | 4 | `*1m,*1p` |
| `H3c` | `Hero-3+1c/3+1s` | `3+1c` 2 / Grow | `3+1s` 2 / Navigation | 4 | `*1c,*1s` |
| `H4m` | `Hero-4+1m/4+1p` | `4+1m` 3 / Stealth | `4+1p` 3 / Recover, Enhance | 5 | `*2m,*2p` |
| `H4c` | `Hero-4+1c/4+1s` | `4+1c` 3 / Recover, Grow | `4+1s` 3 / Navigation | 5 | `*2c,*2s` |
| `B4m` | `Base-4+1m/3+1m` | `4+1m` Stealth / +3 | `3+1m` Stealth | 5 | `*2m` |
| `B4c` | `Base-4+1c/3+1c` | `4+1c` Academy / +3 | `3+1c` Academy | 5 | `*2c` |
| `B4p` | `Base-4+1p/3+1p` | `4+1p` +3 Capacity / +3 | `3+1p` +1 Capacity | 5 | `*2p` |
| `B4s` | `Base-4+1s/3+1s` | `4+1s` Navigation / +3 | `3+1s` Navigation | 5 | `*2s` |
| `C4m` | `Colony-4+1m/3+1m` | `4+1m` +3 Defense / +3 | `3+1m` +2 Defense | 5 | `*2m` |
| `C4c` | `Colony-4+1c/3+1c` | `4+1c` +3 | `3+1c`  | 5 | `*2c` |
| `C4p` | `Colony-4+1p/3+1p` | `4+1p` MegaYard / +3 | `3+1p` MegaYard | 5 | `*2p` |
| `C4s` | `Colony-4+1s/3+1s` | `4+1s` +3 Range / +3 | `3+1s` +1 Range | 5 | `*2s` |
