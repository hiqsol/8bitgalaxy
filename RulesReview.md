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

- [x] **I1. No win condition.** Duel: defeat the rival. Game goal is optional. Faction lose conditions are in [[Goal]]. → follow-up in P8, P9
- [x] **I2. Player count and variants.** The game supports 1+ players and options. Focus now: duel without Aliens.
- [x] **I3. Scope of first version.** Minimal playable rules to play with AI. → P11
- [x] **I4. Aliens unclear** (FutureEvents → CurrentEvents, who resolves). Out of scope now. [[AlienSpawn]] is mandatory when Aliens are present.
- [ ] **I5. Setup missing:** board layout, initial board. [[StartDraw]] is only a draft. Answer: later. → P12.3
- [ ] **I6. Turn structure.** "Can't do the same action twice" ([[Turn]]) is unclear. Answer: will be simplified, explain later.

### Contradictions

- [x] **I7. Class vs origin names and colours.** Classes Military / Culture / Production / Science (red / green / yellow / blue), origins Social / Industrial. Applied.
- [ ] **I8. Tech tree.** The three tables in [[Technology]] disagree with each other and with tech notes ([[Explore]] L1 vs L2, [[PlusAction]] Military 6 vs Science 5, [[PlusDraw]] in three classes, [[Trade]] and [[Export]] both Culture L2, [[Repair]]/[[Upgrade]] in two classes). Answer: later.
- [x] **I9. Depletion.** Only Move doesn't deplete actors. Applied in [[Deplete]], [[Move]], [[DeckBuilding]]. → follow-ups P4, P5
- [x] **I10. Card anatomy.** Card has front/back side and two ends. Actors have a class per end, structures have strong/weak ends. Overlap via pockets. Applied as P1, P3, P16.
- [ ] **I11. Attack requirement.** [[Attack]] needs more Military power than the defender, but [[Combat]] decides the winner after both sides commit. → P6
- [x] **I12. "Reserve" double meaning.** [[Transport]] cargo is now "cards, [[Materials]]". [[Reserve]] means only the draw pile.
- [x] **I13. Type lists.** [[Hyperstructure]] and [[Objective]] added to [[Type]] and [[Structure]]. Event and Objective marked "off field".
- [ ] **I14. Factory holds both buildable and [[Destroyed]] cards.** Not a real contradiction: Factory is the pool of cards to (re)build. → P14
- [ ] **I15. Combat vs Deplete.** [[PerformAction]] depletes all participants, [[Combat]] only supporters. → P5
- [ ] **I16. Boost cap.** [[Combat]] says resources up to [[Defense]], [[Boost]] says up to [[Capacity]]. → P7
- [ ] **I17. Manage vs Transport tables.** [[Manage]] says its table is the same as [[Transport]], but the Hero rows differ. → P14
- [ ] **I18. Cards can't die.** Nothing in the duel destroys a card, so "has no leader" ([[Goal]]) never happens. → P8

### Missing content

- [ ] **I19. No card data.** No note lists actual cards (levels, class, abilities). → P12.1
- [ ] **I20. No cost formula.** [[Property]] says ExtraCost implies Cost and Size, but there's no formula. → P12.2
- [ ] **I21. Stub notes** (`status: stub`): [[Reserve]], [[Wreckage]], [[DefSys]], [[HyperPass]], [[Cost]], [[ExtraCost]], [[MinusRequirement]], [[Sell]], [[PlusFactory]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]], [[Navigation]], [[PlusRange]], [[Stealth]], [[Objective]]. Plus an empty `Untitled/` folder.
- [ ] **I22. Broken links.** Fixed: Actions, NewFactory, PlusCapacity, Leader. Remaining: Mobilize, PlusHand, Void. Enhance/Fix/Grow/Heal now resolve via `aliases` (→ P13).
- [ ] **I23. [[ControlledBy]] has a TODO** for structures. → P10

## Proposals

### Applied

- [x] **P1. Card anatomy words.** New notes [[Side]], [[End]], [[Ready]], [[Slot]].
	- **Side**: front / back, verb **flip**. Front up = [[Enabled]], back up = [[Disabled]] or [[Hidden]].
	- **End**: verb **rotate**. It means different things by card type:
		- [[Actor]]s: each end can have its own [[Class]], so the card can be used either way.
		- [[Structure]]s: strong end up = [[Ready]], weak end up = [[Depleted]].
		- Back side: disabled end / hidden end. This tells Disabled and Hidden apart physically (partly answers P2).
	- **Overlap** (your new mechanic) is kept. IPS slots are **pockets** ordered by height. A card placed one [[Slot]] higher than another card loses its [[SecondaryAbility]].
	- [[Level]]'s current-level rule is back to the original text.
	- Updated: [[Level]], [[SecondaryAbility]], [[Class]], [[IPS]], [[Disabled]], [[Hidden]], [[Enabled]], [[Depleted]], [[Restore]], [[Manage]] (Alter → Rotate, also switches an actor's class), [[Repair]], [[Faction]], [[Property]].
	- Avoided "orientation": it already means vertical [[Unit]]s vs horizontal [[Structure]]s.
- [x] **P3. Dual-class actors.** Each end of an actor may (and usually does) have its own [[Class]], [[Level]] and abilities.
	- On the field, cards sit in a [[Slot]], so only the end that is up is visible. Current level = the visible one, same as structures. [[OuterSpace]] is the exception, but there cards can only move, so their end doesn't matter.
	- The owner picks the end on [[Takeoff]] for free. After that, only [[Manage]] rotates the card. A supporter from [[Hand]] can be used with either end.
	- Updated: [[End]], [[Level]], [[Class]], [[Takeoff]], [[Support]].
- [x] **P16. Overlap.** The higher card loses its [[SecondaryAbility]]. Slots are shared by all players. [[Unit]] and [[Structure]] slots are separate rows (unit slots are thinner), and cards overlap only within their row. You fixed Shift in [[Manage]] yourself. Updated: [[Slot]].
- [x] **P15. Frontmatter** on all notes:
	```yaml
	---
	status: stub | draft | stable   # stub = empty or unfinished
	scope: core | advanced | aliens # core = minimal duel (P11)
	aliases: [Fix, Heal]            # optional
	---
	```
	- Now: 103 core, 35 advanced, 7 aliens. 16 stubs, everything else draft. Nothing is `stable` yet: mark notes stable as you approve them.
	- `scope` follows P11, so if P11 changes, the scopes change too.
	- Aliases added: [[Repair]] (Fix, Heal), [[Upgrade]] (Enhance, Grow), [[Size]] (Weight), [[PlusDraw]] (Draw More), [[IPS]], [[Space]].
	- `uwiki` isn't installed on this machine, so I couldn't check that it handles frontmatter and aliases.

### Open

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
	- Actions: [[Draw]], [[Takeoff]], [[Move]], [[Transport]] (cards only), [[Manage]] (rotate and shift), [[Research]], [[Attack]]/[[Combat]], [[Build]], [[Upgrade]], [[Repair]].
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
- [ ] **P13. One name per action.** Use only Build/Upgrade/Repair. Remove the Raise/Produce notes, and the aliases on Repair/Upgrade.
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
