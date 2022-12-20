// 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
// 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
// 返回一个表示每个字符串片段的长度的列表
/**
 * @param {string} s
 * @return {number[]}
 */
// 先遍历一遍字符串，将字符串中的每个字母的最后出现位置保存在map中
// 再次遍历字符串，我们取得当前字母的最后出现位置，就是说当前区间的end是不会小于当前字母的最后出现位置的（不然在另一个区间中就会有这个字母，不符合题意
// 将end和当前字母的最后出现位置比较，取更大的为end
// 当遍历到end的位置，表明这个区间要结束了，就计算长度存入结果，并且更新start，开始下一个区间
var partitionLabels = function(s) {
  let start = 0, end = 0;
  const map = new Map();
  for(let i = 0; i < s.length; i++) {
    if(!map.has(s[i])) {
      map.set(s[i], i)
    } else {
      if(i > map.get(s[i])) {
        map.set(s[i], i);
      }
    }
  }
  let result = [];
  for(let i = 0; i < s.length; i++) {
    let endI = map.get(s[i]);
    end = Math.max(end, endI);
    if(i === end) {
      result.push(endI - start + 1);
      start = end + 1;
    }
  }
  return result;
};