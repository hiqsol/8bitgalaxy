---
status: living
scope: meta
---

# Backlog

Open items of the rules, aimed at a **minimal playable duel**: 2
players, no [[GalaxyDeck]], playable with an AI from the notes alone.
Items keep their review numbers: issues `I<n>`, proposals `P<n>`,
simplifications `S<n>`, see [[Docs]]. [[Diagnostic]] tests them,
[[Guidance]] holds the designer's answers, [[Studies]] the evidence.

## Settled

Reopen one only with evidence from a played game, not from a review.

1. No new review items before the first [[Duel]] is played
2. **Range**: a [[Group]]'s [[Range]] is the sum of its [[Card]]s',
   checked only outside the [[Destination]], see [[PerformAction]]
3. **Hidden**: only by [[Stealth]], revealed at the [[Combat]] reveal;
   [[Hand]] commitments face down rejected (S:26), see [[Hidden]]
4. **Control**: strictly the highest controls, a tie is [[Disputed]],
   see [[ControlledBy]], [[ActiveFor]]; dead ground rejected (S:54)
5. **Explore**: one [[Technology]] with flavour names, see [[Explore]]
6. **Build**: [[Create]], [[Upgrade]] at a [[Hub]]; [[Recover]] from
   the [[Card]] that provides it
7. **Field start**: a [[Field]] [[Card]] starts an [[Action]] only
   with [[Starter]], `duel`
8. **Failed action** costs all its [[Participants]]; a take-back
   (P:34) and a visible [[Explore]] [[Price]] (S:20) rejected
9. **World deck**: every [[World]] [[Card]] (P:36 i), see
   [[WorldDeck]]
10. **Combat order**: the [[Attacker]] selects the first
    [[Defender]]s, then rounds of any number of [[Card]]s; P:28 and
    S:70 rejected, see [[Combat]]
11. **Defense**: a [[Military]] [[Card]] defends with its [[Level]]
    (P:62, S:69), see [[Defense]]
12. **Academy defenders** stay in `duel` (S:25 b, I:76 c), see
    [[Academy]]
13. **Technologies without cards** go on the 6/5 and 8/7 [[Card]]s
    (P:25): the Crossroads variant, see [[Deck]], [[Studies]]
14. **`X+Y` power** stays, though no [[Card]] prints `+Y` (S:58 a)
15. **Hubs**: no global [[Hub]], a [[Faction]] without one captures
    one (I:19 d), see [[Hub]]
16. **Trade between factions** works in a [[Duel]] (P:57 e)
17. **Game finish**: [[PaxGalactica|Pax Galactica]] wins at once, the
    other achievements trigger [[Twilight]], the most achievements
    win, [[VictoryPoints]] break a tie (I:77, I:78, I:95 a)
18. **Victory points**: the current [[Level]]s of controlled
    non-[[Damaged]] [[Social]] [[Card]]s; no win by [[Objective]]
    points (I:43 b)
19. **Space length**: the printed [[Length]] whatever the [[Type]];
    P:24 [[BlackHole|Black hole]] a, b and [[Void]] b rejected, see
    [[Distance]]
20. **Void**: a route can't pass it, [[Navigation]] can (P:24 [[Void]]
    c), see [[Void]]
21. **Asteroids**: only [[Extract]] (P:24 [[Asteroids]] b-d)
22. **Duel Space tiles**: every revealed position takes a [[Tile]]
    (P:35 a), see [[Duel]]
23. **Symmetric Human and Alien** decks, asymmetry is for later
    [[Faction]]s, see [[Faction]]
24. **Piles**: their order is a subgame (P:27 e), see [[Laboratory]]
25. **Black hole**: passable both ways (P:24 [[BlackHole|Black hole]]
    c), see [[BlackHole]]
26. **Routes**: [[Tile]]s connect at an edge or a corner, a route may
    go around a [[Star]] (S:71), see [[Space]]
27. **Distance**: all [[Tile]]s but the first, a [[Star]] by its
    [[Level]], see [[Distance]]
28. **Space Length** up to 8, the [[Scenario]] sets the [[Space bag]]
    (P:67 a, b)
29. **Space Price**: [[Length]] plus the printed [[ExtraPrice]] (P:24
    Normal b), see [[Price]]
30. **No Space Class**: a [[Star]] takes its [[World]]'s, see
    [[Space]]
31. **Jamming**: one modifier stops rival routes through and around
    its [[Star]], see [[Jamming]]
32. **Space types**: [[HyperPass|Hyper pass]] a wormhole pair, a
    [[Relic]] draws an [[Event]], a [[Supernova]] +1 [[Power]] beside
    it (P:24 HyperPass a, c, [[Relic]] a, b)
33. **Duel Space bag**: halved by [[Type]] and [[Length]] (P:35 b, c),
    see [[Duel]]
34. **Conquest**: the [[Ancient deck]], as many [[Ancient]]s as the
    [[World]]'s [[Price]] (S:60), see [[Ancient]]
35. **Destroy**: a player [[Card]], a [[Tool]] too, to the top of a
    [[Factory]] pile, any other under its deck (S:59 b), see
    [[Destroy]]
36. **Rejected simplifications**: S:61 [[Attack]] as a [[Move]] that
    must win, S:62 [[Move]] within a [[Star]] for every [[Card]], S:74
    the bigger cuts, S:47 one [[Home]] pile table

## Next step

1. [[Play]] the first [[Duel]], see [[Playtest]]
2. Only the rules that stopped play or were read two ways become items

## Watch in playtest

- [ ] **I:46. Deck thinning by Takeoff.** Taking off weak [[Card]]s to
  cycle strong ones, limited by [[Slot]]s; seen in game 3 of
  [[FirstDuelPlaytest]].
- [ ] **I:79 b. Legacy thins the deck** like I46: keep [[Legacy]] in
  `objectives` or drop it?
- [ ] **I:75 a. Actions per Turn.** [[GameBalance]] expects about 5
  [[Action]]s per [[Turn]], 2-3 is likelier.
- [ ] **I:75 f. Militarization Defense.** The [[Plus]] [[Defense]] of
  [[Militarization]] [[Card]]s was set for [[Defense]] 1, but
  [[Military]] [[Card]]s defend with their [[Level]]: revise the
  values?
- [ ] **I:19. Crossroads deck**: the 6/5 and 8/7 [[Card]]s of the
  [[Deck]], applied untested, see [[Studies]]; play it in Act II,
  Industrialist against Warlord:
	- f) The snowball: does a [[Hyperstructure]]'s [[Energy]]
	  Secondary stop each wonder paying for the next one?
	- h) [[Envoy]]: is its widened [[Action]] enough for
	  [[GalacticDiaspora]], or should it need 6 of 7 [[Star]]s?
	- i) [[Tool]]s: with 4, do a builder's [[Hand]]s repeat by
	  [[Turn]] 16?
	- j) [[Siege]]: too much or too little?
	- k) [[PaxGalactica|Pax]]: cheap 2/1 [[Hero]]es make "no leader"
	  unreachable; fall by the home [[Star]], or raised [[Hero]]es
	  cost more? Now the [[Hero limit]] lets a [[Damaged]] [[Hero]]
	  block a new one, see [[Hero#Notes#4]]: does "no leader" come too
	  easily?
- [ ] **P:66. Weak Structure ends** have no [[SecondaryAbility]]:
	- a) One less than the [[Strong]] [[End]]'s: [[Colony]] 2x +1,
	  [[Base]] 4x +2, [[Colony]] 4x +3.
	- b) Or +1 on 4x [[Weak]] [[End]]s only, so [[Restore]] still
	  matters.

## After the first duel

- [ ] **I:47. Images.** Update `card.png` once the [[Card]] data
  settles.
- [ ] **P:57. Economy roles**, `advanced`: [[Goods]] pay builds at a
  [[Hub]] where they are, [[Energy]] [[Boost]]s, [[Trade]] turns
  [[Power]] into [[Energy]].
- [ ] **S:39. One conversion outcome**: [[Extract]] and [[Trade]]
  define conversion once in [[Goods]].
- [ ] **I:43. Objectives details**: a) the list, c) points of a
  [[Public objective]].
- [ ] **I:44. Politics details**, see [[Politics]]: a)
  [[StrategyCard]] roles, b) [[PromissoryNote]] gains, c) whether it
  returns.
- [ ] **I:45. Derelict details**, see [[Derelict]]: a) the [[Star]] it
  enters, b) the recruit [[Cost]].
- [ ] **I:89. Galaxy flow**, see [[Galaxy]], P68: a) when and by whom
  the [[GalaxyMove]] is made, b) when [[FutureEvents]] are evaluated,
  c) [[CurrentEvents]] and [[GalaxyScrap]] unused.
- [ ] **P:68. Galaxy events like Through the Ages**: the
  [[GalaxyMove]] opens each [[Turn]]; the player prepares one
  [[Event]] face down on [[FutureEvents]] and resolves the top one of
  [[CurrentEvents]]; an empty CurrentEvents takes the shuffled
  FutureEvents; resolved ones go to [[GalaxyScrap]], a lasting effect
  stays as a [[Tile]].
- [ ] **P:58. Traits instead of new Types**: `Unique`, `Consumable`,
  `Immovable`; new [[State]]s come from position, not markers.
- [ ] **P:59. Stubs**: c) closed: `PlusHero` went, the
  [[Triumvirate]] [[Hyperstructure]] raises the [[Hero limit]].
- [ ] **I:94. Underdescribed**: c) [[PlusPile]]'s [[Cost]]; its
  [[Card]] becomes the new pile [[Back]] up, see [[PlusPile#2]].

## Simplifications

From the 2026-10-25 review of `core`, parked until the first duel; the
full text is in git. RG, PR and F numbers are of
[[FirstDuelPlaytest]].

- [ ] **S:56. Class handles only Structures as cargo**, any [[Ship]]
  carries the rest. Recommended.
- [ ] **S:57. One weight, one price**: [[Size]] is the current
  [[Level]], or each [[End]] prints its [[Price]]; negative
  [[ExtraPrice]] goes.
- [ ] **S:58 c.** [[Create]] makes only [[Card]]s with a [[Level]] 1
  [[End]], higher ones come by [[Upgrade]].
- [ ] **S:63. One way to move a Laboratory card**: [[Research]]'s pile
  move goes, or no [[Shift]] between piles at all.
- [ ] **S:64. Energy as open wild power**: [[Energy]] lies open, pays
  any [[Power]], [[Boost]] and [[Resource]] go.
- [ ] **S:65. Range and Capacity aren't the one Ability** of a
  [[Supporter]], or a [[Hand]] [[Card]] gives neither.
- [ ] **S:67. Immediate is a technology**, not an [[Action]].
- [ ] **S:68. Hidden in one rule, in `duel`**: a [[Hidden]] [[Card]]
  counts as a [[Level]] 1 [[Card]] of its [[Role]].
- [ ] **S:72. Two Turn phases**: **Play**, then **End**.
- [ ] **S:73 h.** The LevelClasses and [[Type]]s of the [[Technology]]
  catalog go, the [[Deck]] holds the assignments, checkdocs drops the
  cross-check; the catalog format of 2026-10-27 may supersede it.
- [ ] **I:96. [[Archive]] is a working name** for the [[Research]]
  [[Hub]] of the [[Homeworld]].
- [ ] **S:23. Separate usable cards from scoring cards**:
  [[ActiveFor]] becomes "counts for goals".
- [ ] **S:24. One timing rule for passive abilities**: an [[Action]]
  [[Ability]] when its [[Card]] participates, a passive one while it
  is face up, a timed one at its step.
- [ ] **S:32. One meaning of starter**: rename the [[Starter]]
  [[Technology]].
- [ ] **S:35. One build direction**: from the [[Hub]]'s [[Star]] to
  the [[Card]]'s, stated once in [[Hub]].
- [ ] **S:41. End of a face-down card** is its [[Weak]] [[End]].
- [ ] **S:42. One list of what a card gives** in [[Ability]].
  Recommended.
- [ ] **S:52. Traits in core**: [[Trait]] and [[NoSupport]] to
  `advanced`, or wait for P:58.

## Closed

Items settled, rejected or done that pages still cite, kept here
by their numbers so the refs to them resolve.

- [x] **I:76. Academy attack details.**
- [x] **I:77. Hyperstructure count and build.**
- [x] **I:78. Production path.**
- [x] **I:81. Combat damage, to brainstorm.**
- [x] **I:95. Culture finish.**
- [x] **P:24. Space type behaviors.**
- [x] **P:25. Core technologies on cards.**
- [x] **P:27. First duel setup.**
- [x] **P:28. Combat sequence.**
- [x] **P:34. Action template.**
- [x] **P:35. First duel Space set.**
- [x] **P:36. World Abilities.**
- [x] **P:62. Defense.**
- [x] **P:67. Longer Space for high Range.**
- [x] **S:20. Visible Explore cost.**
- [x] **S:25. Home cards have no Field state.**
- [x] **S:26. All Combat cards from Hand are face down.**
- [x] **S:47. One Home pile table.**
- [x] **S:53. Deplete by Role.**
- [x] **S:54. Act from an active Star.**
- [x] **S:59. Destroy returns a card to its supply.**
- [x] **S:60. Conquest without loops.**
- [x] **S:61. Attack is a Move that must win.**
- [x] **S:62. Move within a Star for every card.**
- [x] **S:69. Derived Defense.**
- [x] **S:70. One sealed Combat round.**
- [x] **S:71. Distance counts Spaces only.**
- [x] **S:74. Bigger cuts.**
