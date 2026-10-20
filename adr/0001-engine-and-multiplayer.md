# ADR 0001: Pure rules engine, Vue client, Colyseus server

- Status: accepted
- Date: 2026-10-20

## Context

- `src/legacy` is a virtual tabletop: cards are dragged between piles
  with undo, but no rule is enforced
- Model and view are mixed: effects mutate the DOM, model classes
  accept `HTMLElement`, randomness uses `Math.random`
- The code is out of sync with `docs`, the source of truth: old card
  notation, class letters, Home piles
- Goals: a hot-seat duel MVP, then remote play, then a game portal
  with accounts and ratings
- Rules still change, see `docs/Decisions.md`

## Decision

1. Rewrite from scratch, keep from legacy only the 8-bit styles,
   images and the field layout
2. `packages/engine`: pure TypeScript domain, no DOM and no framework:
	1. `apply(state, move)` returns a new state or a rule error
	2. Seeded RNG in the state, so a game replays from its move log
	3. `viewFor(state, player)` hides rival hands, deck order and
	   Hidden cards
	4. Undo and the log are part of the engine
	5. Cards are loaded from `docs/Cards/Deck.md`
3. `packages/client`: Vue 3 + Vite, renders a view, sends moves;
   hot-seat calls the engine directly, no server
4. `packages/server`: Colyseus (0.18 now), one Room per match:
	1. On a move message the Room applies it to the engine
	2. Each client gets its own `viewFor` as a plain message,
	   `@colyseus/schema` and `StateView` are not used
5. Portal features (accounts, ratings, friends) come later, with
   Supabase or Colyseus auth plus Postgres

## Alternatives

1. **boardgame.io**: turns, stages, `playerView`, seeded random, local
   and remote play, bots. Rejected:
	1. In maintenance mode, not actively developed
	2. Its turn model doesn't fit Combat rounds with defenders and
	   supporters acting at a rival's turn
	3. What it gives beyond networking the engine owns anyway
2. **Colyseus schema state**: delta sync and per-client filtering.
   Rejected: it duplicates the domain as mutable decorated classes,
   the game state is small enough to send whole views
3. **Refactor legacy**: rejected, fixing the model/view coupling and
   the rules drift costs more than a rewrite

## Consequences

1. Hot-seat MVP needs no backend; remote play wraps the same engine
   without touching rules
2. Engine is testable in isolation, one test per numbered rule where
   possible
3. We write RNG, views, log and undo ourselves, a few hundred lines
4. No bots out of the box, an AI player is a separate engine client
5. Remote play needs a running Node server, deployed in Docker next to
   nginx
