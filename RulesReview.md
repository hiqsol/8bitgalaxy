---
date: 2026-10-10
updated: 2026-10-14
status: open
---

# Rules review

Review of the notes in `docs/` (the source of truth), aimed at a **minimal playable duel**: 2 players, no Aliens, playable with an AI from the notes alone.

Answer proposals by number, e.g. "P3 A", "P5 yes".

## Issues

### Game end and scope

- [ ] **I5. Setup missing:** board layout, initial board. [[StartDraw]] is only a draft. Answer: later. → P12.3
- [ ] **I6. Turn structure.** "Can't do the same action twice" ([[Turn]]) is unclear. Answer: will be simplified, explain later.

### Contradictions

- [ ] **I8. Tech tree.** The three tables in [[Technology]] disagree with each other and with tech notes ([[Explore]] L1 vs L2, [[PlusAction]] Military 6 vs Science 5, [[PlusDraw]] in three classes, [[Trade]] and [[Export]] both Culture L2, [[Recover]]/[[Upgrade]] in two classes). Answer: later.
- [ ] **I11. Attack requirement.** [[Attack]] needs more Military power than the defender, but [[Combat]] decides the winner after both sides commit. → P6
- [ ] **I14. Factory holds both buildable and [[Destroyed]] cards.** Not a real contradiction: Factory is the pool of cards to (re)build. → P14
- [ ] **I15. Combat vs Deplete.** [[PerformAction]] depletes all participants, [[Combat]] only supporters. → P5
- [ ] **I16. Boost cap.** [[Combat]] says resources up to [[Defense]], [[Boost]] says up to [[Capacity]]. → P7
- [ ] **I17. Manage vs Transport tables.** [[Manage]] says its table is the same as [[Transport]], but the Hero rows differ. → P14
- [ ] **I18. Cards can't die.** Nothing in the duel destroys a card, so "has no leader" ([[Goal]]) never happens. → P8

### Missing content

- [ ] **I19. No card data.** No note lists actual cards (levels, class, abilities). → P12.1
- [ ] **I20. No cost formula.** [[Property]] says ExtraCost implies Cost and Size, but there's no formula. → P12.2
- [ ] **I21. Stub notes** (`status: stub`): [[Reserve]], [[Wreckage]], [[DefSys]], [[HyperPass]], [[Cost]], [[ExtraCost]], [[MinusRequirement]], [[Sell]], [[PlusFactory]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]], [[Navigation]], [[PlusRange]], [[Stealth]], [[Objective]]. Plus an empty `Untitled/` folder.
- [ ] **I22. Broken links.** Fixed: Actions, NewFactory, PlusCapacity, Leader. Remaining: Mobilize, PlusHand, Void. Enhance/Fix/Grow/Heal are now flavour names (aliases).
- [ ] **I23. [[ControlledBy]] has a TODO** for structures. → P10

## Proposals

- [ ] **P2. Hidden only in combat.** For the duel, allow Hidden only for supporters committed from Hand during [[Combat]] (bluffing). They are revealed when combat resolves. [[Stealth]] moves come later.
- [ ] **P4. Transport and Takeoff don't deplete moving cards.** They are kinds of Move. Otherwise a colony ship vanishes after delivering.
- [ ] **P5. Combat is an exception to Deplete.** Direct participants of both sides stay (saved) or become [[Damaged]], and supporters deplete. Otherwise a winning defender's ships leave the star they defended.
- [ ] **P6. Attack requirement.** "At least one [[Military]] direct participant, and the target [[Star]] within [[Range]] (the source star is allowed)." [[Combat]] decides the winner.
- [ ] **P7. Combat strength, stated once:**
	- Each card adds its [[AttackPower]]. A non-Military defender adds its [[Defense]] (1).
	- Boost: [[Materials]] up to [[Capacity]] (the general [[Boost]] rule).
	- A tie goes to the defender.
	- Advantage = winner total − loser total. The winner saves direct participants with total level **≤** the advantage (not "less than").
- [ ] **P8. How cards die.** "A Disabled card that becomes Damaged again is Destroyed." Destroyed cards go to the owner's [[Factory]].
- [ ] **P9. Defeat condition** in [[Goal]]:
	- "Has no leader" = at the end of their own turn, no Enabled [[Hero]] on Field, Hand, Reserve or Discard.
	- "Can not make a move" = at the start of their turn, no action is possible.
	- Optional faster win: losing both [[BuildingFacility|building facilities]].
- [ ] **P10. Structure control** in [[ControlledBy]]: "the faction with the highest [[Control]] in the star. If equal, each faction controls its own structures." Drop the "consensus" clause for the duel.
- [ ] **P11. Core set for the minimal duel:**
	- Actions: [[Draw]], [[Takeoff]], [[Move]], [[Transport]] (cards only), [[Manage]] (rotate and shift), [[Research]], [[Attack]]/[[Combat]], [[Create]], [[Upgrade]], [[Recover]].
	- Technologies: [[Academy]], [[Shipyard]], [[Retreat]], [[PlusDraw]], [[PlusAction]], [[PlusRange]].
	- Board: all [[Space]] revealed and Normal.
	- Out: [[Materials]] (Boost, Extract, Trade, Export, Smuggle, Sell, Dismantle, Recycle), [[Money]], [[Hyperstructure]], [[Objective]], [[Event]], [[Tool]], [[Stealth]], Explore/Recon, Aliens.
	- Combat bluffing stays.
- [ ] **P12. What's still missing before a first game:**
	1. Card data. Default rule: [[PrimaryAbility]] = [[Power]] of the card's [[Class]] equal to its current [[Level]]. [[SecondaryAbility]] = one [[Technology]] or none. An actor is then just: Type, and for each end Class, level and technology.
	2. Cost = strong level + [[ExtraCost]].
	3. Duel map: 2 home stars and 3 neutral stars in a line or a ring, every Space length 1.
	4. First player has 1 action on their first turn.
	5. [[Reserve]]: "a face-down pile in [[Home]]. Cards are [[Draw]]n from its top."
- [ ] **P14. Small clarifications:**
	- [[Factory]]/[[Laboratory]]: only the top card of each pile is available.
	- [[Factory]] is the pool of cards to (re)build, which is why [[Destroyed]] cards go there.
	- [[Research]] [[Prerequisites]] are provided by the action's participants.
	- [[Takeoff]]: the card taken off is the [[Actor]]. Takeoff has no cost besides the action.
	- [[Hand]] limit: Draw can't take the hand above the limit.
	- Pick one Hero row for the [[Manage]] and [[Transport]] tables.

### Ideas

- [ ] **Actors are the deck, structures are the engine.** Actors cycle through Discard, structures stay and rotate. Say this in [[DeckBuilding]] or [[index]].
- [ ] **Raids vs occupation.** Attacks don't take territory, you Move in afterwards. State it in [[Attack]].
- [ ] **Restore economy.** Only [[Manage]] restores structures. Watch in playtests whether the game slows down. Fallback: restore one structure for free at the start of your turn.
- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run AI-vs-AI duels to find holes in the rules.
