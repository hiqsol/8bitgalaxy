---
status: WIP
scope: meta
---

1. **Notation** writes cards, places and plays as text: rules
   examples, playtest logs and the virtual game
2. Plays are whole words: `Takeoff`, `Create`, shorter forms come
   later

## Symbols

1. Cards:
	1. `B1` - Base-1
	2. `C1` - Colony-1
	3. `H1` - Hero-1
	4. `S1` - Ship-1
	5. `HS1` - Hyperstructure-1
	6. `HW1` - Homeworld-1
	7. `T1` - Tool-1
	8. `W1` - World-1
	9. `A2` - Ancient with Level 2, `A?` - Ancient not revealed
2. LevelClass, Power, Resource:
	1. `1m` - 1 Military
	2. `1c` - 1 Culture
	3. `1p` - 1 Production
	4. `1s` - 1 Science
	5. `3e` - 3 Energy
	6. `2g` - 2 Goods
	7. `2r` - 2 Range
	8. `1l` - 1 Load (Capacity)
	9. `1d` - 1 Defense
	10. `1n` - 1 None
	11. `1*` - 1 any Class: a pattern for a set of cards
3. Stars:
	1. `S+0+0` - Star at `[0,0]`, when possible shortens to `S00`, `S11`
		1. Star could get negative coordinates: `S-1-1` is at `[-1,-1]`
	2. `S00u1` - unit slot 1 at S00
	3. `S-1-1s2` - structure slot 2 at Star at `[-1,-1]`
	4. `S00w` - World slot at S00
	5. `S00o3` - [[Space]] tile at 3 o'clock of S00
		1. A shared tile has two names: `S00o3` is `S01o10`
		2. A revealed tile with specs Type|Length: `S11o1=Void|1r`
		3. Normal space type is just Space: `S00o3=Space|2r`
	6. `@s1` - at structure slot-1
	7. `@u1` - at unit slot-1
	8. `@w` - at the World slot
4. Other:
	1. [[Home]] piles are words: `Hand`, `Reserve`, `Discard`, `History`
		1. A pile of a row adds its number: `Fac2`, `Lab1`
		2. A rival's pile adds the player: `B:Hand`
	2. Decks beside the [[Field]] are words: `WorldDeck`, `AncientDeck`,
		`AncientDiscard`
	3. `S1c|1c` - Ship-1c provides 1c
	4. `a << b` - a required b
	5. `a -> b` - a moved to b
	6. `a => b` - a turned into b

## Cards

1. Full card name: card type, then the [[End]] that is up, then the
   other End; an End is its [[Level]] and its [[Class]] letter:
   `C1s/2s` is a [[Depleted]] Colony-2s/1s
2. [[ExtraPrice]] follows the Level as printed: `S2+1m/1+2s`
3. A [[State]] follows the card as a word: `Damaged`, `Hidden`:
   `B2p Damaged`, the End that is up shows the rest
4. A card nobody knows yet is written by its back: `Hidden Unit`,
   `Hidden Structure`
5. A card in [[Hand]] gives one [[End]], what it gives shows which:
   `S1s@Hand|1s` is S2m/1s on its weak end
6. A one-ended card has only its end: `Ship-1m`, short `S1m`
7. The normal form tells apart cards whose short forms match: `S1s/2m`
   is S2m/1s on its weak End, `S1s` is Ship-1s
8. Forms:

Full                 |short | normal  | alternative
---------------------|------|---------|--------
Ship-2m/1s           |  S2m |  S2m/1s |  S2m1s
Hero-2c/1p           |  H2c |  H2c/1p |  H2c1p
Base-2p/1p           |  B2p |  B2p/1p |  B2p1p
Colony-2s/1s         |  C2s |  C2s/1s |  C2s1s
Colony World-2p/1n   |  W2p |  W2p/1n |  W2p1n
Hyperstructure-6s/5s | HS6s | HS6s/5s | HS6s5s
Homeworld-2c/1n      | HW2c | HW2c/1n | HW2c1n

## Actions

My idea to make logs more readable, from most important info to least:
1. One action can take many lines
2. Starts with action `Name:`
3. Then main outcome of the action
4. Then `<< requirements`
5. Then participants with provided powers
6. Then depletion
7. The number is the [[Turn]], a letter numbers the plays inside it:
   `3b. Explore: ...`
8. Participants at one place group in brackets:
   `Hand[S2s|Survey + S3m|3r]`, a single one names its place:
   `S2c@S00u1`
9. A used [[Technology]] follows the action name after `with`, its
   [[Hub]] after `at`, and shows on the card that gives it:
   `Explore with Survey:`, `Upgrade with Grow at Academy:`,
   `Create at Shipyard:`, `S2s|Survey`
10. A [[Boost]] follows what its card gives, the total counts it in
    the Class it adds to: `S1m@Hand|1m+1e = 2m`, `+1g` for [[Goods]]
11. What a card gives and what a play requires are lists joined by
    `,`, amounts join without it: `C2c@S21s4|Academy,2c`, `<< 3r2l`
12. A [[Prerequisites]] pair is a card pattern: `*2s` is any card of
    Level 2 Science, each pair is listed on its own: `<< 5s,*2s`
13. Remote [[Support]] groups: each group is its Star in brackets
    with its own total, on its own line after `+`, a Hand card in the
    group it gives Range to: `+ S00[S1p@Hand|1r + C2m@s4|2m] = 1r2m`

## Examples

Takeoff:
```text
1. Takeoff: S2m -> S21u1
```

Move a Colony as cargo:
```text
2. Move: S00[C1c@s2 + S2c@u1] -> S01[C1c@s1 + S2c@u1] << 3r2l
   S1m@Hand|1r + S2c@S00u1|2r2l = 3r2l; S1m->Discard
```

Explore space:
```text
3. Explore with Survey: S00o3 => Space|2r << 2r2s
   Hand[S2s|Survey + S3m|3r] + C2s@S00s1|2s = 3r2s
   S2s,S3m->Discard, C2s=>C1s
```

Research:
```text
4. Research: C4s@Lab1 -> Fac2 << 5s,*2s
   S2s@Hand|1s+2e + C2s@S21s1|2s,*2s = 5s,*2s
   S2s->Discard, C2s=>C1s
```

Upgrade:
```text
5. Upgrade with Grow at Academy: C2s@S21s2 => C3s << 2c
   H1c@Hand|Grow + C2c@S21s4|Academy,2c = 2c
   H1c->Discard, C2c=>C1c, C2s->Fac3
```

Settle:
```text
6. Create with Settle: B2p@Fac2 -> S01s1 << 3p
   S1p@Hand|1p + S6p@S01u1|Settle,3p = 4p; S1p,S6p->Discard
```

Manage:
```text
7. Manage: S2m@S00u1 => S1s << 1m
   S1m@Hand|1m = 1m; S1m->Discard
```

Manage, a swap of two Structures:
```text
8. Manage: S00[C4m@s2 + C2c@s4] -> S00[C4m@s4 + C2c@s2] << 2s
   S1s@Hand|1s+1e = 2s; S1s->Discard
```

Research between Laboratory piles:
```text
9. Research: S4p@Lab1 -> Lab3 << 1s
   S1s@Hand|1s = 1s; S1s->Discard
```

Create an Actor, it goes to the Discard:
```text
10. Create at Shipyard: S4m@Fac1 -> Discard << 5p
    H2p@Hand|2p + S21[B2p@s3|Shipyard,1p + S2p@u2|1p+1e] = 5p
    H2p,S2p->Discard, B2p=>B1p
```

Upgrade in another Star, the hub in the source:
```text
11. Upgrade with Grow at Academy: C2s@S01s1 => C3s << 2r2c
    Hand[S1c|1r + S1p|1r] + C2c@S00s2|Academy,2c + H1c@S01u3|Grow,2c
    = 2r4c; S1c,S1p,H1c->Discard, C2c=>C1c, C2s->Fac3
```

Recover:
```text
12. Recover with Fix: S1m@S21u1 Damaged => S1m << 1p
    Hand[H2p|Fix + S1p|1p] = 1p; H2p,S1p->Discard
```

## Combat

1. An [[Attack]] writes the defending participants the attacker
   selects in the destination brackets, its outcome comes after the
   [[Combat]]
2. Then one line per Combat round, numbered after its play, the
   additions and passes in [[Combat]] order:
   `7b1. Defender adds H2c@Hand|1d Hidden; Attacker passes`
3. Then `Reveal` the [[Hidden]] cards, the `Total` of both sides, the
   winner and the **Advantage**
4. Then `Outcome`, as for any action: saved cards, [[Damaged]] cards,
   moves into the destination, Deplete
5. [[Ancient]]s defend as `A?` until the reveal, then by their
   [[Defense]]: `-> S01[A?]`, `Reveal: S2m, A3`, they go
   `A3->AncientDiscard`
6. Example:

```text
7b. Attack: S00 -> S01[S1p@u2|1d] << 2r
    S2m@Hand|1m + S00[S1m@u1|1r1m + H2m@u2|2r2m] = 3r4m
    7b1. Defender adds H2c@Hand|1d Hidden; Attacker adds H1m@Hand|2m Hidden
    7b2. Defender passes; Attacker passes
    Reveal: H2c, H1m
    Total: 6m against 2d, attacker wins, Advantage 4
    Outcome: S1m,H2m saved, S1p Damaged; S1m->S01u1, H2m->S01u3
      S2m,H1m->Discard, H2c->B:Discard
```

7. Example against [[Ancient]]s:

```text
9c. Attack: S00 -> S01[A?] << 2r
    Hand[S2m|1m+1e Hidden + S1m|1m Hidden] + S00[H1m@u3|1r2m + S1s@u4|1r]
    = 2r5m
    Reveal: S2m, S1m, A3
    Total: 5m against 3d, attacker wins, Advantage 2
    Outcome: H1m,S1s saved; H1m->S01u1, S1s->S01u2; A3->AncientDiscard
      S2m,S1m->Discard
```

## Game

1. A game record starts with a header, one item per line: `Game`,
   the [[Scenario]], then each `Player` with its [[Faction]] and home
   Star
	1. `Stars:` the Stars with their kind and split, as known at the
	   end
	2. `Setup A:` the Structures each player starts with
2. A [[Turn]] starts with its number, player and [[Energy]]:
   `5. A, Energy 2`, Turns count through the whole game
3. Then its phases as words, `Play`, `Check`, `Draw`, `Restore`, each
   with its plays, one per line
	1. A phase without a change is not written
	2. A play in `Play` adds a letter to the Turn number:
	   `5a. Takeoff: S2m -> S00u2`
	3. `Draw with Shuffle`: the [[Reserve]] ran out, see
	   [[DeckBuilding]]
	4. `Draw: S2s,S1m -> Discard`: the Hand cards not used
	5. `Check: Singularity: HS8c@S00s4, HS8p@S01s1, H8s@S00u2,
	   S8m@Hand`, see [[Singularity]]
	6. `Restore: B1p=>B2p, C1s=>C2s`: the restored Structures
4. A player who can't move: `A can not make a move`, see [[Goal]]
5. The record ends with the result: `Result: A wins by Military`,
   `Result: draw`
6. A comment names the ruling it follows: `# RG1-5: ...`
7. Example:

```text
Game: First duel
Player A: Human, home S00
Player B: Alien, home S21

5. A, Energy 1
  Play:
    5a. Takeoff: S2m -> S00u2
    5b. Explore with Survey: S00o3 => Space|2r << 2r2s
        Hand[S2s|Survey + S3m|3r] + C2s@S00s1|2s = 3r2s
        S2s,S3m->Discard, C2s=>C1s
  Draw with Shuffle
  Restore: B1p=>B2p, C1s=>C2s
```
