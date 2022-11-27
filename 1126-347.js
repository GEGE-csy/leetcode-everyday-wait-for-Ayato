// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。
// 你可以按 任意顺序 返回答案。

// 输入: nums = [2,2,1,1,1,3], k = 2
// 输出: [1,2]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 在map中存每个数及其频率（数为key，频率为value，然后转成数组按照频率value降序排序
// 就是取前k个频率value对应的key作为答案，这里直接用shift()取完就删除
 var topKFrequent = function(nums, k) {
  const map = new Map();
  // Map(3) { 2 => 2, 1 => 3, 3 => 1 }
  for(let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  // [ [ 2, 2 ], [ 1, 3 ], [ 3, 1 ] ]
  const array = Array.from(map);
  // [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]，按照频率排序
  array.sort((a,b) => b[1]-a[1]);
  let result = [];
  for(let i = 0; i < k; i++) {
    // 取第一对，并删掉
    const resArray = array.shift();
    result.push(resArray[0]);
  }
  return result;
};