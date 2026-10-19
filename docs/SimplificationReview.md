---
date: 2026-10-18
updated: 2026-10-19
status: WIP
scope: meta
---

# Simplification review

Review of the action rules: their inner logic and ideas to make the rules
shorter without losing decisions. Complements [[RulesReview]] and
[[DesignReview]]. Simplifications are numbered `S<n>`.

Answer by number and letter, e.g. "S4 a", "S4 no".

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
  Cards that move or fight hold the ground and don't wear, the starter always
  wears.
- **The loop.** [[Takeoff]] → act from the Field → Discard → [[Draw]] → Takeoff
  again. A Field card is worth more than a Hand card (all abilities, `+Y`
  power), it costs a Takeoff and comes back to the deck when used.
- **What moves.** [[Actor]]s move on their own, Range above 0, a [[Move]] costs
  only its starter. [[Structure]]s, Range 0, are shifted by [[Manage]] for power
  or carried as cargo of a Move: options, both cost a starter.
- **No memory.** The table shows the state: [[End]], [[Side]] and [[Slot]]
  show the states, Energy tokens lie open, the starter always depletes, a card
  can act in the Turn of its [[Takeoff]], [[Turn]] lists every start and end
  step, [[Objective]]s check only the current table.
- **Applied wording.** [[PerformAction]] is reworded along these lines: starter,
  Direction, direct participants at both ends, supporters, **targets** (cards
  the action works on, not participants), one group per IPS.

## Simplifications

### Actions

- [ ] **S4. Home actions without Direction.** [[Research]] and [[Manage]] Shift
  of piles work on [[Home]] piles, yet they are directed to a
  [[BuildingFacility]] ([[DesignReview]] I75 b):
	- a) A Home action has only a source: any [[Star]] [[ControlledBy]] the
	  player, no destination, no [[Range]].
	- b) The same for [[Legacy]], [[Recall]], [[Forecast]] and [[Invent]], which
	  don't name a Direction now.
	- c) Why: nothing on the [[Field]] changes, the destination only adds a
	  Range check. Usually the player picks the facility's Star as the source,
	  [[Distance]] 0, so the check costs nothing but rules text and a step for
	  AI players. Half the Home actions name no Direction at all.
	- d) What it removes: the facility as a target of Research. Today a lost
	  [[Academy]] stops [[Social]] Research too, not only [[Create]]. If that
	  pressure is wanted, keep the Direction and only add one for b).

## Already proposed

Simplifications from other reviews: [[DesignReview]] P55 (one handling rule),
P57 (economy roles), P58 (traits instead of types), [[RulesReview]] P34 (action
template), P28 (combat sequence).
