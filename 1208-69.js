// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
/**
 * @param {number} x
 * @return {number}
 */

// 听说这道题是面试常考题，这里用的是二分查找法，看了一下其他方法太复杂了不适合我（牛顿迭代等
// 1.计算mid最好用mid = left + (right-left)/2,这样不会出现加法溢出问题
// 2.这道题在mid*mid=x的时候return答案就不太对，最后答案因为向下取整了，可能是<x的
//   也就是说mid*mid=x，mid一定为所求，mid*mid<x时可能为所求
// 3.卡住的点是一开始在return result的时候使用了Math.floor()，然后就挺多测试点过不去的
//   比如x=5,第一次mid取2.5，第二次mid取0.75，最后就会返回0
//   刚刚本来没想明白为啥要在前面向下取整，做到下一题的时候想起来以前用c++写的时候就是会默认向下取整，可能这里就需要这样写吧🤔
var mySqrt = function(x) {
  if(x < 2) {
    return x;
  }
  let left = 0, right = x;
  let result = 0;
  while(left <= right) {
    // 等价于left + Math.floor((right-left)/2)
    let mid = left + ((right-left)>>1);
    if(mid * mid <= x){
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};