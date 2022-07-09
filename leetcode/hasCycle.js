class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    let node = new Node(val);
    if (!this.head) {
      // 如果没有head节点，链表是空的，把要创建的节点赋值给 head节点
      this.head = node;
    } else {
      // 找到链表的最后一个节点，把这个节点的 next 属性赋值为 node
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length++;
  }

  print() {
    let cur = this.head;
    let ret = '';
    if (this.head) {
      do {
        ret += cur.val + '=>';
        cur = cur.next;
      } while (cur.next);
      ret += cur.val;
      console.log(ret);
    } else {
      console.log(`empty`);
    }
  }
}

/**
 * 环形链表
 * 如果链表中存在环，则返回true，否则返回false。
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 方法一：
  // 缓存节点
  // 时间负责度 O(n)
  // let cache = new Set();
  // while (head) {
  //   // 如果 cache 中存在head 就表示有环
  //   if (cache.has(head)) {
  //     return true;
  //   } else {
  //     cache.add(head);
  //   }
  //   // 向下查找
  //   head = head.next;
  // }
  // return false;

  // 方法二：
  // 快慢指针
  // 时间复杂度 O(1)
  let slow = head;  // 慢指针
  let fast = head;  // 快指针
  while (fast && fast.next) {
    slow = slow.next; // 慢指针向下移动一个节点
    fast = fast.next.next;  // 快指针向下移动二个节点
    if (slow === fast) { // 如果慢指针和快指针相遇，说明有环
      return true;
    }
  }
  // 如果没有环，则快指针会走到最后，慢指针也会走到最后
  return false;
}

// 测试环形链表
let list = new LinkNodeList();
list.append(3);
list.append(2);
list.append(0);
list.append(-4);
list.append(2);
list.append(0);
list.append(-4);
list.append(2);
list.append(0);
list.append(-4);
// ......
list.print();

console.log(hasCycle(list.head));