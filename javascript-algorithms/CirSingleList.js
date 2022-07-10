/**
 * 单项循环列表
 */
class CirSingleList {
  constructor() {
    super();
  }
  
  // 单项循环链表中寻找最后一个节点
  findLast() {
    let currNode = this.head;
    let count = 0;
    while (count++ !== this.size) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 在单循环列表中寻找数据
  find(item) {
    let currNode = this.head;
    let lastNode = this.findLast();  // 最后一个节点
    while (currNode.data !== item) {
      if(currNode === lastNode) {
        currNode = null;
        break;
      }
      currNode = currNode.next;
    }
    return currNode;
  }

  // 在数据为item的节点前插入一个数据为element元素的节点
  insert(item, element) {}

  remove(item) {}

  display() {}


  // 在尾部添加数据
  append(element) {}
}