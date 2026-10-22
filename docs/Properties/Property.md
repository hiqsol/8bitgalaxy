---
status: draft
scope: core
---

![props](../../public/images/card.png)

```
          ╭──╥─╥──────╮ Strong End    ╭───────────╮ Hidden End
Level+EP─►│ 2+1║    1 │ ◄── Primary   │           │
Class ───►╞══╩═╝   +1 │ ◄── Secondary │           │
          │   ship    │               │  faction  │
Type ────►│- -image- -│- - - - - - - -│- -image- -│- - - - - - 
          │    here   │ Weak End      │/// here //│ Damaged End
          │ T+   ╔═╦══╡ ◄── Class     │///////////│
          │ T    ║ᘔ +T│ ◄── Level+EP  │///////////│
          ╰──────╨─╨──╯               ╰───────────╯
```

1. Card properties are:
	1. [[Side]] and [[End]]
	2. [[Faction]] - always visible
	3. [[Class]], which implies [[Defense]]
	4. [[Level]], which implies [[Capacity]] and [[Range]]
	5. [[ExtraPrice]], which implies [[Price]] and [[Size]]
	6. [[Type]], which implies [[Role]], always visible, and
	   [[Origin]]
	7. [[PrimaryAbility]]
	8. [[SecondaryAbility]]
	9. [[Trait]]
	10. [[Prerequisites]]
	11. [[CulturePoints]]
2. Kinds of properties:
	1. **explicit** - printed on the card
	2. **implicit** - derived from other properties
	3. **physical** - [[Side]] and [[End]]
3. [[Component]] properties, of cards and tiles: [[Side]],
   [[ExtraPrice]], [[Price]]
4. [[Star]] and [[Space]] have own properties: Star Size and Type are
   not card [[Size]] and [[Type]]

#### Notes

1. In the card picture `T` is upside-down `1`: the weak [[End]] is
   printed rotated by 180°
2. The picture is generic for all double ended cards
