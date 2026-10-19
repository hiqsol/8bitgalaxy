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

Answer by number and letter, e.g. "S4 a", "S15 yes", "S16 no".

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

## Bookkeeping

What players must remember or track besides the table. Already without
bookkeeping: [[End]], [[Side]] and [[Slot]] show the states, the starter always
depletes ([[Deplete]]), a card can act in the Turn of its [[Takeoff]], overlap
is physical, the Hero check comes at the end of own [[Turn]] ([[Goal]] note 4).

- [ ] **S15. Star Ability without memory.** [[Star]] 7.5 "usable once per own
  Turn" makes players remember which Stars they used, [[RulesReview]] P36 h
  adds a choice when:
	- a) Income Abilities (Energy, Materials, Draw) are taken at the end of own
	  Turn from every controlled Star, with [[Restore]].
	- b) Action Abilities (Power, Defense, Technology) work like a direct
	  participant: the Star adds its Ability to every own action whose source or
	  destination it is.
	- c) Alternative to a) and b): using a Star Ability [[Deplete]]s an own
	  [[Ready]] Structure there, the state is on the table.
- [ ] **S16. One end of Turn sequence.** Steps are spread over pages:
  [[Restore]], [[Goal]] 4.3, [[Singularity]], [[Objective]] 7, Hyperstructure
  Dyson Sphere income, Discard and [[Draw]]. Start of Turn has Goal 4.1-4.2:
	- a) [[Turn]] 3 lists every end of Turn step in order, pages link it.
	- b) [[Turn]] gets a start of Turn step with the Goal checks.
- [ ] **S17. Objectives on the table.** [[Objective]] "Win 2 Combats" needs a
  count of past combats:
	- a) Objectives check only the current table, like [[CulturePoints]]:
	  control 3 Stars, have 4 technologies, hold a rival's home Star.
- [ ] **S18. Open tokens.** [[Energy]] tokens are in [[Hand]], whose cards are
  secret:
	- a) Tokens lie open beside the Hand: rivals see the Boost reserve without
	  asking, like a TI trade good.

## Already proposed

Simplifications from other reviews: [[DesignReview]] P55 (one handling rule),
P57 (economy roles), P58 (traits instead of types), [[RulesReview]] P34 (action
template), P28 (combat sequence).
