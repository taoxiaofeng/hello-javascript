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
 * 移除链表元素
 * 通过递归的方式来移除链表元素  
 * 通过 head.next 不停的去查找链表的下一个值
 */
function removeElements(head, val) {
  // 考虑入口边界问题
  // 方法一：
  // if (head === null) {
  //   return head;
  // }

  // head.next = removeElements(head.next, val);
  // return head.val === val ? head.next : head;

  // 方法二：
  // 由于不停要进行if else判断，所以可以采用哨兵原则
  // 哨兵： 一个节点，指向链表的头节点
  // 哨兵.next = head;
  // 哨兵 => 1 => 2 => 3 => 4 => 5 => null
  // return 哨兵.next
  let ele = {
    next: head
  }
  let cur = ele;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return ele.next;
}

// 测试移除链表元素

// 输入[1,2,6,3,4,5,6]，val=6
let linkList = new LinkNodeList();
linkList.append(1);
linkList.append(2);
linkList.append(6);
linkList.append(3);
linkList.append(4);
linkList.append(5);
linkList.append(6);
linkList.print();

console.log(removeElements(linkList.head, 6));