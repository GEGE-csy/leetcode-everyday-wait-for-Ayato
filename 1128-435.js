// 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。
// 返回 需要移除区间的最小数量，使剩余区间互不重叠 。

// 输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
// 输出: 1
// 解释: 移除 [1,3] 后，剩下的区间没有重叠。

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 按照区间末尾的数升序排序，这样排出来的第一个区间是一定要的！！
// 看到一个解释说可以类比成会议，要尽可能的多会议，第一个一定要选先结束的会议，因为先开始的不一定先结束
// 所以我们选定排序完之后的第一个区间的末尾值作为end，之后遍历其后的区间
// 如果之后区间的首位>=end，就说明可以要这个区间，并且要在这更新end为这个区间的末尾值。否则就是我们需要移除这个区间
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b) => a[1]-b[1]);
  let del = 0;
  let end = intervals[0][1];
  for(let i = 1; i < intervals.length; i++) {
    if(intervals[i][0] < end) {
      del++;
    } else {
      end = intervals[i][1];
    }
  }
  return del;
};