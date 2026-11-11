---
status: polish
scope: core
aliases: [Control]
tags: [topic/capture]
---

1. **Controlled by** is a [[Star]] and [[Card]] [[State]] relative to
   a [[Faction]]
2. **Control** is a [[Faction]]'s level of presence in a [[Star]]: it
   has **Control** only with [[Card]]s of its [[Faction]] there that
   are not [[Damaged]], the level in ascending order:
	1. **Structure** - a [[Structure]]
	2. **Unit** - a [[Unit]]
3. [[Star]] is **controlled by** the [[Faction]] with strictly the
   highest **Control** in it, a tie makes it [[Disputed]]
4. A [[Card]] is **controlled by** its [[Faction]], but a
   [[Structure]] or a [[Damaged]] [[Card]] in a [[Star]] **Controlled
   by** another [[Faction]] is **Controlled by** that [[Faction]]

#### Notes

1. Only own [[Card]]s count, so **Control** doesn't depend on itself:
   a captured [[Structure]] gives the captor no **Control**
2. A [[Star]] with no such [[Card]]s is nobody's, not [[Disputed]]
3. Taking a [[Star]] captures the rival [[Structure]]s and wrecks in
   it, a [[Disputed]] [[Star]] captures nothing
4. A [[Card]] [[Back]] shows [[Unit]] or [[Structure]], so
   **Control** is seen even with [[Hidden]] [[Card]]s
