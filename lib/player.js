import WorldBoard from './world_board';
import { gridCoords } from './grid';

class Player {
  constructor(name, player, board) {
    this.name = name;
    this.gold = 2;
    this.board = board;
    this.player = player;
    this.units = [];
  }

  tiles() {
    let tiles = [];
    for (let i = 0; i < gridCoords.length; i++) {
      let tile = this.board.grid[gridCoords[i][0]][gridCoords[i][1]][gridCoords[i][2]];
      if (tile.owner === this.name) {
        tiles.push(tile);
      }
    }
    return tiles;
  }

  spawnTiles() {
    let tiles = this.tiles();
    let spawnTiles = [];
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].mayPurchase) spawnTiles.push(tiles[i]);
    }
    return spawnTiles;
  }

  unitTiles() {
    let tiles = this.tiles();
    let unitTiles = [];
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].units.length > 0) unitTiles.push(tiles[i]);
    }
    return unitTiles;
  }

  units() {
    let unitTiles = this.unitTiles();
    let units = [];
    for (let i = 0; i < unitTiles.length; i++) {
      for (let j = 0; j < unitTiles[i].cards; j++) {
        units.push(unitTiles[i].cards[j]);
      }
    }
    return units;
  }

  unitsToMove() {
    let units = this.units();
    for (let i = 0; i < units.length; i++) {
      if (units[i].worldMoved === false) return true;
    }
    return false;
  }

  unitsToAttack() {
    let units = this.units();
    for (let i = 0; i < units.length; i++) {
      if (units[i].attacked === false) return true;
    }
    return false;
  }
}

export default Player;
