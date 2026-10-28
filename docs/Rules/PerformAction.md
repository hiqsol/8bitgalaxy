---
status: draft
scope: core
---

1. Player defines an [[Action]] by selecting:
	1. **Starter**: an [[Actor]] from [[Hand]], every action has one
	2. **Action**: one of [[Action]]s, it sets the **requirements**:
	   [[Power]], [[Range]], [[Capacity]]
	3. **Direction**: from the **source** to the **destination**, see
	   [[Direction]]:
		1. **Source**: the [[IPS]] of any [[Star]] [[ControlledBy]]
		   the player
		2. **Destination**: a [[Star]] or a [[Space]]
	4. **Participants**: cards [[ActiveFor]] the player that give
	   their [[Ability|abilities]], [[Technology]] included:
		1. **Direct participants**: selected cards in the source or
		   the destination IPS
		2. **Supporters**: the starter from Hand, selected cards from
		   Hand and from other IPSs, see [[Support]]
	5. **Targets**: cards the action works on, e.g. the cargo of
	   [[Move]]: targets are not participants
2. **Direct participants** use all of their abilities, **supporters**
   only one
3. Total requirements of the action, used technologies included, must
   be satisfied with abilities provided by participants. Else the
   action **fails**: it yields no result and all its participants
   [[Deplete]]
4. [[Range]] is always a requirement, building included:
	1. The selected participants from one IPS other than the
	   destination form a **group**: the source group and remote
	   [[Support]] groups
	2. The starter goes with the source group, every remote group
	   needs an [[Actor]] from its IPS or from [[Hand]]
	3. A supporter from Hand joins one group of the player's choice,
	   its Range counts there
	4. Every group must reach the destination: the [[Distance]] from
	   its IPS must be within the group's Range, see [[Range]]
	5. Cards in the destination are direct participants without a
	   Range check
5. Every action goes in steps:
	1. **Declare** the starter, the action and its **Direction**
	2. **Commit** participants and their abilities gradually, as
	   information is revealed, e.g. in a [[Combat]]
	3. **Check** the requirements when the player stops committing,
	   before anything resolves or is spent
	4. **Resolve** the result
6. **After action** participants [[Deplete]]

#### Notes

1. In short: to act, play a starter from Hand. Pick a source Star you
   control and a destination. Your cards at both places take part with
   all abilities; cards from Hand, and from other Stars within Range,
   help with one ability each. Their abilities must cover the
   requirements. Then the used cards deplete, except those that moved
   or fought; the starter always does.
2. A failed action costs all its cards: the player usually knows the
   Cost before starting, e.g. the [[Price]] of a card to [[Create]],
   but not of every action
