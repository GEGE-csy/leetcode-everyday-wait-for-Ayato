// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 没看出贪心思想。。感觉双指针的时候做过比这个复杂的，没想到我还记得orz
// p和q分别遍历s和t，如果p没走完s说明s在t中没有全部找到
 var isSubsequence = function(s, t) {
  let p = 0, q = 0;
  while(p !== s.length && q !== t.length) {
    if(s[p] === t[q]) {
      p++;
    } 
    q++;
  }
  return p === s.length
};