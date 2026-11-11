---
status: draft
scope: meta
---

# Combat variants

A brainstorm and simulated playtest of 17 [[Combat]] variants plus the
current rules, redone 2026-11-07: [[Hand]]s hold [[Unit]]s only, the
[[Structure]]s stay on the [[Field]], and the rules include the
[[Combat]] guidance: a non-[[Military]] [[Card]] defends with 0 from
[[Hand]], [[Recover]] costs half the [[Price]], [[Salvage]] works for
a side that stands in the [[Star]]. [[Duel]] only, no dice, the
[[Combat Round]]s and [[Hidden]] [[Card]]s stay. Ranked by dramatic
stories, real decisions and short rules. Nothing else is applied to
the rules.

## Summary

1. **The defense advantage now lives on the [[Field]] only**: a
   [[Ship]] attacks with half its [[Level]] and defends with all of
   it, 2 to 1. A mid-game [[Hand]] of 5 [[Unit]]s attacks with 3.1 and
   defends with 3.5, almost even: only its [[Military]] [[Card]]s
   defend, and the [[Defender]] keeps one [[Card]] so as not to fall
2. **[[Attack]]s are common**: under the current rules 86% of setups
   offer a paying [[Attack]], 63% under V13
3. **The current rules are still exploitable**: 28% of [[Attack]]s are
   lost and still pay, because a narrow [[Defender]] win Damages its
   own garrison
4. **The best variant is still V13, direct margin with rout**: the
   loser's [[Direct participant]]s are [[Damaged]], the winner loses
   [[Level]]s equal to the loser's direct [[Level]]s minus the
   [[Advantage]], a crushing win [[Destroy]]s. Profitable lost attacks
   fall from 28% to 8%, the [[Attacker]] wins 61% instead of 40%, 94%
   of fights carry a story event; three short rules
5. **V17, V13 with captured [[Hero]]es**, is the recommended form: a
   routed [[Hero]] stays [[Damaged]], so it can be captured and
   healed. Stories 87% by the count, plus the capture the count
   doesn't see
6. **Your [[Salvage]] closes the exploit by itself**: a beaten
   [[Attacker]] has no [[Card]] standing in the target [[Star]], so it
   salvages nothing. Profitable losses go down with [[Salvage]], from
   28% to 24% under the current rules
7. **[[Retreat]] still breaks [[Attack]]**: when a [[Defender]] with
   [[Retreat]] escapes nobody wins, the [[Attacker]] wins 0-3%
8. **[[ForceDiscard]] lost its [[Combat]] role**: the rival discards
   its weakest [[Card]], now usually one that defends with 0
9. The ranking holds when the cost guesses change: [[Star]] worth 0
   or 6, an attacking [[Hand]] [[Card]] worth 0.5, [[Recover]] at the
   full [[Price]], early or late decks, a [[Defender]] free to spend
   its last [[Card]]

## Combat economics

Every cost is in [[Hand]]-card equivalents (HC): one [[Card]] played
from [[Hand]], the unit of the [[Turn]] budget, see [[Turn#Notes#1]].

1. **The deck is [[Unit]]s**: [[StartDraw]] gives 18, 8 [[Ship]]s, 2
   [[Hero]]es and 8 [[Tool]]s. By mid-game a player has taken off or
   recycled 2-5 weak ones and created 2-5 new [[Actor]]s: the other
   [[Hero]]es 2/1, the [[Card]]s 4/3, rarely a 6/5. [[Structure]]s
   never get into [[Hand]], see [[Structure#2.2]]
2. **One [[Hand]] [[Card]] is worth 1.4 [[Power]]**: its best
   [[Power]] as a [[Supporter]], 1.2 early, 1.7 late
3. **Attack per [[Level]] is half of Defense per [[Level]] on the
   [[Field]]**:
	1. [[Ship]] 2M, 4M, 6M, 8M attack with 1, 2, 3, 4 and defend with
	   2, 4, 6, 8
	2. A [[Hero]] attacks with about 3/4 of its [[Level]]
	3. A [[Structure]] doesn't attack, a [[Military]] one defends with
	   its [[Level]] and [[Plus]] [[Defense]], the others with 1
4. **The [[Hand]] attacks and defends almost evenly**:
	1. A [[Hand]] [[Card]] attacks with 0.65: only a [[Military]]
	   [[End]] gives [[MilitaryPower]]
	2. It defends with 0.75: a [[Military]] [[End]] with its
	   [[Level]], any other with 0, see [[Defense#3]]
	3. A [[Hand]] of 5 attacks with 3.1 on average, 5 at the 90th
	   percentile. Its best 4 defend with 3.5, 7 at the 90th
	   percentile
5. **The [[Defender]] keeps one [[Card]]**: an empty [[Hand]] at the
   start of its [[Turn]] is **Fallen**, see [[PaxGalactica#Notes#6]],
   so it defends with 4 [[Card]]s at most. An [[Attack]] wins against
   a garrison of [[Defense]] G with about G + 3.5 [[MilitaryPower]]
6. **Damaged costs 56-64% of Destroyed**:
	1. [[Damaged]]: [[Recover]] costs half the [[Price]] rounded up
	   and a starter, ⌈P / 2⌉ / 1.4 + 1 HC
	2. Destroyed: [[Create]] costs the [[Price]] and a starter, an
	   [[Actor]] then needs a [[Takeoff]] too, P / 1.4 + 1 (+1) HC
	3. [[Ship]] 2M: [[Damaged]] 2.4, Destroyed 4.1. [[Ship]] 4M: 3.1
	   and 5.5. [[Hyperstructure]] 6P: 3.8 and 5.9
	4. The starter is the biggest part of a repair: 1 HC of 2.4
	5. A [[Damaged]] [[Card]] in a [[Star]] the rival holds is worse:
	   the rival may [[Recover]] it as its own, see
	   [[Recover#Notes#2]]
7. **A spent [[Hand]] [[Card]] costs 1 HC to the [[Defender]]**, a
   [[Card]] missing at its next [[Turn]]. To the [[Attacker]] it costs
   1 or less: unused [[Card]]s go to [[Discard]] at **Draw** anyway
8. **A [[Star]] is worth about 2-6 HC**: a [[Ready]] [[Structure]]
   plays as a free [[Card]] each [[Turn]], 3 [[Restore]]s a [[Turn]],
   so a [[Star]] with 1-2 [[Structure]]s is worth 1-2 HC a [[Turn]]
   for the few [[Turn]]s it is held. The simulation uses 3

## Method

1. A Python simulator plays one [[Combat]] per setup, 400 random
   mid-game setups per variant, the same setups for each variant
2. A setup: 1-3 [[Military]] [[Actor]]s of the [[Attacker]], 1-4
   [[Card]]s of the [[Defender]] in the target [[Star]] (mixed
   [[Military]] and economic [[Unit]]s and [[Structure]]s, 20%
   [[Hidden]]), and a [[Hand]] of 5 [[Unit]]s for each side from its
   own mid-game deck
3. Each move is a minimax search over the mover's belief: its own
   [[Card]]s exactly, the rival's [[Hand]] [[Card]]s and [[Hidden]]
   [[Card]]s as averages. The [[Attacker]] attacks only when it
   expects a gain, and picks the first [[Defender]]s
4. A move adds the next few [[Card]]s of the mover's order or passes:
   two orders per side, [[Field]] first or [[Hand]] first
5. A story event is one of: a pyrrhic win (the winner loses at least
   half the loser's [[Damaged]] [[Level]]s), a rout ([[Card]]s
   Destroyed), an upset (the weaker [[Field]] side wins), two or more
   lead changes, an escape
6. A close decision is a move whose best and second-best options
   differ by less than 0.75 HC: the higher, the more real decisions
7. A profitable loss is an [[Attack]] the [[Attacker]] loses while
   the [[Defender]] loses more HC: the I81 exploit
8. Not covered: 3+ players, [[Boost]] with [[Energy]], whole games,
   human bluff. The simulated players know the probabilities, not
   the cards. A [[Field]] [[Card]] is drawn apart from the deck, so a
   setup may show a [[Card]] twice

## Variants

The variants change one of three things: how the damage falls, how
the [[Combat Round]]s run, or what the [[Hand]] puts at stake. Each
rule replaces [[Combat#9.1]]-9.2 unless it says otherwise.

1. **V0. Current rules**: the winner saves own [[Direct participant]]s
   of total [[Level]] up to the [[Advantage]], every other one is
   [[Damaged]]
2. **V1. Margin**: the loser's [[Direct participant]]s are
   [[Damaged]], the winner Damages own ones of total [[Level]] at
   least the loser's total − [[Advantage]]. From Dune, where winning
   costs what you committed
3. **V2. Margin and rout**: V1, and when the winner loses nothing the
   loser's [[Direct participant]]s are Destroyed instead
4. **V3. Hand at stake**: V1, and the loser's [[Hand]] [[Supporter]]s
   are Destroyed, not [[Discard]]ed. From Blood Rage, where the
   cards you commit can be lost
5. **V4. Hits**: each side takes hits equal to the rival's total and
   Damages own [[Direct participant]]s of total [[Defense]] up to the
   hits, as many as fit. Lanchester attrition, Eclipse hit allocation
   without dice
6. **V5. Three rounds**: V1, and the [[Combat]] resolves after the
   third [[Combat Round]]. From bidding games with a fixed number of
   rounds
7. **V6. Pass is final**: V1, and a party that passes adds nothing
   later. The drop-out of Taj Mahal
8. **V7. Withdraw**: V1, and at its move a party may withdraw: the
   rival wins, the withdrawing side Damages own
   [[Direct participant]]s of total [[Level]] at least the rival's
   lead. From the retreats of War of the Ring and Twilight Imperium
9. **V8. Fronts**: V1, and with an [[Advantage]] of 1 or less nothing
   resolves: both sides stay [[Pinning|pinned]] and fight on at the
   next [[Turn]] with new [[Hand]]s. Sieges spanning turns
10. **V9. Wrecks**: V1, and the loser's [[Hand]] [[Supporter]]s land
    [[Damaged]] in the target [[Star]], for the rival to [[Recover]]
11. **V10. Winner picks**: the winner Damages one
    [[Direct participant]] of the loser and more of total [[Level]] up
    to the [[Advantage]], chosen by the winner, and loses nothing
12. **V11. Spend the Advantage**: V0, and the [[Advantage]] left after
    saving buys more: its [[Level]] [[Destroy]]s a loser [[Card]], 1
    point is 1 [[Goods]]. From Root's extra hits
13. **V12. Direct margin**: the loser's [[Direct participant]]s are
    [[Damaged]], the winner Damages own ones of total [[Level]] at
    least the loser's direct [[Level]]s − [[Advantage]]. I81 d refined
14. **V13. Direct margin and rout**: V12, and when the [[Advantage]]
    is at least the loser's direct [[Level]]s, they are Destroyed
15. **V14. Graded rout**: V12, and each [[Advantage]] point above the
    loser's direct [[Level]]s [[Destroy]]s 1 [[Level]] of its
    [[Damaged]] [[Card]]s, as many as fit
16. **V15. V13 and withdraw**: V13 with the V7 withdraw
17. **V16. Garrison reserve**: V13, and the [[Defender]] adds at most
    as many [[Hand]] [[Supporter]]s as it has [[Card]]s in the
    [[Star]]: a reserve needs a garrison to reinforce
18. **V17. Captured Heroes**: V13, but a routed [[Hero]] stays
    [[Damaged]] in the [[Star]], for the winner to capture

## Results

400 setups each. [[Attack]]s made: share of setups where an [[Attack]]
pays. The other columns are shares of the [[Attack]]s made.

| Variant | [[Attack]]s made | A wins | Rounds | Pyrrhic | Rout | Escape | Profitable loss | Close decisions | Story |
|---|---|---|---|---|---|---|---|---|---|
| V0 current | 86% | 40% | 3.3 | 65% | 0% | 0% | 28% | 55% | 79% |
| V1 margin | 70% | 55% | 3.8 | 65% | 0% | 0% | 15% | 61% | 80% |
| V2 margin, rout | 70% | 55% | 3.9 | 66% | 16% | 0% | 15% | 62% | 94% |
| V3 hand at stake | 55% | 67% | 3.0 | 25% | 0% | 0% | 4% | 40% | 42% |
| V4 hits | 81% | 43% | 3.0 | 73% | 0% | 0% | 43% | 39% | 83% |
| V5 three rounds | 71% | 59% | 3.4 | 57% | 0% | 0% | 15% | 57% | 77% |
| V6 pass is final | 71% | 55% | 2.8 | 57% | 0% | 0% | 14% | 42% | 75% |
| V7 withdraw | 69% | 59% | 3.2 | 53% | 0% | 22% | 13% | 63% | 84% |
| V8 fronts | 70% | 46% | 3.3 | 62% | 0% | 0% | 17% | 61% | 80% |
| V9 wrecks | 56% | 65% | 2.7 | 39% | 0% | 0% | 6% | 54% | 55% |
| V10 winner picks | 49% | 72% | 2.9 | 0% | 0% | 0% | 0% | 52% | 41% |
| V11 spend | 77% | 46% | 4.5 | 71% | 35% | 0% | 21% | 77% | 93% |
| V12 direct margin | 64% | 61% | 3.4 | 44% | 0% | 0% | 9% | 55% | 69% |
| V13 direct, rout | 63% | 61% | 3.4 | 45% | 39% | 0% | 8% | 57% | 94% |
| V14 graded rout | 64% | 60% | 3.7 | 44% | 22% | 0% | 9% | 60% | 83% |
| V15 V13, withdraw | 64% | 62% | 2.8 | 38% | 3% | 50% | 8% | 57% | 96% |
| V16 garrison reserve | 68% | 67% | 3.3 | 42% | 43% | 0% | 6% | 52% | 94% |
| V17 captured [[Hero]]es | 63% | 61% | 3.4 | 45% | 26% | 0% | 8% | 56% | 87% |

### Ranking

1. **V13 direct margin and rout**, with the V17 [[Hero]] exception:
	1. Stories: 94%; narrow wins bleed, crushing wins [[Destroy]], so
	   both pyrrhic victories and routs happen. V17 keeps the routed
	   [[Hero]] as a captive: fewer Destroyed [[Card]]s, one more kind
	   of story
	2. Decisions: 57% close; adding [[Card]]s matters on both sides
	   of the outcome, to win, then to win big enough
	3. Short: three sentences, a fourth for the [[Hero]]
	4. Closes I81 a and b: a tie costs the winner only the loser's
	   direct [[Level]]s, a big garrison wins for free
2. **V16 garrison reserve**: as many stories (94%), the [[Attacker]]
   wins 67%, the fewest profitable losses (6%). Only needed if
   [[Attack]]s stay rare in play; the [[Defense]] rule of the
   guidance already did most of its job
3. **V15 withdraw**: the most stories (96%), but half the fights end
   in a withdraw and routs vanish (3%). A side that leads withdraws
   for free after the rival spent its [[Hand]]: a feint too cheap.
   Keep escape as the [[Retreat]] technology
4. **V14 graded rout**: more close decisions (60%), fewer stories
   (83%) and one more count. Not worth it
5. **V11 spend the Advantage**: the most close decisions (77%), but
   it keeps the V0 damage and its exploit (21%), and fights run 4.5
   rounds
6. **V2 margin and rout**: stories 94%, but the exploit stays (15%):
   [[Hand]] [[Supporter]]s inflate the loser's total and the winner's
   losses with it
7. **V12 direct margin**: the safe minimum fix, 9% exploit, but few
   stories (69%)
8. The rest fail one criterion clearly:
	1. V3 hand at stake and V9 wrecks: fewer [[Attack]]s, half the
	   stories, extra bookkeeping
	2. V4 hits: the worst exploit, 43%, losing pays
	3. V5, V6, V8: no better than V1, more rules
	4. V10 winner picks: no pyrrhic wins at all, the dullest (41%)

## Exploit scenarios

Handcrafted setups, with the I81 and [[Diagnostic]] cases, [[Hand]]s
of [[Unit]]s:

1. **E1 tie exploit** (I81 a, Q21): a [[Ship]] 2M with [[Ship]] 4M,
   [[Hero]] 2M, [[Hero]] 2S, [[Tool]] 1M, [[Ship]] 1M in [[Hand]]
   against a [[Hero]] 2M, a [[Ship]] 2M and a [[Ready]] [[Base]] 2M;
   the [[Defender]]'s [[Hand]] is all economic:
	1. V0: the [[Attacker]] wins 8:7, the [[Defender]]'s [[Hand]]
	   can't answer. The narrow winner loses a [[Card]] and 6.4 HC,
	   the [[Defender]] 7.2
	2. V12, V13, V17: no [[Attack]], it can't pay
2. **E2 big garrison** (I81 b, Q22): five [[Level]] 2 defenders. No
   variant attacks; under V12 and V13 a garrison is never a
   liability, the winner's loss shrinks with the [[Advantage]]
3. **E3 raid on a rich [[Hyperstructure]]** guarded by a [[Ship]]
   4M: V0 attacks and loses 4:6, but Damages 10 HC of [[Defender]]
   [[Card]]s against 3.4 HC lost: the profitable loss. No other
   variant attacks
4. **E4 even fleets, strong [[Hand]]s**: the [[Defender]] wins in
   every variant, the [[Field]]'s 2 to 1 decides
5. **E5 a [[Hidden]] guard** behind a [[Colony]] 4C: the
   [[Attacker]] wins 6:5 under V12-V17 and loses both of its
   [[Card]]s doing it, a pyrrhic win. The bluff no longer saves the
   [[Star]], a weak [[Hand]] can't back it

## Combat technologies

Simulated on V0, V12, V13 and V17, 200 setups each:

1. **[[Retreat]]**, a rule gap:
	1. With the [[Attacker]]: used in 6-10% of fights, harmless
	2. With the [[Defender]]: used in 44-59% of fights, the
	   [[Attacker]] wins 0-3%. [[Retreat#3.1]] "the [[Combat]]
	   finishes" names no winner, so the [[Attacker]] doesn't move in
	3. Remedy: the rival wins with [[Advantage]] 0, the retreating
	   side only [[Deplete]]s. [[Counterintelligence]] stays its
	   answer
2. **[[Ambush]]**, more [[Hidden]] defenders: [[Attack]]s fall from
   84% to 60% under V0, from 61% to 51% under V13: a hidden garrison
   deters
3. **[[Tactics]]**: +1 lifts the [[Attacker]]'s wins by 3-8 points
4. **[[Salvage]]**, your rule:
	1. With the [[Attacker]]: profitable losses 24% under V0 against
	   28% without, 7% under V13 against 8%. A beaten [[Attacker]]
	   stands nowhere in the target [[Star]], so it takes nothing
	2. With the [[Defender]]: [[Attack]]s fall from 84% to 69% under
	   V0, a [[Star]] that salvages its attackers deters
	3. The choice to take the [[Goods]] matters when the [[Star]] may
	   fall next [[Turn]]: not simulated, a single [[Combat]] doesn't
	   see it
5. **[[Decapitation]]**, a lone [[Hero]] with [[Hand]]
   [[Supporter]]s, 150 setups: the [[Attacker]] wins 60% under V0,
   70% under V12, 71% under V13; V13 [[Destroy]]s the [[Hero]] in 49%,
   V17 keeps it [[Damaged]], a captive, and routs only 6%
6. Not simulated, read from the rules:
	1. [[ForceDiscard]]: the rival picks the [[Card]], so it discards
	   one that defends with 0. It still costs a [[Card]] of the next
	   [[Turn]], and against a [[Hand]] of one it threatens the fall
	2. [[Raid]]: under V12 and V13 the winner who stays home still
	   pays its margin loss, consistent
	3. [[Intercept]]: the same resolution, the newcomers defend
	4. [[NovaBomb]]: no [[Combat]], unchanged
	5. [[Stealth]]: the bluff, see E5

## Narrated battles

Three setups from the simulation, under the current rules and V13.

1. **The rout of the guard** (setup 1006): a [[Ship]] 4C on its
   [[Military]] [[End]] and a [[Hero]] 4P on its [[Military]] [[End]]
   attack a [[Star]] held by a lone [[Ship]] 2M. The [[Defender]] at
   once throws its best [[Card]], a [[Ship]] 6M from [[Hand]]: 8
   against 3. The [[Attacker]] brings the [[Hero]] 4P, then a
   [[Hero]] 4M from [[Hand]], then a [[Hero]] 2M, 11 against 8:
	1. V0: the [[Defender]] also adds a [[Ship]] 2C, 11:9. The
	   [[Advantage]] 2 saves neither [[Card]] of [[Level]] 3, both are
	   [[Damaged]] in the victory; the winner loses 8.2 HC, the
	   [[Defender]] 4.4. The winner pays double
	2. V13: the [[Advantage]] 3 beats the guard's [[Level]] 2: rout,
	   the guard is Destroyed, the [[Attacker]] loses nothing but its
	   [[Hand]] [[Card]]s. The same play, a story with weight
2. **Junk wins the day** (setup 1054): a lone [[Ship]] 2M attacks
   two [[Hero]]es, a 4S and a 2S turned to its [[Military]] [[End]].
   The [[Defender]] adds a [[Hero]] 2M from [[Hand]], 4 against 1.
   The [[Attacker]] answers with a [[Hero]] 2S, then a [[Tool]] 1M,
   then its second [[Tool]] 1M:
	1. V0: the [[Attacker]] stops at 4:4, the tie goes to the
	   [[Defender]], and both [[Hero]]es of the [[Defender]] are
	   [[Damaged]] anyway: the winner loses 6.5 HC, more than the
	   loser
	2. V13: the second [[Tool]] makes it 5:4. The [[Attacker]] wins
	   with the junk of its starting deck, its [[Ship]] is
	   [[Damaged]], and
	   both [[Hero]]es of the [[Defender]] lie [[Damaged]] in a
	   [[Star]] the [[Attacker]] now holds
3. **The fortress** (setup 1005): a [[Hero]] 4M and a [[Ship]] 6M
   attack four [[Card]]s: a [[Colony]] 4C, a [[Ship]] 1M, a [[Hero]]
   2S and a [[Base]] 2M:
	1. V0: the [[Defender]] brings in the [[Base]] and a [[Tool]] 1M,
	   the [[Attacker]] a [[Ship]] 2M; at 7:7 the [[Attacker]] stops.
	   The [[Defender]] wins the tie, but four of its [[Card]]s are
	   [[Damaged]]: it loses 10.6 HC, the beaten [[Attacker]] 7.9. The
	   profitable loss
	2. V13: the [[Attacker]] spends one more [[Ship]] 2C and wins
	   8:7. Its [[Advantage]] 1 is far below the 8 [[Level]]s it beat,
	   so it pays: both its [[Card]]s are [[Damaged]], 8.9 HC against
	   10.6. A pyrrhic victory, the [[Star]] taken by wrecks

## Recommendation

1. Take V13 with the V17 exception as the [[Combat]] resolution, four
   sentences in place of [[Combat#9.1]]-9.2:
	1. The loser's [[Direct participant]]s become [[Damaged]]
	2. The winner Damages own [[Direct participant]]s of total
	   [[Level]] at least the loser's direct [[Level]]s − the
	   [[Advantage]], chosen by the winner
	3. If the [[Advantage]] is at least the loser's direct
	   [[Level]]s, the loser's [[Direct participant]]s are
	   [[Destroy]]ed instead: a rout
	4. A routed [[Hero]] stays [[Damaged]]: captured if the winner
	   holds the [[Star]]
2. Close the [[Retreat]] gap: the rival wins with [[Advantage]] 0
3. Keep escape as the [[Retreat]] technology, not a basic rule
4. Keep V16 in reserve if [[Attack]]s stay rare in the next playtest

## Open points

1. **[[ForceDiscard]]**: it no longer weakens a defense. Keep it as
   economic warfare, or let the player who plays it pick the
   [[Card]]?
2. **Fallen by defense**: should the [[Defender]] be able to spend its
   last [[Card]]? Today it loses the [[Duel]] by doing so. The
   simulation never lets it; allowing it changes little
3. **Repair yard**: the starter is 1 HC of a 2.4 HC repair. One
   [[Recover]] for every [[Damaged]] [[Card]] of a [[Star]] would make
   wrecks cheap to fix where the yard is
4. **Militarization Defense** (I75 f, Q20): the simulation used the
   literal [[Defense#4]], [[Level]] + [[Plus]], [[Colony]] 4M
   defends with 7
5. **The simulator** lives only in the session scratchpad
