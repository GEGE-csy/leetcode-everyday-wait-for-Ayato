// 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。
// 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// 因为这道分在二分查找的part，所以就用二分查找吧
// 遍历字符数组，遇到比target大的就判断一下是否要更新result，然后同时注意left和right指针的移动
// //注意：字符直接比较的话是比较ascii码值，A-Z是小于a-z的，然后result的初值赋为了‘{’，也没什么特别原因就是挑了字符z之后的第一个字符
var nextGreatestLetter = function(letters, target) {
  let left = 0, right = letters.length - 1;
  let result = '{';
  while(left <= right) {
    let mid = left + ((right-left)>>1);
    if(letters[mid] > target) {
      result = result < letters[mid] ? result : letters[mid]; 
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result === '{' ? letters[0] : result;
};