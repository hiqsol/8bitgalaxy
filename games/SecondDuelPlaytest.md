---
status: draft
scope: playtest
---

# 8-bit Galaxy: second duel playtest report

Round 2 of the AI-vs-AI [[Duel]]s, played 2026-11-13/14 on the frozen
version `duel-v2`, following [[Playtest]]. The records are
[game4](game4.md), [game5](game5.md) and [game6](game6.md).

## 1. Results

| # | A, home S00, moves first | B, home S21 | Result | [[End]] | [[Turn]]s | Rival [[Combat]]s |
|---|---|---|---|---|---|---|
| [4](game4.md) | Warlord (Opus) | Industrialist (Opus) | **1-0** by [[Military]] | B [[Fallen]], [[PaxGalactica\|Pax Galactica]] | 39 | 1 |
| [5](game5.md) | Scholar (Opus) | Gambler (Sonnet) | **27:20** [[VictoryPoints\|Victory points]] | cap | 40 | 0 |
| [6](game6.md) | Turtle (Sonnet) | Brute (Haiku) | **10:12** [[VictoryPoints\|Victory points]] | cap | 40 | 0 |

**One rival Combat in 119 Turns**, the decisive one of game 4, and
**no Combat against [[Ancient]]s at all**: no [[Star]] was conquered,
no [[World]] drawn. Two games reached the cap of 40 [[Turn]]s and
ended as at [[Twilight]] without an achievement, on
[[VictoryPoints|Victory points]].

| Persona | [[Action]]s per [[Turn]] | Invalid plays |
|---|---|---|
| Warlord (Opus) | 1.75 | 4 |
| Industrialist (Opus) | 2.16 | 0 |
| Scholar (Opus) | 1.9 | 2 |
| Gambler (Sonnet) | 0.95 | 9 |
| Turtle (Sonnet) | 0.65 | 5 |
| Brute (Haiku) | 0.70 | 2 |

[[Action]]s per [[Turn]] count no [[Takeoff]]s. The referees made 33
rulings, 22 distinct gaps once the repeats are merged (section 4).

### Games in brief

**Game 4, Warlord 1-0 Industrialist (Turn 40, B Fallen).**
- A's first [[Attack]] on S21 (T13) was invalid: every [[Space]]
  between the homes was [[Hidden]], the [[Void]]s wall off S11. Four
  [[Explore]]s, one failed, opened S00-S01-S12-S21 by T19,
  [[Distance]] 6.
- B built DysonCollector, [[Jamming]] and [[Triumvirate]] (T14, T22,
  T28): 4 of the 7 [[Hyperstructure]]s of
  [[KardashevAscension|Kardashev Ascension]], with the
  [[Homeworld]], then its 5 home [[Structure]] [[Slot]]s ran out.
- From T20 both banked [[Energy]]: as [[Goods]] by [[Takeoff]] past
  the 5-[[Token]] limit, and A took the [[Homeworld]]'s +1e twice a
  [[Turn]] by a [[Manage]] [[Rotate]] between two [[Receive]]s.
- T30-T32: a B [[Ship]] in S12 pinned the lane; A moved four [[Unit]]s
  in, B didn't [[Intercept]].
- T39: A attacked S21 with 28m, selected every B [[Card]] there and,
  through B's [[Academy]], B's whole [[Hand]] (RG4-14); won 28:25. The
  four [[Hand]] [[Card]]s found no free [[Slot]] and were Destroyed: B
  started T40 with no [[Hand]], [[Reserve]] or [[Discard]],
  [[Fallen]].

**Game 5, Scholar 27:20 Gambler (cap).**
- No route between the homes for 40 [[Turn]]s: two [[Space]]s
  revealed, both by B; A never explored.
- A ran a pure [[Science]] engine from T11: [[Archive]] with the
  [[Homeworld]]'s +1e, C4s, [[Megacademy]]; 2-3 [[Action]]s a
  [[Turn]].
- A climbed a [[Hero]] 2 to 8 in ten [[Turn]]s (T13-T23) and
  [[Upgrade|Enhanced]] Starting [[Ship]]s into S4m, S6m, S8m
  (T15-T31): three [[Level]] 8 [[Crown]]s of [[Singularity]] by T39,
  the fourth, HS8c, never in sight.
- B made one [[Action]] a [[Turn]], no bluff, no attack; its one reach
  out lost S20 the [[Turn]] its [[Explore]] opened a route (T34).
- Told of the cap on T35, A turned to points: HS8p by two [[Create]]s
  and H8s back on the [[Field]] on T39, +16.

**Game 6, Turtle 10:12 Brute (cap).**
- The same wall: no [[Unit]] ever left its home [[Star]].
- A never explored. B laid [[Space]]s toward S12 and S20 by T10, never
  moved out, then explored dead-end tiles around its home (T20-T36).
- Both homes were full by T15-T16: no more [[Takeoff]], and as a
  player can't pass, 4 empty [[Receive]]s (RG6-7) and 4 for +1e only.
- B won by one more home [[Colony]].

### Personas

- **Warlord**: a patient siege engineer, not a brute: it opened the
  lane, refused three even fights (T27, T29, T33) and struck once with
  a counted margin. **Industrialist**: to the letter, [[Hub]]s,
  [[Upgrade]]s, three [[Hyperstructure]]s, defense by stocked
  [[Boost]], no invalid play.
- **Scholar**: close to its path, efficient and legal, with one sharp
  read: [[UnifiedTheory|Unified Theory]] for a shortcut (T33).
  **Gambler**: far below its persona, no long shot, no bluff, no
  attack; with no route Aggression 6 had nothing to act on.
- **Turtle**: too faithful: never left home, though
  [[GalacticDiaspora|Galactic Diaspora]], its goal, needs [[Star]]s.
  **Brute**: never attacked, nothing was in reach; on T20 it believed
  it had no legal play.

## 2. How it was played

- The procedure of [[Playtest]]: a referee subagent (Opus) per game,
  each player its own headless Claude session that only the referee
  talks to, so [[Hand]]s stayed secret. Players read the `core` and
  `duel` pages of `duel-v2` themselves, a session can't read the
  referee's files.
- A usage limit stopped all three games mid-way (T15, T17, T38); fresh
  referees resumed them from the state files and the players'
  sessions, a resumable state per play proved essential.
- The cap of 40 [[Turn]]s was not told to the players at the start:
  game 5 learned it on T35, game 4 on T37-T38. [[Playtest]] now says
  so.
- Referee slips: game 4 let a T9 [[Receive]] stand that RG4-6 makes
  invalid, refused the same play on T21; game 6 confirmed a
  [[Takeoff]] into a full [[Slot]] on T38 from a hand-written view,
  then withdrew it.

## 3. Findings

### 3.1 What didn't work

- **F:6. The homes never meet.** The 8 [[Void]]s around S11
  ([[Duel#6.1]]), all [[Space]]s [[Hidden]] and "a route can't pass a
  [[Hidden]] [[Space]]" leave no route between the homes. Only one
  game opened a lane, at T19 after four [[Explore]]s, and the first
  rival [[Combat]] came at T39. A [[Unit]] that explores [[Deplete]]s
  to [[Discard]], so the explorer leaves the [[Star]] it opened from
  (game 5 T34, round 1 4.1 again). No [[Ancient]] fought, the
  [[WorldDeck]] and the [[Ancient deck]] never drawn: I:114.
- **F:7. Actions per Turn 0.65-2.16**, the 5 of [[GameBalance]] far
  off. Opus players made 2, Sonnet and Haiku 1 or none: 13 of game 6's
  40 [[Turn]]s held no [[Action]]. One [[Action]] takes most
  [[Actor]]s of a [[Hand]], [[Tool]]s start none: I:75a.
- **F:8. A full home stalls, overlap mutes it.** [[Home]] [[Slot]]s
  were full by T15-T16 in game 6, then [[Takeoff]] is gone and "can't
  pass" forces empty [[Action]]s (RG6-7). A [[Base]]'s and a
  [[Colony]]'s [[Power]] is its Secondary, so in a filled row only s1
  gives [[Power]] (games 5, 6); [[Hyperstructure]]s compete for the
  same 5 [[Slot]]s: I:115.
- **F:9. No achievement within 40 Turns.** [[Singularity]] stopped at
  3 of 4 [[Crown]]s (game 5), the last two are [[Hyperstructure]]s at
  15 [[Power]] each, and a [[Hero]] [[Crown]] must leave the [[Field]]
  to give its [[Level]] as a Prerequisite (T19, T33).
  [[KardashevAscension|Kardashev Ascension]] stopped at 4 of 7 (game
  4), [[GalacticDiaspora|Galactic Diaspora]] never got a [[Star]].
  [[VictoryPoints|Victory points]] decided two games, and nobody
  planned for them until told: I:116.
- **F:10. One Combat through the Academy ends the game** (game 4 T39,
  RG4-14): [[Academy#2]] takes any number of [[Hand]] [[Card]]s as
  [[Defender]]s, [[Damaged]] with no free [[Slot]] they are Destroyed,
  and the defending player is [[Fallen]] at once. Both players flagged
  it: I:112.
- **F:11. Free loops replace play** (game 4): [[Recycle]] costs no
  [[Power]] (RG4-5), B recycled 9 [[Card]]s and drew the same 5-card
  [[Hand]] from T22; a [[Manage]] [[Rotate]] restores the
  [[Homeworld]] for a second +1e a [[Turn]]; [[Goods]] stock
  [[Energy]] past the [[Hand]] limit; a useless [[Unit]] participant
  in a [[Receive]] goes to [[Discard]], though [[Discard#3]] forbids
  discarding at will: I:117.
- **F:12. Takeoff thinning cuts both ways** (I:46): the Opus players
  parked [[Tool]]s and set their next [[Hand]]s with it (game 4 T37,
  game 5), the weaker ones took off their [[Actor]]s and kept drawing
  [[Tool]]s (game 6 B, 20 [[Takeoff]]s).
- [[Plus]] [[Range]] counts only in a [[Move]] ([[Plus#3.5]]): the +3r
  of C4s gave nothing to a remote [[Explore]] (game 5 T34).
- The [[Laboratory]] subgame is cheap: by RG5-9 A reordered 9
  [[Card]]s in two [[Research]]es (game 5 T21, T23).

### 3.2 What worked

- **Learnability holds**: 22 invalid plays in 119 [[Turn]]s, 13 of
  them by the Sonnet Gambler, almost all over a [[Supporter]]'s one
  [[Ability]], [[Range]] or a [[Power]] sum; the Haiku Brute made 2.
- **Combat** resolved cleanly (game 4 T39): rounds, [[Boost]] capped
  by [[Combat power]], the winner's own losses (22 of 28) as written,
  both sides computed it in advance.
- **Pinning and Intercept** shaped play: one [[Ship]] on S12 changed
  A's plan (game 4 T30-T32).
- **Explore's draw of two** with a hidden [[Cost]] gave real choices,
  players stopped when it was too dear (game 4 T15, T36, game 6 T24).
- **Build engines**: [[Archive]] with the [[Homeworld]]'s +1e, a
  [[Megacademy]] taking a [[Hero]] up two [[Level]]s a [[Turn]],
  Enhanced Starting [[Ship]]s into [[Crown]]s, two [[Create]]s of a
  [[Hyperstructure]] in one [[Turn]] (games 4, 5).
- **Victory points** were easy to count and close (12:10).

## 4. Rulings

The referees' rulings `RG<game>-<n>`, merged by gap. Each is an issue
in the [[Backlog]], to be answered in [[Guidance]].

| Gap | Rulings | Ruling taken | Issue |
|---|---|---|---|
| Overlap direction | RG4-2, RG5-4, RG6-2 | [[Slot]] k is overlapped while [[Slot]] k-1 holds a [[Card]], s1 never | I:97 |
| [[Asteroids]] ExtraPrice by [[Length]] | RG4-3, RG5-2, RG6-1 | three different splits of "1 on 7, 2 on 6" | I:98 |
| Setup: piles, starting [[Slot]]s, [[Energy]] | RG4-1, RG5-3, RG5-5, RG6-3, RG6-4 | each player orders its open piles and picks the [[Slot]]s; [[Energy]] 0 | I:99 |
| Starting [[Ship]]s' [[Weak]] [[End]]s | RG5-1 | [[Deck#8]] over the list | I:100 |
| [[Explore]] [[Range]] to a bordering [[Hidden]] [[Space]] | RG4-7, RG6-6 | read two ways: no [[Range]]; the laid [[Tile]]'s [[Length]] | I:101 |
| [[Class]] of the [[Starter]] | RG4-6, RG5-10 | any [[Actor]] starts any [[Action]], only [[Manage]] and [[Receive]] take its [[Class]] | I:102 |
| [[Research]] details | RG4-4, RG4-11, RG5-9, RG5-11 | any [[Factory]] pile; the [[Hub]] is the [[Destination]]; several [[Laboratory]] moves at 1 each, not with a [[Factory]] move | I:103 |
| [[Recycle]] | RG4-5, RG4-10 | no [[Power]] [[Cost]]; only a [[Field]] [[Card]] | I:104 |
| [[Takeoff]]s per [[Turn]] | RG5-6 | any number, one [[Card]] each | I:105 |
| [[Energy]] over the [[Hand]] limit in an [[Action]] | RG4-9, RG6-5 | the limit counts what stays in [[Hand]] after it | I:106 |
| [[Upgrade]] from a [[Production]] [[End]] | RG5-7 | only [[Enhance]]s, a [[Culture]] [[End]] only [[Grow]]s | I:107 |
| A [[Supporter]]'s [[Level]] for [[Prerequisites]] | RG5-8 | one pair as its one [[Ability]] | I:108 |
| A full home and "can't pass" | RG6-7 | a [[Receive]] with only its [[Starter]] is legal | I:109 |
| [[Social]] [[Create]] of a [[Hyperstructure]] | RG4-8 | [[Hyperstructure#4.1]] overrides [[Create#3]] | I:110 |
| [[Combat]]: [[Boost]] of selected [[Defender]]s, remote survivors | RG4-12, RG4-13 | [[Boost]] at the selection; remote [[Unit]]s [[Deplete]] | I:111 |
| [[Academy]] [[Defender]]s, how many | RG4-14 | any number, the whole [[Hand]] | I:112 |
| [[Attack]] on a [[Wild]] [[Star]] a rival controls | RG4-15 | conquest still: [[Ancient]]s defend beside the rival | I:113 |

Round 1 ruled the overlap the other way, PR-9: [[Slot]] k overlapped
by [[Slot]] k+1.

## 5. Watch in playtest

[[Backlog]]:

- I:46 [[Deck]] thinning by [[Takeoff]]: used in every game, F:12.
- I:79b [[Legacy]]: not in `duel`, not seen.
- I:75a [[Action]]s per [[Turn]]: 0.65-2.16, F:7.
- I:75f [[Militarization]] [[Defense]]: not seen, no [[Combat]] with a
  [[Militarization]] [[Card]]; no B2m reached the [[Field]] in games 4
  and 5.
- I:19 Crossroads deck, games 4 and 5 played the 6/5 and 8/7
  [[Card]]s (H6s, H8s, S6m, S8m, HS6m, HS6p, HS6c, HS8p):
	- f) No snowball: DysonCollector's +2e funded two more wonders,
	  but they came 6-8 [[Turn]]s apart and the 5-[[Token]] cap wasted
	  its income; HS8p's +2e overlapped at s4 never paid.
	- h) [[Envoy]]: not played.
	- i) [[Tool]]s: [[Hand]]s repeat, by T22 after [[Recycle]] (game 4
	  B), by T17 after [[Takeoff]] (game 6), every 2-3 [[Turn]]s in a
	  14-card deck (game 5 A).
	- j) [[Siege]]: S6m on the [[Field]] T27-T29 of game 5, never in a
	  [[Combat]].
	- k) Pax: "no leader" never came by Damage; the fall came by "can
	  not make a move" (F:10). B took a third cheap [[Hero]] with
	  [[Triumvirate]] (game 4 T30).
- P:66 [[Weak]] [[Structure]] ends: [[Restore]] never ran short in
  games 4 and 6, it was short for game 5's A on four [[Turn]]s; a
  [[Depleted]] [[Hub]] still works, so a [[Weak]] [[End]] matters only
  for [[Power]].

[[Diagnostic]]:

- Q:17: game 4 a; game 5 a for A, b for B; game 6 b.
- Q:19: game 4 b; game 5 b for A, a for B; game 6 a.
- Q:20: not shown, no [[Combat]] with the [[Card]]. In `duel-v2`
  the [[Colony]] 4M prints [[Raid]] +4m, the question needs its
  [[Card]] updated; [[Defense]] 3.1 and 4 read c) 7.

## 6. Questions for you

- **Q:87.** Round 3 after the issues of section 4 are answered, with
  the homes connected (I:114)?
