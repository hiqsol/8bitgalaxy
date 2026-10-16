---
date: 2026-10-16
updated: 2026-10-16
status: WIP
scope: meta
---

# Design review

Review of the whole design against 4X and deck-building games: what is missing, broken, worth adding or removing. Complements [[RulesReview]] (minimal duel), numbers continue it.

Answer proposals by number, e.g. "P40 a, b", "P54 Tactics, Scan".

## Lessons from other games

| Game | What to take | Where |
|------|--------------|-------|
| Through the Ages | Discover with science then build, upgrade pays the difference (already: [[Research]], [[Create]], [[Upgrade]]). Wonders built in stages, one copy each. Players seed future events (already: [[FutureEvents]]). Game ends when the Age III deck runs out. Tactics reward a mixed army. | P42, P53, `Tactics` |
| Civilization (2010) | Four victories: capture a capital, culture, economy, technology. Tech pyramid instead of printed prerequisites. | P40 |
| Civilization: A New Dawn | Focus row 1-5: a used card drops to slot 1 and recharges over time. Trade tokens boost a card (already: [[Boost]], P37). Unique wonders. | P50, P53 |
| Voidfall | 3 cycles, each ends with evaluation: scoring and upkeep; Focus cards come back at the cycle end. Diceless combat, defender wins ties, max 2 fleets per sector (already: [[Combat]], [[Slot]]). Trade tokens unlock an extra action. | P42, P50, Ideas |
| Imperium: Classics | Reshuffle is the progress tick: gain or develop a card. History pile: cards out of the deck still score. Game ends when a supply runs out. | P42, P50, `Legacy` |
| Twilight Imperium | Ships can't pass systems with enemy ships. Planets exhaust and ready every round. Home system has a space dock. Mecatol Rex is a prize in the center. | P43, P50, P51, Ideas |
| Eclipse | Pinning. Sector tier is printed on the tile back. Ancients guard the good hexes. Planet colors match population. | P49, P51, P52 |
| Star Realms | Authority is the clock. Outposts must be destroyed first. | P40, `Guard` |
| Mage Knight | Deck building, hex exploration and diceless combat in one game. Wounds go to the deck and clog the hand. | P44 d |
| Tyrants of the Underdark | Deck building with area control. Promoting a card takes it out of the deck for points. | `Legacy` |
| Kemet | Diceless battle cards. Points for holding temples are lost with the temples. | P41 |
| Arcs | Players declare which category scores this chapter. | P41 b |

## Strengths to keep

- [[Hand]] as the turn budget, drawn at the end of the [[Turn]] and spent on defense: Star Realms plus TI action cards.
- [[Takeoff]] makes a card stronger and thins the deck: no separate scrap rule.
- Double-ended cards hold Class switch, Ready/Depleted and Damaged/Hidden without tokens.
- Research → Create → Upgrade is the proven Through the Ages chain.
- Diceless combat with hidden commitments works in Voidfall, Kemet and Dune: Imperium.
- [[Slot]] pressure replaces fleet supply and upkeep.

## Issues

- [ ] **I61. Unreachable leader defeat.** [[Goal]] 4.2 counts Heroes in [[Hand]], [[Reserve]] and [[Discard]], which nothing can attack, and a Hero on the [[Field]] returns to Discard after its first action other than [[Move]] or [[Transport]]. A player who keeps Heroes in the deck can't lose them. → P40
- [ ] **I62. Losing by an empty Hand.** By [[Goal]] 4.1 a player who spent the whole [[Hand]] on defense in [[Combat]], or lost it to [[ForceDiscard]], starts the Turn with no card to play and is over. → P40
- [ ] **I63. No clock in core.** Nothing ends a game but elimination: no round limit, no score. The greatness measures of [[Goal]] 5 have no formulas, though [[Event]] catch-up needs them. Every reference game has a clock: TtA Age III deck, Voidfall 3 cycles, TI and Eclipse points, Star Realms authority. → P41, P42
- [ ] **I64. Facility deadlock.** [[Academy]] is only on Colony 2C, which itself needs an Academy to be [[Create]]d or [[Recover]]ed: losing it ends Social building for good. [[Shipyard]] has a backup only after Colony 4P. → P43
- [ ] **I65. Wrecks block Slots forever.** A [[Damaged]] card keeps its [[Slot]], and nothing Damages it again to [[Destroyed]]: with P28 it isn't a defending participant. A captured Star stays full of rival wrecks. → P44
- [ ] **I66. Combat depletion.** [[PerformAction]] 6 depletes all participants, [[Combat]] 10.4 only supporters. If direct participants deplete, winning attackers go to [[Discard]] instead of moving in, and defenders leave the Star they've just held. → P45
- [ ] **I67. Control tie.** [[ControlledBy]] 1.1 "not less Control than others" gives a Star to both factions with Actors, [[Disputed]] gives it to nobody. Consensus is a [[Politics]] notion inside core. → P46
- [ ] **I68. Structures created anywhere.** [[Create]] puts a [[Structure]] in any Star: no Range, no control, even an unexplored or rival one. Then [[Transport]] of Structures has no use. → P47
- [ ] **I69. Upgrade and Recover source.** [[BuildingFacility]] and [[Technology]] say a facility provides Create, Upgrade and Recover, [[Academy]] and [[Shipyard]] say only Create, and 12 card ends carry [[Upgrade]] or [[Recover]]. Recommended: a facility provides Create and is the destination of all three, Upgrade and Recover come from a participant.
- [ ] **I70. Social Create level.** "Social cards can only be created from Level 1": Hero 2M and 2C have Level 2 at both ends, so they can only be upgraded, yet P27 puts them in the [[Factory]]. Recommended: a Social card can be created when its weak end is Level 1, others only by Upgrade.
- [ ] **I71. Hidden can't leave its Star.** A [[Hidden]] card moves with Range 1, but the [[Distance]] to an adjacent Star is 2, so hidden and [[Stealth]] moves need Range support. A hidden [[Structure]] "moves as a minimal Ship". → P48
- [ ] **I72. Explore peek.** If the explorer looks at the face to learn the hidden Cost, cancelling after one card is a cheap look at what's there. → P49
- [ ] **I73. Source needs a free Slot.** The source is a Star "where the starter could [[Takeoff]]", so a Star with full Unit Slots can't start actions from Hand. Recommended: any Star [[ControlledBy]] the player.
- [ ] **I74. Economy overlap.** [[Recycle]] and [[Dismantle]] both turn cards into [[Materials]]. [[Export]] and [[Smuggle]] need a rival's Colony: dead in a duel. [[Sell]] is a stub. [[Energy]] says [[Trade]] gives Energy, Trade says Materials. → P57

#### Minor

- [[GameBalance]] expects about 5 actions per Turn, but every Hand action takes a starter and usually supporters: 2-3 is likelier.
- [[Research]] has a direction to a [[BuildingFacility]], though it only moves cards between Home piles.
- [[Combat]] 10.1: say that the winner saves only own participants.
- Naming: [[AttackPower]] → `MilitaryPower`, like the other three powers. [[Militarization]] is managing enemy cards: `Sabotage` fits better, its Defense part is a [[Plus]].
- [[Card]] doesn't list Stars and Spaces, though P36 makes Stars a deck.

## Proposals

### Victory

- [ ] **P40. Duel victory.** A faction is over, replacing [[Goal]] 4:
	- a) **Capital**: a rival controls its home [[Star]] at the start of its own [[Turn]]. The home Star is the chess king, Heroes are the strongest pieces.
	- b) **No Star**: it controls no Star at the start of its own Turn, instead of "can not make a move" (I62).
	- c) **No leader** stays, besides a) and b).
	- d) **Four paths** (Civilization, the four paths of `PITCH.md`): a faction wins at the end of own Turn by one of, numbers to tune by AI playtests: Military: control 4 Stars; Culture: total [[Level]] of own Colonies ≥ 12; Production: 12 [[Energy]] or a completed [[Hyperstructure]]; Science: 6 cards researched from the [[Laboratory]].
	- Recommended: a, b, d.
- [ ] **P41. Greatness measures** for [[Goal]] 5, one per [[Class]], counted from the current state (Kemet: a lost Star stops counting):
	- Expansion (Military): Stars [[ControlledBy]] the faction.
	- Population (Culture): total [[Level]] of own Colonies on the [[Field]].
	- Wealth (Production): [[Energy]] plus own [[Materials]].
	- Development (Science): fewest cards left in the [[Laboratory]].
	- Use: a) at the clock (P42) the faction leading in more measures wins, a tie goes to Expansion. b) Ambitions (Arcs): a player who [[Shuffle]]s names a measure, at the end of the round its leader scores 1 point, most points at the clock wins. [[Event]] catch-up uses the same measures.
- [ ] **P42. Game clock.** The game ends at the end of the round when:
	- a) Round 12 is over: simple and predictable for AI playtests.
	- b) A player [[Shuffle]]s for the 4th time (Voidfall cycles, Imperium). Thin decks cycle faster, so deck thinning (I46) brings the end closer.
	- c) A [[Laboratory]] is empty (Imperium, Tyrants: a supply runs out).
	- With [[Alien]]s: the [[Event]] deck runs out, like the TtA Age III deck.

### Fixes

- [ ] **P43. Home Star facilities.** The home [[Star]] itself is an [[Academy]] and a [[Shipyard]] for own participants there, besides its 1 [[Energy]] (TI home space dock, Civilization capital). Fixes I64. With P40 a, losing the capital also loses the facilities. Colony 2C and Base 2P add facilities elsewhere.
- [ ] **P44. Wreckage.** [[Wreckage]] is a [[Damaged]] card in a Star where its faction has no [[Enabled]] card:
	- a) Cleanup: Wreckage in a Star [[ControlledBy]] a rival is [[Destroyed]] at the end of the rival's Turn.
	- b) Salvage: any player can [[Recycle]] Wreckage into [[Materials]] equal to its [[Level]], the card is Destroyed.
	- c) Finish: a winning attacker Destroys the rival's Damaged cards in the target Star.
	- d) Wounds (Mage Knight): a Damaged [[Actor]] goes to [[Discard]] still Damaged and is a dead card in [[Hand]] until [[Recover]]ed; only Structures stay as Wreckage. Damage then hits the deck, and Damaged Heroes in the deck count as lost leaders (I61).
	- Recommended: c, plus b with `advanced`.
- [ ] **P45. Combat participants stay.** Direct participants of [[Combat]] don't [[Deplete]]: survivors stay (defender) or move in (attacker), only supporters deplete. An army holds ground like chess pieces.
- [ ] **P46. Control.** [[ControlledBy]]: the faction with strictly the highest [[Control]] controls the Star. An Actor tie is [[Disputed]]. A Structure tie: every faction controls the Star and its own Structures. Consensus moves to [[Politics]].
- [ ] **P47. Structure placement.** A created [[Structure]] goes to:
	- a) the facility's own Star (TI space dock): expansion is [[Transport]], Culture ships carry Colonies, Production ships carry Bases, as the Transport table intends.
	- b) any Star [[ControlledBy]] the player: expansion is moving an Actor in first.
	- c) a Star within the [[Range]] of a direct participant.
	- Recommended: a, it gives [[Size]], [[Capacity]] and the Transport table their job.
- [ ] **P48. Hidden movement.** Combinable:
	- a) [[Hidden]] cards move with [[Range]] 2: one Star away.
	- b) Cards hidden by [[Stealth]] keep their real Range and Capacity: a reason for Stealth beyond the free hidden [[Takeoff]].
	- c) Hidden [[Structure]]s don't move.
- [ ] **P49. Explore Cost on the back.** Star and Space backs show their Cost, the face stays hidden (Eclipse sector tiers). No peek, no cancel rule, no hidden bookkeeping; a higher Cost still hints at a better tile. [[Explore]] 6-7 go away.

### Additions

- [ ] **P50. Recharge.** No free [[Restore]] at the start of a Turn stays, but:
	- a) A player who [[Shuffle]]s Restores all own Structures (TI planets ready, Voidfall cycle, Imperium reshuffle). It favors thin decks, pair with P42 b.
	- b) Also gains 1 [[Energy]] per controlled Star at the Shuffle.
	- c) Restore 1 own Structure at the end of own Turn (A New Dawn's steady recharge), no bias to thin decks.
- [ ] **P51. Pinning** (TI, Eclipse). A moving group can't pass through a Star with rival [[Enabled]] [[Military]] [[Actor]]s, it stops there. [[Hidden]] cards neither pin nor get pinned. Gives fronts, protects the home Star, rewards [[Stealth]].
- [ ] **P52. Native defense.** [[DefSys]] is a [[Star]] property of the Star deck (P36): a number on some Stars, like Eclipse Ancients. To control the Star a player first wins an [[Attack]] against that [[Defense]], then it's gone. Better Abilities have higher DefSys. Core gets neutral resistance without [[Alien]]s, and Military has a job before the rivals meet.
- [ ] **P53. Hyperstructure as a wonder** (TtA, A New Dawn). A shared row of [[Hyperstructure]]s, one copy each, the first to complete one takes it:
	- Built in stages: each [[Create]] action adds Culture or Production power as tokens on it ([[Origin]] both), complete when the tokens reach its [[Cost]].
	- Permanent effect, one per class: `Citadel` (M) +3 [[Defense]] to own cards in its Star; `Senate` (C) [[Hand]] size +1; `Dyson Sphere` (P) +2 [[Energy]] each own Turn; `Warp Gate` (S) its Star is adjacent to every Star with an own Colony.
	- With P40 d it is the Production goal.
- [ ] **P54. New technologies.** One-line rules on existing systems, 4 per class, pick by name:

| Technology | Kind | Class | Effect | Why |
|------------|------|-------|--------|-----|
| `Tactics` | Modifier | M | +1 [[AttackPower]] if the direct attackers include a [[Hero]] and a [[Ship]] | TtA tactics: mixed armies |
| `Ambush` | Modifier | M | A [[Hidden]] defender revealed in [[Combat]] adds +1 | rewards hiding |
| `Raid` | Action | M | [[Attack]] without moving in: on a win take the target Star's [[Materials]] or [[Deplete]] its rival Structures | hit and run |
| `Spy` | Modifier | M | [[Recon]] can look at a rival's [[Hand]] | counters bluffing |
| `Command` | Modifier | C | The group's [[Range]] is this card's Range instead of the minimum | Heroes lead fleets |
| `Recall` | Modifier | C | Put a card from [[Discard]] on top of [[Reserve]] | deck control |
| `Settle` | Modifier | C | [[Create]] a [[Colony]] in this card's Star, no facility there needed | colony ship, exception to P47 a |
| `Legacy` | Action | C | Move a card from [[Discard]] to a History pile: out of the deck, counts for points | Tyrants, Imperium; `objectives` |
| `Guard` | Modifier | P | Rival groups can't pass the Star of this [[Structure]] | Star Realms outposts |
| `Salvage` | Modifier | P | +1 [[Materials]] in the Star for each rival card Damaged in an action it takes part in | combat feeds economy |
| `Prefab` | Modifier | P | Create a [[Base]] in this card's Star, no facility there needed | pair of `Settle` |
| [[EfficientUpgrade]] | Modifier | P | [[Upgrade]] costs 1 less | fills the stub |
| `Scan` | Modifier | S | [[Explore]] also reveals one Hidden segment bordering the target | faster exploration |
| `Forecast` | Modifier | S | Look at the top 3 [[Reserve]] cards, put them back in any order | deck control |
| `Jump` | Modifier | S | The group may pass one Hidden [[Space]], revealing it | blind Warp jump |
| [[MinusRequirement]] | Modifier | S | Ignore one [[Prerequisites]] pair | fills the stub |

### Removals and simplifications

- [ ] **P55. One handling rule.** Replace the [[Manage]] and [[Transport]] tables with: Military handles [[Actor]]s, Culture handles [[Social]] cards, Production handles [[Industrial]] cards, Science handles anything; any ship also carries [[Hero]]es, [[Materials]] and [[Wreckage]]. Both tables say exactly this.
- [ ] **P56. Open Laboratory and Factory.** Any [[Laboratory]] card with met [[Prerequisites]] can be [[Research]]ed, any [[Factory]] card [[Create]]d: no piles. Removes pile Shift in [[Manage]], [[Invent]], [[PlusFactory]], [[PlusLaboratory]]; [[Destroyed]] cards just go to the Factory. Prerequisites and [[Cost]] already order the tech tree. Variant b: keep piles for table space, drop Shift and Invent.
- [ ] **P57. Economy roles.** One job per stockable resource (Eclipse, TtA: materials build, money is the wildcard):
	- [[Materials]] pay [[Create]], [[Upgrade]] and [[Recover]] costs at a facility in the Star where they are: [[Extract]] at [[Asteroids]], Transport to the Shipyard.
	- [[Energy]] [[Boost]]s any action (P37).
	- [[Trade]] turns power into Energy between two own Colonies: a trade route.
	- [[Dismantle]] merges into [[Recycle]]. [[Export]], [[Smuggle]] and [[Sell]] move to [[Politics]] as trade between factions.
- [ ] **P58. Traits instead of new Types.** Variety via [[Trait]]s:
	- `Unique`: one per faction on the [[Field]], for flagships and top Heroes (TI).
	- `Consumable`: [[Destroyed]] after use, replaces the [[Tool]] type: probes, mines, missiles.
	- `Immovable`: can't be moved or transported, replaces the third mobility type in [[Range]], for Hyperstructures.
	- Card orientations are all taken (strong and weak front, Damaged and Hidden back), so new states should come from position, like Wreckage (P44) and pinned (P51), not markers.
- [ ] **P59. Stubs** ([[RulesReview]] I21):
	- [[MinusRequirement]], [[EfficientUpgrade]], [[DefSys]], [[Wreckage]]: by P54, P52, P44.
	- [[Dismantle]], [[Sell]]: by P57.
	- [[PlusHero]]: remove, [[Create]] of Heroes covers it.
	- `allacad` on Base 4C, read as "all-academy": a) an [[Academy]] that creates Colonies in any Star the player controls, the exception to P47 a; b) a facility for both [[Origin]]s.

## Ideas

Not for answering now, kept for later.

- **Policies** (TtA governments, Civilization policies): one Policy card in [[Home]] giving a [[Plus]]: Hand size, Range, Energy. Changed by an action. `advanced`.
- **Energy as an extra action** (Voidfall trade tokens): spend 2 [[Energy]] to let a Field card act without a starter ([[BeActor]]). Alternative to P37.
- **Center prize** (TI Mecatol Rex): Star 11 of the first duel is fixed with the best Ability, e.g. [[Draw]] 1.
- **Derelict row** (TtA card row): [[Derelict]]s get cheaper the longer they wait.
- **Upkeep at Shuffle** (Voidfall, Eclipse), only if the leader snowballs in playtests: 1 Energy per Star beyond 3.
- **Overlap**: [[Slot]] overlap is the most per-action bookkeeping. Drop it if AI playtests show no real decisions.
- **One Space per side**: halves first-duel tiles (24 → 12) and Explore actions, at the price of a single route between two Stars.
- **Drones** (TI fighters): Range 0 Military Units carried by ships, if [[Capacity]] needs more use.
- **Asymmetry**: one faction card with a single rule change on top of mirrored decks (TI faction abilities), keeps [[GameBalance]] even.
