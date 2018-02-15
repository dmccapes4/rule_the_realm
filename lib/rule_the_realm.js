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
  const option0 = document.getElementById("option0");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const option5 = document.getElementById("option5");
  const options = [
    option0, option1, option2, option3, option4, option5
  ];

  const buyUnits = tile => {
    buy.innerHTML = "Buy Units";
    buy.addEventListener("click", () => {
      prompt.innerHTML = "select units to buy";
      for (let i = 0; i < tile.availableUnits.length; i++) {
        options[i].innerHTML = tile.availableUnits[i].type;
        options[i].addEventListener("click", () => {
          let units = tile.availableUnits.slice(i, tile.availableUnits.length)
            .concat(tile.availableUnits.slice(0, i));
          tile.addUnit(units.pop());
          tile.availableUnits = units;

          for (i = 0; i < options.length; i++) {
            if (tile.availableUnits[i]) {
              options[i].innerHTML = tile.availableUnits[i].type;
            } else options[i].innerHTML = "-";
          }
          renderWorldBoard(worldBoard, ctx);
        });
      }
    });
  };

  const moveUnits = tile => {
    move.innerHTML = "Move Units";
    move.addEventListener("click", () => {
      prompt.innerHTML = "pick units to move";
      let unitsToMove = [];
      for (let i = 0; i < options.length; i++) {
        if (tile.units[i]) {
          options[i].innerHTML = tile.units[i].type;
        } else options[i].innerHTML = "-";
        options[i].addEventListener("click", () => {
          options[i].style.border = "thick solid blue";
        });
      }
    });
  };

  prompt.innerHTML = `make your move`;

  canvasEl.addEventListener(
    "click",
    e => {
    let tile = selectTile(e, worldBoard, canvasEl, centers, ctx);
    renderWorldBoard(worldBoard, ctx);
    buy.innerHTML = "-";
    prompt.innerHTML = "make your move";
    for (let i = 0; i < options.length; i++) {
      options[i].innerHTML = "-";
    }
    if (tile.attributes.mayPurchase && tile.owner === game.currentPlayer.name) {
      buyUnits(tile);
    }
    if (tile.canMoveUnits()) {
      moveUnits(tile);
    }
  });


  renderWorldBoard(worldBoard, ctx);
});
