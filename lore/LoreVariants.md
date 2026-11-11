---
status: draft
scope: lore
---

# Lore variants

Three candidate worlds for the game, each with a name, its laws and a
full story. Each one is written to be real literature that also
states the rules of its world. The rules stay the source of truth,
and the lore follows them.

1. [[LoreRequirements]]: what a lore has to explain. Twelve required
   facts, each with the facts that follow from it, plus the game's
   form and the optional traits that a lore must not build on. Each
   variant's Laws table answers the twelve by number.
2. [[Warpwake]] and its story [[Homefall]]
3. [[Assay]] and its story [[Habeas]]
4. [[Overtone]] and its story [[TheHeldChord]]

Read a story first, then its variant page.

## Comparison

| | [[Warpwake]] | [[Assay]] | [[Overtone]] |
|---|---|---|---|
| Premise | Warp bubbles seen by all, the [[Ancient]]s awakened by them | The [[Ancient]]s examine young peoples in a sealed trial | Resonance: everything made sings |
| Fiction kept | Today's [[Lore]], made exact | [[Rules]] as a literal Code, [[Card]]s as warrants | [[Level]]s as harmonics, [[End]]s as intervals |
| Tone | Hard SF, documentary | Kafka with starships, legal puzzle | Myth, lyrical |
| Story | [[Homefall]]: comeback after the homeworld falls | [[Habeas]]: a captured hero | [[TheHeldChord]]: a great battle in [[Twilight]] |
| Story form | Literary story in Ukrainian, few epigraphs | Asimov edge case | A tale told to children |
| Explains best | The tear, visibility, [[Space]] | Presence, the struck, leaders as legal facts | The tear as sound, held versus spent |
| Weakest point | The [[Ancient]]s' projections need saying | Everything by fiat, so it tests nothing | Built on a deck pattern, can drift into fantasy |

## Recommendation

My pick is **Warpwake's world with Overtone's physics inside it**.
Warp would be resonance of the metric: a fold tears space-time and
rings, Marks are its harmonics, and the two trims of every design are
two harmonics. Every required fact then has a physical reason, today's
[[Deck]] pairs become a nice discovery without becoming a foundation,
and the tone stays space opera. From [[Assay]], take the canon device:
numbered articles, plus a book of Rulings for edge cases.

On the name: **WARPWAKE** if the world stays warp-first, **OVERTONE**
if the harmonics become the hook. **ASSAY** fits only its own
variant.

## Story engines in today's rules

You asked for rules that produce comebacks, captured heroes and great
battles. Writing the stories showed that the current rules already
support all three:

1. **Comeback after losing the homeworld**: a destroyed [[Homeworld]]
   goes on top of a [[Factory]] pile, and two [[Create]]s in one
   [[Turn]] rebuild it in any [[Wild]] [[Star]], with no [[Ancient]]s
   rising, since only an [[Attack]] conquest calls them. Losing the
   home [[Star]] doesn't end the game ([[PaxGalactica#Notes#4]]). The
   old home becomes [[Wild]] once its [[World slot]] is empty, so the
   [[Ancient]]s guard it against its captors too.
2. **Captured hero**: a [[Damaged]] [[Hero]] in a rival-controlled
   [[Star]] is [[ControlledBy|Controlled by]] the rival
   ([[ControlledBy#4]]). The rival can execute it with an [[Attack]]
   or render it with [[Recycle]]. Its [[Faction]] can rescue it with
   [[Recover]] from [[Range]]: [[Pinning]] doesn't stop a [[Recover]],
   and no [[Intercept]] follows, because the [[Hero]] never came into
   the [[Star]]. Healed, the [[Hero]] turns the prison into a
   [[Disputed]] front.
3. **Captured Structures**: every [[Structure]] in a [[Star]] serves
   whoever controls the [[Star]] ([[ControlledBy#4]]). The captor
   [[Create|Raise]]s its own leaders at your [[Academy]], and your
   [[Colony|Colonies]] score for it ([[VictoryPoints]]).
4. **Great battles**: [[Combat]] (on hold) already gives rounds,
   bluffs with [[Hidden]] [[Card]]s placed by [[Stealth]], the tie to
   the [[Defender]] and the [[Hand]] as the budget of the [[Turn]]. A
   [[Defender]] can win by bleeding the [[Attacker]]'s [[Hand]]. A tie
   damages every direct participant on both sides, which makes a
   pyrrhic victory. A crown [[Card]] is too precious to fight, since
   saving it needs a margin as large as its [[Level]].
5. **Restraint**: [[Singularity]] counts only [[Card]]s that were
   held, not used, and [[Twilight]] gives every rival one last
   [[Turn]]. Holding back becomes the drama.
6. **Gambles**: [[Explore]] shows its [[Cost]] only after the start.

## Questions the stories raised

Gaps found while checking the stories against the rules. They are
not in the [[Backlog]] yet:

1. **Homeworld Level**: [[Homeworld]] prints no [[Level]] or
   [[Price]], so [[Homefall]] doesn't name the cost of rebuilding it.
2. **Recover Class**: which [[Class]] pays a [[Recover|Heal]] or a
   [[Recover|Fix]], and which [[End]] comes up afterward?
3. **No exchange**: there is no ransom, prisoner exchange or [[Card]]
   trade between [[Faction]]s. [[EarlyIdeas]] has the Prisoner and
   Convoy seeds.
4. **Carrying the wrecked**: can a [[Damaged]] [[Card]] be the
   [[Cargo]] of a [[Move]], and can a [[Faction]] move a [[Card]] it
   doesn't control?
5. **Create across a hidden Space**: does a [[Create]] placement route
   need revealed [[Tile]]s? [[Homefall]] surveyed the lane first, to
   be safe.
6. **Hand count**: is the number of [[Card]]s in a rival's [[Hand]]
   public? [[TheHeldChord]] assumes it is.
7. **Damaged keeps its Slot**: a [[Damaged]] [[Card]] blocks a
   [[Slot]] until it is Destroyed or [[Enabled]]. The ending of
   [[TheHeldChord]] depends on that. Is it intended?
8. **Twilight and the Hand**: [[Singularity]] counts [[Hand]]
   [[Card]]s at [[Check]], but the final comparison of [[Twilight]]
   comes after [[Draw]]. Which state counts?

## Next steps

1. Choose a variant or a merge, and its name.
2. Write the canon of the chosen world: Primer, Manual, Charter,
   Registry. A canon that covers every requirement is a rulebook
   readers can learn the game from.
3. Optionally add `lore` to the scopes in [[index]] and to the
   `make lint` globs, so lore pages get checked like the docs.
