---
status: polish
scope: core
aliases: [Action, Direction, Source, Destination, Participants, Direct participant, Targets, Group, Requirements, Declare, Commit, Resolve]
---

1. Player defines an **Action** by selecting:
	1. **Starter**: an [[Actor]] from [[Hand]], every **Action** has
	   one
	2. **Action**: a [[BasicAction]] or a [[TechnologyAction]], it
	   sets the **requirements**: [[Power]], [[Range]], [[Capacity]];
	   an **Action** is of the [[Class]] its page names, of several
	   [[Class]]es of the one its [[Cost]] is paid in
	3. **Direction**: where the **Action** goes, from the **source**,
	   where it starts, to the **destination**, where it finishes; its
	   length is the [[Distance]] between them:
		1. **Source**: any [[Star]] [[ActiveFor]] the player
		2. **Destination**: a [[Star]] or a [[Space]]; an **Action**
		   directed to a [[Card]], e.g. to a [[Hub]], is directed to
		   the [[Star]] the [[Card]] is in
	4. **Participants**: [[Card]]s [[ActiveFor]] the player that give
	   their [[Ability|Abilities]], [[Technology]] included:
		1. **Direct participants**: selected [[Card]]s in the
		   **Source** or the **Destination** [[Star]]
		2. **Supporters**: the [[Starter]] from [[Hand]], selected
		   [[Card]]s from [[Hand]] and from other [[Star]]s, see
		   [[Support]]
	5. **Targets**: [[Card]]s the **Action** works on, e.g. the
	   [[Cargo]] of [[Move]]: **Targets** are not **Participants**
2. **Direct participants** use all of their [[Ability|Abilities]],
   **supporters** only one
3. Total **Requirements** of the **Action**, used
   [[Technology|Technologies]] included, must be satisfied with
   [[Ability|Abilities]] provided by **Participants**. Else the
   **Action** **fails**: it yields no result and all its
   **Participants** [[Deplete]]
4. [[Range]] is always a requirement, building included:
	1. The selected **Participants** from one [[Star]] other than the
	   **Destination** form a **group**: the **Source** **Group** and
	   remote [[Support]] **Groups**
	2. The [[Starter]] goes with the **Source** **Group**, every
	   remote **Group** needs an [[Actor]] from its [[Star]] or from
	   [[Hand]]
	3. A [[Supporter]] from [[Hand]] joins one **Group** of the
	   player's choice, its [[Range]] counts there
	4. Every **Group** must reach the **Destination**: the
	   [[Distance]] from its [[Star]] must be within the **Group**'s
	   [[Range]], see [[Range]]
	5. [[Card]]s in the **Destination** are **Direct participants**
	   without a [[Range]] check, they add their [[Range]] to the
	   **Source** **Group**
5. Every **Action** goes in steps:
	1. **Declare** the [[Starter]], the **Action** and its
	   **Direction**
	2. **Commit** **Participants** and their [[Ability|Abilities]]
	   gradually, as information is revealed, e.g. in a [[Combat]]
	3. **Check** the **Requirements** when the player stops
	   committing, before anything resolves or is spent
	4. **Resolve** the result
6. **After action** **Participants** [[Deplete]]

#### Notes

1. In short: to act, play a [[Starter]] from [[Hand]]. Pick a
   **Source** [[Star]] you control or dispute and a **Destination**.
   Your [[Card]]s at both places take part with all
   [[Ability|Abilities]]; [[Card]]s from [[Hand]], and from other
   [[Star]]s within [[Range]], help with one [[Ability]] each. Their
   [[Ability|Abilities]] must cover the **Requirements**. Then the
   used [[Card]]s [[Deplete]], except [[Unit]]s that moved or fought;
   the [[Starter]] always does.
2. A failed **Action** costs all its [[Card]]s: the player usually
   knows the [[Cost]] before starting, e.g. the [[Price]] of a
   [[Card]] to [[Create]], but not of every **Action**
