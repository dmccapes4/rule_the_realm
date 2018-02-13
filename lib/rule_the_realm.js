import {
  GRID_COORDS,
  hexagon,
  buildHexGrid,
 } from './grid';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

  let center = [40, 200];
  let size = 30;
  let startX = 65;
  let startY = 160;



  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillStyle = 'rgb(0, 0, 255)';

  let centers = buildHexGrid(center, size, startX, startY, ctx);

  canvasEl.addEventListener("click", e => {
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
    console.log(GRID_COORDS[`${closest}`]);
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    buildHexGrid(center, size, startX, startY, ctx);
    hexagon(closest, size, ctx);
    ctx.fillStyle = 'rgba(0,200,0,0.2)';
    ctx.fill();
  });

});
