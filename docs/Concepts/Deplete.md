---
status: draft
scope: core
---

1. After [[PerformAction]] is done all participants are depleted unless the action defines an exception
2. Cards get depleted differently:
	1. [[Unit]] cards, from the [[Field]] or [[Hand]], go to [[Discard]] pile
	2. [[Structure]] cards become (or stay) [[Depleted]]
3. Exception: [[Move]] doesn't deplete moving [[Actor]]s, they stay where they finished
	1. [[Support]]ers of the [[Move]] are depleted as usual
4. [[Transport]] doesn't deplete moving ships or transported cards
	1. Supporters of the Transport are depleted as usual
5. [[Combat]] doesn't deplete direct participants: survivors stay or move in
	1. Supporters of the Combat are depleted as usual

#### Notes

1. Keep from depleting technology: [[DoNotDeplete]]
