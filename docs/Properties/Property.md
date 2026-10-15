---
status: draft
scope: core
---

![props](../../public/images/card.png)

```
          ╭──╥─╥──────╮ Strong End    ╭───────────╮ Hidden End
Level+EC─►│ 2+1║    1 │ ◄── Primary   │           │
Class ───►╞══╩═╝   +1 │ ◄── Secondary │           │
          │   ship    │               │  faction  │
Type ────►│- -image- -│- - - - - - - -│- -image- -│- - - - - - 
          │    here   │ Weak End      │/// here //│ Damaged End
          │ T+   ╔═╦══╡ ◄── Class     │///////////│
          │ T    ║ᘔ +T│ ◄── Level+EC  │///////////│
          ╰──────╨─╨──╯               ╰───────────╯
```

1. Card properties are:
	1. [[Side]] and [[End]]
	2. [[Faction]] - always visible
	3. [[Class]]
	4. [[Level]], which implies [[Capacity]], [[Range]] and [[Defense]]
	5. [[ExtraCost]], which implies [[Cost]] and [[Size]]
	6. [[Type]], which implies:
		1. [[Role]]: [[Unit]] / [[Structure]] - always visible
		2. [[Origin]]: [[Social]] / [[Industrial]]
	7. [[PrimaryAbility]]
	8. [[SecondaryAbility]]
	9. [[AdditionalAbility]]
	10. [[Prerequisites]]

#### Notes

1. In the card picture `T` is upside-down `1`: the weak [[End]] is printed rotated by 180°
2. The picture is generic for all double ended cards
