---
status: WIP
scope: meta
---

# Codex review

1. The rules are not yet playable from the notes alone, especially by an AI.
2. [[RulesReview]] identifies many content gaps but underestimates the main problem: the core rules lack a deterministic state-and-timing model.

## Documentation issues

1. [[PerformAction]] does not define a complete sequence:
	1. Support can apparently come from anywhere.
	2. Legality is checked late.
	3. Failed actions spend unspecified resources.
	4. Define phases: declare, validate, commit participants and abilities, response, resolve, cleanup.
	5. Give every action the same template.
2. [[ControlledBy]] conflates ownership, card control and star control:
	1. Ties are unclear.
	2. Structure control is unfinished.
	3. Define immutable ownership separately.
	4. Give star control an exclusive algorithm; ties should normally mean [[Disputed]] and uncontrolled.
	5. Define whether occupation transfers use of enemy structures.
3. [[Combat]] is not deterministic:
	1. The attacker selects defending participants.
	2. There is no precise priority or pass sequence.
	3. Cards may be revealed "at any time."
	4. Alternate commitments in a defined order and resolve after consecutive passes.
	5. The defender should select defenders.
	6. Specify legal targets, hidden commitments, damage, destruction, retreat and cleanup.
4. [[Distance]] counts both endpoint stars, apparently making adjacent stars distance 3:
	1. Treat the board as a graph.
	2. Route cost is the sum of traversed edges or [[Space]] segments.
	3. State how group [[Range]], [[Support]], [[Void]] and [[OuterSpace]] modify it.
5. Setup is not executable:
	1. [[StartDraw]] specifies only 6 of 10 starter cards.
	2. Its [[Laboratory]] contents are incomplete.
	3. It does not define a complete board setup.
	4. Create one `MinimalDuel` scenario containing setup, first-player rule, deck lists, ordered zones, map and initial states.
6. Card data and technologies have no canonical schema:
	1. [[Technology]] contains several contradictory catalogs.
	2. Keep one canonical technology and deck table.
	3. Leaf pages should explain behavior without repeating class and level assignments.
7. Core taxonomy classifies [[Event]]s and [[Objective]]s as [[Structure]]s:
	1. Add a non-field card role instead of treating every non-hand card as a structure.
8. Remote [[Support]] has no distance restriction:
	1. Declare that global support is intentional or constrain it.
9. [[Slot]] overlap does not unambiguously identify which card is overlapped.
10. [[Destroyed]] cards return to [[Factory]], but their destination pile and position are undefined.
11. "Cannot make a move" must include both [[Takeoff]] and actions and be tested after mandatory [[Draw]].
12. AI play requires exact turn order, starting-player selection, information rules and response timing.

## Recommended minimal-duel decisions

1. Use a dedicated five-star linear map:
	1. Two home stars.
	2. Three neutral stars.
	3. Four revealed Normal connections of length 1.
	4. Do not use an Alien-centered map.
2. Add four technology-free starter actors to the existing six starter actors.
3. Exclude Materials, [[Money]], hidden Space, Aliens, Objectives, [[Politics]] and technologies absent from the duel deck.
4. Remove [[PlusDraw]] from the first core set unless actual cards and complete timing rules are added.
5. Make ownership immutable and disputed stars uncontrolled:
	1. Decide structure use separately from ownership.
6. Define each ability slot as structured data capable of retaining both its power amount and technology.

## Recommended review structure

1. Reviews contain only unresolved issues and proposals.
2. When an issue is resolved:
	1. Incorporate its result into the applicable rule pages.
	2. Delete the issue and proposal from the review.
3. Give every entry:
	1. One stable identifier.
	2. An affected scope.
	3. Evidence links.
	4. Impact.
	5. Exactly one proposed resolution.
4. Add a documentation checker for:
	1. Required frontmatter.
	2. Allowed statuses and scopes.
	3. Unresolved wiki links.
	4. Top-level numbered rules.
	5. Duplicate canonical card and technology assignments.

## Notes

1. The audit found 150 pages under `docs/`:
	1. 136 are `draft`.
	2. 14 are `stub`.
	3. None are `stable`.
