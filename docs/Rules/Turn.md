---
status: draft
scope: core
---

1. A **turn** has four phases, in this order: **Play**, **Check**,
   **Draw**, **Restore**
2. **Play**: player plays cards from [[Hand]], in any order. Each
   played card either:
	1. Goes to [[Field]] with [[Takeoff]]
	2. Starts an [[Action]] as its **starter**, see [[PerformAction]]
	3. Joins an [[Action]] as a [[Support]]er
3. Player can't pass: makes at least one [[Takeoff]] or [[Action]],
   then may end **Play**. A player who can't **can not make a move**:
   the [[Faction]] is over, see [[Goal]]
4. **Check**: the [[Goal]] is checked, then player scores one
   [[Objective]], with the `objectives` extension
5. **Draw**: unused cards from [[Hand]] go to [[Discard]], then player
   [[Draw]]s a full [[Hand]]
6. **Restore**: [[Restore]] 3 [[Structure]]s [[ControlledBy]] the
   player

#### Notes

1. The [[Hand]] is the budget of the **turn**: no action counting and
   no checks. Battle tested in Star Realms.
2. Cards drawn at **Draw** stay in [[Hand]] during the rivals' turns,
   so they can be used for defense in [[Combat]]. Cards used for
   defense are missing at your own turn.
3. Drawing at the end of turn speeds the game up: player sees the next
   hand and plans it during rivals' turns
4. Allows Star Realms mechanics: draw a card (`+Draw` [[Plus]]), rival
   discards ([[ForceDiscard]])
5. Every turn shows the player is alive: no pass, at least one
   [[Takeoff]] or [[Action]]
6. **Restore** comes after **Draw**: player sees the next [[Hand]] and
   restores the [[Structure]]s it needs
