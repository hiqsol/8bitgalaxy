---
date: 2026-10-16
updated: 2026-10-20
status: WIP
scope: meta
---

# Design review

Review of the whole design against 4X and deck-building games: what is
missing, broken, worth adding or removing. Complements [[RulesReview]]
(minimal duel); the numeric suffixes continue it.

Answer proposals by number and letter, e.g. "DP48 b", "DP60 b, d".

## Lessons from other games

| Game | What to take | Where |
|------|--------------|-------|
| Through the Ages | Discover with science then build, upgrade pays the difference (already: [[Research]], [[Create]], [[Upgrade]]). Wonders. Players seed future events (already: [[FutureEvents]]). Game ends when the Age III deck runs out. Tactics reward a mixed army. | [[Twilight]], [[Hyperstructure]], [[Tactics]] |
| Civilization (2010) | Four victories: capture a capital, culture, economy, technology. Tech pyramid instead of printed prerequisites. | [[Goal]] |
| Civilization: A New Dawn | Focus row 1-5: a used card drops to slot 1 and recharges over time. Trade tokens boost a card (already: [[Boost]]). Unique wonders. | [[Restore]], [[Hyperstructure]] |
| Voidfall | 3 cycles, each ends with evaluation: scoring and upkeep; Focus cards come back at the cycle end. Diceless combat, defender wins ties, max 2 fleets per sector (already: [[Combat]], [[Slot]]). Trade tokens unlock an extra action. | Ideas |
| Imperium: Classics | Reshuffle is the progress tick: gain or develop a card. History pile: cards out of the deck still score. Game ends when a supply runs out. | [[Twilight]], [[Legacy]] |
| Twilight Imperium | Ships can't pass systems with enemy ships. Planets exhaust and ready every round. Home system has a space dock. Mecatol Rex is a prize in the center. | [[Pinning]], [[Restore]], Ideas |
| Eclipse | Pinning. Sector tier is printed on the tile back (already: [[Space]] Length). Ancients guard the good hexes. | DP52, [[Pinning]] |
| Star Realms | Authority is the clock. Outposts must be destroyed first. | [[Guard]] |
| Mage Knight | Deck building, hex exploration and diceless combat in one game. Wounds go to the deck and clog the hand. | DI76 c |
| Tyrants of the Underdark | Deck building with area control. Promoting a card takes it out of the deck for points. | [[Legacy]] |
| Kemet | Diceless battle cards. Points for holding temples are lost with the temples. | [[Goal]] |

## Strengths to keep

- [[Hand]] as the turn budget, drawn at the end of the [[Turn]] and
  spent on defense: Star Realms plus TI action cards.
- [[Takeoff]] makes a card stronger and thins the deck: no separate
  scrap rule.
- Double-ended cards hold Class switch, Ready/Depleted and
  Damaged/Hidden without tokens.
- Research → Create → Upgrade is the proven Through the Ages chain.
- Diceless combat with hidden commitments works in Voidfall, Kemet and
  Dune: Imperium.
- [[Slot]] pressure replaces fleet supply and upkeep.

## Issues

- [ ] **DI74. Economy overlap.** → DP57
	- a) [[Recycle]] and [[Dismantle]] both turn cards into
	  [[Materials]].
	- b) [[Export]] and [[Smuggle]] need a rival's Colony: dead in a
	  duel.
	- c) [[Sell]] is a stub.
- [ ] **DI75. Minor.**
	- a) [[GameBalance]] expects about 5 actions per Turn, but every
	  Hand action takes a starter and usually supporters: 2-3 is
	  likelier.
	- b) [[Combat]] 10.1: say that the winner saves only own
	  participants.
	- c) Naming: [[AttackPower]] → `MilitaryPower`, like the other
	  three powers.
	- d) Naming: [[Militarization]] cards are [[Military]] already,
	  they don't militarize. The technology is [[Manage]] of enemy
	  cards, which lowers their [[Defense]] before an [[Attack]]:
	  `Suppression` fits best, also `Sabotage`, `Disruption`. Its
	  Defense part is a [[Plus]].
	- e) [[Card]] doesn't list Stars and Spaces, though RP36 makes
	  Stars a deck.
	- f) [[Deck]]: [[Plus]] Defense of [[Militarization]] cards was
	  set to raise Defense 1 to the end's [[Level]], but [[Military]]
	  cards defend with their [[AttackPower]]: revise the values?
- [ ] **DI76. Academy attack details** ([[Combat]] 2.3):
	- a) [[Reserve]] is face down: the attacker picks blindly or takes
	  from the top?
	- b) [[Hand]] is hidden: picked blindly, or by name after Recon
	  ([[Explore]])?
	- c) Where a Damaged card from a pile goes: it stays Damaged in
	  its pile and cycles as a dead card until [[Recover]]ed (Mage
	  Knight wounds)?
	- d) Cards selected from piles are defending participants, so they
	  add their power to the defense: intended?
- [ ] **DI77. Hyperstructure count and build.**
	- a) How many in a game, one copy of each?
	- b) A shared row, the first to complete one takes it?
	- c) Built in stages: each [[Create]] adds Culture or Production
	  power as tokens until they reach its [[Cost]]?
- [ ] **DI78. Production path** ([[Goal]] 3.3) is TBD. → DP60
- [ ] **DI79. New technologies follow-ups.**
	- b) [[Legacy]] thins the deck, like RI46: keep it in `objectives`
	  or drop it?
	- c) The new technologies have no cards yet.
	- d) All are `advanced`, [[Legacy]] is `objectives`: should some
	  go to `core`?
- [ ] **DI80. Event catch-up measure.** [[Event]] notes give less to
  stronger factions, but greatness is now the four paths of [[Goal]]:
  which measure says who is stronger, Culture points?
- [ ] **DI81. Combat damage, to brainstorm.** [[Combat]] 10.1-2 Damage
  every direct participant the winner doesn't save by the advantage,
  on both sides; supporters only [[Deplete]]:
	- a) Exploit: one cheap [[Military]] ship plus [[Hand]] supporters
	  aiming at a tie. Advantage 0 saves nothing, so the defender's
	  whole garrison is Damaged for a level-2 ship.
	- b) Garrisons are a liability: the more defenders in a Star, the
	  more a narrow win costs.
	- c) Option: the loser's supporters get Damaged too, the winner's
	  only direct participants. Fighting from Hand stops being free,
	  but a narrow win still costs the winner the garrison.
	- d) Option: the loser's direct participants set the winner's
	  loss: the winner Damages own direct participants of total
	  [[Level]] at least the loser's direct total, chosen by the
	  winner.
	- e) Depends on DI76 c: where a Damaged card from Hand goes.

## Proposals

### Victory

- [ ] **DP60. Production path** for [[Goal]] 3, pick one or more:
	- a) Production, Wealth: stock 12 [[Energy]] (Civilization's
	  economic victory).
	- b) Production, Industry: total [[Level]] of own [[Base]]s on the
	  [[Field]], the mirror of the Culture path.
	- c) Production, Fleet: total Level of own [[Ship]]s, in the deck
	  and on the Field.
	- d) Production, Stock: total [[Materials]] stored in own Stars, a
	  logistics race.
	- e) Production, Built out: own [[Factory]] and [[Laboratory]] are
	  empty, the mirror of Science.
	- f) Production, Wonders: 2 completed [[Hyperstructure]]s.

### Fixes

- [ ] **DP48. Hidden movement.** Combinable:
	- b) Cards hidden by [[Stealth]] keep their real Range and
	  Capacity: Stealth pays off, though rivals can't check the
	  values.
	- c) Hidden [[Structure]]s don't move.

### Additions

- [ ] **DP52. Native defense.** [[DefSys]] is a [[Star]] property of
  the Star deck (RP36), like Eclipse Ancients:
	- a) A number on some Stars: to control the Star a player first
	  wins an [[Attack]] against that [[Defense]], then it's gone.
	- b) Better Abilities have higher DefSys.
	- c) Core gets neutral resistance without the [[GalaxyDeck]], and
	  Military has a job before the rivals meet.

### Removals and simplifications

- [ ] **DP55. One handling rule.** Replace the [[Manage]] table with
  the rule that [[Move]] 6 uses for cargo, the table says exactly
  this:
	- a) Military handles [[Actor]]s, Culture handles [[Social]]
	  cards, Production handles [[Industrial]] cards, Science handles
	  anything.
	- b) Any ship also carries [[Hero]]es and [[Materials]] (Move
	  only).
- [ ] **DP57. Economy roles.** One job per stockable resource (Eclipse,
  TtA: materials build, money is the wildcard):
	- a) [[Materials]] pay [[Create]], [[Upgrade]] and [[Recover]]
	  costs at a [[Hub]] in the Star where they are: [[Extract]] at
	  [[Asteroids]], carried to the Shipyard.
	- b) [[Energy]] [[Boost]]s any action (already in `core`).
	- c) [[Trade]] turns power into Energy between two own Colonies: a
	  trade route.
	- d) [[Dismantle]] merges into [[Recycle]].
	- e) [[Export]], [[Smuggle]] and [[Sell]] move to [[Politics]] as
	  trade between factions.
- [ ] **DP58. Traits instead of new Types.** Variety via [[Trait]]s:
	- a) `Unique`: one per faction on the [[Field]], for flagships and
	  top Heroes (TI).
	- b) `Consumable`: [[Destroyed]] after use, replaces the [[Tool]]
	  type: probes, mines, missiles.
	- c) `Immovable`: can't move or be cargo, replaces the third
	  mobility type in [[Range]], for Hyperstructures.
	- d) Card orientations are all taken (strong and weak front,
	  Damaged and Hidden back), so new states should come from
	  position, like [[ActiveFor]] and [[Pinning]], not markers.
- [ ] **DP59. Stubs** ([[RulesReview]] RI21):
	- a) [[DefSys]]: by DP52.
	- b) [[Dismantle]], [[Sell]]: by DP57.
	- c) [[PlusHero]]: remove, [[Create]] of Heroes covers it.
	- d) [[HyperPass]]: by RP24.

## Ideas

Not for answering now, kept for later.

- **Policies** (TtA governments, Civilization policies): one Policy
  card in [[Home]] giving a [[Plus]]: Hand size, Range, Energy.
  Changed by an action. `advanced`.
- **Energy as an extra action** (Voidfall trade tokens): spend 2
  [[Energy]] to let a Field card act without a starter from Hand
  ([[Starter]]). Alternative to [[Boost]].
- **Center prize** (TI Mecatol Rex): Star 11 of the first duel is
  fixed with the best Ability, e.g. [[Draw]] 1.
- **Derelict row** (TtA card row): [[Derelict]]s get cheaper the
  longer they wait.
- **Upkeep at Shuffle** (Voidfall, Eclipse), only if the leader
  snowballs in playtests: 1 Energy per Star beyond 3.
- **One Space per side**: halves first-duel tiles (24 → 12) and
  Explore actions, at the price of a single route between two Stars.
- **Drones** (TI fighters): Range 0 Military Units carried by ships,
  if [[Capacity]] needs more use.
- **Asymmetry**: one faction card with a single rule change on top of
  mirrored decks (TI faction abilities), keeps [[GameBalance]] even.
