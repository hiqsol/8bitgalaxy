# Game 2: Brute 0-1 Scholar

First duel playtest, 2026-10-22, seed 202. B wins 0-1 by Singularity
in Turn 16: all four Classes at Level 4, never leaving home. No
contact between the rivals: the only Combat is A against three Ancients.

## Score

One line per turn, only what happened. `!` good, `!!` decisive, `?!` dubious,
`!?` interesting, as in chess.

```text
  1. A  Takeoff S1c/1p S1m S2m
  2. B  Create C2s@S21s4; Research C4s!; Takeoff S1p
  3. A  Explore S00o3=Space; Create C2m@S00s4
  4. B  Grow C2s=>C4s!; Research B4p; Takeoff S2p S1c
  5. A  Explore S00o4=Space; Create B2m@S00s2
  6. B  Research S4m; Create S4m!; Takeoff H1c/1m
  7. A  Explore S01=Shipyard A?,A?,A?; Takeoff S1s H1p S2s
  8. B  Create B4p@S21s2!; Takeoff S1s S2c
  9. A  Explore S00o7=Space; Explore S00o8=Space; Takeoff S2m H1m
 10. B  Research S4p->Lab3; Research S4c; Takeoff S4m S1p
 11. A  Attack S01 9:3; Takeoff S2p
 12. B  Create S4c!
 13. A  Explore S01o5=Space
 14. B  Research S4s
 15. A  Explore S12=Military A?,A?; Takeoff S1s
 16. B  Takeoff S4c!!; Singularity                                              0-1
```

## Record

```text
Game: First duel, playtest 2, 2026-10-22, seed 202
Player A: Brute (Haiku), home S00
Player B: Scholar (Opus), home S21
Stars: S01 Shipyard 1+3, S10 Energy 2+2, S11 Defense 3+1, S12 Military 3+1, S20 Science 2+2
Setup A: C2c@S00s1, B2p@S00s3
Setup B: C2c@S21s1, B2p@S21s3
```

B reordered its piles: Laboratory C4s, B4p, S4m on top, Colony Factory
C2s on top.

### Turns 1 and 2

A has no Explore in a 3-card Hand and takes off three Ships. B raises
C2s and uses it at once to research C4s.

```text
1. A, Energy 1
  Play:
    1a. Takeoff: S1c/1p -> S00u1
    1b. Takeoff: S1m -> S00u3
    1c. Takeoff: S2m -> S00u4

2. B, Energy 1
  Play:
    2a. Create at Academy: C2s@Fac3 -> S21s4 << 3c
        S2c@Hand|1c + C2c@S21s1|Academy,2c = 3c
        S2c->Discard, C2c=>C1c
    2b. Research: C4s@Lab4 -> Fac3 << 5s,*2s
        Hand[S2s|1s + S1s/2m|1s + H1s/1p|1s] + C2s@S21s4|2s,*2s = 5s,*2s
        S2s,S1s/2m,H1s/1p->Discard, C2s=>C1s
    # RG2-2: the Colony created this Turn acts at once
    2c. Takeoff: S1p -> S21u1
  Restore: C1c=>C2c, C1s=>C2s
```

### Turns 3 and 4

B grows C2s into C4s for 2 Culture: +3 Science for every later
Research. A explores S00o3 and raises C2m.

```text
3. A, Energy 2
  Play:
    3a. Explore with Survey: S00o3 => Space|1r << 1r2s
        Hand[S2s|Survey + S1s|1s+1e + S2p|2r] = 2r2s
        S2s,S1s,S2p->Discard
    3b. Create at Academy: C2m@Fac3 -> S00s4 << 3c
        Hand[S2c|1c+1e + S1c|1c] + C2c@S00s1|Academy,2c = 5c
        S2c,S1c->Discard, C2c=>C1c
  Draw with Shuffle
  Restore: C1c=>C2c

4. B, Energy 2
  Play:
    4a. Upgrade with Grow at Academy: C2s@S21s4 => C4s << 2c
        H1c/1m@Hand|Grow + C2c@S21s1|Academy,2c = 2c
        H1c/1m->Discard, C2c=>C1c, C2s->Fac3
    4b. Research: B4p@Lab3 -> Fac2 << 5s,*2p
        Hand[S1s|1s + S1s/1m|1s] + S21[C4s@s4|3s + B2p@s3|*2p] = 5s,*2p
        S1s,S1s/1m->Discard, C4s=>C3s, B2p=>B1p
    4c. Takeoff: S2p -> S21u2
    4d. Takeoff: S1c -> S21u3
  Draw with Shuffle
  Restore: C1c=>C2c, C3s=>C4s, B1p=>B2p
```

### Turns 5 and 6

B researches and produces S4m in one turn. A explores S00o4 and fills
its home Structure row with B2m.

```text
5. A, Energy 1
  Play:
    5a. Explore with Recon: S00o4 => Space|1r << 1r2m
        Hand[H1m|1m + S1m/1c|1m + S2c|2r] + C2m@S00s4|Recon,2m = 2r4m
        H1m,S1m/1c,S2c->Discard, C2m=>C1m
    5b. Create at Shipyard: B2m@Fac2 -> S00s2 << 3p
        Hand[H1p|1p+1e + S2p|1p] + B2p@S00s3|Shipyard = 3p
        H1p,S2p->Discard, B2p=>B1p
  Draw with Shuffle
  Restore: C1m=>C2m, B1p=>B2p

6. B, Energy 3
  Play:
    6a. Research: S4m@Lab1 -> Fac1 << 5s,*1c,*2m
        Hand[S1s|1s + S1s/1m|1s + S2m|*2m] + S21[C4s@s4|3s + C2c@s1|*2c]
        = 5s,*2c,*2m
        S1s,S1s/1m,S2m->Discard, C4s=>C3s, C2c=>C1c
    # RG2-5: a Ship onto the Hero pile
    6b. Create at Shipyard: S4m@Fac1 -> Discard << 5p
        S1p/2s@Hand|1p + S21[B2p@s3|Shipyard + S1p@u1|1p + S2p@u2|1p+2e] = 5p
        S1p/2s,S1p,S2p->Discard, B2p=>B1p
    6c. Takeoff: H1c/1m -> S21u1
  Draw with Shuffle
  Restore: C1c=>C2c, C3s=>C4s, B1p=>B2p
```

### Turns 7 and 8

A pays 7 to find the Shipyard Star at S01, three Ancients. B produces
B4p: P4 on the Field.

```text
7. A, Energy 1
  Play:
    7a. Explore with Recon: S01 => Shipyard|1+3 with A?,A?,A? << 2r7m
        Hand[S1m/1c|1m+1e + S1m/2c|1m]
        + S00[C2m@s4|Recon,2m + S2m@u4|2r1m + S1m@u3|1r1m] = 3r7m
        S1m/1c,S1m/2c,S2m,S1m->Discard, C2m=>C1m
    7b. Takeoff: S1s -> S00u2
    7c. Takeoff: H1p -> S00u3
    7d. Takeoff: S2s -> S00u4
  Draw with Shuffle
  Restore: C1m=>C2m

8. B, Energy 2
  Play:
    8a. Create at Shipyard: B4p@Fac2 -> S21s2 << 5p
        Hand[S2p|1p+2e + S1p|1p + H1p|1p] + B2p@S21s3|Shipyard = 5p
        S2p,S1p,H1p->Discard, B2p=>B1p
    8b. Takeoff: S1s -> S21u2
    8c. Takeoff: S2c -> S21u4
  Draw with Shuffle
  Restore: B1p=>B2p
```

### Turns 9 and 10

B shifts S4p in the Laboratory and researches S4c; S4m takes off: M4
on the Field. A explores both Spaces to S10.

```text
9. A, Energy 1
  Play:
    9a. Explore with Recon: S00o7 => Space|1r << 1r2m
        S1c@Hand|1r + C2m@S00s4|Recon,2m = 1r2m
        S1c->Discard, C2m=>C1m
    9b. Explore with Survey: S00o8 => Space|1r << 1r2s
        S2c@Hand + S00[S2s@u4|Survey,2r1s + S1s@u2|1r1s] = 3r2s
        S2c,S2s,S1s->Discard
    9c. Takeoff: S2m -> S00u2
    9d. Takeoff: H1m -> S00u4
  Draw with Shuffle: S2p -> Discard
  Restore: C1m=>C2m

10. B, Energy 1
  Play:
    10a. Research: S4p@Lab1 -> Lab3 << 1s
         S1s/2m@Hand|1s = 1s; S1s/2m->Discard
    10b. Research: S4c@Lab1 -> Fac1 << 5s,*1m,*2c
         Hand[S2s|1s+1e + S1m|*1m] + S21[C4s@s4|3s + S1s@u2|1s + S2c@u4|*2c]
         = 6s,*1m,*2c
         S2s,S1m,S1s,S2c->Discard, C4s=>C3s
    # RG2-6: Grow C2c into C4c with C2c as its own hub would win now, not allowed
    10c. Takeoff: S4m -> S21u4
    10d. Takeoff: S1p -> S21u2
  Draw with Shuffle
  Restore: C3s=>C4s
```

### Turns 11 and 12

A beats the three Ancients 9:3 and holds the Shipyard Star. B produces
S4c, the last Level-4 card, into its Discard.

```text
11. A, Energy 2
  Play:
    11a. Attack: S00 -> S01[A?,A?,A?] << 2r
         Hand[S1m|1m+1e Hidden + S1m/2c|1m+1e Hidden + S1m/1c|1m Hidden]
         + S00[C2m@s4|2m + S2m@u2|2r1m + H1m@u4|1r1m] = 3r9m
         Reveal: S1m, S1m/2c, S1m/1c, A1, A1, A1
         Total: 9m against 3d, attacker wins, Advantage 6
         Outcome: C2m,S2m,H1m saved; S2m->S01u1; A1,A1,A1->AncientDeck
           S1m,S1m/2c,S1m/1c->Discard
    # RG2-7: the home C2m fights remotely and does not deplete; RG2-8: one slot, A picks S2m
    11b. Takeoff: S2p -> S00u2
  Draw with Shuffle: S2s -> Discard

12. B, Energy 1
  Play:
    12a. Create at Shipyard: S4c@Fac1 -> Discard << 5p
         Hand[S2p|1p+1e + H1p|1p + S1p/1s|1p + S1p/2s|1p]
         + B2p@S21s3|Shipyard = 5p
         S2p,H1p,S1p/1s,S1p/2s->Discard, B2p=>B1p
  Draw with Shuffle: S2c -> Discard
  Restore: B1p=>B2p
```

### Turns 13 and 14

A explores S01o5. B makes a spare Research only to have a move and
keeps its set.

```text
13. A, Energy 1
  Play:
    13a. Explore with Survey: S01o5 => Space|1r << 1r2s
         Hand[S2s|Survey + S1s|1s+1e + S1m|1r] = 1r2s
         S2s,S1s,S1m->Discard
  Draw with Shuffle: S2c,S1c -> Discard

14. B, Energy 1
  Play:
    14a. Research: S4s@Lab1 -> Fac1 << 5s,*1p,*2s
         Hand[S1s|1s + S1s/2m|1s] + S21[C4s@s4|3s,*4s + S1p@u2|*1p] = 5s,*1p,*4s
         S1s,S1s/2m,S1p->Discard, C4s=>C3s
    # a spare Research, only to have a move
  Draw with Shuffle: S1m,S2p,H1p -> Discard
  Restore: C3s=>C4s
```

### Turns 15 and 16

A finds the Military Star S12, still two hidden tiles from S21. B
draws S4c and takes it off: Singularity.

```text
15. A, Energy 1
  Play:
    15a. Explore with Recon: S12 => Military|3+1 with A?,A? << 2r6m
         S01[S1m@Hand|1m + S1m/1c@Hand|1m + S1m/2c@Hand|1m + S2m@u1|2r1m] = 2r4m
         + S00[S2s@Hand|2r + H1m@u4|Recon,1r + S2p@u2|2r + C2m@s4|2m] = 5r2m
         S1m,S1m/1c,S1m/2c,S2m,S2s,H1m,S2p->Discard, C2m=>C1m
    15b. Takeoff: S1s -> S01u1
    # S01 is empty after the Explore, the referee let this Takeoff stand
  Draw with Shuffle
  Restore: C1m=>C2m

16. B, Energy 2
  Play:
    16a. Takeoff: S4c -> S21u2
  Check: Singularity: S4m@S21u4, S4c@S21u2, B4p@S21s2, C4s@S21s4
```

## Result

```text
Result: B wins by Singularity, 0-1
```
