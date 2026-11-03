---
status: draft
scope: core
aliases: [Play, Check]
---

1. A **turn** has four phases, in this order: **Play**, **Check**,
   **Draw**, **Restore**
2. **Play**: player plays [[Card]]s from [[Hand]], in any order. Each
   played [[Card]] either:
	1. Goes to [[Field]] with [[Takeoff]]
	2. Starts an [[Action]] as its **starter**, see [[PerformAction]]
	3. Joins an [[Action]] as a [[Support]]er
3. Player can't pass: makes at least one [[Takeoff]] or [[Action]],
   then may end **Play**
4. **Check**: the [[Goal]] is checked
5. **Draw**: unused [[Card]]s from [[Hand]] go to [[Discard]], then
   player [[DeckBuilding|Draw]]s a full [[Hand]]
6. **Restore**: [[Restore]] 3 [[Structure]]s [[ControlledBy]] the
   player

#### Notes

1. The [[Hand]] is the budget of the **turn**: no [[Action]] counting
   and no checks. Battle tested in Star Realms.
2. [[Card]]s drawn at **Draw** stay in [[Hand]] during the rivals'
   **Turns**, so they can be used for defense in [[Combat]]. [[Card]]s
   used for defense are missing at your own **Turn**.
3. Drawing at the end of **Turn** speeds the game up: player sees the
   next [[Hand]] and plans it during rivals' **Turns**
4. Allows Star Realms mechanics, e.g. [[Draw]] a [[Card]]: `+Draw`
   [[Plus]]
5. Every **Turn** shows the player is alive
6. **Restore** comes after **Draw**: player sees the next [[Hand]] and
   [[Restore]]s the [[Structure]]s it needs
