---
status: living
scope: meta
---

# Backlog

Open items of the rules, design and simplification reviews, aimed at
a **minimal playable duel**: 2 players, no [[GalaxyDeck]], playable
with an AI from the notes alone. Items keep their review numbers:
issues `I<n>`, proposals `P<n>` and simplifications `S<n>`. Other
games are compared in [[ComparisonReview]]. [[Diagnostic]] tests each
independent point of an issue with an atomic multiple-choice
question. [[ReviewProcess]] sets when an item opens and closes.

Answer by number and letter, e.g. "P27 a, c", "S41 no".

## Settled

[[Rules]] that kept coming back in reviews. Reopen one only with
evidence from a played game, not from a review.

1. No new review items before the first [[Duel]] is played
2. **Range**: a [[Group]]'s [[Range]] is the sum of its [[Card]]s'
   [[Range]]s, checked only for [[Group]]s outside the
   [[Destination]], see [[Range]], [[PerformAction]]
3. **Hidden**: only by [[Stealth]], moves with [[Range]] 1 and
   [[Capacity]] 1, revealed at the [[Combat]] reveal; a [[Hand]]
   [[Card]] joins a [[Combat]] face up, all [[Hand]] commitments face
   down (S26) were rejected, see [[Hidden]]
4. **Control**: strictly the highest [[Control]] controls a [[Star]],
   a tie makes it [[Disputed]], see [[ControlledBy]]; a [[Faction]]
   takes off and acts in a [[Star]] where nobody outranks it, a
   [[Disputed]] front as dead ground was dropped (S54), see
   [[ActiveFor]]
5. **Explore**: one [[Technology]], [[Recon]] and [[Survey]] are its
   flavour names, see [[Explore]]
6. **Build**: [[Create]], [[Upgrade]] at a [[Hub]]; [[Recover]]
   from the [[Card]] that provides it
7. **Field start**: a [[Field]] [[Card]] starts an [[Action]] only
   with [[Starter]], `advanced`
8. **Failed action**: it costs all its [[Participants]], a take-back
   (P34) and a visible [[Explore]] [[Price]] (S20) were rejected, see
   [[PerformAction]]
9. **World deck**: every [[World]] [[Card]], not a picked set (P36 i),
   see [[WorldDeck]]
10. **Combat order**: the [[Attacker]] selects the first
    [[Defender]]s, then rounds of any number of [[Card]]s; all
    [[Defender]]s at once, one [[Card]] at a time (P28) and one sealed
    round (S70) were rejected, see [[Combat]]
11. **Defense**: a [[Military]] [[Card]] defends with its [[Level]],
    not its [[MilitaryPower]] (P62, S69), see [[Defense]]
12. **Academy defenders** stay in `duel`; a [[Hero]] sent to the
    [[Factory]] (S25 b) and wounds cycling in the deck (I76 c) were
    rejected, see [[Academy]]
13. **Technologies without cards** go on the TBD [[End]]s of the
    [[Card]]s 6/5 and 8/7, not in place of duplicates on low [[Card]]s
    (P25), see [[Technology]]
14. **`X+Y` power** stays, though no [[Card]] prints `+Y` yet (S58 a),
    see [[PrimaryAbility]]
15. **Hubs**: a [[Faction]] without a [[Hub]] builds nothing until it
    captures one, no global [[Hub]] (I19 d), see [[Hub]]
16. **Trade between factions**: [[Export]], [[Smuggle]] and [[Sell]]
    work in a duel with the rival, not only in [[Politics]] (P57 e)
17. **Game finish**: [[Military]] wins immediately; [[Singularity]],
    7 possessed [[Hyperstructure]]s or
    [[GalacticDiaspora|Galactic Diaspora]] trigger [[Twilight]]. The
    most achievements in the current state wins, then
    [[VictoryPoints]] break a tie (I77, I78, I95 a)
18. **Victory points**: the current [[Level]]s of non-[[Damaged]]
    [[Social]] [[Card]]s on the [[Field]]
    [[ControlledBy|Controlled by]] the [[Faction]]; [[Objective]]s can
    add points, a win by [[Objective]] points before [[Twilight]] was
    rejected (I43 b)
19. **Space length**: a [[Space]] counts its printed [[Length]]
    whatever its [[Type]]; a [[BlackHole|Black hole]] of [[Length]] 0
    (P24 [[BlackHole|Black hole]] a and the [[Length]] of b) and a
    [[Void]] of [[Length]] 2 with [[Navigation]] (P24 [[Void]] b) were
    rejected, see [[Space]], [[Distance]]
20. **Void**: a route can't pass it, a [[Move]] with [[Navigation]]
    can; a [[Void]] never passable (P24 [[Void]] c) was rejected, see
    [[Void]]
21. **Asteroids**: only [[Extract]]; cover, narrow and rough (P24
    [[Asteroids]] b-d) were rejected, see [[Asteroids]]
22. **Duel Space tiles**: every [[Space]] position holds a [[Tile]],
    the outer sides too; empty outer sides (P35 a) were rejected, see
    [[Duel]]
23. **Symmetric Human and Alien**: the same [[Deck]] by [[Card]]
    values, only color and design differ; Human or Alien
    [[Technology|Technologies]] and a [[Faction]] [[Card]] on mirrored
    decks ([[Ideas]]: Asymmetry) were rejected, asymmetry is for
    later [[Faction]]s, see [[Faction]]
24. **Piles**: the order of [[Factory]] and [[Laboratory]] piles is a
    subgame, players move [[Card]]s between them thinking ahead; one
    pile per [[Type]] with the lowest [[Level]] on top (P27 e) was
    rejected, see [[Laboratory]]
25. **Black hole**: passable both ways; one-way, only away from the
    nearest home [[Star]] (P24 [[BlackHole|Black hole]] c), was
    rejected, see [[BlackHole]]

## Next step

1. [[Play]] the first [[Duel]], on paper or AI-vs-AI from the `core`
   and `duel` notes
2. Note every rule that stopped play or was read two ways
3. Only those notes become review items

## Watch in playtest

Questions a played game answers better than a review.

- [ ] **I46. Deck thinning by Takeoff.** A player can take off weak
  [[Card]]s, the [[Tool]]s first, and cycle only strong ones. Free
  [[Slot]]s limit it. To be worked out in [[GameBalance]]. Seen in
  game 3 of the first duel playtest: the Turtle took off every other
  [[Card]] to keep its [[Discard]] small and drew the new [[Ship]] 4P
  at the next [[Shuffle]].
- [ ] **I79 b. Legacy thins the deck** like I46: keep [[Legacy]] in
  `objectives` or drop it?
- [ ] **I75 a. Actions per Turn.** [[GameBalance]] expects about 5
  [[Action]]s per [[Turn]], but every [[Hand]] [[Action]] takes a
  [[Starter]] and usually [[Supporter]]s: 2-3 is likelier.
- [ ] **I75 f. Militarization Defense.** In the [[Deck]] the [[Plus]]
  [[Defense]] of [[Militarization]] [[Card]]s was set to raise
  [[Defense]] 1 to the [[End]]'s [[Level]], but [[Military]] [[Card]]s
  defend with their [[Level]], see [[Defense]]: revise the values?
- [ ] **P66. Weak Structure ends.** [[Weak]] [[End]]s can provide
  [[Ability|Abilities]], just weaker ([[End#7]]), but every [[Weak]]
  [[Structure]] [[End]] in the [[Deck]] has no [[SecondaryAbility]]:
	- a) [[Weak]] [[End]] Secondary is one less than the [[Strong]]
	  [[End]]'s: [[Colony]] 2x +1, [[Base]] 4x +2, [[Colony]] 4x +3,
	  [[Base]] 2x stays without.
	- b) A [[Depleted]] [[Structure]] then still gives some [[Power]],
	  so [[Restore]] matters less: an alternative to a) is +1 on 4x
	  [[Weak]] [[End]]s only.
- [ ] **I81. Combat damage, to brainstorm.** [[Combat#9.1]]-2 Damage
  every [[Direct participant]] the winner doesn't save by the
  [[Advantage]], on both sides; [[Supporter]]s only [[Deplete]]:
	- a) Exploit: one cheap [[Military]] [[Ship]] plus [[Hand]]
	  [[Supporter]]s aiming at a tie. [[Advantage]] 0 saves nothing,
	  so the [[Defender]]'s whole garrison is [[Damaged]] for a
	  [[Level]]-2 [[Ship]].
	- b) Garrisons are a liability: the more [[Defender]]s in a
	  [[Star]], the more a narrow win costs.
	- c) Option: the loser's [[Supporter]]s get [[Damaged]] too, the
	  winner's only [[Direct participant]]s. Fighting from [[Hand]]
	  stops being free, but a narrow win still costs the winner the
	  garrison.
	- d) Option: the loser's [[Direct participant]]s set the winner's
	  loss: the winner Damages own [[Direct participant]]s of total
	  [[Level]] at least the loser's direct total, chosen by the
	  winner.

## After the first duel

### Space types

The first [[Duel]] keeps [[Space]]s of [[Length]] 1.

- [ ] **I49. Space types.** → P24, P35
	- a) [[Space]] type Nebula has no behavior.
	- b) HyperPass is an idea for an extension.
	- c) The first [[Duel]] has no [[Space]] [[Tile]] set.
- [ ] **P24. Space type behaviors.** No dice: every effect is
  deterministic. Better types cost more to [[Explore]]. Pick one or
  more variants per type, e.g. "P24 Nebula a, c":
	- **Normal** ([[Price]] 2): a) plain, [[Length]] 1. b) [[Length]]
	  1 or 2, longer is cheaper ([[Price]] 1).
	- **Nebula** ([[Price]] 1, obstacle, TI-like): a) a [[Group]]
	  entering it must stop at the next [[Star]], it can't go further
	  this [[Action]]. b) blind: [[Explore]] can't look past it. c)
	  shroud: [[Card]]s passing it may become [[Hidden]] for free. d)
	  static: no [[Support]] from the [[Field]] through it.
	- **[[BlackHole|Black hole]]** ([[Price]] 3): only the [[Price]]
	  is open.
	- **HyperPass** ([[Price]] 4, best, a [[Space]] type): a)
	  [[Length]] 0. b) wormhole pair: two HyperPass [[Tile]]s anywhere
	  are adjacent to each other. c) highway: [[Length]] 0 and
	  [[Move]] [[Cargo]] [[Capacity]] +1.
	- **Relic** ([[Price]] 4, new type, like Eclipse discovery tiles):
	  a) the first explorer takes the top [[Card]] of a [[Laboratory]]
	  pile to [[Factory]]. b) the first explorer gains 2 [[Energy]].
	  Then it's Normal.
	- **[[Supernova]]**: a) impassable, can't be explored, only from
	  an [[Event]] (current). b) also gives +1 [[Power]] of any
	  [[Class]] to [[Action]]s started in a bordering [[Star]].
- [ ] **P67. Longer Space for high Range.** [[Range]] grows up to 8
  with the [[Deck]] [[Level]]s, a big [[Range]] is fine; [[Space]]s
  get longer later:
	- a) Only outer Spaces get longer, a [[Space]] between neighbour
	  [[Star]]s keeps [[Length]] 1: [[Card]]s up to 4/3 still cross
	  the map.
	- b) Lengthen when [[Card]]s 6/5 and 8/7 are in play, after
	  playtests of the 56-[[Card]] [[Deck]].
- [ ] **P35. First duel Space set** in [[Duel]], after P24,
  replacing "every [[Space]] has [[Length]] 1":
	- b) 12 Normal, 2 [[Asteroids]], 2 Nebula, 2
	  [[BlackHole|Black hole]], 2 [[Void]], 2 HyperPass, 2 Relic.
	- c) [[Type]]s whose chosen variants need `advanced` rules are
	  replaced with Normal.
- [ ] **S38. Route details where they belong.** [[Distance]] defines a
  route, [[Void]] says a route can't pass it. Other [[Tile]] rules
  speak of moving [[Card]]s, so it's unclear which [[Range]] checks
  they bind:
	- a) [[Space#6]]: a route can't pass a [[Hidden]] [[Space]].
	- b) [[Supernova]]: a route can't pass [[Supernova]]; today only
	  [[Ship]]s are stopped and [[Hero]]es pass, keep "[[Ship]]s" if
	  that is intended.
	- c) [[Navigation]]: the route of a [[Group]] with [[Navigation]]
	  can pass [[Void]]; [[Jump]]: one [[Hidden]] [[Space]], it gets
	  revealed. Today both name only [[Move]].
	- d) Then remote [[Support]], [[Explore]] reach and [[Create]]
	  placement obey every [[Tile]] rule; only [[Pinning]], by its own
	  words, binds moving [[Group]]s. Recommended: a-c, with "route"
	  for [[Supernova]].

### Deck

- [ ] **I19. Deck review.**
	- e) The 12 [[Card]]s 6/5 and 8/7 are TBD in the [[Deck]]:
	  [[Technology|Technologies]] and [[Hyperstructure]] Primary, to
	  design before the next playtest. Their TBD [[End]]s carry
	  [[Express]], [[ForceDiscard]], [[Settle]], the `+Draw` [[Plus]]
	  and the [[Technology|Technologies]] from [[Tactics]] to
	  [[Standby]], see [[Technology]]: a value per [[Price]] stays
	  about flat, a value per [[Card]] grows with [[Level]].
- [ ] **I47. Images.** Update `card.png` after the rules and [[Card]]
  data are settled: annotate both [[End]]s, ExtraPrice,
  [[Prerequisites]] and the [[Technology]] name.

### Economy

All `advanced`.

- [ ] **P57. Economy roles.** One job per stockable [[Resource]]
  (Eclipse, TtA: materials build, money is the wildcard):
	- a) [[Goods]] pay [[Create]], [[Upgrade]] and [[Recover]] costs
	  at a [[Hub]] in the [[Star]] where they are: [[Extract]] at
	  [[Asteroids]], carried to the [[Shipyard]].
	- b) [[Energy]] [[Boost]]s any [[Action]] (already in `core`).
	- c) [[Trade]] turns [[Power]] into [[Energy]] between two own
	  [[Colony|Colonies]]: a trade route.
- [ ] **S39. One conversion outcome.** [[Extract]] and [[Trade]] both
  convert [[Power]] to [[Goods]] one to one:
	- a) Define **conversion** once in [[Goods]]: the [[Action]]'s
	  [[Power]] becomes [[Goods]] one to one in the [[Source]]
	  [[Star]].
	- b) The pages keep only what they convert: [[Asteroids]], a trade
	  route, unless P57 c turns [[Trade]] into [[Energy]].

### Victory and extensions

- [ ] **I43. Objectives details.** [[Objective]] (`objectives`):
	- a) The list of [[Objective]]s.
	- c) Whether a [[Public objective]] gives more than 1 point.
- [ ] **I44. Politics details.**
	- a) [[StrategyCard]]: the list of roles.
	- b) [[PromissoryNote]]: what each side gets.
	- c) [[PromissoryNote]]: whether the [[Card]] returns to its
	  owner.
- [ ] **I45. Derelict details.** [[Derelict]] (`events`):
	- a) Which [[Star]] a [[GalaxyMove]] puts a [[Derelict]] into.
	- b) The recruit [[Cost]].
- [ ] **I89. Galaxy flow.** [[Galaxy]] (`events`): → P68
	- a) [[Turn]] has no step for the [[GalaxyMove]]: when in the
	  [[Turn]], by whom.
	- b) When a [[Card]] in [[FutureEvents]] is evaluated.
	- c) [[CurrentEvents]] is never used and holds [[Hidden]]
	  [[Card]]s, though an evaluated [[Event]] is revealed. Nothing
	  puts [[Card]]s to [[GalaxyScrap]].
- [ ] **P68. Galaxy events like Through the Ages.** In TtA players
  seed [[FutureEvents|Future events]] and resolve current ones, one
  in, one out. The [[Galaxy]] piles map to its decks: [[FutureEvents]]
  the prepared [[Event]]s, [[CurrentEvents]] the face-down deck to
  resolve, [[GalaxyScrap]] the past [[Event]]s:
	- a) Setup: the [[Scenario]] puts some [[Event]]s face down into
	  CurrentEvents, e.g. players + 2.
	- b) The [[GalaxyMove]] opens each [[Turn]], before **Play**, and
	  the player whose [[Turn]] it is makes it: the [[Hand]] is played
	  knowing the [[Event]].
	- c) Prepare: the player takes the top [[Card]] of the
	  [[GalaxyDeck]]; an [[Event]] goes face down on FutureEvents,
	  only that player knows it; other kinds are played as today.
	- d) Reveal: after an [[Event]] is prepared, the top [[Card]] of
	  CurrentEvents is revealed and resolved by its text, the player
	  decides what the text leaves open ([[Event#6]]).
	- e) Refill: when CurrentEvents is empty at a reveal, FutureEvents
	  is shuffled and becomes CurrentEvents.
	- f) An [[Event]] resolves at once and goes face up to
	  GalaxyScrap. A lasting effect stays on the [[Field]] as a
	  [[Tile]], e.g. [[Supernova]], [[WarpStorm]], never as a [[Card]]
	  in play.
	- g) Choice, like the TtA hand: the player takes the top two
	  [[Galaxy]] [[Card]]s, plays one and puts the other under the
	  GalaxyDeck.

### Additions

- [ ] **P58. Traits instead of new Types.** Variety via [[Trait]]s:
	- a) `Unique`: one per [[Faction]] on the [[Field]], for flagships
	  and top [[Hero]]es (TI).
	- b) `Consumable`: [[Destroy]] after use: probes, mines,
	  missiles, [[Galaxy]] [[Tool]]s.
	- c) `Immovable`: can't move or be [[Cargo]], replaces "cannot be
	  [[Cargo]]" of [[World]] and [[Hyperstructure]].
	- d) [[Card]] orientations are all taken ([[Strong]] and [[Weak]]
	  [[Front]], [[Damaged]] and [[Hidden]] [[Back]]), so new
	  [[State]]s should come from position, like [[ActiveFor]] and
	  [[Pinning]], not markers.

### Stubs and underdescribed

- [ ] **P59. Stubs** (`status: stub`):
	- c) [[PlusHero]]: remove, [[Create]] of [[Hero]]es covers it.
- [ ] **I94. Underdescribed technologies.** Their pages don't say
  enough to play them, stubs are in P59:
	- c) [[PlusPile]]: the [[Cost]], the limit and how an extra pile
	  works.

## Core streamlining

Proposals of the 2026-10-25 review of `core`: each removes an
exception, a concept or a page. Plain duplicates are already removed.
RG, PR and F numbers refer to the AI duels in `FirstDuelPlaytest.md`.

- [ ] **S53. Deplete by Role.** [[Deplete]] spares direct
  [[Participants]] that moved or fought, [[Card]] by [[Card]]: a
  fighting [[Structure]] never [[Deplete]]s, a free reusable +2
  (RG2-7), while [[Unit]]s waiting at a [[Move]] [[Destination]],
  which pull the [[Group]] in, go to [[Discard]]:
	- a) A [[Structure]] participant always becomes [[Depleted]].
	- b) A [[Unit]] [[Direct participant]] of a [[Move]] or a
	  [[Combat]] holds its [[Slot]], every other [[Unit]] goes to
	  [[Discard]].
	- c) [[Move]] 6 and [[Combat#9.4]] state b), [[Deplete]] keeps
	  only the two outcomes. Recommended: yes.
- [ ] **S55. Control by Unit.** [[Control]] ranks [[Actor]] over
  [[Structure]], but a [[Card]] [[Back]] shows only [[Unit]] or
  [[Structure]]:
	- a) [[Control]] levels: [[Structure]], **Unit**.
	- c) [[Control]] merges into ControlledBy, one page less.
	- d) Optional: [[Unit]] replaces [[Actor]] in core, [[Actor]]
	  goes, [[Tool]] says it starts no [[Action]].
- [ ] **S56. Class handles only Structures as cargo.** [[Move#5.2]]
  needs a [[Ship]] whose [[Class]] handles each [[Cargo]] [[Card]],
  then [[Hero]] 8, [[Tool]] 8 and [[Goods]] 3 let any [[Ship]] carry
  theirs:
	- a) Only a [[Structure]] needs a [[Ship]] whose [[Class]] handles
	  it. [[Hero#8]], [[Tool#8]] and "by any [[Ship]]" go.
	- b) Or no [[Class]] for [[Cargo]] and [[Manage]]: [[Manage]] is
	  paid in the [[Starter]]'s [[Power]] on any [[Card]], [[Class]] 5
	  and [[Move#Notes#1]] go. Lost: colony ships, [[Science]] as the
	  universal manager.
	- c) Recommended: a.
- [ ] **S57. One weight, one price.** [[Size]] is [[Level]] +
  [[ExtraPrice]] except a [[Hero]]'s, and ExtraPrice has an "at least
  1" clamp that no [[Card]] triggers:
	- a) [[Size]] = current [[Level]] for every [[Card]]: [[Hero]] 6
	  and the [[Size]] lines go. [[Base]]s and [[Colony|Colonies]]
	  weigh 1 less.
	- b) Or each [[End]] prints its [[Price]] instead of ExtraPrice:
	  [[Cargo]] weighs the [[Price]] of its [[End]] in use, ExtraPrice
	  and [[Size]] go. [[Hero]]es weigh 1 more unless [[Hero]] keeps
	  "weighs its [[Level]]".
	- c) Either way, drop negative ExtraPrice and its clamp: no
	  [[Card]] has one.
- [ ] **S58. Rules no card needs in core.**
	- c) [[Create#4]], a [[Social]] [[Card]] only with [[Weak]]
	  [[Level]] 1, depends on the [[Deck]]'s [[Level]]s and conflicts
	  with [[Hyperstructure#9.1]]: move it to [[Social]], or make it
	  "[[Create]] makes only [[Card]]s with a [[Level]] 1 [[End]]" for
	  both [[Origin]]s, so higher [[Card]]s come by [[Upgrade]], which
	  slows the race of F2.
- [ ] **S59. Destroy returns a card to its supply.** [[Destroy]] sends
  a [[Card]] to the [[Factory]], but a [[World]] goes under the
  [[World]] deck, [[Ancient]]s to their discard and a [[Tool]] out of
  the game:
	- a) [[Destroy]]: a [[Faction]] [[Card]] to the top of a
	  [[Factory]] pile of the player's choice, a [[Card]] of no player
	  under its deck.
	- b) [[World]] 14 and the [[Ancient discard]] with its reshuffle
	  go, [[Tool]] keeps its own exception.
- [ ] **S60. Conquest without loops.** A conquest draws [[World]]s
  until one meets the [[Participants]]' [[Prerequisites]], then as
  many [[Ancient]] [[Card]]s as its [[Price]]; [[Ancient]]s take no
  [[Slot]], print their own [[Defense]], never get [[Damaged]], need a
  discard and a reshuffle. All [[Combat]]s of the AI duels were
  against [[Ancient]]s, won by the [[Attacker]]:
	- a) [[Ancient]]s are a number: they defend with N × the
	  [[World]]'s [[Price]], no [[Ancient deck]], the playtest sets N.
	- b) Lighter: keep the [[Ancient deck]], the [[Ancient]]s defend
	  with their total and go under the deck after the [[Combat]].
	- c) The [[Attacker]] takes the top [[World]]: [[World]]s have no
	  [[Prerequisites]].
	- d) Or the [[Scenario]] deals a face-down [[World]] into the
	  [[World]] [[Slot]] of every [[Wild]] [[Star]], an [[Attack]]
	  reveals it and a won one turns it [[Ready]]: the
	  [[WorldDeck|World deck]] and its draw go, [[Explore]] can scout
	  a [[World]].
- [ ] **S61. Attack is a Move that must win.** [[Intercept]] is a
  [[Combat]] that is "not an [[Attack]]": no [[Starter]], no
  [[Military]] [[Actor]], the newcomers defend; [[Combat#9.3]] is a
  second move rule:
	- a) [[Attack]] is a [[Military]] [[Move]] that must win a
	  [[Combat]] in its [[Destination]], the [[Source]] [[Star]] too;
	  a [[Move]] to another [[Star]] with rival [[Enabled]] [[Card]]s
	  is an [[Attack]].
	- b) If the [[Attacker]] wins, the surviving moving [[Card]]s
	  arrive with their [[Cargo]], the others stay.
	- c) [[Intercept]], [[Combat#9.3]] and [[Pinning]]'s "it can
	  finish there" go; a [[Move]] of only [[Hidden]] [[Card]]s is no
	  [[Attack]].
	- d) Lost: entering a rival [[Star]] in peace, the free answer to
	  a rival [[Create]]. [[Intercept]] was chosen for F1: test, don't
	  default.
- [ ] **S62. Move within a Star for every card.** [[Move]] needs
  [[Range]] above 0, though [[Distance]] within a [[Star]] is 0, and
  [[Manage]] [[Shift]] patches it for [[Structure]]s:
	- a) [[Move]]: any [[Card]] to another [[Slot]] of its row in the
	  same [[Star]], [[Card]]s with [[Range]] above 0 to another
	  [[Star]].
	- b) [[Manage]] [[Shift]] between [[Slot]]s goes: a rearrangement
	  costs a [[Starter]] instead of 1 [[Power]] per [[Card]] (RG3-3).
- [ ] **S63. One way to move a Laboratory card.** [[Research#2.2]]
  moves [[Card]]s between [[Laboratory]] piles like a [[Science]]
  [[Manage]] [[Shift]], and [[Laboratory#4]] makes both cost 1 per
  [[Card]]:
	- a) [[Research#2.2]] and [[Laboratory#4]] go. The only change: a
	  non-[[Science]] [[Starter]] moves only the [[Card]]s its
	  [[Class]] handles.
	- b) Also no [[Shift]] between piles: piles keep their order, the
	  setup order steers the tech tree, F2 found the lever too strong.
- [ ] **S64. Energy as open wild power.** [[Energy]] [[Token]]s are
  "in [[Hand]]", but don't count to its size, stay at [[Draw]], lie
  open and have their own cap; [[Boost]] caps each [[Card]] by
  [[Capacity]]; [[Resource]] exists to say "stockable":
	- a) [[Energy]] lies open in the player's stock beside [[Home]]:
	  [[Energy]] 5-6 and "in [[Hand]]" go.
	- b) 1 [[Energy]] pays 1 [[Power]] of any [[Class]] in an
	  [[Action]] the player starts or joins, no [[Card]] cap and no
	  [[Hand]] cap: [[Boost]] and [[Resource]] go. The cap was never
	  reached and [[Energy]] was marginal.
	- c) Lost: channelling [[Energy]] through [[Card]]s, the hoarding
	  limit.
- [ ] **S65. Range and Capacity aren't the one Ability.** [[Ability]]
  3 lists [[Range]] and [[Capacity]], then [[Support#1.2]] and PR-11
  exempt reaching and boosting from a [[Supporter]]'s one [[Ability]]:
	- a) A [[Card]]'s [[Range]] and [[Capacity]] count for its own
	  [[Group]], they are not the one [[Ability]]. [[Support#1.2]]'s
	  clause goes.
	- b) Or a [[Hand]] [[Card]] gives no [[Range]] or [[Capacity]]:
	  [[Support#2.3]]-2.4 and the [[Range]] from [[Support]] in
	  [[Range]] 4 go. Lost: reaching with [[Hand]] [[Card]]s.
	- c) An alternative to S42 a.
- [ ] **S66. Destination cards add Range to any action.** Only in a
  [[Move]] (4.1) do the [[Direct participant]]s in the [[Destination]]
  add their [[Range]] to the moving [[Group]]:
	- a) [[PerformAction#4.3]]: the [[Card]]s in the [[Destination]]
	  add their [[Range]] to the [[Source]] [[Group]], [[Move#4.1]]
	  keeps only [[Capacity]].
	- b) A garrison helps every [[Action]] reach it: an [[Attack]]
	  from two sides, [[Explore]], [[Create]].
- [ ] **S67. Immediate is a technology, not an action.**
  [[ImmediateAction]] is an [[Action]] without a [[Starter]], a
  [[Direction]], a [[Cost]] or other [[Participants]], though every
  [[Action]] has a [[Starter]]:
	- a) An **Immediate** [[Technology]] works when its [[Card]] is
	  shown, then the [[Card]] [[Deplete]]s, at own [[Turn]] or in a
	  [[Combat]].
	- b) [[ImmediateAction#2]]-4 go, six [[Technology]] rows change
	  Kind. A lone Immediate is no move for [[Turn#3]].
- [ ] **S68. Hidden in one rule, in `duel`.** Only [[Stealth]] makes a
  [[Card]] [[Hidden]] (Settled 3), yet core carries its rules:
	- a) A [[Hidden]] [[Card]] counts as a [[Level]] 1 [[Card]] of its
	  [[Role]], a [[Unit]] as a [[Ship]]: [[Range]] 1, [[Capacity]] 1,
	  [[Size]] 1. [[Hidden#4.1]]-4.4 become one rule.
	- b) [[Hidden]] and the [[Hidden]] clauses of [[Combat]] move to
	  `duel`, core keeps the back ends of [[End]] and [[Side]].
- [ ] **S71. Distance counts Spaces only.** [[Distance]] sums all
  [[Tile]]s but the first, a [[Star]] as 1 and a [[Space]] as its
  [[Length]], and [[Space]]s link along hex edges:
	- a) A route alternates [[Star]] and [[Space]], its [[Distance]]
	  is the sum of its [[Space]]s' [[Length]]s.
	- b) Every [[Space]] prints its [[Length]] 1 higher, the
	  [[Duel]]'s become 2, [[Star]] to [[Star]] [[Distance]]s stay.
	  Edge routes go, PR-3 dropped them.
- [ ] **S72. Two Turn phases.** **Play**, then **End**: check the
  [[Goal]], [[Discard]], [[Draw]], [[Restore]] 3. About ten "X phase"
  references become "end of own [[Turn]]".
- [ ] **S73. Fewer pages and terms**, no rule changes:
	- a) One table in [[Card]]: [[Type]], [[Role]], [[Origin]],
	  [[Range]], [[Cargo]], and "[[Size]] and [[Capacity]] are the
	  current [[Level]] unless the [[Card]]'s page says otherwise".
	  The [[Property]] lines of the [[Card]] pages go, checkdocs
	  `check_templates` changes.
	- b) One table in [[State]]: [[Side]] and [[End]] of each
	  [[State]], the "is: [[Side]] up, [[End]] up" lists go.
	- c) The four [[Power]] pages and [[Resource]] fold into [[Class]]
	  and [[Power]].
	- d) [[IPS]] goes, rules say [[Star]].
	- e) [[Enabled]] goes, rules say "face up".
	- f) [[Direction]] and [[Action]] fold into [[PerformAction]].
	- g) [[Agenda]] moves to an extension scope, [[World]] and
	  [[Ancient]] have no [[Faction]], [[Faction#4]] goes: core stops
	  naming the [[Galaxy]].
	- h) The [[Card]]s column of [[Technology]] goes, [[Deck]] holds
	  the assignments, checkdocs drops the cross-check.
- [ ] **S74. Bigger cuts, speculative.**
	- a) [[Restore]] every [[Structure]] at **Restore**: [[Plus]]
	  [[Restore]] and the throttle of [[GameBalance#5]] go.
	- b) A [[Card]] that loses a [[Combat]] is Destroyed at once:
	  [[Damaged]], [[Recover]] and the Chess check go.
	- c) [[Pinning]] and [[Intercept]] as one contact rule: a
	  [[Group]] entering a [[Star]] with rival [[Military]] [[Actor]]s
	  stops, the rival may fight it at once.
	- d) No [[Cargo]]: [[Range]] 0 [[Card]]s move inside a [[Group]];
	  [[Size]], the [[Cargo]] half of [[Capacity]] and the [[Class]]
	  table go. Lost: logistics.

## Editorial

One batch after the playtest, only for pages that confused play.

- [ ] **I96. Archive is a working name.** The [[Research]] [[Hub]] of
  the [[Homeworld]] is called [[Archive]] for now: rename it later.
- [ ] **S23. Separate usable cards from scoring cards.** [[ActiveFor]]
  includes [[History]], whose [[Card]]s are out of play, then says
  active [[Card]]s are [[Action]] [[Participants]]:
	- a) [[Participants]] are own usable [[Card]]s in [[Hand]] or on
	  the [[Field]], stated in [[PerformAction]] without ActiveFor.
	- b) Replace ActiveFor with **counts for goals**: a
	  non-[[Damaged]] [[Card]] on the [[Field]], in [[Hand]] or in
	  [[History]] and [[ControlledBy]] the [[Faction]].
	- c) This makes "out of play but active" unnecessary and prevents
	  [[History]] from appearing to provide [[Action]]
	  [[Ability|Abilities]].
- [ ] **S24. One timing rule for passive abilities.** [[Plus]] says
  bonuses sum from [[Participants]], but also lists [[Hand]] size,
  end-of-[[Turn]] [[Restore]], [[VictoryPoints|Victory points]] and
  votes, none of which has [[Participants]]:
	- a) An [[Action]] [[Ability]] applies only when its [[Card]]
	  participates.
	- b) A passive [[Ability]] applies while its revealed [[Card]] is
	  [[Enabled]] and ControlledBy the player on the [[Field]].
	- c) A timed [[Ability]] resolves at its named [[Turn]] step.
	  Remove passive and timed effects from the rule that participant
	  [[Plus]]es sum.
- [ ] **S25. Home cards have no Field state.** A [[Card]] [[Back]]
  means [[Hidden]] or [[Damaged]], but [[Reserve]] is face down as a
  pile:
	- a) In [[Home]], the pile determines visibility and [[Card]]s are
	  usable unless they are in [[Factory]] or [[Laboratory]].
	  [[Side]] and [[End]] [[State]]s apply only to [[Card]]s
	  individually on the [[Field]].
- [ ] **S31. One verb for each build action.** [[Raise]]/[[Produce]]
  and [[Heal]]/[[Fix]] are four flavour names of [[Create]] and
  [[Recover]], listed on their pages; [[Upgrade]]'s
  [[Grow]]/[[Enhance]] carry rules:
	- a) Use [[Create]] and [[Recover]] in rules and [[Card]]s for
	  both [[Origin]]s.
	- b) Keep the flavour words in art or notes only, if wanted.
	- c) This removes four terms without removing a rule or decision.
- [ ] **S32. One meaning of starter.** **Starter** is both the role a
  [[Card]] has in every [[Action]] and a [[Starter|Technology]]:
	- a) Keep **starter** only for the [[Card]] selected to begin an
	  [[Action]].
	- b) Rename the [[Technology]] to **Field Start** or
	  **Initiative**.
- [ ] **S33. Drop worker placement from the genre.** [[index]] calls
  the game worker placement, while [[ComparisonReview]] correctly says
  [[Slot]]s limit presence and are not [[Action]] spaces:
	- a) Use ComparisonReview's **card-driven spatial 4X with deck and
	  engine building** everywhere.
	- b) No rule changes; the shorter description avoids promising a
	  mechanic the game does not have.
- [ ] **S35. One build direction.** [[Create#6]] defines two
  [[Direction]]s, [[Upgrade#4]] one, [[Settle]] adds a third:
	- a) The [[Source]] is the [[Hub]]'s [[Star]], the [[Destination]]
	  is the [[Star]] of the [[Card]]: where a [[Structure]] is or
	  goes, as [[Upgrade#4]] has it; a [[Card]] in [[Home]] has the
	  [[Hub]]'s [[Star]] as both ends, [[Distance]] 0.
	- b) [[Settle]]: the [[Ship]]'s [[Star]] is both ends, no [[Hub]].
	- c) [[State]] it once, in [[Hub]]; the three [[Action]] pages
	  keep only [[Requirements]], [[Cost]] and outcome.
	- d) What it changes: an [[Actor]] is built only with [[Card]]s at
	  the [[Hub]] as [[Direct participant]]s, not at another
	  [[Source]] [[Star]].
- [ ] **S41. End of a face-down card.** [[End#6]] sets the [[End]] in
  use: in a [[Slot]] the visible [[End]], elsewhere the selected
  [[End]]. A face-down [[Card]] shows no [[Level]], though [[Recover]]
  costs the current [[Level]] of a [[Damaged]] [[Card]]:
	- a) The [[End]] in use of a face-down [[Card]] is its [[Weak]]
	  [[End]].
- [ ] **S42. One list of what a card gives.** [[Ability#3]] lists
  Primary, Secondary, [[Range]], [[Capacity]] and [[Level]] with
  [[Class]]; [[Support#2]] lets a [[Supporter]] pick one of four,
  without [[Level]]; [[Combat]] adds [[Defense]]; [[Plus#3.5]] limits
  a [[Range]] [[Plus]] to [[Move]], though [[Range]] is checked in
  every [[Action]]:
	- a) One list in [[Ability]]: Primary, Secondary, [[Range]],
	  [[Capacity]], [[Level]] with [[Class]], [[Defense]] in
	  [[Combat]]. A [[Direct participant]] gives all, a [[Supporter]]
	  one.
	- b) [[Support]] 2 and [[Plus#3.5]]-3.6 link it; a [[Range]]
	  [[Plus]] adds to any [[Group]].
	- c) It answers whether a [[Supporter]]'s [[Level]] is its one
	  [[Ability]] for [[Prerequisites]]. Recommended: yes.
- [ ] **S47. One Home pile table.** Ten pile pages state visibility
  and entry in different words, some not at all:
	- a) [[Factory]], [[Laboratory]] and [[History]] don't say who
	  sees them. The [[Leader]] check of [[Goal]] counts the
	  [[Hero]]es in [[Factory]] and [[Laboratory]]: recommended open,
	  like [[Discard]].
	- b) [[Destroy]], [[Recall]], [[Express]] and [[MinusDeplete]] put
	  a [[Card]] on top, [[Upgrade#7.2]] and [[Research#2.1]] don't
	  say where in [[Factory]].
	- c) [[Galaxy]] piles and secret [[Objective]]s use the [[Field]]
	  state [[Hidden]] for face down.
	- d) One table in [[Home]]: pile, owner, face up or down, who sees
	  it.
	- e) One rule: a [[Card]] put into a pile goes on top; in a row of
	  piles the player picks the pile.
	- f) Piles are face up or face down, not [[Hidden]], as S25 a.
	  Pile pages keep only their own behavior, e.g.
	  [[DeckBuilding|Shuffle]] for [[Reserve]].
- [ ] **S52. Traits in core.** [[Trait]] and [[NoSupport]] are `core`,
  but no [[Card]] has a [[Trait]]:
	- a) [[Trait]] and NoSupport go to `advanced`, or wait for P58.

## Ideas

Not for answering now, kept for later.

- **Policies** (TtA governments, Civilization policies): one Policy
  [[Card]] in [[Home]] giving a [[Plus]]: [[Hand]] size, [[Range]],
  [[Energy]]. Changed by an [[Action]]. `advanced`.
- **Energy as an extra action** (Voidfall trade tokens): spend 2
  [[Energy]] to let a [[Field]] [[Card]] act without a [[Starter]]
  from [[Hand]] ([[Starter]]). Alternative to [[Boost]].
- **Center prize** (TI Mecatol Rex): [[Star]] 11 of the first [[Duel]]
  has a fixed [[World]] with the best [[Ability]], e.g.
  [[DeckBuilding|Draw]] 1.
- **Derelict row** (TtA [[Card]] row): [[Derelict]]s get cheaper the
  longer they wait.
- **Upkeep at Shuffle** (Voidfall, Eclipse), only if the leader
  snowballs in playtests: 1 [[Energy]] per [[Star]] beyond 3.
- **One Space per side**: halves first-[[Duel]] [[Tile]]s (24 → 12)
  and [[Explore]] [[Action]]s, at the price of a single route between
  two [[Star]]s.
- **Drones** (TI fighters): [[Range]] 0 [[Military]] [[Unit]]s carried
  by [[Ship]]s, if [[Capacity]] needs more use.
- **Asymmetry** for later [[Faction]]s: one [[Faction]] [[Card]] with
  a single rule change on top of a mirrored deck (TI [[Faction]]
  abilities), lighter than a deck of its own.
