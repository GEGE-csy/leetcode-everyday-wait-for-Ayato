// 给你一个长度为 n 的整数数组 nums ，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
// 我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 这道题不像想象中的那么简单（一开始通过计算nums[i+1]<num[i]的个数，然后出现第一个错误样例3、4、2、3
// 在题解中找到了一个我比较喜欢的思路：遇到nums[i+1]<num[i]时，(1)可以选择将nums[i]缩小到nums[i+1]，或者(2)将nums[i+1]放大到nums[i]
//  选择哪种取决于首先，不能因为缩小nums[i]导致破坏i以前的非递减性，也不能因为放大nuns[i+1]破坏i+1以后的非递减性
// 但是i+1之后是否是非递减，我们是不知道的，所以我们用缩小nums[i]会不会破坏i以前的非递减性这个来做判断就好
// 如果nums[i+1]>=nums[i-1]，那么缩小nums[i]，就能使三者符合非递减性，如果nums[i+1]<nums[i-1]，缩小nums[i]也没用，那么就放大nums[i+1]，总之只能修改一次
// 用flag控制只能修改一次，并且注意由于i-1、i、i+1都存在，循环必须从1开始在尾部-1处结束
var checkPossibility = function(nums) {
  let flag = nums[0] <= nums[1];
  for(let i = 1; i < nums.length - 1; i++) {
    if(nums[i+1] < nums[i]) {
      if(flag) {
        if(nums[i+1] >= nums[i-1]) {
          nums[i] = nums[i+1]
        } else {
          nums[i+1] = nums[i]
        }
        flag = false;
      } else {
        return false;
      }
    }
  }
  return true;
};