---
date: 2026-10-18
status: WIP
scope: meta
---

# Simplification review

Review of the action rules: their inner logic and ideas to make the rules
shorter without losing decisions. Complements [[RulesReview]] and
[[DesignReview]]. Simplifications are numbered `S<n>`.

Answer by number and letter, e.g. "S3 a", "S5 yes", "S7 no".

## Inner logic of actions

- **Hand is the budget.** Every action costs one [[Hand]] card, the starter, so
  actions per [[Turn]] are about the Hand size. A [[Starter]] on the [[Field]]
  saves that card.
- **An action happens between two places.** The source and the destination of
  the [[Direction]]. Own cards at either place take part fully, as direct
  participants: the forces on the scene.
- **Help comes with one ability.** From [[Hand]] at any distance, from another
  [[Star]] only within [[Range]]: help from afar is thinner than presence.
- **Range is reach.** Every group of participants, the cards of one [[IPS]],
  must reach the destination. Range sums, so groups reach farther; [[Pinning]]
  and hidden [[Space]] stop moving groups.
- **Power is the price.** Power of the matching [[Class]] pays the [[Cost]];
  [[Technology]] makes an action possible or better.
- **Depleting is the wear.** Used Units leave the [[Field]] for [[Discard]] and
  return to the deck cycle, used [[Structure]]s turn to their weak [[End]].
  Cards that move or fight hold the ground and don't wear.
- **The loop.** [[Takeoff]] → act from the Field → Discard → [[Draw]] → Takeoff
  again. A Field card is worth more than a Hand card (all abilities, `+Y`
  power), it costs a Takeoff and comes back to the deck when used.
- **What moves.** [[Actor]]s move on their own, Range above 0, a [[Move]] costs
  only its starter. [[Structure]]s, Range 0, are shifted by [[Manage]] for power
  or carried by [[Transport]]. So Move and Manage don't overlap, see
  [[RulesReview]] I91 for Transport.
- **Applied wording.** [[PerformAction]] is reworded along these lines: starter,
  Direction, direct participants at both ends, supporters, **targets** (cards
  the action works on, not participants), one group per IPS.

## Simplifications

### Wording

- [ ] **S1. The rule in one paragraph.** Put a short form on top of
  [[PerformAction]] notes, for a rulebook and for AI players:
	- a) "To act, play a starter from Hand. Pick a source Star you control and a
	  destination. Your cards at both places take part with all abilities; cards
	  from Hand, and from other Stars within Range, help with one ability each.
	  Their abilities must cover the requirements. Then the used cards deplete,
	  except those that moved or fought."
- [ ] **S2. Depletion in one rule.** [[Deplete]] lists three exceptions,
  repeated in [[Move]] 7, [[Transport]] 9-10 and [[Combat]] 10.4-5:
	- a) One rule in [[Deplete]]: supporters always deplete, direct participants
	  deplete unless they moved or fought ([[Move]], [[Transport]], [[Combat]]).
	  Action pages only link it.
	- b) Together with [[RulesReview]] I90: a Field starter always depletes.
- [ ] **S3. Distance.** "The sum of lengths of all its tiles but the first one"
  is exact but hard to read:
	- a) Same values, plain words: each [[Space]] adds its Length, each [[Star]]
	  entered adds 1. Inside one Star nothing is entered: 0.
	- b) Stars add 0, only Spaces count: adjacent Stars are at Distance 1. Every
	  [[Range]] reaches twice as far, so the [[Deck]] needs new values, and a
	  [[Hidden]] card with Range 1 reaches the next Star alone. Not recommended
	  before playtests.

### Actions

- [ ] **S4. Home actions without Direction.** [[Research]] and [[Manage]] Shift
  of piles work on [[Home]] piles, yet they are directed to a
  [[BuildingFacility]] ([[DesignReview]] I75 b, [[RulesReview]] I88 a):
	- a) A Home action has only a source: any [[Star]] [[ControlledBy]] the
	  player, no destination, no [[Range]].
	- b) The same for [[Legacy]], [[Recall]], [[Forecast]] and [[Invent]], which
	  don't name a Direction now.
- [ ] **S5. Move carries cargo, Transport goes.** [[Transport]] repeats
  [[Move]]: Range, free Slots, no depletion, [[Pinning]]:
	- a) One Move: the moving group carries cargo within its total [[Capacity]],
	  the handling rule of [[DesignReview]] P55 says who carries what.
	- b) A [[Hero]] adds Capacity, but cargo needs a [[Ship]] in the group, as
	  now.
	- c) Removes the Transport page, [[Deplete]] 4, the Transport table and
	  [[RulesReview]] I91. [[Export]], [[Smuggle]] and [[HyperPass]] P24 c refer
	  to Move instead.
- [ ] **S6. Explore and Recon are one action.** [[Recon]] is [[Explore]] paid
  with [[AttackPower]]:
	- a) **Explore** is a [[Military]] and [[Science]] [[TechnologyAction]],
	  like [[Create]] is Culture and Production. Flavour names: **Recon** for
	  Military, **Survey** for Science.
	- b) Looking at a rival's [[Hand]] through an [[Academy]] stays Military
	  only, or opens to both.
	- c) One page and one Cost rule instead of two, the [[Technology]] table
	  keeps the cards.
- [ ] **S7. Drop Slot overlap.** The [[DesignReview]] idea **Overlap**, as a
  proposal:
	- a) Every Field card has its [[SecondaryAbility]], a [[Depleted]] Structure
	  still loses it.
	- b) Removes Slot heights, Move within a Star ([[Move]] 2.1), Manage Shift
	  between Slots, [[RulesReview]] I91.
	- c) A Star just holds as many cards as its Size, see [[IPS]].
	- d) Cost: the one mechanic "not seen in other games", see [[Slot]]. Try it
	  in AI playtests first: if nobody shifts, drop it.
- [ ] **S8. Manage only rotates.** After S7 and [[DesignReview]] P56 there is
  nothing left to shift:
	- a) **Manage**: pay 1 power to rotate a card: [[Restore]] or [[Deplete]] a
	  [[Structure]], switch an [[Actor]]'s [[Class]].
	- b) Its table goes with P55.

### Game end

- [ ] **S9. Plain over checks.** [[Goal]] 4.2 "can make neither a Takeoff nor an
  Action" asks to search for a legal move:
	- a) Replace it with: at the start of own [[Turn]] the [[Hand]] is empty and
	  no [[Field]] card has [[Starter]].
	- b) Together with 4.1 (no Star) and 4.3 (no leader) all three are visible
	  on the table.

### States and properties

- [ ] **S10. ActiveFor merges into Standing.** [[ActiveFor]] (not Damaged,
  controlled) and [[Standing]] (Enabled, controlled, on Field, in Hand or
  History) are nearly one state:
	- a) **Standing**: not [[Damaged]] and [[ControlledBy]] the faction: on the
	  Field, in Hand or in [[History]]. Participants are standing cards.
	- b) A [[Hidden]] card is standing too, it is revealed to count for
	  [[CulturePoints]] or [[Singularity]].
	- c) Removes the ActiveFor page.
- [ ] **S11. Damaged cards are open.** [[VisibleFor]] decides who may look at a
  Damaged card, and [[RulesReview]] I88 e shows it leaks Hidden cards:
	- a) Anyone may look at a [[Damaged]] card, nobody at a rival's [[Hidden]]
	  card. A wreck is no secret.
	- b) Removes the VisibleFor page and I88 e.
- [ ] **S12. Size is Cost.** [[Size]] is current [[Level]] + [[ExtraCost]], but
  Level only for a [[Hero]], while [[Cost]] is strong Level + ExtraCost:
	- a) **Size** = Cost for every card: one number, it doesn't change with
	  rotation ([[Deck]] note 2.3 wants that for Ships already).
	- b) A Hero gets 1 heavier, a [[Depleted]] Structure keeps its full Size in
	  [[Transport]].
	- c) Removes the Size defaults and the Hero exception.
- [ ] **S13. Control without levels.** On top of [[DesignReview]] P46:
	- a) A [[Star]] is [[ControlledBy]] the only faction with [[Actor]]s there;
	  with no Actors, by the only faction with [[Structure]]s; else by nobody.
	- b) A Structure is controlled by the controller of its Star, if nobody
	  controls the Star, by its own faction.
	- c) Removes the [[Control]] levels page and [[Disputed]], consensus moves
	  to [[Politics]].

## Already proposed

Simplifications from other reviews: [[DesignReview]] P55 (one handling rule),
P56 (open Laboratory and Factory), P57 (economy roles), P58 (traits instead of
types), [[RulesReview]] P34 (action template), P28 (combat sequence).
