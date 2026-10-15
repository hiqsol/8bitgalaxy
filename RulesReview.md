---
date: 2026-10-10
updated: 2026-10-15
status: open
---

# Rules review

Review of the notes in `docs/` (the source of truth), aimed at a **minimal playable duel**: 2 players, no Aliens, playable with an AI from the notes alone.

Cross-checked against the images in `public/images/` and the legacy implementation in `src/legacy/` (see [Images and implementation](#images-and-implementation)). The code is a manual sandbox (drag, flip, rotate, undo) with card data and setup, but no rule engine: it validates no actions, turns or combat.

Answer proposals by number, e.g. "P3 A", "P5 yes".

## Issues

### Game end and scope

- [ ] **I5. Setup missing:** board layout, initial board. [[StartDraw]] is only a draft. Answer: later. → P12.3

### Contradictions

- [ ] **I8. Tech tree.** The three tables in [[Technology]] disagree with each other and with tech notes ([[Explore]] L1 vs L2, [[PlusAction]] Military 6 vs Science 5, [[PlusDraw]] in three classes, [[Trade]] and [[Export]] both Culture L2, [[Recover]]/[[Upgrade]] in two classes). Answer: later. The card data is a fourth version, see I28.
- [ ] **I11. Attack requirement.** [[Attack]] needs more Military power than the defender, but [[Combat]] decides the winner after both sides commit. → P6
- [ ] **I14. Factory holds both buildable and [[Destroyed]] cards.** Not a real contradiction: Factory is the pool of cards to (re)build. → P14
- [ ] **I15. Combat vs Deplete.** [[PerformAction]] depletes all participants, [[Combat]] only supporters. → P5
- [ ] **I16. Boost cap.** [[Combat]] says resources up to [[Defense]], [[Boost]] says up to [[Capacity]]. → P7
- [ ] **I17. Manage vs Transport tables.** [[Manage]] says its table is the same as [[Transport]], but the Hero rows differ. → P14
- [ ] **I18. Cards can't die.** Nothing in the duel destroys a card, so "has no leader" ([[Goal]]) never happens. → P8

### Missing content

- [ ] **I19. No card data.** No note lists actual cards (levels, class, abilities). → P12.1. The code has a full 32-card deck, see I24.
- [ ] **I20. No cost formula.** [[Property]] says ExtraCost implies Cost and Size, but there's no formula. → P12.2. The code data supports P12.2, see I25.
- [ ] **I21. Stub notes** (`status: stub`): [[Wreckage]], [[DefSys]], [[HyperPass]], [[Cost]], [[ExtraCost]], [[MinusRequirement]], [[Sell]], [[PlusFactory]], [[PlusHero]], [[Dismantle]], [[EfficientUpgrade]], [[Navigation]], [[PlusRange]], [[Stealth]], [[Objective]]. Plus an empty `Untitled/` folder.
- [ ] **I22. Broken links.** Fixed: Actions, NewFactory, PlusCapacity, Leader. Remaining: Mobilize, PlusHand, Void. Enhance/Fix/Grow/Heal are now flavour names (aliases).
- [ ] **I23. [[ControlledBy]] has a TODO** for structures. → P10

### Images and implementation

Sources: `public/images/card.png`, `public/images/game.png` (the other images are backgrounds), `src/legacy/js/Model/` (`Decks/Human.js`, `Start.js`, `Home.js`, `Star.js`, `Row.js`, `Spec.js`).

- [ ] **I24. The deck exists only in code.** `Decks/Human.js` defines 32 two-ended cards: 8 each of Ship, Hero, Base and Colony, levels 1–4. Notation per end: `l` level+class, `e` [[ExtraCost]], `p` [[PrimaryAbility]], `c` [[SecondaryAbility]] (called *Cooperation*), `r` [[Prerequisites]], `:name` technology. The Martian deck is a copy of the Human deck. → P15
- [ ] **I25. The data confirms P12.2.** Ship ends are balanced: level + ExtraCost is the same on both ends (2+1 = 1+2 = 3; 4+1 = 3+2 = 5). Heroes have equal levels on both ends and ExtraCost 1. For structures the weak end is one level lower. So "Cost = strong level + ExtraCost" holds for every card. The ExtraCost class also says which power pays: `p` for [[Industrial]], `c` for [[Social]], as in [[Origin]].
- [ ] **I26. Primary is not equal to level.** The P12.1 default ("Primary = power equal to current level") doesn't match the data:
	- Ships: L1 → 1, L2 → 1, L3 → 2, L4 → 2
	- Heroes: L1 → 1, L2 → 2, L3 → 2, L4 → 3
	- Structures: Primary = level (strong end), Secondary = level − 1.
	- `card.png` also shows Level 2 with Primary 1. → P12.1 must pick one.
- [ ] **I27. Where the technology sits.** On Ships and Heroes it is on the Secondary (`c1a:retreat`) and the Primary is pure power. On structures it is on the Primary (`p2p:shpyrd`) and the Secondary is pure power. [[PrimaryAbility]] says an ability is Power **or** Technology, but the data gives an ability an amount, a class **and** a technology. Also, `Spec.fromString` replaces the number with the tech name, so the `2` in `p2p:shpyrd` is lost. → P16
- [ ] **I28. Technologies on cards vs notes** (a fourth version of the tech tree, see I8):

	| Tech | Notes | Cards |
	|------|-------|-------|
	| [[Explore]] | Science L1 / L2 | Science L2 |
	| [[Recycle]] | Science L2 | Science L1 (Hero-1p) and L2 |
	| [[Recover]] | L1 | `fix` Production L1, `heal` Culture L2 |
	| [[Smuggle]] | Culture L4 | **Military** L4 (Ship-4a) |
	| [[Exhaust]] | Military | **Science** L4 (Ship-4s) |
	| [[Stealth]] | Military 4 | Military L3–4 |
	| [[Export]] | Culture L2 | Culture L3–4 |
	| [[PlusRange]] | Science, level ? | Science L3–4 (fills the gap) |
	| [[Academy]], [[Shipyard]], [[Trade]], [[Extract]], [[Retreat]], [[Recon]], [[Navigation]], [[PlusLoad]] | | match |

	- Names on cards without a note: `improve` (Culture, looks like Grow), `upgrade` (Production, looks like Enhance), `mobilz` (the Mobilize broken link from I22), `allacad` (Base-4c), combos `fix+upg`, `heal+imp`, `fix+shipy`.
	- No card gives: [[PlusDraw]], [[PlusAction]] (both in the P11 core set), [[PlusHero]], [[PlusFactory]], [[PlusLaboratory]], [[DoNotDeplete]], [[Militarization]], [[Invent]], [[BeActor]], [[Sell]], [[Dismantle]]. → P17
- [ ] **I29. Does a Depleted structure work?** Every structure's weak end has its own level, Primary and the same technology (Base-2p weak end: `l1p, p1p:shpyrd`). Only the Secondary is missing. The notes only say weak end up = [[Depleted]], not whether it can participate. → P18
- [ ] **I30. Data typos in `Human.js`.**
	- Base-4a weak end: `p3n:stealth`, class `n` (None) instead of `a`.
	- Colony-4x weak ends have Primary 1 at level 3, Base-4x weak ends have 3. One of them is wrong.
- [ ] **I31. Setup in code vs [[StartDraw]].** `Start.js` matches the note for Discard (4 Ships 2/1, 2 Heroes 1/1), the home star (Academy Colony-2c and Shipyard Base-2p, Ready) and Factory (4 Heroes, 3 Bases, 3 Colonies: all cards with max level ≤ 3).
	- Laboratory gets all 14 level-4 cards (4 Ships, 2 Heroes, 4 Bases, 4 Colonies), not just "hero".
	- Factory cards are shuffled and dealt round-robin to 4 piles. With P14 ("only the top card is available"), which card you can build is random. Laboratory has 5 piles, each sorted with the lowest level on top.
	- Reserve and Hand start empty, so the first action is always Draw, after a Shuffle of the 6 discarded cards. Obsolete with the new [[Turn]]: [[StartDraw]] now deals the Reserve and a Hand.
- [ ] **I32. Home in code vs [[Home]].**
	- Extra **Progress** row (Attack, Colo, Prod, Science piles), also visible in `game.png`. Not in any note.
	- 4 Factory piles and 5 Laboratory (`RnD`) piles. The notes don't give counts.
	- Hand is 3 slots, [[Hand]] now says the size is 5. → P19
- [ ] **I33. Board geometry exists only in code.** 7 hex stars in rows of 2-3-2. The center star `S11` is walled off with Void, P1 starts at `S21`, P2 at `S00`, the center is for Aliens. Space segments sit on star edges (plus corners for border stars), start hidden, and get a random type 1–6 (6 = Void). [[Space]] lists 5 types and gives Space a Length and Cost, which the code doesn't have. → P20
- [ ] **I34. Names in code vs notes.**
	- Classes: Attack / Colonization / Production / Science (letters `a c p s`) vs Military / Culture / Production / Science.
	- Secondary ability = `Cooperation`. Laboratory = `Research` / `RnD`.
	- The [[OuterSpace]] pile is called `ipm` ("Interplanetary Medium"), which is easy to confuse with [[IPS]] (the slots).
	- Card states `Turned` (flip) and `Altered` (rotate) vs [[Side]] and [[End]]. The back side has no Disabled/Hidden distinction (`Unknown` is used for Aliens only).
- [ ] **I35. Images are stale** (Feb 2024).
	- `game.png` shows an old card set (`tx1`–`tx6`, `bank`, `hyper`, `+hero`, `sYard`, `xtrct`, `eXplr`) and old Home buttons (Get 1, Get 2, Discard, counter 60) that are no longer in the code.
	- `card.png` labels only Level, Class, Type, Primary and Secondary. Missing: the other end (bottom corners), ExtraCost, Faction, Prerequisites and technology name.
	- [[index]] and [[Property]] link to `https://8bitgalaxy.com/images/…` instead of the repo copy, so they don't render offline. → P21
- [ ] **I36. Stale code.** It doesn't affect the rules, but it makes the code a weaker reference:
	- `Demo.js` uses AI cards (the AI deck is commented out in `Decks.js`) and Human cards that don't exist (`Human-Base-7a`, `Human-B6c`), so it throws.
	- `Generator.js` calls a nonexistent `aCard.buildName`.
	- [[PITCH]] mentions a `8bitgalaxy-core` package that isn't in this repo.

### New turn

The [[Turn]] is now like Star Realms: play cards from [[Hand]] one by one, each card either [[Takeoff]]s to a free slot of a controlled star or starts an action as the **starter** ([[PerformAction]]). At the end of the turn unused cards go to [[Discard]] and the hand is refilled. [[Draw]] and [[Takeoff]] are no longer actions, PlusTakeoff and Transport during Takeoff are removed. Takeoff no longer starts at a [[BuildingFacility]].

- [ ] **I37. Restore at start of turn?** Structures act like Star Realms bases, but only [[Manage]] restores them (see the Restore economy idea). Should all your structures be restored at the start of your turn? Answer: discuss later.
- [ ] **I38. Not enough weak actors for the starting deck.** [[StartDraw]] wants the 10 weakest [[Actor]] cards, but the deck data (I24) has only 6 actors with a level 1 end (Ship-2x, Hero-1x). The next weakest are Hero-2a and Hero-2c, then level 3. Add 4 basic starter cards (like Scouts and Vipers), or take them from the deck? Also update the [[Factory]] list in [[StartDraw]] accordingly.
- [ ] **I39. Technologies redefined for the new turn** (check them):
	- [[PlusDraw]]: draw one card when used in an action (was: more cards with the Draw action).
	- [[PlusAction]]: the starter returns to Hand instead of Deplete, so the card starts one more action.
	- [[BeActor]]: a Field card can start an action without a starter from Hand (was: actions without an Actor).
	- [[DoNotDeplete]] sends a Hand card to [[Reserve]]. Maybe back to [[Hand]] now, which would be the same as PlusAction.
- [ ] **I40. Pace.** About 5 actions per turn instead of 2. Hand size (P19) is the main knob. Answer: we'll see later.
- [ ] **I41. Who controls a star** is now core: it decides where you can [[Takeoff]] and which stars can be an action source. → P10
- [ ] **I42. Hand supporters in defense.** [[Combat]] already lets the defender add cards from Hand. With the hand refilled at the end of your turn it now always works. Proposal: on rivals' turns Hand cards can only join [[Combat]] as defenders' supporters. State it in [[Combat]] or [[Turn]].

## Proposals

- [ ] **P2. Hidden only in combat.** For the duel, allow Hidden only for supporters committed from Hand during [[Combat]] (bluffing). They are revealed when combat resolves. [[Stealth]] moves come later.
- [ ] **P4. Transport doesn't deplete moving cards.** It is a kind of Move. Otherwise a colony ship vanishes after delivering. ([[Takeoff]] is no longer an action and doesn't deplete.)
- [ ] **P5. Combat is an exception to Deplete.** Direct participants of both sides stay (saved) or become [[Damaged]], and supporters deplete. Otherwise a winning defender's ships leave the star they defended.
- [ ] **P6. Attack requirement.** "At least one [[Military]] direct participant, and the target [[Star]] within [[Range]] (the source star is allowed)." [[Combat]] decides the winner.
- [ ] **P7. Combat strength, stated once:**
	- Each card adds its [[AttackPower]]. A non-Military defender adds its [[Defense]] (1).
	- Boost: [[Materials]] up to [[Capacity]] (the general [[Boost]] rule).
	- A tie goes to the defender.
	- Advantage = winner total − loser total. The winner saves direct participants with total level **≤** the advantage (not "less than").
- [ ] **P8. How cards die.** "A Disabled card that becomes Damaged again is Destroyed." Destroyed cards go to the owner's [[Factory]].
- [ ] **P9. Defeat condition** in [[Goal]]:
	- "Has no leader" = at the end of their own turn, no Enabled [[Hero]] on Field, Hand, Reserve or Discard.
	- "Can not make a move" = at the start of their turn, no action is possible.
	- Optional faster win: losing both [[BuildingFacility|building facilities]].
- [ ] **P10. Structure control** in [[ControlledBy]]: "the faction with the highest [[Control]] in the star. If equal, each faction controls its own structures." Drop the "consensus" clause for the duel.
- [ ] **P11. Core set for the minimal duel:**
	- Actions: [[Move]], [[Transport]] (cards only), [[Manage]] (rotate and shift), [[Research]], [[Attack]]/[[Combat]], [[Create]], [[Upgrade]], [[Recover]].
	- Technologies: [[Academy]], [[Shipyard]], [[Retreat]], [[PlusDraw]], [[PlusAction]], [[PlusRange]].
	- Board: all [[Space]] revealed and Normal.
	- Out: [[Materials]] (Boost, Extract, Trade, Export, Smuggle, Sell, Dismantle, Recycle), [[Money]], [[Hyperstructure]], [[Objective]], [[Event]], [[Tool]], [[Stealth]], Explore/Recon, Aliens.
	- [[Takeoff]] and [[Draw]] are no longer actions, they are part of the [[Turn]].
	- Combat bluffing stays.
- [ ] **P12. What's still missing before a first game:**
	1. Card data. Default rule: [[PrimaryAbility]] = [[Power]] of the card's [[Class]] equal to its current [[Level]]. [[SecondaryAbility]] = one [[Technology]] or none. An actor is then just: Type, and for each end Class, level and technology. ⚠ The card data disagrees, see I26 and I27.
	2. Cost = strong level + [[ExtraCost]].
	3. Duel map: 2 home stars and 3 neutral stars in a line or a ring, every Space length 1. See P20 for the map the code already has.
	4. ~~First player has 1 action on their first turn.~~ Done: the first player starts with 3 cards, see [[StartDraw]].
	5. ~~[[Reserve]]~~ Done.
- [ ] **P14. Small clarifications:**
	- [[Factory]]/[[Laboratory]]: only the top card of each pile is available.
	- [[Factory]] is the pool of cards to (re)build, which is why [[Destroyed]] cards go there.
	- [[Research]] [[Prerequisites]] are provided by the action's participants.
	- Pick one Hero row for the [[Manage]] and [[Transport]] tables.
- [ ] **P15. Put the deck into the notes.** Add a `docs/Cards/Deck.md` table generated from `Human.js` (one row per end: type, level, class, ExtraCost, Primary, Secondary, technology, prerequisites). The notes stay the source of truth, and the code is regenerated from them later. This resolves I19.
- [ ] **P16. One ability format:** "An ability gives [[Power]] of its class and amount, and may also name one [[Technology]]." That's what the data already does. Alternative: a technology replaces the power, and the number is the tech level. Either way, fix `Spec.fromString` so it keeps the number.
- [ ] **P17. Tech tree baseline.** Use the card data (I28) as the starting point for I8, since it's the only version that fits a real deck. Then either add cards for [[PlusDraw]] and [[PlusAction]] or drop them from the P11 core set.
- [ ] **P18. Depleted structures:** "A [[Depleted]] structure still participates with its weak end: its level and [[PrimaryAbility]], no [[SecondaryAbility]]." This matches the data and keeps one structure useful without a [[Manage]] every turn (see the Restore economy idea).
- [ ] **P19. Hand size:** 5 (note, like Star Realms with a 10-card deck), 4, or 3 (code)? Smaller hand = slower game, see I40.
- [ ] **P20. Duel map = the code's map** (replaces P12.3): 7 hex stars, Void center, homes at opposite corners, every Space revealed, Normal, length 1.
- [ ] **P21. Images.** Regenerate `game.png` and `card.png` from the current code. Annotate `card.png` with both ends, ExtraCost, Prerequisites and the technology name. Link the images with local paths (`../public/images/…`).

### Ideas

- [ ] **Actors are the deck, structures are the engine.** Actors cycle through Discard, structures stay and rotate. Say this in [[DeckBuilding]] or [[index]].
- [ ] **Raids vs occupation.** Attacks don't take territory, you Move in afterwards. State it in [[Attack]].
- [ ] **Restore economy.** Only [[Manage]] restores structures. Watch in playtests whether the game slows down. Fallback: restore one structure for free at the start of your turn.
- [ ] **More Star Realms mechanics** now fit: "draw a card" ([[PlusDraw]]), "rival discards a card" at the start of their turn, scrap a card from Hand or [[Discard]] to [[Factory]] to thin the deck.
- [ ] **AI playtesting.** Export all `scope: core` notes into one file and run AI-vs-AI duels to find holes in the rules.
