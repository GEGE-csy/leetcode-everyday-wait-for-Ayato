// 给你一个整数数组 nums，请你将该数组升序排列。

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// // 堆排序
// 要求升序就建大顶堆，降序就小顶堆
// 建大顶堆的时候，从上到下，从左往右，把每个父节点换成最大的就行
// 建完大顶堆之后，要将堆顶元素放在数组最后，然后要给前面其他的元素重新建堆
// 每次建完堆，将堆顶元素放在数组最后，结束就会排成一个升序的数组

// 建大顶堆
const buildMaxHeap = (nums, i) => {
  // i的左孩子是2n+1，右孩子是2n+2，父亲是i-1/2
  while(nums[i] > nums[Math.floor((i-1)/2)]){ // 插入的元素和父元素比较
      [nums[i], nums[Math.floor((i-1)/2)]] = [nums[Math.floor((i-1)/2)], nums[i]];
      i = Math.floor((i-1)/2);
  }
}
// 交换堆顶和末尾的元素，不断重复
const heapify = (nums, i, heapSize) => {
  // 自上而下，自左向右
  // nums[i]表示当前堆顶元素
  // 堆顶的左孩子下标
  let leftChild = i * 2 + 1;
  while(leftChild < heapSize) {
      // 左右孩子中找到更大的那个孩子
      let biggerChild = (leftChild+1 < heapSize) && (nums[leftChild+1] > nums[leftChild]) ? leftChild+1: leftChild;
      // 如果孩子比父亲大
      if(nums[biggerChild] > nums[i]) {
          // 就交换
          [nums[biggerChild], nums[i]] = [nums[i], nums[biggerChild]];
          // i赋值为交换后的下标，继续查
          i = biggerChild;
          leftChild = i * 2 + 1;
      } else {
          return;
      }
     
  }
}
var sortArray = function(nums) {
  // 遍历数组建一个初始的大顶堆
  for(let i = 0; i < nums.length; i++) {
      buildMaxHeap(nums, i);
  }
  let heapSize = nums.length;
  // 交换堆顶和最末尾的元素
  [nums[0], nums[heapSize-1]] = [nums[heapSize-1], nums[0]];
  heapSize--;
  while(heapSize > 0) {
      // 交换完要重新建堆
      heapify(nums, 0, heapSize);
      // 继续交换堆顶和末尾的元素，不断重复
      [nums[0], nums[heapSize-1]] = [nums[heapSize-1], nums[0]];
      heapSize--;
  }
  return nums;
};