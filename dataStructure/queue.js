/**
 * queue 先进先出
 * enqueue 入队
 * dequeue 出队
 * front 查看队列头
 * isEmpty 检查队列是否为空
 * size 获取队列长度
 */

var Queue = function () {
  var items = [];

  // 入队
  this.enqueue = function (element) {
    items.push(element);
  }

  // 出队
  this.dequeue = function () {
    return items.shift();
  }

  // 查看队列头
  this.front = function () {
    return items[0];
  }

  // 检查队列是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }

  // 队列大小
  this.size = function () {
    return items.length;
  }
}

// 击鼓传花
var chuanhua = function (names, number) {
  var q = new Queue();
  // 把玩家放入队列
  for (let i = 0; i < names.length; i++) {
    q.enqueue(names[i]);
  }

  // 重要部分
  var taotai;
  while (q.size() > 1) {
    // 2 
    for (let i = 0; i < number - 1; i++) {
      q.enqueue(q.dequeue());
    }
    taotai = q.dequeue();
    console.log(`淘汰的玩家是 - `, taotai)
  }
  return q.dequeue();
}

// 玩家列表
var names = ['a', 'b', 'c', 'd', 'e', 'f']; // 一直传 => 直到剩下最后一名
// 游戏规则
var number = 3;

// 队列 => 优先队列
// 例如: 飞机  高级会员  优先登记
// 优先级 priorityQueue 
// ’小黑‘ 3
// Object {
//    name: '小黑',
//    priority: 3
// }
// ’小明‘ 5

var PriorityQueue = function () {
  var items = [];

  // 辅助类
  var QueueItem = function (element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueItem = new QueueItem(element, priority);

    // 定义一个变量来区分是否插入成功
    var added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueItem.priority > items[i].priority) {
        items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
    // 如果没有插入成功，就放最后
    if (!added) {
      items.push(queueItem);
    } 
  }

  this.getItems = function() {
    return items;
  }
}

var pq = new PriorityQueue();
pq.enqueue('小黑', 10);
pq.enqueue('小明', 12);

export default Queue;

