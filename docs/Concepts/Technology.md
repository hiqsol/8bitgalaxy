---
status: draft
scope: core
---

1. **Technology** is a card ability
2. **Technologies** come in two flavours:
    1. [[TechnologyAction]] allows to perform non-basic actions
    2. [[TechnologyModifier]] modify actions for better

3. Military technologies:
	1. 1 BASE - [[Recon]] Action - Any
	2. 2 - [[Retreat]] Modifier - Hero (Culture)
	3. 3 COLONY - [[Militarization]] Modifier
	4. 4 - [[Stealth]] Modifier
	5. 4 - [[Smuggle]] Action - Ship, Hero (Culture)
4. Culture technologies:
	1. 1 COLONY - [[Academy]] Facility - Colony, Ship
	2. 2 - [[Upgrade]] Action
	3. 3 BASE - [[Trade]] Action - Base
	4. 4 - [[Exhaust]] Modifier
	5. 4 Credit
	6. 5 COLONY - [[DoNotDeplete]] Modifier (-deplete)
5. Production technologies:
	1. 1 BASE - [[Shipyard]] Facility - Base, Ship
	2. 2 - [[Recover]] Action - Ship
	3. 3 COLONY - [[Extract]] Action - Base, Ship
	4. 4 - [[Dismantle]] Action - Actor (Military)
	5. 4 - [[PlusLoad]] Modifier
	6. 4 - [[PlusFactory]] Action - Any (Scientific)
	7. 5 BASE - [[PlusDraw]] Modifier (Culture)
6. Science technologies:
	1. 1
	2. 2 - [[Explore]]
	3. 3 BASE - [[Navigation]]
	4. 3 - [[MinusRequirement]]
	5. 4 - [[PlusRange]]

7. Military pairs:
	1. Military - Stealth, Militarization
	2. Culture - Smuggle
	3. Production - none
	4. Science - none
8. Culture pairs:
	1. Military - Smuggle
	2. Culture - Academy
	3. Production - PlusDraw
	4. Science - Exhaust
9. Production pairs:
	1. Military - Dismantle
	2. Culture - none
	3. Production - Shipyard, Extract
	4. Science - PlusFactory
10. Science pairs:
	1. Military - none
	2. Culture - none
	3. Production - none
	4. Science - Research, Navigation

Pairs:
1. [[Recon]] / [[Explore]]

General idea:
1. For every power:
	1. 1/2 Structure Technology
	2. 3/4 Structure Technology
	3. 5/6 Maximal Hero Technology: [[PlusDraw]] - Culture/Production

|Object| Military | Culture  | Product  |Scientific|
|------|----------|----------|----------|----------|
|1 Colo|          |1A Academy|          |1A Rsrch  |
|1 Base|1A Recon  |          |1A Shpyard|          |
|1 Ship|          |          |          |          |
|1 Hero|1M Retreat|          |1A Extract|          |
|      |          |          |          |          |
|2 Colo|          |2A Academy|          |2A Rsrch  |
|2 Base|2A Recon  |          |2A Shpyard|          |
|2 Ship|          |          |          |          |
|2 Hero|          |2A Trade  |          |2A Explore|

|Object| Military | Culture  | Product  |Scientific|
|------|----------|----------|----------|----------|
|3 Colo|3M Mltrztn|          |3A Extract|          |
|3 Base|          |3A Trade  |          |3M Navi   |
|3 Hero|3M Exhaust|          |          |          |
|3 Ship|          |3M -deplet|          |          |
|      |          |          |          |          |
|4 Colo|4M Mltrztn|          |4A Extract|          |
|4 Base|          |4A Trade  |          |4M Navi   |
|4 Hero|          |          |          |          |
|4 Ship|          |          |          |          |

|Object| Military | Culture  | Product  |Scientific|
|------|----------|----------|----------|----------|
|5 Colo|          |          |          |          |
|5 Base|          |          |          |          |
|5 Hero|          |          |          |          |
|5 Ship|          |5A Academy|5A Shpyard|          |
|      |          |          |          |          |
|6 Colo|          |          |          |          |
|6 Base|          |          |          |          |
|6 Hero|          |6M +draw  |          |          |
|6 Ship|          |          |          |          |
