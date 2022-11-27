// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 必须在不使用库的sort函数的情况下解决这个问题。

// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // 荷兰国旗问题
// 题目中只会出现0，1，2，要将数分成三段，[0,l-1]放0，[r+1,n-1]放2，[l,idx-1]放1，同时idx也是处理当前值的指针
// 指针l和指针idx初始化0，指针r初始化n-1
// 当指针idx指向2，要与指针r交换，并且指针r前移动，这里idx不能后移，因为无法确定指针r指向的是什么
// 当指针idx指向1，无需交换，指针idx后移即可，因为[l, idx-1]是放1的区间，指针l不要动（由0控制的
// 当指针idx指向0，要与指针l交换，并且指针l和指针idx一起后移，（指针l后移表示0区间增大，idx后移表示1区间要后挪
 var sortColors = function(nums) {
  let l = 0, r = nums.length-1;
  let idx = 0;
  while(idx <= r) {
      if(nums[idx] === 0) {
          // 交换0和nums[l]
          [nums[l], nums[idx]] = [nums[idx], nums[l]];
          idx++, l++;
      } else if(nums[idx] === 1) {
          idx++;
      } else {
          // 交换2和nums[r]
          [nums[r], nums[idx]] = [nums[idx], nums[r]];
          // 这里idx不能加，因为不确定nums[r]换过来的数是什么
          r--;
      }
  }
};