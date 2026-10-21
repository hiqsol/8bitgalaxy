---
date: 2026-10-18
updated: 2026-10-20
status: WIP
scope: meta
---

# Simplification review

Review of the rules and reviews: their inner logic, inconsistencies
and ways to make the rules shorter without losing decisions.
Complements [[RulesReview]] and [[DesignReview]]. Simplifications are
numbered `S<n>`.

Answer by number and letter, e.g. "S4 a", "S4 no".

## Inner logic of actions

- **Hand is the budget.** Every action costs one [[Hand]] card, the
  starter, so actions per [[Turn]] are about the Hand size. A
  [[Starter]] on the [[Field]] saves that card.
- **An action happens between two places.** The source and the
  destination of the [[Direction]]. Own cards at either place take
  part fully, as direct participants: the forces on the scene.
- **Help comes with one ability.** From [[Hand]] at any distance, from
  another [[Star]] only within [[Range]]: help from afar is thinner
  than presence.
- **Range is reach.** Every group of participants, the cards of one
  [[IPS]], must reach the destination. Range sums, so groups reach
  farther; [[Pinning]] and hidden [[Space]] stop moving groups.
- **Power is the price.** Power of the matching [[Class]] pays the
  [[Price]]; [[Technology]] makes an action possible or better.
- **Depleting is the wear.** Used Units leave the [[Field]] for
  [[Discard]] and return to the deck cycle, used [[Structure]]s turn
  to their weak [[End]]. Cards that move or fight hold the ground and
  don't wear, the starter always wears.
- **The loop.** [[Takeoff]] → act from the Field → Discard → [[Draw]]
  → Takeoff again. A Field card is worth more than a Hand card (all
  abilities, `+Y` power), it costs a Takeoff and comes back to the
  deck when used.
- **What moves.** [[Actor]]s move on their own, Range above 0, a
  [[Move]] costs only its starter. [[Structure]]s, Range 0, are
  shifted by [[Manage]] for power or carried as cargo of a Move:
  options, both cost a starter.
- **No memory.** The table shows the state: [[End]], [[Side]] and
  [[Slot]] show the states, Energy tokens lie open, the starter always
  depletes, a card can act in the Turn of its [[Takeoff]], [[Turn]]
  lists every start and end step, [[Objective]]s check only the
  current table.
- **Applied wording.** [[PerformAction]] is reworded along these
  lines: starter, Direction, direct participants at both ends,
  supporters, **targets** (cards the action works on, not
  participants), one group per IPS.

## Simplifications

### Actions

- [ ] **S19. One first-play rule.** [[Turn]] 2 says every play starts
  with a card from [[Hand]], and rule 4 requires at least one such
  card, but [[Starter]] and [[Goal]] note 7 say a Field card can act
  when Hand is empty:
	- a) A player must make at least one **play**: a [[Takeoff]] or an
	  action started from Hand or the Field.
	- b) If no legal first play exists, the faction is over. Put that
	  rule in [[Turn]] and let Goal link it, instead of defining the
	  test twice.
	- c) After the first play the player may end the Turn. This keeps
	  "no pass" without requiring a Hand card.
- [ ] **S20. Visible Explore cost.** [[Explore]] reveals the Price only
  after cards are spent, while [[RulesReview]] RP34 validates every
  action before resolution and takes an invalid action back:
	- a) Print the [[Price]] on the back of every [[Star]] and
	  [[Space]], beside Size or Length. Type and Ability stay hidden.
	- b) Validate before revealing, like every other action. Remove
	  Explore 7-8 and the Explore exception from [[PerformAction]] 5.
	- c) This removes failure and refund rules without removing a
	  choice: the player still chooses which unknown tile is worth its
	  visible Price.
- [ ] **S21. Star abilities without use tracking.** [[Ability]] and
  [[Star]] say a Star Ability is usable once per own Turn,
  contradicting **No memory**; [[RulesReview]] RP36 adds more such
  Abilities:
	- a) Income Abilities resolve at the income step of [[Turn]].
	- b) Local action Abilities apply automatically to own actions
	  whose source or destination is that Star.
	- c) Defensive Abilities apply continuously in that Star.
	- d) Balance their values for those timings, then remove "once per
	  Turn".
- [ ] **S35. One build direction.** [[Create]] 6 and [[Upgrade]] 4
  each define directions for the same two actions, [[Settle]] and
  [[Prefab]] add a third; today a hub in a
  [[Disputed]] Star still builds Actors (it is the destination) but
  not Structures (it is the source):
	- a) The source is the hub's [[Star]], the destination is the
	  Star of the card: where a [[Structure]] is or goes; a card in
	  [[Home]] has the hub's Star as both ends, [[Distance]] 0.
	- b) Settle and Prefab: the Ship's Star is both ends, no hub.
	- c) State it once, in [[Hub]]; the three action pages keep only
	  requirements, Cost and outcome.
	- d) What it changes: an Actor is built only with cards at the
	  hub as direct participants, not at another source Star, and
	  a hub in a Disputed Star builds nothing.
- [ ] **S36. Twin technologies as one.** [[Explore]] already is one
  technology of two Classes. [[Settle]] and [[Prefab]] are one page
  with Colony/Base and Academy/Shipyard swapped, [[PlusFactory]] and
  [[PlusLaboratory]] one page with the pile row swapped, none of them
  has a card yet:
	- a) **Settle**, Culture and Production: a Ship converts itself
	  into a Colony with a Culture end, into a Base with a Production
	  end.
	- b) **Plus Pile**, Production and Science: a new [[Factory]] pile
	  with a Production end, a new [[Laboratory]] pile with a Science
	  end.
	- c) Two pages and two catalog rows less.
- [ ] **S38. Route details where they belong.** The general rule is
  [[Distance]]: a route is a chain of tiles. It already doesn't list
  blockers, but the specific rules don't all hook into it: they speak
  of moving cards, so it's unclear which [[Range]] checks they bind,
  and general pages list them back:
	- a) Specific pages state their detail on **the route**, one line
	  each, nothing in Distance:
		- [[Space]] 6.1, [[Star]] 6: a route can't pass a hidden tile.
		- [[Void]]: a route can't pass Void.
		- [[Supernova]]: a route can't pass Supernova, today only
		  Ships are stopped and Heroes pass, or keep "Ships" if that
		  is intended.
		- [[Navigation]]: the route of a group with Navigation can
		  pass Void; [[Jump]]: one hidden Space, it gets revealed.
		  Today both name only [[Move]].
		- [[Pinning]]: the route of a moving group can't pass a Star
		  with rival Enabled Military Actors.
	- b) The gap closes by itself: remote [[Support]], [[Explore]]
	  reach and [[Create]] placement use routes, so they obey every
	  tile rule; only Pinning, by its own words, binds moving groups.
	- c) Remove the back references: [[Range]] note 1 (Pinning, Void,
	  hidden Space), [[Pinning]] 2 and 2.1 (which checks ignore it),
	  [[Move]] 9 and [[Attack]] 4.4 (the route obeys Pinning).
	- d) Recommended: a-c, with "route" for Supernova.
- [ ] **S39. One conversion outcome.** [[Extract]] and [[Recycle]]
  have the same outcome text, [[Trade]] half of it:
	- a) Define **conversion** once in [[Materials]]: the action's
	  power becomes Materials one to one in the source [[Star]].
	- b) The pages keep only what they convert: [[Asteroids]], a card,
	  a trade route, unless [[DesignReview]] DP57 c turns Trade into
	  Energy.
	- c) Recycle doesn't say what happens to the converted card: say
	  it, e.g. [[Destroy]].

### Abilities and states

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
	  or an Enabled Hero on the Field. This resolves [[DesignReview]]
	  DI76 a-d with one rule instead of four pile exceptions.
- [ ] **S26. All Combat cards from Hand are face down.** [[Combat]]
  gives a special bluff to "Hidden cards from Hand", although Hand is
  already secret and Hidden is otherwise a Field state:
	- a) Every Combat supporter from Hand is committed face down.
	- b) Reveal all commitments only at resolution, as in
	  [[RulesReview]] RP28; remove voluntary reveal-at-any-time and the
	  special Hidden-Hand rule.
	- c) Bluffing stays, with one commitment procedure and no state
	  change.
- [ ] **S41. One current End.** [[Level]] 4 sets the current Level:
  the visible End, the chosen End for a [[Hand]] supporter, else the
  lower; Level 5 sets the provided Level: the End up on the [[Field]],
  else the chosen End. A Hand card counted for [[Singularity]] gets
  the lower Level by 4, the chosen by 5:
	- a) Define the **current End** once in [[End]]: face up on the
	  Field the End that is up; face down the weak End; elsewhere the
	  End its player chooses when the card is used or counted.
	- b) Level, [[Class]], abilities, [[Size]] and [[Range]] are those
	  of the current End. Remove Level 4-5, Class 4 and [[Support]] 3.
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
	- c) It answers [[RulesReview]] RI83 a and whether a supporter's
	  Level is its one Ability for [[Prerequisites]]. Recommended:
	  yes.
- [ ] **S43. Control by present cards.** [[Control]] 3 repeats
  "Enabled or Hidden" at every level, [[Pinning]] says
  Enabled:
	- a) A faction's cards in a Star that are not [[Damaged]] are
	  **present**.
	- b) The Control level is the highest [[Role]] among them: Actor,
	  then Structure, then none.
	- c) Pinning keeps Enabled.
	- d) Say "own faction's cards": "player has" leaves open whether a
	  captured rival Structure counts.
- [ ] **S44. One control page.** The tie rule is written in
  [[ControlledBy]] 3 and 5.2, [[Disputed]] 2-4 and [[Politics]] 2.3,
  with four examples in ControlledBy note 1:
	- a) [[Control]] holds the levels, who controls a Star, the tie as
	  Disputed and who controls Structures.
	- b) ControlledBy and Disputed keep one rule each linking Control,
	  or become its aliases.
	- c) Keep two examples: the Actor capture and the Structure out of
	  control.
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
- [ ] **S46. Stealth in one place.** [[Stealth]] 2 hides another card,
  while [[Takeoff]] 3.1 lets a card hide itself; [[Hidden]] note 2
  hides cards "later" too, by no action; Stealth 3 restates Hidden 4.2
  and "stealth mode" is a second name for Hidden:
	- a) Stealth: an own card may [[Takeoff]] Hidden in a [[Star]]
	  where the player has an Enabled card with Stealth, the card
	  itself included.
	- b) Later hiding: a [[Manage]] flip with Stealth.
	- c) Or no later hiding: Takeoff is the only way, Hidden note 2
	  changes.
	- d) Either way remove "stealth mode" and Stealth 3, Takeoff 3.1
	  links Stealth.

### Piles

- [ ] **S47. One Home pile table.** Ten pile pages state visibility
  and entry in different words, some not at all:
	- a) [[Factory]], [[Laboratory]] and [[History]] don't say who
	  sees them.
	- b) [[Destroy]], [[Recall]] and [[Express]] put a card on top,
	  [[Upgrade]] 7.2 and [[Research]] 2.1 don't say where in
	  [[Factory]], [[DoNotDeplete]] doesn't say where in [[Reserve]]
	  ([[RulesReview]] RI88 g).
	- c) Galaxy piles and secret [[Objective]]s use the Field state
	  [[Hidden]] for face down.
	- d) One table in [[Home]]: pile, owner, face up or down, who sees
	  it.
	- e) One rule: a card put into a pile goes on top; in a row of
	  piles the player picks the pile.
	- f) Piles are face up or face down, not Hidden, as S25 a. Pile
	  pages keep only their own behavior, e.g. [[Shuffle]] for
	  Reserve.
- [ ] **S48. One deck-cycle page.** [[DeckBuilding]], [[Draw]] and
  [[Shuffle]] describe one loop; [[Discard]] 3 and Shuffle 4 list
  different incomplete ways into Discard, neither has [[Create]]d
  Actors; DeckBuilding says [[Actor]] where [[Deplete]] says [[Unit]]:
	- a) Merge Draw and Shuffle into DeckBuilding: the loop, the
	  end-of-Turn draw, the shuffle when Reserve is empty; keep their
	  names as aliases.
	- b) No list of ways into Discard: cards get there only when a
	  rule sends them.
	- c) Say Unit, the Role that can be in [[Hand]].

### Fewer concepts

- [ ] **S28. Unit instead of Actor.** If [[DesignReview]] DP58 b
  replaces [[Tool]] with a `Consumable` trait, every [[Unit]] is an
  [[Actor]]:
	- a) Merge Actor into Unit and use Unit for movement, starters and
	  Control.
	- b) Remove one Role level, the Actor page and the nested Role
	  lists.
	- c) Ships and Heroes keep all current rules; Consumable Units are
	  destroyed after use by their trait.
- [ ] **S29. Two property matrices.** Type, Role, Origin, Class, the
  four card type pages, the four Class pages and the four Power pages
  repeat the same derivations:
	- a) Put Role, Origin, Range, Size and Capacity defaults in one
	  [[Type]] matrix. Individual type pages state only behavior and
	  exceptions.
	- b) Put color, Power and core uses in one [[Class]] matrix.
	  Individual Class and Power pages state only exceptions, if any.
	- c) Keep each fact authoritative in one place; other pages link
	  it instead of restating it.
- [ ] **S30. One physical-state matrix.** [[State]], [[Side]],
  [[End]], [[Enabled]], [[Ready]], [[Depleted]], [[Damaged]] and
  [[Hidden]] repeat which face and end is up:
	- a) Put State, applicable Role, Side and End in one table in
	  State.
	- b) Side and End define only the physical terms. Each state page
	  keeps only its behavior and transitions.
	- c) This preserves the card display while removing repeated
	  definitions that can drift apart.
- [ ] **S31. One verb for each build action.** Raise/Produce,
  Grow/Enhance and Heal/Fix are six aliases for [[Create]],
  [[Upgrade]] and [[Recover]], repeated on action and Origin pages:
	- a) Use Create, Upgrade and Recover in rules and cards for both
	  Origins.
	- b) Keep the flavour words in art or notes only, if wanted.
	- c) This removes six terms without removing a rule or decision.
- [ ] **S49. One meaning per property name.** **Size** is a card's
  weight, the number of a Star's Slots and a token's amount; **Type**
  is a card's kind, a Star's Class and a Space's kind. [[Property]] 4
  and [[Star]] note 2 exist only to tell them apart:
	- a) Star **Size** → **Slots**: the number on its back, the total
	  of its [[Slot]]s.
	- b) Star **Type** → **Class**: it is one of the [[Class]]es, by
	  color.
	- c) A token's amount stays its Size: it is its weight as cargo.
	- d) [[Size]] drops "aka Weight", one name for one property.
- [ ] **S50. Star Price printed.** A [[Star]] alone among tiles has
  [[ExtraPrice]], non-negative, only to compute its [[Explore]] Cost,
  while a [[Space]] prints its Price:
	- a) Print a Star's Price like a Space's, at least its Size; on the
	  back with S20.
	- b) ExtraPrice is a card property again: remove ExtraPrice 4 and 6,
	  [[Price]] 3 and ExtraPrice from the [[Component]] properties.
	- c) [[RulesReview]] RP36 g then sets printed Prices: Size plus 1
	  to 4.

### Documentation

- [ ] **S32. One meaning of starter.** **Starter** is both the role a
  card has in every action and a [[Starter|Technology]];
  [[RulesReview]] RP27 also calls four initial deck cards "starters":
	- a) Keep **starter** only for the card selected to begin an
	  action.
	- b) Rename the Technology to **Field Start** or **Initiative**.
	- c) Call the RP27 cards **starting cards**.
- [ ] **S33. Drop worker placement from the genre.** [[index]] calls
  the game worker placement, while [[ComparisonReview]] correctly says
  Slots limit presence and are not action spaces:
	- a) Use ComparisonReview's **card-driven spatial 4X with deck and
	  engine building** everywhere.
	- b) No rule changes; the shorter description avoids promising a
	  mechanic the game does not have.
- [ ] **S51. Each fact on one page.** Beyond the matrices of S29 and
  S30, these facts are restated on many pages; the owner keeps the
  rule, others link:
	- a) Build by [[Origin]], Academy and Culture power for Social,
	  Shipyard and Production power for Industrial: 13 places, owner
	  Origin.
	- b) The free [[Restore]] at the end of Turn: [[Turn]], Restore,
	  [[Depleted]], [[GameBalance]], [[Plus]]; owner Turn.
	- c) A Field card gives all abilities, a Hand card one:
	  [[PerformAction]] 2 and notes 2-3, [[Takeoff]] note 2,
	  GameBalance 2.2, [[Starter]] note 1; owner PerformAction.
	- d) One token, Energy in Hand and Materials in a Star:
	  [[Component]], [[Resource]], [[Energy]], [[Materials]], [[Hand]]
	  5; owner Component.
	- e) A Star's back shows only its Size: [[Star]], [[IPS]],
	  Component, [[Side]], [[Explore]], [[Space]]; owner Star.
	- f) A Hidden card moves with Range 1, Capacity 1: [[Hidden]],
	  [[Stealth]]; owner Hidden.
	- g) No Star means over: [[Goal]], Turn, Takeoff; owner Goal.
	- h) Role membership: [[Card]], [[Role]], [[Type]], [[Unit]],
	  [[Actor]], [[Structure]], [[Agenda]]; owner Card.
- [ ] **S52. Core without advanced branches.** Core pages carry rules
  for `advanced` content that has no card:
	- a) [[Starter]] is in [[Action]] 2, [[PerformAction]] 1.1 and
	  1.3.1, [[Deplete]] 1.1 and [[Goal]] note 7; [[Materials]] cargo
	  in [[Move]] 6.
	- b) [[Trait]] and [[NoSupport]] are `core`, no card has a Trait.
	- c) Core pages state only the Hand starter; Starter states its
	  own exceptions, as other modifiers do, S19 a included.
	- d) Trait and NoSupport go to `advanced`, or wait for
	  [[DesignReview]] DP58.
	- e) [[Turn]] keeps every step, extension steps included, by its
	  rule.
- [ ] **S53. Drop filler rules.** Rules that state no decision:
  [[Action]] 1, [[DeckBuilding]] 1, [[Shuffle]] 1, [[Control]] 2,
  [[Direction]] 1, [[Research]] 3 ("similar to Manage"),
  [[TechnologyAction]] 2. [[Board]] is a page of two links that no
  page links:
	- a) Remove them and the Board page.
- [ ] **S54. One stub list.** [[RulesReview]] RI21 and [[DesignReview]]
  DP59 list the same stubs with the same pointers: delete RI21.

## Already proposed

Simplifications from other reviews: [[DesignReview]] DP55 (one handling
rule),
DP57 (economy roles), DP58 (traits instead of types), [[RulesReview]]
RP34 (action template), RP28 (combat sequence).
