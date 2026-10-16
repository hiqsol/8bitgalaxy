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
- [ ] **I19. Deck review.** `allacad` (Base 4C) is unclear. Core technologies [[PlusDraw]], [[Express]] and [[ForceDiscard]] have no cards. → P25
- [ ] **I21. Stub notes** (`status: stub`): [[Wreckage]], [[DefSys]], [[HyperPass]], [[MinusRequirement]], [[Sell]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]], [[Navigation]], [[Stealth]].
- [ ] **I47. Images.** Update `card.png` after the rules and card data are settled: annotate both ends, ExtraCost, Prerequisites and the technology name.

### Rules

- [ ] **I48. Hidden on Field.** [[Hidden]] cards now move on the [[Field]], but it's open whether they give [[Control]], can be attacked, and when they get revealed. → P22, P23
- [ ] **I49. Exploring.** [[Space]] stays hidden at start, but [[Explore]] has no cost or range, moving through hidden Space is undefined, and the first duel has no Space tile set. → P24
- [ ] **I50. Action sequence.** [[PerformAction]] doesn't define a complete sequence: legality is checked late, failed actions spend unspecified resources, actions have no common template. → P34
- [ ] **I51. Combat sequence.** [[Combat]] isn't deterministic: the attacker selects defending participants, there is no pass order, hidden cards may be revealed "at any time". → P28
- [ ] **I52. Remote support.** [[Support]] from the [[Field]] has no distance limit. → P29
- [ ] **I53. Overlap.** [[Slot]] doesn't say unambiguously which of two cards is overlapped. → P30
- [ ] **I54. Destroyed destination.** [[Destroyed]] cards go to [[Factory]], but the pile and position are undefined. → P31
- [ ] **I55. Taxonomy.** [[Event]]s and [[Objective]]s are classified as [[Structure]]s although they never are on the [[Field]]. → P32
- [ ] **I56. Ownership.** [[ControlledBy]] uses "belongs to the faction" but ownership is not defined. → P33

### Extensions

- [ ] **I43. Objectives details.** [[Objective]] (`objectives`): the list of objectives, the number of victory points to win, and whether a public objective gives more than 1 point.
- [ ] **I44. Politics details.** [[StrategyCard]]: the list of roles. [[PromissoryNote]]: what each side gets and whether the card returns to its owner.
- [ ] **I45. Derelict details.** [[Derelict]] (`aliens`): where they come from (setup, [[Event]]s) and the recruit cost.
- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak cards and cycle only strong ones. Free [[Slot]]s limit it. To be worked out in [[GameBalance]].

## Proposals

- [ ] **P22. Hidden on Field:**
	- A Hidden card gives no [[Control]]: it is not [[Enabled]].
	- It can be attacked. It's revealed when attacked or when it takes part in any action other than [[Move]] or [[Transport]].
	- The owner can reveal it at any time of own [[Turn]], for free.
- [ ] **P23. Stealth** in [[Stealth]]: a Hidden card with Stealth moves with its own [[Range]] and [[Capacity]] instead of the minimal ones. Move [[Stealth]] and [[Recon]] to `core`: Hidden moves make them relevant.
- [ ] **P24. Explore:**
	- **Requirements**: the target [[Space]] borders the source [[Star]] or a revealed Space reachable within [[Range]]. **Cost**: the Space's Cost of [[SciencePower]].
	- Cards can't pass a hidden Space.
	- First duel Space tiles: all Normal, Cost 1 or 2, length 1.
- [ ] **P25. Core technologies on cards** (replacing duplicates):
	- [[ForceDiscard]] on Hero 2M strong, instead of [[Recon]] (Recon stays on Hero 1M and Colony 2M).
	- [[Express]] on Colony 4C, instead of [[Export]] (Materials are `advanced`).
	- [[PlusDraw]] on Hero 4C strong, instead of [[Recover]], [[Upgrade]] (both stay on other Heroes). Its class becomes Culture.
- [ ] **P26. Advanced technologies in the first duel** are ignored: the card gives only its [[Power]]. So the whole [[Deck]] is playable without `advanced` rules.
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
- [ ] **P30. Overlap** in [[Slot]]: "Slots in a row are numbered 1-5 by height. A card is overlapped when the next lower slot of its row holds a card."
- [ ] **P31. Destroyed card** goes on top of a [[Factory]] pile of the owner's choice, so it can be rebuilt next.
- [ ] **P32. Off-field role.** Add a [[Role]] for cards that are never on the [[Field]] or in [[Hand]]: [[Event]], [[Objective]]. [[Structure]] stays only for on-field cards.
- [ ] **P33. Ownership** in [[Faction]]: "A card's faction is its owner. Ownership never changes", including [[PromissoryNote]]s.
- [ ] **P34. Action template** in [[PerformAction]]: declare (starter, action, direction), commit participants and abilities, validate, resolve, [[Deplete]]. An invalid action is taken back and nothing is spent, instead of "resources are spent".

### Ideas

- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run AI-vs-AI duels to find holes in the rules.
- [ ] **Docs checker.** A script that checks required frontmatter, allowed statuses and scopes, unresolved wiki links, numbered rules, and duplicate technology assignments outside [[Technology]].
