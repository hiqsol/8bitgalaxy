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
5. A card in [[Hand]] gives one [[End]], what it gives shows which:
   `s2m@Hand|Sci1` is s2m on its weak end
6. A one-ended card has only its end: `Ship-1m`, short `s1m`
7. Forms:

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
	13. A [[Technology]] is its flavour name: `|Recon`, `|Survey`,
	    `|Academy`, `|Shipyard`, `|Grow`, `|Recover`
	14. A [[Prerequisites]] pair is a Level and a Class: the card
	    gives `|2m`, the requirement lists the pairs: `Pre=1c,2m`
	15. Every group has its own total, the totals add up:
	    `S01[s2m@u1|Mil1,Range2 = Mil1,Range2]
	    + S00[c2m@s4|Mil2 = Mil2]`
	16. Direct participants in the destination are a group of their
	    own, with no Range: `+ S01[h1m@u3|Grow,Cul1]`
	17. A Hand card that gives its Range to a remote group is in
	    that group: `+ S00[s2s@Hand|Range2 + h1m@u4|Recon,Range1]`
	18. A Structure that depletes is written `Depleted`, a Unit that
	    depletes goes `->Discard`
5. Values are a word and a number:
	1. [[Power]]: `Mil`, `Cul`, `Prod`, `Sci`
	2. Properties: `Range`, `Size`, `Def`, `Price`, `Cost`
6. A long play breaks into indented lines
7. An [[ImmediateAction]] starts with `Immediate`
8. `#` starts a comment, e.g. a play taken back:
   `# taken back: Create c2p, it lies under c4c`
9. Examples:

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
  c4s Depleted; c2s->Factory1; s2c->Discard

Settle:
S01[s1c@Hand|Cul1 + s2c@u1|Settle,Cul2 = Cul3] Create(c2c|Price=Cul2) -> S01s1;
  s1c,s2c->Discard

Manage:
S00[s1m@Hand|Mil1 = Mil1] Manage(rotate s2m@u1|Cost=Mil1) -> S00;
  s2m weak; s1m->Discard

Manage, a swap of two Structures:
S00[s1s@Hand|Sci1+1e = Sci2] Manage(shift c4m@s2->s4, c2c@s4->s2|Cost=Sci2) -> S00;
  s1s->Discard

Research between Laboratory piles:
S21[s2m@Hand|Sci1 = Sci1] Research(s4p@Laboratory1|Cost=Sci1) -> Laboratory3;
  s2m->Discard

Create an Actor, it goes to the Discard:
S21[s2s@Hand|Prod1 + b2p@s3|Shipyard + s1p@u1|Prod1 + s2p@u2|Prod1+2e = Prod5]
  Create(s4m|Price=Prod5) -> Discard; s2s,s1p,s2p->Discard; b2p Depleted

Upgrade in another Star, the hub in the source:
S00[s1c@Hand|Range1 + s1p@Hand|Range1 + c2c@s2|Academy = Range2]
  + S01[h1m@u3|Grow,Cul1+1e = Cul2]
  Upgrade(c2s@S01s1 into c4s|Cost=Cul2) -- Range2 -> S01s1;
  s1c,s1p,h1m->Discard; c2c,c4s Depleted; c2s->Factory3

Recover:
S21[h1p@Hand|Recover + s2p@Hand|Prod1 = Prod1] Recover(s1m@u1|Cost=Prod1) -> S21;
  h1p,s2p->Discard; s1m Enabled
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
5. [[Alien]]s defend as `a?` until the reveal, then by their
   [[Defense]]: `-> S01[a?]`, `Reveal: s2c, a3`, they go
   `a3->AlienDeck`
6. Example:

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

7. Example against [[Alien]]s:

```text
S00[s2c@Hand|Mil1+1e Hidden + s2m@Hand|Mil1 Hidden + s1m@u3|Mil1,Range1 + h1m@u4|Mil1,Range1 = Mil5,Range2]
    Attack -- Range2 -> S01[a?]
  Reveal: s2c, s2m, a3
  Total: Mil5 against Def3, attacker wins, Advantage 2
  Outcome: s1m,h1m saved; s1m->S01u1; h1m->S01u3; a3->AlienDeck; s2c,s2m->Discard
```

## Game

1. A game record starts with a header, one item per line: `Game`,
   the [[Scenario]], then each `Player` with its [[Faction]] and home
   Star
	1. `Stars:` the Stars with their kind and split, as known at the
	   end
	2. `Setup A:` the Structures each player starts with
2. A [[Turn]] starts with its round, player and [[Energy]]:
   `Round 3, A, Energy 2`
3. Then its phases as words, `Play`, `Check`, `Draw`, `Restore`, each
   with its plays, one per line
	1. A phase without a change is not written
	2. `Takeoff: s2m -> S00u2` in `Play`
	3. `Draw with Shuffle`: the [[Reserve]] ran out, see
	   [[DeckBuilding]]
	4. `Draw: s2s,s1m -> Discard`: the Hand cards not used
	5. `Check: Singularity: c4m@S00s4, c4c@S00s3, c4s@S01s1,
	   s4p@Hand`, see [[Singularity]]
4. A player who can't move: `A can not make a move`, see [[Goal]]
5. The record ends with the result: `Result: A wins by Military`,
   `Result: draw`
6. A comment names the ruling it follows: `# RG1-5: ...`
7. Example:

```text
Game: First duel
Player A: Human, home S00
Player B: Human, home S21

Round 3, A, Energy 1
  Play:
    Takeoff: s2m -> S00u2
    S00[s2s@Hand|Survey + c2s@s1|Sci2 = Sci2] Explore(Price=Sci2) -> S00o3; ...
  Draw with Shuffle
  Restore: b2p, c2s
```
