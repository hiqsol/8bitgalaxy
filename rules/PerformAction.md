---
status: polish
scope: core
aliases: [Participants, Direct participant, Targets, Group, Requirements, Declare, Commit, Resolve]
---

1. Player defines an [[Action]] by selecting:
	1. **Starter**: an [[Actor]] from [[Hand]], every [[Action]] has
	   one
	2. **Action**: one of [[Action]]s, it sets the **requirements**:
	   [[Power]], [[Range]], [[Capacity]]
	3. **Direction**: from the **source** to the **destination**, see
	   [[Direction]]:
		1. **Source**: the [[IPS]] of any [[Star]] [[ActiveFor]] the
		   player
		2. **Destination**: a [[Star]] or a [[Space]]
	4. **Participants**: [[Card]]s [[ActiveFor]] the player that give
	   their [[Ability|Abilities]], [[Technology]] included:
		1. **Direct participants**: selected [[Card]]s in the
		   [[Source]] or the [[Destination]] [[IPS]]
		2. **Supporters**: the [[Starter]] from [[Hand]], selected
		   [[Card]]s from [[Hand]] and from other [[IPS]]s, see
		   [[Support]]
	5. **Targets**: [[Card]]s the [[Action]] works on, e.g. the
	   [[Cargo]] of [[Move]]: **Targets** are not **Participants**
2. **Direct participants** use all of their [[Ability|Abilities]],
   **supporters** only one
3. Total **Requirements** of the [[Action]], used
   [[Technology|Technologies]] included, must be satisfied with
   [[Ability|Abilities]] provided by **Participants**. Else the
   [[Action]] **fails**: it yields no result and all its
   **Participants** [[Deplete]]
4. [[Range]] is always a requirement, building included:
	1. The selected **Participants** from one [[IPS]] other than the
	   [[Destination]] form a **group**: the [[Source]] **Group** and
	   remote [[Support]] **Groups**
	2. The [[Starter]] goes with the [[Source]] **Group**, every
	   remote **Group** needs an [[Actor]] from its [[IPS]] or from
	   [[Hand]]
	3. A [[Supporter]] from [[Hand]] joins one **Group** of the
	   player's choice, its [[Range]] counts there
	4. Every **Group** must reach the [[Destination]]: the
	   [[Distance]] from its [[IPS]] must be within the **Group**'s
	   [[Range]], see [[Range]]
	5. [[Card]]s in the [[Destination]] are **Direct participants**
	   without a [[Range]] check
5. Every [[Action]] goes in steps:
	1. **Declare** the [[Starter]], the [[Action]] and its
	   **Direction**
	2. **Commit** **Participants** and their [[Ability|Abilities]]
	   gradually, as information is revealed, e.g. in a [[Combat]]
	3. **Check** the **Requirements** when the player stops
	   committing, before anything resolves or is spent
	4. **Resolve** the result
6. **After action** **Participants** [[Deplete]]

#### Notes

1. In short: to act, play a [[Starter]] from [[Hand]]. Pick a
   [[Source]] [[Star]] you control or dispute and a [[Destination]].
   Your [[Card]]s at both places take part with all
   [[Ability|Abilities]]; [[Card]]s from [[Hand]], and from other
   [[Star]]s within [[Range]], help with one [[Ability]] each. Their
   [[Ability|Abilities]] must cover the **Requirements**. Then the
   used [[Card]]s [[Deplete]], except those that moved or fought; the
   [[Starter]] always does.
2. A failed [[Action]] costs all its [[Card]]s: the player usually
   knows the [[Cost]] before starting, e.g. the [[Price]] of a
   [[Card]] to [[Create]], but not of every [[Action]]
