---
status: polish
scope: duel
---

1. **World Deck** lists the [[World]] [[Card]]s of the [[Duel]]: 20
   [[Card]]s, counted by the [[Level]] of the [[Strong]] [[End]] as in
   the [[Deck]]:
	1. [[Level]] 2: 8 [[Card]]s, 2 of each [[Class]]
	2. [[Level]] 4: 8 [[Card]]s, 2 of each [[Class]]
	3. [[Level]] 6: 4 [[Card]]s, 1 of each [[Class]]
2. A [[World]] is a [[Colony]], made like the [[Deck]]'s
   [[Structure]]s:
	1. Both [[End]]s of one [[Class]], the [[Weak]] [[End]] one
	   [[Level]] lower
	2. [[ExtraPrice]] 1 on both [[End]]s, so the [[Price]] is the
	   [[Strong]] [[Level]] + 1
	3. [[Prerequisites]]: none at [[Level]] 2, else the [[Strong]]
	   [[Level]] − 2 of its [[Class]]
3. A [[World]] prints one [[Ability]], the Primary of its [[Strong]]
   [[End]], on the [[Weak]] [[End]] too where its line gives it, `-`
   gives nothing; a line is the [[Card]] in [[Notation]], as in the
   [[Deck]]
4. [[World]] 4M gives its +2 [[Defense]] to its controller's
   [[Defender]]s in its [[Star]]
5. A weak [[Ability]] comes in many copies, a strong one is rare:

```text
2× W2+1m/1+1m: +1m          / +1m
2× W2+1c/1+1c: +1c          / +1c
2× W2+1p/1+1p: +1p          / +1p
2× W2+1s/1+1s: +1s          / +1s

2× W4+1m/3+1m: +2d          / +2d << *2m
2× W4+1c/3+1c: +1g          / -   << *2c
2× W4+1p/3+1p: +2l          / +2l << *2p
2× W4+1s/3+1s: +2r          / +2r << *2s

W6+1m/5+1m:    ForceDiscard / -   << *4m
W6+1c/5+1c:    +1Draw       / -   << *4c
W6+1p/5+1p:    TBD          / -   << *4p
W6+1s/5+1s:    +1e          / -   << *4s
```

#### Notes

1. A better [[World]] is rarer, costs more and so more [[Ancient]]s
   guard it: 3, 5 or 7
2. A conquest draws until the [[Participants]] meet a [[World]]'s
   [[Prerequisites]], see [[Wild]]: early conquests find the weak
   [[World]]s, the strong ones wait for developed [[Faction]]s
3. [[Energy]] is above [[Power]]: an [[Energy]] [[Token]] [[Boost]]s
   an [[Action]] of any [[Class]] anywhere and stays between [[Turn]]s
4. `+1Draw` is the [[Draw]] [[Plus]], see [[DeckBuilding]]
5. No [[World]] reaches [[Level]] 8, the [[Level]] of the [[Crown]]s:
   a [[World]] never gives a [[Faction]] [[Singularity]]
