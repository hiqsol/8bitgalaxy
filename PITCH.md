---
status: draft
scope: meta
---

# 8-Bit Galaxy — Game Pitch

## One-liner

A browser-based 4X strategy card game where you build your deck,
colonize star systems, and survive a living universe — all in glorious
8-bit.

## The Hook

You are a young civilization that just discovered Warp drive. The
galaxy is yours to explore — but the universe has its own plans.

Every [[Turn]], the cosmos deals you a hand: resources, ancient
artifacts, mysterious technologies… or mortal danger. An ancient race
awakened by your
Warp signature, a supernova threatening your colony, a derelict ship
full of treasure or traps. *The universe is alive* — it helps you, it
tests you, it tries to kill you. Your job is to stay in control.

## Core Loop

1. **Play your hand** — every card either deploys a hero or ship to
   your stars, or starts an [[Action]]: explore, trade, research,
   attack, build…
2. **Galaxy moves** — the [[GalaxyDeck|Galaxy deck]] plays: events,
   ancients, derelicts
3. **Draw a new hand** — and keep it ready to defend on rivals'
   [[Turn]]s
4. **Repeat** — your deck evolves, your empire grows, threats escalate

## What Makes It Special

- *Controlled randomness, not zero randomness.*
  [[DeckBuilding|Deck building]] gives you random cards. The universe
  deals random events. But everything can be managed through smart
  play — you always have levers to pull. The skill is in *taming the
  chaos*, not eliminating it.

- *No dice combat.* Battles are pure decision-making: choose your
  attackers, bluff with [[Hidden]] cards, allocate resources. The
  better strategist wins, not the luckier roller.

- *One rules set, many galaxies.* The [[Scenario]] picks the
  [[GalaxyDeck|Galaxy deck]]: a dangerous one for co-op and solo, a
  resourceful one for quick duels, or a [[Campaign]] series of decks.
  The galaxy is a worthy opponent on its own.

- *[[Deck]] as identity.* Each player's deck evolves differently —
  your card circulation (discard → shuffle → reserve → hand → field →
  deplete) creates a unique strategic fingerprint every game.

- *Four paths to greatness.* [[Military]], [[Culture]],
  [[Production]], [[Science]] — each unlocks different
  [[Technology|Technologies]] and playstyles. Mix them or specialize.

## The Universe Is Not Your Enemy (Or Your Friend)

This is the key insight: the universe is *neutral but active*. Each
[[Turn]]'s
[[GalaxyMove|Galaxy move]] isn't just "enemies attack" — it's the
cosmos generating content.
Sometimes it's a threat (ancient warships), sometimes an opportunity
(ancient tech you can research), sometimes a puzzle (objectives that
reward the bold). You don't fight *against* the universe — you
*navigate* it.

## Victory

Become the greatest civilization by one of four paths:
- [[Military]]: defeat every rival [[Leader]]
- [[Culture]]: live throughout the universe in a
  [[GalacticDiaspora|Galactic Diaspora]]
- [[Production]]: possess at least 7 [[Hyperstructure]]s
- [[Singularity]] ([[Science]]): top-level cards of every class

[[Military]] wins immediately. Each other achievement starts
[[Twilight]]; the [[Faction]] with the most current achievements wins,
with victory points breaking a tie.

A [[Faction]] falls when it loses all [[Leader]]s or can't make a
move.

## Tech Stack

Vue 3 + TypeScript + Vite + Sass. Runs in any browser.

## Status

Active development. [[Rules]] system maturing. Playable
prototype exists.
CC BY-NC-ND licensed.
