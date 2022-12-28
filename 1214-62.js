/*
 * @Author: AIpoem
 * @Date: 2022-12-27 12:43:33
 * @LastEditors: AIpoem
 * @LastEditTime: 2022-12-27 16:11:29
 */
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 动态规划的不同路径问题

// f[i,j]为到达(i,j)的路径数
// f[0,0] = 1
// 如果向右走，f[i,j] = f[i,j-1]，意义为到达(i,j)的路径数实际上就是为到达(i,j-1)的路径数，因为从(i,j-1)到(i,j)就只是向右走了一步
// 如果向下走，f[i,j] = f[i-1, j]
// 如果向右下走，f[i,j] = f[i,j-1] + f[i-1, j]

// f[i][j]，i控制上下，j控制左右。。。分了好久才分清。。😭讨厌二维数组
 var uniquePaths = function(m, n) {
  // 二维数组定义的方式，全部赋值为0
  let f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  f[0][0] = 1;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      // 不处在第一行或第一列，可以向右或向下走
      if(i > 0 && j > 0) {
        f[i][j] = f[i-1][j] + f[i][j-1];
      }
      // i = 0，在第一行，只能向右走
      else if(j > 0) { 
        f[i][j] = f[i][j-1]
      }
      // j = 0， 在第一列，只能向下走
      else if(i > 0) { 
        f[i][j] = f[i-1][j];
      }
    }
  }
  return f[m-1][n-1]
};