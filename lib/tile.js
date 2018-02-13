

class Tile {

  constructor(type, x = 0, y = 0, z = 0) {
    console.log(type);
    this.type = type;
    this.x = x;
    this.y = y;
    this.z = z;
    this.attributes = TILES[type][0];
    this.units = TILES[type][1];
    this.owner = 'none';
    this.availableUnits = TILES[type][2];
  }

  setOwner(player) {
    this.owner = player;
  }

  addPlayerUnit(unit) {
    this.units.push(unit);
  }

  selectUnit(unitType) {
    if (this.units.length > 0) {
      for (let i = 0; i < this.units.length; i++) {
        if (this.units[i].type === unitType) return this.units[i];
      }
    } else {
      alert("there are no units of that type on this tile");
      return false;
    }
  }

  spawnUnit(unitType) {
    if (this.attributes['mayPurchase']) {
      this.availableUnits[unitType] += 1;
    } else {
      alert("not a spawn tile");
    }
  }

  removeSpawnUnit(unitType) {
    if (this.attributes['mayPurchase']) {
      if (this.availableUnits[unitType] > 0) {
        this.availableUnits[unitType] -= 1;
      } else {
        alert(`this tile has no mare available ${unitType}`);
      }
    } else {
      alert("not a spawn tile");
    }
  }

  removePlayerUnit(unit) {
    delete this.units.unit;
  }

  getNumUnits(player) {
    let sum = 0;
    for (let i = 0; i < this.units.length; i++) {
      if (this.units[i].owner === player.name) {
        sum += 1;
      }
    }
    return sum;
  }

  getNumUnitType(unitType) {
    let sum = 0;
    for (let i = 0; i < this.units.length; i++) {
      if (this.units[i].unitType === unitType) {
        sum += 1;
      }
    }
    return sum;
  }

  display() {
    switch(this.owner) {
      case 'player1':
        return 'rgba(0, 0, 255, 0.2)';
      case 'player2':
        return 'rgba(255, 0, 0, 0.2)';
      default:
        return 'rgba(0, 255, 0, 0.2)';
    }
  }
}

const TILES = {
  meadows: [
    {
    mayBuild: true,
    mayPurchase: false,
    encounterChance: 0.3,
    difficultTerrain: false,
    },
    []
  ],
  hills:[
    {
      mayBuild: false,
      mayPurchase: false,
      encounterChance: 0.7,
      difficultTerrain: true,
    },
    []
  ],
  woods: [
    {
      mayBuild: false,
      mayPurchase: false,
      encounterChance: 0.5,
      difficultTerrain: true,
    },
    []
  ],
  barracks: [
    {
      mayBuild: false,
      mayPurchase: true,
      encounterChance: 0.0,
      difficultTerrain: false
    },
    [],
    {
      swordsman: 2,
      archer: 2,
      spearman: 2
    }
  ],
  orcLonghouse: [
    {
      mayBuild: false,
      mayPurchase: true,
      encounterChance: 1.0,
      difficultTerrain: false
    },
    [
      'orc',
      'orc'
    ],
    {
      orc: 2
    }
  ],
  dwarfStronghold: [
    {
      mayBuild: false,
      mayPurchase: true,
      encounterChance: 1.0,
      difficultTerrain: false
    },
    [
      'dwarf',
      'dwarf'
    ],
    {
      dwarf: 2
    }
  ],
  elfCitadel: [
    {
      mayBuild: false,
      mayPurchase: true,
      encounterChance: 1.0,
      difficultTerrain: false
    },
    [
      'elf',
      'elf'
    ],
    {
      elf: 2
    }
  ],
  mercenaryCamp: [
    {
      mayBuild: false,
      mayPurchase: true,
      encounterChance: 0.0,
      difficultTerrain: false
    },
    [],
    {
      elf: 1,
      dwarf: 1,
      orc: 1
    }
  ]

};


export default Tile;
