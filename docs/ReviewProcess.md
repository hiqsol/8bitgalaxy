---
date: 2026-10-25
status: WIP
scope: meta
---

# Review process

How the rule review converges on a clear duel: when an item opens,
when it closes and when review stops. [[Backlog]] holds the items,
[[Guidance]] the answers, [[Diagnostic]] tests them.

1. **Clear**: a frozen version is clear when both hold:
	1. Every cold reader picks the designer's option on every
	   [[Diagnostic]] question
	2. A full playtest game needs no ruling the notes leave open
2. **Freeze** a version before clarifying it, e.g. git tag `duel-v1`:
	1. Clarification changes only the wording of that version
	2. Design changes wait in a queue and land in one batch between
	   playtests
	3. A batch makes a new version, its clarity is measured again
3. **Round** of clarification, repeated until a game needs no new
   ruling:
	1. Play the frozen version, on paper or AI-vs-AI, from the `core`
	   and `duel` notes
	2. Record every ruling the referee makes where the notes are
	   silent or read two ways
	3. Each ruling becomes an issue `I<n>`, answered in [[Guidance]]
	   and applied
	4. Run [[Diagnostic]] with 2-3 cold readers
4. **Strict review** opens defects only:
	1. A contradiction between pages
	2. A term used and not defined
	3. A game situation a reader can't decide from the notes
5. A proposal `P<n>` or a simplification `S<n>` opens only when the
   designer asks for one, and goes to the design queue
6. **Settled** in [[Backlog]] keeps one line for every rejected
   proposal: what was considered, reopen only with evidence from a
   played game
7. **Joins**: an answered question that combines two pages becomes an
   example note on the more specific page, e.g. an Upgrade of a
   Depleted Structure on [[Upgrade]]
8. **Measures** per round:
	1. Rulings per playtest game, falling round by round
	2. Diagnostic agreement: the share of questions where every
	   reader picks the designer's option
	3. Not a measure: the number of review findings, it follows how
	   hard the review looks

## Notes

1. Clarifying a fixed text ends, each answered question closes one
   gap; redesign and simplification don't end on their own, so they
   run outside the round
2. Gaps sit between pages: one fact per page avoids contradictions,
   but no page states the outcome where two pages meet; the `core`
   and `duel` pages link in about 900 pairs, play finds the ones that
   happen
3. Resolved and rejected proposals are deleted and every review starts
   without memory, so without Settled the same proposals come back
4. Estimate: with the version frozen, 3-5 rounds until a game needs
   almost no rulings; the first round, 3 AI duels, needed about 40
