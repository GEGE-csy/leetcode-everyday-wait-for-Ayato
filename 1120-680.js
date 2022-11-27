// 给你一个字符串 s，最多可以从中删除一个字符。
// 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false

// 输入：s = "aba"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
// // 当左右的字符不同时，可以考虑删掉左边的字母或者删掉右边的字母，然后再判断当前的字符串是否是回文字符串

// // 这里用数组的splice直接删除，然后用reverse()判断是否回文，这样其实好像挺慢的。。但是我的感觉是思想比较简单

// // 注意：arr赋值给arr1和arr2的时候，不能直接浅拷贝，否则指向同一个地址
// //     判断数组是否等于reverse()之后的时候也不能直接比较，因为arr和arr.reverse()也指向同一个地址，所以拼接字符串之后比较字符串了
 var validPalindrome = function(s) {
  let arr = s.split('');
  let left = 0, right = arr.length - 1;
  while(left <= right) {
    if(arr[left] === arr[right]) {
      left++, right--;
    } else {
      let arr1 = arr.concat([]);
      let arr2 = arr.concat([]);
      arr1.splice(left, 1);
      arr2.splice(right, 1);
      if(arr1.join('') === arr1.reverse().join('')) {
          return true;
      }
      if(arr2.join('') === arr2.reverse().join('')) {
          return true;
      }
      return false;
    }
  }
  return true;
};