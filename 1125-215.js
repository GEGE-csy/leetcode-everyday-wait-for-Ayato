// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// // 快排
// 时间复杂度最好nlogn，最坏n^2
 var findKthLargest = function(nums, k) {
  const partition = (left, right) => {
    let p = left, q = right;
    let pivot = nums[left];
    while(p < q) {
      while(nums[q] >= pivot && p < q) {
        q--;
      }
      nums[p] = nums[q];
      while(nums[p] <= pivot && p < q) {
        p++;
      }
      nums[q] = nums[p];
    }
    nums[p] = pivot;
    return p;
  }
  const quickSort = (left, right) => {
    if(left < right) {
      let mid = partition(left, right);
      quickSort(left, mid-1);
      quickSort(mid+1, right);
    }
  }
  quickSort(0, nums.length - 1);
  return nums[nums.length - k];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// // 归并排序
// 时间复杂度nlogn
 var findKthLargest = function(nums, k) {
  const merge = (result, left, mid, right) => {
    let p = left, q = mid+1;
    while(p <= mid && q <= right) {
      if(nums[p] <= nums[q]) {
          result.push(nums[p++]);
      } else {
          result.push(nums[q++]);
      }
    }
    while(q <= right) {
      result.push(nums[q++]);
    }
    while(p <= mid) {
      result.push(nums[p++]);
    }
    for(let i = 0; i < result.length; i++) {
      nums[left+i] = result[i];
    }
  }
  const mergeSort = (left, right) => {
    if(left < right) {
      let mid = (left+right) >> 1;
      mergeSort(left, mid);
      mergeSort(mid+1, right);
      let result = [];
      merge(result, left, mid, right);
    }
  }
  mergeSort(0, nums.length-1);
  return nums[nums.length - k];
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// // 堆排序
// 时间复杂度nlogn
var findKthLargest = function(nums, k) {
  const buildMaxHeap = (nums,i) => {
    while(nums[i] > nums[Math.floor((i-1)/2)]) {
      [nums[i], nums[Math.floor((i-1)/2)]] = [nums[Math.floor((i-1)/2)], nums[i]];
      i = Math.floor((i-1)/2);
    }
  }

  const heapify = (i, heapSize) => {
    let leftChild = i * 2 + 1;
    while(leftChild < heapSize) {
      let largerChild = (leftChild+1 < heapSize) && (nums[leftChild] < nums[leftChild+1]) ? leftChild+1 : leftChild;
      if(nums[largerChild] > nums[i]) {
        [nums[largerChild], nums[i]] = [nums[i], nums[largerChild]];
        i = largerChild;
        leftChild = i * 2 + 1;
      } else {
        return;
      }
    }
  }
  for(let i = 0; i < nums.length; i++) {
    buildMaxHeap(nums, i);
  }
  let heapSize = nums.length;
  [nums[0], nums[heapSize-1]] = [nums[heapSize-1], nums[0]];
  heapSize--;
  while(heapSize > 0) {
    heapify(0, heapSize);
    [nums[0], nums[heapSize-1]] = [nums[heapSize-1], nums[0]];
    heapSize--;
  }
  return nums[nums.length - k];
};