// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 第一次做出来dp 哈哈哈

// f[i,j]到达(i,j)的最小路径和
// f[0,0]=grid[0,0]
// 只能向右走，f[i,j] = f[i,j-1]+grid[i][j]
// 只能向下走，f[i,j] = f[i-1, j]+grid[i][j]
// 右和下都能走的时候，走路径和更小的方向，f[i,j] = min(f[i,j-1]+grid[i][j], f[i-1, j]+grid[i][j])
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  f[0][0] = grid[0][0];
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(i > 0 && j > 0) {
        f[i][j] = Math.min(f[i][j-1]+grid[i][j], f[i-1][j]+grid[i][j])
      } else if(j > 0) {
        f[i][j] = f[i][j-1]+grid[i][j]
      } else if(i > 0) {
        f[i][j] = f[i-1][j]+grid[i][j]
      }
    }
  }
  return f[m-1][n-1];
};