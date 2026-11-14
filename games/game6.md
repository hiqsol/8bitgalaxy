---
status: draft
scope: playtest
---

# Game 6: Turtle 10-12 Brute

[[Duel]] playtest round 2, 2026-11-13/14, seed 106, version `duel-v2`.
B wins 12:10 on [[VictoryPoints|Victory points]] at the 40-[[Turn]]
cap, which ends the game as at [[Twilight]]. No [[Combat]] at all: the
homes never connected, 8 [[Void]]s ring S11, A never [[Explore]]d and
B Explored only around its own home. B's fourth [[Colony]], [[Turn]]
16, is the margin.

## Score

One line per [[Turn]], only what happened, then
[[VictoryPoints|Victory points]] A:B after the [[Turn]]. `!` good,
`!!` decisive, `?!` dubious, `!?` interesting, as in chess.

```text
  1. A  Takeoff S2c                                                      4:4
  2. B  Create C2m@S21s5; Takeoff S2p S1p                                4:6
  3. A  Create C2m@S00s5                                                 6:6
  4. B  Explore S21o1=Space!; Takeoff S1s/2m S2c S1m S1s                 6:6
  5. A  Create B2m@S00s2?!                                               6:6
  6. B  Explore S21o2=Space                                              6:6
  7. A  Takeoff S2p                                                      6:6
  8. B  Explore S21o9=Asteroids; Takeoff S2p                             6:6
  9. A  Create C2p@S00s4                                                 8:6
 10. B  Explore S21o10=Asteroids, S20 at Distance 2; Takeoff S2s          8:6
 11. A  Takeoff S2m                                                      8:6
 12. B  Takeoff S2p S1s S1m, S21 Units full                              8:6
 13. A  Takeoff S2s                                                      8:6
 14. B  Create C2p@S21s2                                                 8:8
 15. A  Takeoff S1s, S00 full                                            8:8
 16. B  Create C2s@S21s4!, Structures full                               8:10
 17. A  Receive +1e                                                      8:10
 18. B  Takeoff S2m                                                      8:10
 19. A  Receive +1e                                                      8:10
 20. B  "no legal play"?, then Explore S21o3=Void, a dead end?!          8:10
 21. A  Receive, nothing                                                 8:10
 22. B  Takeoff H2m                                                      8:12
 23. A  Receive +1e                                                      8:12
 24. B  Explore S21o4=Space+4r with H2m?!                                8:10
 25. A  Receive, nothing                                                 8:10
 26. B  Takeoff S1m/2c S1s S1p                                           8:10
 27. A  Receive +1e                                                      8:10
 28. B  Explore S21o5=Space                                              8:10
 29. A  Research C4m to Fac3!?                                           8:10
 30. B  Explore S21o6=Void; Takeoff S1m                                  8:10
 31. A  Takeoff S1m                                                      8:10
 32. B  Takeoff S2m S1c                                                  8:10
 33. A  Research S4m to Lab4?                                            8:10
 34. B  Takeoff H2p                                                      8:12
 35. A  Research S4c to Fac2                                             8:12
 36. B  Explore S21o7 stopped, fails                                     8:12
 37. A  Takeoff H2p!; Create S4c to Discard                             10:12
 38. B  Receive, nothing                                                10:12
 39. A  Takeoff S2c                                                     10:12
 40. B  Receive, nothing; cap                                           10:12
```

## Record

```text
Game: Duel, playtest round 2, game 6, 2026-11-13/14, seed 106, version duel-v2
Player A: Turtle (Sonnet), Human, home S00
Player B: Brute (Haiku), Alien, home S21
Stars: S01, S10, S11, S12, S20 Wild, never reached; 8 Voids of Length 1 ring S11
Setup A: C2c@S00s1, B2p@S00s3, HW2s@S00w; Reserve H2c, H2p; Fac1 H2m H2s, Fac2 B2m B2c B2s, Fac3 C2m C2p C2s; Lab default, Lab5 HS6c HS6m HS6p HS6s HS8c HS8p
# RG6-2: a Card is overlapped when the Slot numbered one less holds a Card
Setup B: C2c@S21s1, B2p@S21s3, HW2s@S21w; Reserve H2m, H2p; Factory and Laboratory default
# RG6-3: each player arranges its Factory and Laboratory piles at setup
# RG6-4: both start with Energy 0
Draw A: T1s, S2c, S2s
Draw B: S1p, S1c, T1c, T1s, S2p
```

A keeps its [[Colony|Colonies]] in Fac3 and the [[Hyperstructure]]s in
Lab5, B the default order. A previous referee played [[Turn]]s 1 to 37
and stopped at a usage limit in [[Turn]] 38; this record resumes from
the state files.

### Turns 1 to 4

Both open with a [[Colony]] C2m from the [[Academy]]. B takes off five
[[Ship]]s and [[Explore]]s S21o1 with [[Survey]], the first of its
tiles toward S12.

```text
1. A, Energy 0
  Play:
    1a. Takeoff: S2c -> S00u1
  Draw: T1s,S2s -> Discard

2. B, Energy 0
  Play:
    2a. Takeoff: S2p -> S21u1
    2b. Takeoff: S1p -> S21u2
    2c. Create at Academy: C2m@Fac3 -> S21s5 << 3c
        S1c@Hand:1c + C2c@S21s1:Academy+2c = 3c
        S1c->Discard, C2c=>C1c
  Draw: T1c,T1s -> Discard
  Restore: C1c=>C2c

3. A, Energy 0
  Play:
    3a. Create at Academy: C2m@Fac3 -> S00s5 << 3c
        S1c@Hand:1c + C2c@S00s1:Academy+2c = 3c
        S1c->Discard, C2c=>C1c
  Draw: S2m,S2p,S1s,T1m -> Discard
  Restore: C1c=>C2c

4. B, Energy 0
  Play:
    4a. Takeoff: S1s/2m -> S21u3
    4b. Explore with Survey: S21o1 => Space+1r << 1r2s
        Drawn: Space+1r, Space+1r; Space+1r back to the bag
        S2s@Hand:Survey + S21[S2p@u1:2r + S1s/2m@u3:1r1s+1s] = 3r2s
        S2s,S2p,S1s/2m->Discard
    # RG6-6: the Range requirement is the laid tile's Length, known with the Cost
    4c. Takeoff: S2c -> S21u1
    4d. Takeoff: S1m -> S21u3
    4e. Takeoff: S1s -> S21u4
  Draw with Shuffle
```

### Turns 5 to 10

A builds a [[Base]] B2m and a [[Colony]] C2p and fills its [[Unit]]
[[Slot]]s. B lays three more tiles, S21o2 toward S12, S21o9 and S21o10
toward S20: S12 and S20 are at [[Distance]] 2 from S21, but B never
moves there.

```text
5. A, Energy 0
  Play:
    5a. Create at Shipyard: B2m@Fac2 -> S00s2 << 3p
        Hand[S1p:1p + T1p:1p] + B2p@S00s3:Shipyard+1p = 3p
        S1p,T1p->Discard, B2p=>B1p
  Draw with Shuffle: H2c,T1c,S1m -> Discard
  Restore: B1p=>B2p

6. B, Energy 0
  Play:
    6a. Explore with Recon: S21o2 => Space+1r << 1r2m
        Drawn: BlackHole+1r, Space+1r; BlackHole+1r back to the bag
        Hand[H2m:Recon + T1m:1m] + S21[S1m@u3:1r1m + S2c@u1:2r] = 3r2m
        H2m,T1m,S1m,S2c->Discard
  Draw: H2p,T1p,S2m -> Discard

7. A, Energy 0
  Play:
    7a. Takeoff: S2p -> S00u2
  Draw: H2p,T1c,T1s,H2c -> Discard

8. B, Energy 0
  Play:
    8a. Takeoff: S2p -> S21u3
    8b. Explore with Survey: S21o9 => Asteroids+1r << 1r2s
        Drawn: Asteroids+1r, HyperPass+1r; HyperPass+1r back to the bag
        Hand[S2s:Survey + T1s:1s] + S21[S1s@u4:1r1s + S2p@u3:2r] = 3r2s
        S2s,T1s,S1s,S2p->Discard
  # RG6-1: Asteroids of Length 1 have ExtraPrice 1
  Draw with Shuffle: T1c,S1c -> Discard

9. A, Energy 0
  Play:
    9a. Create at Academy: C2p@Fac3 -> S00s4 << 3c
        S1c@Hand:1c + C2c@S00s1:Academy+2c = 3c
        S1c->Discard, C2c=>C1c
  Draw with Shuffle: S2s,S1p,S1m,T1m -> Discard
  Restore: C1c=>C2c

10. B, Energy 0
  Play:
    10a. Takeoff: S2s -> S21u3
    10b. Explore with Recon: S21o10 => Asteroids+1r << 1r2m
        Drawn: BlackHole+6r, Asteroids+1r; BlackHole+6r back to the bag
        H2m@Hand:Recon + S21[C2m@s5:Recon+2m + S1p@u2:1r] = 1r2m
        H2m,S1p->Discard, C2m=>C1m
  Draw: S1c,T1s,T1p -> Discard
  Restore: C1m=>C2m
```

### Turns 11 to 16

Both homes fill up: A's 5 [[Unit]] [[Slot]]s by [[Turn]] 15, B's by
[[Turn]] 12. B adds C2p and C2s, four [[Colony|Colonies]] against A's
three, 10:8.

```text
11. A, Energy 0
  Play:
    11a. Takeoff: S2m -> S00u3
  Draw: T1p,S1s,S1c,H2c -> Discard

12. B, Energy 0
  Play:
    12a. Takeoff: S2p -> S21u1
    12b. Takeoff: S1s -> S21u5
    12c. Takeoff: S1m -> S21u4
  Draw with Shuffle: H2p,T1m -> Discard

13. A, Energy 0
  Play:
    13a. Takeoff: S2s -> S00u4
  Draw with Shuffle: T1s,T1c,T1m,S1p -> Discard

14. B, Energy 0
  Play:
    14a. Create at Academy: C2p@Fac3 -> S21s2 << 3c
        S2c@Hand:1c + C2c@S21s1:Academy+2c = 3c
        S2c->Discard, C2c=>C1c
  Draw: S2m,T1c,H2p,T1p -> Discard
  Restore: C1c=>C2c

15. A, Energy 0
  Play:
    15a. Takeoff: S1s -> S00u5
  Draw: S1m,H2p,T1m,H2c -> Discard

16. B, Energy 0
  Play:
    16a. Create at Academy: C2s@Fac3 -> S21s4 << 3c
        S1c@Hand:1c + C2c@S21s1:Academy+2c = 3c
        S1c->Discard, C2c=>C1c
  Draw with Shuffle: T1m,T1s,S1p,H2m -> Discard
  Restore: C1c=>C2c
```

### Turns 17 to 22

With full homes and no [[Takeoff]], A [[Receive]]s for [[Energy]] or
for nothing (RG6-7). B, told it can still move, [[Explore]]s outer
tiles of S21 that border no [[Star]].

```text
17. A, Energy 0
  Play:
    # invalid: Receive started by T1s, a Tool is no Actor
    17a. Receive: +1e
        S0s/1p@Hand + HW2s@S00w:Archive+1e = +1e; S1p->Discard, HW2s=>HW1s
  Draw with Shuffle: T1p,T1s,S1c,T1c -> Discard
  Restore: HW1s=>HW2s

18. B, Energy 0
  Play:
    18a. Takeoff: S2m -> S21u2
  Draw: S1c,T1m,H2m,H2p -> Discard

19. A, Energy 1
  Play:
    19a. Receive: +1e
        S0s/1p@Hand + HW2s@S00w:Archive+1e = +1e; S1p->Discard, HW2s=>HW1s
  Draw with Shuffle: H2p,S1c,H2c,T1p -> Discard
  Restore: HW1s=>HW2s

20. B, Energy 0
  Play:
    # B first claimed it could make no move; it could (Move, Receive, Explore)
    20a. Explore with Survey: S21o3 => Void+1r << 1r1s
        Drawn: Void+1r, Void+2r; Void+2r back to the bag
        S2c@Hand:2r + S21[C2s@s4:Survey + S1s@u5:1r1s] = 3r1s
        S2c,S1s->Discard, C2s=>C1s
    # B's final line left out C2s, its planned Survey: taken as committed
  Draw with Shuffle: T1s,S1p,T1p,T1c -> Discard
  Restore: C1s=>C2s

21. A, Energy 2
  Play:
    # RG6-7: a Receive with only its Starter is a legal Action, no outcome
    21a. Receive: nothing
        S0c/1m@Hand; S1m->Discard
  Draw with Shuffle: T1m,T1c,T1s,H2c -> Discard

22. B, Energy 0
  Play:
    22a. Takeoff: H2m -> S21u5
  Draw: S2c,T1p,S1c,S1p -> Discard
```

### Turns 23 to 28

The same pattern: A banks [[Energy]] with [[Receive]], B lays S21o4
and S21o5, dead ends. B's [[Hero]] H2m scores 2 while on the [[Field]]
and spends itself on the [[Explore]] of [[Turn]] 24.

```text
23. A, Energy 2
  Play:
    23a. Receive: +1e
        S0s/1p@Hand + HW2s@S00w:Archive+1e = +1e; S1p->Discard, HW2s=>HW1s
  Draw with Shuffle: S1c,T1p,H2p,T1c -> Discard
  Restore: HW1s=>HW2s

24. B, Energy 0
  Play:
    24a. Explore with Recon: S21o4 => Space+4r << 4r5m
        Drawn: Space+5r, Space+4r; Space+5r back to the bag
        Hand[S1s:1r + T1m:1m] + S21[H2m@u5:2r2m+Recon + S2m@u2:2r1m + S1m@u4:1r1m] = 6r5m
        S1s,T1m,H2m,S2m,S1m->Discard
  Draw with Shuffle: T1s,H2p,T1c -> Discard

25. A, Energy 3
  Play:
    25a. Receive: nothing
        S0c/1m@Hand; S1m->Discard
  Draw with Shuffle: T1s,T1m,H2c,H2p -> Discard

26. B, Energy 0
  Play:
    26a. Takeoff: S1m/2c -> S21u2
    26b. Takeoff: S1s -> S21u4
    26c. Takeoff: S1p -> S21u5
  Draw: T1m,T1p -> Discard

27. A, Energy 3
  Play:
    27a. Receive: +1e
        S0s/1p@Hand + HW2s@S00w:Archive+1e = +1e; S1p->Discard, HW2s=>HW1s
  Draw with Shuffle: T1c,S1c,T1p,H2c -> Discard
  Restore: HW1s=>HW2s

28. B, Energy 0
  Play:
    28a. Explore with Survey: S21o5 => Space+1r << 1r2s
        Drawn: Space+4r, Space+1r; Space+4r back to the bag
        Hand[S1c:1r + T1s:1s] + S21[S2s@u3:2r1s+Survey + S1s@u4:1r1s] = 4r3s
        S1c,T1s,S2s,S1s->Discard
  Draw with Shuffle: T1c,H2p,S2m -> Discard
```

### Turns 29 to 34

A turns to the [[Laboratory]]: [[Research]] of C4m and S4m. B lays
S21o6 and takes off H2p, 12:8.

```text
29. A, Energy 4
  Play:
    # invalid: Research priced 4s with the Homeworld counted as 2s
    29a. Research at Archive: C4m@Lab4 -> Fac3 << 5s *2m
        Hand[H2p:2s + T1s:1s] + S00[S2s@u4:1s + S1s@u5:1s + B2m@s2:*2m
          + HW2s@w:Archive+1e] = 5s *2m, +1e to Hand
        H2p,T1s,S2s,S1s->Discard, B2m=>B1m, HW2s=>HW1s
  Draw with Shuffle: S1m,T1m,S1c -> Discard
  Restore: B1m=>B2m, HW1s=>HW2s

30. B, Energy 0
  Play:
    30a. Takeoff: S1m -> S21u4
    30b. Explore with Recon: S21o6 => Void+1r << 1r1m
        Drawn: Space+1r, Void+1r; Space+1r back to the bag
        H2m@Hand:Recon + S21[S1m/2c@u2:1r1m + S2p@u1:2r] = 3r1m
        H2m,S2c,S2p->Discard
  Draw: S2s,T1p,S1s -> Discard

31. A, Energy 5
  Play:
    # invalid: Grow of C2p with H2c, whose Upgrade is on its Production End
    31a. Takeoff: S1m -> S00u4
  Draw: T1c,H2c,T1p,S1p -> Discard

32. B, Energy 0
  Play:
    32a. Takeoff: S2m -> S21u1
    32b. Takeoff: S1c -> S21u2
  Draw with Shuffle: T1m,T1c,T1s -> Discard

33. A, Energy 5
  Play:
    33a. Research at Archive: S4m@Lab1 -> Lab4 << 1s
        S1s@Hand:1s + HW2s@S00w:Archive+1e = 1s, +1e lost over the Hand size
        S1s->Discard, HW2s=>HW1s
  Draw with Shuffle: S1c,T1s,H2p,S2s -> Discard
  Restore: HW1s=>HW2s

34. B, Energy 0
  Play:
    34a. Takeoff: H2p -> S21u3
  Draw: S2c,T1m,S1s,T1s -> Discard
```

### Turns 35 to 40

A [[Research]]es S4c and [[Create]]s it to its [[Discard]] for a
[[Grow]] it never draws in time; its H2p [[Takeoff]] makes 10:12. B's
[[Grow]] fails for want of a [[Colony]] at the [[Factory]], and both
close with empty [[Receive]]s and a [[Takeoff]].

```text
35. A, Energy 5
  Play:
    # invalid: Boost through S1p on its Level 0 End, Capacity 0
    35a. Research at Archive: S4c@Lab1 -> Fac2 << 5s *1m *2c
        Hand[S0s/1p:0s + T1s:1s] + S00[HW2s@w:Archive+1e+2e + S2c@u1:1c+2e
          + S1m@u4:*1m + C2c@s1:*2c] = 5s *1m *2c
        # RG6-5: the +1e of the Homeworld boosts the same Action at once, the Hand limit counts what stays
        S1p,T1s,S2c,S1m->Discard, C2c=>C1c, HW2s=>HW1s; Energy 6-4 = 2
  Draw: H2c,T1m,T1c -> Discard
  Restore: C1c=>C2c, HW1s=>HW2s

36. B, Energy 0
  Play:
    36a. Explore with Recon: S21o7 fails << 3r5m or 4r5m
        Drawn: BlackHole+3r, Space+4r; both back to the bag
        H2m@Hand:Recon, B stops; H2m->Discard
  Draw with Shuffle: S2s,T1p,T1c,S2p -> Discard

37. A, Energy 2
  Play:
    37a. Takeoff: H2p -> S00u1
    # invalid: S2s from Hand counted as 1p and +1p
    37b. Create at Shipyard: S4c@Fac2 -> Discard << 5p
        Hand[S1p/2s:1p + T1p:1p] + S00[S2p@u2:1p + B2p@s3:Shipyard+2e] = 5p
        S2s,T1p,S2p->Discard, B2p=>B1p; Energy 2-2 = 0
  Draw with Shuffle: S1c,S1s -> Discard
  Restore: B1p=>B2p


38. B, Energy 0
  Play:
    # invalid: Grow of C2s at Academy, no Colony at the Factory, and H2m from Hand counted as 2c and Upgrade
    # referee error: Takeoff S2p -> S21u5 confirmed though u5 holds S1p, then withdrawn
    # invalid: Receive with S2p (Production) counting the Science +1e of the Homeworld
    38a. Receive: nothing
        S2p@Hand; S2p->Discard
  Draw with Shuffle: H2m,T1p,T1m,T1c -> Discard

39. A, Energy 0
  Play:
    39a. Takeoff: S2c -> S00u2
  Draw: S1c,S1m,T1p,T1c -> Discard

40. B, Energy 0
  Play:
    40a. Receive: nothing
        S2c@Hand; S2c->Discard
  Draw with Shuffle: S1s,T1s,S2s,T1m -> Discard
```

## Result

```text
Cap: 40 Turns, the game ends as at Twilight, no achievement
Victory points: A 10 (HW2s 2, H2p 2, C2c 2, C2p 2, C2m 2), B 12 (HW2s 2, H2p 2, C2c 2, C2p 2, C2s 2, C2m 2)
Result: B wins 12:10
```

## Rulings

- **RG6-1: Asteroids ExtraPrice.** Gap: the [[Duel]] bag table gives
  [[Asteroids]] "1 on 7, 2 on 6" without saying which. Ruling: the 7
  [[Asteroids]] of [[Length]] 1 have ExtraPrice 1, the 6 of [[Length]]
  2 to 4 have ExtraPrice 2. Pages: rules/[[Duel]].md (bag table),
  rules/[[Field]]/[[Asteroids]].md.
- **RG6-2: Overlap direction.** Gap: "the next lower [[Slot]]" doesn't
  say whether lower means the smaller number. Ruling: a [[Card]] in
  [[Slot]] k is overlapped when [[Slot]] k-1 of its row holds a
  [[Card]]; [[Slot]] 1 is never overlapped. Pages:
  rules/[[Field]]/[[Slot]].md.
- **RG6-3: Setup piles.** Gap: StartDraw puts [[Card]]s in the
  [[Factory]] (4 piles) and the [[Laboratory]] (5 piles) without an
  arrangement. Ruling: each player arranges both rows freely at setup;
  default by [[Type]]. Pages: rules/StartDraw.md,
  rules/[[Home]]/[[Factory]].md, rules/[[Home]]/[[Laboratory]].md.
- **RG6-4: Starting Energy.** Gap: no page gives the [[Energy]] at
  start. Ruling: 0. Pages: rules/StartDraw.md,
  rules/[[Resource]]s/[[Energy]].md.
- **RG6-5: Energy gained at the Hand limit.** Gap: [[Energy]].md 3
  lets [[Energy]] from a [[Plus]] [[Boost]] its [[Action]] at once,
  [[Energy]].md 7 caps the [[Token]]s in [[Hand]] at the [[Hand]]
  size, without saying when the cap bites. Ruling: [[Energy]] gained
  in an [[Action]] may [[Boost]] that [[Action]] first; the cap
  applies to the [[Token]]s that stay in [[Hand]] after it. [[Turn]]
  35: A held 5, gained 1 and spent 4. Pages:
  rules/[[Resource]]s/[[Energy]].md.
- **RG6-6: Explore Range.** Gap: [[Explore]] 5.1 lets a [[Hidden]]
  [[Space]] that borders the [[Source]] [[Star]] be explored, but its
  [[Distance]] is unknown until the tile is laid. Ruling: as in the
  [[Notation]] examples (`S00o3 => Space+2r << 2r2s`) the [[Range]]
  requirement is the laid tile's [[Length]], known after the draw
  together with the [[Cost]]. First at [[Turn]] 4. Pages:
  rules/TechnologyActions/[[Explore]].md 5,
  rules/[[Field]]/[[Distance]].md, meta/[[Notation]].md.
- **RG6-7: An empty Receive.** Gap: [[Turn]].md 3 forbids passing, but
  [[Receive]] needs no [[Power]] and no participant. Ruling: a
  [[Receive]] with only its [[Starter]] is a legal [[Action]] with no
  outcome, so it satisfies "can't pass"; A used it at [[Turn]]s 21 and
  25 when its home was full. Pages: rules/[[Turn]].md 3,
  rules/BasicActions/[[Receive]].md.
