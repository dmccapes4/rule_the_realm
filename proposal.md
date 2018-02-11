## Rule the Realm

### Background and Overview

Rule the Realm is a turn based strategy game. Players conquer tiles to build settlements and buy units in a fantasy
setting.

**`start`**

Players start with a small human settlement in different corners of a hex tile map, and take turns buying and
moving units in an attempt to capture the other players starting bases. Players begin with 3 gold and a total of 6
available units: 2 archers, 2 spearmen and 2 swordsmen that each cost 1 gold. The starting tile is treated like a 
village for the purposes of gold production and upgrading it as a settlement.

**`tiles`**

The map primarily consists of woods, hills, and meadows tiles. Players can conquer these tiles to add to their total
tile count, and can build new settlements on them. When players move units onto these tiles they have a chance to
encounter enemies. If they do encounter an enemy the game goes into battle mode against the top 2-4 random units
depending on the size of the player's largest settlement. If they win the battle they own the tile.

The map also consists of settlements of the other races: elves, orcs and dwarves. Players can conquer these tiles to
produce coin for them and to purchase units of that race from. When players enter these tiles they go into battle 
against more 2-4 units of that race depending on the size of the player's largest settlement.

The last tile type is the mercenary camp. This tile cannot be conquered, but may be passed through freely and players
can purchase units from it.

The center tile is always impassable.

The 2 player version contains 10 meadows, 9 woods, 9 hills, 2 mercenary camps, 2 orc longhouses, 2 dwarf strongholds
and 2 elf citadels

**`units`**

Units are bought at settlements or mercenary camps and have 4 battle statistics: attack, defense, range and speed.
Attack and defense represent the random range of the attack or defense score for a round of combat against an 
opposing unit's attack or defense score.

The three basic units are the archer, swordsman and spearman:
* archer: attack: 3, defense: 1, range: 2, speed: 1
* swordsman: attack: 3, defense: 5, range: 0, speed: 1
* spearman: attack: 3, defense: 3, range: 1, speed: 1

If an archer were to attack a swordsman, it would get one mod 3 attack to against the swordsman's mod 5
defense. If the archer's score beats the swordsman's score,the swordsman dies and the archer is able to level up
after the combat.

In this case the archer, with a mod 1 defense

It's possible to attack one enemy unit with multiple units. For intstance, a swordsman, spearman and archer could all
attack the same unit scoring a total of 3 mod 3 attack. If the attack beats the succeeds the player may select one of
the attacking units to level up after the combat.

**`leveling up`**

When a unit is involved in killing an opposing unit it is able to level up. When a unit levels up the player selects
one attribute: attack or defense to improve. When this is improved the character increases their attibute by 1.

**`settlements`**

`village`

**settlement size: 1**

Villages can be built on **meadows** tiles for 3 gold. They have 3 available units: an archer, a swordsman and a spearman
Villages produce mod 3 gold per turn. Players can build up to 3 villages and begin with starting settlement treated as an
additional village. Villages have a radius of 2.

`town`

**settlement size: 2**

Villages can be upgraded to towns for 4 gold. Towns gain 2 additional units: an archer and a spearman. Towns produce mod 5 
gold per turn. Players can upgrade up to 3 villages.

`city`

**settlement size: 3**

Towns can be upgraded to cities for 5 gold. Cities gain 1 additional unit: a swordsman. Cities produce mod 7 gold per turn.
Players can upgrade up to 2 towns.

**`other tiles`**

`mercenary camp`

There are 2 mercenary camps. Mercenary camps have 2 available units:
* ranger: attack: 5, defense: 2, range: 3, speed: 1, cost: 3
* knight: attack: 5, defense: 7, range: 0, speed: 2, cost: 3


`orc longhouse`

There are 2 orc longhouses. Orc longhouses have 4 available units:
* 2 spear-orc: attack: 5, defense: 5, range: 1, cost: 2
* 2 axe-orc: attack: 7, defense: 5, range: 0, cost: 2

`dwarf stronghold`

There are 2 dwarf strongholds. Dwarf strongholds have 4 available units:
* 2 arbalest: attack: 4, defense: 4, range: 2, cost: 2
* 2 shield-dwarf: attack: 4, defense: 8, range: 0, cost: 2

`elf citadel`

There are 2 elf citadels. Elf citadels have 4 available units:
* 2 ranger: attack: 5, defense: 1, range: 3, speed: 1, cost: 2
* 2 sword-elf: attack: 6, defense: 6, range: 0, speed: 1, cost: 2

**`battles`**

Battles take place on a 37 tile hex grid with opposing units being placed on opposite ends. Players may place up
to 2 units on their back row each turn. Each unit can do 2 actions per turn. Each action can be either to move or
attack. A player wins when the opposing player has no more units on the tile, or flees with his undeployed units.
Players cannot flee until all of their deployed units are killed.



