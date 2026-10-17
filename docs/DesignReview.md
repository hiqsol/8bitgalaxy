---
date: 2026-10-16
updated: 2026-10-16
status: WIP
scope: meta
---

# Design review

Review of the whole design against 4X and deck-building games: what is missing, broken, worth adding or removing. Complements [[RulesReview]] (minimal duel), numbers continue it.

Answer proposals by number and letter, e.g. "P44 c", "P60 b, d".

## Lessons from other games

| Game | What to take | Where |
|------|--------------|-------|
| Through the Ages | Discover with science then build, upgrade pays the difference (already: [[Research]], [[Create]], [[Upgrade]]). Wonders. Players seed future events (already: [[FutureEvents]]). Game ends when the Age III deck runs out. Tactics reward a mixed army. | [[Twilight]], [[Hyperstructure]], [[Tactics]] |
| Civilization (2010) | Four victories: capture a capital, culture, economy, technology. Tech pyramid instead of printed prerequisites. | [[Goal]] |
| Civilization: A New Dawn | Focus row 1-5: a used card drops to slot 1 and recharges over time. Trade tokens boost a card (already: [[Boost]], P37). Unique wonders. | [[Restore]], [[Hyperstructure]] |
| Voidfall | 3 cycles, each ends with evaluation: scoring and upkeep; Focus cards come back at the cycle end. Diceless combat, defender wins ties, max 2 fleets per sector (already: [[Combat]], [[Slot]]). Trade tokens unlock an extra action. | Ideas |
| Imperium: Classics | Reshuffle is the progress tick: gain or develop a card. History pile: cards out of the deck still score. Game ends when a supply runs out. | [[Twilight]], [[Legacy]] |
| Twilight Imperium | Ships can't pass systems with enemy ships. Planets exhaust and ready every round. Home system has a space dock. Mecatol Rex is a prize in the center. | [[Pinning]], [[Restore]], Ideas |
| Eclipse | Pinning. Sector tier is printed on the tile back. Ancients guard the good hexes. | P49, P52, [[Pinning]] |
| Star Realms | Authority is the clock. Outposts must be destroyed first. | [[Guard]] |
| Mage Knight | Deck building, hex exploration and diceless combat in one game. Wounds go to the deck and clog the hand. | P44 d |
| Tyrants of the Underdark | Deck building with area control. Promoting a card takes it out of the deck for points. | [[Legacy]] |
| Kemet | Diceless battle cards. Points for holding temples are lost with the temples. | [[Goal]] |

## Strengths to keep

- [[Hand]] as the turn budget, drawn at the end of the [[Turn]] and spent on defense: Star Realms plus TI action cards.
- [[Takeoff]] makes a card stronger and thins the deck: no separate scrap rule.
- Double-ended cards hold Class switch, Ready/Depleted and Damaged/Hidden without tokens.
- Research → Create → Upgrade is the proven Through the Ages chain.
- Diceless combat with hidden commitments works in Voidfall, Kemet and Dune: Imperium.
- [[Slot]] pressure replaces fleet supply and upkeep.

## Issues

- [ ] **I65. Wrecks block Slots forever.** A [[Damaged]] card keeps its [[Slot]], and nothing Damages it again to [[Destroyed]]: with P28 it isn't a defending participant. A captured Star stays full of rival wrecks. → P44
- [ ] **I66. Combat depletion.** [[PerformAction]] 6 depletes all participants, [[Combat]] 10.4 only supporters. If direct participants deplete, winning attackers go to [[Discard]] instead of moving in, and defenders leave the Star they've just held. → P45
- [ ] **I67. Control tie.** [[ControlledBy]] 1.1 "not less Control than others" gives a Star to both factions with Actors, [[Disputed]] gives it to nobody. Consensus is a [[Politics]] notion inside core. → P46
- [ ] **I68. Structures created anywhere.** [[Create]] puts a [[Structure]] in any Star: no Range, no control, even an unexplored or rival one. Then [[Transport]] of Structures, [[Settle]] and [[Prefab]] have no use. → P47
- [ ] **I69. Upgrade and Recover source.** [[BuildingFacility]] and [[Technology]] say a facility provides Create, Upgrade and Recover, [[Academy]] and [[Shipyard]] say only Create, and 12 card ends carry [[Upgrade]] or [[Recover]]:
	- a) Recommended: a facility provides Create and is the destination of all three, Upgrade and Recover come from a participant.
- [ ] **I70. Social Create level.** "Social cards can only be created from Level 1": Hero 2M and 2C have Level 2 at both ends, so they can only be upgraded, yet P27 puts them in the [[Factory]]:
	- a) Recommended: a Social card can be created when its weak end is Level 1, others only by Upgrade.
- [ ] **I71. Hidden can't leave its Star.** A [[Hidden]] card moves with Range 1, but the [[Distance]] to an adjacent Star is 2, so hidden and [[Stealth]] moves need Range support. A hidden [[Structure]] "moves as a minimal Ship". → P48
- [ ] **I72. Explore peek.** If the explorer looks at the face to learn the hidden Cost, cancelling after one card is a cheap look at what's there. → P49
- [ ] **I73. Source needs a free Slot.** The source is a Star "where the starter could [[Takeoff]]", so a Star with full Unit Slots can't start actions from Hand:
	- a) Recommended: any Star [[ControlledBy]] the player.
- [ ] **I74. Economy overlap.** → P57
	- a) [[Recycle]] and [[Dismantle]] both turn cards into [[Materials]].
	- b) [[Export]] and [[Smuggle]] need a rival's Colony: dead in a duel.
	- c) [[Sell]] is a stub.
	- d) [[Energy]] says [[Trade]] gives Energy, Trade says Materials.
- [ ] **I75. Minor.**
	- a) [[GameBalance]] expects about 5 actions per Turn, but every Hand action takes a starter and usually supporters: 2-3 is likelier.
	- b) [[Research]] has a direction to a [[BuildingFacility]], though it only moves cards between Home piles.
	- c) [[Combat]] 10.1: say that the winner saves only own participants.
	- d) Naming: [[AttackPower]] → `MilitaryPower`, like the other three powers.
	- e) Naming: [[Militarization]] cards are [[Military]] already, they don't militarize. The technology is [[Manage]] of enemy cards, which lowers their [[Defense]] before an [[Attack]]: `Suppression` fits best, also `Sabotage`, `Disruption`. Its Defense part is a [[Plus]].
	- f) [[Card]] doesn't list Stars and Spaces, though P36 makes Stars a deck.
	- g) [[Deck]]: [[Plus]] Defense of [[Militarization]] cards was set to raise Defense 1 to the end's [[Level]], but [[Military]] cards defend with their [[AttackPower]]: revise the values?
- [ ] **I76. Academy attack details** ([[Combat]] 2.3):
	- a) [[Reserve]] is face down: the attacker picks blindly or takes from the top?
	- b) [[Hand]] is hidden: picked blindly, or by name after [[Spy]]?
	- c) Where a Damaged card from a pile goes: it stays Damaged in its pile and cycles as a dead card until [[Recover]]ed (Mage Knight wounds, P44 d)?
	- d) Cards selected from piles are defending participants, so they add their power to the defense: intended?
- [ ] **I77. Hyperstructure count and build.**
	- a) How many in a game, one copy of each?
	- b) A shared row, the first to complete one takes it?
	- c) Built in stages: each [[Create]] adds Culture or Production power as tokens until they reach its [[Cost]]?
- [ ] **I78. Production path** ([[Goal]] 3.3) is TBD. → P60
- [ ] **I79. New technologies follow-ups.**
	- a) [[Settle]] and [[Prefab]] matter only if created Structures are limited in place. → P47
	- b) [[Legacy]] thins the deck, like I46: keep it in `objectives` or drop it?
	- c) The new technologies have no cards yet.
	- d) All are `advanced`, [[Legacy]] is `objectives`: should some go to `core`?
- [ ] **I80. Event catch-up measure.** [[Event]] notes give less to stronger factions, but greatness is now the four paths of [[Goal]]: which measure says who is stronger, Culture points?

## Proposals

### Victory

- [ ] **P60. Production path** for [[Goal]] 3, pick one or more:
	- a) Production, Wealth: stock 12 [[Energy]] (Civilization's economic victory).
	- b) Production, Industry: total [[Level]] of own [[Base]]s on the [[Field]], the mirror of the Culture path.
	- c) Production, Fleet: total Level of own [[Ship]]s, in the deck and on the Field.
	- d) Production, Stock: total [[Materials]] stored in own Stars, a logistics race.
	- e) Production, Built out: own [[Factory]] and [[Laboratory]] are empty, the mirror of Science.
	- f) Production, Wonders: 2 completed [[Hyperstructure]]s.

### Fixes

- [ ] **P44. Wreckage.** [[Wreckage]] is a [[Damaged]] card in a Star where its faction has no [[Enabled]] card:
	- a) Cleanup: Wreckage in a Star [[ControlledBy]] a rival is [[Destroyed]] at the end of the rival's Turn.
	- b) Salvage: any player can [[Recycle]] Wreckage into [[Materials]] equal to its [[Level]], the card is Destroyed.
	- c) Finish: a winning attacker Destroys the rival's Damaged cards in the target Star.
	- d) Wounds (Mage Knight): a Damaged [[Actor]] goes to [[Discard]] still Damaged and is a dead card in [[Hand]] until [[Recover]]ed; only Structures stay as Wreckage. The same answers I76 c.
	- e) Recommended: c, plus b with `advanced`.
- [ ] **P45. Combat participants stay.** Direct participants of [[Combat]] don't [[Deplete]]: survivors stay (defender) or move in (attacker), only supporters deplete. An army holds ground like chess pieces.
- [ ] **P46. Control.** [[ControlledBy]]:
	- a) The faction with strictly the highest [[Control]] controls the Star.
	- b) An Actor tie is [[Disputed]].
	- c) A Structure tie: every faction controls the Star and its own Structures.
	- d) Consensus moves to [[Politics]].
- [ ] **P47. Structure placement.** A created [[Structure]] goes to:
	- a) The facility's own Star (TI space dock): expansion is [[Transport]], Culture ships carry Colonies, Production ships carry Bases, as the Transport table intends. [[Settle]] and [[Prefab]] are the exceptions.
	- b) Any Star [[ControlledBy]] the player: expansion is moving an Actor in first.
	- c) A Star within the [[Range]] of a direct participant.
	- d) Recommended: a, it gives [[Size]], [[Capacity]] and the Transport table their job.
- [ ] **P48. Hidden movement.** Combinable:
	- a) [[Hidden]] cards move with [[Range]] 2: one Star away.
	- b) Cards hidden by [[Stealth]] keep their real Range and Capacity: a reason for Stealth beyond the free hidden [[Takeoff]].
	- c) Hidden [[Structure]]s don't move.
- [ ] **P49. Explore Cost on the back.** Star and Space backs show their Cost, the face stays hidden (Eclipse sector tiers):
	- a) No peek, no cancel rule, no hidden bookkeeping; a higher Cost still hints at a better tile.
	- b) [[Explore]] 6-7 go away.

### Additions

- [ ] **P52. Native defense.** [[DefSys]] is a [[Star]] property of the Star deck (P36), like Eclipse Ancients:
	- a) A number on some Stars: to control the Star a player first wins an [[Attack]] against that [[Defense]], then it's gone.
	- b) Better Abilities have higher DefSys.
	- c) Core gets neutral resistance without the [[GalaxyDeck]], and Military has a job before the rivals meet.

### Removals and simplifications

- [ ] **P55. One handling rule.** Replace the [[Manage]] and [[Transport]] tables with one rule, both tables say exactly this:
	- a) Military handles [[Actor]]s, Culture handles [[Social]] cards, Production handles [[Industrial]] cards, Science handles anything.
	- b) Any ship also carries [[Hero]]es, [[Materials]] and [[Wreckage]].
- [ ] **P56. Open Laboratory and Factory.** Prerequisites and [[Cost]] already order the tech tree:
	- a) Any [[Laboratory]] card with met [[Prerequisites]] can be [[Research]]ed, any [[Factory]] card [[Create]]d: no piles. Removes pile Shift in [[Manage]], [[Invent]], [[PlusFactory]], [[PlusLaboratory]]; [[Destroyed]] cards just go to the Factory.
	- b) Keep piles for table space, drop Shift and Invent.
- [ ] **P57. Economy roles.** One job per stockable resource (Eclipse, TtA: materials build, money is the wildcard):
	- a) [[Materials]] pay [[Create]], [[Upgrade]] and [[Recover]] costs at a facility in the Star where they are: [[Extract]] at [[Asteroids]], Transport to the Shipyard.
	- b) [[Energy]] [[Boost]]s any action (P37).
	- c) [[Trade]] turns power into Energy between two own Colonies: a trade route.
	- d) [[Dismantle]] merges into [[Recycle]].
	- e) [[Export]], [[Smuggle]] and [[Sell]] move to [[Politics]] as trade between factions.
- [ ] **P58. Traits instead of new Types.** Variety via [[Trait]]s:
	- a) `Unique`: one per faction on the [[Field]], for flagships and top Heroes (TI).
	- b) `Consumable`: [[Destroyed]] after use, replaces the [[Tool]] type: probes, mines, missiles.
	- c) `Immovable`: can't be moved or transported, replaces the third mobility type in [[Range]], for Hyperstructures.
	- d) Card orientations are all taken (strong and weak front, Damaged and Hidden back), so new states should come from position, like Wreckage (P44) and [[Pinning]], not markers.
- [ ] **P59. Stubs** ([[RulesReview]] I21):
	- a) [[DefSys]], [[Wreckage]]: by P52, P44.
	- b) [[Dismantle]], [[Sell]]: by P57.
	- c) [[PlusHero]]: remove, [[Create]] of Heroes covers it.
	- d) [[HyperPass]]: by P24.
	- e) `allacad` on Base 4C, read as "all-academy": an [[Academy]] that creates Colonies in any Star the player controls, the exception to P47 a.
	- f) `allacad` read as a facility for both [[Origin]]s.

## Ideas

Not for answering now, kept for later.

- **Policies** (TtA governments, Civilization policies): one Policy card in [[Home]] giving a [[Plus]]: Hand size, Range, Energy. Changed by an action. `advanced`.
- **Energy as an extra action** (Voidfall trade tokens): spend 2 [[Energy]] to let a Field card act without a starter from Hand ([[Starter]]). Alternative to P37.
- **Center prize** (TI Mecatol Rex): Star 11 of the first duel is fixed with the best Ability, e.g. [[Draw]] 1.
- **Derelict row** (TtA card row): [[Derelict]]s get cheaper the longer they wait.
- **Upkeep at Shuffle** (Voidfall, Eclipse), only if the leader snowballs in playtests: 1 Energy per Star beyond 3.
- **Overlap**: [[Slot]] overlap is the most per-action bookkeeping. Drop it if AI playtests show no real decisions.
- **One Space per side**: halves first-duel tiles (24 → 12) and Explore actions, at the price of a single route between two Stars.
- **Drones** (TI fighters): Range 0 Military Units carried by ships, if [[Capacity]] needs more use.
- **Asymmetry**: one faction card with a single rule change on top of mirrored decks (TI faction abilities), keeps [[GameBalance]] even.
