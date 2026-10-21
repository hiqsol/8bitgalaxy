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
make site        # the site in dist/: game, pp/, legacy/, docs.html
```

- **Hot seat**: two players at one screen, the screen is covered
  between turns; "open hands" plays without secrets
- **Online**: "Create game" gives an invite link for the rival, the
  server holds the game, every player sees only their view
- `?seed=N` in the URL starts a reproducible hot-seat game
- `VITE_LOOK=pp` builds the pixel perfect legacy look, served at
  `/pp/`, see [ADR 0002](adr/0002-appearance.md)
- `VITE_SERVER_URL` points the client to another server, a path
  like `/colyseus` is on the page host, as on the site

## Play

The board follows the look of the legacy prototype: your Home along
the bottom with your Laboratory and Factory on the right, the rival's
along the top and on the left; card colors and borders tell the
players apart, the Field turns so that your Home Star is at the
bottom.

The pixel perfect look at `/pp/` is the legacy board as it was: the
first player's Home at the bottom right, hover a card to see it in
the Show box, hover a pile to fan it out, the panels show up at the
top right when needed.

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
- `legacy/` is the previous prototype, kept for reference, with
  its own deps: `cd legacy && npm ci && npx vite`, served at
  `/legacy/`, its pages are listed there

## License

This project is released under the terms of the **CC BY-NC-ND**
[license](LICENSE). Read more
[about the
license](https://creativecommons.org/licenses/by-nc-nd/4.0/).

Copyright ©2021-2024, Andrii Vasyliev (<sol@hiqdev.com>)

[![CC
BY-NC-ND](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
