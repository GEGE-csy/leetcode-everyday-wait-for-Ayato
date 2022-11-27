// 给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// // 判断是否有环：快慢指针，快走两步慢走一步，有环必然会相遇
// // 这里循环条件只有一个fast不为null不够，还需要fast.next不为null，否则后面的fast.next.next会报错！
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    // 快指针走两步
    fast = fast.next.next;
    // 慢指针走一步
    slow = slow.next;
    if(fast === slow) {
      return true;
    }
  }
  return false;
};