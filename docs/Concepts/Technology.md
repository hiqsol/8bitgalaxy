---
status: draft
scope: core
---

1. **Technology** is a card ability
2. **Technologies** come in three flavours:
	1. [[TechnologyAction]] allows to perform non-basic actions
	2. [[TechnologyModifier]] modify actions for better
	3. [[BuildingFacility]] provides [[Create]], [[Upgrade]] and [[Recover]]
3. The table below is the only catalog of technologies:
	1. **Class** is the [[Class]] of the card [[End]]s that carry the technology
	2. **Cards** lists the [[Deck]] cards and ends that carry it, their levels are in the [[Deck]]
	3. Technology pages describe behavior only, without class and level

| Technology | Kind | Class | Scope | Cards |
|------------|------|-------|-------|-------|
| [[Academy]] | Facility | C | core | Colony 2C |
| [[Shipyard]] | Facility | P | core | Base 2P, Colony 4P |
| [[Upgrade]] | Action | C, P | core | Hero 1M weak, Hero 2C weak, Hero 3M weak, Hero 3C strong, Hero 4M weak, Hero 4C strong, Ship 4C strong, Ship 4P strong |
| [[Recover]] | Action | C, P | core | Hero 1P strong, Hero 2C strong, Hero 4M weak, Hero 4C strong, Colony 4P |
| [[Retreat]] | Modifier | M | core | Ship 2M strong |
| [[Explore]] | Action | S | core | Ship 2S strong, Colony 2S |
| [[PlusRange]] | Modifier | S | core | Colony 4S |
| [[PlusDraw]] | Modifier | TBD | core | - |
| [[Express]] | Modifier | C | core | - |
| [[ForceDiscard]] | Modifier | M | core | - |
| [[Recon]] | Action | M | advanced | Hero 1M strong, Hero 2M strong, Colony 2M |
| [[Stealth]] | Modifier | M | advanced | Hero 3M strong, Hero 4M strong, Base 4M |
| [[Militarization]] | Modifier | M | advanced | Base 2M, Colony 4M |
| [[Smuggle]] | Action | M | advanced | Ship 4M strong |
| [[Trade]] | Action | C | advanced | Ship 2C strong, Base 2C |
| [[Export]] | Action | C | advanced | Colony 4C |
| `allacad` | TBD | C | TBD | Base 4C |
| [[Extract]] | Action | P | advanced | Ship 2P strong, Colony 2P |
| [[PlusLoad]] | Modifier | P | advanced | Base 4P |
| [[Recycle]] | Action | S | advanced | Hero 1P weak, Hero 2M weak, Base 2S |
| [[Navigation]] | Modifier | S | advanced | Hero 3C weak, Hero 4C weak, Base 4S |
| [[Exhaust]] | Modifier | S | advanced | Ship 4S strong |
| [[DoNotDeplete]] | Modifier | C | advanced | - |
| [[BeActor]] | Modifier | C | advanced | - |
| [[Sell]] | Action | C | advanced | - |
| [[Dismantle]] | Action | P | advanced | - |
| [[PlusFactory]] | Action | P | advanced | - |
| [[PlusLaboratory]] | Action | S | advanced | - |
| [[Invent]] | Action | S | advanced | - |
| [[MinusRequirement]] | Modifier | S | advanced | - |
| [[PlusHero]] | Action | TBD | advanced | - |
| [[EfficientUpgrade]] | Modifier | TBD | advanced | - |

#### Notes

1. Technologies without cards are planned, they need cards to be playable
2. Design idea: stronger technologies sit on higher levels, the maximal ones (like [[PlusDraw]]) on the highest [[Hero]]es
