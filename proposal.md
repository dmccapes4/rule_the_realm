## Rule the Realm

### Background and Overview

Rule the Realm is a turn based strategy game. Players conquer tiles to build settlements and buy units in a fantasy
setting.

**`start`**

Players start with a small human settlement in different corners of a hex tile map, and take turns buying and
moving units in an attempt to capture the other players starting bases. Players begin with 3 gold and a total of 6
available units: 2 archers, 2 spearmen and 2 swordsmen that each cost 1 gold.

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

If an archer were to attack a swordsman, it would get one [0-3] attack to against the swordsman's [0-5]
defense. If the archer's score beats the swordsman's score,the swordsman dies and the archer is able to level up
after the combat.



In this case the archer, with a 1 defense would

It's possible to attack one enemy unit with multiple units. For intstance, a swordsman, spearman and archer could all
attack the same unit scoring a total of 3 mod 3 attack. If the attack beats the succeeds the player may select one of
the attacking units to level up after the combat.

**`leveling up`**

When a unit is involved in killing an opposing unit it is able to level up. When a unit levels up the player selects
one attribute: attack or defense to improve. When this is improved the character increases their attibute by 1.

**`settlements`**

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

### MVPs

- [ ] Buy and move units
- [ ] Facilitate battle
- [ ] Level up units
- [ ] Conquer unowned tiles with random encounters
- [ ] Conquer settlements of other races and purchase units from them
- [ ] Purchase units from mercenary camp
- [ ] Competent AI

**`bonus`**

- [ ] Build and upgrade settlements
- [ ] Upgrade settlements with buildings
- [ ] Additional unit types
- [ ] Additional races

### Wireframes

The game will consist of two primary screens: the world board and the battle board. The world board will be a
view of the 37 tile world map and will allow player to buy and move units throughout the map. 

World Board:
![world-board](https://user-images.githubusercontent.com/32603834/36103950-91c2dd82-0fc5-11e8-8cfb-d618a3507108.jpg)

When player's select buy units the hex map wil be replaced with a list of the available units on the tile they
selected:

![world-board 2](https://user-images.githubusercontent.com/32603834/36104562-3674d1cc-0fc7-11e8-8992-f848e7e7cbec.jpg)



When the players
encounter enemies they will switch to the also 37 tile battle board where they will be able to deploy units
and attack enemy units.


Battle Board:
![world-board 1](https://user-images.githubusercontent.com/32603834/36104120-f9a68304-0fc5-11e8-86fd-1cf76e7b7af1.jpg)


