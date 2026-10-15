---
date: 2026-10-10
updated: 2026-10-15
status: WIP
scope: meta
---

# Rules review

Review of the notes in `docs/` (the source of truth), aimed at a **minimal playable duel**: 2 players, no Aliens, playable with an AI from the notes alone.

Answer proposals by number, e.g. "P12.1 A", "P10 yes".

## Issues

### Game end and scope

- [ ] **I5. Setup missing:** board layout and initial board. [[StartDraw]] is incomplete. → P12.3

### Contradictions

- [ ] **I8. Tech tree.** The three tables in [[Technology]] disagree with each other and with technology notes ([[Explore]] L1 vs L2, [[PlusDraw]] in three classes, [[Trade]] and [[Export]] both Culture L2, [[Recover]]/[[Upgrade]] in two classes). [[ForceDiscard]] and [[Express]] also have no level. → P17

### Missing content

- [ ] **I19. No card data.** No note lists actual cards (levels, class, abilities). → P12.1 and P15.
- [ ] **I20. No cost formula.** [[Property]] says ExtraCost implies Cost and Size, but there is no formula. → P12.2.
- [ ] **I21. Stub notes** (`status: stub`): [[Wreckage]], [[DefSys]], [[HyperPass]], [[Cost]], [[ExtraCost]], [[MinusRequirement]], [[Sell]], [[PlusFactory]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]], [[Navigation]], [[PlusRange]], [[Stealth]].
- [ ] **I23. [[ControlledBy]] has a TODO** for structures. → P10

### Turn

- [ ] **I41. Who controls a star** is core: it decides where you can [[Takeoff]] and which stars can be an action source. → P10

### Extensions

- [ ] **I43. Objectives details.** [[Objective]] (`objectives`): the list of objectives, the number of victory points to win, and whether a public objective gives more than 1 point.
- [ ] **I44. Politics details.** [[StrategyCard]]: the list of roles. [[PromissoryNote]]: what each side gets and whether the card returns to its owner.
- [ ] **I45. Derelict details.** [[Derelict]] (`aliens`): where they come from (setup, [[Event]]s) and the recruit cost.
- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak cards and cycle only strong ones. Free [[Slot]]s limit it. To be worked out in [[GameBalance]].

## Proposals

- [ ] **P2. Hidden only in combat.** For the duel, allow Hidden only for supporters committed from Hand during [[Combat]] (bluffing). They are revealed when combat resolves. [[Stealth]] moves come later.
- [ ] **P7. Combat strength, stated once:**
	- Each card adds its [[AttackPower]]. A non-Military defender adds its [[Defense]] (1).
	- A tie goes to the defender.
	- Advantage = winner total − loser total. The winner saves direct participants with total level **≤** the advantage (not "less than").
- [ ] **P9. Defeat condition** in [[Goal]]:
	- "Has no leader" = at the end of their own turn, no Enabled [[Hero]] on Field, Hand, Reserve or Discard.
	- "Can not make a move" = at the start of their turn, no action is possible.
	- Optional faster win: losing both [[BuildingFacility|building facilities]].
- [ ] **P10. Structure control** in [[ControlledBy]]: "the faction with the highest [[Control]] in the star. If equal, each faction controls its own structures." Drop the "consensus" clause for the duel.
- [ ] **P11. Core set for the minimal duel:**
	- Actions: [[Move]], [[Transport]] (cards only), [[Manage]] (rotate and shift), [[Research]], [[Attack]]/[[Combat]], [[Create]], [[Upgrade]], [[Recover]].
	- Technologies: [[Academy]], [[Shipyard]], [[Retreat]], [[PlusDraw]], [[PlusRange]].
	- Board: all [[Space]] revealed and Normal.
	- Out: [[Materials]] (Boost, Extract, Trade, Export, Smuggle, Sell, Dismantle, Recycle), [[Money]], [[Hyperstructure]], [[Objective]], [[Event]], [[Tool]], [[Stealth]], Explore/Recon, Aliens.
	- Combat bluffing stays.
- [ ] **P12. What's still missing before a first game:**
	1. Card data. Default rule: [[PrimaryAbility]] = [[Power]] of the card's [[Class]] equal to its current [[Level]]. [[SecondaryAbility]] = one [[Technology]] or none. An actor is then just: Type, and for each end Class, level and technology.
	2. Cost = strong level + [[ExtraCost]].
	3. Duel map: 2 home stars and 3 neutral stars in a line or a ring, every Space length 1.
- [ ] **P14. Small clarifications:**
	- [[Factory]]/[[Laboratory]]: only the top card of each pile is available.
	- [[Factory]] is the pool of cards to (re)build, which is why [[Destroyed]] cards go there.
- [ ] **P15. Put the deck into the notes.** Add a `docs/Cards/Deck.md` table with one row per end: type, level, class, ExtraCost, Primary, Secondary, technology and prerequisites.
- [ ] **P16. One ability format.** Decide whether [[PrimaryAbility]] and [[SecondaryAbility]] provide power, technology or both, and document one representation.
- [ ] **P17. Tech tree baseline.** Replace the conflicting technology catalogs with one canonical table, then ensure every core technology is present in the deck.
- [ ] **P18. Depleted structures, after P16:** "A [[Depleted]] structure still participates with its weak end: its level and [[PrimaryAbility]], no [[SecondaryAbility]]." There is no free [[Restore]].
- [ ] **P21. Images.** Update `game.png` and `card.png` after the canonical rules and card data are settled. Annotate `card.png` with both ends, ExtraCost, Prerequisites and the technology name.

### Ideas

- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run AI-vs-AI duels to find holes in the rules.
