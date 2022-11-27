// 给定一个字符串 s ，根据字符出现的 频率 对其进行 降序排序 。一个字符出现的 频率 是它出现在字符串中的次数。
// 返回 已排序的字符串 。如果有多个答案，返回其中任何一个。

// 输入: s = "tree"
// 输出: "eert"
// 解释: 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。

/**
 * @param {string} s
 * @return {string}
 */
// 在map中存每个字母及其频率（字母为key，频率为value，然后转成数字按照频率value降序排序
// 最后返回的时候是要单个字母*频率的，用了repeat()函数，'a'.repeat(2) = 'aa'
var frequencySort = function(s) {
  const map = new Map();
  // Map(3) { 't' => 1, 'r' => 1, 'e' => 2 }
  for(let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0)+1);
  }
  // [ [ 't', 1 ], [ 'r', 1 ], [ 'e', 2 ] ]
  const array = Array.from(map);
  // [ [ 'e', 2 ], [ 't', 1 ], [ 'r', 1 ] ]，按照频率排序
  array.sort((a,b) => b[1]-a[1]);
  let str = '';
  for(let i = 0; i < array.length; i++) {
    // ee
    // t
    // r
    console.log(array[i][0].repeat(array[i][1]));
    str += array[i][0].repeat(array[i][1])
  }
  return str;
};