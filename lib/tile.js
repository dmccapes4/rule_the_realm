

class Tile {

  constructor(type, idx = 0, jdx = 0) {

  }

}

const TILES = {
  meadows: {
    mayBuild: true,
    mayPurchase: false,
    encounterChance: 0.3,
    difficultTerrain: false,
  },
  hills: {
    mayBuild: false,
    mayPurchase: false,
    encounterChance: 0.7,
    difficultTerrain: true,
  },
  woods: {
    mayBuild: false,
    mayPurchase: false,
    encounterChance: 0.5,
    difficultTerrain: true,
  },
  village: {
    settlementSize: 1,
  }
};
