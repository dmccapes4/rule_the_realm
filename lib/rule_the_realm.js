import {
  GRID_COORDS,
  hexagon,
  buildHexGrid,
  onGridClick,
 } from './grid';
 import WorldBoard from './world_board';

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

  canvasEl.addEventListener(
    "click",
  e => (onGridClick(e, canvasEl, centers, ctx))
);

});
