---
status: draft
scope: galaxy
aliases: [Ancient Outbreak, Ancient Invasion, Ancient production, Peace Treaty]
---

1. **Event** is a [[Card]] [[Type]]
2. **Event** represents something that happens in the galaxy
3. [[Role]] = [[Agenda]]
4. [[Origin]] = none
5. **Event** [[Card]]s come from the [[GalaxyDeck]] and are played out
   in two steps:
	1. Preparation - a [[GalaxyMove]] puts the **event** [[Card]] to
	   [[FutureEvents]] pile
	2. Evaluation - **event** [[Card]] is revealed then its text is
	   implemented
6. The player resolving **event** has control over anything not
   explicitly stated in the **Event** description.
7. **Event** classes:
	1. [[Military]] - hostile for players from [[Ancient]]s - they
	   breed, spread and attack
	2. [[Culture]] - positive for players, related to growth
	3. [[Production]] - positive for all, related to development
	4. [[Science]] - negative for all, global disasters
8. An **event** that treats [[Faction]]s by strength names its own
   measure, e.g. **Peace Treaty**

#### Notes

1. **Events** should perform a catch-up function:
	1. Give less to stronger [[Faction]]s
	2. Seize more from stronger [[Faction]]s
2. **Events** can apply to:
	1. Each [[Faction]]
	2. Player [[Faction]]s
	3. [[Ancient]]s
3. **Events** can affect:
	1. [[Card]]s: add, remove, move, hide or reveal
	2. [[Resource]]s: add or remove reserves
	3. [[Field]]: hide or reveal [[Space]], or move a
	   [[WarpStorm|Warp storm]]

### Event Examples

1. **Supernova**: [[Destroy]] everything in the most occupied [[Star]]
   and put [[Supernova]] at any preferably unexplored [[Space]] around
   it
2. **Ancient Outbreak**: add 1 [[Ancient]] to each [[Star]] with an
   [[Ancient]] in it
3. **Ancient Invasion**: add 1 [[Ancient]] [[Unit]] openly to every
   bordering [[Star]] and attack where possible
4. **Ancient production**: [[Ancient]]s produce 2 [[Goods]] in every
   [[Star]] [[ControlledBy]] them
5. **Peace Treaty**: the player [[Faction]]s with the highest
   [[Military]] [[Level]] each lose one [[ActiveFor|Active]]
   [[Military]] [[Card]] of their choice
