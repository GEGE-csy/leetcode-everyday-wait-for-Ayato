// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
// 请你找出并返回只出现一次的那个数。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

/**
 * @param {number[]} nums
 * @return {number}
 */
// // 我的脑子也就能想出速度和空间都击败5%的法子了。。。
// 遍历，存map里，然后查次数
var singleNonDuplicate = function(nums) {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.set(nums[i], map.get(nums[i])+1)
    }
  }
  for(let [key, value] of map) {
    console.log(key, value)
    if(value === 1) {
      return key;
    }
  }
};

// // 异或
// 第一次了解，感觉很神奇
// x ^ x = 0，x异或x是0，x异或0是x
// => x的奇数次异或一定是x，偶数次异或是0
// 并且异或运算不分顺序，不过本题是有序，无所谓咯，并且还有交换律啥的，随便换
// 所以本题中两个数异或，偶数次异或会得到0，也就是所有的两个数全部异或，最后得到的都是0
// 0异或那个单独的数就会是那个单独的数（0 ^ x = x)
var singleNonDuplicate = function(nums) {
  let ans = 0;
  for(let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i]
  }
  return ans
};

// // 奇偶法
// 这个我感觉过于需要找规律了，我这脑子找不过来的。。看题解
// 这组数中假设先不考虑单个那数，成对数的第一个对应一定是偶数下标
// 单个数的加入不会影响他前面的，只会影响后面的，
//      也就是单个数前面的成对数的第一个还是一定是偶数下标，后面的成对数的第一个就一定是奇数下标了
// 因此可以判断，如果一个数是偶数下标 => 他一定跟后一个数相等才是成对数 => 否则是单个数
//              如果一个数是奇数下标，并且他和他后一个数相等，那么这是一对成对数 => 这个数前一个数必是单个数
var singleNonDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(i % 2 === 0) {
      if(nums[i] !== nums[i+1]) {
        return nums[i]
      }
    } else {
      if(nums[i] === nums[i+1]) {
        return nums[i-1]
      }
    }
  }
};

