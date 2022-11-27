// 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
// 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// // 先对字符串数组进行排序，如果长度不同就按照字母序排，sort((a,b) => {a.localeCompare(b)}是按字母升序
// 指针p和指针q分别指向字符串s和字典中的字符串word。如果相等，p和q同时移动，如果不相等，p移动
// 考虑循环结束条件：p走完了但是q没走完应该结束，p没走完但是q走完了表示匹配成功应该结束，所以应该要两个长度一起限制

// // 最后证明匹配成功的条件是q走完了！！！（这个一定要想清楚，p走完了只不能证明匹配成功的        
 var findLongestWord = function(s, dictionary) {
  dictionary.sort((a,b) => {
    if (a.length === b.length) {
        return a.localeCompare(b);
    }
    return b.length - a.length;
  })
  for(let i = 0; i < dictionary.length; i++) {
    let p = 0, q = 0;
    let word = dictionary[i];
    while(p !== s.length && q !== word.length) {
      if(s[p] === word[q]) {
          q++;
      } 
      p++;
    }
    if(q === word.length) {
      return word;
    } 
  }
  return "";
};