# ADR 0002: Appearance: the legacy look pixel perfect, then proposals

- Status: proposed
- Date: 2026-10-21

## Context

- Three looks to compare on the site:
	- `/legacy/`: the legacy prototype, the reference look
	- `/pp/`: the new game in the legacy look, pixel perfect (PP)
	- `/`: the new game in the legacy look with changes made in one
	  go, so they can't be judged one by one
- The legacy look is liked, every change of it needs its own reason

## Decision

1. PP is a build of the client with `VITE_LOOK=pp`, served at `/pp/`
2. PP draws the legacy DOM with the legacy CSS: it imports
   `legacy/src/legacy/styles` as is and places elements where the
   legacy drawers do, ported to `packages/client/src/pp/legacy.ts`,
   so the same state gives the same pixels
3. PP shares the engine, session, click interaction (`ui.ts`) and
   panels with the new look, the look changes no rule or move
4. PP leaves out what the rules don't have: the Progress piles
   (Attack, Colo, Prod, Science), the third Home, the Star counters
   `◀0▶` and the fifth RnD pile
5. PP adds only what the legacy version has no counterpart for,
   invisible at rest or in the legacy style:
	1. A hidden Star: its tile face down in the middle of the Star
	2. Star click areas, tinted when picked
	3. Action roles: the legacy Selected for the starter, a glow in
	   a color per role for the other cards and picked piles
	4. Scoreboard labels after Export, Import and Undo: End turn,
	   Table, Log, Concede, Leave, then the Turn
	5. The panels of the new look as overlays at the top right:
	   Action, Combat, Take off, Table, Hand card menu, Log
6. Proposals below are accepted or rejected one by one, an accepted
   one is applied to PP

## Proposals

AP1 to AP14 are in the new look already, AP15 to AP21 are new.

- AP1 **Player border color**
	- a) Cards get a ring in the player color, besides the race tint
	- b) The tints `#ffb` and `#cec` are close, the ring tells the
	  players apart at a glance
- AP2 **Your Home at the bottom**
	- a) The Field turns over for the player whose Home Star is in
	  the top row, their Home is drawn at the bottom right
	- b) Each player plays from the same side, online and in hot seat
	- c) In hot seat the board turns at each handover
- AP3 **The board fits the window**
	- a) Zoom fitted to the window instead of 0.3, no page scroll,
	  no 4100x3300 canvas
	- b) The legacy page scrolls on small screens and leaves space
	  unused on big ones
- AP4 **Upright cards**
	- a) Pile cards are not turned across the pile
	- b) Legacy turns Units in Lab and Factory piles and Structures in
	  Discard and Reserve, their words read sideways
- AP5 **Fanned piles**
	- a) Lab and Factory piles fan down by 70 px, the top 4 cards, so
	  each card shows its Level and words
	- b) Legacy folds a pile into a 45 px stack, it fans by 50 px on
	  hover
- AP6 **Hand in a row**
	- a) Hand cards side by side, squeezed when the row is short
	- b) Legacy stacks the Hand Slots by 50 px, only the last card is
	  whole
- AP7 **Field Slots by 100 px**
	- a) Cards in a Star step by 100 px instead of 50, the top line of
	  each card shows its Level and words
- AP8 **Star control ring**
	- a) A ring in the controller's color inside the Star, dashed when
	  disputed
- AP9 **Star labels**
	- a) The Star ability above its Slots: `home +1 energy`,
	  `shipyard`
	- b) A hidden Star shows `◀size·cost▶` instead
- AP10 **Pile labels**
	- a) A label `Ship 4` above each pile: its type and size, an
	  empty pile shows its type
	- b) Legacy names piles `RnD 1` and `Factory 1`, shows the size
	  only above 6
- AP11 **Side column**
	- a) A fixed column at the right for the panels, the log and the
	  hovered card large with its text
	- b) PP has overlays and the legacy Show box with notes at the
	  bottom left
- AP12 **Words fit the card**
	- a) A word shrinks to fit the card, a tech the rules don't have
	  yet is faded, an Overlapped secondary is crossed out
	- b) Legacy words are 30 px, a long one runs out of the card,
	  e.g. `mobilz +3def`
- AP13 **Inline type images**
	- a) The four type images as inline SVG paths of LineIcons 2.0
	  instead of the icon font from `cdn.lineicons.com`
	- b) No third party request, no blank cards until the font loads
- AP14 **Names and turn on the board**
	- a) Player name in the player color by the Energy counter, a
	  `turn` badge for the player to act
- AP15 **Crisp pixel font**
	- a) Zoom and font sizes chosen so that text lands on whole
	  pixels of the 8 px grid of Press Start 2P
	- b) At zoom 0.3 a 30 px label is 9 px and blurs
- AP16 **Last move highlight**
	- a) Cards and tiles changed by the rival's last move glow until
	  your first click
	- b) You see what happened without reading the log
- AP17 **Legal picks highlight**
	- a) While an action is drafted, the Stars, tiles, Slots and piles
	  that can be picked glow, the rest dims
- AP18 **Galaxy Home**
	- a) The Galaxy piles where the legacy third Home was: Future
	  Events, Current Events, Galaxy deck and scrap, as in
	  `public/images/game.png`
	- b) When the engine has the Galaxy deck
- AP19 **Card zoom in place**
	- a) Hover enlarges a card in place after a short delay, instead
	  of a box in a corner
	- b) The eye stays on the board
- AP20 **Card move animation**
	- a) A card slides from its old place to the new one in 200 ms
	- b) Moves of the rival and the result of an action are easy to
	  follow
- AP21 **Energy tokens**
	- a) Energy as token images in the Hand area instead of `◀N▶`, the
	  rules call them tokens

## Alternatives

1. **Tune the new look by eye**: rejected, it has no reference to
   measure against and its changes come all at once
2. **Run legacy with the engine**: rejected, its model and view are
   coupled, see ADR 0001

## Consequences

1. The site builds the client twice, at `/` and at `/pp/`
2. PP depends on `legacy/` styles: when legacy goes, its CSS moves
   to PP
3. The decision is a list of accepted proposals, applied to PP one
   at a time, a screenshot of each to compare
4. A look is a view only, both looks play the same game, hot seat
   and online
