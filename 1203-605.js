// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。
// 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

// 输入：flowerbed = [1,0,0,0,1], n = 1
// 输出：true
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 貌似我没有用到贪心思想、、、感觉就是看是0的地方左右是不是1，不是1或者是边界的话就能种，种完之后把那个地方改成1
// 之后判断n是否种完了就行
// n!==0的判断条件其实也可以不加，只要最后改成return n === 0就行
// （如果说没加n!==0的判断，最后可能n会减成负数（属于能种的花多多了，取反会return false
 var canPlaceFlowers = function(flowerbed, n) {
  for(let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i] === 0 && n !== 0){
      if((!flowerbed[i-1] || flowerbed[i-1] !== 1 )&& (!flowerbed[i+1] || flowerbed[i+1] !== 1)){
        n--;
        flowerbed[i] = 1
      }
    }
  }
  return !n;
};