// 给你一个整数数组 nums，请你将该数组升序排列。

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// // 快速排序 时间复杂度最好nlogn，最坏n^2
// 5 2 9 1 3 6  默认选最左边是主元
// p         q
// 首先小循环，q先往前走，遇到比主元5小的数字3，就把p的位置赋值为3
// 5 2 9 1 3 6      
// p       q        
// 3 2 9 1 3 6
// p .     q
// 进入下一个小循环，p往后走， 遇到比主元5大的数字9，就把q的位置赋值为9
// 3 2 9 1 3 6      
// p .     q        
// 3 2 9 1 9 6
//     p   q

// p<q，再次进入大循环
// q往前走，遇到比主元5小的数字1，就把p的位置赋值为1
// 3 2 1 1 9 6
//     p q
// p往后走，遇到比主元5小的数字1，就把q的位置赋值为1
// 3 2 1 1 9 6
//      pq
// 然后大循环也结束了，将p和q的位置赋值为主元5
// 3 2 1 5 9 6 这是第一次快排
// 之后采用递归排序 主元5的 左边3 2 1 和 右边9 6
var sortArray = function(nums) {
  const partition = (nums, left, right) => {
    let pivot = nums[left];
    let p = left, q = right;
    while(p < q) {
      // 注意p < q不要忘记写！！防止q走到p前面
      while(nums[q] >= pivot && p < q) {
        q--;
      }
      nums[p] = nums[q];
      // 注意p < q不要忘记写！！防止p走到q后面
      while(nums[p] <= pivot && p < q) {
        p++;
      }
      nums[q] = nums[p];
    }
    nums[p] = pivot;
    return p;
  }
  const quickSort = (nums, left, right) => {
    if(left < right) {
      let mid = partition(nums, left, right);
      // 传入左边的部分递归继续排序
      quickSort(nums, left, mid - 1);
      // 传入右边的部分递归继续排序
      quickSort(nums, mid + 1, right);
    }
  }
  quickSort(nums, 0, nums.length - 1);
  return nums;
};