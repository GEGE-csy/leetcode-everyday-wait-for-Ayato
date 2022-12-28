
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
// 网格中的障碍物和空位置分别用 1 和 0 来表示。

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 对比上一题只是多了障碍物，需要多加一个条件，以及最初始位置的赋值也要做一个判断
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 原数组如果为1，表明(0,0)处有障碍物
  f[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(obstacleGrid[i][j] === 0) {
        if(i > 0 && j > 0) {
          f[i][j] = f[i][j-1] + f[i-1][j];
        } else if(j > 0) { // 只能向右走
          f[i][j] = f[i][j-1]
        } else if(i > 0) {
          f[i][j] = f[i-1][j]
        }
      }
    }
  }
  return f[m-1][n-1];
};