---
date: 2026-10-10
updated: 2026-10-20
status: WIP
scope: meta
---

# Rules review

Review of the rules (the source of truth), aimed at a **minimal
playable duel**:
2 players, no [[GalaxyDeck]], playable with an AI from the notes
alone.

Answer proposals by number and letter, e.g. "RP22 yes", "RP27 a, c",
"RP23 no".

## Issues

### Setup and card data

- [ ] **RI5. Setup incomplete** in [[StartDraw]]: → RP27
	- a) 4 [[Reserve]] cards are TBD, cards aren't named from the
	  [[Deck]].
	- b) 4 Heroes in [[Factory]], while the Deck has only 2 Heroes
	  without [[Prerequisites]].
	- c) [[Laboratory]] is incomplete.
	- d) No first player rule.
- [ ] **RI19. Deck review.** → RP25
	- a) Core technologies [[Express]], [[ForceDiscard]], [[Settle]],
	  [[Prefab]] and `+Draw` [[Plus]] have no cards.
	- b) Redo the decks up to [[Level]] 8, planned: [[Singularity]]
	  takes the highest Level from the faction deck.
	- c) [[Actor]] Primary power values as `X+Y`, see
	  [[PrimaryAbility]].
	- d) More [[Hub|hubs]], planned: a
	  faction that lost its home Star can rebuild.
- [ ] **RI21. Stub notes** (`status: stub`):
	- a) [[DefSys]]: see [[DesignReview]] DP52.
	- b) [[HyperPass]]: see RP24.
	- c) [[Sell]], [[Dismantle]]: see [[DesignReview]] DP57.
	- d) [[PlusHero]]: see [[DesignReview]] DP59.
- [ ] **RI60. Advanced technologies in the first duel.** They are not
  ignored, so the first duel needs their rules or must avoid their
  cards: e.g. RP27 Reserve has Ship 2C ([[Trade]]), Ship 2P
  ([[Extract]]), Hero 1P weak ([[Recycle]]).
- [ ] **RI47. Images.** Update `card.png` after the rules and card data
  are settled: annotate both ends, ExtraPrice, Prerequisites and the
  technology name.

### Rules

- [ ] **RI49. Space types.** → RP24, RP35
	- a) [[Space]] types Nebula and Black hole have no behavior.
	- b) [[Asteroids]], [[Void]] and [[HyperPass]] are thin.
	- c) The first duel has no Space tile set.
- [ ] **RI57. Star deck.** [[Star]]s come from the Star deck, but: →
  RP36
	- a) There is no Ability list.
	- b) There is no first duel deck.
- [ ] **RI50. Action sequence.** [[PerformAction]] doesn't define a
  complete sequence: → RP34
	- a) Legality is checked late.
	- b) Failed actions spend unspecified resources.
	- c) Actions have no common template.
- [ ] **RI51. Combat sequence.** [[Combat]] isn't deterministic: → RP28
	- a) The attacker selects defending participants.
	- b) There is no pass order.
	- c) Hidden cards may be revealed "at any time".
- [ ] **RI83. Defending power.** [[Combat]] 9.2 adds a defending card's
  [[Defense]], but Defense is a property, not an [[Ability]], and a
  supporter adds one Ability ([[Support]] 2): → RP62
	- a) What a defending supporter from [[Hand]] or a remote [[IPS]]
	  adds: its Defense or its Primary power.
	- b) A [[Military]] card without power has Defense 0, below
	  non-Military 1: every Depleted Military [[Structure]] (Base 2M,
	  4M, Colony 2M, 4M weak ends) defends with 0.
- [ ] **RI92. Groups.** [[PerformAction]] 4 forms one group per
  [[IPS]], each reaching the destination with its own [[Range]]:
	- a) [[Range]] 5 adds "Range from Support" to a group: with
	  several groups, which one gets a [[Hand]] supporter's Range?
	  Recommended: one group of the player's choice.
	- b) Cards in the destination may join a [[Move]], but they don't
	  move, so they deplete, and their Range and [[Capacity]] don't
	  help the moving group: they add only technologies, e.g.
	  [[Navigation]]. Intended?
	- c) The attacker's own cards already in the target [[Star]] join
	  an [[Attack]] as direct participants: attack from two sides.
	  Intended?
- [ ] **RI88. Minor.**
	- b) Combined prints: Hero 4M weak and Hero 4C strong "Recover,
	  Upgrade", Base 2M "Militarization, +1 Defense". One [[Ability]]
	  or two for a supporter?
	- f) [[Combat]] 7 lets defenders add non-Military cards, as if
	  attackers can't, but [[Attack]] 4.1 needs only one Military
	  Actor.
	- g) [[DoNotDeplete]] 2.2: a kept card from Hand goes to
	  [[Reserve]]: on top, like [[Recall]]?
	- h) [[Materials]] storage: its note needs a [[Colony]] in the
	  Star, [[Base]] 7 holds Materials, [[Extract]], [[Raid]],
	  [[Salvage]] and [[Event]]s put them in a Star. See
	  [[DesignReview]] DP57.
- [ ] **RI93. Token passage.** One token is [[Energy]] in [[Hand]] and
  [[Materials]] in a [[Star]] ([[Component]]), but only [[Export]] turns
  Materials into Energy, nothing turns Energy into
  Materials:
	- a) Recommended: Hand → Star by [[Takeoff]], a token to a Star
	  the player controls, like a card, it takes no [[Slot]].
	- b) Star → Hand by [[Manage]], 1 power per token, from a Star the
	  player controls.
- [ ] **RI94. Underdescribed technologies.** Their pages don't say
  enough to play them, stubs are in RI21:
	- a) [[Militarization]]: what [[Manage]] does to an enemy card.
	- b) [[Invent]]: which pile and the Cost.
	- c) [[PlusFactory]], [[PlusLaboratory]]: the Cost, the limit and
	  how an extra pile works.
	- d) [[Stealth]] at [[Takeoff]]: Takeoff 3.1 lets the card itself
	  or an own Enabled card in that Star provide it. Does the
	  providing card Deplete as in [[ImmediateAction]]?

### Extensions

- [ ] **RI43. Objectives details.** [[Objective]] (`objectives`):
	- a) The list of objectives.
	- b) The number of victory points to win.
	- c) Whether a public objective gives more than 1 point.
- [ ] **RI44. Politics details.**
	- a) [[StrategyCard]]: the list of roles.
	- b) [[PromissoryNote]]: what each side gets.
	- c) [[PromissoryNote]]: whether the card returns to its owner.
- [ ] **RI45. Derelict details.** [[Derelict]] (`galaxy`):
	- a) Where they come from: setup or a [[GalaxyMove]], which
	  [[Star]].
	- b) The recruit cost.
- [ ] **RI89. Galaxy flow.** [[Galaxy]] (`galaxy`):
	- a) [[Turn]] has no step for the [[GalaxyMove]]: when in the
	  Turn, by whom.
	- b) When a card in [[FutureEvents]] is evaluated.
	- c) [[CurrentEvents]] is never used and holds [[Hidden]] cards,
	  though an evaluated [[Event]] is revealed. Nothing puts cards to
	  [[GalaxyScrap]].
	- d) [[Event]] note 3.3 moves a "warp storm", which is defined
	  nowhere.
- [ ] **RI46. Deck thinning by Takeoff.** A player can take off weak
  cards and cycle only strong ones. Free [[Slot]]s limit it. To be
  worked out in [[GameBalance]].

## Proposals

- [ ] **RP24. Space type behaviors.** No dice: every effect is
  deterministic. Better types cost more to [[Explore]]. Pick one or
  more variants per type, e.g. "RP24 Nebula a, c":
	- **Normal** (Price 2): a) plain, length 1. b) length 1 or 2,
	  longer is cheaper (Price 1).
	- **[[Asteroids]]** (Price 3, resource): a) [[Extract]]
	  [[Materials]] from a bordering Star (current). b) cover: a
	  [[Hidden]] card passing it stays Hidden even if it took part in
	  an action. c) narrow: only groups of total [[Capacity]] ≤ 2
	  pass. d) rough: length +1 for all but [[Military]] [[Ship]]s.
	- **Nebula** (Price 1, obstacle, TI-like): a) a group entering it
	  must stop at the next Star, it can't go further this action. b)
	  blind: [[Explore]] can't look past it. c) shroud: cards passing
	  it may become [[Hidden]] for free. d) static: no [[Support]]
	  from the [[Field]] through it.
	- **Black hole** (Price 3, shortcut): a) slingshot: length 0. b)
	  gravity well: length 0, but each passing group [[Deplete]]s its
	  weakest card. c) one-way: passable only away from the nearest
	  home Star. d) lab: Science actions started in a bordering Star
	  get +1 [[SciencePower]].
	- **[[Void]]** (Price 1, wall): a) impassable without
	  [[Navigation]] (current). b) with Navigation length 2, without
	  impassable. c) never passable, but no Explore cost, its back
	  shows it (a known wall).
	- **[[HyperPass]]** (Price 4, best, a Space type): a) length 0. b)
	  wormhole pair: two HyperPass tiles anywhere are adjacent to each
	  other. c) highway: length 0 and [[Move]] cargo Capacity +1.
	- **Relic** (Price 4, new type, like Eclipse discovery tiles): a)
	  the first explorer takes the top card of a [[Laboratory]] pile
	  to [[Factory]]. b) the first explorer gains 2 [[Energy]]. Then
	  it's Normal.
	- **[[Supernova]]**: a) impassable, can't be explored, only from
	  an [[Event]] (current). b) also gives +1 [[Power]] of any class
	  to actions started in a bordering Star.
- [ ] **RP35. First duel Space set** in [[Scenario]], after RP24,
  replacing "every Space has length 1":
	- a) 24 tiles on the inner sides, shuffled and placed face down.
	  Outer sides stay empty: the edge of the galaxy.
	- b) 12 Normal, 2 [[Asteroids]], 2 Nebula, 2 Black hole, 2
	  [[Void]], 2 [[HyperPass]], 2 Relic.
	- c) Types whose chosen variants need `advanced` rules are
	  replaced with Normal.
- [ ] **RP25. Core technologies on cards** (replacing duplicates):
	- a) [[ForceDiscard]] on Hero 2M strong, instead of [[Explore]]
	  (Recon stays on Hero 1M and Colony 2M).
	- b) [[Express]] on Colony 4C, instead of [[Export]] (Materials
	  are `advanced`).
	- c) `+Draw` [[Plus]] on Hero 4C strong, instead of [[Recover]],
	  [[Upgrade]] (both stay on other Heroes).
- [ ] **RP27. First duel setup** in [[StartDraw]], from the [[Deck]]:
	- a) [[Reserve]]: Ship 2M, 2C, 2P, 2S, Hero 1M, 1P and 4
	  technology-free starters (level 1/1, Primary 1, no Secondary),
	  one per class.
	- b) Home [[Star]]: Colony 2C ([[Academy]]) and Base 2P
	  ([[Shipyard]]), both [[Ready]].
	- c) [[Factory]] (no [[Prerequisites]]): Hero 2M, 2C, Base 2M, 2C,
	  2S, Colony 2M, 2P, 2S.
	- d) [[Laboratory]] (with [[Prerequisites]]): all level 3-4 cards.
	- e) One pile per [[Type]], lowest [[Level]] on top.
	- f) First player is random.
- [ ] **RP28. Combat sequence** in [[Combat]]:
	- a) The defending participants are all the defender's Enabled and
	  [[Hidden]] cards in the target [[IPS]].
	- b) After the attacker's commit, sides alternate starting with
	  the defender: add one card or pass.
	- c) Combat resolves when both sides pass in a row. Hidden cards
	  are revealed then.
- [ ] **RP34. Action template** in [[PerformAction]]: declare (starter,
  action, direction), commit participants and abilities, validate,
  resolve, [[Deplete]]. An invalid action is taken back and nothing is
  spent, instead of "resources are spent".
- [ ] **RP36. Star deck** in [[Star]]:
	- a) [[Ability]]: +1 [[Power]] of its Type class to one action
	  started there.
	- b) Ability: +1 [[Energy]].
	- c) Ability: +1 [[Materials]] stored there.
	- d) Ability: +1 [[Defense]] to own defenders there.
	- e) Ability: a [[Technology]] for own cards there, e.g.
	  [[Shipyard]], [[Academy]], [[Explore]].
	- f) Ability: [[Draw]] 1 card, rare.
	- g) [[ExtraPrice]] grows with the Ability: Energy 1, Power,
	  Materials and Defense 2, Technology 3, Draw 4.
	- h) The player takes the Ability during own [[Turn]], it is not
	  automatic.
	- i) First duel deck: 5 Stars, shuffled face down on non-home
	  Stars: Energy (ExtraPrice 1), Military Power (2), Science Power
	  (2), Defense (2), [[Shipyard]] (3).
- [ ] **RP62. Defense** in [[Defense]] and [[Combat]]:
	- a) Defense = [[AttackPower]], at least 1, for every card.
	- b) A defending supporter adds its Defense as its one
	  [[Ability]].
- [ ] **RP66. Weak Structure ends.** Weak ends can provide abilities,
  just weaker ([[End]] 8), but every weak Structure end in the
  [[Deck]] has no [[SecondaryAbility]]:
	- a) Weak end Secondary is one less than the strong end's: Colony
	  2x +1, Base 4x and Colony 4x +2, Base 2x stays without.
	- b) A [[Depleted]] Structure then still gives some [[Power]], so
	  [[Restore]] matters less: an alternative to a) is +1 on 4x weak
	  ends only.
- [ ] **RP65. Interdiction.** [[Pinning]] stops moving cards only. A
  [[Military]] [[TechnologyModifier]] (`advanced`) extends it: rival
  Enabled Actors with it in a [[Star]] also stop the [[Range]] of
  other actions through that Star: [[Explore]] reach, remote
  [[Support]] groups, [[Create]] placement. Pick a name:
	- a) **Interdiction** (recommended): blocks reach, not only
	  movement.
	- b) **Blockade**: plain, but sounds like movement only, as
	  Pinning.
	- c) **Jamming**: fits signals: Support and Explore, less so
	  Create.
	- d) **Lockdown**: the whole Star is closed.

### Ideas

- [ ] **AI playtesting.** Export all `scope: core` notes into one file
  and run AI-vs-AI duels to find holes in the rules.
