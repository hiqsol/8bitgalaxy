---
status: polish
scope: core
---

1. **Card** [[Type]]s and their [[Property|Properties]] are in the
   table below, `L` is the current [[Level]], `X` the [[ExtraPrice]]
2. A **Card** with [[Range]] 0 doesn't [[Move]] on its own, with
   [[Capacity]] 0 it carries no [[Cargo]] and doesn't [[Boost]]
3. A [[Ship]] carries [[Cargo]] by [[Class]] when its [[Class]]
   handles the **Card**, see [[Class#5]]

| [[Type]] | [[Role]] | [[Origin]] | [[Range]] | [[Size]] | [[Capacity]] | [[Cargo]] of |
|---|---|---|---|---|---|---|
| [[Ship]] | [[Actor]] | [[Industrial]] | L | L + X | L | - |
| [[Hero]] | [[Actor]] | [[Social]] | L | L | L | any [[Ship]] |
| [[Tool]] | [[Unit]] | [[Industrial]] | 0 | L + X | 0 | any [[Ship]] |
| [[Colony]] | [[Structure]] | [[Social]] | 0 | L + X | L | a [[Ship]] by [[Class]] |
| [[Base]] | [[Structure]] | [[Industrial]] | 0 | L + X | L | a [[Ship]] by [[Class]] |
| [[Hyperstructure]] | [[Structure]] | [[Social]], [[Industrial]] | 0 | L + X | L | never |
| [[Event]] | [[Agenda]] | none | - | - | - | - |
| [[Objective]] | [[Agenda]] | none | - | - | - | - |
