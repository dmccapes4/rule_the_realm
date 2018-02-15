

class Unit {
  constructor(type, owner = null) {
    this.type = type;
    let attributes = UNITS[type];
    this.attack = attributes['attack'];
    this.defense = attributes['defense'];
    this.range = attributes['range'];
    this.cost = attributes['cost'];
    this.imageUrl = attributes['imageUrl'];
    this.owner = owner;
    this.battleMoves = 2;
    this.worldMoved = false;
  }

  levelUp(type) {
    switch (type) {
      case 'attack':
        this.attack += 1;
        break;
      case 'defense':
        this.defense += 1;
        break;
      default:
    }
  }
}

export default Unit;


const UNITS = {
  swordsman: {
    attack: 3,
    defense: 5,
    range: 1,
    cost: 1,
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518654531/swordsman_yk29xm.png",
  },
  archer: {
    attack: 3,
    defense: 1,
    range: 3,
    cost: 1,
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518654421/archer_zdvhhi.png",
  },
  spearman: {
    attack: 3,
    defense: 3,
    range: 2,
    cost: 1,
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518657896/spearman_zkiryf.png",
  },
  orc: {
    attack: 7,
    defense: 5,
    range: 1,
    cost: 2,
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518665909/orc_lsq1lv.png",
  },
  dwarf: {
    attack: 5,
    defense: 7,
    range: 1,
    cost: 2,
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518666040/dwarf_thovxo.png",
  },
  elf: {
    attack: 5,
    defense: 3,
    range: 4,
    cost: 2,
    imageUrl: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518666144/elf_zfttuu.png",
  }
};
