// 给你一个整数数组 nums，请你将该数组升序排列。

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// // 归并排序
// 5 2 9 1 3 6 先拆成 5 2 9和 1 3 6，再分别拆成5 2、9、1 3、6四个部分，各部分分开排序，最后再合并
 var sortArray = function(nums) {
  const merge = (nums, result, left, mid, right) => {
    // p先指向左边部分，q先指向右边部分，左右是由mid分出来的
    let p = left, q = mid + 1;
    while(p <= mid && q <= right) {
      // 挑出小的放进新数组
      if(nums[p] < nums[q]) {
        result.push(nums[p]);
        p++;
      } else {
        result.push(nums[q]);
        q++;
      }
    }
    // 表明不满足p <= mid了，说明左半部分已经走完了，直接把右部分放进新数组
    while(q <= right) {
      result.push(nums[q]);
      q++;
    }
    // 表明不满足q <= right了，说明右半部分已经走完了，直接把左部分放进新数组
    while(p <= mid) {
      result.push(nums[p]);
      p++;
    }
    // 要把结果复制回原数组，或者直接在函数中返回result作为结果也可以吧
    for(let i = 0; i < result.length; i++) {
        nums[left+i] = result[i];
    }
  }
  const mergeSort = (nums, left, right) => {
    if(left < right) {
      // 这句话等效于let mid = Math.floor((left+right) / 2)
      let mid = (left+right) >> 1;
      mergeSort(nums, left, mid);
      mergeSort(nums, mid+1, right);
      let result = [];
      merge(nums, result, left, mid, right);
    }
  }
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};