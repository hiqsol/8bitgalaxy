---
status: WIP
scope: meta
---

1. **Notation** writes cards, places and plays as text: rules
   examples, playtest logs and the virtual game
2. Plays are whole words: `Takeoff`, `Create`, shorter forms come
   later

## Letters

1. `b1` - Base-1
2. `c1` - Colony-1
3. `h1` - Hero-1
4. `s1` - Ship-1 / `1s` - 1 science
5. `hs1` - Hyperstructure-1
6. `hw1` - Homeworld-1
7. `t1` - Tool-1
8. `w1` - World-1
9. `a2` - Alien with Defense 2, `a?` - Alien not revealed
10. `1c` - 1 Culture
11. `1m` - 1 Military
12. `1n` - 1 None
13. `1p` - 1 Production
14. `1a` - 1 any Class: a pattern for a set of cards
15. `3e` - 3 Energy
16. `S+0+0` - Star at `[0,0]`, when possible shortens to `S00`, `S11`
	1. Star could get negative coordinates: `S-1-1` is at `[-1,-1]`
17. `S00u1` - unit slot 1 at S00
18. `S-1-1s2` - structure slot 2 at Star at `[-1,-1]`
19. `S00w` - World slot at S00
20. `S00o3` - [[Space]] tile at 3 o'clock of S00
	1. A shared tile has two names: `S00o3` is `S01o10`
21. `@s1` - at structure slot-1
22. `@u1` - at unit slot-1
23. `@w` - at the World slot
24. [[Home]] piles are words: `Hand`, `Reserve`, `Discard`, `History`
	1. A pile of a row adds its number: `Factory2`, `Laboratory1`
	2. A rival's pile adds the player: `B:Hand`
25. Decks beside the [[Field]] are words: `WorldDeck`, `AlienDeck`,
    `AlienDiscard`

## Cards

1. Full card name: card type, then the higher end, then the lower
   end; an end is its [[Level]] and its [[Class]] letter
2. [[ExtraPrice]] follows the Level as printed: `s3+1m/1c`
3. A [[State]] follows the card as a word, [[Ready]] is not written:
	1. `weak`: an [[Actor]] with its weak end up: `s2m/1c weak`
	2. `Depleted`, `Damaged`, `Hidden`: `b2p Depleted`
4. A card nobody knows yet is written by its back: `Hidden Unit`,
   `Hidden Structure`
5. Forms:

Full                 |short | normal  | alternative
---------------------|------|---------|--------
Ship-2m/1c           |  s2m |  s2m/1c |  s2m1c
Hero-2c/1p           |  h2c |  h2c/1p |  h2c1p
Base-2p/1s           |  b2p |  b2p/1s |  b2p1s
Colony-2s/1m         |  c2s |  c2s/1m |  c2s1m
World-2p/1n          |  w2p |  w2p/1n |  w2p1n
Hyperstructure-2a/1n | hs2s | hs2s/1n | hs2s1n
Homeworld-2a/1n      | hw2c | hw2c/1n | hw2c1n

## Actions

1. Takeoff: `s2m -> S21u1`
2. Discard: `s1p -> Discard`
3. Create:
   `S21[s1p@Hand+s2p@u1+b1p@s2=Prod6] Create(b3m|Price=Prod5)
   -> S21s3; s1p,s2p->Discard`
4. An [[Action]] line:
   `<source>[<participants>=<total>] <Action>(<targets>) -- <route>
   -> <destination>; <outcome>`
	1. The source is a Star, its participants are in brackets after
	   it, joined by `+`, each with its place, see [[PerformAction]]
	2. The **starter** is the first card `@Hand`
	3. `|` follows a card with what it gives or needs, several joined
	   by `,`: `s1m@Hand|Range1`, `c1c@s2|Size1`, `s2c@u1|Settle,Cul2`
	4. `=` follows the participants with their total: `=Prod6`
	5. The Action follows the participants, its targets in
	   parentheses with the requirement: `Create(b3m|Price=Prod5)`,
	   `Move(c1c@s2|Size1)`, or only the requirement when there is no
	   target card: `Explore(Price=Sci2)`
	6. `-- Range2 ->` is the route to another Star, by the [[Range]]
	   its [[Distance]] needs, `->` alone within one Star
	7. The destination is a Slot `S21s3`, a Space tile `S00o3`, a pile
	   `Factory2` or a Star with the new places in brackets:
	   `S01[s2c@u1 + c1c@s1]`
	8. A remote [[Support]] group follows the source group with its
	   own brackets: `+ S12[c2p@s1|Prod2]`
	9. A [[Boost]] follows what the card gives: `s1m@Hand|Mil1+1e`
	10. A [[TechnologyModifier]] shows on the card that gives it:
	    `s2c@u1|Settle`
	11. The outcome follows `;`: the other changes, [[Deplete]]
	    included
	12. `into` becomes: `c2s into c4s`
5. Values are a word and a number:
	1. [[Power]]: `Mil`, `Cul`, `Prod`, `Sci`
	2. Properties: `Range`, `Size`, `Def`, `Price`, `Cost`
6. A long play breaks into indented lines
7. An [[ImmediateAction]] starts with `Immediate`
8. Examples:

```text
Move, a Colony as cargo:
S00[s1m@Hand|Range1 + s2c@u1|Range2 = Range3] Move(c1c@s2|Size1) -- Range2 -> S01[s2c@u1 + c1c@s1]; s1m->Discard

Explore:
S00[s2s@Hand|Survey + c2s@s1|Sci2 = Sci2] Explore(Price=Sci2) -> S00o3;
  S00o3 revealed Normal; s2s->Discard; c2s Depleted

Research:
S21[s2s@Hand|Sci2 + c2s@s1|Sci2 = Sci4] Research(c4s@Laboratory1|Price=Sci4) -> Factory2;
  s2s->Discard; c2s Depleted

Upgrade:
S21[s2c@Hand|Cul2 = Cul2] Upgrade(c2s@s2 into c4s|Cost=Cul2) -> S21s2;
  c2s->Factory1; s2c->Discard

Settle:
S01[s1c@Hand|Cul1 + s2c@u1|Settle,Cul2 = Cul3] Create(c2c|Price=Cul2) -> S01s1;
  s1c,s2c->Discard

Manage:
S00[s1m@Hand|Mil1 = Mil1] Manage(rotate s2m@u1|Cost=Mil1) -> S00;
  s2m weak; s1m->Discard
```

## Combat

1. An [[Attack]] line ends before the outcome: the destination
   brackets hold the defending participants the attacker selects
2. Then one line per addition or pass, in [[Combat]] order:
   `Defender adds h2c@Hand|Def1 Hidden`, `Attacker passes`
3. Then `Reveal` the [[Hidden]] cards, the `Total` of both sides, the
   winner and the **Advantage**
4. Then `Outcome`, as for any action: saved cards, [[Damaged]] cards,
   moves into the destination, Deplete
5. Example:

```text
S00[s2m@Hand|Mil2 + s1m@u1|Mil1,Range1 + h2m@u2|Mil2,Range2 = Mil5,Range3] Attack -- Range2 -> S01[s1p@u2|Def1]
  Defender adds h2c@Hand|Def1 Hidden
  Attacker adds h1m@Hand|Mil1 Hidden
  Defender passes
  Attacker passes
  Reveal: h2c, h1m
  Total: Mil6 against Def2, attacker wins, Advantage 4
  Outcome: s1m,h2m saved; s1p Damaged; s1m->S01u1; h2m->S01u3;
    s2m,h1m->Discard; h2c->B:Discard
```

## Game

1. A game record starts with a header, one item per line: `Game`,
   the [[Scenario]], then each `Player` with its [[Faction]] and home
   Star
2. A [[Turn]] starts with its round and player: `Round 3, A`
3. Then its phases as words, `Play`, `Check`, `Draw`, `Restore`, each
   with its plays, one per line
	1. A phase without a change is not written
	2. `Draw with Shuffle`: the [[Reserve]] ran out, see
	   [[DeckBuilding]]
4. A player who can't move: `A can not make a move`, see [[Goal]]
5. The record ends with the result: `Result: A wins by Military`,
   `Result: draw`
6. Example:

```text
Game: First duel
Player A: Human, home S00
Player B: Human, home S21

Round 3, A
  Play:
    Takeoff: s2m -> S00u2
    S00[s2s@Hand|Survey + c2s@s1|Sci2 = Sci2] Explore(Price=Sci2) -> S00o3; ...
  Draw with Shuffle
  Restore: b2p, c2s
```
