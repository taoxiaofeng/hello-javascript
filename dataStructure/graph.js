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

// var pq = new PriorityQueue();
// pq.enqueue('小黑', 10);
// pq.enqueue('小明', 12);



/**
 * 图
 * 
 * 图遍历 => 广度优先  和 深度优先
 * 图遍历基本思路
 * 每一个节点有三种状态
 * 1. 未发现(尚未发现此节点)
 * 2. 已经发现（发现其他节点连接到此，但未查找此节点全部连接的节点）
 * 3. 已经探索（已经发现此节点连接的全部节点  ）
 */

var graph = function () {
  // 顶点
  /**
   * vertices 以数组形式存储每个顶点
   */
  var vertices = [];
  // 边
  /**
   * adjList 以对象形式存储每个顶点包含的边
   *   var adjList = {
   *    A: [],
   *    B: [],
   *    // ...
   *  };
   */
  var adjList = {};

  // 1、添加顶点
  this.addVertex = function (v) {
    vertices.push(v);
    adjList[v] = [];
  }


  // 2、添加边
  this.addEdge = function (a, b) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  // 打印方法
  this.print = function () {
    var s = '\n';

    for (let i = 0; i < vertices.length; i++) {
      // 遍历每个顶点
      var v = vertices[i];
      s += v + ' -> ';
      var edges = adjList[v];
      for (let j = 0; j < edges.length; j++) {
        // 遍历每个顶点的边
        s += edges[j] + ' ';
      }
      s += '\n';
    }
    console.log(s);
  }

  // white 未发现
  // grey 已发现未探索
  // black 以探索
  var initColor = function () {
    var color = {};
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  }

  // 例如 遍历 v = ‘A’; 
  this.bfs = function (v, callback) {
    /**
     * color 以对象形式存储每个顶点的颜色
     * color = {  A: 'white', B: 'white', ... }
     */
    var color = initColor();

    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var now = queue.dequeue();
      var edges = adjList[now];
      for (let i = 0; i < edges.length; i++) {
        var next = edges[i];
        if (color[next] === 'white') {  // 颜色 === white 的就是未发现的节点 
          // 未发现的全部入列， 并且标识为已发现
          color[next] = 'grey';
          queue.enqueue(next);
        }
      }
      color[now] = 'black';
      if (callback) {
        callback(now);
      }
    }
  }
}

// 测试代码
var g = new graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');


g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');
g.addEdge('B', 'E');
g.addEdge('F', 'B');