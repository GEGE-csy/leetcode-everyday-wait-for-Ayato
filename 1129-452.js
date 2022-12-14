// 有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 points ，其中points[i] = [xstart, xend] 表示水平直径在 xstart 和 xend之间的气球。你不知道气球的确切 y 坐标。
// 一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被 引爆 。
// 可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。
// 给你一个数组 points ，返回引爆所有气球所必须射出的 最小弓箭数 。

// 输入：points = [[10,16],[2,8],[1,6],[7,12]]
// 输出：2
// 解释：气球可以用2支箭来爆破:
// -在x = 6处射出箭，击破气球[2,8]和[1,6]。
// -在x = 11处发射箭，击破气球[10,16]和[7,12]。

// 比如有[1,2]和[1,3]，箭肯定要射在2，才能同时破两个球，那么其实就是根据右边边界先对球进行排序
// 第一根箭肯定是射在排序后的第一个位置的右边界，（否则没有箭能够射破第一个球了
// 然后如果第二个球的左边界在箭内，就可以射破，此时箭的数量不需要增加，边界也不需要变，继续往后遍历
// 当出现一个球的左边界不在箭内，表明需要多射出一根箭了，并且射出这根箭之后要更新右边界为这个球的右边界
/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  points.sort((a,b) => a[1]-b[1]);
  let right = points[0][1];
  let cnt = 1;
  for(let i = 1; i < points.length; i++) {
    if(points[i][0] > right) {
      cnt++;
      right = points[i][1]
    } 
  }
  return cnt;
};