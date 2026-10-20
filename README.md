# 8-bit Galaxy

A 4X strategy card game, see [PITCH](PITCH.md). The rules live in
`docs/`, the source of truth; the code follows them, see
[ADR 0001](adr/0001-engine-and-multiplayer.md).

## Run

```bash
npm install
npm run dev      # client at http://localhost:5173
npm run server   # game server at ws://localhost:2567, for online play
npm test         # engine tests
```

- **Hot seat**: two players at one screen, the screen is covered
  between turns; "open hands" plays without secrets
- **Online**: "Create game" gives an invite link for the rival, the
  server holds the game, every player sees only their view
- `?seed=N` in the URL starts a reproducible hot-seat game
- `VITE_SERVER_URL` points the client to another server

## Play

The board follows the look of the legacy prototype: your Home along
the bottom with your Laboratory and Factory on the right, the rival's
along the top and on the left; card colors and borders tell the
players apart, the Field turns so that your Home Star is at the bottom.

1. Click a card in your Hand: take it off to a Star you control, or
   start an action
2. The action panel shows what is missing: pick the destination,
   click participants on the Field or in Hand, then Perform
3. Play at least one card, then End turn
4. Undo takes back moves of the current turn that revealed nothing
5. **Table** mode makes free moves for what the engine doesn't
   handle yet, every one is logged for both players

## Code

- `packages/engine`: pure TypeScript rules, no DOM:
  `apply(state, player, move)` returns a new state or the broken
  rule, `viewFor(state, player)` hides what a player may not see
- `packages/client`: Vue 3 + Vite, renders a view, sends moves
- `packages/server`: Colyseus room that runs the engine
- `packages/engine/src/data/deck.json` is generated from
  `docs/Cards/Deck.md`: run `npm run cards` after editing the deck
- `packages/engine/src/scenario.ts` holds the first duel setup,
  values the docs don't set yet are marked `ASSUMPTION`
- `legacy/` is the previous prototype, kept for reference

## License

This project is released under the terms of the **CC BY-NC-ND**
[license](LICENSE). Read more
[about the
license](https://creativecommons.org/licenses/by-nc-nd/4.0/).

Copyright ©2021-2024, Andrii Vasyliev (<sol@hiqdev.com>)

[![CC
BY-NC-ND](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
