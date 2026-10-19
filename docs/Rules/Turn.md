---
status: draft
scope: core
---

1. **Start of turn**: a player who can make neither a [[Takeoff]] nor an
   [[Action]] is over, see [[Goal]]
2. Each **turn** player plays cards from [[Hand]] one by one, in any order. Each
   played card either:
	1. Goes to [[Field]] with [[Takeoff]] or
	2. Starts an [[Action]] as its **starter**, see [[PerformAction]]
3. More cards from [[Hand]] can join an action as [[Support]]ers
4. Player can't pass: plays at least one card
5. **End of turn**, in this order:
	1. [[Restore]] 1 [[Structure]] [[ControlledBy]] the player, more with
	   `+Restore` [[Plus]]
	2. Income: Dyson Sphere [[Hyperstructure]] gives 2 [[Energy]]
	3. Check the [[Goal]]: **has no leader**, [[Singularity]]
	4. Score one [[Objective]], with the `objectives` extension
	5. Unused cards from [[Hand]] go to [[Discard]]
	6. [[Draw]] a full [[Hand]]
6. At rivals' turns cards from [[Hand]] can only join [[Combat]] as supporters

#### Notes

1. The [[Hand]] is the budget of the **turn**: no action counting and no checks.
   Battle tested in Star Realms.
2. Cards drawn at the end of the turn stay in [[Hand]] during the rivals' turns,
   so they can be used for defense in [[Combat]]. Cards used for defense are
   missing at your own turn.
3. Drawing at the end of turn speeds the game up: player sees the next hand and
   plans it during rivals' turns
4. Allows Star Realms mechanics: draw a card (`+Draw` [[Plus]]), rival discards
   ([[ForceDiscard]])
5. Every turn shows the player is alive: no pass, at least one card is played
6. All the steps of the start and the end of turn are listed here, so none is
   forgotten
