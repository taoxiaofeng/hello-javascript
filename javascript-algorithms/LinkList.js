// [1,2,3,4]

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


// 1 => 2 => 3 => 4
let linkList = new LinkNodeList();


linkList.append(1);
linkList.append(2); 
linkList.append(3);
linkList.append(4);
linkList.print();
console.log(linkList.length);