---
status: draft
scope: core
---

1. Action is defined with **selected**:
	1. **Starter** - an [[Actor]] from [[Hand]], or a [[Field]] card with [[Starter]]:
		1. Every action has a starter
		2. Defines the **source**: [[IPS]] of any [[Star]] [[ControlledBy]] the player, where the starter could [[Takeoff]], or the Field starter's own IPS
	2. **Action** - one of [[Action]]s, defines list of **requirements**, can be:
		1. [[Power]]
		2. [[Range]]
		3. [[Capacity]]
	3. **Participants**:
		1. **Direct**:
			1. Selected cards in the **source** [[IPS]]
		2. **Supporters**:
			1. The **starter**
			2. Selected cards in [[Hand]]
			3. Selected cards [[ActiveFor]] player on [[Field]]
	4. Participants [[Ability]]:
		1. Including [[Technology]]
	5. **Destination** - [[Star]] or [[Space]]
2. **Direct participants** can use all of their abilities
3. **Supporters** can use only one of their abilities
4. Total requirements of the action (including used technologies) must be satisfied with abilities provided by participants. Else action is not successful and doesn't yield result but resources are spent.
	1. [[Range]] is always a requirement, building included: the [[Direction]] length must be within the Range of the group, see [[Range]]
5. Action can be extended (increased list of participants and used abilities) gradually with revealed information. For example for [[Explore]] or [[Combat]]
6. **After action** [[Deplete]] must be applied to all participants unless the action defines an exception

#### Notes

1. A card on [[Field]] gives more than a card in [[Hand]]: all of its abilities instead of one. That's what [[Takeoff]] is for.
