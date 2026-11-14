---
status: draft
scope: playtest
---

# Game 4: Warlord 1-0 Industrialist

[[Duel]] playtest round 2, 2026-11-13/14, seed 104, version `duel-v2`.
A wins 1-0 by [[Military]] at the start of [[Turn]] 40: B can not make
a move after losing its home [[Star]] and its whole [[Hand]] in the
game's only rival [[Combat]], [[Turn]] 39.

## Score

One line per [[Turn]], only what happened. `!` good, `!!` decisive,
`?!` dubious, `!?` interesting, as in chess.

```text
  1. A  Receive +1e; Takeoff T1s T1p
  2. B  Research B4p; Takeoff T1m
  3. A  Research C4m; Create C2m@S00s5
  4. B  Create B2s@S21s4, C2p@S21s5; Takeoff T1s
  5. A  Takeoff S1m/2c T1c S1p; Receive +1e
  6. B  Manage B2s->s2; Recycle T1m!?; Takeoff S1m T1c
  7. A  Research S4m; Takeoff T1m
  8. B  Create B4p@S21s4; Recycle T1s T1c; Takeoff T1p
  9. A  Grow C2m=>C3m; Receive +1e; Create S4m
 10. B  Research C4p, HS6p; Recycle T1p
 11. A  Takeoff H2m S2m
 12. B  Recycle C2p, S1s; Takeoff S1s S2m
 13. A  Receive +1e; Attack S21 invalid, no route; Explore S00o3=Space
 14. B  Create HS6p DysonCollector@S21s5!
 15. A  Explore S01o6 failed; Explore S01o5=Asteroids
 16. B  Research B4m; Takeoff S1m/2c S1p
 17. A  Research B4m
 18. B  Enhance B2s=>B4m; Research C4m to Lab1; Takeoff S2m
 19. A  Explore S12o8=Space: the lane S00-S21 is open, Distance 6!
 20. B  Research S4m, H4m to Lab1, HS6m
 21. A  Recycle T1c; Takeoff S1m; Receive +1e
 22. B  Recycle B4p; Create HS6m Jamming@S21s4!
 23. A  Disrupt; Manage C2c->s2; Create B4m@S00s1
 24. B  Research C4c to Lab5, B4c
 25. A  Receive +1e
 26. B  Enhance B4m=>B4c?!; Research HS6c
 27. A  Receive, Manage HW1s=>HW2s, Receive; Takeoff S4m!?
 28. B  Recycle B4c; Create HS6c Triumvirate@S21s2
 29. A  Receive +1e; Takeoff H1m/2s carrying 1e
 30. B  Move S2m->S12!?; Create H2m; Research C4p, H4p to Lab3
 31. A  Attack S12 withdrawn; Move 4 Units ->S12, no Intercept!; Takeoff S2s T1m T1p
 32. B  Move S2m->S21; Takeoff H2m carrying 2e
 33. A  Receive +1e; Takeoff S1m carrying 1e
 34. B  Research H4m to Lab3, S4m; H2m off the Field?!
 35. A  Receive, Manage HW, Receive; Takeoff S2p carrying 2e
 36. B  Enhance S2m=>S4m; Takeoff H2m; Explore S21o9 failed
 37. A  Receive with two Field Ships to Discard; Takeoff T1s T1p: next Hand set!
 38. B  Enhance S1p=>S2m; Recycle S1m; Takeoff S2s carrying 2e
 39. A  Attack S21 28:25, B's whole Hand taken through its Academy!!
 40. B  can not make a move                                                     1-0
```

## Record

```text
Game: Duel playtest round 2, game 4, 2026-11-13/14, seed 104, duel-v2
Player A: Warlord (Opus), Human, home S00
Player B: Industrialist (Opus), Alien, home S21
Stars: S01 Wild 3+5, S10 Wild 5+3, S11 Wild 5+5, S12 Wild 5+3, S20 Wild 3+5; no World conquered
Setup A: C2c@S00s1, B2p@S00s3, HW2s@S00w; Reserve heroes H2m, H2s
Setup B: C2c@S21s1, B2p@S21s3, HW2s@S21w; Reserve heroes H2p, H2c
Piles A: Fac1 B2m,H2p | Fac2 C2m,H2c | Fac3 C2s,B2c | Fac4 B2s,C2p
         Lab1 C4m,S6m,S8m,C4c,HS8c,HS6c | Lab2 S4m,S4c,H6c,B4c,HS8p,HS6p | Lab3 B4m,S4p,HS6m,B4p,S6p
         Lab4 H4m,H4s,H6s,H8s,B4s,HS6s | Lab5 C4s,S4s,H4c,H4p,C4p
Piles B: Fac1 C2p,C2m | Fac2 B2s,B2m | Fac3 C2s,B2c | Fac4 H2m,H2s
         Lab1 C4p,HS6p,S4p,S6p,HS8p,S8m | Lab2 B4p,H4p,B4s,HS6s,H6s | Lab3 C4c,B4c,HS6c,H4c,H6c,HS8c
         Lab4 C4s,H4s,S4s,S4c,S6m | Lab5 B4m,C4m,S4m,H4m,HS6m,H8s
# RG4-1: each player arranges its Factory and Laboratory at setup, face up
Voids: S11o1, S11o4, S11o5, S11o6, S11o7, S11o10, S11o11, S11o12
Hand A: H2s, T1s, T1p (3). Hand B: 5 cards.
```

### Turns 1 and 2

A banks [[Energy]] and parks [[Tool]]s; B researches B4p at once,
toward the [[Production]] engine.

```text
1. A, Energy 0
  Play:
    1a. Receive: +1e
        H2s@Hand:2s + HW2s@S00w:+1e = +1e; H2s->Discard, HW2s=>HW1s
    1b. Takeoff: T1s -> S00u1
    1c. Takeoff: T1p -> S00u2
  Restore: HW1s=>HW2s

2. B, Energy 0
  Play:
    2a. Research at Archive: B4p@Lab2 -> Fac4 << 5s *2p
        Hand[H1s:2s+1e + S2s:1s + S1s/2m:1s] + S21[B2p@s3:*2p + HW2s@w:Archive+1e]
        = 5s *2p; H2p,S2s,S2m->Discard, B2p=>B1p, HW2s=>HW1s
    # RG4-4: Research puts the card on top of a Factory pile of the player's choice
    2b. Takeoff: T1m -> S21u1
  Draw: S2p -> Discard
  Restore: B1p=>B2p, HW1s=>HW2s
```

### Turns 3 to 6

A researches C4m and builds a C2m; B fills its home with [[Base]]s and
a C2p and starts recycling its [[Tool]]s into [[Goods]].

```text
3. A, Energy 1
  Play:
    3a. Research at Archive: C4m@Lab1 -> Fac4 << 5s *2m
        Hand[S2s:1s+2e + S1s/2m:1s + H2m:*2m] + S00[T1s@u1:1s + HW2s@w:Archive+1e]
        = 5s *2m; S2s,S2m,H2m,T1s->Discard, HW2s=>HW1s
    3b. Create at Academy: C2m@Fac2 -> S00s5 << 3c
        Hand[S0c:0c + S1c/2p:1c] + C2c@S00s1:Academy+2c = 3c
        S1m,S2p->Discard, C2c=>C1c
  Restore: HW1s=>HW2s, C1c=>C2c

4. B, Energy 0
  Play:
    4a. Create at Shipyard: B2s@Fac2 -> S21s4 << 3p
        Hand[S1p:1p + T1p:1p] + B2p@S21s3:Shipyard+1p = 3p
        S1p,T1p->Discard, B2p=>B1p
    4b. Create at Academy: C2p@Fac1 -> S21s5 << 3c
        Hand[S1c:1c + T1c:1c] + C2c@S21s1:Academy+2c = 4c
        S1c,T1c->Discard, C2c=>C1c
    4c. Takeoff: T1s -> S21u2
  Draw with Shuffle
  Restore: B1p=>B2p, C1c=>C2c

5. A, Energy 0
  Play:
    5a. Takeoff: S1m/2c -> S00u1
    5b. Takeoff: T1c -> S00u3
    5c. Takeoff: S1p -> S00u4
    5d. Receive: +1e
        S1s@Hand + HW2s@S00w:+1e = +1e; S1s->Discard, HW2s=>HW1s
  Draw: S1c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

6. B, Energy 0
  Play:
    6a. Manage: B2s@S21s4 -> S21s2 << 1s
        S1s@Hand:1s = 1s; S1s->Discard
    6b. Recycle: T1m@S21u1 => 1g@S21, T1m->Fac1
        H1p/2c@Hand + B2s@S21s2:Recycle; H2c->Discard, B2s=>B1s
    # RG4-5: Recycle prints no Cost, it costs no Power
    6c. Takeoff: S1m -> S21u1
    6d. Takeoff: T1c -> S21u3
  Draw: S2c -> Discard
  Restore: B1s=>B2s
```

### Turns 7 to 10

B's deck thins fast by [[Recycle]], B4p's [[Goods]] pay for the first
[[Hyperstructure]] research, HS6p. A grows C2m to C4m and buys an S4m.

```text
7. A, Energy 1
  Play:
    7a. Research at Archive: S4m@Lab2 -> Fac3 << 5s *1c *2m
        Hand[H2s:2s+2e + S1s:1s] + S00[HW2s@w:Archive+1e + C2m@s5:*2m + C2c@s1:*1c]
        = 5s *1c *2m; H2s,S1s->Discard, HW2s=>HW1s, C2m=>C1m, C2c=>C1c
    7b. Takeoff: T1m -> S00u5
  Draw: T1s,S1m -> Discard
  Restore: HW1s=>HW2s, C1m=>C2m, C1c=>C2c

8. B, Energy 0
  Play:
    8a. Create at Shipyard: B4p@Fac4 -> S21s4 << 5p
        Hand[H2p:2p + S1p:1p] + S21[B2p@s3:Shipyard + C2p@s5:Extract+2p] = 5p
        H2p,S1p->Discard, B2p=>B1p, C2p=>C1p
    8b. Recycle: T1s@S21u2 => 1g@S21, T1s->Fac1
        S1c@Hand + B2s@S21s2:Recycle; S1c->Discard, B2s=>B1s
    # RG4-6: a Starter of any Class starts an Action of a fixed Class
    8c. Recycle: T1c@S21u3 => 1g@S21, T1c->Fac1
        S2p@Hand + B1s@S21s2:Recycle; S2p->Discard
    # a Depleted Structure takes part again with its Technology (Deplete 1.2 "or stay")
    8d. Takeoff: T1p -> S21u2
  Draw with Shuffle
  Restore: B1p=>B2p, C1p=>C2p, B1s=>B2s

9. A, Energy 0
  Play:
    9a. Upgrade with Grow at Academy: C2m@S00s5 => C3m << 2c
        H1c/2m@Hand:Grow + C2c@S00s1:Academy+2c = 2c
        H2m->Discard, C2c=>C1c, C2m->Fac2
    9b. Receive: +1e
        S1c@Hand + HW2s@S00w:+1e = +1e; S1c->Discard, HW2s=>HW1s
    9c. Create at Shipyard: S4m@Fac3 -> Discard << 5p
        S2p@Hand:1p+1e + S00[B2p@s3:Shipyard+1p + T1p@u2:1p + S1p@u4:1p] = 5p
        S2p,T1p,S1p->Discard, B2p=>B1p
  Draw: S2m,S2s -> Discard
  Draw with Shuffle
  Restore: C3m=>C4m, C1c=>C2c, B1p=>B2p

10. B, Energy 0
  Play:
    10a. Research at Archive: C4p@Lab1 -> Lab2 << 1s
         S1s/2m@Hand:1s + HW2s@S21w:Archive+1e = 1s; S2m->Discard, HW2s=>HW1s
    10b. Research at Archive: HS6p@Lab1 -> Fac4 << 6s *4p
         Hand[H1s/2p:2s+1e + S2s:1s] + S21[HW1s@w:Archive + B4p@s4:*4p+3g] = 7s *4p
         H2p,S2s->Discard, B4p=>B3p
    # a Structure Boosts with the Goods of its Star up to its Capacity (Boost 3, Goods 5)
    10c. Recycle: T1p@S21u2 => 1g@S21, T1p->Fac1
         S2p@Hand + B2s@S21s2:Recycle; S2p->Discard, B2s=>B1s
  Draw: H2c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s, B3p=>B4p, B1s=>B2s
```

### Turns 11 to 14

A finds no route to S21: every [[Space]] is [[Hidden]] and the
[[Void]]s wall off S11, its [[Attack]] is invalid. A starts Exploring.
B builds DysonCollector, both [[Create]]s in one [[Turn]] (RG4-8).

```text
11. A, Energy 0
  Play:
    11a. Takeoff: H2m -> S00u2
    11b. Takeoff: S2m -> S00u4
  Draw: T1s,S1p,S1c -> Discard
  Restore: HW1s=>HW2s

12. B, Energy 0
  Play:
    12a. Recycle: C2p@S21s5 => 2g@S21, C2p->Fac3
         S1p@Hand + B2s@S21s2:Recycle; S1p->Discard, B2s=>B1s
    12b. Takeoff: S1s -> S21u2
    12c. Recycle: S1s@S21u2 => 1g@S21, S1s->Fac3
         S1c@Hand + B1s@S21s2:Recycle; S1c->Discard
    12d. Takeoff: S2m -> S21u3
  Draw: S2c -> Discard
  Draw with Shuffle
  Restore: B1s=>B2s

13. A, Energy 0
  Play:
    13a. Receive: +1e
         S2s@Hand + HW2s@S00w:+1e = +1e; S2s->Discard, HW2s=>HW1s
    # invalid: Attack S00 -> S21, no route passes the Hidden Spaces
    13b. Explore with Recon: S00o3 => Space+1r << 2m
         H1m/2s@Hand:Recon + C4m@S00s5:4m = 4m; H2s->Discard, C4m=>C3m
    # RG4-7: a Hidden Space bordering the Source needs no Range
    # drawn Space+1r and Asteroids+1r (Price 2 each), A lays Space, Asteroids back to the bag
  Draw: S1m,S1s,T1p -> Discard
  Draw with Shuffle
  Restore: C3m=>C4m, HW1s=>HW2s

14. B, Energy 0
  Play:
    14a. Create at Academy: HS6p@Fac4 -> S21s5 (Social part) << 6c
         Hand[H2c:2c + S1c/2p:1c + S1c:1c] + C2c@S21s1:Academy+2c = 6c
         H2c,S2p,S1c->Discard, C2c=>C1c
    # RG4-8: the Hyperstructure rule overrides Create 3, its Social part has a Weak End of Level 5
    14b. Create at Shipyard: HS6p -> S21s5 (Industrial part) << 5p
         Hand[H2p:2p + S1p/2s:1p] + S21[B2p@s3:Shipyard + B4p@s4:2g] = 5p
         H2p,S2s->Discard, B2p=>B1p, B4p=>B3p; HS6p@S21s5 built
  Draw with Shuffle
  Restore: C1c=>C2c, B1p=>B2p, B3p=>B4p; DysonCollector +2e (Ready, 6 Ready Structures in S21)
```

### Turns 15 to 18

A lays an [[Asteroids]] tile toward S12, both sides research a B4m, B
[[Enhance]]s its [[Recycle]] [[Base]] into B4m.

```text
15. A, Energy 1
  Play:
    15a. Explore with Survey: S01o6 failed << 2r ?s
         S2s@Hand:Survey + Hand[S2p:2r + S1p:1r] + HW2s@S00w:Archive+1e = 3r, Energy 2
         drawn Void+1r (Price 1) and HyperPass+1r (Price 5), A stops: no tile laid, both back to the bag
         S2s,S2p,S1p->Discard, HW2s=>HW1s
    15b. Explore with Recon: S01o5 => Asteroids+1r << 2r 2m
         H1m/2s@Hand:Recon + S4m@Hand:4r + C4m@S00s5:Raid+4m = 4r 4m
         drawn Asteroids+1r (Price 2) and Space+2r (Price 3), A lays Asteroids, Space back to the bag
         H2s,S4m->Discard, C4m=>C3m
  Draw: Reserve 5 cards, no Shuffle
  Restore: C3m=>C4m, HW1s=>HW2s

16. B, Energy 2
  Play:
    16a. Research at Archive: B4m@Lab5 -> Fac2 << 5s *2m
         Hand[H1s/2p:2s+1e + S2s:1s+1e] + S21[HW2s@w:Archive+1e + S2m@u3:*2m] = 5s *2m
         H2p,S2s,S2m->Discard, HW2s=>HW1s
    16b. Takeoff: S1m/2c -> S21u3
    16c. Takeoff: S1p -> S21u2
  Draw: S1c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s; DysonCollector +2e

17. A, Energy 2
  Play:
    17a. Research at Archive: B4m@Lab3 -> Fac4 << 5s *2m
         Hand[S1s:1s+1e + T1s:1s] + S00[HW2s@w:Archive+1e+2e + C4m@s5:*2m] = 5s *2m
         S1s,T1s->Discard, HW2s=>HW1s, C4m=>C3m
  Draw: T1p,S1m,S1c -> Discard
  Draw with Shuffle
  Restore: C3m=>C4m, HW1s=>HW2s

18. B, Energy 3
  Play:
    18a. Upgrade with Enhance at Shipyard: B2s@S21s2 => B4m << 3p
         H1p/2c@Hand:Upgrade + Hand[S2p:1p + S1p/2s:1p] + S21[B2p@s3:Shipyard + B4p@s4:1g] = 3p
         H2c,S2p,S2s->Discard, B2p=>B1p, B4p=>B3p, B2s->Fac2
    18b. Research at Archive: C4m@Lab5 -> Lab1 << 1s
         S1c@Hand:0s+1e + HW2s@S21w:Archive+1e = 1s; S1c->Discard, HW2s=>HW1s
    18c. Takeoff: S2m -> S21u4
  Draw with Shuffle
  Restore: B1p=>B2p, B3p=>B4p, HW1s=>HW2s; DysonCollector +2e
```

### Turns 19 to 22

A opens the last tile to S21. B turns [[Energy]] into research and
builds [[Jamming]], its third [[Hyperstructure]] with the
[[Homeworld]] (RG4-9, RG4-10).

```text
19. A, Energy 0
  Play:
    19a. Explore with Survey: S12o8 => Space+1r << 4r 2s
         Hand[S2s:Survey + S4m:4r + T1s:1s] + HW2s@S00w:Archive+1e+1e = 4r 2s
         drawn Space+1r and Space+1r (Price 2 each), one laid, the other back to the bag
         S2s,S4m,T1s->Discard, HW2s=>HW1s
  Draw: S1p,S2p -> Discard
  Restore: HW1s=>HW2s

20. B, Energy 5
  Play:
    20a. Research at Archive: S4m@Lab5 -> Lab1 << 1s
         S1c@Hand:0s+1e + HW2s@S21w:Archive+1e = 1s; S1c->Discard, HW2s=>HW1s
    # RG4-9: Energy gained and spent within one Action is not lost to the Hand limit of 5 Tokens
    20b. Research at Archive: H4m@Lab5 -> Lab1 << 1s
         S2p@Hand:0s+1e + HW1s@S21w:Archive = 1s; S2p->Discard
    20c. Research at Archive: HS6m@Lab5 -> Fac4 << 6s *4m
         Hand[H1s/2p:2s+1e + S2s:1s+2e] + S21[HW1s@w:Archive + B4m@s2:*4m] = 6s *4m
         H2p,S2s->Discard, B4m=>B3m
  Draw: H2c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s, B3m=>B4m; DysonCollector +2e

21. A, Energy 0
  Play:
    21a. Recycle: T1c@S00u3 => 1g@S00, T1c->Fac2
         H2s@Hand:Recycle; H2s->Discard
    21b. Takeoff: S1m -> S00u3
    # invalid: Receive with S1c@Hand + HW2s, the Homeworld's +1e is Science, S1c gives Culture or Military (Receive 1, Plus 4)
    21c. Receive: +1e
         S1s@Hand + HW2s@S00w:+1e = +1e; S1s->Discard, HW2s=>HW1s
  Draw: T1p,S1c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

22. B, Energy 3
  Play:
    22a. Recycle: B4p@S21s4 => 4g@S21, B4p->Fac2
         H1s/2p@Hand:Recycle; H2p->Discard
    22b. Create at Academy: HS6m@Fac4 -> S21s4 (Social part) << 6c
         Hand[H2c:2c + S1c/2p:1c + S1c:1c] + C2c@S21s1:Academy+2c = 6c
         H2c,S2p,S1c->Discard, C2c=>C1c
    22c. Create at Shipyard: HS6m -> S21s4 (Industrial part) << 5p
         S1p/2s@Hand:1p + S21[B2p@s3:Shipyard + B4m@s2:4g] = 5p
         S2s->Discard, B2p=>B1p, B4m=>B3m; HS6m@S21s4 built
  Draw with Shuffle
  Restore: C1c=>C2c, B1p=>B2p, B3m=>B4m; DysonCollector +2e
```

### Turns 23 to 26

A [[Disrupt]]s and builds its own B4m; B researches HS6c, Enhancing
B4m into B4c for the prerequisite.

```text
23. A, Energy 1
  Play:
    23a. Disrupt: S4m@Hand shown (Immediate), B discards S1c; S4m->Discard
    23b. Manage: S00[C2c@s1] -> S00[C2c@s2] << 1c
         S1c@Hand:1c = 1c; S1c->Discard
    # the shifted C2c is a Target, not a Participant: it doesn't Deplete (PerformAction 1.4.5)
    23c. Create at Shipyard: B4m@Fac4 -> S00s1 << 5p
         Hand[S1p/2s:1p + S1p:1p + T1p:1p] + B2p@S00s3:Shipyard+1g+1e = 5p
         S2s,S1p,T1p->Discard, B2p=>B1p
  Draw with Shuffle
  Restore: B1p=>B2p

24. B, Energy 5
  Play:
    24a. Research at Archive: C4c@Lab3 -> Lab5 << 1s
         S2p@Hand:0s+1e + HW2s@S21w:Archive+1e = 1s; S2p->Discard, HW2s=>HW1s
    24b. Research at Archive: B4c@Lab3 -> Fac2 << 5s *2c
         H1s/2p@Hand:2s+1e + S21[HW1s@w:Archive + C2c@s1:*2c+2e] = 5s *2c
         H2p->Discard, C2c=>C1c
  Draw: H2c,S2s -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s, C1c=>C2c; DysonCollector +2e

25. A, Energy 0
  Play:
    25a. Receive: +1e
         S1s@Hand + HW2s@S00w:+1e = +1e; S1s->Discard, HW2s=>HW1s
    # invalid: Recycle T1s@Hand; RG4-10: Recycle's Direction goes to the Star of the selected Card, a Card in Hand has none
  Draw: S2p,S1c,T1s,H2s -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

26. B, Energy 4
  Play:
    26a. Upgrade with Enhance at Shipyard: B4m@S21s2 => B4c << 3p
         Hand[H1p/2c:Upgrade + S2p:1p+1e] + B2p@S21s3:Shipyard+1g = 3p
         H2c,S2p->Discard, B2p=>B1p, B4m->Fac2
    26b. Research at Archive: HS6c@Lab3 -> Fac4 << 6s *4c
         Hand[H1s/2p:2s+1e + S2s:1s+2e] + S21[HW2s@w:Archive+1e + B4c@s2:*4c] = 6s *4c
         H2p,S2s->Discard, HW2s=>HW1s
    # B wrote S2s:1s+1e for 6s and Energy 3->1; carried out as the closest legal reading, S2s Boosts 2
  Draw: S1c -> Discard
  Draw with Shuffle
  Restore: B1p=>B2p, HW1s=>HW2s; DysonCollector +2e
```

### Turns 27 to 30

A banks [[Energy]] and [[Goods]] with [[Receive]] and a [[Manage]] of
its [[Homeworld]] between them. B builds [[Triumvirate]] and posts an
S2m in S12 to Pin the lane (RG4-11).

```text
27. A, Energy 1
  Play:
    27a. Receive: +1e
         S1s@Hand + S00[HW2s@w:+1e + T1m@u5] = +1e; S1s,T1m->Discard, HW2s=>HW1s
    27b. Manage: HW1s@S00w => HW2s << 1p
         S1p@Hand:1p = 1p; S1p->Discard
    27c. Receive: +1e
         S2s@Hand + HW2s@S00w:+1e = +1e; S2s->Discard, HW2s=>HW1s
    27d. Takeoff: S4m -> S00u5
  Draw: T1p -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

28. B, Energy 3
  Play:
    28a. Recycle: B4c@S21s2 => 4g@S21, B4c->Fac2
         H1s/2p@Hand:Recycle; H2p->Discard
    28b. Create at Academy: HS6c@Fac4 -> S21s2 (Social part) << 6c
         Hand[H2c:2c + S1c/2p:1c + S1c:1c] + C2c@S21s1:Academy+2c = 6c
         H2c,S2p,S1c->Discard, C2c=>C1c
    28c. Create at Shipyard: HS6c -> S21s2 (Industrial part) << 5p
         S1p/2s@Hand:1p + S21[B2p@s3:Shipyard+1p + HS6p@s5:4g] = 5p
         S2s->Discard, B2p=>B1p, HS6p=>HS5p; HS6c@S21s2 built
  Draw with Shuffle
  Restore: C1c=>C2c, B1p=>B2p, HS5p=>HS6p; DysonCollector +2e

29. A, Energy 3
  Play:
    29a. Receive: +1e
         S0s@Hand + S00[HW2s@w:+1e + S1m@u3] = +1e; S1p,S1m->Discard, HW2s=>HW1s
    29b. Takeoff: H1m/2s -> S00u3, carries 1e => 1g@S00
    # Goods 7: an Actor carries Energy within its Capacity, H1m has Capacity 1
  Draw: S2p,T1s,S1c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

30. B, Energy 5
  Play:
    30a. Move: S21[S2m@u4] -> S12[S2m@u1] << 2r
         S1c@Hand + S2m@S21u4:2r = 2r; S1c->Discard
    30b. Create at Academy: H2m@Fac4 -> Discard << 3c
         S1c/2p@Hand:1c + C2c@S21s1:Academy+2c = 3c; S2p->Discard, C2c=>C1c
    # Hero limit 3 with Triumvirate (HS6c@S21s2): H2p, H2c, H2m
    30c. Research at Archive: C4p@Lab2 -> Lab3 << 1s
         S2s@Hand:1s = 1s; S2s->Discard
    # RG4-11: a Research Hub is the Destination of Research, not a Participant unless selected
    30d. Research at Archive: H4p@Lab2 -> Lab3 << 1s
         H1s/2p@Hand:2s + HW2s@S21w:Archive+1e = 2s; H2p->Discard, HW2s=>HW1s
         the +1e is lost, B holds 5 Energy (Energy 7)
  Draw: H2c -> Discard
  Draw with Shuffle
  Restore: C1c=>C2c, HW1s=>HW2s; DysonCollector +2e, 2 lost to the Hand limit
```

### Turns 31 to 34

A withdraws an [[Attack]] on S12 that would meet [[Ancient]]s and
[[Move]]s four [[Unit]]s in instead; B doesn't [[Intercept]] and pulls
its S2m home. Both bank [[Goods]] by [[Takeoff]] with [[Energy]] as
[[Cargo]].

```text
31. A, Energy 3
  Play:
    31a. Receive: +1e
         S1s@Hand + HW2s@S00w:+1e = +1e; S1s->Discard, HW2s=>HW1s
    # invalid: Attack S00 -> S12 with Boosts held for later rounds on cards already added (Combat 6), withdrawn before the World draw
    # RG4-15: an Attack on a Wild Star conquers it even when a rival controls it: a World is drawn and Ancients defend beside the rival
    31c. Move: S00[S1m/2c@u1 + H1m/2s@u3 + S2m@u4 + S4m@u5] -> S12[S1m/2c@u2 + S4m@u3 + S2m@u4 + H1m/2s@u5] << 4r
         S2p@Hand + S00[S4m@u5:4r + S2m@u4:2r] = 6r; S2p->Discard
         B doesn't Intercept; S12 is Disputed
    31d. Takeoff: S2s -> S00u1
    31e. Takeoff: T1m -> S00u3
    31f. Takeoff: T1p -> S00u4
  Draw with Shuffle
  Restore: HW1s=>HW2s

32. B, Energy 5
  Play:
    32a. Move: S12[S2m@u1] -> S21[S2m@u4] << 2r
         S1c@Hand + S2m@S12u1:2r = 2r; S1c->Discard
    32b. Takeoff: H2m -> S21u5, carries 2e => 2g@S21
  Draw: S2s,H2c,H2p -> Discard
  Draw with Shuffle
  Restore: DysonCollector +2e

33. A, Energy 4
  Play:
    33a. Receive: +1e
         S0s@Hand + HW2s@S00w:+1e = +1e; S1p->Discard, HW2s=>HW1s
    33b. Takeoff: S1m -> S00u5, carries 1e => 1g@S00
  Draw: S1c,T1s,S2p -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

34. B, Energy 5
  Play:
    34a. Research at Archive: H4m@Lab1 -> Lab3 << 1s
         S1c@Hand:0s+1e + HW2s@S21w:Archive+1e = 1s; S1c->Discard, HW2s=>HW1s
    34b. Research at Archive: S4m@Lab1 -> Fac2 << 5s *1c *2m
         Hand[H1s/2p:2s+1e + S2s:1s+1e + S1c/2p:*1c] + S21[HW1s@w:Archive + H2m@u5:*2m] = 5s *1c *2m
         H2p,S2s,S2p,H2m->Discard
  Draw: H2c -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s; DysonCollector +2e
```

### Turns 35 to 38

The cap is announced. A sets up its last [[Hand]] by leaving exactly
five [[Unit]] cards off the [[Field]]; B upgrades its home [[Ship]]s
for [[Defense]] and parks [[Energy]] as [[Goods]].

```text
35. A, Energy 4
  Play:
    35a. Receive: +1e
         S1s@Hand + S00[HW2s@w:+1e + T1p@u4] = +1e; S1s,T1p->Discard, HW2s=>HW1s
    35b. Takeoff: S2p -> S00u4, carries 2e => 2g@S00
    35c. Manage: HW1s@S00w => HW2s << 1c
         S1c@Hand:1c = 1c; S1c->Discard
    35d. Receive: +1e
         S0s@Hand + HW2s@S00w:+1e = +1e; S1p->Discard, HW2s=>HW1s
  Draw: T1s -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

36. B, Energy 5
  Play:
    36a. Upgrade with Enhance at Shipyard: S2m@S21u4 => S4m << 3p
         Hand[H1p/2c:Upgrade + S2p:1p+1e] + B2p@S21s3:Shipyard+1e = 3p
         H2c,S2p->Discard, B2p=>B1p, S2m->Fac1
    36b. Takeoff: H2m -> S21u5
    36c. Explore with Survey: S21o9 failed << ?s
         Hand[S2s:Survey + H1s/2p:2s] + HW2s@S21w:Archive+1e = 3s
         drawn HyperPass+1r (Price 5) and Space+4r (Price 5), B stops as declared: no tile laid, both back to the bag
         S2s,H2p->Discard, HW2s=>HW1s
  Draw with Shuffle
  Restore: B1p=>B2p, HW1s=>HW2s; DysonCollector +2e, 1 lost to the Hand limit

37. A, Energy 4
  Play:
    37a. Receive: +1e
         S1s@Hand + S00[HW2s@w:+1e + S2s@u1 + S2p@u4] = +1e; S1s,S2s,S2p->Discard, HW2s=>HW1s
    37b. Takeoff: T1s -> S00u1
    37c. Takeoff: T1p -> S12u1
  Draw: S1c,S1p -> Discard
  Draw with Shuffle
  Restore: HW1s=>HW2s

38. B, Energy 5
  Play:
    38a. Upgrade with Enhance at Shipyard: S1p@S21u2 => S2m << 2p
         Hand[H1p/2c:Upgrade + S2p:1p] + B2p@S21s3:Shipyard+1g = 2p
         H2c,S2p->Discard, B2p=>B1p, S1p->Fac1
    38b. Recycle: S1m@S21u1 => 1g@S21, S1m->Fac1
         H1s/2p@Hand:Recycle; H2p->Discard
    38c. Takeoff: S2s -> S21u1, carries 2e => 2g@S21
  Draw: S1c -> Discard
  Draw with Shuffle: 4 cards only
  Restore: B1p=>B2p; DysonCollector +2e
```

### Turns 39 and 40

A attacks S21 with 28m from S00 and S12, selects every B card in S21
and B's whole [[Hand]] through the [[Academy]], and wins 28:25 (RG4-12
to RG4-14). B starts [[Turn]] 40 with no [[Hand]] and no Active
[[Star]]: [[Fallen]], [[PaxGalactica|Pax Galactica]].

```text
39. A, Energy 5
  Play:
    39a. Takeoff: S2p -> S00u4, carries 2e => 2g@S00
    39b. Receive: +1e
         S1s@Hand + HW2s@S00w:+1e = +1e; S1s->Discard, HW2s=>HW1s
    39c. Manage: HW1s@S00w => HW2s << 1c
         S1c@Hand:1c = 1c; S1c->Discard
    39d. Receive: +1e
         S0s@Hand + HW2s@S00w:+1e = +1e; S1p->Discard, HW2s=>HW1s
    39e. Attack: S00 -> S21[S2s@u1:1d + S2m@u2:2d+2e + S1m/2c@u3:1d+1e + S4m@u4:4d+4g + H2m@u5:2d+2e
                 + C2c@s1:1d + HS6c@s2:1d + B2p@s3:1d + HS6m@s4:1d + HS6p@s5:1d + HW2s@w:1d
                 + B.Hand[H2p:0d + S2p:0d + H2c:0d + S1c:0d]] << 6r
         S2s@Hand:2r
         + S00[S1m@u5:1r1m+1e + H2m@u2:2r2m + S2p@u4:2r + T1m@u3:1m+1e + B4m@s1:Stealth+3m+2g+1e + C4m@s5:Raid+4m+4g] = 7r 20m
         + S12[S1m/2c@u2:1m + S4m@u3:2m+2e + S2m@u4:1m + H1m/2s@u5:2m] = 8m
    # RG4-14: through the Defender's Academy C2c@S21s1 the Attacker selects any number of cards, here B's whole Hand (Academy 2)
    # RG4-12: the Defender Boosts a Card the Attacker selects at the selection, before the first round
         39e1. Defender passes; Attacker passes
         Total: 28m against 25d, attacker wins, Advantage 3
         Outcome: C4m,B4m,S4m,S1m,T1m Damaged (22), the rest of A's saved
           all B Participants Damaged; H2p,S2p,H2c,S1c find no Slot in S21 and are Destroyed -> B.Fac
           S2s@S21u1 Damaged, Destroyed for room -> B.Fac1; S2p@S00u4 -> S21u1
    # RG4-13: the surviving Units of a remote Support Group don't move in, they Deplete (Combat 9.3, 9.4)
           S2s,S1m/2c,S2m,H1m/2s->Discard
         S21 is controlled by A, B's Damaged Structures there are captured
  Draw with Shuffle
  Restore: HW1s=>HW2s

40. B, Energy 0
  B can not make a move: no Hand, Reserve and Discard empty, no Star ActiveFor B, every B Card on the Field Damaged
  B is Fallen, A has Pax Galactica
```

## Result

```text
Result: A wins by Military
```

## Rulings

- **RG4-1: Factory and Laboratory order at setup.** Gap: StartDraw 4
  and 5 put the cards into the [[Factory]] (4 piles) and the
  [[Laboratory]] (5 piles) without an order or a visibility. Ruling:
  each player arranges its own piles at setup; the piles lie face up,
  both players see them ([[Hero]] Notes 3 and
  [[PaxGalactica|Pax Galactica]] Notes 3 name only [[Hand]],
  [[Reserve]] and [[Hidden]] cards as secret). Pages: StartDraw,
  [[Factory]], [[Laboratory]], [[Home]].
- **RG4-2: Overlap direction.** Gap: [[Slot]] 5 numbers the slots "1-5
  by height" and overlaps a card "when the next lower slot of its row
  holds a card", without saying which end is lower. Ruling: slot 1 is
  the lowest; a card in slot k is overlapped when slot k-1 holds a
  card. Pages: [[Slot]].
- **RG4-3: Asteroids Extra price split.** Gap: [[Duel]] 6 gives
  [[Asteroids]] "1 on 7, 2 on 6" but not which [[Length]]s. Ruling:
  [[ExtraPrice|Extra price]] 1 on [[Length]] 1 x4, 2 x2, 3 x1;
  [[ExtraPrice|Extra price]] 2 on [[Length]] 1 x3, 2 x1, 3 x1, 4 x1.
  Pages: [[Duel]].
- **RG4-4: Research target pile.** Gap: [[Research]] 2.1 moves a card
  "from [[Laboratory]] to [[Factory]]" without naming the pile.
  Ruling: on top of a [[Factory]] pile of the researching player's
  choice (as [[Backlog]] Settled 24 and round 1 intended). Pages:
  [[Research]], [[Factory]].
- **RG4-5: Recycle Cost.** Gap: [[Recycle]] names [[Direction]] and
  Outcome but no [[Cost]]; TechnologyAction 2 says how a [[Cost]] is
  paid, not that one exists. Ruling: [[Recycle]] costs no [[Power]],
  it needs a [[Starter]] and a participant providing [[Recycle]].
  Pages: [[Recycle]], TechnologyAction.
- **RG4-6: Starter Class.** Gap: PerformAction 1.1 asks only for an
  [[Actor]] from [[Hand]] as [[Starter]]; [[Deck]] Notes 13 says a
  Starting card's [[Weak]] [[End]] [[Class]] "lets it start an
  [[Action]] of another [[Class]]", which reads as if a [[Starter]]
  had to match the [[Action]]'s [[Class]]. Ruling: no match is
  required for an [[Action]] of a fixed [[Class]] ([[Create]],
  [[Research]], [[Recycle]]...); the [[Starter]]'s [[Class]] decides
  only the [[Action]]s "of any [[Class]]" ([[Manage]], [[Receive]]).
  Pages: PerformAction, [[Deck]], [[Manage]], [[Receive]].
- **RG4-7: Range of an Explore to a bordering Space.** Gap:
  [[Explore]] 5.1 lets a [[Hidden]] [[Space]] be explored when it
  "borders the [[Source]] [[Star]] or a revealed [[Tile]] reachable
  within [[Range]]", while [[Range]] counts the [[Destination]]
  [[Tile]], whose [[Length]] is unknown until it is laid. Ruling: a
  [[Hidden]] [[Space]] bordering the [[Source]] needs no [[Range]];
  one bordering a revealed [[Tile]] needs the [[Distance]] to that
  [[Tile]] (or to a bordering [[Star]]), the [[Hidden]] one not
  counted. Pages: [[Explore]], [[Distance]], [[Range]].
- **RG4-8: Social Create of a Hyperstructure.** Gap: [[Create]] 3
  allows a [[Social]] [[Card]] only when its [[Weak]] [[End]] has
  [[Level]] 1, [[Hyperstructure]] 4.1 builds a 6/5 or 8/7 "first as a
  [[Social]] [[Card]], for its [[Price]]". Ruling: the
  [[Hyperstructure]] page overrides [[Create]] 3 (index: a [[Card]]'s
  own page changes a core rule). Pages: [[Create]],
  [[Hyperstructure]].
- **RG4-9: Energy over the Hand limit inside an Action.** Gap:
  [[Energy]] 7 loses [[Token]]s above the [[Hand]] size, [[Energy]] 3
  lets a `+1e` gained when its [[Card]] joins an [[Action]] [[Boost]]
  that [[Action]] at once. B held 5 [[Energy]] and gained +1e from the
  [[Homeworld]] in a [[Research]] it Boosted by 1 (T20). Ruling: the
  limit applies to the [[Token]]s that stay in [[Hand]] after the
  [[Action]]; [[Energy]] gained and spent within the [[Action]] is not
  lost. Pages: [[Energy]], [[Boost]].
- **RG4-10: Recycle of a Card in Hand.** Gap: [[Recycle]] 2 converts
  "a selected [[Card]] ControlledBy the player", and ControlledBy 4
  makes every own [[Card]] controlled by its [[Faction]], a [[Card]]
  in [[Hand]] too. Ruling: the selected [[Card]] must be on the
  [[Field]]: [[Recycle]] 3 directs the [[Action]] to the [[Star]] of
  the selected [[Card]], and 4.2 puts the [[Goods]] there; a [[Card]]
  in [[Hand]] has no [[Star]] (T25). Pages: [[Recycle]], ControlledBy.
- **RG4-11: the Hub of Research.** Gap: [[Research]] is a
  [[BasicAction|Basic action]] "directed to a [[Research Hub]]"
  ([[Research]] 3), and BasicAction 1 needs no [[Technology]], while
  every [[TechnologyAction|Technology action]] needs a participant
  that provides it. Whether the [[Hub]] card must join, and
  [[Deplete]], is not said (B researched once without its
  [[Homeworld]], then with it, T30). Ruling: the [[Hub]] is the
  [[Destination]]: it must be on the [[Field]] and ActiveFor the
  player, it is a Participant only when selected. Pages: [[Research]],
  [[Hub]], PerformAction.
- **RG4-12: Boosting a Defender the Attacker selects.** Gap:
  [[Combat]] 6 lets "Parties [[Boost]] with [[Card]]s at the moment
  when they add the [[Card]]", but the [[Defender]]'s
  [[Direct participant]]s are selected by the [[Attacker]] ([[Combat]]
  2.2), so read literally the [[Defender]] never adds them and could
  never [[Boost]] them, while [[Combat]] 6.1 lets a [[Boost]] add to
  either side. Ruling: a [[Card]] the [[Attacker]] selects joins the
  [[Combat]] at the selection; its owner may [[Boost]] it then, before
  the first [[Combat Round]], and not later (T39). Pages: [[Combat]],
  [[Boost]].
- **RG4-13: remote Support Units after a won Attack.** Gap: [[Combat]]
  9.3 moves "surviving attacking [[Unit]]s into the [[Destination]],
  the others stay in the [[Source]]", 9.4 lets only a [[Unit]]
  [[Direct participant]] hold its [[Slot]]; nothing says what a remote
  [[Group]]'s surviving [[Unit]]s do, while PerformAction Notes 1
  spares "[[Unit]]s that moved or fought". Ruling, by the letter: only
  the [[Source]]'s surviving [[Unit]]s may move in; a remote
  [[Group]]'s surviving [[Unit]]s are [[Supporter]]s and [[Deplete]]
  to [[Discard]] (T39, A's four [[Unit]]s from S12). Pages:
  [[Combat]], [[Deplete]], PerformAction, [[Support]].
- **RG4-14: how many cards an Attack takes through the Academy.** Gap:
  [[Academy]] 2 lets the [[Attacker]] "also select defending
  [[Participants]] from the [[Defender]]'s [[Discard]], [[Reserve]] or
  [[Hand]]", picking blindly "any [[Card]] of the pile", without a
  number; A asked at T29, B flagged it after the game. Ruling: any
  number, from each pile (T39: B's whole [[Hand]] of 4); a [[Damaged]]
  one with no free [[Slot]] is Destroyed ([[Academy]] 2.4), which
  emptied B's [[Hand]] and ended the game. Pages: [[Academy]],
  [[Combat]].
- **RG4-15: an Attack on a Wild Star a rival controls.** Gap: [[Wild]]
  3 says an [[Attack]] on a [[Wild]] [[Star]] conquers it, with a
  [[World]] drawn and [[Ancient]]s defending, and [[Wild]] Notes 2
  lets a [[Wild]] [[Star]] be ControlledBy a [[Faction]] (B's S2m
  alone in S12 after a [[Move]], T30); [[Ancient]] 4 has the
  [[Ancient]]s defend "together", not whether beside a rival. Ruling:
  the [[Attack]] still conquers: the [[World]] is drawn, the
  [[Ancient]]s come face up before the first round and defend on the
  [[Defender]]'s side with the rival's cards. A withdrew its
  [[Attack]] on S12 when told so and Moved in instead (T31). Pages:
  [[Wild]], [[Ancient]], [[Combat]], [[Move]].
