---
status: draft
scope: meta
---

# War economy

What war costs and what it pays, 2026-11-07: real-world war
economics, chess, 4X games and wargames, compared with the measured
[[Combat]] economy of this game. It builds on [[CombatVariants]]: the
same simulator, the same 400 setups, [[Hand]]s of [[Unit]]s, the
rules of the [[Combat]] guidance, the same unit, HC, one [[Hand]]
[[Card]] equivalent. [[Duel]] only. Nothing is applied to the rules.

## Summary

1. **A battle costs both sides about a [[Turn]]**: under V13 the
   [[Attacker]] loses 4.0 HC and the [[Defender]] 4.9 per [[Attack]],
   nearly two full [[Hand]]s together. War is the most expensive thing
   a player does, as in the real world
2. **A chosen [[Attack]] returns 68% over building under V13, 42%
   under the current rules**, and 2 setups in 3 offer one. The war
   surplus per opportunity is 1.5-1.7 HC, a third of a [[Turn]]: war
   pays, but doesn't dominate building
3. **The defense advantage now has the real-world shape**: it lives in
   the garrison, a [[Ship]] defends with twice its attack. The
   [[Hand]] adds a modest reserve, 3.5 [[Defense]], of [[Military]]
   [[Card]]s only, about what it can add to an [[Attack]]
4. **V13 gives war the shape of the classic wargame odds table**:
   hopeless attacks are routed (−4.9 HC), even ones bleed both sides,
   overwhelming ones win cheaply (+6 to +7 HC). The current rules have
   a flat curve: a hopeless [[Attack]] costs about 1 HC, which is the
   I81 exploit. Concentration pays, as Lanchester's square law says
5. **The [[Hand]] reserve deters more than it fights**: the
   [[Defender]] spends 0.8-1 [[Card]] per [[Attack]], and never its
   last one, which would make it **Fallen**
6. **Damaged is half a step**: [[Recover]] at half the [[Price]] costs
   56-64% of a rebuild, the starter [[Card]] is most of it.
   Real repairs cost a fraction; a yard that repairs a whole
   [[Star]] at once would get there
7. **Loot goes to whoever holds the field**, in history and in your
   [[Salvage]]: only a side standing in the [[Star]] takes it.
   Measured, it no longer feeds the exploit: profitable lost attacks
   fall from 28% to 24%
8. **Deck composition is now guns or butter**: only [[Military]]
   [[Card]]s defend from [[Hand]], so a deck of economic [[Card]]s is
   defenseless at the rival's [[Turn]]
9. **[[ForceDiscard]] stopped being a siege engine**: the rival
   discards a [[Card]] that defends with 0. Economic warfare now hits
   the economy, the blockade, not the defense

## The war ledger

Measured on the [[CombatVariants]] setups: the attacks a player
chooses, HC per [[Attack]]. The cost includes spent [[Hand]] [[Card]]s
and the [[Recover]] or rebuild cost of the losses. The gain counts
the [[Defender]]'s loss and a taken [[Star]] at 3 HC: in a [[Duel]]
every loss of the rival is a relative gain.

| Variant | [[Attack]]s made | A wins | A loses | D loses | Exchange | Net per [[Attack]] | Return | Surplus per setup |
|---|---|---|---|---|---|---|---|---|
| V0 current | 86% | 40% | 4.0 | 4.5 | 1.12 | +1.7 | 42% | 1.5 |
| V12 direct margin | 64% | 61% | 3.7 | 4.5 | 1.19 | +2.5 | 68% | 1.6 |
| V13 direct, rout | 63% | 61% | 4.0 | 4.9 | 1.22 | +2.7 | 68% | 1.7 |
| V16 garrison reserve | 68% | 67% | 3.8 | 4.8 | 1.27 | +3.0 | 79% | 2.1 |
| V17 captured [[Hero]]es | 63% | 61% | 3.9 | 4.8 | 1.23 | +2.7 | 70% | 1.7 |

1. **Exchange**: the [[Defender]]'s loss over the [[Attacker]]'s. It
   is above 1 because players attack only when it pays
2. **Return**: the net gain over the [[Attacker]]'s cost. The cost
   already counts what the spent [[Card]]s would have built, so the
   return is the surplus of war over building
3. **Surplus per setup**: [[Attack]]s made × net per [[Attack]], the
   value of having a war option at all. A [[Turn]] is 5 HC. With a
   [[Star]] worth nothing it falls to 0.6-0.8, with a [[Star]] worth
   6 HC it rises to 2.7-3.1
4. The current rules attack the most and earn the least: a third of
   their [[Attack]]s are cheap lotteries, lost on purpose

### The odds curve

Every setup attacked, chosen or not. The odds are the [[Attacker]]'s
[[MilitaryPower]] in [[Field]] and [[Hand]] over the [[Defender]]'s
[[Defense]] in the [[Star]] and its best 4 [[Hand]] [[Card]]s. Net HC
per [[Attack]]:

| Odds | Setups | V0 A wins | V0 net | V13 A wins | V13 net | V13 rout |
|---|---|---|---|---|---|---|
| under 1:2 | 75 | 0% | −1.1 | 0% | −4.9 | 100% |
| 1:2 to 3:4 | 83 | 0% | −0.4 | 0% | −3.3 | 54% |
| 3:4 to 1:1 | 56 | 4% | +0.6 | 7% | −1.4 | 16% |
| 1:1 to 3:2 | 81 | 46% | +1.7 | 64% | +2.5 | 10% |
| 3:2 to 2:1 | 52 | 96% | +4.0 | 100% | +5.8 | 44% |
| over 2:1 | 53 | 94% | +4.4 | 100% | +6.9 | 75% |

1. Under V0 an [[Attack]] at bad odds costs about 1 HC, and from 3:4
   it pays though it loses: a loss Damages the guard, a cheap lottery
2. Under V13 a bad [[Attack]] is a disaster, the [[Attacker]] is
   routed, and a good one is a triumph. The break-even moves from
   about 3:4 to 1:1, and the payoff is twice as steep: a real
   decision on each side of it
3. The rout rate is U-shaped: the [[Attacker]] routed at low odds, the
   [[Defender]] at high odds. The middle is the bloody exchange

## Ten laws of war economy

Each law: what history shows, what games do with it, where this game
stands.

### 1. Defense is the stronger form

1. **Real world**: Clausewitz calls defense "the stronger form of
   war". The 3:1 rule of thumb asks an attacker for local superiority
   of three to one. Dupuy's quantified model weighs a prepared defense
   at about 1.3 to 1.6, the rest of the 3:1 comes from the attacker's
   higher losses
2. **Chess**: no multiplier at all, a defended piece is defended by
   the threat of recapture. [[Defense]] is tempo: every protecting
   move is a move not spent attacking
3. **Wargames**: the combat results table needs 3:1 for a sure result,
   terrain doubles or triples the defender. Hex-and-counter games
   from Afrika Korps on
4. **4X**: Civilization city walls and fortification, Twilight
   Imperium planetary defense and space docks, Eclipse starbases. The
   bonus is tied to the place, and built for a price
5. **This game**: a [[Ship]] attacks with half its [[Level]] and
   defends with all of it, 2:1, in the range of history and tied to
   the garrison. The [[Hand]] attacks with 3.1 and defends with 3.5:
   a reserve, not a multiplier
6. **Verdict**: right in kind and in size. An [[Attack]] needs about
   the garrison's [[Defense]] + 3.5, so a lone guard falls to a fleet
   and a fortress holds

### 2. Concentration pays

1. **Real world**: Lanchester (1916): with aimed fire a force's
   strength grows with the square of its numbers, so two equal armies
   met one after the other lose to one army of both. Napoleon's
   central position and the German Schwerpunkt use it
2. **Chess**: two attackers on one square win it against one defender,
   the exchange arithmetic of a contested square
3. **Wargames**: odds columns: 6:1 eliminates the defender, 1:1 is an
   exchange, 1:2 eliminates the attacker. Avalon Hill tables read
   AE, AR, EX, DR, DE from left to right
4. **4X**: doomstacks in Civilization IV, answered by one unit per
   tile in Civilization V; fleet capacity in Twilight Imperium
5. **This game**: [[Power]] adds up, so strength is linear in numbers,
   Lanchester's linear law. V13's rout makes concentration pay more
   than linearly: the odds curve above has the shape of the Avalon
   Hill table. The EX result, the defender eliminated and the attacker
   losing as much, is V12's margin rule
6. **Verdict**: V13 is right in kind. [[Slot]]s cap the doomstack, so
   no stacking rule is needed

### 3. Guns or butter

1. **Real world**: every resource spent on war is not spent on growth.
   The US spent about 40% of its output on war in 1943-44, the Soviet
   Union more. The economy, not the battles, decided the long wars of
   the 20th century, see Harrison's book on the economics of
   WWII
2. **Chess**: no economy, but the same choice in time: a move that
   attacks doesn't develop. Three tempi are worth about a pawn in the
   opening
3. **Deck builders**: in Dominion an attack card costs a buy that
   doesn't grow the deck, "Big Money" beats a bad attack deck. In Star
   Realms attack and trade share the [[Hand]]
4. **4X**: production queues, unit upkeep in Civilization V and VI,
   Through the Ages civil and military actions from one budget of
   food and resources
5. **This game**: the choice is made twice:
	1. In the deck: only [[Military]] [[Card]]s defend from [[Hand]],
	   so every economic [[Card]] bought is a [[Card]] that can't
	   defend. A mid-game [[Hand]] holds about 2 [[Military]]
	   [[Card]]s
	2. In the [[Turn]]: a [[Hand]] [[Card]] that defends is missing at
	   the next own [[Turn]], one that attacks is not spent on
	   [[Create]] or [[Research]]
6. **Use it or lose it**: unused [[Card]]s go to [[Discard]] at
   **Draw**, so the last [[Card]]s of a [[Turn]] attack for almost
   free, like a ministry spending its budget before the year ends
7. **Total mobilization ends the game**: a [[Defender]] who spends its
   whole [[Hand]] is **Fallen** at the start of its [[Turn]], see
   [[PaxGalactica#Notes#6]]: Germany in 1918, the spring offensives
   spent the last reserves and the collapse followed. The simulated
   [[Defender]] keeps its last [[Card]]; letting it spend it changes
   the results little
8. **Verdict**: the dual use is the strongest idea of the game's war
   economy, and the [[Defense]] rule of the guidance made it sharper.
   No upkeep is needed, the deck pays it

### 4. A fleet in being

1. **Real world**: in 1690 Torrington kept his weaker fleet in port
   to tie down the French: a fleet that exists deters an invasion
   without fighting. The German High Seas Fleet in 1914-18 and nuclear
   deterrence work the same way
2. **Wargames and 4X**: reserves, zones of control, Twilight Imperium
   space cannons in range, Eclipse ships in a sector nobody wants to
   enter
3. **This game**: the [[Hand]] is a fleet in being. The [[Defender]]
   spends 0.8-1 of its 5 [[Card]]s per [[Attack]], the rest deters by
   being there. [[Ambush]] and [[Hidden]] guards add uncertainty: they
   cut [[Attack]]s from 61% to 51% under V13
4. **Verdict**: good, it costs nothing until used and makes every
   rival [[Turn]] a threat. Now that it is smaller, the [[Hidden]]
   [[Card]]s do more of the deterring

### 5. The price of victory

1. **Real world**: Pyrrhus at Asculum, Malplaquet, Kursk: a won
   battle can cost the winner its war. The loss-exchange ratio is the
   measure the staffs used
2. **Chess**: trade when ahead: equal trades simplify toward a won
   endgame. The leader seeks exchanges, the side behind avoids them
3. **4X and multiplayer games**: two who fight, the third wins:
   Diplomacy, Twilight Imperium, Eclipse. War between two players is a
   gift to the bystander. Eclipse answers by paying reputation to
   everyone who fought, the loser too: a profitable loss on purpose,
   to make players fight
4. **This game**: a battle burns 8.9 HC under V13, both sides
   together. The chosen exchange ratio is 1.2, so in a [[Duel]] war
   is a slow transfer toward the stronger side. Pyrrhic wins are 45%
   of V13 battles
5. **Verdict**: fine for the [[Duel]]: a relative game, the leader who
   trades when ahead wins. With 3+ players the 8.9 HC goes to the
   bystander, the war economy will need a reward for fighting then,
   as in Eclipse

### 6. Repair and wrecks

1. **Real world**: 6 of the 8 battleships sunk or damaged at Pearl
   Harbor fought again. In the tank battles of WWII most knocked-out
   tanks were repairable, and the side that held the battlefield
   recovered the wrecks, its own and the enemy's. Repair costs a
   fraction of a new unit, the limit is the yards and time
2. **Wargames**: two-step counters, full and reduced, and replacement
   points; a reduced unit is cheap to rebuild
3. **4X**: Twilight Imperium Sustain Damage and Duranium Armor,
   Civilization healing in friendly land. Eclipse has no damage
   between battles: a ship is whole or gone
4. **This game**: [[Damaged]] is the reduced step and wrecks are
   captured with the [[Star]], see [[ControlledBy#Notes#1]]: very
   close to history. [[Recover]] at half the [[Price]] costs 2.4 HC
   for a [[Ship]] 2M against 4.1 for a new one, 59%; 56% for a
   [[Ship]] 4M. The starter [[Card]] is 1 HC of it. [[FieldRepair]] is
   the yard: limited, free
5. **Verdict**: half the [[Price]] is the right direction, the flat
   starter keeps a repair above half. A yard rule would finish it: one
   [[Recover]] repairs every [[Damaged]] [[Card]] of its [[Star]]

### 7. Plunder and economic warfare

1. **Real world**:
	1. War paid for war: Roman plunder, the contributions of the
	   Thirty Years' War, Napoleon's foraging
	2. The chevauchée of the Hundred Years' War burned the economy,
	   not the army
	3. Blockade and commerce raiding starved Germany in 1914-18 and
	   nearly Britain in 1917 and 1942
	4. War bonds paid for it later; scorched earth denied it to the
	   enemy; the Soviet Union moved about 1,500 factories east in
	   1941
2. **Games**: Through the Ages raids, the Catan robber, Civilization
   pillage, Root's economy of the occupied clearing, Star Realms
   outposts and authority damage
3. **This game** has the whole set:
	1. [[Raid]] is the chevauchée: [[Goods]] or [[Depleted]]
	   [[Structure]]s
	2. [[ForceDiscard]] is the blockade: a [[Card]] missing from the
	   next [[Turn]], and a threat of the fall to a short [[Hand]]
	3. [[Salvage]] is plunder, taken by whoever stands in the
	   [[Star]], into the [[Star]]: the garrison that holds on and
	   expects to stay
	4. [[Debt]] is the war bond: [[Energy]] now, the [[Card]] later
	5. [[Scuttle]] is scorched earth and evacuation in one: the
	   [[Card]] goes to the [[Factory]], it can be rebuilt
	6. [[NovaBomb]] is the bomb: no [[Combat]], only a [[Cost]]
4. **Verdict**:
	1. [[Salvage]] matches history: loot to the holder of the field,
	   and the choice to take it depends on whether the field stays
	   yours. The beaten [[Attacker]] stands nowhere and takes
	   nothing, so the exploit doesn't grow
	2. [[ForceDiscard]] no longer opens a [[Star]]: the rival discards
	   a [[Card]] that defends with 0. It is a blockade now, not a
	   siege engine

### 8. Does conquest pay?

1. **Real world**: Liberman, Does Conquest Pay? (1996): conquered
   industrial economies did pay their occupiers, if held by force. The
   Ruhr, the Donbas and Silesia were the prizes of wars
2. **Chess** has no territory economy, only position. **Go** is the
   opposite: territory is the score
3. **4X**: conquest snowballs, a captured city produces for its new
   owner. Stellaris war exhaustion and claims put a price on it.
   Twilight Imperium objectives score held systems
4. **Wargames**: victory hexes and supply cities, worth nothing
   between the turns they are counted
5. **This game**:
	1. A [[Star]] is worth about 1-2 HC a [[Turn]] through its
	   [[Ready]] [[Structure]]s. An [[Attack]] costs 4 HC, so a taken
	   [[Star]] pays back in 2-4 [[Turn]]s if it is held
	2. Taking it captures the [[Structure]]s and wrecks, see
	   [[ControlledBy]]
	3. A captured [[Hyperstructure]] counts toward
	   [[KardashevAscension]] for the captor, see
	   [[Hyperstructure#10]]: one seventh of a victory, the Ruhr of
	   the galaxy
	4. [[VictoryPoints]] count controlled [[Social]] [[Card]]s, so
	   conquest also scores
	5. [[GalacticDiaspora]] needs a non-[[Damaged]] [[Card]] in every
	   [[Star]]: one [[Damaged]] guard breaks a rival's achievement.
	   War is the answer to a [[Culture]] lead
6. **Verdict**: conquest pays: the prize was right, and with the
   smaller [[Hand]] reserve the [[Attack]] now pays too

### 9. Strike the head

1. **Real world**: killing commanders seldom ends a war, the shooting
   down of Yamamoto didn't. Capturing the capital or the government
   sometimes does
2. **Chess**: the whole game is decapitation, the material only buys
   the mate. Kingmaker, Hnefatafl and shogi agree, shogi also returns
   captured pieces to play
3. **This game**: [[PaxGalactica]] is mate: every [[Hero]]
   [[Damaged]]. [[Decapitation]] under V13 wins 71% and [[Destroy]]s
   the [[Hero]] in 49%, see [[CombatVariants]]. A [[Hero]]'s value
   grows to the whole game as the last one is threatened: the real
   defense budget is spent on [[Hero]]es
4. **Verdict**: V17, a routed [[Hero]] stays [[Damaged]]: captured,
   and healed by the captor, see [[Recover#Notes#2]], the shogi drop
   and a story. A Destroyed one is only a loss

### 10. The stalemate

1. **Real world**: when defense outruns offense the front freezes:
   the trenches of 1914-18, the phony war of 1939-40. It breaks by new
   weapons, by new tactics or by economic exhaustion
2. **Wargames**: Paths of Glory models it with a western front that
   barely moves for years, and wins by the collapse behind it
3. **4X**: the cold war of two strong empires that build and score,
   Twilight Imperium's objective race
4. **This game**: the war surplus per opportunity is 1.7 HC under
   V13, a third of a [[Turn]], and 63% of setups offer an [[Attack]].
   [[Pinning]], [[Occupation]] and [[Disputed]] [[Star]]s make fronts
5. **Verdict**: no phony war: with the [[Defense]] rule of the
   guidance, only [[Military]] [[Card]]s back a [[Star]] from
   [[Hand]]. If playtests still feel quiet, V16 ties the reserve to
   the garrison and lifts the surplus to 2.1

## Compared

| | Chess | 4X | Wargames | Real world | This game |
|---|---|---|---|---|---|
| [[Unit]] of cost | material, tempo | production, upkeep | combat factors, replacements | output, manpower | the [[Hand]] [[Card]] |
| [[Defense]] | recapture threat | walls, starbases | terrain ×2-3, 3:1 odds | ×1.3-3 | [[Level]] ×2, [[Hand]] +3.5 |
| Losses | captured piece | dead unit, damage heals | step loss, elimination | damaged, destroyed | [[Damaged]], Destroyed |
| Repair | none, shogi drop | healing, repair techs | replacement points | a fraction of new | 56-64% of new |
| Plunder | none | pillage, captured cities | supply, victory hexes | loot, contributions | [[Salvage]], [[Raid]], capture |
| Economic war | none | blockades, raids | supply lines | blockade, bombing | [[ForceDiscard]], [[Raid]] |
| Information | open | fog of war | hidden blocks | intelligence, deception | [[Hidden]], the [[Hand]] |
| Victory | mate | conquest or score | victory hexes | the will to go on | [[PaxGalactica]] or [[Twilight]] |

1. Chess teaches the exchange arithmetic and the king
2. 4X teaches that a war must pay for the winner, or players build
3. Wargames teach the odds table and step losses
4. The past teaches that the economy and the defense decide, and that
   loot goes to whoever holds the field
5. This game is closest to a wargame with a deck builder's budget:
   dual-use [[Card]]s are its own idea

## Synthesis

Principles for this game's war economy, from the ten laws:

1. **War must cost both, pay the winner and ruin the reckless**: V13,
   by the odds curve
2. **Defense scales with what defends**: done by the [[Defense]] rule
   of the guidance, a non-[[Military]] [[Card]] defends with 0 from
   [[Hand]]
3. **The [[Hand]] is guns and butter at once**: keep it; no upkeep
4. **Repair is cheaper than rebuild**: half the [[Price]], done; a
   yard rule would share the starter
5. **Loot to the holder of the field**: your [[Salvage]], done and
   measured
6. **The head is captured, not killed**: V17, a routed [[Hero]] stays
   [[Damaged]]
7. **Economic warfare hits the economy**: [[ForceDiscard]] and
   [[Raid]] cost the rival [[Turn]]s, not [[Star]]s
8. **Measure war by its surplus**: the next [[Duel]] playtest should
   count [[Attack]]s per game. With V13 the model expects an
   [[Attack]] in about 2 opportunities of 3

## Open points

1. **V13 and V17**: the resolution to apply, see [[CombatVariants]]
2. **Repair yard**: one [[Recover]] for every [[Damaged]] [[Card]] of
   a [[Star]]?
3. **[[ForceDiscard]]**: blockade only, or let its player pick the
   [[Card]]?
4. **Multiplayer**: 8.9 HC burned per battle is a gift to a third
   player. Not measured, [[Duel]] only
5. **The simulator** lives only in the session scratchpad
