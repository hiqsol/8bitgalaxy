---
date: 2026-10-10
updated: 2026-10-17
status: WIP
scope: meta
---

# Rules review

Review of the rules (the source of truth), aimed at a **minimal playable duel**:
2 players, no [[GalaxyDeck]], playable with an AI from the notes alone.

Answer proposals by number and letter, e.g. "P22 yes", "P27 a, c", "P23 no".

## Issues

### Setup and card data

- [ ] **I5. Setup incomplete** in [[StartDraw]]: → P27
	- a) 4 [[Reserve]] cards are TBD, cards aren't named from the [[Deck]].
	- b) 4 Heroes in [[Factory]], while the Deck has only 2 Heroes without
	  [[Prerequisites]].
	- c) [[Laboratory]] is incomplete.
	- d) No first player rule.
- [ ] **I19. Deck review.** → P25
	- a) `allacad` (Base 4C) is unclear, see [[DesignReview]] P59.
	- b) Core technologies [[Express]] and [[ForceDiscard]] and `+Draw` [[Plus]]
	  have no cards.
	- c) Redo the decks up to [[Level]] 8, planned: [[Singularity]] takes the
	  highest Level from the faction deck.
	- d) [[Actor]] Primary power values as `X+Y`, see [[PrimaryAbility]].
	- e) More [[BuildingFacility|building facilities]], planned: a faction that
	  lost its home Star can rebuild.
- [ ] **I21. Stub notes** (`status: stub`):
	- a) [[DefSys]]: see [[DesignReview]] P52.
	- b) [[HyperPass]]: see P24.
	- c) [[Sell]], [[Dismantle]]: see [[DesignReview]] P57.
	- d) [[PlusHero]]: see [[DesignReview]] P59.
- [ ] **I60. Advanced technologies in the first duel.** They are not ignored, so
  the first duel needs their rules or must avoid their cards: e.g. P27 Reserve
  has Ship 2C ([[Trade]]), Ship 2P ([[Extract]]), Hero 1P weak ([[Recycle]]).
- [ ] **I47. Images.** Update `card.png` after the rules and card data are
  settled: annotate both ends, ExtraCost, Prerequisites and the technology name.

### Rules

- [ ] **I49. Space types.** → P24, P35
	- a) [[Space]] types Nebula and Black hole have no behavior.
	- b) [[Asteroids]], [[Void]] and [[HyperPass]] are thin.
	- c) The first duel has no Space tile set.
- [ ] **I57. Star deck.** [[Star]]s come from the Star deck, but: → P36
	- a) There is no Ability list.
	- b) There is no first duel deck.
- [ ] **I58. Energy use.** [[Energy]] is now `core` (home Stars give it), but
  nothing in `core` spends it. → P37
- [ ] **I50. Action sequence.** [[PerformAction]] doesn't define a complete
  sequence: → P34
	- a) Legality is checked late.
	- b) Failed actions spend unspecified resources.
	- c) Actions have no common template.
- [ ] **I51. Combat sequence.** [[Combat]] isn't deterministic: → P28
	- a) The attacker selects defending participants.
	- b) There is no pass order.
	- c) Hidden cards may be revealed "at any time".
- [ ] **I83. Defending power.** [[Combat]] 9.2 adds a defending card's
  [[Defense]], but Defense is a property, not an [[Ability]], and a supporter
  adds one Ability ([[Support]] 2): → P62
	- a) What a defending supporter from [[Hand]] or a remote [[IPS]] adds: its
	  Defense or its Primary power.
	- b) A [[Military]] card without power has Defense 0, below non-Military 1:
	  every Depleted Military [[Structure]] (Base 2M, 4M, Colony 2M, 4M weak
	  ends) defends with 0.
- [ ] **I85. Settle and Prefab vs Range.** [[PerformAction]] 4 checks [[Range]]
  for building too. A [[Settle]] or [[Prefab]] provider in the source makes the
  source the destination ([[Distance]] 0), so the technology adds nothing. In
  the destination it is a direct participant now, but the source group must
  still reach the destination, so again it adds nothing. → P64
- [ ] **I86. Pinning scope.** [[Pinning]] 2 covers routes of [[Move]],
  [[Transport]] and [[Attack]]. [[Range]] is now checked for every action: does
  Pinning also stop [[Explore]] reach, a remote [[Support]] group and [[Create]]
  placement?
	- a) Recommended: Pinning stops moving cards only, other Range checks ignore
	  it.
- [ ] **I87. Slot split.** [[IPS]] 3: the [[Star]] **Size** is the total number
  of Slots, up to 5 for Units and 5 for Structures, but nothing says how a Size
  splits between the rows.
	- a) Recommended: the Star shows both numbers, Size is their sum.
- [ ] **I90. Free Field starter.** [[Starter]] 2.3 depletes a Field starter "as
  any participant", but [[Move]], [[Transport]] and [[Combat]] don't deplete
  direct participants that move or fight. A Field starter Ship that moves itself
  never depletes: unlimited Moves and Attacks per [[Turn]] without a [[Hand]]
  card.
	- a) Recommended: a Field starter always depletes, the exceptions of
	  [[Deplete]] don't apply to it.
- [ ] **I91. Transport inside one IPS.** [[Transport]] moves a [[Structure]]
  between [[Slot]]s of one [[IPS]] at [[Distance]] 0 with no power, [[Manage]]
  Shift does the same for 1 power per card: after [[Move]] got cards that move
  on their own, this is the last overlap.
	- a) Recommended: Transport cargo goes to another [[Star]].
- [ ] **I92. Groups.** [[PerformAction]] 4 forms one group per [[IPS]], each
  reaching the destination with its own [[Range]]:
	- a) [[Range]] 5 adds "Range from Support" to a group: with several groups,
	  which one gets a [[Hand]] supporter's Range? Recommended: one group of the
	  player's choice.
	- b) Cards in the destination may join a [[Move]] or [[Transport]], but they
	  don't move, so they deplete, and their Range and [[Capacity]] don't help
	  the moving group: they add only technologies, e.g. [[Navigation]].
	  Intended?
	- c) The attacker's own cards already in the target [[Star]] join an
	  [[Attack]] as direct participants: attack from two sides. Intended?
- [ ] **I88. Minor.**
	- a) [[Research]] 2.2 "between Laboratories": [[Manage]] Shift already moves
	  cards between piles of one [[Laboratory]]. Another player's Laboratory, or
	  drop it?
	- b) Combined prints: Colony 4P "Recover, Shipyard", Hero 4M weak and Hero
	  4C strong "Recover, Upgrade", Base 2M "Militarization, +1 Defense". One
	  [[Ability]] or two for a supporter?
	- c) [[End]] 6: strong is the end with the higher [[Level]], but Hero ends
	  have equal Levels, only the [[Deck]] names them.
	- d) [[Damaged]] 7: own [[Hidden]] cards give [[Control]] but don't keep a
	  Damaged card from [[Destroyed]], they are not Enabled. Intended?
	- e) [[VisibleFor]] 2.1: a Hidden card is not Damaged, so it is visible for
	  everyone, against [[Hidden]] 3. Recommended: visible when front Side up,
	  own, revealed to the player, or Damaged with the player's Enabled card in
	  its Star.
	- f) [[Combat]] 7 lets defenders add non-Military cards, as if attackers
	  can't, but [[Attack]] 4.1 needs only one Military Actor.
	- g) [[DoNotDeplete]] 2.2: a kept card from Hand goes to [[Reserve]]: on
	  top, like [[Recall]]?
	- h) [[Materials]] storage: its note needs a [[Colony]] in the Star,
	  [[Base]] 7 holds Materials, [[Extract]], [[Raid]], [[Salvage]] and
	  [[Event]]s put them in a Star. See [[DesignReview]] P57.
	- i) [[Scenario]] note 2: [[Void]]s keep the home Stars apart, `game.png`
	  shows them, but the first duel places no Voids, Void is `advanced` and
	  every Space is Normal of length 1.

### Extensions

- [ ] **I43. Objectives details.** [[Objective]] (`objectives`):
	- a) The list of objectives.
	- b) The number of victory points to win.
	- c) Whether a public objective gives more than 1 point.
- [ ] **I44. Politics details.**
	- a) [[StrategyCard]]: the list of roles.
	- b) [[PromissoryNote]]: what each side gets.
	- c) [[PromissoryNote]]: whether the card returns to its owner.
- [ ] **I45. Derelict details.** [[Derelict]] (`galaxy`):
	- a) Where they come from: setup or a [[GalaxyMove]], which [[Star]].
	- b) The recruit cost.
- [ ] **I89. Galaxy flow.** [[Galaxy]] (`galaxy`):
	- a) [[Turn]] has no step for the [[GalaxyMove]]: when in the Turn, by whom.
	- b) When a card in [[FutureEvents]] is evaluated.
	- c) [[CurrentEvents]] is never used and holds [[Hidden]] cards, though an
	  evaluated [[Event]] is revealed. Nothing puts cards to [[GalaxyScrap]].
	- d) [[Event]] note 3.3 moves a "warp storm", which is defined nowhere.
- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak cards and
  cycle only strong ones. Free [[Slot]]s limit it. To be worked out in
  [[GameBalance]].

## Proposals

- [ ] **P24. Space type behaviors.** No dice: every effect is deterministic.
  Better types cost more to [[Explore]]. Pick one or more variants per type,
  e.g. "P24 Nebula a, c":
	- **Normal** (Cost 2): a) plain, length 1. b) length 1 or 2, longer is
	  cheaper (Cost 1).
	- **[[Asteroids]]** (Cost 3, resource): a) [[Extract]] [[Materials]] from a
	  bordering Star (current). b) cover: a [[Hidden]] card passing it stays
	  Hidden even if it took part in an action. c) narrow: only groups of total
	  [[Capacity]] ≤ 2 pass. d) rough: length +1 for all but [[Military]]
	  [[Ship]]s.
	- **Nebula** (Cost 1, obstacle, TI-like): a) a group entering it must stop
	  at the next Star, it can't go further this action. b) blind: [[Recon]] and
	  [[Explore]] can't look past it. c) shroud: cards passing it may become
	  [[Hidden]] for free. d) static: no [[Support]] from the [[Field]] through
	  it.
	- **Black hole** (Cost 3, shortcut): a) slingshot: length 0. b) gravity
	  well: length 0, but each passing group [[Deplete]]s its weakest card. c)
	  one-way: passable only away from the nearest home Star. d) lab: Science
	  actions started in a bordering Star get +1 [[SciencePower]].
	- **[[Void]]** (Cost 1, wall): a) impassable without [[Navigation]]
	  (current). b) with Navigation length 2, without impassable. c) never
	  passable, but no Explore cost, its back shows it (a known wall).
	- **[[HyperPass]]** (Cost 4, best, a Space type): a) length 0. b) wormhole
	  pair: two HyperPass tiles anywhere are adjacent to each other. c) highway:
	  length 0 and [[Transport]] Capacity +1.
	- **Relic** (Cost 4, new type, like Eclipse discovery tiles): a) the first
	  explorer takes the top card of a [[Laboratory]] pile to [[Factory]]. b)
	  the first explorer gains 2 [[Energy]]. Then it's Normal.
	- **[[Supernova]]**: a) impassable, can't be explored, only from an
	  [[Event]] (current). b) also gives +1 [[Power]] of any class to actions
	  started in a bordering Star.
- [ ] **P35. First duel Space set** in [[Scenario]], after P24, replacing "every
  Space has length 1":
	- a) 24 tiles on the inner sides, shuffled and placed face down. Outer sides
	  stay empty: the edge of the galaxy.
	- b) 12 Normal, 2 [[Asteroids]], 2 Nebula, 2 Black hole, 2 [[Void]], 2
	  [[HyperPass]], 2 Relic.
	- c) Types whose chosen variants need `advanced` rules are replaced with
	  Normal.
- [ ] **P25. Core technologies on cards** (replacing duplicates):
	- a) [[ForceDiscard]] on Hero 2M strong, instead of [[Recon]] (Recon stays
	  on Hero 1M and Colony 2M).
	- b) [[Express]] on Colony 4C, instead of [[Export]] (Materials are
	  `advanced`).
	- c) `+Draw` [[Plus]] on Hero 4C strong, instead of [[Recover]], [[Upgrade]]
	  (both stay on other Heroes).
- [ ] **P27. First duel setup** in [[StartDraw]], from the [[Deck]]:
	- a) [[Reserve]]: Ship 2M, 2C, 2P, 2S, Hero 1M, 1P and 4 technology-free
	  starters (level 1/1, Primary 1, no Secondary), one per class.
	- b) Home [[Star]]: Colony 2C ([[Academy]]) and Base 2P ([[Shipyard]]), both
	  [[Ready]].
	- c) [[Factory]] (no [[Prerequisites]]): Hero 2M, 2C, Base 2M, 2C, 2S,
	  Colony 2M, 2P, 2S.
	- d) [[Laboratory]] (with [[Prerequisites]]): all level 3-4 cards.
	- e) One pile per [[Type]], lowest [[Level]] on top.
	- f) First player is random.
- [ ] **P28. Combat sequence** in [[Combat]]:
	- a) The defending participants are all the defender's Enabled and
	  [[Hidden]] cards in the target [[IPS]].
	- b) After the attacker's commit, sides alternate starting with the
	  defender: add one card or pass.
	- c) Combat resolves when both sides pass in a row. Hidden cards are
	  revealed then.
- [ ] **P34. Action template** in [[PerformAction]]: declare (starter, action,
  direction), commit participants and abilities, validate, resolve, [[Deplete]].
  An invalid action is taken back and nothing is spent, instead of "resources
  are spent".
- [ ] **P36. Star deck** in [[Star]]:
	- a) [[Ability]]: +1 [[Power]] of its Type class to one action started
	  there.
	- b) Ability: +1 [[Energy]].
	- c) Ability: +1 [[Materials]] stored there.
	- d) Ability: +1 [[Defense]] to own defenders there.
	- e) Ability: a [[Technology]] for own cards there, e.g. [[Shipyard]],
	  [[Academy]], [[Recon]].
	- f) Ability: [[Draw]] 1 card, rare.
	- g) Cost grows with the Ability: Energy 1, Power, Materials and Defense 2,
	  Technology 3, Draw 4.
	- h) The player takes the Ability during own [[Turn]], it is not automatic.
	- i) First duel deck: 5 Stars, shuffled face down on non-home Stars: Energy
	  (Cost 1), Military Power (2), Science Power (2), Defense (2), [[Shipyard]]
	  (3).
- [ ] **P37. Energy use in core.** Move [[Boost]] to `core`: 1 [[Energy]] adds 1
  [[Power]] of any class to an action, not more than a participant's
  [[Capacity]]. So Energy is a flexible wildcard for any action.

- [ ] **P62. Defense** in [[Defense]] and [[Combat]]:
	- a) Defense = [[AttackPower]], at least 1, for every card.
	- b) A defending supporter adds its Defense as its one [[Ability]].
- [ ] **P64. Settle and Prefab:** with the provider in the destination [[IPS]],
  [[Create]] reaches it at any [[Distance]]: the source group needs no
  [[Range]], like `allacad` in [[DesignReview]] P59 e.

### Ideas

- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run
  AI-vs-AI duels to find holes in the rules.
