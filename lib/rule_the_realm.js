import {
  GRID_COORDS,
  hexagon,
  buildHexGrid,
  selectTile,
  renderWorldBoard
 } from './grid';
 import WorldBoard from './world_board';
 import Player from './player';
 import Game from './game';
 import _ from 'lodash';

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const body = document.getElementsByTagName("body")[0];
  body.addEventListener("click", () => (modal.classList.add("close")));
  const main = document.getElementById("main");

  let worldBoard = new WorldBoard();

  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillStyle = 'rgb(0, 0, 255)';

  let centers = buildHexGrid(ctx);

  let game = new Game(worldBoard);

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
          if (!units[i].worldMoved)
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
          renderWorldBoard(worldBoard, ctx);
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

  const switchPlayers = () => {
    if (game.currentPlayer.name === "player1") {
      game.currentPlayer = game.player2;
    } else {
      game.currentPlayer = game.player1;
    }
    game.currentPlayer.gold += 1;
    console.log(game.currentPlayer);
  }
  const endTurn = document.getElementById("end");

  endTurn.addEventListener("click", switchPlayers);

  prompt.innerHTML = `Choose your action`;

  canvasEl.addEventListener(
    "click",
    e => {
    let tile = selectTile(e, worldBoard, canvasEl, centers, ctx);
    renderWorldBoard(worldBoard, ctx);
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
            unit.worldMoved = true;
            tile.units.push(unit);
          } else {
            moveFromUnits.push(unit);
          }
        }
        moveFromTile.units = moveFromUnits;
        moveStarted = false;
        tile.owner = moveFromTile.owner;
        let toMove = document.getElementById("units");
        clearList(toMove);
      }
      renderWorldBoard(worldBoard, ctx);
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


  renderWorldBoard(worldBoard, ctx);
});
