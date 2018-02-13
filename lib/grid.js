let center = [40, 200];
let size = 30;
let startX = 65;
let startY = 160;

export const GRID_COORDS = {
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
  '246.86533479473212,205': ['y', 'z', 'x'],
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

export const onGridClick = (e, canvasEl, centers, ctx) => {
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
  buildHexGrid(ctx);
  hexagon(closest, ctx);
  ctx.fillStyle = 'rgba(0,200,0,0.2)';
  ctx.fill();
};

const hexCorner = (closest, i) => {
  let angleDeg = 60 * i + 30;
  let angleRad = Math.PI / 180 * angleDeg;
  return [closest[0] + size * Math.cos(angleRad),
          closest[1] + size * Math.sin(angleRad)];
};

export const hexagon = (closest, ctx) => {
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.beginPath();
  let point = hexCorner(closest, 0);
  ctx.moveTo(point[0], point[1]);
  for (let i = 1; i <= 6; i++) {
    point = hexCorner(closest, i);
    ctx.lineTo(point[0], point[1]);
  }
  ctx.closePath();
  ctx.stroke();
};

export const buildHexGrid = (ctx) => {
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
