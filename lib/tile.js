import Unit from './unit';

class Tile {

  constructor(type, x = 0, y = 0, z = 0) {
    this.type = type;
    switch (type) {
      case 'orcLonghouse':
        this.owner = 'orc';
        break;
      case 'elfCitadel':
        this.owner = 'elf';
        break;
      case 'dwarfStronghold':
        this.owner = 'dwarf';
        break;
      case 'center':
        this.owner = 'center';
        break;
      default:
        this.owner = 'none';
        break;
    }
    this.x = x;
    this.y = y;
    this.z = z;
    let copied = this.copy(TILES[type]);
    this.attributes = copied[0];
    this.units = copied[1].slice();
    this.availableUnits = this.copy(copied[2]);
  }

  copy(object) {
    let copied = {};
    Object.keys(object).forEach(key => (
      copied[key] = object[key]
    ));
    return copied;
  }

  setOwner(player) {
    this.owner = player;
  }

  addUnit(unit, player) {
    this.units.push(new Unit(unit, player));
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

  canMoveUnits() {
    for (let i = 0; i < this.units.length; i++) {
      if (!this.units[i].worldMoved) {
        return true;
      }
    }
    return false;
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
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518706954/meadow_y2fjqg.png",
    },
    [],
    {}
  ],
  hills:[
    {
      mayBuild: false,
      mayPurchase: false,
      encounterChance: 0.7,
      difficultTerrain: true,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518706416/hills_ogusis.png",
    },
    [],
    {}
  ],
  woods: [
    {
      mayBuild: false,
      mayPurchase: false,
      encounterChance: 0.5,
      difficultTerrain: true,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518707619/woods_cfs008.png",
    },
    [],
    {}
  ],
  barracks: [
    {
      mayBuild: false,
      mayPurchase: true,
      encounterChance: 0.0,
      difficultTerrain: false,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518707668/barracks_ipv5gd.png",
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
      difficultTerrain: false,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518707994/orc-longhouse_o9ou9c.png",
    },
    [
      new Unit('orc', { name: 'orc' }),
      new Unit('orc', { name: 'orc' }),
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
      difficultTerrain: false,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518708616/dwarf-stronghold_gw73b8.png",
    },
    [
      new Unit('dwarf', 'dwarf'),
      new Unit('dwarf', 'dwarf'),
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
      difficultTerrain: false,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518708937/elf-citadel_vgjcnb.png",
    },
    [
      new Unit('elf', 'elf'),
      new Unit('elf', 'elf'),
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
      difficultTerrain: false,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518709295/mercenary-camp_sh0tih.png",
    },
    [],
    {
      elf: 1,
      dwarf: 1,
      orc: 1
    }
  ],
  center: [
    {
      mayBuild: false,
      mayPurchase: false,
      encounterChance: 0.0,
      difficultTerrain: true,
      imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518710436/center_a3sm3a.png",
    },
    [],
    {}
  ]

};


export default Tile;
