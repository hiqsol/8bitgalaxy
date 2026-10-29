# 8-bit Galaxy: first duel playtest report

3 AI-vs-AI duels on the `core` rules, 2026-10-22/23.
Files: `/tmp/claude-1001/-home-sol-Sync-8bitgalaxy/0dddadee-ec87-45f3-983e-11db80e35d23/scratchpad/playtest/`
(`RULES.md` digest, `NOTATION.md`, `gameN/log.8bgn`, `gameN/rulings.md`,
`gameN/report.md` where written). The repo is untouched.

## 1. Results

| # | A (moves first, home 00) | B (home 21) | Result | End | Rounds | Rival Combats |
|---|---|---|---|---|---|---|
| 1 | Warlord (Opus) | Architect (Opus) | **1-0** Warlord | `#M-move`: B's only Star Disputed, B can't move | 5 | 0 |
| 2 | Brute (Haiku) | Scholar (Opus) | **0-1** Scholar | `#S` Singularity | 8 | 0 |
| 3 | Turtle (Sonnet) | Gambler (Sonnet) | **1-0** Turtle | `#S` Singularity (a Level-4 Ship held in Hand) | 13 | 0 |

**No game had a single Combat between the rivals**: all 6 Combats
were against Ancients, all won by the attacker, and 1 card was Damaged
in 51 turns. Two of three games ended by Singularity; in game 3 the
loser would have reached it one round later (it missed by one
Depleted Colony). The round-20 cap was never reached.

### Games in brief

**Game 1, Warlord 1-0 Architect (round 5, `#M-move`).**
- Both opened with a home Colony: C2M (Recon + 2 M) for A, C2S
  (Survey) for B.
- B ran Research C4x → Grow C2x>C4x twice and had 10 Culture points
  by round 3, but its Actors all depleted while building.
- A cleared the Ancients at 01 and 12 (the Military Power star next to
  21), then in one turn: Attack 12 → Explore 12.7 with the Hero that
  had just fought → Move one S1M into the last free slot of 21. 21
  became Disputed, B controlled no Star and "could not make a move".

**Game 2, Brute 0-1 Scholar (round 8, `#S`).**
- Scholar never left home: Raise C2S, Research C4S in round 1, Grow
  C2S>C4S for 2 Culture in round 2, then Research+Produce S4M, B4P,
  S4C. M4, P4, S4 sat on the Field from round 5; S4C was drawn in
  round 8: Singularity.
- Brute explored 7 tiles, beat 3 Ancients 9:3 at the Shipyard star 01,
  and was still 2 hidden tiles from 21 at the end.
- Under the opposite ruling of RG2-6 (a hub may upgrade itself)
  Scholar wins in round 5.

**Game 3, Turtle 1-0 Gambler (round 13, `#S`).**
- A mirrored Colony race: 10–10 by round 4, Gambler ahead 20–14 at
  the end after expanding to 20 and 10 (Explore + Attack + Raise in one
  turn, twice).
- Gambler sat next to Turtle's home from round 8 but never attacked:
  "a home C4M gives +3 Defense and +3 M, raiding is unrealistic".
- Both got four C4x Colonies (= Culture points **and** the
  Singularity set). Gambler had all four on the Field at 12... but
  had used C4S for Range that turn: Level 3 at the Check (Check
  comes before Restore).
- Turtle dug S4P out of its Lab with a Manage pile shift, Produced
  it into a deliberately tiny Discard, drew it, and won at 13. with a
  single Takeoff: C4M, C4C, C4S Ready + S4P in Hand.

### Personas

- **Warlord**: fully in character, planned the home dispute from
  round 2. **Architect**: the engine yes, the "keep Hand for defense"
  no; it trusted the Ancients at 12 to block A for more than one turn.
- **Scholar**: fully in character, zero aggression needed.
  **Brute (Haiku)**: aggressive direction, but far more precise and
  careful than "IQ low": 0 invalid plays, declined a risky attack.
- **Turtle**: never attacked, switched from Culture-at-cap to
  Singularity once it saw three Classes done. **Gambler**: bluffing
  never happened, because no rival Combat did; it played a fast
  expansion instead. The rules gave the aggressive personas almost
  nothing to do against a rival, except the home dispute.

## 2. How it was played

- **One referee subagent per game** (Opus) kept the authoritative
  state in files, shuffled with a seeded RNG, validated every play
  and logged it in 8BGN. **Two player subagents per game** talked
  only to their referee, so hands, Reserve and face-down Combat
  commitments stayed secret.
- **Personas** ("specs"): IQ = model (Opus high, Sonnet medium, Haiku
  low), plus Aggression, Risk, Bluff on 0–10 and a preferred path:

| Player | IQ | Aggr | Risk | Bluff | Path |
|---|---|---|---|---|---|
| Warlord | Opus | 9 | 8 | 7 | Military: take the rival home |
| Architect | Opus | 2 | 3 | 2 | Culture engine, Singularity backup |
| Scholar | Opus | 3 | 4 | 3 | Singularity |
| Brute | Haiku | 8 | 9 | 5 | hit hardest, simple heuristics |
| Gambler | Sonnet | 6 | 10 | 10 | opportunist, bluffs |
| Turtle | Sonnet | 1 | 1 | 1 | Culture at the cap, fortify |

- **Rules** = `RULES.md`: the core docs, plus your draft
  `Guidance.md` G1–G9 taken as accepted, plus my playtest rulings
  PR-1..18 (section 6). Referees recorded every further gap as
  `RG<game>-<n>` (section 5).
- Twilight needs all 16 Lab cards researched, so a **round-20 cap**
  (PR-18) ended the game as at Twilight, by Culture points.

## 3. Notation: 8BGN (8-bit Galaxy Notation)

Chess algebraic notation + PGN tags, one line per turn: `7.` is A's
turn of round 7, `7...` B's. Full spec: `NOTATION.md`.

| Token | Meaning |
|---|---|
| `S2M` `H1P` `B2P` `C2C` | card: Type (Ship, Hero, Base, Colony) + strong Level + strong Class |
| `'` `~` `*` `†` | weak end in use, face down (Hidden / committed), Damaged, Destroyed |
| `00`, `00.3`, `@00:2` | Star, Space tile (Star + o'clock), slot 2 of Star 00 |
| `S2C'@00:3` | Takeoff |
| `<V><src>-<dst> target (starter; supporters) [direct] 12[remote] {result}` | Action; V = `M` Move, `X` Attack, `E` Explore, `R` Research, `C` Create, `U` Upgrade, `V` Recover, `G` Manage |
| `/r /l /t /s` | which one ability a supporter gives (Range, Level, technology, Secondary) |
| `+2e` | Energy boost channelled by that card |
| `\| d:H1P~ a:- d:-` | Combat additions after the attack, defender first, `-` pass |
| `\| R C2C B2P` | Restore phase; `§` Shuffle; `ø` can't move |
| `!` `?` `!!` `??` `!?` `?!` | chess annotations |
| `#M-move` `#M-lead` `#S` `#C` `#T` | game end: Military (can't move / no leader), Singularity, Culture at Twilight / at cap |

The decisive turn of game 1 reads:

```
5. X01-12 (S2M~; S2C'~+1e, S1P~/r) [S1M H1M] 00[C2M/s S2S/r S1S/r] {a 7 : d 4 (a1 a3), A+3; save S1M H1M; S1M@12:1 H1M@12:3}!; E12-12.7 (S1C') [H1M] {N1}; M12-21 (S2P/r) [S1M] {S1M@21:4; 21 Disputed}!!
5... ø #M-move 1-0
```
Attack 12 from 01 with a remote group from 00, win 7:4 against two
Ancients, explore the Space to 21 with the Hero that just fought, move
one Level-1 Ship into the last free slot of B's home. B can't move.

The notation held up: all three referees logged complete games with
it and players wrote their plays in it (0 notation-caused errors).
Gaps to add later: Lab/Factory pile moves (`pile:S4P>Base` was
improvised), setup line (pile orders, home slots), and a turn's
Income.

## 4. Findings

### 4.1 Broken or dominant (fix before the next playtest)

**F1. One Move into the rival's only Star wins (game 1, RG1-5).**
The Warlord moved an S1M into the free slot of B's home: both have
Actor Control, the home is Disputed, B controls no Star, so B has no
Takeoff and no action source and "can not make a move". No Combat,
no defense possible: Hand cards defend only in Combat, Pinning lets a
group finish in the Star, and B's 4 home Structures (C4M +3 Defense
included) gave nothing. Options (players and referee):
- a) Moving into a Star with rival Enabled Actors (or into a rival
  home) starts a Combat, i.e. needs an Attack.
- b) The owner may still Takeoff into / act from a Disputed home
  (at least Attack from it, source = target).
- c) Home Structures break the Control tie in their owner's home.
- d) "Can not make a move" requires no Field Actor and no Hand, not a
  temporary lock-out.
My recommendation: a) plus b). It didn't recur in games 2–3 only
because nobody reached the rival.

**F2. Singularity wins, uncontested, and swallows the Culture path
(games 2 and 3: RG2-6/10, RG3-6/8/9).** Scholar won in round 8 without
leaving home; in game 3 both players had the set by rounds 12–13 and
the first player's earlier Check decided it. Causes:
- Each Lab pile holds Level 4 of all four Classes (the Colony pile
  alone: C4M C4C C4P C4S), and the setup reorder or a Manage pile
  shift (RG3-7) puts the wanted card on top.
- **Four C4x Colonies are both the Culture score and the Singularity
  set**, so the Culture path leads straight into Singularity; the
  round-20 Culture count never mattered.
- Starting home Structures and Ships meet every Prerequisite. Grow
  C2x>C4x costs 2 Culture (5−3) after a 5-Science Research, and C4S's
  +3 Science then pays most of every later Research.
- Hand cards count at the Check (RG3-8: a Level-4 Ship in Hand needs
  no Structure slot), a lone Takeoff is a legal move, and the win is
  immediate: nobody can answer it.
- What slowed it: a hub can't be the hub of its own Upgrade (RG2-6,
  RG3-6; the opposite ruling gives Singularity in rounds 5 and 11),
  and Check before Restore makes a Level-4 Structure used this turn
  count as Level 3 (RG3-9, decided game 3).
Options: check Singularity at the start of the next own turn (the
rival gets one turn to answer, like Twilight); only Field cards
count, or four different Types; one Class per Lab pile, no reorder;
tie Research to the Science Power star. And make the Culture path
something the Singularity set doesn't give for free.

**F3. The Colony engine loop (all 3 games: RG1-1/3/6, RG2-2/4/5,
RG3-1/2).** In one turn: Raise C2x (3 C), use it at once (RG2-2) for
a Research of C4x (5 S) placed on any Factory pile (PR-13 read
literally), then Grow C2x>C4x (2 C). The old C2x returns to the
Factory top and is raised again next turn; the upgraded Structure
comes Ready even when it was Depleted (free Restore). Every player
except the Brute opened with it; Architect had two Level-4 Colonies
by round 3, Turtle and Gambler mirrored it to 10–10 by round 4.
Options: typed Factory piles (a card goes to the pile of its Type);
the old Structure leaves the game or goes under the pile; an
upgraded Structure keeps its state; Grow cost = new Price, not the
difference.

**F4. No interaction (zero rival Combats in 51 turns).**
- Reaching is slow: home to home is 6, every tile starts hidden, a
  Space costs 2 to reveal and shows nothing (RG2-3), a Star 5–7 plus
  Ancients. The Brute needed 7 Explores in 8 rounds and was still 2
  tiles from 21.
- Attacking a rival doesn't pay even when adjacent (game 3, from
  round 8): the defender's Hand refills to 5 each turn and adds
  Energy; the winner's own direct participants are Damaged unless
  saved by the advantage (Backlog I81); Retreat cancels the fight; a
  home C4M adds +3 Defense and +3 M.
- Meanwhile the engines finish by round 8–13 (F2). Combat, Pinning,
  Hidden/Stealth, bluffing never came up against a rival.
Options: start with the Spaces between neighbours revealed; Explore
of a Space cheaper (1) or rewarding (P24 Relic); a reward for
raiding (e.g. capture a Structure, deny a Singularity card); I81 c/d
for damage; an answerable Singularity (F2).

**F5. Home Structure row: overlap plus no exit.** With 4 Structure
slots and overlap (slot k loses its Secondary when k+1 is filled),
a full home row keeps only one Secondary; each new Colony switched
off the previous one's (Architect's C4S lost +3 Science). Nothing
frees a slot in `core` (Dismantle and Recycle are blank), so a full
home row ends home Create for good. Players spent Manage swaps
(RG3-3, 2 operations) to move the best card to the last slot. The
overlap puzzle itself was liked by every player.

### 4.2 Pacing and balance observations

- **Actions per turn 1.3–2.0** (game 1: 1.8 / 2.0, game 2: 1.3 / 1.4
  game 3: 1.5 / 1.9), far below the 5 of GameBalance: confirms Backlog
  I75 a. Each action costs a starter plus usually 2–3 supporters.
- **The 10-card deck is too thin**: a Shuffle every 1–2 turns (game
  2: 7 and 6 Shuffles in 8 rounds); players knew their next Hand and
  deduced the rival's.
- **Free unlimited Takeoff banks the Hand** (I46): unused cards are
  parked instead of discarded at Draw, every turn, by every player;
  it also thins the deck and speeds set collection (F2).
- **Field Units used as direct participants go to Discard**: "one
  Explore cost me two Military Actors" (Brute). Holding the Field and
  using it pull against each other; with Field start `advanced`, a
  Field card is mostly a battery used once.
- **A Structure that fights never depletes** (RG2-7): a home C2M
  (Range 0) joins a remote Attack carried by the group's Range, adds
  +2 M, and stays Ready because it "fought".
- **Ancients are weak**: 6 of 6 Ancient Combats won by the attacker,
  mostly by a wide margin (9:3 twice, 6:3, 7:4); exploring an
  ExtraPrice-3 Star (7)
  cost more than conquering it.
- **Energy is marginal**: income 1/turn, peak 3, the cap 5 was never
  reached; nobody went for the Energy star.
- **Learnability is good**: 0 invalid plays in games 1–2, Haiku
  included; 1 each in game 3 (Raise of a buried Factory card, a
  Depleted Structure's Level for a Prerequisite). The friction was in
  the interpretations below, not in the basic flow.
- **Deck manipulation is strong**: Turtle took off every other card
  to shrink its Discard, so the freshly built S4P had a 2/3 chance to
  be drawn next Shuffle, and it was.
- **What players liked**: the overlap slot puzzle, Star Prices on the
  backs (scouting by deduction: 5 = Defense, so 12 must be Military
  Power), the open Lab → Factory pipeline, choosing an End per card,
  a Recon Colony + free Restore as an engine, the requirement puzzles
  (remote groups, one ability, Energy channelling).

### 4.3 Rule gaps the referees decided

Recommended = the ruling taken, unless I note otherwise.

| Id | Question | Ruling taken | Docs |
|---|---|---|---|
| RG1-1 | Upgrade a Depleted Structure; does it come Ready? | yes, Ready (free Restore, see F3) | Upgrade |
| RG1-2, RG3-4 | Do Ancients get the Defense star bonus? Who picks what the winner saves? | no; the winner | Ancient, Combat |
| RG1-3, RG2-5, RG3-1 | Research onto a Factory pile of another Type? | yes (PR-13 literal); I recommend typed piles | Research, Factory |
| RG1-4 | Do Ancients pin? | yes: a group may stop in an Ancient Star, not pass it | Pinning, Ancient |
| RG1-5 | Move into the rival's only Star → can't move? | yes, as written: broken (F1) | Control, Disputed, Goal |
| RG1-6, RG2-4, RG3-2 | Where does an upgraded Structure's old card go? | top of a Factory pile (Upgrade 7.2): enables the loop (F3) | Upgrade |
| RG1-7 | Can a card that fought and moved in act again this turn? | yes (no per-turn tracking) | Deplete |
| RG1-8 | Remote group: does reaching use a card's one ability? | no, reach is free, one ability still available | Support |
| RG1-9 | Military Power star +1 on an Explore paid in M? | yes, any own action | Star |
| RG1-10 | Research/Create "any Star → hub" from an uncontrolled Star? | no, the source must be controlled | Direction |
| RG2-1 | Is the hub a participant of Research? | no, the hub Star is the destination; not depleted | Research, Hub |
| RG2-2 | Can a Structure created this turn act this turn? | yes, like Takeoff | Create |
| RG2-3 | Explore of a Space reveals nothing | as written; balance note (F4) | Explore, Space |
| RG2-6, RG3-6 | Can a hub be the hub of its own Upgrade? | no (target or participant, never both); decided the pace of both Singularity games | Upgrade, Hub |
| RG2-7, RG3-5 | A Structure fights as a direct attacker (even from a remote group); does it deplete? | it adds its M power and never depletes, as written: a free reusable +2 Attack | Combat, Deplete |
| RG2-8 | More survivors than free target slots: who moves in? | the attacker chooses | Combat |
| RG3-3 | Manage Shift into an occupied slot (swap)? | yes, 2 operations | Manage |
| RG3-7 | Lab pile shift onto an empty pile? Must the hub take part? | yes; no, it's only the direction: any Lab card can be dug out in one turn | Manage, Laboratory |
| RG3-8 | Does a Level-4 Ship in Hand count for Singularity? | yes as written: the 4th Class needs no slot | Singularity |
| RG3-9 | Check before Restore: a Level-4 Structure used this turn shows Level 3 | as written; decided game 3, players ask to state it | Singularity, Turn |

Unclear to players, not yet ruled: how Hand supporters are assigned
to remote groups (G8 is terse); whether Structures channel Energy
and up to which Level; how a Lab-to-Lab pile move is directed; that a
Depleted Level-4 Structure counts as Level 3 at the Check (Check
comes before Restore); when Retreat may be shown (after the Ancient
reveal? from a face-down commitment?); whether Create may place a
Colony in an Ancient Star.

## 5. My playtest rulings (where the docs are silent)

Made before play, in `RULES.md` section 11:

- PR-1 Void tiles are face up, known walls.
- PR-2 Normal Space: Length 1, Price 2 (P24 Normal a), Price on the
  back (G4/S20); all 16 inner tiles Normal.
- PR-3 Routes go Star–Space–Star only, no Space-to-Space links along
  hex edges.
- PR-4 Home Stars 8 Slots (4 Unit + 4 Structure). Other Stars 4
  Slots: Energy 2+2, Military Power 3+1, Science Power 2+2, Defense
  3+1, Shipyard 1+3; Price = Slots + ExtraPrice = 7/6/6/5/7.
- PR-5 Factory and Laboratory are open information.
- PR-6 Income step at the start of own Turn (S21 a needs one).
- PR-7 With Militarization blank (G2), its `+N Defense` stays.
- PR-8 The 4 starting cards (P27 a) are Ships S1M/S1C/S1P/S1S, Level
  1+0 both ends, Primary 1, no Secondary, weak class as on Ships.
- PR-9 Slot k is overlapped when slot k+1 holds a card.
- PR-10 A supporter's Level+Class can be its one ability, for one
  Prerequisite (S42 c).
- PR-11 Boosting doesn't use the card's one ability.
- PR-12 The source group always exists: an action played only from
  Hand still needs Range to its destination.
- PR-13 Research puts the card on a Factory pile of the player's
  choice (S47 e). Turned out to be a lever (F3).
- PR-14 Explore Range is measured to the target tile.
- PR-15 An upgraded Structure comes Ready. Turned out to be a free
  Restore (F3).
- PR-16 Recover costs the Level of the end the card had when damaged;
  not restricted by Origin.
- PR-17 A defender's Damaged cards in the target fight with Defense 0,
  so a lost defense Destroys them (otherwise nothing ever clears a
  wreck from a Slot).
- PR-18 Cap at round 20, then Culture decides as at Twilight.

Also used: Guidance G1–G9 as accepted (setup P27, blank non-core
technologies, Star deck P36 i automatic, validate-then-reveal
Explore, combat sequence P28 + S26, Defense = MilitaryPower ≥ 1,
Academy pile defenders out, Hand Range to one group, combined print
= one ability).

## 6. Questions for you

1. **F1**: which fix for the home dispute: a Move into rival Actors
   needs an Attack, the owner keeps using a Disputed home, home
   Structures break the tie, or a softer "can not make a move"?
2. **F2**: should Singularity be answerable (checked at the start of
   the next own turn) and/or harder (only Field cards, one Class per
   Lab pile, no Lab reorder at setup)? Should four C4x Colonies keep
   counting for both Culture and Singularity? Is Check before Restore
   (RG3-9) intended?
3. **F3**: typed Factory piles? Where does the old card of an
   upgraded Structure go, and does the new one keep the old state?
4. **F4**: how much of the map should start revealed? Is a Star at
   Price 5–7 plus Ancients the scale you want, with hands of ~5 power?
5. **Star Slots** (PR-4): are 4 Slots and these splits close to your
   intent? Home 8 (4+4)?
6. **Starting cards** (PR-8): Ships with two Level-1 ends, or should
   they be something else (e.g. no weak end)?
7. **Wrecks**: what clears a Damaged card from a Slot? I added PR-17
   (it is destroyed when its side loses a defense there).
8. **Takeoff**: keep it free and unlimited, or 1 per Turn / with a
   cost, against Hand banking and deck thinning (I46)?
9. **Income**: confirm the start of Turn as the income step.
10. Should I turn the RG items and F1–F5 into Backlog items (the
    Backlog's "Next step" says only playtest notes become items), and
    add `NOTATION.md` to `docs/` as a meta page?
11. Run a second round of 3 games with F1–F3 patched?

## 7. Game logs

### Game 1: Warlord vs Architect

```
[Event "First duel playtest"]
[Game "1"]
[Seed "101"]
[A "Warlord, home 00"]
[B "Architect, home 21"]
[Stars "01=Def 10=Yard 11=Nrg 12=MilP 20=SciP"]
[Result "1-0"]
[End "#M-move 5..."]

1. C00-00 C2M:4 (S1C) [C2C]; E00-00.3 (H1P/r) [C2M] {N1}!; H1M@00:4 | R C2C C2M
1... C21-21 C2S:2 (S1C) [C2C]; E21-20.3 (S1S/r) [C2S] {N1}; S2C@21:1; S2S@21:2; H1M'@21:4 | R C2C C2S
2. E00-01 (S2P/r+2e; S2M) [C2M] {Def 3+1, a?}; S1P@00:1; S2S@00:2; S1M@00:3 | R C2M §
2... R21-21 C4S>C (S1M'+1e; H1P') [C2S]; U21-21 C2S>C4S (S1P') [C2C H1M']!; E21-20 (S2M'+1e) [S2S C4S] {SciP 2+2, a?×2}; S2P'@21:4 | R C2C C4S §
3. X00-01 (S2C'~+1e; S2M~) [S1M H1M] {a 5 : d 3 (a3), A+2; save S1M H1M; a3 back; S1M@01:1 H1M@01:3}!; E00-01.5 (S1S/r) [C2M S2S] {N1}; S2P@00:2; H1P@00:4 | R C2M §
3... R21-21 C4M>B (S1S; S2M/l, S1M') [C4S] {C4M on the Base pile}!?; C21-21 C2S:3 (H1P) [C2C S2C]; U21-21 C2S>C4M (H1M'/t) [C2C' S2P'] | R C4S C2C §
4. E00-12 (S2M; S2C', S1C') [C2M+1e S2P S1P H1P] {MilP 3+1, a?×2}; S1S@00:2; S2S@00:4 | R C2M §
4... S1C@21:1; S1P'@21:2; S2P'@21:3
5. X01-12 (S2M~; S2C'~+1e, S1P~/r) [S1M H1M] 00[C2M/s S2S/r S1S/r] {a 7 : d 4 (a1 a3), A+3; save S1M H1M; a1 a3 back; S1M@12:1 H1M@12:3}!; E12-12.7 (S1C') [H1M] {N1}; M12-21 (S2P/r) [S1M] {S1M@21:4; 21 Disputed}!! | R C2M §
5... ø #M-move  {21 Disputed, B controls no Star: no legal Takeoff or Action} 1-0
```

### Game 2: Brute vs Scholar

```
[Event "First duel playtest"]
[Game "2"]
[Seed "202"]
[A "Brute (haiku), home 00"]
[B "Scholar (opus), home 21"]
[Stars "01=Yard 10=Nrg 11=Def 12=MilP 20=SciP"]
[Result "0-1"]
[End "#S 8..."]

1. S1P'@00:1; S1M@00:3; S2M@00:4 {three Takeoffs, Energy 1 kept}
1... C21-21 C2S@21:4 (S2C) [C2C] {C2S Raised, Ready at 21:4}; R21-21 C4S>Colony (S2S; S2M', H1P') [C2S] {C4S on top of Factory Colony pile}!; S1P@21:1 | R C2C C2S
2. E00-00.3 (S2S/t; S1S+1e; S2P/r) {00.3 revealed: Normal Space}; C00-00 C2M:4 (S2C+1e; S1C) [C2C] {C2M Ready at 00:4, C2C depleted} | R C2C
2... U21-21 C2S>C4S (H1M'/t) [C2C] {C4S Ready at 21:4, C2S to top of Factory Colony pile (default)}!; R21-21 B4P>Base (S1S; S1M') [C4S, B2P] {B4P on top of Factory Base pile}; S2P@21:2; S1C@21:3 § | R C2C C4S B2P
3. E00-00.4 (H1M; S1C'; S2C/r) [C2M] {00.4 revealed: Normal Space; C2M Depleted}; C00-00 B2M:2 (H1P+1e; S2P) [B2P] {B2M Ready at 00:2; B2P Depleted} | R C2M B2P
3... R21-21 S4M>Hero (S1S; S1M', S2M/l) [C4S, C2C] {S4M on top of Factory Hero pile}; C21-21 S4M (S2S') [B2P, S1P, S2P+2e] {S4M to Discard}!; H1M'@21:1 § | R C2C C4S B2P
4. E00-01 (S1C'+1e; S2C') [C2M S2M S1M] {Star 01 revealed: Shipyard 1+3, Price 7; a? a? a? appear; S2M S1M S1C S2C to Discard}; S1S@00:2; H1P@00:3; S2S@00:4 | R C2M
4... C21-21 B4P@21:2 (S2P+2e; S1P, H1P) [B2P] {B4P Ready at 21:2: P4 on Field}!; S1S@21:2; S2C@21:4 § | R B2P
5. E00-00.7 (S1C/r) [C2M] {00.7 revealed: Normal Space}; E00-00.8 (S2C) [S2S S1S] {00.8 revealed: Normal Space; S2S S1S to Discard}; S2M@00:2; H1M@00:4 | R C2M
5... R21-21 pile:S4P>Base (S2M') {S4P moved to Lab Base pile}; R21-21 S4C>Hero (S2S+1e; S1M/l) [C4S, S1S, S2C] {S4C on top of Factory Hero pile}; S4M@21:4; S1P@21:2 § | R C4S  (conditional Plan A: Grow C2C>C4C with C2C as own hub, dropped by RG2-6)
6. X00-01 (S1M~+1e; S2C'~+1e; S1C'~) [C2M S2M H1M] | d:- a:- {a 9 : d 3, A+6; save C2M S2M H1M; a1 a1 a1 back; S2M@01:1} ; S2P@00:2 | R none
6... C21-21 S4C (S2P+1e; H1P, S1S', S2S') [B2P] {S4C to Discard: all four Level-4 cards exist}!; S2C unused § | R B2P
7. E01-01.5 (S2S/t; S1S+1e; S1M/r) [] {01.5 revealed: Normal Space; S2S S1S S1M to Discard}
7... R21-21 S4S>Hero (S1S; S2M') [C4S, S1P] {S4S on top of Factory Hero pile; Lab Ship pile empty}; S1M S2P H1P unused § | R C4S
8. E01-12 (S1M; S1C'; S2C'; S2S/r) [S2M] 00[H1M/t S2P/r C2M/s] {12 revealed: MilP 3+1, Price 6; a? a? appear; S1M S1C S2C S2S H1M S2P S2M to Discard; C2M Depleted}; S1S@01:1 | R C2M
8... S4C@21:2 {Check: M4 S4M@21:4, C4 S4C@21:2, P4 B4P@21:2 Ready, S4 C4S@21:4 Ready} #S!!
0-1
```

### Game 3: Turtle vs Gambler

```
[Event "Duel playtest 3"]
[Game "3"]
[Seed "303"]
[A "Turtle, home 00"]
[B "Gambler, home 21"]
[Stars "01=MilP 10=SciP 11=Shipyard 12=Energy 20=Def"]
[Result "1-0"]
[End "#S 13."]

1. C00-00 C2M:2 (S1C) [C2C] {C2M@00:2}; S2M@00:4; S1M@00:1 | R C2C
1... S2C'@21:3; C21-21 C2M:1 (S1C) [C2C] {C2M@21:1}; E21-12.7 (H1M) [S2C'] {N1}; S2S@21:2; S1S@21:4 | R C2C
2. H1M'@00:2; C00-00 C2S:3 (S1P') [C2C] {C2S@00:3} | R C2C §
2... R21-21 C4C>f (S2M'; S1M'+1e, H1P') [C2C S1S] {C4C on Colony pile}?!; S1P'@21:1; S2P'@21:4 | R C2C §
3. R00-00 C4M>f (S2S+2e; S1S, H1P') [C2C C2M] {C4M on Colony pile}; U00-00 C2M>C4M (S1P') [C2C H1M'] {C4M@00:2 Ready, C2M to Colony pile}!; S2C@00:3 | R C2C §
3... U21-21 C2M>C4C (H1M') [C2C] {C4C@21:1, C2M to Colony pile}; C21-21 C2M:3 (S1C) [S2P' C2C'] {C2M@21:3}!; E21-20.3 (S2M+1e; H1P/r) [C2M] {N1}; S1S@21:4 | R C2C C2M §
4. G00-00 rot:S2M (S1S)!?; R00-00 C4C>f (H1P') [C2C+2e S2M'] {C4C on Colony pile}; U00-00 C2S>C4C (H1M'; S1C, S2P') [C2C'] {C4C@00:3, C2S to Colony pile} | R C2C §
4... R21-21 C4S>f (S2M'; S1M'+1e) [S2S S1S C2C] {C4S on Hero pile}!; U21-21 C2M>C4S (H1M'; S2C) [S1P' C2C'] {C4S@21:3, C2M to Colony pile}; S2P'@21:3 | R C2C §
5. G00-00 shift:C4M:2>4, shift:C2C:4>2 (S1S+1e) {swap, 2 operations}!?; E00-00.3 (S2S/t; H1P', S2M', S1P/r) {N1} §
5... G21-21 shift:C4S:3>4, shift:C2C:4>3 (S1C; S1P'); S1M@21:1; H1P'@21:2; S2M@21:4 §
6. E00-01 (H1M/t; S1C', S2P/r) [C4M+1e S1M] {MilP 3+1, a?×2}!; S2S@00:2; S1S@00:1 | R C4M §
6... E21-20 (S2S; S1S) [C4S H1P'] {Def 3+1, a3}; X21-20 (H1M~+1e; S2C'~) [S1M S2M] {a 5 : d 3, A+2; save S2M; dmg S1M*; a3 back; S2M@20:3}!; C21-20 C2M:1 (S1P') [S2P' C2C C4S'] {C2M@20:1}!! | R C4S C2C §
7. G00-00 rot:S2C (S1P); X00-01 (H1P/r; S2M~, S1M~, H1M~) [S2C'+1e] {a 6 : d 3 (a1 a2), A+3; save S2C'; a1 a2 back; S2C'@01:1}! §
7... E20-10.5 (S1S/r) [C2M] {N1}; S2C'@20:1; S2S@21:4; S2P'@21:2 | R C2M §
8. C00-01 C2S:1 (S1C; S2P', S1P', S2M/r) [C2C] {C2S@01:1}; H1M'@01:3 | R C2C §
8... E21-10 (H1P'; S1S) [S2S C4S] {SciP 2+2, a?×2}; X20-10 (H1M~+1e; S1C'~, S1P'~+1e) [S2M S2C' C2M] {a 9 : d 3 (a1 a2), A+6; save S2M S2C' C2M; a1 a2 back; S2M@10:1 S2C'@10:2}! | R C4S §
9. R00-00 C4S>f (H1P'; S1M') [C2C S1S S2S+1e] {C4S on Colony pile}; U00-01 C2S>C4S (S1C/r; S1P/r) [C2C' H1M'+1e] {C4S@01:1, C2S to Colony pile}!; S2M@00:4 | R C2C §
9... C21-10 C2P:1 (S1C) [S2P' C2C C4S] {C2P@10:1}; C21-10 C2S:2 (S1P'; S2S/r, H1P/r, H1M'+1e) [C2C' C4S'] {C2S@10:2}! | R C2C C4S §
10. R01-00 C4P>f (S2S; H1P', S1M/r, S2P/l) [C4S S2C' C2C] {C4P on Colony pile}!; H1M'@01:3 | R C2C C4S §
10... R21-21 C4M>f (S1S; S2S/r, H1P') [C2C C4S] 20[C2M/l] {C4M on Colony pile}; S1C@21:2; S1P'@21:3 | R C4S C2C C2M §
11. G00-00 pile:S4M>l, pile:S4C>l (S1C'; S2C') [B2P] {S4M S4C to Lab Colony pile}!?; G00-00 rest:B2P (S1P); R01-00 S4P>f (S1S; H1P') [C4S B2P] {S4P on Factory Colony pile}! | R B2P C4S §
11... R21-21 C4P>f (S1S; H1P') [C2C C4S B2P] {C4P on Hero pile}; U21-10 C2S>C4M (H1M'; S2P/r) [C2C' C4S' S1C S1P'] {C4M@10:2, C2S to Colony pile}!; E20-11.8 (S2S/r) [C2M] {N1} | R C4S C2C C2M §
12. C00-00 S4P (S2P+1e; S2S') [B2P+2e] {S4P to Discard}!; S1M@00:1; S2C'@00:2; S1S@01:1 | R B2P §
12... U21-10 C2P>C4P (H1M'+1e; S2S/r+1e) [C2C C4S] {C4P@10:1, C2P to Colony pile}?! (C4S Depleted at the Check: Singularity missed by one Level); V21-21 S1M* (H1P; S2P) {S1M enabled}; S1C'@21:3 | R C4S C2C B2P §
13. S1P@00:3 {Check: C4M@00 C4C@00 C4S@01 Ready + S4P in Hand = M4 C4 S4 P4} #S!! 1-0
```
