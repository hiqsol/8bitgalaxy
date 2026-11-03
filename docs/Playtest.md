---
date: 2026-10-30
status: WIP
scope: meta
---

# Playtest

How an AI-vs-AI [[Duel]] is played, logged and reported. A round of
games is a step of [[ReviewProcess]]: it plays a frozen version and
counts the rulings it needs.

1. **Version**: the games play a frozen version, e.g. git tag
   `duel-v1`:
	1. The referees and players read the `core` and `duel` pages
	   themselves, no digest of them
	2. Open [[Backlog]] items play as written: a proposal or a
	   simplification applies only once accepted
	3. A gap that blocks the setup is answered in [[Guidance]] before
	   play, the games make no rulings in advance
2. **Agents** of a game, the games of a round run in parallel:
	1. A **referee** (Opus) keeps the authoritative state in files,
	   shuffles with a seeded RNG, validates every play and logs it
	2. Two **players** talk only to their referee, so Hands, Reserves
	   and [[Hidden]] cards stay secret
	3. A player proposes a play in [[Notation]], the referee carries
	   it out or returns the reason it is invalid
3. **Personas**: a model as IQ, Opus high, Sonnet medium, Haiku low;
   Aggression, Risk and Bluff from 0 to 10; a preferred path, e.g.
   Military, a Culture engine, [[Singularity]]:
	1. A round keeps a Warlord, to test a [[Disputed]] home and
	   [[Intercept]]
	2. And two aggressive personas, to see whether rivals fight
4. **Log**: the referee writes the game record in [[Notation]] from
   the first [[Turn]], the header included
5. **Rulings**: where the pages are silent or read two ways, the
   referee decides, plays on and records a ruling `RG<game>-<n>`:
	1. A comment `# RG<game>-<n>: ...` at the play it decides
	2. A list of the game's rulings: the gap, the ruling, the pages it
	   touches
6. **Cap**: about 40 Turns, a capped game ends as at [[Twilight]]
7. **Records**: one file per game in `games/`, games are numbered on
   across rounds, e.g. `game4.md` holds RG4-1
8. **Report**: one per round in the repo root, like
   `FirstDuelPlaytest.md`:
	1. Results: players, result, how it ended, Turns, rival Combats
	2. The games in brief and how the personas played
	3. Findings: what worked, what didn't
	4. Every ruling and where the rules settle it now
	5. The answers to the Watch in playtest questions of [[Backlog]]
	   and [[Diagnostic]]
9. The rulings become issues in [[Backlog]], see [[ReviewProcess]]

## Notes

1. The measure is new rulings per game: round 1 needed about 40
2. A model plays more carefully than its persona: the Haiku Brute of
   round 1 made no invalid play and declined a risky Attack
