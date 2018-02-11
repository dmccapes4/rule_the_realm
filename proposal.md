## Rule the Realm

### Background and Overview

Rule the Realm is a turn based strategy game. Players conquer tiles to build settlements and buy units in a fantasy
setting.

**`start`**

Players start with a small human settlement in different corners of a hex tile map, and take turns buying and
moving units in an attempt to capture the other players starting bases. Players begin with 3 gold and a total of 6
available units: 2 archers, 2 spearmen and 2 swordsmen that each cost 1 gold. Their starting tile produces 1 gold
each turn and is treated like a village for the purposes of upgrading it as a settlement.

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

**`units`**

Units are bought at settlements or mercenary camps and have 4 battle statistics: attack, defense, range and speed.
Attack and defense represent the number of mod 3 die that a player can roll to determine an attack or defense score
for a round of combat against an opposing unit's attack or defense score.

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
Villages can be built on **meadows** tiles for 3 gold. They have 3 available units: an archer, a swordsman and a spearman. Villages produce 1 gold per turn. Players can build up to three villages. 

`town`

Villages can be upgraded to towns for 4 gold. Towns gain 2 additional units: an archer and a spearman.






