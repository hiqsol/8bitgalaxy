# 8-bit Galaxy: first duel playtest report

3 AI-vs-AI duels on the `core` rules, 2026-10-22/23. The game records,
rewritten in the notation of [docs/Notation.md](docs/Notation.md), are
in [games/](games/README.md). The raw files:
`/tmp/claude-1001/-home-sol-Sync-8bitgalaxy/0dddadee-ec87-45f3-983e-11db80e35d23/scratchpad/playtest/`
(`RULES.md` digest, `NOTATION.md`, `gameN/log.8bgn`,
`gameN/rulings.md`,
`gameN/report.md` where written).

## 1. Results

| # | A, home S00, moves first | B, home S21 | Result | End | Turns | Rival Combats |
|---|---|---|---|---|---|---|
| [1](games/game1.md) | Warlord (Opus) | Architect (Opus) | **1-0** by Military | B can not make a move: S21 Disputed | 10 | 0 |
| [2](games/game2.md) | Brute (Haiku) | Scholar (Opus) | **0-1** by Singularity | Takeoff S4c | 16 | 0 |
| [3](games/game3.md) | Turtle (Sonnet) | Gambler (Sonnet) | **1-0** by Singularity | S4p held in Hand | 25 | 0 |

**No game had a single Combat between the rivals**: all 6 Combats
were against Ancients, all won by the attacker, and 1 card was Damaged
in 51 Turns. Two of three games ended by Singularity; in game 3 the
loser would have reached it at its next Turn (it missed by one
Depleted Colony). The cap of 40 Turns was never reached.

### Games in brief

**Game 1, Warlord 1-0 Architect (Turn 10, B can not make a move).**
- Both opened with a home Colony: C2m (Recon and 2m) for A, C2s
  (Survey) for B.
- B ran Research `C4*` and Grow `C2*=>C4*` twice and had 10 Culture
  points by Turn 6, but its Actors all depleted while building.
- A cleared the Ancients at S01 and S12 (the Military Star next to
  S21), then in Turn 9: Attack S12, Explore S12o7 with the Hero that
  had just fought, Move one S1m into S21u4, the last free Slot of S21.
  S21 became Disputed, B controlled no Star and "could not make a
  move".

**Game 2, Brute 0-1 Scholar (Turn 16, Singularity).**
- Scholar never left home: Create C2s and Research C4s in Turn 2, Grow
  C2s=>C4s for 2c in Turn 4, then Research and Create S4m, B4p, S4c.
  `*4m`, `*4p`, `*4s` sat on the Field from Turn 10; S4c was drawn and
  taken off in Turn 16: Singularity.
- Brute explored 7 tiles, beat 3 Ancients 9:3 at the Shipyard Star
  S01, and was still 2 hidden tiles from S21 at the end.
- Under the opposite ruling of RG2-6 (a hub may upgrade itself)
  Scholar wins in Turn 10.

**Game 3, Turtle 1-0 Gambler (Turn 25, Singularity).**
- A mirrored Colony race: 10–10 by Turn 8, Gambler ahead 20–14 at the
  end after expanding to S20 and S10 (Explore, Attack and Create in
  one Turn, twice).
- Gambler sat next to Turtle's home from Turn 16 but never attacked:
  "a home C4m gives +3d and +3m, raiding is unrealistic".
- Both got four `C4*` Colonies (= Culture points **and** the
  Singularity set). Gambler had all four on the Field in Turn 24...
  but had used C4s for Range that Turn: C3s at the Check (Check comes
  before Restore).
- Turtle dug S4p out of its Laboratory with a Manage pile shift,
  created it into a deliberately tiny Discard, drew it, and won in
  Turn 25 with a single Takeoff: C4m, C4c, C4s Ready and S4p in Hand.

### Personas

- **Warlord**: fully in character, planned the home dispute from
  Turn 3. **Architect**: the engine yes, the "keep Hand for defense"
  no; it trusted the Ancients at S12 to block A for more than one
  Turn.
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
  PR-1..18 (section 5). Referees recorded every further gap as
  `RG<game>-<n>` (section 4.4). The rules of that day are summed up
  in [games/README.md](games/README.md#rules-of-that-day).
- Twilight needs all 16 Laboratory cards researched, so a **cap of 40
  Turns** (PR-18) ended the game as at Twilight, by Culture points.

## 3. Notation

The referees logged the games in 8BGN, chess algebraic notation with
PGN tags: all three logged complete games and players wrote their
plays in it, 0 notation-caused errors. [games/](games/README.md)
holds them rewritten in [docs/Notation.md](docs/Notation.md), which
also covers the 8BGN gaps: pile moves `S4p@Lab1 -> Lab3`, the setup
line `Setup A:` and a Turn's Energy `9. A, Energy 1`.

The decisive Turn of game 1:

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
```

Attack S12 from S01 with a remote group from S00, win 7:4 against two
Ancients, explore the Space to S21 with the Hero that just fought,
move one Level-1 Ship into the last free Slot of B's home. B can not
make a move.

## 4. Findings

### 4.1 Open

- **A Field Unit is a garrison or a battery, not both** (game 2): a
  Unit on the Field gives Control, defends and pins, but when it joins
  any action other than Move or Combat it goes to Discard (Deplete
  1.1). In Turn 7 the Brute paid the Explore of S01 with S2m and S1m,
  parked at S00 for the coming Attack: "one Explore cost me two
  Military Actors". It took off new ones in Turn 9 and attacked in
  Turn 11. In Turn 15 an Explore from S01 used S2m, A's only card
  there, and left S01 empty: today an empty Star is nobody's (Control
  note 2), A would lose it and couldn't take off there.

### 4.2 Worked well

- **Learnability is good**: 0 invalid plays in games 1–2, Haiku
  included; 1 each in game 3 (a Create of a buried Factory card, a
  Depleted Structure's Level for a Prerequisite). The friction was in
  the interpretations, not in the basic flow.
- **What players liked**: the overlap Slot puzzle, Star Prices on the
  backs (scouting by deduction: 5 = Defense, so S12 must be Military;
  dropped since), the open Laboratory to Factory pipeline, choosing an
  End per card, a Recon Colony with a free Restore as an engine, the
  requirement puzzles (remote groups, one Ability, Energy
  channelling).

### 4.3 Fixed or in Backlog

- **F1. One Move into the rival's only Star wins** (game 1, RG1-5):
  fixed, a Disputed Star stays active, the owner takes off and acts
  there (ActiveFor 3, Goal note 7), and Intercept answers a Move in;
  S61 tests an Attack instead.
- **F2. Singularity wins uncontested and swallows the Culture path**
  (RG2-6/10, RG3-6/8/9): fixed, it triggers Twilight, the rival gets
  one Turn (Goal 5, Twilight 3), it takes the four Level 8 crowns
  (Deck 7), Culture is Galactic Diaspora; the pile order stays a
  subgame (Settled 24), S58 c, S63 b.
- **F3. The Colony engine loop** (RG1-1/3/6, RG2-2/4/5, RG3-1/2):
  fixed, Grow goes one Level up and lands Depleted on the weak End of
  a 4/3, no free Restore (Upgrade 5.4, note 2); typed Factory piles
  rejected (Settled 24); the old card still goes back to a Factory
  pile (Upgrade 7.2).
- **F4. No interaction, zero rival Combats in 51 Turns**: Stars are
  open tiles (Wild note 1), a taken Star captures the rival Structures
  (ControlledBy 3), Singularity is far and answerable (F2); damage in
  I81, a reward for a Space in P24.
- **F5. Home Structure row, overlap and no exit**: Recycle frees a
  Slot; Manage swap in S62, weak End Secondary in P66; the overlap
  stays, every player liked it.
- **Actions per Turn 1.3–2.0**, far below 5: I75 a.
- **The 10-card deck too thin**, a Shuffle every 1–2 Turns: Reserve of
  18 with 8 Tools (StartDraw 1).
- **Free unlimited Takeoff banks the Hand**, Turtle shrank its Discard
  to draw S4p: I46.
- **A Structure that fights never depletes** (RG2-7, RG3-5): S53.
- **Ancients are weak**, 6 of 6 Combats won by the attacker: S60;
  Star Prices dropped, Ancients come by the World's Price (Ancient 3).
- **Energy is marginal**, the cap 5 never reached: S64, P36 b.

### 4.4 Rule gaps the referees decided

All are stated in the rules now or open in the Backlog.

| Id | Ruling taken | Now |
|---|---|---|
| RG1-1 | an upgraded Depleted Structure comes Ready | Upgrade note 2 |
| RG1-2, RG3-4 | Ancients get no Star bonus; the winner picks whom to save | Ancient 4, Combat 9.1 |
| RG1-3, RG2-5, RG3-1 | Research onto any Factory pile | Settled 24, S47 e |
| RG1-4 | Ancients pin | obsolete: Ancients come only in an Attack, Ancient 3 |
| RG1-5 | a Move into the rival's only Star: it can not make a move | F1 |
| RG1-6, RG2-4, RG3-2 | the old card of an Upgrade goes on top of a Factory pile | Upgrade 7.2 |
| RG1-7, RG2-2 | a card that fought, a Structure just created, acts again | nothing tracks cards per Turn: Deplete note 1, Takeoff 3 |
| RG1-8 | reaching uses no one Ability | Support 1.2, S65 |
| RG1-9 | a Star's power bonus counts for any own action | P36 a |
| RG1-10 | the source must be own | PerformAction 1.3.1 |
| RG2-1 | the hub of Research is the destination, not a participant | Research 3, Hub 3 |
| RG2-3 | an Explored Space reveals nothing | I49, P24 |
| RG2-6, RG3-6 | a hub can't be the hub of its own Upgrade | Upgrade 5.2 |
| RG2-7, RG3-5 | a fighting Structure never depletes | S53 |
| RG2-8 | the attacker picks the survivors that move in | Combat 9.3, Slot 6 |
| RG3-3 | a Manage swap is 2 operations | S62 |
| RG3-7 | a Laboratory pile shift needs no hub card | Hub 3, Laboratory 4, S63 |
| RG3-8 | a Level 4 Ship in Hand counts for Singularity | Singularity note 3 |
| RG3-9 | Check before Restore | Singularity note 4 |

Unclear to players, settled since: Hand supporters join one group
(PerformAction 4.3); a Structure channels Energy up to its Capacity
(Boost 3); a Laboratory pile move is directed to a Research hub (Hub
3); a Depleted Level 4 Structure at the Check (Singularity note 4); a
Colony into an Ancient Star is obsolete; Retreat works in any Combat,
the Ancients come face up, so the attacker retreats in time (Ancient
3, Retreat 2).

## 5. My playtest rulings

Made before play where the docs were silent, in `RULES.md` section 11:

- PR-1 Voids face up: Duel 6 places them.
- PR-2 a Normal Space has Length 1 and Price 2: Length in Duel 6,
  Price in P24.
- PR-3 routes go Star–Space–Star only: S71.
- PR-4 home Stars 8 Slots (4 Unit + 4 Structure), others 4: home
  Stars and S11 have 5+5, S10 and S12 5 Unit + 3 Structure, S01 and
  S20 3 Unit + 5 Structure (Duel 4).
- PR-5 Factory and Laboratory open: S47 a.
- PR-6 Energy income at the start of own Turn: the Homeworld pays
  +1e when it joins a Science action, Receive is the action for it
  (Duel 7, Receive).
- PR-7 Militarization's `+N Defense` kept: Militarization is defined,
  the values in I75 f.
- PR-8 starting Ships 1/1: one-ended Ships 1/0 (Deck 8).
- PR-9 slot k is overlapped when slot k+1 holds a card: Slot 5.
- PR-10 a supporter's Level and Class as its one Ability for a
  Prerequisite: S42 c.
- PR-11 Boosting doesn't use the one Ability: S65.
- PR-12 an action from Hand still needs Range from its source:
  PerformAction 4.2.
- PR-13 Research onto any Factory pile: Settled 24, S47 e.
- PR-14 Explore Range to the target tile: Explore 5.
- PR-15 an upgraded Structure comes Ready: Upgrade note 2.
- PR-16 Recover costs the Level of the damaged End: Recover 5, S41.
- PR-17 a defender's Damaged cards fight with Defense 0 and are
  Destroyed: Damaged 7, with Defense 1.
- PR-18 cap at 40 Turns: playtest only.

Also used: Guidance G1–G9 as then drafted.

## 6. Questions for you

Open:

- **Q11.** Run a second round of 3 games on the current rules?

Answered: Q1–Q3 by F1–F3; Q4, Stars open and Spaces hidden (Space 4);
Q5 by PR-4; Q6 by PR-8; Q7 by PR-17; Q8, Takeoff stays free, I46
watches it; Q9 by PR-6; Q10, Notation is in `docs/`, the Backlog cites
RG, PR and F.
