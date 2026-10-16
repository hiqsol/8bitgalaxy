---
date: 2026-10-10
updated: 2026-10-16
status: WIP
scope: meta
---

# Rules review

Review of the notes in `docs/` (the source of truth), aimed at a **minimal playable duel**: 2 players, no Aliens, playable with an AI from the notes alone.

Answer proposals by number, e.g. "P22 yes", "P23 no".

## Issues

### Setup and card data

- [ ] **I5. Setup incomplete:** [[StartDraw]] has 4 [[Reserve]] cards TBD, doesn't name cards from [[Deck]], says 4 Heroes in [[Factory]] while the Deck has only 2 Heroes without [[Prerequisites]], leaves [[Laboratory]] incomplete, and has no first player rule. → P27
- [ ] **I19. Deck review.** `allacad` (Base 4C) is unclear. Core technologies [[Express]] and [[ForceDiscard]] and `+Draw` [[Plus]] have no cards. → P25
- [ ] **I21. Stub notes** (`status: stub`): [[Wreckage]], [[DefSys]], [[HyperPass]], [[MinusRequirement]], [[Sell]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]].
- [ ] **I60. Advanced technologies in the first duel.** They are not ignored, so the first duel needs their rules or must avoid their cards: e.g. P27 Reserve has Ship 2C ([[Trade]]), Ship 2P ([[Extract]]), Hero 1P weak ([[Recycle]]).
- [ ] **I47. Images.** Update `card.png` after the rules and card data are settled: annotate both ends, ExtraCost, Prerequisites and the technology name.

### Rules

- [ ] **I49. Space types.** [[Space]] types Nebula and Black hole have no behavior, [[Asteroids]], [[Void]] and [[HyperPass]] are thin, and the first duel has no Space tile set. → P24, P35
- [ ] **I57. Star deck.** [[Star]]s come from the Star deck, but there is no Ability list, and no first duel deck. → P36
- [ ] **I58. Energy use.** [[Energy]] is now `core` (home Stars give it), but nothing in `core` spends it. → P37
- [ ] **I50. Action sequence.** [[PerformAction]] doesn't define a complete sequence: legality is checked late, failed actions spend unspecified resources, actions have no common template. → P34
- [ ] **I51. Combat sequence.** [[Combat]] isn't deterministic: the attacker selects defending participants, there is no pass order, hidden cards may be revealed "at any time". → P28
- [ ] **I52. Remote support.** [[Support]] from the [[Field]] has no distance limit. → P29

### Extensions

- [ ] **I43. Objectives details.** [[Objective]] (`objectives`): the list of objectives, the number of victory points to win, and whether a public objective gives more than 1 point.
- [ ] **I44. Politics details.** [[StrategyCard]]: the list of roles. [[PromissoryNote]]: what each side gets and whether the card returns to its owner.
- [ ] **I45. Derelict details.** [[Derelict]] (`aliens`): where they come from (setup, [[Event]]s) and the recruit cost.
- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak cards and cycle only strong ones. Free [[Slot]]s limit it. To be worked out in [[GameBalance]].

## Proposals

- [ ] **P24. Space type behaviors.** No dice: every effect is deterministic. Better types cost more to [[Explore]]. Pick one or more variants per type, e.g. "P24 Nebula a, c":
	- **Normal** (Cost 2): a) plain, length 1. b) length 1 or 2, longer is cheaper (Cost 1).
	- **[[Asteroids]]** (Cost 3, resource): a) [[Extract]] [[Materials]] from a bordering Star (current). b) cover: a [[Hidden]] card passing it stays Hidden even if it took part in an action. c) narrow: only groups of total [[Capacity]] ≤ 2 pass. d) rough: length +1 for all but [[Military]] [[Ship]]s.
	- **Nebula** (Cost 1, obstacle, TI-like): a) a group entering it must stop at the next Star, it can't go further this action. b) blind: [[Recon]] and [[Explore]] can't look past it. c) shroud: cards passing it may become [[Hidden]] for free. d) static: no [[Support]] from the [[Field]] through it.
	- **Black hole** (Cost 3, shortcut): a) slingshot: length 0. b) gravity well: length 0, but each passing group [[Deplete]]s its weakest card. c) one-way: passable only away from the nearest home Star. d) lab: Science actions started in a bordering Star get +1 [[SciencePower]].
	- **[[Void]]** (Cost 1, wall): a) impassable without [[Navigation]] (current). b) with Navigation length 2, without impassable. c) never passable, but no Explore cost, its back shows it (a known wall).
	- **[[HyperPass]]** (Cost 4, best, a Space type): a) length 0. b) wormhole pair: two HyperPass segments anywhere are adjacent to each other. c) highway: length 0 and [[Transport]] Capacity +1.
	- **Relic** (Cost 4, new type, like Eclipse discovery tiles): a) the first explorer takes the top card of a [[Laboratory]] pile to [[Factory]]. b) the first explorer gains 2 [[Energy]]. Then it's Normal.
	- **[[Supernova]]**: a) impassable, can't be explored, only from an [[Event]] (current). b) also gives +1 [[Power]] of any class to actions started in a bordering Star.
- [ ] **P35. First duel Space set** in [[Scenario]], after P24, replacing "every Space has length 1":
	- 24 tiles on the inner sides, shuffled and placed face down. Outer sides stay empty: the edge of the galaxy.
	- 12 Normal, 2 [[Asteroids]], 2 Nebula, 2 Black hole, 2 [[Void]], 2 [[HyperPass]], 2 Relic.
	- Types whose chosen variants need `advanced` rules are replaced with Normal.
- [ ] **P25. Core technologies on cards** (replacing duplicates):
	- [[ForceDiscard]] on Hero 2M strong, instead of [[Recon]] (Recon stays on Hero 1M and Colony 2M).
	- [[Express]] on Colony 4C, instead of [[Export]] (Materials are `advanced`).
	- `+Draw` [[Plus]] on Hero 4C strong, instead of [[Recover]], [[Upgrade]] (both stay on other Heroes).
- [ ] **P27. First duel setup** in [[StartDraw]], from the [[Deck]]:
	- [[Reserve]]: Ship 2M, 2C, 2P, 2S, Hero 1M, 1P and 4 technology-free starters (level 1/1, Primary 1, no Secondary), one per class.
	- Home [[Star]]: Colony 2C ([[Academy]]) and Base 2P ([[Shipyard]]), both [[Ready]].
	- [[Factory]] (no [[Prerequisites]]): Hero 2M, 2C, Base 2M, 2C, 2S, Colony 2M, 2P, 2S.
	- [[Laboratory]] (with [[Prerequisites]]): all level 3-4 cards.
	- One pile per [[Type]], lowest [[Level]] on top.
	- First player is random.
- [ ] **P28. Combat sequence** in [[Combat]]:
	- The defending participants are all the defender's Enabled cards in the target [[IPS]].
	- After the attacker's commit, sides alternate starting with the defender: add one card or pass.
	- Combat resolves when both sides pass in a row. Hidden cards are revealed then.
- [ ] **P29. Global support.** [[Support]] from the [[Field]] works from any distance: Warp gives faster-than-light communication, see [[Lore]].
- [ ] **P34. Action template** in [[PerformAction]]: declare (starter, action, direction), commit participants and abilities, validate, resolve, [[Deplete]]. An invalid action is taken back and nothing is spent, instead of "resources are spent".
- [ ] **P36. Star deck** in [[Star]]:
	- [[Ability]] variants, one per Star: a) +1 [[Power]] of its Type class to one action started there. b) +1 [[Energy]]. c) +1 [[Materials]] stored there. d) +1 [[Defense]] to own defenders there. e) a [[Technology]] for own cards there, e.g. [[Shipyard]], [[Academy]], [[Recon]]. f) [[Draw]] 1 card, rare.
	- Cost grows with the Ability: Energy 1, Power, Materials and Defense 2, Technology 3, Draw 4.
	- The player takes the Ability during own [[Turn]], it is not automatic.
	- First duel deck: 5 Stars, shuffled face down on non-home Stars: Energy (Cost 1), Military Power (2), Science Power (2), Defense (2), [[Shipyard]] (3).
- [ ] **P37. Energy use in core.** Move [[Boost]] to `core`: 1 [[Energy]] adds 1 [[Power]] of any class to an action, not more than a participant's [[Capacity]]. So Energy is a flexible wildcard for any action.

### Ideas

- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run AI-vs-AI duels to find holes in the rules.
