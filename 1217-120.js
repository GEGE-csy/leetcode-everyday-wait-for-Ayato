// 给定一个三角形 triangle ，找出自顶向下的最小路径和。
// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
// 也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// f[i,j]：到达(i,j)的最小路径和
// f[0,0] = triangle[0,0]
// 2
// 3 4
// 6 5 7
// 4 1 8 3
// 走下：f[i,j] = f[i-1, j]+triangle[i,j]
// 走左下：f[i,j] = f[i-1,j-1]+triangle[i,j]
// 只要j不等于0，不是第一列，都能从左上转移来
// 只要j不等于i，不是每行最后一个数，都能从上方转移来
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let f = new Array(n).fill(0).map(() => new Array(n).fill(0));
  f[0][0] = triangle[0][0];
  for(let i = 1; i < n; i++) {
    for(let j = 0; j <= i; j++) {
      if(j === 0) {
        f[i][j] = f[i-1][j]+triangle[i][j]
      } else if(j === i) {
        f[i][j] = f[i-1][j-1]+triangle[i][j]
      } else if(j!== 0 && j !== i){
        f[i][j] = Math.min(f[i-1][j]+triangle[i][j], f[i-1][j-1]+triangle[i][j])
      }
    }
  }
  // 取最后一行最小的
  return Math.min(...f[n-1])
};