---
date: 2026-10-10
updated: 2026-10-26
status: WIP
scope: meta
---

# Backlog

Open items of the rules, design and simplification reviews, aimed at
a **minimal playable duel**: 2 players, no [[GalaxyDeck]], playable
with an AI from the notes alone. Items keep their review numbers:
issues `I<n>`, proposals `P<n>` and simplifications `S<n>`. Other
games are compared in [[ComparisonReview]]. [[Diagnostic]] tests each
issue with one multiple-choice question. [[ReviewProcess]] sets when
an item opens and closes.

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
8. **Failed action**: it costs all its participants, a take-back
   (P34) and a visible Explore Price (S20) were rejected, see
   [[PerformAction]]
9. **World deck**: every [[World]] card, not a picked set (P36 i),
   see [[Duel]]
10. **Combat order**: the attacker selects the first defenders, then
    rounds of any number of cards; all defenders at once, one card at
    a time (P28) and one sealed round (S70) were rejected, see
    [[Combat]]
11. **Defense**: a [[Military]] card defends with its Level, not its
    [[MilitaryPower]] (P62, S69), see [[Defense]]
12. **Academy defenders** stay in `duel`; a Hero sent to the Factory
    (S25 b) and wounds cycling in the deck (I76 c) were rejected, see
    [[Academy]]
13. **Technologies without cards** go on the TBD ends of the cards
    6/5 and 8/7, not in place of duplicates on low cards (P25), see
    [[Technology]]
14. **`X+Y` power** stays, though no card prints `+Y` yet (S58 a),
    see [[PrimaryAbility]]
15. **Hubs**: a faction without a hub builds nothing until it
    captures one, no global hub (I19 d), see [[Hub]]
16. **Trade between factions**: [[Export]], [[Smuggle]] and [[Sell]]
    work in a duel with the rival, not only in [[Politics]] (P57 e)
17. **Game finish**: [[Military]] wins immediately; [[Singularity]],
    7 possessed [[Hyperstructure]]s or
    [[GalacticDiaspora|Galactic Diaspora]] trigger [[Twilight]]. The
    most achievements in the current state wins, then
    [[VictoryPoints]] break a tie (I77, I78, I95 a)
18. **Victory points**: the current Levels of non-Damaged cards on the
    Field controlled by the faction; [[Objective]]s can add points

## Next step

1. Play the first duel, on paper or AI-vs-AI from the `core` and
   `duel` notes
2. Note every rule that stopped play or was read two ways
3. Only those notes become review items

## First duel

Items that block the first duel, [[Guidance]] has the recommended
answers.

### Setup

- [ ] **P27. First duel setup** in [[StartDraw]], from the [[Deck]]:
	- e) One pile per [[Type]], lowest [[Level]] on top.

### World deck

- [ ] **I57. World cards.** The first duel shuffles every [[World]]
  card into the World deck, each prints one [[Ability]], but there
  are no World cards yet: to prepare. → P36
- [ ] **P36. World Abilities** for the World cards:
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
	  of [[Ancient]]s guarding it. Energy is above Power: any class,
	  anywhere, kept between Turns.

### Combat

- [ ] **S26. All Combat cards from Hand are face down.** [[Combat]]
  gives a special bluff to "Hidden cards from Hand", although Hand is
  already secret and Hidden is otherwise a Field state:
	- a) Every Combat supporter from Hand is committed face down.
	- b) Reveal the Hand commitments only at resolution, with the
	  Hidden cards; remove the special Hidden-Hand rule. A [[Hidden]]
	  card is still revealed by its player at any time.
	- c) Bluffing stays, with one commitment procedure and no state
	  change.

## Watch in playtest

Questions a played game answers better than a review.

- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak
  cards, the [[Tool]]s first, and cycle only strong ones. Free
  [[Slot]]s limit it. To be worked out in [[GameBalance]].
- [ ] **I79 b. Legacy thins the deck** like I46: keep [[Legacy]] in
  `objectives` or drop it?
- [ ] **I75 a. Actions per Turn.** [[GameBalance]] expects about 5
  actions per Turn, but every Hand action takes a starter and usually
  supporters: 2-3 is likelier.
- [ ] **I75 f. Militarization Defense.** In the [[Deck]] the [[Plus]]
  Defense of [[Militarization]] cards was set to raise Defense 1 to
  the end's [[Level]], but [[Military]] cards defend with their
  Level, see [[Defense]]: revise the values?
- [ ] **P66. Weak Structure ends.** Weak ends can provide abilities,
  just weaker ([[End]] 7), but every weak Structure end in the
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
  with the [[Deck]] Levels, a big Range is fine; Spaces get longer
  later:
	- a) Only outer Spaces get longer, a Space between neighbour Stars
	  keeps length 1: cards up to 4/3 still cross the map.
	- b) Lengthen when cards 6/5 and 8/7 are in play, after
	  playtests of the 56-card Deck.
- [ ] **P35. First duel Space set** in [[Duel]], after P24,
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

- [ ] **I19. Deck review.**
	- e) The 12 cards 6/5 and 8/7 are TBD in the [[Deck]]:
	  technologies and Hyperstructure Primary, to design before the
	  next playtest. Their TBD ends carry [[Express]],
	  [[ForceDiscard]], [[Settle]], the `+Draw` [[Plus]] and the
	  technologies from [[Tactics]] to [[Standby]], see
	  [[Technology]]: a value per Price stays about flat, a value per
	  card grows with Level.
- [ ] **I47. Images.** Update `card.png` after the rules and card
  data are settled: annotate both ends, ExtraPrice, Prerequisites and
  the technology name.

### Economy

All `advanced`.

- [ ] **P57. Economy roles.** One job per stockable resource
  (Eclipse, TtA: materials build, money is the wildcard):
	- a) [[Materials]] pay [[Create]], [[Upgrade]] and [[Recover]]
	  costs at a [[Hub]] in the Star where they are: [[Extract]] at
	  [[Asteroids]], carried to the Shipyard.
	- b) [[Energy]] [[Boost]]s any action (already in `core`).
	- c) [[Trade]] turns power into Energy between two own Colonies: a
	  trade route.
- [ ] **S39. One conversion outcome.** [[Extract]] and [[Trade]] both
  convert power to [[Materials]] one to one:
	- a) Define **conversion** once in [[Materials]]: the action's
	  power becomes Materials one to one in the source [[Star]].
	- b) The pages keep only what they convert: [[Asteroids]], a trade
	  route, unless P57 c turns Trade into Energy.

### Victory and extensions

- [ ] **I43. Objectives details.** [[Objective]] (`objectives`):
	- a) The list of objectives.
	- b) Whether Objective points can win before [[Twilight]], and at
	  what threshold.
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
  stronger factions: do [[VictoryPoints]] measure strength?

### Additions

- [ ] **P58. Traits instead of new Types.** Variety via [[Trait]]s:
	- a) `Unique`: one per faction on the [[Field]], for flagships and
	  top Heroes (TI).
	- b) `Consumable`: [[Destroy]] after use: probes, mines,
	  missiles, Galaxy [[Tool]]s.
	- c) `Immovable`: can't move or be cargo, replaces "cannot be
	  cargo" of [[World]] and [[Hyperstructure]].
	- d) Card orientations are all taken (strong and weak front,
	  Damaged and Hidden back), so new states should come from
	  position, like [[ActiveFor]] and [[Pinning]], not markers.

### Stubs and underdescribed

- [ ] **P59. Stubs** (`status: stub`):
	- c) [[PlusHero]]: remove, [[Create]] of Heroes covers it.
- [ ] **I94. Underdescribed technologies.** Their pages don't say
  enough to play them, stubs are in P59:
	- c) [[PlusPile]]: the Cost, the limit and how an extra pile
	  works.

## Core streamlining

Proposals of the 2026-10-25 review of `core`: each removes an
exception, a concept or a page. Plain duplicates are already removed.
RG, PR and F numbers refer to the AI duels in `FirstDuelPlaytest.md`.

- [ ] **S53. Deplete by Role.** [[Deplete]] spares direct
  participants that moved or fought, card by card: a fighting
  [[Structure]] never depletes, a free reusable +2 (RG2-7), while
  Units waiting at a [[Move]] destination, which pull the group in, go
  to [[Discard]]:
	- a) A Structure participant always becomes [[Depleted]].
	- b) A [[Unit]] direct participant of a Move or a [[Combat]] holds
	  its Slot, every other Unit goes to Discard.
	- c) Move 6 and Combat 9.4 state b), Deplete keeps only the two
	  outcomes. Recommended: yes.
- [ ] **S54. Act from an active Star.** [[Takeoff]] goes to a Star
  [[ActiveFor]] the player, a [[Disputed]] one too, but an action
  needs a controlled source, and [[Intercept]] patches it with "even
  if the Star is Disputed now" (F1, RG1-10):
	- a) [[PerformAction]] source: the [[IPS]] of a Star ActiveFor the
	  player.
	- b) Intercept drops "even if…"; Disputed note 1 becomes "a front:
	  the tied factions take off and act there".
	- c) Lost: a front as dead ground. Gained: a faction fights back
	  from its Disputed home.
- [ ] **S55. Control by Unit, one ControlledBy rule.** [[Control]]
  ranks [[Actor]] over [[Structure]], but a card back shows only Unit
  or Structure, [[ControlledBy]] doesn't cover an Enabled [[Tool]],
  and a Disputed Star leaves other factions' Structures out of
  control:
	- a) Control levels: none, Structure, **Unit**.
	- b) ControlledBy: a card is controlled by its [[Faction]], but a
	  Structure or a [[Damaged]] card in a Star a rival controls is
	  that rival's. ControlledBy 4 and [[Disputed]] 3 go, "out of
	  control" goes.
	- c) Control merges into ControlledBy, one page less.
	- d) Optional: Unit replaces Actor in core, Actor goes, Tool says
	  it starts no action.
- [ ] **S56. Class handles only Structures as cargo.** [[Move]] 5.2
  needs a Ship whose [[Class]] handles each cargo card, then [[Hero]]
  8, [[Tool]] 8 and [[Materials]] 3 let any Ship carry theirs:
	- a) Only a [[Structure]] needs a Ship whose Class handles it.
	  Hero 8, Tool 8 and "by any Ship" go.
	- b) Or no Class for cargo and [[Manage]]: Manage is paid in the
	  starter's power on any card, Class 5 and Move note 1 go. Lost:
	  colony ships, Science as the universal manager.
	- c) Recommended: a.
- [ ] **S57. One weight, one price.** [[Size]] is Level +
  [[ExtraPrice]] except a Hero's, and ExtraPrice has an "at least 1"
  clamp that no card triggers:
	- a) Size = current Level for every card: Hero 6 and the Size
	  lines go. Bases and Colonies weigh 1 less.
	- b) Or each End prints its [[Price]] instead of ExtraPrice: cargo
	  weighs the Price of its End in use, ExtraPrice and Size go.
	  Heroes weigh 1 more unless Hero keeps "weighs its Level".
	- c) Either way, drop negative ExtraPrice and its clamp: no card
	  has one.
- [ ] **S58. Rules no card needs in core.**
	- c) [[Create]] 4, a Social card only with weak Level 1, depends
	  on the Deck's Levels and conflicts with [[Hyperstructure]] 9.1:
	  move it to [[Social]], or make it "Create makes only cards with
	  a Level 1 End" for both Origins, so higher cards come by
	  [[Upgrade]], which slows the race of F2.
- [ ] **S59. Destroy returns a card to its supply.** [[Destroy]] sends
  a card to the [[Factory]], but a [[World]] goes under the World
  deck, [[Ancient]]s to their discard and a [[Tool]] out of the game:
	- a) Destroy: a faction card to the top of a Factory pile of the
	  player's choice, a card of no player under its deck.
	- b) World 14 and the Ancient discard with its reshuffle go, Tool
	  keeps its own exception.
- [ ] **S60. Conquest without loops.** A conquest draws Worlds until
  one meets the participants' [[Prerequisites]], then as many
  [[Ancient]] cards as its Price; Ancients take no Slot, print their
  own Defense, never get Damaged, need a discard and a reshuffle. All
  Combats of the AI duels were against Ancients, won by the attacker:
	- a) Ancients are a number: they defend with N × the World's
	  [[Price]], no Ancient deck, the playtest sets N.
	- b) Lighter: keep the Ancient deck, the Ancients defend with
	  their total and go under the deck after the Combat.
	- c) The attacker takes the top World: Worlds have no
	  Prerequisites, P36 gives them none.
	- d) Or the [[Scenario]] deals a face-down World into the World
	  slot of every Wild Star, an [[Attack]] reveals it and a won one
	  turns it Ready: the World deck and its draw go, [[Explore]] can
	  scout a World.
- [ ] **S61. Attack is a Move that must win.** [[Intercept]] is a
  Combat that is "not an Attack": no starter, no Military Actor, the
  newcomers defend; [[Combat]] 9.3 is a second move rule:
	- a) [[Attack]] is a [[Military]] [[Move]] that must win a Combat
	  in its destination, the source Star too; a Move to another Star
	  with rival Enabled cards is an Attack.
	- b) If the attacker wins, the surviving moving cards arrive with
	  their cargo, the others stay.
	- c) Intercept, Combat 9.3 and [[Pinning]]'s "it can finish there"
	  go; a Move of only [[Hidden]] cards is no Attack.
	- d) Lost: entering a rival Star in peace, the free answer to a
	  rival Create. Intercept was chosen for F1: test, don't default.
- [ ] **S62. Move within a Star for every card.** [[Move]] needs Range
  above 0, though [[Distance]] within a Star is 0, and [[Manage]]
  Shift patches it for Structures:
	- a) Move: any card to another Slot of its row in the same Star,
	  cards with Range above 0 to another Star.
	- b) Manage Shift between Slots goes: a rearrangement costs a
	  starter instead of 1 power per card (RG3-3).
- [ ] **S63. One way to move a Laboratory card.** [[Research]] 2.2
  moves cards between [[Laboratory]] piles like a Science [[Manage]]
  Shift, and Laboratory 4 makes both cost 1 per card:
	- a) Research 2.2 and Laboratory 4 go. The only change: a
	  non-Science starter moves only the cards its Class handles.
	- b) Also no Shift between piles: piles keep their order, the
	  setup order steers the tech tree, F2 found the lever too strong.
- [ ] **S64. Energy as open wild power.** [[Energy]] tokens are "in
  Hand", but don't count to its size, stay at Draw, lie open and have
  their own cap; [[Boost]] caps each card by Capacity; [[Resource]]
  exists to say "stockable":
	- a) Energy lies open in the player's stock beside [[Home]]:
	  Energy 5-6 and "in Hand" go.
	- b) 1 Energy pays 1 power of any Class in an action the player
	  starts or joins, no card cap and no Hand cap: Boost and Resource
	  go. The cap was never reached and Energy was marginal.
	- c) Lost: channelling Energy through cards, the hoarding limit.
- [ ] **S65. Range and Capacity aren't the one Ability.** [[Ability]]
  3 lists [[Range]] and [[Capacity]], then [[Support]] 1.2 and PR-11
  exempt reaching and boosting from a supporter's one Ability:
	- a) A card's Range and Capacity count for its own group, they are
	  not the one Ability. Support 1.2's clause goes.
	- b) Or a Hand card gives no Range or Capacity: Support 2.3-2.4
	  and the Range from Support in Range 4 go. Lost: reaching with
	  Hand cards.
	- c) An alternative to S42 a.
- [ ] **S66. Destination cards add Range to any action.** Only in a
  [[Move]] (4.1) do the direct participants in the destination add
  their Range to the moving group:
	- a) [[PerformAction]] 4.3: the cards in the destination add their
	  Range to the source group, Move 4.1 keeps only Capacity.
	- b) A garrison helps every action reach it: an Attack from two
	  sides, Explore, Create.
- [ ] **S67. Immediate is a technology, not an action.**
  [[ImmediateAction]] is an Action without a starter, a Direction, a
  Cost or other participants, though every action has a starter:
	- a) An **Immediate** technology works when its card is shown,
	  then the card [[Deplete]]s, at own Turn or in a Combat.
	- b) ImmediateAction 2-4 go, six [[Technology]] rows change Kind.
	  A lone Immediate is no move for [[Turn]] 3.
- [ ] **S68. Hidden in one rule, in `duel`.** Only [[Stealth]] makes a
  card [[Hidden]] (Settled 3), yet core carries its rules:
	- a) A Hidden card counts as a Level 1 card of its [[Role]], a
	  Unit as a Ship: Range 1, Capacity 1, Size 1. Hidden 4.1-4.4
	  become one rule.
	- b) Hidden and the Hidden clauses of [[Combat]] move to `duel`,
	  core keeps the back ends of [[End]] and [[Side]].
- [ ] **S71. Distance counts Spaces only.** [[Distance]] sums all
  tiles but the first, a Star as 1 and a Space as its length, and
  Spaces link along hex edges:
	- a) A route alternates Star and Space, its Distance is the sum of
	  its Spaces' lengths.
	- b) Every Space prints its length 1 higher, the duel's become 2,
	  Star to Star Distances stay. Edge routes go, PR-3 dropped them.
- [ ] **S72. Two Turn phases.** **Play**, then **End**: check the
  [[Goal]], discard, Draw, [[Restore]] 3. About ten "X phase"
  references become "end of own Turn".
- [ ] **S73. Fewer pages and terms**, no rule changes:
	- a) One table in [[Card]]: Type, Role, Origin, Range, cargo, and
	  "Size and Capacity are the current Level unless the card's page
	  says otherwise". The property lines of the card pages go,
	  checkdocs `check_templates` changes.
	- b) One table in [[State]]: Side and End of each state, the "is:
	  Side up, End up" lists go.
	- c) The four Power pages and [[Resource]] fold into [[Class]] and
	  [[Power]].
	- d) [[IPS]] goes, rules say Star: this also settles whether the
	  World slot is in the IPS, so a [[World]] is a direct
	  participant.
	- e) [[Enabled]] goes, rules say "face up".
	- f) [[Direction]] and [[Action]] fold into [[PerformAction]].
	- g) [[Agenda]] moves to an extension scope, [[World]] and
	  [[Ancient]] have no Faction, [[Faction]] 4 goes: core stops
	  naming the [[Galaxy]].
	- h) The Cards column of [[Technology]] goes, [[Deck]] holds the
	  assignments, checkdocs drops the cross-check.
- [ ] **S74. Bigger cuts, speculative.**
	- a) Restore every Structure at **Restore**: Plus Restore and the
	  throttle of [[GameBalance]] 5 go.
	- b) A card that loses a Combat is Destroyed at once: Damaged,
	  [[Recover]] and the Chess check go.
	- c) [[Pinning]] and [[Intercept]] as one contact rule: a group
	  entering a Star with rival Military Actors stops, the rival may
	  fight it at once.
	- d) No cargo: Range 0 cards move inside a group; Size, the cargo
	  half of Capacity and the Class table go. Lost: logistics.

## Editorial

One batch after the playtest, only for pages that confused play.

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
- [ ] **S25. Home cards have no Field state.** A card back means
  [[Hidden]] or [[Damaged]], but [[Reserve]] is face down as a pile:
	- a) In [[Home]], the pile determines visibility and cards are
	  usable unless they are in Factory or Laboratory. Side and End
	  states apply only to cards individually on the Field.
- [ ] **S31. One verb for each build action.** Raise/Produce and
  Heal/Fix are four flavour names of [[Create]] and [[Recover]],
  listed on their pages; Upgrade's Grow/Enhance carry rules:
	- a) Use Create and Recover in rules and cards for both Origins.
	- b) Keep the flavour words in art or notes only, if wanted.
	- c) This removes four terms without removing a rule or decision.
- [ ] **S32. One meaning of starter.** **Starter** is both the role a
  card has in every action and a [[Starter|Technology]]:
	- a) Keep **starter** only for the card selected to begin an
	  action.
	- b) Rename the Technology to **Field Start** or **Initiative**.
- [ ] **S33. Drop worker placement from the genre.** [[index]] calls
  the game worker placement, while [[ComparisonReview]] correctly says
  Slots limit presence and are not action spaces:
	- a) Use ComparisonReview's **card-driven spatial 4X with deck and
	  engine building** everywhere.
	- b) No rule changes; the shorter description avoids promising a
	  mechanic the game does not have.
- [ ] **S35. One build direction.** [[Create]] 6 defines two
  directions, [[Upgrade]] 4 one, [[Settle]] adds a third; today a
  hub in a [[Disputed]] Star still creates Actors (it is the
  destination) but not Structures (it is the source):
	- a) The source is the hub's [[Star]], the destination is the Star
	  of the card: where a [[Structure]] is or goes, as Upgrade 4
	  has it; a card in [[Home]] has the hub's Star as both ends,
	  [[Distance]] 0.
	- b) Settle: the Ship's Star is both ends, no hub.
	- c) State it once, in [[Hub]]; the three action pages keep only
	  requirements, Cost and outcome.
	- d) What it changes: an Actor is built only with cards at the hub
	  as direct participants, not at another source Star, and a hub in
	  a Disputed Star builds nothing.
	- e) An action on a [[Home]] card is directed to a hub of the
	  card's [[Origin]]: said once in [[Hub]], [[Research]] 3,
	  [[Manage]] 2.2.2 and Create 6.1 go; "corresponding Hub" is
	  defined nowhere (RG2-1, RG3-7, RG1-10).
- [ ] **S41. End of a face-down card.** [[End]] 6 sets the end in use:
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
	- c) It answers whether a supporter's Level is its one Ability for
	  [[Prerequisites]]. Recommended: yes.
- [ ] **S43. Control by own cards.** [[Control]] 2 counts a faction's
  cards in a Star: does a captured rival [[Structure]],
  [[ControlledBy]] the faction, count?
	- a) Only own cards count: a captured Structure gives no Control.
- [ ] **S47. One Home pile table.** Ten pile pages state visibility
  and entry in different words, some not at all:
	- a) [[Factory]], [[Laboratory]] and [[History]] don't say who
	  sees them. The leader check of [[Goal]] counts the Heroes in
	  Factory and Laboratory: recommended open, like [[Discard]].
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
