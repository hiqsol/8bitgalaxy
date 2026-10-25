---
date: 2026-10-10
updated: 2026-10-24
status: WIP
scope: meta
---

# Backlog

Open items of the rules, design and simplification reviews, aimed at
a **minimal playable duel**: 2 players, no [[GalaxyDeck]], playable
with an AI from the notes alone. Items keep their review numbers:
issues `I<n>`, proposals `P<n>` and simplifications `S<n>`. Other
games are compared in [[ComparisonReview]].

Answer by number and letter, e.g. "P27 a, c", "S41 no".

## Settled

Rules that kept coming back in reviews. Reopen one only with evidence
from a played game, not from a review.

1. No new review items before the first duel is played
2. **Range**: a group's Range is the sum of its cards' Ranges, checked
   only for groups outside the destination, see [[Range]],
   [[PerformAction]]
3. **Hidden**: only by [[Stealth]], moves with Range 1 and Capacity 1,
   revealed at the [[Combat]] reveal, see [[Hidden]]
4. **Control**: strictly the highest [[Control]] controls a Star, a
   tie makes it [[Disputed]], see [[ControlledBy]]
5. **Explore**: one technology, Recon and Survey are its flavour
   names, see [[Explore]]
6. **Build**: [[Create]], [[Upgrade]] at a [[Hub]]; [[Recover]]
   from the card that provides it
7. **Field start**: a Field card starts an action only with
   [[Starter]], `advanced`

## Next step

1. Play the first duel, on paper or AI-vs-AI from the `core` notes
2. Note every rule that stopped play or was read two ways
3. Only those notes become review items

## First duel

Items that block the first duel, [[Guidance]] has the recommended
answers.

### Setup

- [ ] **I5. Setup incomplete** in [[StartDraw]]: → P27
	- a) 4 [[Reserve]] cards are TBD, cards aren't named from the
	  [[Deck]].
	- b) 4 Heroes in [[Factory]], while the Deck has only 2 Heroes
	  without [[Prerequisites]].
	- c) [[Laboratory]] is incomplete.
	- d) No first player rule.
- [ ] **P27. First duel setup** in [[StartDraw]], from the [[Deck]]:
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
- [ ] **I60. Advanced technologies in the first duel.** They are not
  ignored, so the first duel needs their rules or must avoid their
  cards: e.g. P27 Reserve has Ship 2C ([[Trade]]), Ship 2P
  ([[Extract]]), Hero 1P weak ([[Recycle]]).

### World deck

- [ ] **I57. World deck.** [[World]]s come from the World
  deck, but: → P36
	- a) There is no Ability list.
	- b) There is no first duel deck.
- [ ] **P36. World deck** in [[World]]:
	- a) [[Ability]]: +1 [[Power]] of its [[Class]] to one action
	  started there.
	- b) Ability: +1 [[Energy]].
	- c) Ability: +1 [[Materials]] stored there.
	- d) Ability: +1 [[Defense]] to own defenders there.
	- e) Ability: a [[Technology]] for own cards there, e.g.
	  [[Shipyard]], [[Academy]], [[Explore]].
	- f) Ability: [[DeckBuilding|Draw]] 1 card, rare.
	- g) [[ExtraPrice]] grows with the Ability: Defense 1, Power and
	  Materials 2, Energy and Technology 3, Draw 4, and so the number
	  of [[Alien]]s guarding it. Energy is above Power: any class,
	  anywhere, kept between Turns.
	- i) First duel deck: 5 Worlds: Energy (ExtraPrice 3),
	  Military Power (2), Science Power (2), Defense (1), [[Shipyard]]
	  (3).

### Action sequence

- [ ] **I50. Action sequence.** [[PerformAction]] doesn't define a
  complete sequence: → P34
	- a) Legality is checked late.
	- b) Failed actions spend unspecified resources.
	- c) Actions have no common template.
- [ ] **P34. Action template** in [[PerformAction]]: declare
  (starter, action, direction), commit participants and abilities,
  validate, resolve, [[Deplete]]. An invalid action is taken back and
  nothing is spent, instead of "resources are spent".
- [ ] **S20. Visible Explore cost.** [[Explore]] reveals the Price
  only after cards are spent, while P34 validates every action before
  resolution and takes an invalid action back:
	- a) Print the [[Price]] on the back of every [[Space]], beside
	  its Length. Type and Ability stay hidden.
	- b) Validate before revealing, like every other action. Remove
	  Explore 7-8 and the Explore exception from [[PerformAction]] 5.
	- c) This removes failure and refund rules without removing a
	  choice: the player still chooses which unknown tile is worth its
	  visible Price.

### Combat

- [ ] **I51. Combat sequence.** [[Combat]] isn't deterministic: →
  P28
	- a) The attacker selects defending participants.
	- b) There is no pass order.
	- c) Hidden cards may be revealed "at any time".
- [ ] **P28. Combat sequence** in [[Combat]]:
	- a) The defending participants are all the defender's Enabled and
	  [[Hidden]] cards in the target [[IPS]].
	- b) After the attacker's commit, sides alternate starting with
	  the defender: add one card or pass.
	- c) Combat resolves when both sides pass in a row. Hidden cards
	  are revealed then.
- [ ] **S26. All Combat cards from Hand are face down.** [[Combat]]
  gives a special bluff to "Hidden cards from Hand", although Hand is
  already secret and Hidden is otherwise a Field state:
	- a) Every Combat supporter from Hand is committed face down.
	- b) Reveal all commitments only at resolution, as in P28; remove
	  voluntary reveal-at-any-time and the special Hidden-Hand rule.
	- c) Bluffing stays, with one commitment procedure and no state
	  change.
- [ ] **I83. Defending power.** [[Combat]] 8.2 adds a defending
  card's [[Defense]], but Defense is a property, not an [[Ability]],
  and a supporter adds one Ability ([[Support]] 2): → P62
	- a) What a defending supporter from [[Hand]] or a remote [[IPS]]
	  adds: its Defense or its Primary power.
	- b) A [[Military]] card without power has Defense 0, below
	  non-Military 1: every Depleted Military [[Structure]] (Base 2M,
	  4M, Colony 2M, 4M weak ends) defends with 0.
- [ ] **P62. Defense** in [[Defense]] and [[Combat]]:
	- a) Defense = [[AttackPower]], at least 1, for every card.
	- b) A defending supporter adds its Defense as its one
	  [[Ability]].
- [ ] **I76. Academy attack details** ([[Combat]] 2.3):
	- a) [[Reserve]] is face down: the attacker picks blindly or takes
	  from the top?
	- b) [[Hand]] is hidden: picked blindly, or by name after Recon
	  ([[Explore]])?
	- c) Where a Damaged card from a pile goes: it stays Damaged in
	  its pile and cycles as a dead card until [[Recover]]ed (Mage
	  Knight wounds)?
	- d) Cards selected from piles are defending participants, so they
	  add their power to the defense: intended?
- [ ] **S25. Home cards have no Field state.** A card back means
  [[Hidden]] or [[Damaged]], but [[Reserve]] is face down as a pile;
  [[Combat]] 2.3 can also Damage cards selected from Hand, Reserve or
  Discard:
	- a) In [[Home]], the pile determines visibility and cards are
	  usable unless they are in Factory or Laboratory. Side and End
	  states apply only to cards individually on the Field.
	- b) Winning Combat at a rival [[Academy]] sends one Hero from a
	  specified Home pile directly to [[Factory]], instead of making
	  it a defending participant. Choose top, random or
	  attacker-selected after Recon.
	- c) The leader check becomes: a Hero in Hand, Reserve or Discard,
	  or an Enabled Hero on the Field. This resolves I76 a-d with one
	  rule instead of four pile exceptions.
- [ ] **I92. Groups.** [[PerformAction]] 4 forms one group per
  [[IPS]], each reaching the destination with its own [[Range]]:
	- a) [[Range]] 5 adds "Range from Support" to a group: with
	  several groups, which one gets a [[Hand]] supporter's Range?
	  Recommended: one group of the player's choice.

## Watch in playtest

Questions a played game answers better than a review.

- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak
  cards and cycle only strong ones. Free [[Slot]]s limit it. To be
  worked out in [[GameBalance]].
- [ ] **I79 b. Legacy thins the deck** like I46: keep [[Legacy]] in
  `objectives` or drop it?
- [ ] **I75 a. Actions per Turn.** [[GameBalance]] expects about 5
  actions per Turn, but every Hand action takes a starter and usually
  supporters: 2-3 is likelier.
- [ ] **I75 f. Militarization Defense.** In the [[Deck]] the [[Plus]]
  Defense of [[Militarization]] cards was set to raise Defense 1 to
  the end's [[Level]], but [[Military]] cards defend with their
  [[AttackPower]]: revise the values?
- [ ] **P66. Weak Structure ends.** Weak ends can provide abilities,
  just weaker ([[End]] 8), but every weak Structure end in the
  [[Deck]] has no [[SecondaryAbility]]:
	- a) Weak end Secondary is one less than the strong end's: Colony
	  2x +1, Base 4x +2, Colony 4x +3, Base 2x stays without.
	- b) A [[Depleted]] Structure then still gives some [[Power]], so
	  [[Restore]] matters less: an alternative to a) is +1 on 4x weak
	  ends only.
- [ ] **I81. Combat damage, to brainstorm.** [[Combat]] 9.1-2 Damage
  every direct participant the winner doesn't save by the advantage,
  on both sides; supporters only [[Deplete]]:
	- a) Exploit: one cheap [[Military]] ship plus [[Hand]] supporters
	  aiming at a tie. Advantage 0 saves nothing, so the defender's
	  whole garrison is Damaged for a level-2 ship.
	- b) Garrisons are a liability: the more defenders in a Star, the
	  more a narrow win costs.
	- c) Option: the loser's supporters get Damaged too, the winner's
	  only direct participants. Fighting from Hand stops being free,
	  but a narrow win still costs the winner the garrison.
	- d) Option: the loser's direct participants set the winner's
	  loss: the winner Damages own direct participants of total
	  [[Level]] at least the loser's direct total, chosen by the
	  winner.
	- e) Depends on I76 c: where a Damaged card from Hand goes.

## After the first duel

### Space types

The first duel keeps Spaces of length 1.

- [ ] **I49. Space types.** → P24, P35
	- a) [[Space]] types Nebula and Black hole have no behavior.
	- b) [[Asteroids]] and [[Void]] are thin, HyperPass is an idea.
	- c) The first duel has no Space tile set.
- [ ] **P24. Space type behaviors.** No dice: every effect is
  deterministic. Better types cost more to [[Explore]]. Pick one or
  more variants per type, e.g. "P24 Nebula a, c":
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
	- **HyperPass** (Price 4, best, a Space type): a) length 0. b)
	  wormhole pair: two HyperPass tiles anywhere are adjacent to each
	  other. c) highway: length 0 and [[Move]] cargo Capacity +1.
	- **Relic** (Price 4, new type, like Eclipse discovery tiles): a)
	  the first explorer takes the top card of a [[Laboratory]] pile
	  to [[Factory]]. b) the first explorer gains 2 [[Energy]]. Then
	  it's Normal.
	- **[[Supernova]]**: a) impassable, can't be explored, only from
	  an [[Event]] (current). b) also gives +1 [[Power]] of any class
	  to actions started in a bordering Star.
- [ ] **P67. Longer Space for high Range.** [[Range]] grows up to 8
  with the [[Deck]] tiers, a big Range is fine; Spaces get longer
  later:
	- a) Only outer Spaces get longer, a Space between neighbour Stars
	  keeps length 1: tier I and II cards still cross the map.
	- b) Lengthen when tier III and IV cards are in play, after
	  playtests of the 56-card Deck.
- [ ] **P35. First duel Space set** in [[Scenario]], after P24,
  replacing "every Space has length 1":
	- a) 24 tiles on the inner sides, shuffled and placed face down.
	  Outer sides stay empty: the edge of the galaxy.
	- b) 12 Normal, 2 [[Asteroids]], 2 Nebula, 2 Black hole, 2
	  [[Void]], 2 HyperPass, 2 Relic.
	- c) Types whose chosen variants need `advanced` rules are
	  replaced with Normal.
- [ ] **S38. Route details where they belong.** [[Distance]] defines a
  route, [[Void]] says a route can't pass it. Other tile rules speak
  of moving cards, so it's unclear which [[Range]] checks they bind:
	- a) [[Space]] 6: a route can't pass a hidden Space.
	- b) [[Supernova]]: a route can't pass Supernova; today only Ships
	  are stopped and Heroes pass, keep "Ships" if that is intended.
	- c) [[Navigation]]: the route of a group with Navigation can pass
	  Void; [[Jump]]: one hidden Space, it gets revealed. Today both
	  name only [[Move]].
	- d) Then remote [[Support]], [[Explore]] reach and [[Create]]
	  placement obey every tile rule; only [[Pinning]], by its own
	  words, binds moving groups. Recommended: a-c, with "route" for
	  Supernova.

### Deck

- [ ] **I19. Deck review.** → P25
	- a) Core technologies [[Express]], [[ForceDiscard]], [[Settle]]
	  and `+Draw` [[Plus]] have no cards.
	- c) [[Actor]] Primary power values as `X+Y`, see
	  [[PrimaryAbility]].
	- d) More [[Hub|hubs]], planned: a faction that lost its home Star
	  can rebuild.
	- e) The 12 cards of tiers III and IV are TBD in the [[Deck]]:
	  technologies and Structure Primary. They are homes for a) and
	  P25: a value per Price stays about flat, a value per card grows
	  with Level.
- [ ] **P25. Core technologies on cards** (replacing duplicates):
	- a) [[ForceDiscard]] on Hero 2S weak, instead of [[Explore]]
	  (Recon stays on Hero 2M and Colony 2M).
	- b) [[Express]] on Colony 4C, instead of [[Export]] (Materials
	  are `advanced`).
	- c) `+Draw` [[Plus]] on Hero 4C strong, instead of [[Recover]],
	  [[Upgrade]] (both stay on other Heroes).
- [ ] **I47. Images.** Update `card.png` after the rules and card
  data are settled: annotate both ends, ExtraPrice, Prerequisites and
  the technology name.
- [ ] **I79 c, d. New technologies.**
	- c) [[Tactics]] to [[MinusRequirement]] in the [[Technology]]
	  table have no cards yet.
	- d) All are `advanced`, [[Legacy]] is `objectives`: should some
	  go to `core`?

### Economy

All `advanced`.

- [ ] **I74. Economy overlap.** → P57
	- a) [[Recycle]] and [[Dismantle]] both turn cards into
	  [[Materials]].
	- b) [[Export]] and [[Smuggle]] need a rival's Colony: dead in a
	  duel.
	- c) [[Sell]] is a stub.
- [ ] **P57. Economy roles.** One job per stockable resource
  (Eclipse, TtA: materials build, money is the wildcard):
	- a) [[Materials]] pay [[Create]], [[Upgrade]] and [[Recover]]
	  costs at a [[Hub]] in the Star where they are: [[Extract]] at
	  [[Asteroids]], carried to the Shipyard.
	- b) [[Energy]] [[Boost]]s any action (already in `core`).
	- c) [[Trade]] turns power into Energy between two own Colonies: a
	  trade route.
	- d) [[Dismantle]] merges into [[Recycle]].
	- e) [[Export]], [[Smuggle]] and [[Sell]] move to [[Politics]] as
	  trade between factions.
- [ ] **S39. One conversion outcome.** [[Extract]] and [[Recycle]]
  have the same outcome text, [[Trade]] half of it:
	- a) Define **conversion** once in [[Materials]]: the action's
	  power becomes Materials one to one in the source [[Star]].
	- b) The pages keep only what they convert: [[Asteroids]], a card,
	  a trade route, unless P57 c turns Trade into Energy.

### Victory and extensions

- [ ] **I95. Culture finish.** [[Twilight]] is far by intention and
  [[Singularity]] usually comes first, but the [[Culture]] path of
  [[Goal]] decides only at Twilight, and only [[Research]] brings it
  closer: a Culture leader can't end the game.
	- a) Threshold: a faction with N Culture points at **Check** of
	  own [[Turn]] wins at once, like Singularity; Twilight stays the
	  backstop.
	- b) Trigger: N Culture points trigger Twilight, every rival gets
	  its last Turn to answer.
	- c) Keep: Culture decides only at Twilight, a Culture leader
	  stops the others by force.
- [ ] **I78. Production path** ([[Goal]] 3.3) is TBD. → P60
- [ ] **P60. Production path** for [[Goal]] 3, pick one or more:
	- a) Production, Wealth: stock 12 [[Energy]] (Civilization's
	  economic victory).
	- b) Production, Industry: total [[Level]] of own [[Base]]s on the
	  [[Field]], the mirror of the Culture path.
	- c) Production, Fleet: total Level of own [[Ship]]s, in the deck
	  and on the Field.
	- d) Production, Stock: total [[Materials]] stored in own Stars, a
	  logistics race.
	- e) Production, Built out: own [[Factory]] and [[Laboratory]] are
	  empty, the mirror of Science.
	- f) Production, Wonders: 3 completed [[Hyperstructure]]s, the
	  Homeworld included.
- [ ] **I77. Hyperstructure count and build.**
	- a) How many in a game, one copy of each?
	- b) A shared row, the first to complete one takes it?
	- c) How an unfinished one lies in its [[Slot]] between its two
	  [[Create]]s.
- [ ] **I43. Objectives details.** [[Objective]] (`objectives`):
	- a) The list of objectives.
	- b) The number of victory points to win.
	- c) Whether a public objective gives more than 1 point.
- [ ] **I44. Politics details.**
	- a) [[StrategyCard]]: the list of roles.
	- b) [[PromissoryNote]]: what each side gets.
	- c) [[PromissoryNote]]: whether the card returns to its owner.
- [ ] **I45. Derelict details.** [[Derelict]] (`galaxy`):
	- a) Where they come from: setup or a [[GalaxyMove]], which
	  [[Star]].
	- b) The recruit cost.
- [ ] **I89. Galaxy flow.** [[Galaxy]] (`galaxy`):
	- a) [[Turn]] has no step for the [[GalaxyMove]]: when in the
	  Turn, by whom.
	- b) When a card in [[FutureEvents]] is evaluated.
	- c) [[CurrentEvents]] is never used and holds [[Hidden]] cards,
	  though an evaluated [[Event]] is revealed. Nothing puts cards to
	  [[GalaxyScrap]].
	- d) [[Event]] note 3.3 moves a "warp storm", which is defined
	  nowhere.
- [ ] **I80. Event catch-up measure.** [[Event]] notes give less to
  stronger factions, but greatness is now the four paths of [[Goal]]:
  which measure says who is stronger, Culture points?

### Additions

- [ ] **P58. Traits instead of new Types.** Variety via [[Trait]]s:
	- a) `Unique`: one per faction on the [[Field]], for flagships and
	  top Heroes (TI).
	- b) `Consumable`: [[Destroy]] after use, replaces the [[Tool]]
	  type: probes, mines, missiles.
	- c) `Immovable`: can't move or be cargo, replaces the third
	  mobility type in [[Range]], for Hyperstructures.
	- d) Card orientations are all taken (strong and weak front,
	  Damaged and Hidden back), so new states should come from
	  position, like [[ActiveFor]] and [[Pinning]], not markers.
- [ ] **S28. Unit instead of Actor.** If P58 b replaces [[Tool]] with
  a `Consumable` trait, every [[Unit]] is an [[Actor]]:
	- a) Merge Actor into Unit and use Unit for movement, starters and
	  Control.
	- b) Remove one Role level, the Actor page and the nested Role
	  lists.
	- c) Ships and Heroes keep all current rules; Consumable Units are
	  destroyed after use by their trait.

### Stubs and underdescribed

- [ ] **P59. Stubs** (`status: stub`):
	- b) [[Dismantle]], [[Sell]]: by P57.
	- c) [[PlusHero]]: remove, [[Create]] of Heroes covers it.
- [ ] **I94. Underdescribed technologies.** Their pages don't say
  enough to play them, stubs are in P59:
	- a) [[Militarization]]: what [[Manage]] does to an enemy card.
	- b) [[Invent]]: which pile and the Cost.
	- c) [[PlusPile]]: the Cost, the limit and how an extra pile
	  works.
	- d) [[Stealth]] at [[Takeoff]]: Stealth 4 lets the card itself
	  or an own Enabled card in that Star provide it. Does the
	  providing card Deplete as in [[ImmediateAction]]?

## Editorial

One batch after the playtest, only for pages that confused play.

- [ ] **I75 c, d. Naming.**
	- c) [[AttackPower]] → `MilitaryPower`, like the other three
	  powers.
	- d) [[Militarization]] cards are [[Military]] already, they don't
	  militarize. The technology is [[Manage]] of enemy cards, which
	  lowers their [[Defense]] before an [[Attack]]: `Suppression`
	  fits best, also `Sabotage`, `Disruption`. Its Defense part is a
	  [[Plus]].
- [ ] **S23. Separate usable cards from scoring cards.** [[ActiveFor]]
  includes [[History]], whose cards are out of play, then says active
  cards are action participants:
	- a) Participants are own usable cards in Hand or on the Field,
	  stated in [[PerformAction]] without ActiveFor.
	- b) Replace ActiveFor with **counts for goals**: a non-Damaged
	  card on the Field, in Hand or in History and [[ControlledBy]]
	  the faction.
	- c) This makes "out of play but active" unnecessary and prevents
	  History from appearing to provide action Abilities.
- [ ] **S24. One timing rule for passive abilities.** [[Plus]] says
  bonuses sum from participants, but also lists Hand size, end-of-Turn
  [[Restore]], victory points and votes, none of which has
  participants:
	- a) An action Ability applies only when its card participates.
	- b) A passive Ability applies while its revealed card is
	  [[Enabled]] and ControlledBy the player on the Field.
	- c) A timed Ability resolves at its named [[Turn]] step. Remove
	  passive and timed effects from the rule that participant Pluses
	  sum.
- [ ] **S31. One verb for each build action.** Raise/Produce and
  Heal/Fix are four flavour names of [[Create]] and [[Recover]],
  listed on their pages; Upgrade's Grow/Enhance carry rules:
	- a) Use Create and Recover in rules and cards for both Origins.
	- b) Keep the flavour words in art or notes only, if wanted.
	- c) This removes four terms without removing a rule or decision.
- [ ] **S32. One meaning of starter.** **Starter** is both the role a
  card has in every action and a [[Starter|Technology]]; P27 also
  calls four initial deck cards "starters":
	- a) Keep **starter** only for the card selected to begin an
	  action.
	- b) Rename the Technology to **Field Start** or **Initiative**.
	- c) Call the P27 cards **starting cards**.
- [ ] **S33. Drop worker placement from the genre.** [[index]] calls
  the game worker placement, while [[ComparisonReview]] correctly says
  Slots limit presence and are not action spaces:
	- a) Use ComparisonReview's **card-driven spatial 4X with deck and
	  engine building** everywhere.
	- b) No rule changes; the shorter description avoids promising a
	  mechanic the game does not have.
- [ ] **S35. One build direction.** [[Create]] 6 and [[Upgrade]] 4
  each define directions for the same two actions, [[Settle]] adds
  a third; today a hub in a [[Disputed]] Star still builds Actors
  (it is the destination) but not Structures (it is the source):
	- a) The source is the hub's [[Star]], the destination is the Star
	  of the card: where a [[Structure]] is or goes; a card in
	  [[Home]] has the hub's Star as both ends, [[Distance]] 0.
	- b) Settle: the Ship's Star is both ends, no hub.
	- c) State it once, in [[Hub]]; the three action pages keep only
	  requirements, Cost and outcome.
	- d) What it changes: an Actor is built only with cards at the hub
	  as direct participants, not at another source Star, and a hub in
	  a Disputed Star builds nothing.
- [ ] **S41. End of a face-down card.** [[End]] 7 sets the end in use:
  in a [[Slot]] the visible end, elsewhere the selected end. A
  face-down card shows no Level, though [[Recover]] costs the current
  [[Level]] of a [[Damaged]] card:
	- a) The end in use of a face-down card is its weak end.
- [ ] **S42. One list of what a card gives.** [[Ability]] 3 lists
  Primary, Secondary, [[Range]], [[Capacity]] and Level with Class;
  [[Support]] 2 lets a supporter pick one of four, without Level;
  [[Combat]] adds [[Defense]]; [[Plus]] 3.5 limits a Range Plus to
  [[Move]], though Range is checked in every action:
	- a) One list in Ability: Primary, Secondary, Range, Capacity,
	  Level with Class, Defense in Combat. A direct participant gives
	  all, a supporter one.
	- b) Support 2 and Plus 3.5-3.6 link it; a Range Plus adds to any
	  group.
	- c) It answers I83 a and whether a supporter's Level is its one
	  Ability for [[Prerequisites]]. Recommended: yes.
- [ ] **S43. Control by own cards.** [[Control]] 2 counts a faction's
  cards in a Star: does a captured rival [[Structure]],
  [[ControlledBy]] the faction, count?
	- a) Only own cards count: a captured Structure gives no Control.
- [ ] **S45. One Culture count.** [[Goal]] 3.2 makes two sums:
  [[Colony]] Levels on the [[Field]] and [[CulturePoints]] of active
  cards. The first counts Damaged Colonies, which stay
  [[ControlledBy]] the Star's controller; no [[Deck]] card prints
  CulturePoints:
	- a) A Colony's CulturePoints default to its current Level, other
	  cards 0.
	- b) The Culture path sums CulturePoints of [[ActiveFor|active]]
	  cards, or of cards that count for goals with S23 b: Damaged
	  Colonies stop counting.
	- c) Goal 3.2.1 goes, CulturePoints gets used in core.
- [ ] **S47. One Home pile table.** Ten pile pages state visibility
  and entry in different words, some not at all:
	- a) [[Factory]], [[Laboratory]] and [[History]] don't say who
	  sees them.
	- b) [[Destroy]], [[Recall]], [[Express]] and [[MinusDeplete]] put
	  a card on top, [[Upgrade]] 7.2 and [[Research]] 2.1 don't say
	  where in [[Factory]].
	- c) Galaxy piles and secret [[Objective]]s use the Field state
	  [[Hidden]] for face down.
	- d) One table in [[Home]]: pile, owner, face up or down, who sees
	  it.
	- e) One rule: a card put into a pile goes on top; in a row of
	  piles the player picks the pile.
	- f) Piles are face up or face down, not Hidden, as S25 a. Pile
	  pages keep only their own behavior, e.g.
	  [[DeckBuilding|Shuffle]] for Reserve.
- [ ] **S52. Traits in core.** [[Trait]] and [[NoSupport]] are `core`,
  but no card has a Trait:
	- a) Trait and NoSupport go to `advanced`, or wait for P58.

## Ideas

Not for answering now, kept for later.

- **Policies** (TtA governments, Civilization policies): one Policy
  card in [[Home]] giving a [[Plus]]: Hand size, Range, Energy.
  Changed by an action. `advanced`.
- **Energy as an extra action** (Voidfall trade tokens): spend 2
  [[Energy]] to let a Field card act without a starter from Hand
  ([[Starter]]). Alternative to [[Boost]].
- **Center prize** (TI Mecatol Rex): Star 11 of the first duel has a
  fixed World with the best Ability, e.g. [[DeckBuilding|Draw]] 1.
- **Derelict row** (TtA card row): [[Derelict]]s get cheaper the
  longer they wait.
- **Upkeep at Shuffle** (Voidfall, Eclipse), only if the leader
  snowballs in playtests: 1 Energy per Star beyond 3.
- **One Space per side**: halves first-duel tiles (24 → 12) and
  Explore actions, at the price of a single route between two Stars.
- **Drones** (TI fighters): Range 0 Military Units carried by ships,
  if [[Capacity]] needs more use.
- **Asymmetry**: one faction card with a single rule change on top of
  mirrored decks (TI faction abilities), keeps [[GameBalance]] even.
