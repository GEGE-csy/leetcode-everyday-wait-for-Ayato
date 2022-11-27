// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

// 输入：s = "hello"
// 输出："holle"

/**
 * @param {string} s
 * @return {string}
 */
// 字符串的话是不能改的，所以转成数组来操作
// 一开始时间被卡测试点，注意左右指针匹配成功之后left和right也是要走的，不然会一直进入第一个if
//                        如果一边不匹配，那么另一边指针移动就好
//                        如果两边都不匹配，同时移动
 var reverseVowels = function(s) {
  const letters = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u','U'];
  let arr = s.split('');
  let left = 0, right = arr.length - 1;
  while(left < right) {
    if(letters.includes(arr[left]) && letters.includes(arr[right])) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++, right--;
    } else if(letters.includes(arr[left])) {
      right--;
    } else if(letters.includes(arr[right])){
      left++;
    } else {
      left++, right--;
    }
  }
  return arr.join('')
};