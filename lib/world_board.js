import Tile from './tile';
import { GRID_COORDS } from './grid';
import _ from 'lodash';

class WorldBoard {
  constructor() {
    this.grid = this.buildGrid();
  }

  dealTile(x, y, z) {
    console.log(`${x} ${y} ${z}`);
    let tile;
    switch (`[${x}, ${y}, ${z}]`) {
      case '[0, 0, 0]':
      break;
      case '[3, 0, -3]':
        tile = new Tile('barracks', x, y, z);
        tile.owner = 'player1';
        return tile;
      case '[-3, 0, 3]':
        tile = new Tile('barracks', x, y, z);
        tile.owner = 'player2';
        return tile;
      default:
        return new Tile(TILE_STACK.pop(), x, y, z);
    }
  }

  buildGrid() {
    let grid = new Array();
    for (let i = -3; i < 4; i++) {
      grid[i] = new Array();
      for (let j = -3; j < 4; j++) {
        grid[i][j] = new Array();
      }
    }
    let gridCoords = Object.keys(_.invert(GRID_COORDS)).map(coord => {
      coord = coord.split(',');
      return [parseInt(coord[0]), parseInt(coord[1]), parseInt(coord[2])];
    });
    for (let i = 0; i < gridCoords.length; i++) {
      let x = gridCoords[i][0];
      let y = gridCoords[i][1];
      let z = gridCoords[i][2];
      grid[x][y][z] = this.dealTile(x, y, z);
    }
    return grid;
  }
}

const TILE_STACK = [
  'meadows', 'meadows', 'meadows', 'meadows', 'meadows', 'meadows',
  'meadows', 'meadows', 'meadows', 'woods', 'woods', 'woods',
  'woods', 'woods', 'woods', 'woods', 'woods', 'hills', 'hills', 'hills',
  'hills', 'hills', 'hills', 'hills', 'hills', 'mercenaryCamp',
  'mercenaryCamp', 'mercenaryCamp', 'orcLonghouse', 'orcLonghouse',
  'dwarfStronghold', 'dwarfStronghold', 'elfCitadel', 'elfCitadel'
];

export default WorldBoard;
