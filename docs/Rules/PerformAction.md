---
status: draft
scope: core
---

1. Player defines an [[Action]] by selecting:
	1. **Starter**: an [[Actor]] from [[Hand]] or a [[Field]] card with
	   [[Starter]], every action has one
	2. **Action**: one of [[Action]]s, it sets the **requirements**: [[Power]],
	   [[Range]], [[Capacity]]
	3. **Direction**: from the **source** to the **destination**, see
	   [[Direction]]:
		1. **Source**: the [[IPS]] of any [[Star]] [[ControlledBy]] the player,
		   for a Field starter its own IPS
		2. **Destination**: a [[Star]] or a [[Space]]
	4. **Participants**: cards [[ActiveFor]] the player that give their
	   [[Ability|abilities]], [[Technology]] included:
		1. **Direct participants**: selected cards in the source or the
		   destination IPS
		2. **Supporters**: the starter from Hand, selected cards from Hand and
		   from other IPSs, see [[Support]]
	5. **Targets**: cards the action works on, e.g. the cargo of [[Transport]]
	   or the card to [[Recover]]: targets are not participants
2. **Direct participants** use all of their abilities, **supporters** only one
3. Total requirements of the action, used technologies included, must be
   satisfied with abilities provided by participants. Else action is not
   successful and doesn't yield result but resources are spent.
4. [[Range]] is always a requirement, building included:
	1. The selected participants from one IPS form a **group**
	2. Every group must reach the destination: the [[Distance]] from its IPS
	   must be within the group's Range, see [[Range]]
	3. For the source group it is the [[Direction]] length, for the destination
	   group it is 0
5. Action can be extended (increased list of participants and used abilities)
   gradually with revealed information. For example for [[Explore]] or
   [[Combat]]
6. **After action** [[Deplete]] must be applied to all participants unless the
   action defines an exception
7. In [[Combat]] the defender's cards in the destination take part as defending
   direct participants, see [[Combat]]

#### Notes

1. A direct participant on [[Field]] gives more than a card in [[Hand]]: all of
   its abilities instead of one. That's what [[Takeoff]] is for.
2. Positions matter: a card acts fully at either end of the Direction, from any
   other IPS it gives one ability and must reach the destination
3. In short: a starter, the cards at both ends, and help from Hand and from
   other Stars
