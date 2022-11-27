// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

// 输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5


/**
 * @param {number} c
 * @return {boolean}
 */
// // 双指针，向中间靠拢，a和b可以相等
// // 注意初始化right，否则会超出时间限制
// // (a+b)^2 = a^2+b^2+2ab，也就是说c < (a+b)^2，当a=0时，c<根号b
// // 所以b初始化为根号c，向下取整(因为根号c以上的数都是不可能的了，又要求是整数)
 var judgeSquareSum = function(c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while(left <= right) {
    if(left * left + right * right === c) {
        return true;
    } else if(left * left + right * right < c) {
        left++;
    } else {
        right--;
    }
  }
  return false;
};