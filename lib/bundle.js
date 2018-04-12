/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unit__ = __webpack_require__(2);



let center = [40, 200];
let size = 30;
let startX = 65;
let startY = 160;

const GRID_COORDS = {
  '168.92304845413264,70': [3, -3, 0],
  '220.88457268119896,70': [2, -3, 1],
  '272.8460969082653,70': [1, -3, 2],
  '324.80762113533154,70': [0, -3, 3],
  '142.94228634059948,115': [3, -2, -1],
  '194.9038105676658,115': [2, -2, 0],
  '246.86533479473212,115': [1, -2, 1],
  '298.82685902179844,115': [0, -2, 2],
  '350.7883832488647,115': [-1, -2, 3],
  '116.96152422706632,160': [3, -1, -2],
  '168.92304845413264,160': [2, -1, -1],
  '220.88457268119896,160': [1, -1, 0],
  '272.8460969082653,160': [0, -1, 1],
  '324.8076211353316,160': [-1, -1, 2],
  '376.76914536239786,160': [-2, -1, 3],
  '90.98076211353316,205': [3, 0, -3],
  '142.94228634059948,205': [2, 0, -2],
  '194.9038105676658,205': [1, 0, -1],
  '246.86533479473212,205': [0, 0, 0],
  '298.82685902179844,205': [-1, 0, 1],
  '350.78838324886476,205': [-2, 0, 2],
  '402.749907475931,205': [-3, 0, 3],
  '116.96152422706632,250': [2, 1, -3],
  '168.92304845413264,250': [1, 1, -2],
  '220.88457268119896,250': [0, 1, -1],
  '272.8460969082653,250': [-1, 1, 0],
  '324.8076211353316,250': [-2, 1, 1],
  '376.7691453623979,250': [-3, 1, 2],
  '142.94228634059948,295': [1, 2, -3],
  '194.9038105676658,295': [0, 2, -2],
  '246.86533479473212,295': [-1, 2, -1],
  '298.82685902179844,295': [-2, 2, 0],
  '350.78838324886476,295': [-3, 2, 1],
  '168.92304845413264,340': [0, 3, -3],
  '220.88457268119896,340': [-1, 3, -2],
  '272.8460969082653,340': [-2, 3, -1],
  '324.8076211353316,340': [-3, 3, 0],
};
/* harmony export (immutable) */ __webpack_exports__["a"] = GRID_COORDS;


const selectTile = (e, worldBoard, canvasEl, centers, ctx) => {
  let rect = canvasEl.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  let closest = centers[0];
  let distX = x - closest[0];
  let distY = y - closest[1];
  let minDist = Math.sqrt(distX * distX + distY * distY);
  for (let i = 1; i < centers.length; i++) {
    distX = x - centers[i][0];
    distY = y - centers[i][1];
    let dist = Math.sqrt(distX * distX + distY * distY);
    if (dist < minDist) {
      minDist = dist;
      closest = centers[i];
    }
  }

  let coords = GRID_COORDS[`${closest}`];

  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  buildHexGrid(ctx);
  hexagon(closest, ctx);
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fill();
  let tile = worldBoard.grid[coords[0]][coords[1]][coords[2]];

  return tile;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = selectTile;


const hexCorner = (closest, i) => {
  let angleDeg = 60 * i + 30;
  let angleRad = Math.PI / 180 * angleDeg;
  return [closest[0] + size * Math.cos(angleRad),
          closest[1] + size * Math.sin(angleRad)];
};

const hexagon = (closest, ctx) => {
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  let point = hexCorner(closest, 0);
  ctx.moveTo(point[0], point[1]);
  for (let i = 1; i <= 6; i++) {
    point = hexCorner(closest, i);
    ctx.lineTo(point[0], point[1]);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};
/* unused harmony export hexagon */


const drawImage = (image, point, ctx) => {
  image.addEventListener("load", () => (
    ctx.drawImage(image, point[0] - 10, point[1] - 10, 30, 30)
  ));
};
/* unused harmony export drawImage */


const drawTile = (image, point, ctx) => {
  image.addEventListener("load", () => {
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.drawImage(image, point[0] - 25, point[1] - 30, 51, 60);
    ctx.restore();
  });
};
/* unused harmony export drawTile */


const buildHexGrid = (ctx) => {
  let centers = [];

  for (let j = 0; j < 4; j++) {
    center = [startX + j * size * Math.sqrt(3) / 2,
      startY - size * j * 1.5];
    for (let i = 0; i < 4; i++) {
      center = [center[0] + size * Math.sqrt(3) / 2,
                center[1] + size * 1.5];
      hexagon(center, ctx);
      centers.push(center);
    }
  }

  let bottomStart = center;

  for (let j = 0; j < 3; j++) {
    center = [startX + (5 + j) * size * Math.sqrt(3) / 2, startY - size * 3 * 1.5];
    center = [center[0] + j * size * Math.sqrt(3) / 2, center[1]];
    for (let i = 1; i < 5; i++) {
      center = [center[0] + size * Math.sqrt(3) / 2,
                center[1] + size * 1.5];
      hexagon(center, ctx);
      centers.push(center);
    }
  }

  for (let j = 1; j < 4; j++) {
    center = bottomStart;
    center = [center[0] + j * size * Math.sqrt(3), center[1]];
    for (let i = 1; i < 4; i++) {
      center = [center[0] - size * Math.sqrt(3) / 2,
                center[1] + size * 1.5];
      hexagon(center, ctx);
      centers.push(center);
    }
  }
  return centers;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = buildHexGrid;


const gridCoords = Object.keys(__WEBPACK_IMPORTED_MODULE_0_lodash__["default"].invert(GRID_COORDS)).map(coord => {
  coord = coord.split(',');
  return [parseInt(coord[0]), parseInt(coord[1]), parseInt(coord[2])];
});
/* harmony export (immutable) */ __webpack_exports__["c"] = gridCoords;


const renderPlayerTiles = (point, tile, ctx) => {
  ctx.lineWidth = 3;
  if (tile.owner === 'player1') {
    hexagon(point, ctx);
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.stroke();
  } else if (tile.owner === 'player2') {
    hexagon(point, ctx);
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.stroke();
  }
  ctx.lineWidth = 1;
};

const renderUnits = (point, tile, image, ctx) => {
  if (tile.units.length > 0) {
    for (let j = 0; j < tile.units.length; j++) {
      let unit = tile.units[j];
      image = new Image();
      image.src = unit.imageUrl;
      if (j < 5) {
        drawImage(image, [point[0] - j * 5, point[1] - j * 5], ctx);
      } else {
        drawImage(image, [point[0] + 45 - j * 5, point[1] + 15 - j * 5], ctx);
      }
    }
  }
};

const renderWorldBoard = (worldBoard, ctx) => {
  let point;
  for (let i = 0; i < gridCoords.length; i++) {
    let tile = worldBoard.grid[gridCoords[i][0]][gridCoords[i][1]][gridCoords[i][2]];
    point = __WEBPACK_IMPORTED_MODULE_0_lodash__["default"].invert(GRID_COORDS)[`${tile.x},${tile.y},${tile.z}`]
    .split(',').map(coord => (parseInt(coord)));
    let image = new Image();

    if (tile.owner !== 'none') {
      image.src = tile.attributes.imageUrl;
      drawTile(image, point, ctx);
    }

    renderPlayerTiles(point, tile, ctx);

    renderUnits(point, tile, image, ctx);
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = renderWorldBoard;



/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dylanmccapes/Desktop/projects/rule_the_realm/node_modules/lodash/lodash.js'");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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
    this.level = 1;
    this.selected = false;
  }

  levelUp(type) {
    this.level++;
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

/* harmony default export */ __webpack_exports__["a"] = (Unit);


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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tile__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




class WorldBoard {
  constructor() {
    this.grid = this.buildGrid();
  }

  shuffle(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
  }

  dealTile(x, y, z) {
    let tile;
    switch (`[${x}, ${y}, ${z}]`) {
      case '[0, 0, 0]':
        return new __WEBPACK_IMPORTED_MODULE_0__tile__["a" /* default */]('center', x, y, z);
      case '[3, 0, -3]':
        tile = new __WEBPACK_IMPORTED_MODULE_0__tile__["a" /* default */]('barracks', x, y, z);
        tile.owner = 'player1';
        return tile;
      case '[-3, 0, 3]':
        tile = new __WEBPACK_IMPORTED_MODULE_0__tile__["a" /* default */]('barracks', x, y, z);
        tile.owner = 'player2';
        return tile;
      default:
        return new __WEBPACK_IMPORTED_MODULE_0__tile__["a" /* default */](TILE_STACK.pop(), x, y, z);
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
    let gridCoords = Object.keys(__WEBPACK_IMPORTED_MODULE_2_lodash__["default"].invert(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* GRID_COORDS */])).map(coord => {
      coord = coord.split(',');
      return [parseInt(coord[0]), parseInt(coord[1]), parseInt(coord[2])];
    });
    gridCoords = this.shuffle(gridCoords);
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

/* harmony default export */ __webpack_exports__["a"] = (WorldBoard);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(2);


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
    this.units.push(new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */](unit, player));
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
      new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */]('orc', { name: 'orc' }),
      new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */]('orc', { name: 'orc' }),
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
      new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */]('dwarf', 'dwarf'),
      new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */]('dwarf', 'dwarf'),
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
      new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */]('elf', 'elf'),
      new __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* default */]('elf', 'elf'),
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


/* harmony default export */ __webpack_exports__["a"] = (Tile);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__world_board__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(0);



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
    for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_1__grid__["c" /* gridCoords */].length; i++) {
      let tile = this.board.grid[__WEBPACK_IMPORTED_MODULE_1__grid__["c" /* gridCoords */][i][0]][__WEBPACK_IMPORTED_MODULE_1__grid__["c" /* gridCoords */][i][1]][__WEBPACK_IMPORTED_MODULE_1__grid__["c" /* gridCoords */][i][2]];
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

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__world_board__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);

 
 
 
 

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const body = document.getElementsByTagName("body")[0];
  body.addEventListener("click", () => (modal.classList.add("close")));
  const main = document.getElementById("main");

  let worldBoard = new __WEBPACK_IMPORTED_MODULE_1__world_board__["a" /* default */]();

  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillStyle = 'rgb(0, 0, 255)';

  let centers = Object(__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* buildHexGrid */])(ctx);

  let game = new __WEBPACK_IMPORTED_MODULE_3__game__["a" /* default */](worldBoard);

  const prompt = document.getElementById("prompt");
  const buy = document.getElementById("buy");
  const move = document.getElementById("move");
  let moveStarted = false;
  let moveFromTile = {};
  let moveList = [];
  const info = document.getElementById("info");

  const clearList = list => {
    while(list.firstChild) {
      list.removeChild(list.firstChild);
    }
  };

  const buildUnitMoveList = tile => {
    let units = tile.units;
    let list = document.getElementById("list");
    clearList(list);
    for (let i = 0; i < units.length; i++) {
      if (!units[i].selected) {
        let item = document.createElement("li");
        list.appendChild(item);
        item.innerHTML = `${units[i].type}: ${units[i].level}`;
        item.addEventListener("click", () => {
          units[i].selected = true;
          buildUnitMoveList(tile);
        });
      }
    }
    let toMove = document.getElementById("units");
    clearList(toMove);
    let toMovePrompt = document.createElement("li");
    toMovePrompt.innerHTML = "units to move:";
    toMove.appendChild(toMovePrompt);
    for (let i = 0; i < units.length; i++) {
      if (units[i].selected) {
        let item = document.createElement("li");
        toMove.appendChild(item);
        item.innerHTML = `${units[i].type}: ${units[i].level}`;
      }
    }

  };

  const buildUnitBuyList = tile => {
    let units = Object.keys(tile.availableUnits);
    let list = document.getElementById("list");
    clearList(list);
    for (let i = 0; i < units.length; i++) {
      let item = document.createElement("li");
      list.appendChild(item);
      item.innerHTML = `${units[i]}: ${tile.availableUnits[units[i]]}`;
      item.addEventListener("click", () => {
        if (tile.availableUnits[units[i]] < 1) {
          alert("No available units");
        } else if (game.currentPlayer.gold < 1) {
          alert("Not enough gold");
        } else {
          tile.addUnit(units[i], game.currentPlayer);
          tile.availableUnits[units[i]] -= 1;
          game.currentPlayer.gold -= 1;
          buildUnitBuyList(tile);
          Object(__WEBPACK_IMPORTED_MODULE_0__grid__["d" /* renderWorldBoard */])(worldBoard, ctx);
        }
      });
    }
  };

  const buyUnits = tile => {
    buy.innerHTML = "Buy Units";
    buy.addEventListener("click", () => {
      if (game.currentPlayer.gold < 0) alert("You're out of gold!");
      prompt.innerHTML = "Select units to buy";
      buildUnitBuyList(tile);
    });
  };

  const moveUnits = tile => {
    move.innerHTML = "Move Units";
    move.addEventListener("click", () => {
      prompt.innerHTML = "Pick units to move";
      buildUnitMoveList(tile);
    });
  };

  prompt.innerHTML = `Choose your action`;

  canvasEl.addEventListener(
    "click",
    e => {
    let tile = Object(__WEBPACK_IMPORTED_MODULE_0__grid__["e" /* selectTile */])(e, worldBoard, canvasEl, centers, ctx);
    Object(__WEBPACK_IMPORTED_MODULE_0__grid__["d" /* renderWorldBoard */])(worldBoard, ctx);
    buy.innerHTML = "-";

    if (moveStarted){
      let fromCoords = [moveFromTile.x, moveFromTile.y, moveFromTile.z];
      let toCoords = [tile.x, tile.y, tile.z];
      let oneDiff = false;
      let twoDiff = false;
      for (let i = 0; i < toCoords.length; i++) {
        if (Math.abs(fromCoords[i] - toCoords[i]) === 1) {
          if (twoDiff) {
            twoDiff = false;
            break;
          }
          if (oneDiff) {
            twoDiff = true;
          } else {
            oneDiff = true;
          }
        }
        if (Math.abs(fromCoords[i] - toCoords[i]) > 1) {
          twoDiff = false;
          break;
        }
      }
      if (twoDiff) {
        let moveFromUnits = [];
        let moveToUnits = [];
        for (let i = 0; i < moveFromTile.units.length; i++) {
          let unit = moveFromTile.units[i];
          if (unit.selected) {
            unit.selected = false;
            moveToUnits.push(unit);
          } else {
            moveFromUnits.push(unit);
          }
        }
        moveFromTile.units = moveFromUnits;
        tile.units = moveToUnits;
        moveStarted = false;
        tile.owner = moveFromTile.owner;
        let toMove = document.getElementById("units");
        clearList(toMove);
      }
      Object(__WEBPACK_IMPORTED_MODULE_0__grid__["d" /* renderWorldBoard */])(worldBoard, ctx);
    } else {
      if (tile.attributes.mayPurchase && tile.owner === game.currentPlayer.name) {
        buyUnits(tile);
      }
      if (tile.canMoveUnits()) {
        moveUnits(tile);
        moveFromTile = tile;
        moveStarted = true;
      }
    }
  });


  Object(__WEBPACK_IMPORTED_MODULE_0__grid__["d" /* renderWorldBoard */])(worldBoard, ctx);
});


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__world_board__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__battle_board__ = __webpack_require__(10);






class Game {
  constructor(worldBoard) {
    this.board = worldBoard;
    this.setPlayers();
  }

  setPlayers() {
    this.player1 = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* default */]('player1', this.board);
    this.player2 = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* default */]('player2', this.board);
    this.currentPlayer = this.player1;
  }

  isEncounter(tile) {
    if (tile.owner === 'none') {
      return tile.attributes['encounterChance'] > Math.random();
    }
    return false;
  }

  isBattle(tile, player) {
    if (player.name === 'player1') {
      return tile.owner === 'player2';
    } else {
      return tile.owner === 'player1';
    }
  }

  battle(player1, player2, tile) {
    let battleBoard = new __WEBPACK_IMPORTED_MODULE_4__battle_board__["a" /* default */](player1, player2, tile);
    battleBoard.play();
  }

  switchPlayers() {
    if (this.currentPlayer.name === 'player1') {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  // play(prompt) {
  //   while (!this.isWon()) {
  //     this.currentPlayer.coin += 1;
  //     prompt.innerHTML = `${this.currentPlayer.name} choose buy or move`;
  //   }
  // }

  isWon() {
    console.log(this.board);
    return this.board.grid[3][0][-3].owner === 'player2' ||
           this.board.grid[-3][0][3].owner === 'player1';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class BattleBoard {

}

/* harmony default export */ __webpack_exports__["a"] = (BattleBoard);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map