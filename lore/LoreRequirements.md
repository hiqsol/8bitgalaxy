---
status: draft
scope: lore
---

# Lore requirements

These are what a lore of the game has to explain. The rules stay the
source of truth: when a rule changes, its requirement changes too, and
so do the laws that answer it.

Core is an extensible framework: any faction or card can change any
rule, see [[index]]. So a lore explains the principles, which hold for
every faction, and not the numbers, which a card may change. Nor does
a lore limit designs: a faction builds whatever it wants, and a deck
may hold copies of a card.

Every rule fact belongs to one of four kinds:

1. **Required**: a world fact that shapes every game and that a reader
   would ask about. Every lore must explain it.
2. **Follows**: a fact that follows from a required one or from
   common sense. A lore needs at most a phrase for it, and the phrase
   should come from its required fact, not a new invention.
3. **Form**: the shape of the game itself: deck building, piles,
   card states, turn structure. A lore doesn't describe it at all.
4. **Optional**: a core number, or a trait of a faction deck, a
   technology or a scenario, e.g. the Hand size or the Human and
   Alien Deck. Another faction or card may change it, so a lore must
   not build on it.

[[Warpwake]], [[Assay]] and [[Overtone]] answer the required facts in
their Laws tables by number.

## Required

1. **The tear: few places in a Star**. [[Star]] 3, [[IPS]] 2,
   [[Slot]] 6. A whole star system holds only a few cards, and a card
   can't come in without a free Slot. Author's idea: a Slot is a Warp
   orbit, not a gravitational one: ships are huge, and warp tears
   space-time, so a Star holds only a few Warp orbits.
	1. Follows: acting tears further, so a used card has to give way.
	   A Unit leaves for the [[Discard]] and a Structure drops to its
	   weak End, see [[Deplete]]
	2. Follows: no discard at will, [[Discard]] 3. Leaving is a
	   movement that frees space, and freeing space never comes free
	3. Follows: a lower card disturbs the one above it, so the upper
	   card loses its Secondary Ability, [[Slot]] 5
	4. Follows: a wreck keeps its Slot until it is Destroyed or
	   Enabled, [[Damaged]] 5
2. **No stop in Space**. [[Space]] 5. Cards can't stop between Stars,
   they only pass through.
	1. Follows: every Star passed on the way counts in the
	   [[Distance]]
3. **Everything is seen**. [[Lore]] 3, [[Discard]] 2, [[Energy]] 6,
   [[Damaged]] 6. Every action, every card on the Field, the Discard
   and the tokens are open to everyone.
	1. Follows: hiding takes a technology, today [[Stealth]]
	2. Follows: a [[Hidden]] card moves as a minimal Ship, because
	   what can't be seen can't be checked, [[Hidden]] note 1
4. **Known distance, unknown contents**. [[Space]] 4, note 1. A
   Space's Length is known from afar. Its Type and Price stay hidden
   until it is explored.
	1. Follows: Space types are features found by exploring, e.g. a
	   [[Void]] can't be passed, [[Asteroids]] yield Goods
5. **A group reaches farther**. [[Range]] 4. A group's Range is the
   sum of its cards' Ranges, so a fleet reaches farther than its
   fastest ship.
	1. Follows: Range is the Level of an Actor and 0 for a Structure,
	   [[Range]] 3
	2. Follows: rival Military Actors stop a moving group, but not a
	   remote help, [[Pinning]]
6. **Presence that acts holds a Star**. [[Control]], [[Disputed]]. An
   Actor outranks a Structure. Equal presence makes a front: nobody
   holds it, each side keeps its own cards and acts there.
	1. Follows: the controller answers rival cards that come in,
	   [[Intercept]]
7. **The ground holds the fallen**. [[ControlledBy]] 3. The
   Structures and Damaged cards in a Star belong to whoever controls
   the Star, a front captures nothing.
	1. Follows: every captured Structure serves its captor, a hub like
	   any other, [[Hub]] note 1, [[Hyperstructure]] 11, and a
	   captured Social Structure scores for it, [[VictoryPoints]] 1
	2. Follows: a Damaged Hero in a rival's Star is a captive, and
	   once it is Enabled again it is its own faction's,
	   [[ControlledBy]] 3
8. **Alive and made**. [[Origin]], [[Hub]], [[Create]] 4. Social
   cards are alive and Industrial cards are made, and each kind needs
   its own hub. The living are created only at the first Level.
	1. Follows: a [[Hyperstructure]] is both, so it is built twice,
	   once as each
	2. Follows: what a Class handles, [[Class]] 5. Culture carries the
	   living, Production the made, Military those who act, and
	   Science anything
	3. Follows: what is destroyed can be built again, [[Destroy]]
	4. Follows: only the living score, [[VictoryPoints]]
9. **Leaders**. [[Goal]] 7, [[Hero]]. A faction lives while one of
   its Heroes lives. Heroes are its leaders, and a Hero is as potent
   as a huge ship: it takes a Slot, reaches and acts like one.
   Author's idea: Heroes are living beings upgraded with Warp.
	1. Follows: the dead are counted, not the living: Damaged, not yet
	   built, not yet researched, [[Goal]] note 5
10. **Home is not everything**. [[Goal]] notes 6, 7,
    [[ActiveFor]] 3. A faction lives while it has a Star to
    [[Takeoff]] into and act from: one it controls, or a [[Disputed]]
    one where it is among the tied. Losing the home Star doesn't end
    a faction, but losing the last such Star does.
11. **Guardians of the wild Stars**. [[Ancient]], [[Wild]]. Ancients
    guard the Wild Stars, more of them for a better World. They are
    never Damaged, and they come back.
	1. Follows: a conquest finds the World its attackers are equipped
	   for, [[Wild]] 3.1
12. **Four paths**. [[Goal]], [[Class]]. Military, Culture,
    Production and Science are four ways to greatness. Military ends
    the rivals; each of the other three starts the end of the game.
	1. Follows: [[Singularity]] counts the top cards held, not the
	   ones used, [[Singularity]] note 4
	2. Follows: [[GalacticDiaspora|Galactic Diaspora]] means living
	   everywhere, without ruling

## Form

The game's own shape. A lore doesn't describe these, although a story
may show one in passing:

1. **Deck building**: which cards a deck holds and how many copies,
   [[Hand]], Draw, [[Reserve]], Shuffle and the
   order of the [[Discard]], the Hand held through the rivals' Turns,
   unused cards discarded at Draw, see [[DeckBuilding]], [[Turn]]
2. **From Hand to the Field**: [[Takeoff]] into any active Star, a
   starter from Hand, supporters with one Ability each, see
   [[PerformAction]], [[Support]]
3. **Piles**: [[Factory]] and [[Laboratory]] rows, the top card
   only, moving cards between piles, a subgame of its own
4. **Card states**: Side and End show Ready, Depleted, Damaged and
   Hidden, see [[State]], [[End]]
5. **Tokens**: Energy in Hand and Goods in a Star, and their limits,
   see [[Component]], [[Energy]], [[Goods]]
6. **Turn phases** and the last Turn of [[Twilight]]
7. **Prerequisites** as pairs of Level and Class, see
   [[Prerequisites]]
8. **Combat procedure**: rounds, the tie, saves, see [[Combat]],
   which is on hold

## Optional

Core numbers and traits of a faction deck, a technology or a
scenario. A lore may mention one as a trait of Human and Alien, and
must not build on it:

1. **Numbers**: the Hand size 5, Restore 3, 4 Factory and 5
   Laboratory piles. These are core numbers, and any faction or card
   can change them, see [[Hand]] 3, [[Turn]] 6
2. **The same Deck for Human and Alien**: symmetric factions,
   asymmetric ones come later, see [[Faction]] 5
3. **Levels 1 to 8 and the crowns**: the top Level comes from the
   faction deck, see [[Singularity]] note 1, [[Deck]]
4. **The Deck's End pairs** 2/1, 4/3, 6/5, 8/7 and the Class of each
   End, see [[Deck]] 5
5. **Tools as junk**, see [[Tool]]
6. **Grow one Level at a time**, see [[Upgrade]]
7. **Technologies**: Explore's Cost shown after the start, Stealth,
   Navigation, Recover and the rest, see [[Technology]]
8. **The Homeworld** and its rebuilding in a Wild Star, see
   [[Homeworld]]
9. **Field layouts and Space tiles** of a scenario, see [[Duel]]
10. **Ancient counts**: as many as the World's Price is a first guess,
    see [[Ancient]] note 4
