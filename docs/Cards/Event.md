---
status: draft
scope: galaxy
---

1. **Event** is a card [[Type]]
2. **Event** represents something that happens in the galaxy
3. [[Role]] = [[Agenda]]
4. [[Origin]] = none
5. **Event** cards come from the [[GalaxyDeck]] and are played out in
   two steps:
	1. Preparation - a [[GalaxyMove]] puts the **event** card to
	   [[FutureEvents]] pile
	2. Evaluation - **event** card is revealed then its text is
	   implemented
6. The player resolving **event** has control over anything not
   explicitly stated in the event description.
7. Event classes:
	1. [[Military]] - hostile for players from [[Alien]]s - they
	   breed, spread and attack
	2. [[Culture]] - positive for players, related to growth
	3. [[Production]] - positive for all, related to development
	4. [[Science]] - negative for all, global disasters

#### Notes

1. Events should perform a catch-up function:
	1. Give less to stronger factions
	2. Seize more from stronger factions
2. Events can apply to:
	1. Each faction
	2. Player factions
	3. [[Alien]]s
3. Events can affect:
	1. Cards: add, remove, move, hide or reveal
	2. Resources: add or remove reserves
	3. [[Field]]: hide or reveal Space, or move a warp storm

### Event Examples

1. **Supernova**: destroy everything in the most occupied star and put
   [[Supernova]] at any preferably unexplored Space around it
2. **Alien Outbreak**: add 1 [[Alien]] to each Star with an Alien in
   it
3. **Alien Invasion**: add 1 Alien [[Unit]] openly to every bordering
   Star and attack where possible
4. **Alien production**: Aliens produce 2 [[Materials]] in every
   [[Star]] [[ControlledBy]] them
