---
status: draft
scope: playtest
---

# Game 5: Scholar 27-20 Gambler

[[Duel]] playtest round 2, game 5, 2026-11-13/14, seed 105, version
`duel-v2`. A (Scholar) wins 27-20 on [[VictoryPoints|Victory points]]
at the 40-[[Turn]] cap, no achievement on either side and no
[[Combat]] at all: the home [[Star]]s never found a route to each
other.
A held three of the four [[Crown]]s at the end, 8s, 8m and 8p, but
not 8c.

## Score

One line per [[Turn]], only what happened. `!` good, `!!` decisive,
`?!` dubious, `!?` interesting, as in chess.
[[VictoryPoints|Victory points]] on the last lines.

```text
  1. A  Create C2s@S00s5; Research C4s
  2. B  Create C2m@S21s5; Takeoff S2s S1p T1c
  3. A  Research H4s; Takeoff T1p S1p
  4. B  Create C2p@S21s2; Takeoff S2m S1m
  5. A  Research B4s; Takeoff T1m S1m
  6. B  Create C2s@S21s4
  7. A  Research S4s; Takeoff T1c T1s
  8. B  Manage C2c<->C2s Slots?!
  9. A  Research B4p Lab3->Lab1, B4c
 10. B  Research C4m
 11. A  Receive +1e; Create B4c@S00s2 Megacademy!; Grow C2s=>C4s; Takeoff S2m
 12. B  Grow C2m=>C4m
 13. A  Research S4p; Takeoff H2s; Grow H2s=>H4s
 14. B  Research C4c,C4p Lab4->Lab5
 15. A  Enhance S1m=>S4p; Research H6s; Manage H4s
 16. B  Recon S21o9=Asteroids+1
 17. A  Grow H4s=>H6s; Manage; Research S4m
 18. B  Research C4s
 19. A  Takeoff S1s; Enhance S1s=>S4m; Research H8s!
 20. B  Grow C2s=>C4s
 21. A  Research 4 Cards Lab->Lab3; Research B4p
 22. B  Research C4p
 23. A  Takeoff H6s; Grow H6s=>H8s!; Manage; Research 4 Cards Lab5->Lab1; Takeoff T1p
 24. B  Grow C2p=>C4p
 25. A  Research S6m; Takeoff S1c
 26. B  Research S4m
 27. A  Enhance S1c=>S6m; Research S6p Lab4->Lab3
 28. B  Enhance S2m=>S4m
 29. A  Research S8m!; Takeoff S2c
 30. B  Research C4c
 31. A  Enhance S2c=>S8m!; Research HS6m Lab1->Lab4
 32. B  Move S2s->S20
 33. A  Research HS8p with UnifiedTheory!?; Takeoff S4p S2p
 34. B  Survey S20o11=Space+1?!; Takeoff S1p S1c
 35. A  Research HS6c Lab1->Lab4; Manage H6s; Takeoff H2c T1p
 36. B  Research H4m
 37. A  Grow H2c=>H3c; Receive +1e
 38. B  Move S4m S1m->S20; Takeoff H2m
 39. A  Create HS8p@S00s4 twice!!; Takeoff H8s S2m                             27-18
 40. B  Takeoff H2c                                                            27-20
```

## Record

```text
Game: Duel, playtest round 2, game 5, 2026-11-13, seed 105, duel-v2
Player A: Scholar (Opus), Human, home S00
Player B: Gambler (Sonnet), Alien, home S21
Stars: S00 home A 5+5, S21 home B 5+5, S11 Wild 5+5, S10 Wild 5+3, S12 Wild 5+3, S01 Wild 3+5, S20 Wild 3+5
Setup A: C2c@S00s1, B2p@S00s2, HW2s@S00w
Setup B: C2c@S21s1, B2p@S21s2, HW2s@S21w
# RG5-1: Starting cards are S1m/0s, S1c/0m, S1p/0c, S1s/0p
# RG5-3: piles as each player ordered them
A Reserve Heroes H2s, H2c; Fac1 H2m H2p, Fac2 C2s C2m, Fac3 B2s B2m, Fac4 B2c C2p
A Lab1 C4s C4c C4p C4m, Lab2 H4s H6s H8s H4c H4p H4m H6c, Lab3 B4s B4p B4c B4m, Lab4 S4s S4p S4m S4c S6m S6p S8m, Lab5 HS6s HS6p HS6c HS6m HS8p HS8c
B Reserve Heroes H2m, H2c; Fac1 H2p H2s, Fac2 B2m B2c B2s, Fac3 C2m C2p C2s; Lab default (Lab1 Ships, Lab2 Heroes, Lab3 Bases, Lab4 Colonies, Lab5 Hyperstructures)
Hands: A draws 3, B draws 5 (StartDraw)

# RG5-4: slot 1 is the lowest, slot k is overlapped while slot k-1 holds a Card
# RG5-5: each player picks the Slots of its starting Structures
Setup A Slots: C2c@S00s1, B2p@S00s3
Setup B Slots: C2c@S21s1, B2p@S21s3
```

### Turns 1 to 4

Both open on [[Culture]]: A [[Create]]s a C2s and [[Research]]es C4s
at once, B builds two home [[Colony|Colonies]] and fills its [[Unit]]
row by [[Takeoff]]; its first try, a [[Tool]] as [[Starter]], is
invalid.

```text
1. A, Energy 0
  Play:
    1a. Create at Academy: C2s@Fac2 -> S00s5 << 3c
        H2c@Hand:2c + C2c@S00s1:Academy+2c = 4c
        H2c->Discard, C2c=>C1c
    1b. Research at Archive: C4s@Lab1 -> Fac2 << 5s *2s
        Hand[S1s:1s + H2s:2s] + S00[C2s@s5:Explore+2s+*2s + HW2s@w:Archive+1e] = 5s *2s
        S1s,H2s->Discard, C2s=>C1s, HW2s=>HW1s; +1e -> Energy 1
  Draw: S2m,S1p,S2c,T1s,T1p
  Restore: C1c=>C2c, C1s=>C2s, HW1s=>HW2s

2. B, Energy 0
  Play:
    # invalid: Create with T1c@Hand as Starter, a Tool is no Actor
    2a. Create at Academy: C2m@Fac3 -> S21s5 << 3c
        S2c@Hand:1c + C2c@S21s1:Academy+2c = 3c
        S2c->Discard, C2c=>C1c
    # RG5-6: any number of Takeoffs, one Card each
    2b. Takeoff: S2s -> S21u1
    2c. Takeoff: S1p -> S21u2
    2d. Takeoff: T1c -> S21u3
  Draw: T1s -> Discard; T1m,S1c,H2c,S2m,S1m
  Restore: C1c=>C2c

3. A, Energy 1
  Play:
    3a. Research at Archive: H4s@Lab2 -> Fac1 << 5s *2s *1c
        Hand[S1s/2m:1s + T1s:1s + S2c:*2c] + S00[C2s@s5:Explore+2s+*2s + HW2s@w:Archive+1e] +1e = 5s *2s *1c
        S2m,T1s,S2c->Discard, C2s=>C1s, HW2s=>HW1s; Energy 1
    3b. Takeoff: T1p -> S00u1
    3c. Takeoff: S1p -> S00u2
  Draw: T1m,S2p,S2s,S1c,S1m
  Restore: C1s=>C2s, HW1s=>HW2s

4. B, Energy 0
  Play:
    4a. Create at Academy: C2p@Fac3 -> S21s2 << 3c
        S1c@Hand:1c + C2c@S21s1:Academy+2c = 3c
        S1c->Discard, C2c=>C1c
    4b. Takeoff: S2m -> S21u4
    4c. Takeoff: S1m -> S21u5
  Draw with Shuffle: H2c,T1m -> Discard; T1p,S2p,H2m,S1s, Shuffle B.Discard.1, T1s
  Restore: C1c=>C2c
```

### Turns 5 to 8

A [[Research]]es a [[Laboratory]] [[Card]] every [[Turn]] with the
[[Archive]], C2s and the [[Homeworld]]'s +1e. B makes one [[Action]] a
[[Turn]] and two invalid plays on [[Turn]] 8 ([[Hero limit]], [[Tool]]
as [[Starter]]).

```text
5. A, Energy 1
  Play:
    5a. Research at Archive: B4s@Lab3 -> Fac3 << 5s *2s
        S2s@Hand:1s + S00[C2s@s5:Explore+2s+*2s + HW2s@w:Archive+1e] +2e = 5s *2s
        S2s->Discard, C2s=>C1s, HW2s=>HW1s; Energy 0
    5b. Takeoff: T1m -> S00u3
    5c. Takeoff: S1m -> S00u4
  Draw with Shuffle: S2p,S1c -> Discard; T1c, Shuffle A.Discard.1, S2s,T1s,S2c,H2s
  Restore: C1s=>C2s, HW1s=>HW2s

6. B, Energy 0
  Play:
    # invalid: Create without the Academy among its participants
    6a. Create at Academy: C2s@Fac3 -> S21s4 << 3c
        H2m@Hand:2c + C2c@S21s1:Academy+2c = 4c
        H2m->Discard, C2c=>C1c
  Draw with Shuffle: T1p,S2p,S1s,T1s -> Discard; H2c,T1m,S2c,S1c, Shuffle B.Discard.2, T1p
  Restore: C1c=>C2c

7. A, Energy 0
  Play:
    7a. Research at Archive: S4s@Lab4 -> Fac4 << 5s *2s *1p
        Hand[S2s:1s + H2s:2s] + S00[C2s@s5:Explore+2s+*2s + S1p@u2:*1p + HW2s@w:Archive+1e] = 5s *2s *1p
        S2s,H2s,S1p->Discard, C2s=>C1s, HW2s=>HW1s; Energy 1
    7b. Takeoff: T1c -> S00u2
    7c. Takeoff: T1s -> S00u5
  Draw: S2c -> Discard; S1s,H2c,S1c,S2m,S2p
  Restore: C1s=>C2s, HW1s=>HW2s

8. B, Energy 0
  Play:
    # invalid: Create at Academy: H2p@Fac1, B is at the Hero limit (H2c, H2m active)
    # invalid: Receive with T1m@Hand as Starter, a Tool is no Actor
    8a. Manage: S21[C2c@s1 + C2s@s4] -> S21[C2c@s4 + C2s@s1] << 2c
        Hand[S1c:1c + S2c:1c] = 2c; S1c,S2c->Discard
  Draw with Shuffle: H2c,T1m,T1p -> Discard; S1s,H2m,S2p,T1s, Shuffle B.Discard.3, H2c
```

### Turns 9 to 12

A builds B4c, the [[Megacademy]], and [[Grow]]s C2s to C4s: its
[[Science]] engine is complete. B [[Research]]es C4m and [[Grow]]s C2m
into it.

```text
9. A, Energy 1
  Play:
    # invalid: Upgrade with Grow from H2c/1p@Hand:Upgrade, a Production End
    # RG5-7: an Upgrade from a Production End only Enhances
    9a. Research at Archive: B4p@Lab3 -> Lab1 << 1s
        S1s@Hand:1s + HW2s@S00w:Archive+1e = 1s
        S1s->Discard, HW2s=>HW1s; Energy 2
    9b. Research at Archive: B4c@Lab3 -> Fac1 << 5s *2c
        S1s/2m@Hand:1s + S00[C2s@s5:Explore+2s +2e + C2c@s1:Academy+2c+*2c + HW1s@w:Archive] = 5s *2c
        S2m->Discard, C2s=>C1s, C2c=>C1c; Energy 0
  Draw with Shuffle: S2p,H2c,S1c -> Discard; Shuffle A.Discard.2, S1p,S1s,S2c,S2p,S2m
  Restore: C1s=>C2s, C1c=>C2c, HW1s=>HW2s

10. B, Energy 0
  Play:
    # invalid: Research of C4s@Lab4, not the top Card of the pile
    10a. Research at Archive: C4m@Lab4 -> Fac3 << 5s *2m
         Hand[S1s:1s + T1s:1s] + S21[C2s@s1:Explore+2s + C2m@s5:*2m + HW2s@w:Archive+1e] +1e = 5s *2m
         S1s,T1s->Discard, C2s=>C1s, C2m=>C1m, HW2s=>HW1s; Energy 0
  Draw with Shuffle: H2m,S2p,H2c -> Discard; S2c,T1p,S1c,T1m, Shuffle B.Discard.4, H2m
  Restore: C1s=>C2s, C1m=>C2m, HW1s=>HW2s

11. A, Energy 0
  Play:
    11a. Receive: +1e
         S1s@Hand + HW2s@S00w:+1e = +1e; S1s->Discard, HW2s=>HW1s; Energy 1
    11b. Create at Shipyard: B4c@Fac1 -> S00s2 << 5p
         Hand[S2p:1p+1e + S1p:1p] + S00[B2p@s3:Shipyard+1p + T1p@u1:1p] = 5p
         S2p,S1p,T1p->Discard, B2p=>B1p; Energy 0
    11c. Upgrade with Grow at Megacademy: C2s@S00s5 => C3s << 2c
         S2c@Hand:1c + S00[C2c@s1:Academy+2c + B4c@s2:Megacademy] = 3c
         S2c->Discard, C2c=>C1c, B4c=>B3c, C2s->Fac2
    11d. Takeoff: S2m -> S00u1
  Draw with Shuffle: S2s,H2s,H2c,S1c, Shuffle A.Discard.3, S2p
  Restore: C3s=>C4s, B3c=>B4c, HW1s=>HW2s

12. B, Energy 0
  Play:
    # invalid: Grow with H2m@Hand:2c+Upgrade (a Supporter gives one Ability) and C2c@S21s4:+2c (overlapped)
    12a. Upgrade with Grow at Academy: C2m@S21s5 => C3m << 2c
         Hand[H2m:Upgrade + S2c:1c + S1c:1c] + C2c@S21s4:Academy = 2c
         H2m,S2c,S1c->Discard, C2c=>C1c, C2m->Fac3
  Draw with Shuffle: T1p,T1m -> Discard; S1s,T1s,S2p,H2c, Shuffle B.Discard.5, S1c
  Restore: C1c=>C2c, C3m=>C4m
```

### Turns 13 to 16

A starts the [[Hero]] climb: H2s taken off and Grown to H4s at the
[[Megacademy]], S1m Enhanced to S4p, H6s Researched. B reorders its
[[Laboratory]] (RG5-9) and makes the game's first [[Explore]], an
[[Asteroids]] next to S21.

```text
13. A, Energy 0
  Play:
    # RG5-8: a Supporter from Hand gives its Level for a Prerequisite as its one Ability; A wrote S2s:1s+*1s, C4s gives the *1s
    13a. Research at Archive: S4p@Lab4 -> Fac4 << 5s *1s *2p
         Hand[S2s:1s + S2p:*2p] + S00[C4s@s5:+3r+4s+*4s + HW2s@w:Archive+1e + S2m@u1] = 5s *1s *2p
         S2s,S2p,S2m->Discard, C4s=>C3s, HW2s=>HW1s; Energy 1
    13b. Takeoff: H2s -> S00u1
    13c. Upgrade with Grow at Megacademy: H2s@S00u1 => H3c << 2c
         Hand[S1c:1c + H2c:2c] + B4c@S00s2:Megacademy = 3c
         S1c,H2c->Discard, B4c=>B3c, H2s->Fac1
  Draw with Shuffle: S1s,S1p,T1p,S2c, Shuffle A.Discard.4, H2c
  Restore: C3s=>C4s, HW1s=>HW2s, C1c=>C2c

14. B, Energy 0
  Play:
    # RG5-9: one Research moves several Cards between Laboratory piles, 1s each
    14a. Research at Archive: C4c,C4p@Lab4 -> Lab5 << 2s
         Hand[S1s:1s + T1s:1s] + HW2s@S21w:Archive+1e = 2s
         S1s,T1s->Discard, HW2s=>HW1s; Energy 1
  Draw with Shuffle: S2p,H2c,S1c -> Discard; T1m,S2c,T1p,H2m, Shuffle B.Discard.6, S1c
  Restore: HW1s=>HW2s

15. A, Energy 1
  Play:
    15a. Upgrade with Enhance at Shipyard: S1m@S00u4 => S4p << 3p
         Hand[H2c/1p:Upgrade + S1p:1p+1e + T1p:1p] + B1p@S00s3:Shipyard = 3p
         H2c,S1p,T1p->Discard, S1m->Fac2; Energy 0
    15b. Research at Archive: H6s@Lab2 -> Fac1 << 7s *4s *3p
         S1s@Hand:1s + S00[C4s@s5:+3r+4s+*4s + T1s@u5:1s + S4p@u4:*4p + HW2s@w:Archive+1e] +1e = 7s *4s *3p
         S1s,T1s,S4p->Discard, C4s=>C3s, HW2s=>HW1s; Energy 0
    15c. Manage: H3c@S00u1 => H4s << 1c
         S2c@Hand:1c = 1c; S2c->Discard
  Draw with Shuffle: S2m,S2p,S1c,S2s, Shuffle A.Discard.5, S2c
  Restore: C3s=>C4s, HW1s=>HW2s, B3c=>B4c

16. B, Energy 1
  Play:
    # invalid claim: H2m@Hand:2m+Explore, a Supporter gives one Ability; read as H2m:Explore
    16a. Explore with Recon: S21o9 => Asteroids+1 << 2m
         Hand[H2m:Recon + T1m:1m + S2c/1m:1m] = 2m
         drawn Asteroids+1 (Price 2) and Space+5 (Price 6), Space+5 back to the bag
         H2m,T1m,S2c->Discard
  Draw with Shuffle: T1p,S1c -> Discard; H2c,S1s,T1s,S2p, Shuffle B.Discard.7, S2c
  Restore: none needed
```

### Turns 17 to 20

A [[Grow]]s H4s to H6s, then sends H6s to [[Discard]] to give *6s for
H8s, the first [[Crown]] in the [[Factory]]. RG5-10: a [[Starter]] of
any [[Class]] starts a [[Research]]. B [[Research]]es C4s and
[[Grow]]s into it.

```text
17. A, Energy 0
  Play:
    17a. Upgrade with Grow at Megacademy: H4s@S00u1 => H5p << 3c
         Hand[S1c:1c + S2c:1c] + S00[C2c@s1:Academy+2c + B4c@s2:Megacademy] = 4c
         S1c,S2c->Discard, C2c=>C1c, B4c=>B3c, H4s->Fac1
    17b. Manage: H5p@S00u1 => H6s << 1c
         S1c/2p@Hand:1c = 1c; S2p->Discard
    17c. Research at Archive: S4m@Lab4 -> Fac4 << 5s *1c *2m
         Hand[S2s:1s + S2m:*2m] + S00[C4s@s5:+3r+4s + C1c@s1:*1c + HW2s@w:Archive+1e] = 5s *1c *2m
         S2s,S2m->Discard, C4s=>C3s, HW2s=>HW1s; Energy 1
  Draw: S4p,S1s,H2c,S1p,T1p
  Restore: C3s=>C4s, HW1s=>HW2s, C1c=>C2c

18. B, Energy 1
  Play:
    18a. Research at Archive: C4s@Lab4 -> Fac4 << 5s *2s
         Hand[S1s:1s+1e + T1s:1s] + S21[C2s@s1:Explore+2s + HW2s@w:Archive+1e] = 5s *2s
         S1s,T1s->Discard, C2s=>C1s, HW2s=>HW1s; Energy 1
  Draw with Shuffle: H2c,S2p,S2c -> Discard; S1c,T1m,H2m,T1p, Shuffle B.Discard.8, S2c
  Restore: C1s=>C2s, HW1s=>HW2s

19. A, Energy 1
  Play:
    19a. Takeoff: S1s -> S00u4
    19b. Upgrade with Enhance at Shipyard: S1s@S00u4 => S4m << 3p
         Hand[H2c/1p:Upgrade + S1p:1p+1e + T1p:1p] + B1p@S00s3:Shipyard = 3p
         H2c,S1p,T1p->Discard, S1s->Fac2; Energy 0
    # RG5-10: any Actor from Hand may start any Action; only Manage and Receive take the Starter's Class
    19c. Research at Archive: H8s@Lab2 -> Fac1 << 9s *4m *4p *6s
         S4p@Hand:*4p + S00[H6s@u1:4s+*6s + C4s@s5:+3r+4s + S4m@u4:*4m + HW2s@w:Archive+1e+1e] = 9s *4m *4p *6s
         S4p,H6s,S4m->Discard, C4s=>C3s, HW2s=>HW1s; Energy 0
  Draw with Shuffle: T1s, Shuffle A.Discard.6, S4p,S2m,S2p,S2s
  Restore: C3s=>C4s, HW1s=>HW2s, B3c=>B4c

20. B, Energy 1
  Play:
    20a. Upgrade with Grow at Academy: C2s@S21s1 => C3s << 2c
         Hand[H1c/2m:Upgrade + S1c:1c + S2c:1c] + C2c@S21s4:Academy = 2c
         H2m,S1c,S2c->Discard, C2c=>C1c, C2s->Fac3
  Draw with Shuffle: T1m,T1p -> Discard; S1s,H2c,S2p,T1s, Shuffle B.Discard.9, T1p
  Restore: C3s=>C4s, C1c=>C2c
```

### Turns 21 to 24

A shuffles eight [[Laboratory]] [[Card]]s for 1s each and [[Grow]]s
H6s to H8s, the [[Science]] [[Crown]] on the [[Field]] ([[Turn]] 23).
B [[Grow]]s C2p into C4p, MegaYard.

```text
21. A, Energy 0
  Play:
    21a. Research at Archive: S4c@Lab4 -> Lab3, H4c@Lab2 -> Lab3, H4p@Lab2 -> Lab3, H4m@Lab2 -> Lab3 << 4s
         Hand[S1s/2m:1s + T1s:1s + S3s/4p:2s] + HW2s@S00w:Archive+1e = 4s
         S2m,T1s,S4p->Discard, HW2s=>HW1s; Energy 1
    21b. Research at Archive: B4p@Lab1 -> Fac2 << 5s *2p
         Hand[S2s:1s + S2p:*2p] + S00[C4s@s5:+3r+4s + HW1s@w:Archive] = 5s *2p
         S2s,S2p->Discard, C4s=>C3s; Energy 1
  Draw: H2c,H6s,T1p,S1p,S2c
  Restore: C3s=>C4s, HW1s=>HW2s, B1p=>B2p

22. B, Energy 1
  Play:
    22a. Research at Archive: C4p@Lab5 -> Fac4 << 5s *2p
         Hand[S1s:1s + S2p:*2p] + S21[C4s@s1:+3r+4s + HW2s@w:Archive+1e] = 5s *2p
         S1s,S2p->Discard, C4s=>C3s, HW2s=>HW1s; Energy 2
  Draw with Shuffle: H2c,T1s,T1p -> Discard; S1c,S2c,T1m,H2m, Shuffle B.Discard.10, H2c
  Restore: C3s=>C4s, HW1s=>HW2s

23. A, Energy 1
  Play:
    23a. Takeoff: H6s -> S00u1
    23b. Upgrade with Grow at Megacademy: H6s@S00u1 => H7m << 4c
         S2c@Hand:1c + S00[C2c@s1:Academy+2c+1e + B4c@s2:Megacademy] = 4c
         S2c->Discard, C2c=>C1c, B4c=>B3c, H6s->Fac1; Energy 0
    23c. Manage: H7m@S00u1 => H8s << 1c
         H2c@Hand:2c = 2c; H2c->Discard
    23d. Research at Archive: HS6s@Lab5 -> Lab1, HS6p@Lab5 -> Lab1, HS6c@Lab5 -> Lab1, HS6m@Lab5 -> Lab1 << 4s
         S1p@Hand + S00[C4s@s5:+3r+4s + HW2s@w:Archive+1e] = 4s
         S1p->Discard, C4s=>C3s, HW2s=>HW1s; Energy 1
    23e. Takeoff: T1p -> S00u4
  Draw with Shuffle: S1c,S4m, Shuffle A.Discard.7, T1s,S2s,S2m
  Restore: C3s=>C4s, HW1s=>HW2s, C1c=>C2c

24. B, Energy 2
  Play:
    24a. Upgrade with Grow at Academy: C2p@S21s2 => C3p << 2c
         Hand[H1c/2m:Upgrade + S1c:1c + S2c:1c] + C2c@S21s4:Academy = 2c
         H2m,S1c,S2c->Discard, C2c=>C1c, C2p->Fac3
  Draw with Shuffle: T1m,H2c -> Discard; S1s,S2p,T1p,T1s, Shuffle B.Discard.11, H2m
  Restore: C3p=>C4p, C1c=>C2c
```

### Turns 25 to 28

A [[Research]]es S6m and [[Enhance]]s a Starting card into it; B
[[Research]]es S4m and [[Enhance]]s S2m into it. Neither side can
reach the other: the [[Void]]s around S11 and the [[Hidden]]
[[Space]]s close every route.

```text
25. A, Energy 1
  Play:
    25a. Research at Archive: S6m@Lab4 -> Fac4 << 7s *4m *3s
         Hand[S4m:*4m + S2s:1s + S1s/2m:1s + T1s:1s] + S00[C4s@s5:+3r+4s+*3s + HW2s@w:Archive+1e] = 7s *4m *3s
         S4m,S2s,S2m,T1s->Discard, C4s=>C3s, HW2s=>HW1s; Energy 2
    25b. Takeoff: S1c -> S00u5
  Draw: S1p,H2c,S2p,S2c,S4p
  Restore: C3s=>C4s, HW1s=>HW2s, B3c=>B4c

26. B, Energy 2
  Play:
    26a. Research at Archive: S4m@Lab1 -> Fac4 << 5s *1c *2m
         Hand[S1s:1s + H2m:*2m] + S21[C4s@s1:+3r+4s + C2c@s4:*1c + HW2s@w:Archive+1e] = 5s *1c *2m
         S1s,H2m->Discard, C4s=>C3s, C2c=>C1c, HW2s=>HW1s; Energy 3
  Draw with Shuffle: S2p,T1p,T1s -> Discard; S1c,H2c,T1m,S2c, Shuffle B.Discard.12, S1s
  Restore: C3s=>C4s, C1c=>C2c, HW1s=>HW2s

27. A, Energy 2
  Play:
    27a. Upgrade with Enhance at Shipyard: S1c@S00u5 => S6m << 4p
         Hand[H2c/1p:Upgrade + S4p:2p + S1p:1p + S2p:1p] + B2p@S00s3:Shipyard = 4p
         H2c,S4p,S1p,S2p->Discard, B2p=>B1p, S1c->Fac2
    27b. Research at Archive: S6p@Lab4 -> Lab3 << 1s
         S2c@Hand + S00[C4s@s5:+3r+4s + HW2s@w:Archive+1e] = 4s
         S2c->Discard, C4s=>C3s, HW2s=>HW1s; Energy 3
  Draw with Shuffle: Shuffle A.Discard.8, S4m,S2m,S2c,T1s,S2p
  Restore: C3s=>C4s, HW1s=>HW2s, B1p=>B2p

28. B, Energy 3
  Play:
    28a. Upgrade with Enhance at Shipyard: S2m@S21u4 => S4m << 3p
         H1p/2c@Hand:Upgrade + S21[S1p@u2:1p+1e + B2p@s3:Shipyard+1e] = 3p
         H2c,S1p->Discard, B2p=>B1p, S2m->Fac3; Energy 1
  Draw with Shuffle: S1c,T1m,S2c,S1s -> Discard; T1s,S2p,H2m,T1p, Shuffle B.Discard.13, S2c
  Restore: B1p=>B2p
```

### Turns 29 to 32

A [[Research]]es S8m and [[Enhance]]s S2c into it, the second
[[Crown]] ([[Turn]] 31); its double [[Research]] is invalid (RG5-11).
B's first [[Move]], to S11, has no route; S2s goes to S20 instead.

```text
29. A, Energy 3
  Play:
    29a. Research at Archive: S8m@Lab4 -> Fac4 << 9s *4c *4s *6m
         Hand[S4m + S1s/2m:1s + T1s:1s] + S00[C4s@s5:+3r+4s+*4s+3e + B4c@s2:*4c + S6m@u5:*6m + HW2s@w:Archive+1e] = 9s *4c *4s *6m
         S4m,S2m,T1s,S6m->Discard, C4s=>C3s, B4c=>B3c, HW2s=>HW1s; Energy 1
    29b. Takeoff: S2c -> S00u5
  Draw with Shuffle: S2p -> Discard; H2c,S4p,S1p,S2s, Shuffle A.Discard.9, S6m
  Restore: C3s=>C4s, HW1s=>HW2s, B3c=>B4c

30. B, Energy 1
  Play:
    30a. Research at Archive: C4c@Lab5 -> Fac4 << 5s *2c
         Hand[S2c:*2c + T1s:1s] + S21[C4s@s1:+3r+4s + HW2s@w:Archive+1e] = 5s *2c
         S2c,T1s->Discard, C4s=>C3s, HW2s=>HW1s; Energy 2
  Draw: S2p,H2m,T1p -> Discard; T1m,S1s,S1c,H2c,S1p
  Restore: C3s=>C4s, HW1s=>HW2s

31. A, Energy 1
  Play:
    31a. Upgrade with Enhance at Shipyard: S2c@S00u5 => S8m << 5p
         Hand[H2c/1p:Upgrade + S4p:2p + S1p:1p + S1p/2s:1p] + S00[T1p@u4:1p + B2p@s3:Shipyard] = 5p
         H2c,S4p,S1p,S2s,T1p->Discard, B2p=>B1p, S2c->Fac2
    # invalid: Research of HS6m@Lab1 -> Lab4 and HS6c@Lab1 -> Fac3 in one Action
    # RG5-11: one Research moves one Card to the Factory, or Cards between Laboratory piles, not both
    31b. Research at Archive: HS6m@Lab1 -> Lab4 << 1s
         S6m@Hand + S00[C4s@s5:+3r+4s + HW2s@w:Archive+1e] = 4s
         S6m->Discard, C4s=>C3s, HW2s=>HW1s; Energy 2
  Draw with Shuffle: S4m,S2p,S2m,T1s, Shuffle A.Discard.10, S4p
  Restore: C3s=>C4s, HW1s=>HW2s, B1p=>B2p

32. B, Energy 2
  Play:
    # invalid: Move S2s from S21 to S11, no route (S21o11, S21o12 Voids, the rest Hidden)
    32a. Move: S21[S2s@u1] -> S20[S2s@u1] << 2r
         S1s@Hand + S2s@S21u1:2r = 2r; S1s->Discard
  Draw with Shuffle: T1m,S1c,H2c,S1p -> Discard; Shuffle B.Discard.14, T1p,H2c,H2m,S1c,S1p
  Restore: none needed
```

### Turns 33 to 36

[[UnifiedTheory|Unified Theory]] lets H8s give *6p, so A
[[Research]]es HS8p directly ([[Turn]] 33). B's [[Survey]] reveals
S20o11 and costs it S2s and S20. Told of the cap, A turns to
[[VictoryPoints|Victory points]] on [[Turn]] 35.

```text
33. A, Energy 2
  Play:
    33a. Research at Archive: HS8p@Lab5 -> Fac3 << 8s *4c *4s *6p
         Hand[S4m + S1s/2m:1s + T1s:1s] + S00[C4s@s5:+3r+4s+*4s + B4c@s2:*4c + H8s@u1:5s+UnifiedTheory+*6p + HW2s@w:Archive+1e] = 11s *4c *4s *6p
         S4m,S2m,T1s,H8s->Discard, C4s=>C3s, B4c=>B3c, HW2s=>HW1s; Energy 3
    33b. Takeoff: S4p -> S00u4
    33c. Takeoff: S2p -> S00u1
  Draw: T1p,S6m,H2c,S1p,S2s
  Restore: C3s=>C4s, HW1s=>HW2s, B3c=>B4c

34. B, Energy 2
  Play:
    # invalid: Explore with a remote S21 Group of Range 1 (C4s has Range 0, its +3r adds only in a Move), Distance at least 2
    34a. Explore with Survey: S20o11 => Space+1 << 2s
         H2m@Hand:Explore + S2s@S20u1:1s+Explore+1e = 2s
         drawn Space+1 (Price 2) and BlackHole+6 (Price 8), BlackHole+6 back to the bag
         H2m,S2s->Discard; Energy 1
    34b. Takeoff: S1p -> S21u1
    34c. Takeoff: S1c -> S21u2
  Draw: T1p,H2c -> Discard; S2p,S2c,T1s,S1s,T1m
  Restore: none needed

35. A, Energy 3
  Play:
    35a. Research at Archive: HS6c@Lab1 -> Lab4 << 1s
         S2s@Hand:1s + S00[C4s@s5:+3r+4s + HW2s@w:Archive+1e + T1c@u2 + T1m@u3] = 5s
         S2s,T1c,T1m->Discard, C4s=>C3s, HW2s=>HW1s; Energy 4
    35b. Manage: H6s@Fac1 -> Fac4 << 1c
         S0c/1p@Hand:0c + C2c@S00s1:Academy+2c = 2c; S1p->Discard, C2c=>C1c
    35c. Takeoff: H2c -> S00u2
    35d. Takeoff: T1p -> S00u3
  Draw with Shuffle: S6m -> Discard; Shuffle A.Discard.11, T1m,T1c,T1s,S6m,S2s
  Restore: C3s=>C4s, HW1s=>HW2s, C1c=>C2c

36. B, Energy 1
  Play:
    36a. Research at Archive: H4m@Lab2 -> Fac1 << 5s *1p *2m
         Hand[S1s:1s + S2p:*1p] + S21[C4s@s1:+3r+4s + C4m@s5:*2m + HW2s@w:Archive+1e] = 5s *1p *2m
         S1s,S2p->Discard, C4s=>C3s, C4m=>C3m, HW2s=>HW1s; Energy 2
  Draw with Shuffle: S2c,T1s,T1m -> Discard; Shuffle B.Discard.15, T1p,H2m,T1s,S2p,S2c
  Restore: C3s=>C4s, C3m=>C4m, HW1s=>HW2s
```

### Turns 37 to 40

A banks [[Energy]], then builds HS8p with two [[Create]]s and takes
H8s off again on [[Turn]] 39, +16 [[VictoryPoints|Victory points]]. B,
out of reach, can only take off a [[Hero]]. A wins 27-20 at the cap.

```text
37. A, Energy 4
  Play:
    37a. Upgrade with Grow at Megacademy: H2c@S00u2 => H3c << 2c
         S6m@Hand + S00[C2c@s1:Academy+2c + B4c@s2:Megacademy] = 2c
         S6m->Discard, C2c=>C1c, B4c=>B3c, H2c->Fac1
    37b. Receive: +1e
         S2s@Hand:1s + HW2s@S00w:Archive+1e = +1e; S2s->Discard, HW2s=>HW1s; Energy 5
  Draw with Shuffle: T1m,T1c,T1s -> Discard; S1p,S2m,S4m,H8s, Shuffle A.Discard.12, T1c
  Restore: C1c=>C2c, B3c=>B4c, HW1s=>HW2s

38. B, Energy 2
  Play:
    38a. Move: S21[S4m@u4 + S1m@u5] -> S20[S4m@u1 + S1m@u2] << 2r
         S2p@Hand + S21[S4m@u4:4r + S1m@u5:1r] = 5r; S2p->Discard
    38b. Takeoff: H2m -> S21u4
  Draw with Shuffle: T1p,T1s,S2c -> Discard; S1s,H2c,T1m,S2s, Shuffle B.Discard.16, T1p
  Restore: none needed

39. A, Energy 5
  Play:
    39a. Create at Academy: HS8p@Fac3 -> S00s4, first as a Social Card << 8c
         Hand[S3c/4m:2c+1e + T1c:1c] + C2c@S00s1:Academy+2c+2e = 8c
         S4m,T1c->Discard, C2c=>C1c; Energy 2
    39b. Create at Shipyard: HS8p@Fac3 -> S00s4, then as an Industrial Card, HS8p built << 7p
         S1p@Hand:1p + S00[S2p@u1:1p + T1p@u3:1p + S4p@u4:2p+2e + B2p@s3:Shipyard] = 7p
         S1p,S2p,T1p,S4p->Discard, B2p=>B1p; Energy 0
    39c. Takeoff: H8s -> S00u1
    39d. Takeoff: S2m -> S00u3
  Check: no achievement (A provides 8m S8m, 8s H8s, 8p HS8p, no 8c)
  Draw with Shuffle: T1m,S2s,T1s,S6m, Shuffle A.Discard.13, S2p
  Restore: C1c=>C2c, B1p=>B2p

40. B, Energy 2
  Play:
    40a. Takeoff: H2c -> S21u5
  Check: no achievement
  Draw with Shuffle: S1s,T1m,S2s,T1p -> Discard; S2c,T1s,S2p, Shuffle B.Discard.17, S2s,T1p
  Restore: none needed
```

## Result

```text
Cap: 40 Turns, the game ends as at Twilight. No achievement on either side (Goal.md 6.2):
Victory points: A 27 (C2c 2, C4s 4, HW2s 2, H3c 3, H8s 8, HS8p 8), B 20 (C4s 4, C4p 4, C2c 2, C4m 4, HW2s 2, H2m 2, H2c 2)
Result: A wins 27-20
```

## Rulings

- **RG5-1: Starting cards' Weak Ends.** Gap: `Cards/Deck.md` rule 8
  and `meta/Notation.md` give the [[Starting cards]] as 1M/0S, 1C/0M,
  1P/0C, 1S/0P ([[Weak]] [[End]] of the [[Class]] of the [[Ship]]
  2/1's [[Weak]] [[End]]), the [[Deck]] list prints `S1+0m/0+1c` and
  `S1+0p/0+1s`. Ruling: rule 8 and [[Notation]] govern: S1m/0s,
  S1c/0m, S1p/0c, S1s/0p. Pages: [[Card]]s/[[Deck]].md (rule 8 vs the
  list), meta/[[Notation]].md.
- **RG5-2: Asteroids ExtraPrice by Length.** Gap: `Duel.md` gives 13
  [[Asteroids]], "1 on 7, 2 on 6", but not which [[Length]]s carry
  which. Ruling: alternate down the [[Length]]s from EP 1: L1 4×EP1
  3×EP2, L2 1×EP1 2×EP2, L3 1×EP1 1×EP2, L4 1×EP1. Pages: [[Duel]].md
  ([[Space bag]] table).
- **RG5-3: Order of the Factory and Laboratory piles at setup.** Gap:
  `StartDraw.md` names the [[Card]]s of the [[Factory]] and the
  [[Laboratory]] but not how they are split into the 4 and 5 piles or
  ordered. Ruling: each player splits and orders its own piles at
  setup, any split, a default offered. Pages: StartDraw.md,
  [[Home]]/[[Factory]].md, [[Home]]/[[Laboratory]].md.
- **RG5-4: Which Slot overlaps which.** Gap: `Field/Slot.md` 5:
  "numbered 1-5 by height", "overlapped when the next lower slot of
  its row holds a [[Card]]" doesn't say whether slot 1 is at the top
  or the bottom. Ruling: slot 1 is the lowest, a [[Card]] in slot k is
  overlapped while slot k-1 holds a [[Card]]; s1 is never overlapped.
  Pages: [[Field]]/[[Slot]].md.
- **RG5-5: Slots of the starting Structures.** Gap: `StartDraw.md` 3
  puts the [[Academy]] and the [[Shipyard]] into the home [[Star]]
  without [[Slot]]s. Ruling: each player picks them at setup (both
  took s1 and s3). Pages: StartDraw.md, [[Field]]/[[Slot]].md.
- **RG5-6: How many Takeoffs per Turn.** Gap: `Takeoff.md` 1 "plays
  **ONE** [[Unit]] [[Card]]" reads as one [[Card]] per [[Takeoff]] or
  one [[Takeoff]] per [[Turn]]. Ruling: one [[Card]] per [[Takeoff]],
  any number of [[Takeoff]]s per [[Turn]] ([[Turn]].md 2: "each played
  [[Card]] either goes to [[Field]] with [[Takeoff]]"), limited by
  [[Slot]]s; a [[Card]] taken off without a named [[End]] comes
  [[Strong]] [[End]] up. Pages: [[Takeoff]].md, [[Turn]].md.
- **RG5-7: Grow from a Production End.** Gap: `Upgrade.md` 2 pays
  [[Grow]] in [[Culture]] and [[Enhance]] in [[Production]],
  `TechnologyAction.md` 2 pays a two-[[Class]] [[Technology]] in the
  [[Class]] of the [[End]] that provides it; [[Upgrade]] on H2c's
  [[Weak]] [[End]] is a [[Production]] [[End]]. Ruling: an [[Upgrade]]
  from a [[Production]] [[End]] only [[Enhance]]s, one from a
  [[Culture]] [[End]] only [[Grow]]s; a [[Hub]] with [[Upgrade]]
  ([[Megacademy]]) gives its own [[Class]]. Pages:
  TechnologyActions/[[Upgrade]].md, TechnologyAction.md,
  Concepts/[[Technology]].md ([[Upgrade]] 2cp 4cp).
- **RG5-8: A Supporter's Level for Prerequisites.** Gap: `Support.md`
  2 lists a [[Supporter]]'s one [[Ability]] as Primary, Secondary,
  [[Range]] or [[Capacity]], `Ability.md` 3.2 counts the [[Level]]
  with [[Class]] for [[Prerequisites]] as an [[Ability]] too. Ruling:
  a [[Supporter]] may give its [[Level]] for one Prerequisite pair as
  its one [[Ability]], not on top of another; a [[Direct participant]]
  gives it with all the rest. Pages: Concepts/[[Support]].md,
  Concepts/[[Ability]].md,
  [[Property|Properties]]/[[Prerequisites]].md.
- **RG5-9: Several Cards in one Research between Laboratory piles.**
  Gap: `Research.md` 2 "moves a [[Card]]", `Laboratory.md` 4 "1
  [[Power]] per [[Card]], whatever [[Action]] moves it". Ruling: one
  [[Research]] may move several [[Card]]s between own [[Laboratory]]
  piles, each from a pile top in turn, each onto the top of its target
  pile, 1 [[Science power]] per [[Card]]. Pages:
  BasicActions/[[Research]].md, [[Home]]/[[Laboratory]].md.
- **RG5-10: The Class of the Starter.** Gap: `PerformAction.md` 1.1
  asks only for "an [[Actor]] from [[Hand]]"; `Cards/Deck.md` note 13
  says a Starting card's [[Class]] "lets [it] start an [[Action]] of
  another [[Class]], e.g. a [[Manage]] in [[Science]]", which reads as
  if a [[Starter]] had to match the [[Action]]'s [[Class]]. A started
  a [[Research]] with S4p on its [[Production]] [[End]] (T19). Ruling:
  any [[Actor]] from [[Hand]] may start any [[Action]]; only
  [[Manage]] and [[Receive]], whose [[Class]] is the [[Starter]]'s,
  depend on it, and note 13 speaks of those. Pages: PerformAction.md,
  [[Card]]s/[[Deck]].md (note 13), BasicActions/[[Manage]].md,
  BasicActions/[[Receive]].md.
- **RG5-11: A Research to the Factory and Laboratory moves in one
  Action.** Gap: RG5-9 lets one [[Research]] move several [[Card]]s
  between [[Laboratory]] piles; A then sent one [[Card]] on to another
  [[Laboratory]] pile and the next one to the [[Factory]] in the same
  [[Research]] (T31). Ruling: one [[Research]] either moves one
  [[Card]] from the [[Laboratory]] to the [[Factory]], with that
  [[Card]]'s [[Prerequisites]] and [[Price]], or moves [[Card]]s
  between [[Laboratory]] piles at 1 [[Science power]] each, not both.
  Pages: BasicActions/[[Research]].md (2, 4, 5),
  [[Home]]/[[Laboratory]].md (4).
