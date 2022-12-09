// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 这道题感觉肯定做过，但是这次还是只能写个七八。。还是差一丁点没有做出来
// 简单来说就是遍历数组，一个一个加进sum里，然后用一个max记录最大的和，如果sum更大就更新max为sum
// 但是我一开始错误的想法是如果sum小于max，就将sum赋为0重新开始记录一段子序列，
// 但其实比如5、4、-1、7,sum新加了一个-1，此时sum=8，max=9，这时候不能更新max，但是也不要重新开始记录，因为后面还有7！！要是从-1开始从头记肯定是没有加上5和4大的
// 所以注意！！！sum一旦开始小于0了，再从头开始记，因为等同于前面的sum加上后面的还不如后面的本身大，那么我们就从头开始记！

// 并且注意max一定要初始化为最小的值
var maxSubArray = function(nums) {
  let sum = 0
  let max = Number.MIN_SAFE_INTEGER
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if(sum >= max) {  
      max = sum
    } 
    if(sum < 0) {
      sum = 0
    }
  }
  return max;
};