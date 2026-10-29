# Game 3: Turtle 1-0 Gambler

First duel playtest, 2026-10-23, seed 303. A wins 1-0 by Singularity
in Turn 25: three Level-4 Colonies Ready and S4p in Hand. A Colony
race, both players reach four Level-4 Colonies. The first full Check
wins.

## Score

One line per turn, only what happened. `!` good, `!!` decisive, `?!`
dubious,
`!?` interesting, as in chess.

```text
  1. A  Create C2m@S00s2; Takeoff S2m S1m
  2. B  Takeoff S1m/2c; Create C2m@S21s1; Explore S12o7=Space; Takeoff S2s S1s
  3. A  Takeoff H1c/1m; Create C2s@S00s3
  4. B  Research C4c?!; Takeoff S1c/1p S1c/2p
  5. A  Research C4m; Grow C1m=>C4m!; Takeoff S2c
  6. B  Grow C2m=>C4c; Create C2m@S21s3!; Explore S20o3=Space; Takeoff S1s
  7. A  Manage S2m=>S1s/2m!?; Research C4c; Grow C2s=>C4c
  8. B  Research C4s!; Grow C2m=>C4s; Takeoff S1c/2p
  9. A  Manage swap C4m,C2c!?; Explore S00o3=Space
 10. B  Manage swap C4s,C2c; Takeoff S1m H1s/1p S2m
 11. A  Explore S01=Military A?,A?!; Takeoff S2s S1s
 12. B  Explore S20=Defense A?; Attack S20 5:3!; Create C2m@S20s1!!
 13. A  Manage S2c=>S1m/2c; Attack S01 6:3!
 14. B  Explore S10o5=Space; Takeoff S1m/2c S2s S1c/2p
 15. A  Create C2s@S01s1; Takeoff H1c/1m
 16. B  Explore S10=Science A?,A?; Attack S10 9:3!
 17. A  Research C4s; Grow C2s=>C4s!; Takeoff S2m
 18. B  Create C2p@S10s1; Create C2s@S10s2!
 19. A  Research C4p!; Takeoff H1c/1m
 20. B  Research C4m; Takeoff S1c S1c/1p
 21. A  Manage S4m,S4c->Lab4!?; Manage B1p=>B2p; Research S4p!
 22. B  Research C4p; Grow C2s=>C4m!; Explore S11o8=Space
 23. A  Create S4p!; Takeoff S1m S1m/2c S1s
 24. B  Grow C2p=>C4p?!; Recover S1m; Takeoff S1m/1c
 25. A  Takeoff S1p!!; Singularity                                              1-0
```

## Record

```text
Game: First duel, playtest 3, 2026-10-23, seed 303
Player A: Turtle (Sonnet), home S00
Player B: Gambler (Sonnet), home S21
Stars: S01 Military 3+1, S10 Science 2+2, S11 Shipyard 1+3, S12 Energy 2+2, S20 Defense 3+1
Setup A: B2p@S00s1, C2c@S00s4
Setup B: B2p@S21s2, C2c@S21s4
```

Both reordered their Factory Colony piles.

### Turns 1 and 2

Both raise a C2m at home. B explores S12o7.

```text
1. A, Energy 1
  Play:
    1a. Create at Academy: C2m@Fac3 -> S00s2 << 3c
        S1c@Hand|1c + C2c@S00s4|Academy,2c = 3c
        S1c->Discard, C2c=>C1c
    1b. Takeoff: S2m -> S00u4
    1c. Takeoff: S1m -> S00u1
  Restore: C1c=>C2c

2. B, Energy 1
  Play:
    2a. Takeoff: S1m/2c -> S21u3
    2b. Create at Academy: C2m@Fac3 -> S21s1 << 3c
        S1c@Hand|1c + C2c@S21s4|Academy,2c = 3c
        S1c->Discard, C2c=>C1c
    2c. Explore with Recon: S12o7 => Space|1r << 1r2m
        H1m@Hand|Recon + S1m/2c@S21u3|1r2m = 1r2m
        H1m,S1m/2c->Discard
    2d. Takeoff: S2s -> S21u2
    2e. Takeoff: S1s -> S21u4
  Restore: C1c=>C2c
```

### Turns 3 and 4

A raises C2s: its home Structure row is full. B researches C4c onto
its Colony pile and buries C2p under it.

```text
3. A, Energy 2
  Play:
    3a. Takeoff: H1c/1m -> S00u2
    3b. Create at Academy: C2s@Fac3 -> S00s3 << 3c
        S1c/1p@Hand|1c + C2c@S00s4|Academy,2c = 3c
        S1c/1p->Discard, C2c=>C1c
  Draw with Shuffle: S2s,S2p,S1s -> Discard
  Restore: C1c=>C2c

4. B, Energy 2
  Play:
    4a. Research: C4c@Lab4 -> Fac3 << 5s,*2c
        Hand[S1s/2m|1s + S1s/1m|1s+1e + H1s/1p|1s] + S21[C2c@s4|*2c + S1s@u4|1s]
        = 5s,*2c
        S1s/2m,S1s/1m,H1s/1p,S1s->Discard, C2c=>C1c
    # taken back: Create C2p, it lies under C4c now (RG3-1)
    4b. Takeoff: S1c/1p -> S21u1
    4c. Takeoff: S1c/2p -> S21u4
  Draw with Shuffle
  Restore: C1c=>C2c
```

### Turns 5 and 6

A researches C4m and grows C2m into it. B grows C2m into C4c and
raises the returned C2m again.

```text
5. A, Energy 3
  Play:
    5a. Research: C4m@Lab4 -> Fac3 << 5s,*2m
        Hand[S2s|1s+2e + S1s|1s + H1s/1p|1s] + S00[C2c@s4|Academy + C2m@s2|*2m]
        = 5s,*2m
        S2s,S1s,H1s/1p->Discard, C2c=>C1c, C2m=>C1m
    5b. Upgrade with Grow at Academy: C1m@S00s2 => C4m << 2c
        S1c/1p@Hand|1c + S00[C1c@s4|Academy + H1c/1m@u2|Grow,1c] = 2c
        S1c/1p,H1c/1m->Discard, C1m->Fac3
    5c. Takeoff: S2c -> S00u3
  Draw with Shuffle
  Restore: C1c=>C2c

6. B, Energy 2
  Play:
    6a. Upgrade with Grow at Academy: C2m@S21s1 => C4c << 2c
        H1c/1m@Hand|Grow + C2c@S21s4|Academy,2c = 2c
        H1c/1m->Discard, C2c=>C1c, C2m->Fac3
    6b. Create at Academy: C2m@Fac3 -> S21s3 << 3c
        S1c@Hand|1c + S21[S1c/2p@u4|2c + C1c@s4|Academy] = 3c
        S1c,S1c/2p->Discard
    6c. Explore with Recon: S20o3 => Space|1r << 1r2m
        Hand[S2m|1m+1e + H1p|1r] + C2m@S21s3|Recon = 1r2m
        S2m,H1p->Discard, C2m=>C1m
    6d. Takeoff: S1s -> S21u4
  Draw with Shuffle
  Restore: C1c=>C2c, C1m=>C2m
```

### Turns 7 and 8

The mirror goes on: A grows C2s into C4c, B grows C2m into C4s. 10
Culture points each.

```text
7. A, Energy 2
  Play:
    7a. Manage: S2m@S00u4 => S1s/2m << 1s
        S1s@Hand|1s = 1s; S1s->Discard
    7b. Research: C4c@Lab4 -> Fac3 << 5s,*2c
        H1s/1p@Hand|1s + S00[C2c@s4|*2c+2e + S1s/2m@u4|2s] = 5s,*2c
        H1s/1p,S1s/2m->Discard, C2c=>C1c
    7c. Upgrade with Grow at Academy: C2s@S00s3 => C4c << 2c
        Hand[H1c/1m|Grow + S1c|1c + S1c/2p|1c] + C1c@S00s4|Academy = 2c
        H1c/1m,S1c,S1c/2p->Discard, C2s->Fac3
  Draw with Shuffle
  Restore: C1c=>C2c

8. B, Energy 2
  Play:
    8a. Research: C4s@Lab4 -> Fac1 << 5s,*2s
        Hand[S1s/2m|1s + S1s/1m|1s+1e]
        + S21[S2s@u2|1s,*2s + S1s@u4|1s + C2c@s4|Academy] = 5s,*2s
        S1s/2m,S1s/1m,S2s,S1s->Discard, C2c=>C1c
    # C4s onto the Hero pile, so C2m stays on top of the Colony pile
    8b. Upgrade with Grow at Academy: C2m@S21s3 => C4s << 2c
        Hand[H1c/1m|Grow + S2c|1c] + S21[S1c/1p@u1|1c + C1c@s4|Academy] = 2c
        H1c/1m,S2c,S1c/1p->Discard, C2m->Fac3
    8c. Takeoff: S1c/2p -> S21u3
  Draw with Shuffle
  Restore: C1c=>C2c
```

### Turns 9 and 10

Both swap their best Colony into the last Structure slot, where
nothing overlaps it.

```text
9. A, Energy 1
  Play:
    9a. Manage: S00[C4m@s2 + C2c@s4] -> S00[C4m@s4 + C2c@s2] << 2s
        S1s@Hand|1s+1e = 2s; S1s->Discard
    # RG3-3: a swap is 2 operations
    9b. Explore with Survey: S00o3 => Space|1r << 1r2s
        Hand[S2s|Survey + H1s/1p|1s + S1s/2m|1s + S1p|1r] = 1r2s
        S2s,H1s/1p,S1s/2m,S1p->Discard
  Draw with Shuffle

10. B, Energy 2
  Play:
    10a. Manage: S21[C4s@s3 + C2c@s4] -> S21[C4s@s4 + C2c@s3] << 2c
         Hand[S1c|1c + S1c/1p|1c] = 2c; S1c,S1c/1p->Discard
    10b. Takeoff: S1m -> S21u1
    10c. Takeoff: H1s/1p -> S21u2
    10d. Takeoff: S2m -> S21u4
  Draw with Shuffle
```

### Turns 11 and 12

A finds the Military Star S01. B finds the Defense Star S20, beats its
Ancient, moves S2m in and raises a C2m there, all in one turn.

```text
11. A, Energy 1
  Play:
    11a. Explore with Recon: S01 => Military|3+1 with A?,A? << 2r6m
         Hand[H1m|Recon + S1m/1c|1m + S2p|2r] + S00[C4m@s4|3m+1e + S1m@u1|1r1m]
         = 3r6m
         H1m,S1m/1c,S2p,S1m->Discard, C4m=>C3m
    11b. Takeoff: S2s -> S00u2
    11c. Takeoff: S1s -> S00u1
  Draw with Shuffle
  Restore: C3m=>C4m

12. B, Energy 3
  Play:
    12a. Explore with Survey: S20 => Defense|3+1 with A? << 2r5s
         Hand[S2s|Survey + S1s|1s] + S21[C4s@s4|3r3s + H1s/1p@u2|1r1s] = 4r5s
         S2s,S1s,H1s/1p->Discard, C4s=>C3s
    12b. Attack: S21 -> S20[A?] << 2r
         Hand[H1m|1m+1e Hidden + S1m/2c|1m Hidden] + S21[S1m@u1|1r1m + S2m@u4|2r1m]
         = 3r5m
         Reveal: H1m, S1m/2c, A3
         Total: 5m against 3d, attacker wins, Advantage 2
         Outcome: S2m saved, S1m Damaged; S2m->S20u3; A3->AncientDeck
           H1m,S1m/2c->Discard
    # RG3-4: the winner picks whom to save
    12c. Create at Academy: C2m@Fac3 -> S20s1 << 2r3c
         S1c/1p@Hand|1c + S21[S1c/2p@u3|1r2c + C2c@s3|Academy + C3s@s4|1r]
         = 2r3c
         S1c/1p,S1c/2p->Discard, C2c=>C1c
  Draw with Shuffle
  Restore: C3s=>C4s, C1c=>C2c
```

### Turns 13 and 14

A beats the two Ancients of S01 and holds it with S1m/2c. B explores
towards S10.

```text
13. A, Energy 1
  Play:
    13a. Manage: S2c@S00u3 => S1m/2c << 1p
         S1p@Hand|1p = 1p; S1p->Discard
    13b. Attack: S00 -> S01[A?,A?] << 2r
         Hand[H1p|1r + S2m|1m Hidden + S1m|1m Hidden + H1m|1m Hidden]
         + S1m/2c@S00u3|1r2m+1e = 2r6m
         Reveal: S2m, S1m, H1m, A1, A2
         Total: 6m against 3d, attacker wins, Advantage 3
         Outcome: S1m/2c saved; S1m/2c->S01u1; A1,A2->AncientDeck
           H1p,S2m,S1m,H1m->Discard
  Draw with Shuffle

14. B, Energy 3
  Play:
    14a. Explore with Recon: S10o5 => Space|1r << 1r2m
         S1s@Hand|1r + C2m@S20s1|Recon,2m = 1r2m
         S1s->Discard, C2m=>C1m
    14b. Takeoff: S1m/2c -> S20u1
    14c. Takeoff: S2s -> S21u4
    14d. Takeoff: S1c/2p -> S21u2
  Draw with Shuffle: S1c -> Discard
  Restore: C1m=>C2m
```

### Turns 15 and 16

A raises C2s at S01. B finds the Science Star S10 at distance 4, beats
its Ancients 9:3 and sits next to A's home.

```text
15. A, Energy 1
  Play:
    15a. Create at Academy: C2s@Fac3 -> S01s1 << 2r3c
         Hand[S1c|1c + S1c/2p|1c + S1c/1p|1c + S2m|2r] + C2c@S00s2|Academy
         = 2r3c
         S1c,S1c/2p,S1c/1p,S2m->Discard, C2c=>C1c
    15b. Takeoff: H1c/1m -> S01u3
  Draw with Shuffle
  Restore: C1c=>C2c

16. B, Energy 4
  Play:
    16a. Explore with Survey: S10 => Science|2+2 with A?,A? << 4r6s
         Hand[H1s/1p|1s + S1s|1s] + S21[S2s@u4|Survey,2r1s + C4s@s4|3r3s]
         = 5r6s
         H1s/1p,S1s,S2s->Discard, C4s=>C3s
    16b. Attack: S20 -> S10[A?,A?] << 2r
         Hand[H1m|1m+1e Hidden + S1m/1c|1m Hidden + S1p|+1e Hidden]
         + S20[S2m@u3|2r1m + S1m/2c@u1|1r2m + C2m@s1|2m] = 3r9m
         Reveal: H1m, S1m/1c, S1p, A1, A2
         Total: 9m against 3d, attacker wins, Advantage 6
         Outcome: S2m,S1m/2c,C2m saved; S2m->S10u1, S1m/2c->S10u2; A1,A2->AncientDeck
           H1m,S1m/1c,S1p->Discard
    # RG3-5: the Colony C2m attacks and does not deplete
  Draw with Shuffle
  Restore: C3s=>C4s
```

### Turns 17 and 18

A researches C4s and grows its S01 Colony into it. B raises two
Colonies at S10 from home.

```text
17. A, Energy 2
  Play:
    17a. Research: C4s@Lab4 -> Fac3 << 5s,*2s
         Hand[H1s/1p|1s + S1s/1m|1s]
         + S00[C2c@s2|Academy + S1s@u1|1s + S2s@u2|1s,*2s+1e] = 5s,*2s
         H1s/1p,S1s/1m,S1s,S2s->Discard, C2c=>C1c
    17b. Upgrade with Grow at Academy: C2s@S01s1 => C4s << 2r2c
         Hand[S1c|1r + S1p|1r] + C1c@S00s2|Academy + H1c/1m@S01u3|Grow,1c+1e
         = 2r2c; S1c,S1p,H1c/1m->Discard, C2s->Fac3
    17c. Takeoff: S2m -> S00u4
  Draw with Shuffle
  Restore: C1c=>C2c

18. B, Energy 3
  Play:
    18a. Create at Academy: C2p@Fac3 -> S10s1 << 4r3c
         S1c@Hand|1c + S21[S1c/2p@u2|1r2c + C2c@s3|Academy + C4s@s4|3r] = 4r3c
         S1c,S1c/2p->Discard, C2c=>C1c, C4s=>C3s
    18b. Create at Academy: C2s@Fac3 -> S10s2 << 4r3c
         Hand[S1c/1p|1c + S2s|2r + H1p|1r + H1c/1m|1c+1e]
         + S21[C1c@s3|Academy + C3s@s4|1r] = 4r3c
         S1c/1p,S2s,H1p,H1c/1m->Discard
  Draw with Shuffle
  Restore: C1c=>C2c, C3s=>C4s
```

### Turns 19 and 20

A researches C4p: it has M4, C4 and S4 Ready. B researches C4m with a
Prerequisite from S20.

```text
19. A, Energy 1
  Play:
    19a. Research: C4p@Lab4 -> Fac3 << 2r5s,*2p
         S01[S2s@Hand|1s + H1s/1p@Hand|1s + S1m@Hand|1r + S2p@Hand|*2p
           + C4s@s1|3r3s + S1m/2c@u1|1r] = 5r5s,*2p
         + C2c@S00s2|Academy
         S2s,H1s/1p,S1m,S2p,S1m/2c->Discard, C4s=>C3s, C2c=>C1c
    19b. Takeoff: H1c/1m -> S01u3
  Draw with Shuffle
  Restore: C1c=>C2c, C3s=>C4s

20. B, Energy 3
  Play:
    20a. Research: C4m@Lab4 -> Fac3 << 5s,*2m
         S21[S1s@Hand|1s + H1s/1p@Hand|1s + C2c@s3|Academy + C4s@s4|3s] = 5s
         + S20[S2s@Hand|2r + C2m@s1|*2m] = 2r,*2m
         S1s,H1s/1p,S2s->Discard, C2c=>C1c, C4s=>C3s, C2m=>C1m
    # the Prerequisite comes from S20
    20b. Takeoff: S1c -> S21u2
    20c. Takeoff: S1c/1p -> S21u3
  Draw with Shuffle
  Restore: C3s=>C4s, C1c=>C2c, C1m=>C2m
```

### Turns 21 and 22

A digs S4p out of its Laboratory and researches it. B grows its S10
C2s into C4m.

```text
21. A, Energy 2
  Play:
    # taken back: Research S4p with the Depleted B2p, its weak end is Level 1 (RG3-7)
    21a. Manage: S4m,S4c@Lab1 -> Lab4 << 2m
         Hand[S1m/1c|1m + S1m/2c|1m] + B2p@S00s1|Shipyard = 2m
         S1m/1c,S1m/2c->Discard, B2p=>B1p
    21b. Manage: B1p@S00s1 => B2p << 1p
         S1p@Hand|1p = 1p; S1p->Discard
    21c. Research: S4p@Lab1 -> Fac3 << 2r5s,*1s,*2p
         S01[S1s@Hand|1s + H1s/1p@Hand|1s + C4s@s1|3s,*4s] = 5s,*4s
         + B2p@S00s1|*2p
         S1s,H1s/1p->Discard, C4s=>C3s, B2p=>B1p
  Draw with Shuffle
  Restore: B1p=>B2p, C3s=>C4s

22. B, Energy 4
  Play:
    22a. Research: C4p@Lab4 -> Fac1 << 5s,*2p
         Hand[S1s|1s + H1s/1p|1s] + S21[C2c@s3|Academy + C4s@s4|3s + B2p@s2|*2p]
         = 5s,*2p
         S1s,H1s/1p->Discard, C2c=>C1c, C4s=>C3s, B2p=>B1p
    22b. Upgrade with Grow at Academy: C2s@S10s2 => C4m << 4r2c
         Hand[H1c/1m|Grow + S2p|2r]
         + S21[C1c@s3|Academy + C3s@s4|1r + S1c@u2|1r1c + S1c/1p@u3|1r1c] = 5r2c
         H1c/1m,S2p,S1c,S1c/1p->Discard, C2s->Fac3
    22c. Explore with Recon: S11o8 => Space|1r << 1r2m
         S2s@Hand|2r + C2m@S20s1|Recon,2m = 2r2m
         S2s->Discard, C2m=>C1m
  Draw with Shuffle
  Restore: C3s=>C4s, C1c=>C2c, C1m=>C2m
```

### Turns 23 and 24

A produces S4p into a tiny Discard and draws it. B has all four C4
Colonies on the Field, but used C4s for Range: Level 3 at the Check.

```text
23. A, Energy 3
  Play:
    23a. Create at Shipyard: S4p@Fac3 -> Discard << 5p
         Hand[S2p|1p+1e + S1p/2s|1p] + B2p@S00s1|Shipyard+2e = 5p
         S2p,S1p/2s->Discard, B2p=>B1p
    # a tiny Discard: S4p is drawn at once
    23b. Takeoff: S1m -> S00u1
    23c. Takeoff: S1m/2c -> S00u2
    23d. Takeoff: S1s -> S01u1
  Draw with Shuffle
  Restore: B1p=>B2p

24. B, Energy 5
  Play:
    24a. Upgrade with Grow at Academy: C2p@S10s1 => C4p << 4r2c
         Hand[H1c/1m|Grow+1e + S2s|2r+1e] + S21[C2c@s3|Academy + C4s@s4|3r]
         = 5r2c
         H1c/1m,S2s->Discard, C2c=>C1c, C4s=>C3s, C2p->Fac3
    24b. Recover: S1m@S21u1 Damaged => S1m << 1p
         Hand[H1p|Recover + S2p|1p] = 1p; H1p,S2p->Discard
    24c. Takeoff: S1m/1c -> S21u3
  Check: no Singularity: C3s@S21s4 is Level 3 (RG3-9)
  Draw with Shuffle
  Restore: C3s=>C4s, C1c=>C2c, B1p=>B2p
```

### Turn 25

A takes off one card and keeps S4p in Hand: Singularity.

```text
25. A, Energy 1
  Play:
    25a. Takeoff: S1p -> S00u3
  Check: Singularity: C4m@S00s4, C4c@S00s3, C4s@S01s1, S4p@Hand
```

## Result

```text
Result: A wins by Singularity, 1-0
```
