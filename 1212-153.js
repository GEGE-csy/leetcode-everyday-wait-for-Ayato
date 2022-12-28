// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

// 输入：nums = [3,4,5,1,2]
// 输出：1
// 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 也不知道是题的问题还是我的问题，我现在已经中等题都能不看题解做出来了吗。。。？好
// 观察了一下样例，发现所求的就是数组中旋转次数的后一个数，比如[3,4,5,1,2]，旋转了4次，要的就是第5个数
// 所以我先通过遍历把旋转次数求出来了
// 然后实际上有一种情况是旋转了数组长度次数之后，数组恢复了原样，这时候所求的就是数组的第一个数
var findMin = function(nums) {
  let cnt = 1;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i+1] >= nums[i]) {
      cnt++;
    } else {
      break;
    }
  }
  return cnt === nums.length ?  nums[0] : nums[cnt];
};

// // 二分法
// 毕竟是二分专题，还是思考了一下用二分法也能做，但不知道为啥时间复杂度比上面那个还高😭菜死我了
// 要找到旋转后的最小元素，他的前一个数绝对比他大，这样的数数组里肯定只有一个，这个数左边在递增右边也在递增
// 如果mid值大于right值，说明现在筛查的部分是旋转后的递增部分，那就left后移，向后查
// 如果mid值小于right值，现在筛查的部分就是旋转前的递增部分，那就right前移，向前查，因为要找的最小元素在旋转前也是在最前面的！

// 上面说的其实是不考虑旋转了多少次后恢复成原数组的情况，那么循环走完最后不管是旋转0次还是恢复原状，返回第一个元素就行
var findMin = function(nums) {
  let left = 0, right = nums.length-1;
  for(let i = 0; i < nums.length; i++) {
    let mid = left + ((right-left)>>1);
    if(nums[mid]<nums[mid-1]) {
      return nums[mid]
    } else {
      if(nums[mid]>nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[0]
};