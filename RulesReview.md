---
date: 2026-10-10
updated: 2026-10-15
status: WIP
scope: meta
---

# Rules review

Review of the notes in `docs/` (the source of truth), aimed at a **minimal playable duel**: 2 players, no Aliens, playable with an AI from the notes alone.

Answer proposals by number, e.g. "P7 yes", "P10 yes".

## Issues

### Game end and scope

- [ ] **I5. Setup incomplete:** [[StartDraw]] has 4 Reserve cards TBD and doesn't name cards from [[Deck]].

### Contradictions

- [ ] **I8. Tech tree.** The three tables in [[Technology]] disagree with each other and with technology notes ([[Explore]] L1 vs L2, [[PlusDraw]] in three classes, [[Trade]] and [[Export]] both Culture L2, [[Recover]]/[[Upgrade]] in two classes). [[ForceDiscard]] and [[Express]] also have no level. → P17

### Missing content

- [ ] **I19. Deck review.** [[Deck]] is imported from the legacy code. Unclear technologies: `improve`, `allacad`, `×3` for [[PlusLoad]] and [[PlusRange]]. Deck technologies don't match [[Technology]] tables. → P17
- [ ] **I21. Stub notes** (`status: stub`): [[Wreckage]], [[DefSys]], [[HyperPass]], [[MinusRequirement]], [[Sell]], [[PlusFactory]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]], [[Navigation]], [[PlusRange]], [[Stealth]].
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
- [ ] **P14. Small clarifications:**
	- [[Factory]]/[[Laboratory]]: only the top card of each pile is available.
	- [[Factory]] is the pool of cards to (re)build, which is why [[Destroyed]] cards go there.
- [ ] **P17. Tech tree baseline.** Replace the conflicting technology catalogs with one canonical table, then ensure every core technology is present in the deck.
- [ ] **P18. Depleted structures:** "A [[Depleted]] structure still participates with its weak end: its level and [[PrimaryAbility]], no [[SecondaryAbility]]." There is no free [[Restore]].
- [ ] **P21. Images.** Update `card.png` after the canonical rules and card data are settled. Annotate `card.png` with both ends, ExtraCost, Prerequisites and the technology name.

### Ideas

- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run AI-vs-AI duels to find holes in the rules.
