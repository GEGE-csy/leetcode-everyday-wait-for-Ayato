// 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
// 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
// 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 首先这题可以二分！终于会了一题！
// 如果mid查到是好的，那么往后找，如果mid查到是坏的，这时候不能直接返回，因为坏的前面可能还有坏的
//                             作为第一个坏的的硬性条件是他前一个要是好的，如果不是好的，那就往前找
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1, right = n;
    while(left <= right) {
      let mid = left + ((right - left) >> 1)
      if(!isBadVersion(mid)) { // 好
        left = mid + 1;
      } else {
        if(!isBadVersion(mid-1)) {
            return mid;
        } else {
            right = mid - 1;
        }
      }
    }
  };
};