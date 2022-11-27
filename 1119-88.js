// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// // 这题有三个指针，i指向nums1尾部，m指向nums1中元素的尾部，n指向nums2的尾部
// // 从nums2最后取元素放进nums1的最后，然后指针i和指针n同时前移，终止条件是nums2的元素都放完了，也就是n<0了
// // 但是数组1已经有的元素可能比数组2中的元素大，这样数组2的元素直接加在数组1最后是不是有问题？
//        m .   i
// [1, 4, 6, 0, 0]
//     n
// [2, 3]
// 3不能直接和0换位，按理说3应该放在4、6前面，所以需要多一层循环，循环条件是nums1[m]>nums2[n],大于就将nums1[m]和nums1[i]交换
//     m     i  
// [1, 4, 0, 0, 6]
//     n
// [2, 3]
// m      i
// [1, 0, 0, 4, 6]
//     n
// [2, 3]
// 经过上面两轮，然后才能继续把nums2[n]放进nums1中，(nums2[n]和nums1[i]交换位置)
var merge = function(nums1, m, nums2, n) {
  let i = nums1.length - 1;
  m--, n--;
  while(n >= 0) {
    while(nums1[m] > nums2[n]) {
      // 交换nums1[m]和nums1[i]
      let tmp = nums1[m];
      nums1[m] = nums1[i];
      nums1[i] = tmp;
      m--, i--;
    }
    // 交换nums2[n]和nums1[i]
    let tmp = nums2[n];
    nums2[n] = nums1[i];
    nums1[i] = tmp;
    n--, i--;
  }
};