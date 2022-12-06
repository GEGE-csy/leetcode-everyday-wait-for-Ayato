// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
/**
 * @param {number[]} prices
 * @return {number}
 */

// 一开始使用了暴力算法，[7,1,5,3,6,4]，双重循环遍历每一个差值，最后卡了3个样例超出了时间限制
// 看了题解之后发现只要一边改变最小价格就可以了，真的蠢死我
// 记得minPrice一开始设一个比较大的值，
// 假设当遍历到1的时候，小于此时的minPrice7，按之前双重循环可能要继续遍历1后面的数算差值
// 但其实不用，将minPrice改为1必定跟后面的数相差更大
 var maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    } else if(prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};