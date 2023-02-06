/**
|         |
| | | |   |
|_|_|_|_|_|
*/

let walls = [3, 2, 2, 2, 1, 3]; // 8unit water

function numberOfUnit(walls) {
  let totalUnitWater = 0;
  for (let i = 0; i < walls.length - 1; i++) {
    totalUnitWater += Math.min(walls[i], walls[i + 1]);
  }
  return totalUnitWater;
}

console.log(numberOfUnit(walls));

Math.min;