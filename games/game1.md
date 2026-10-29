# Game 1: Warlord 1-0 Architect

First duel playtest, 2026-10-22, seed 101. A wins 1-0 by Military in
Turn 10: B can not make a move. The decisive Turn is 9, A's: Attack,
Explore and Move in one turn, without a single Combat against the
rival.

## Score

One line per turn, only what happened. `!` good, `!!` decisive, `?!` dubious,
`!?` interesting, as in chess.

```text
  1. A  Create C2m@S00s4; Explore S00o3=Space!; Takeoff H1m
  2. B  Create C2s@S21s2; Explore S20o3=Space; Takeoff S2c S2s H1c/1m
  3. A  Explore S01=Defense A?; Takeoff S1p S2s S1m
  4. B  Research C4s; Grow C1s=>C4s!; Explore S20=Science A?,A?; Takeoff S1c/2p
  5. A  Attack S01 5:3!; Explore S01o5=Space; Takeoff S2p H1p
  6. B  Research C4m!?; Create C2s@S21s3; Grow C2s=>C4m
  7. A  Explore S12=Military A?,A?; Takeoff S1s S2s
  8. B  Takeoff S1c S1c/1p S1c/2p
  9. A  Attack S12 7:4!; Explore S12o7=Space; Move S1m->S21u4, S21 Disputed!!
 10. B  can not make a move                                                     1-0
```

## Record

```text
Game: First duel, playtest 1, 2026-10-22, seed 101
Player A: Warlord (Opus), home S00
Player B: Architect (Opus), home S21
Stars: S01 Defense 3+1, S10 Shipyard 1+3, S11 Energy 2+2, S12 Military 3+1, S20 Science 2+2
Setup A: C2c@S00s1, B2p@S00s3
Setup B: B2p@S21s1, C2c@S21s4
```

B reordered its piles: Colony Factory C2s on top, Laboratory C4s, C4m
on top.

### Turns 1 and 2

Both open with a home Colony: A a C2m for Recon and Military, B a C2s
for Survey.

```text
1. A, Energy 1
  Play:
    1a. Create at Academy: C2m@Fac3 -> S00s4 << 3c
        S1c@Hand|1c + C2c@S00s1|Academy,2c = 3c
        S1c->Discard, C2c=>C1c
    1b. Explore with Recon: S00o3 => Space|1r << 1r2m
        H1p@Hand|1r + C2m@S00s4|Recon,2m = 1r2m
        H1p->Discard, C2m=>C1m
    1c. Takeoff: H1m -> S00u4
  Restore: C1c=>C2c, C1m=>C2m

2. B, Energy 1
  Play:
    2a. Create at Academy: C2s@Fac3 -> S21s2 << 3c
        S1c@Hand|1c + C2c@S21s4|Academy,2c = 3c
        S1c->Discard, C2c=>C1c
    2b. Explore with Survey: S20o3 => Space|1r << 1r2s
        S1s@Hand|1r + C2s@S21s2|Survey,2s = 1r2s
        S1s->Discard, C2s=>C1s
    2c. Takeoff: S2c -> S21u1
    2d. Takeoff: S2s -> S21u2
    2e. Takeoff: H1c/1m -> S21u4
  Restore: C1c=>C2c, C1s=>C2s
```

### Turns 3 and 4

A finds the Defense Star at S01 with one Ancient. B researches C4s and
grows its fresh C2s into it at once, then finds the Science Star at
S20.

```text
3. A, Energy 2
  Play:
    3a. Explore with Recon: S01 => Defense|3+1 with A? << 2r5m
        Hand[S2p|2r+2e + S2m|1m] + C2m@S00s4|Recon,2m = 2r5m
        S2p,S2m->Discard, C2m=>C1m
    3b. Takeoff: S1p -> S00u1
    3c. Takeoff: S2s -> S00u2
    3d. Takeoff: S1m -> S00u3
  Draw with Shuffle
  Restore: C1m=>C2m

4. B, Energy 2
  Play:
    4a. Research: C4s@Lab4 -> Fac3 << 5s,*2s
        Hand[S1s/1m|1s+1e + H1s/1p|1s] + C2s@S21s2|2s,*2s = 5s,*2s
        S1s/1m,H1s/1p->Discard, C2s=>C1s
    4b. Upgrade with Grow at Academy: C1s@S21s2 => C4s << 2c
        S1c/1p@Hand|1c + S21[C2c@s4|Academy,2c + H1c/1m@u4|Grow,1c] = 4c
        S1c/1p,H1c/1m->Discard, C2c=>C1c, C1s->Fac3
    # RG1-1: the Depleted C2s is upgraded, C4s comes Ready
    4c. Explore with Survey: S20 => Science|2+2 with A?,A? << 2r6s
        S1s/2m@Hand|1s+1e + S21[S2s@u2|Survey,2r1s + C4s@s2|3r3s] = 5r6s
        S1s/2m,S2s->Discard, C4s=>C3s
    4d. Takeoff: S1c/2p -> S21u4
  Draw with Shuffle
  Restore: C1c=>C2c, C3s=>C4s
```

### Turns 5 and 6

A beats the Ancient and holds S01. B researches C4m and grows a second
C2s into it: two Level-4 Colonies at home, but no Actor left on its
Field.

```text
5. A, Energy 1
  Play:
    5a. Attack: S00 -> S01[A?] << 2r
        Hand[S1m/2c|1m+1e Hidden + S2m|1m Hidden] + S00[S1m@u3|1r1m + H1m@u4|1r1m]
        = 2r5m
        Reveal: S1m/2c, S2m, A3
        Total: 5m against 3d, attacker wins, Advantage 2
        Outcome: S1m,H1m saved; S1m->S01u1, H1m->S01u3; A3->AncientDeck
          S1m/2c,S2m->Discard
    # RG1-2: the Ancient gets no Defense Star bonus
    5b. Explore with Recon: S01o5 => Space|1r << 3r2m
        S1s@Hand|1r + S00[C2m@s4|Recon,2m + S2s@u2|2r] = 3r2m
        S1s,S2s->Discard, C2m=>C1m
    5c. Takeoff: S2p -> S00u2
    5d. Takeoff: H1p -> S00u4
  Draw with Shuffle
  Restore: C1m=>C2m

6. B, Energy 1
  Play:
    6a. Research: C4m@Lab4 -> Fac2 << 5s,*2m
        Hand[S1s|1s + S2m|*2m + S1s/1m|1s] + C4s@S21s2|3s = 5s,*2m
        S1s,S2m,S1s/1m->Discard, C4s=>C3s
    # RG1-3: C4m goes onto the Base pile, so C2s stays on top of the Colony pile
    6b. Create at Academy: C2s@Fac3 -> S21s3 << 3c
        H1p@Hand + S21[C2c@s4|Academy,2c + S2c@u1|1c] = 3c
        H1p,S2c->Discard, C2c=>C1c
    6c. Upgrade with Grow at Academy: C2s@S21s3 => C4m << 2c
        H1c/1m@Hand|Grow + S21[C1c@s4|Academy + S1c/2p@u4|2c] = 2c
        H1c/1m,S1c/2p->Discard, C2s->Fac3
    # C4m comes from the Base pile
  Draw with Shuffle
  Restore: C3s=>C4s, C1c=>C2c
```

### Turns 7 and 8

A finds the Military Star S12, next to B's home. B only takes off
three Ships.

```text
7. A, Energy 1
  Play:
    7a. Explore with Recon: S12 => Military|3+1 with A?,A? << 4r6m
        Hand[S2m|1m + S1m/2c|1m + S1m/1c|1m]
        + S00[C2m@s4|Recon,2m+1e + S2p@u2|2r + S1p@u1|1r + H1p@u4|1r] = 4r6m
        S2m,S1m/2c,S1m/1c,S2p,S1p,H1p->Discard, C2m=>C1m
    # RG1-4: Ancients pin a passing group
    7b. Takeoff: S1s -> S00u2
    7c. Takeoff: S2s -> S00u4
  Draw with Shuffle
  Restore: C1m=>C2m

8. B, Energy 2
  Play:
    8a. Takeoff: S1c -> S21u1
    8b. Takeoff: S1c/1p -> S21u2
    8c. Takeoff: S1c/2p -> S21u3
  Draw: S2s,S1m -> Discard
```

### Turns 9 and 10

A takes S12, explores the last Space with the Hero that just fought
and moves one S1m into the last free slot of S21. S21 is Disputed, B
controls no Star.

```text
9. A, Energy 1
  Play:
    9a. Attack: S01 -> S12[A?,A?] << 2r
        S01[S2m@Hand|1m Hidden + S1m/2c@Hand|1m+1e Hidden + S1m@u1|1r1m
          + H1m@u3|1r1m] = 2r5m
        + S00[S1p@Hand|1r Hidden + C2m@s4|2m + S2s@u4|2r + S1s@u2|1r] = 4r2m
        Reveal: S2m, S1m/2c, S1p, A1, A3
        Total: 7m against 4d, attacker wins, Advantage 3
        Outcome: S1m,H1m saved; S1m->S12u1, H1m->S12u3; A1,A3->AncientDeck
          S2m,S1m/2c,S1p,S2s,S1s->Discard, C2m=>C1m
    # RG1-8: the remote group reaches with its own Range, C2m gives 2m
    9b. Explore with Recon: S12o7 => Space|1r << 1r2m
        S1m/1c@Hand|1m + H1m@S12u3|Recon,1r1m = 1r2m
        S1m/1c,H1m->Discard
    # RG1-7: H1m fought and acts again
    9c. Move: S1m@S12u1 -> S21u4 << 2r
        S2p@Hand|2r + S1m@S12u1|1r = 3r; S2p->Discard, S21 Disputed
  Draw with Shuffle
  Restore: C1m=>C2m

10. B, Energy 3
  B can not make a move
  # RG1-5: S21 is Disputed, B controls no Star: no Takeoff, no source
```

## Result

```text
Result: A wins by Military, 1-0
```
