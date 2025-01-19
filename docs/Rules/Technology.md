1. **Technology** allows:
    1. perform additional actions
    2. modify actions
2. **Technology** requires:
    1. [[Mastery]]

- Military:
    - 1 BASE    - [[Recon]] Action - Any
    - 2         - [[Retreat]] Modifier - Hero (Culture)
    - 3 COLONY  - [[Militarization]] Modifier
    - 4         - [[Stealth]] Modifier
    - 4         - [[Smuggle]] Action - Ship, Hero (Culture)
    - 5 BASE    - [[PlusTakeoff]] Modifier
- Culture:
    - 1 COLONY  - [[Academy]] Facility - Colony, Ship
    - 2         - [[Upgrade]] Action
    - 3 BASE    - [[Trade]] Action - Base
    - 4         - [[Exhaust]] Modifier (Scientific)
    - 5 COLONY  - [[DoNotDeplete]] Modifier (-deplete)
- Production:
    - 1 BASE    - [[Shipyard]] Facility - Base, Ship
    - 2         - [[Repair]] Action - Ship
    - 3 COLONY  - [[Extract]] Action - Base, Ship
    - 4         - [[Dismantle]] Action - Actor (Military)
    - 4         - [[PlusCapacity]] Modifier
    - 4         - [[NewFactory]] Action - Any (Scientific)
    - 5 BASE    - [[PlusDraw]] Modifier (Culture)
- Scientific:
    - 1 COLONY  - [[Research]] Action
    - 2         - [[Explore]] Action
    - 3 BASE    - [[Navigation]] Modifier
    - 4         - [[PlusRange]] Modifier
    - 4         - [[Invent]] Modifier - Actor (Production)
    - 5 COLONY  - [[PlusAction]] Modifier (Military)

- Military
    - Military      - Stealth, Militarization
    - Culture       - Smuggle
    - Production    -
    - Scientific    - PlusAction
- Culture
    - Military      - Smuggle
    - Culture       - Academy
    - Production    - PlusDraw
    - Scientific    - Exhaust
- Production
    - Military      - Dismantle
    - Culture       -
    - Production    - Shipyard, Extract
    - Scientific    - NewFactory
- Scientific
    - Military      - PlusAction
    - Culture       -
    - Production    -
    - Scientific    - Research, Navigation

Pairs:
- [[Recon]] / [[Explore]]

General idea:
- For every power:
    - 1/2 Structure Technology
    - 3/4 Structure Technology
    - 5/6 Maximal Hero Technology:
        - [[PlusAction]] - Scientific/Military
        - [[PlusDraw]] - Culture/Production

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
|6 Hero|          |6M +draw  |          |6M +action|
|6 Ship|          |          |          |          |
