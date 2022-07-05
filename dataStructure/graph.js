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

/**
 * stack 先进后出
 * push 栈顶添加元素
 * pop 栈顶移除元素
 * peek 查看栈顶
 * isEmpty 检查栈是否未为空
 * clear 移除全部元素
 * size 获取栈长度  
 */
// 函数： 函数， 构造器
// tish 指向要创建的对象
var Stask = function () {
  var items = []; // 私有的
  // this.items = []; // 公有的
  // push 栈顶添加元素
  this.push = function (element) {
    items.push(element);
  }

  // pop 移除栈顶元素
  this.pop = function () {
    return items.pop();
  }

  // peek 检查栈顶
  this.peek = function () {
    return items[items.length - 1];
  }

  // 检查栈是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }

  // 清除栈
  this.clear = function () {
    items = [];
  }

  // 获取栈的大小
  this.size = function () {
    return items.length;
  }


  // 向外部暴露方法 让外部可以访问 items
  this.getItems = function () {
    return items;
  }
}


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

  /**
   * 广度优先遍历流程如下：
   * 1、发现未发现阶段后放在队列中，等待查找， 并且标志位已发现
   * 2、在队列中拿出已发现节点开始探索全部节点，并且跳过已发现节点
   * 3、遍历完此节点后，将此节点标志位改为已探索
   * 4、开始在队列中探索下一个节点  
   * @param {*} v 遍历的顶点
   * @param {*} callback  操作的回调函数
   */
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
      var now = queue.dequeue(); // 把节点冲队列中取出
      var edges = adjList[now]; // 拿到节点的边 
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

  // 广度优先算法
  // d 距离值
  // pred 回溯点 
  /**
   * 广度优先遍历和最短路径问题
   * 假设从A开始
   * 1、记录d(distance) = {A : 0, B : 1, E : 3 , ...}，记录从A到其他节点的距离
   * 2、记录回溯路径 pred = [A: null, B: 'A', E: 'B', F: 'B', ...]
   */
  this.BFS = function (v, callback) {
    /**
     * color 以对象形式存储每个顶点的颜色
     * color = {  A: 'white', B: 'white', ... }
     */
    var color = initColor();

    var queue = new Queue();
    queue.enqueue(v);

    // 初始化操作
    var d = {};
    var pred = {};

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;

    }

    while (!queue.isEmpty()) {
      var now = queue.dequeue(); // 把节点冲队列中取出
      var edges = adjList[now]; // 拿到节点的边 
      for (let i = 0; i < edges.length; i++) {
        var next = edges[i];
        if (color[next] === 'white') {  // 颜色 === white 的就是未发现的节点 
          // 未发现的全部入列， 并且标识为已发现
          color[next] = 'grey';

          // 设置回溯点
          pred[next] = now;
          d[next] = d[now] + 1;

          queue.enqueue(next);
        }
      }
      color[now] = 'black';
      if (callback) {
        callback(now);
      }
    }
    return {
      pred,
      d,
    }
  }

  /**
   * 深度优先遍历
   * 1、从某一节点开始查找，并且将自己标志为已发现
   * 2、从此节点继续探索其全部节点，并且跳过已发现节点
   * 3、遍历完此节点后， 将此节点标志为已探索
   * 4、递归返回，继续探索下一路径的最深节点
   */
  /**
   * 
   * @param {*} v 从哪个节点开始遍历
   * @param {*} callback 调用的回调函数
   */

  // 辅助函数
  var dfsVisite = function (v, color, callback) {
    color[v] = 'grey'; // 标记为已发现
    if (callback) {
      callback(v);
    } // 调用回调函数
    var edges = adjList[v];
    for (let i = 0; i < edges.length; i++) {
      var next = edges[i];
      if (color[next] === 'white') {
        dfsVisite(next, color, callback);
      }
    }
    color[v] = 'black';
  }

  this.dfs = function (v, callback) {
    // 初始化颜色的值
    var color = initColor();
    dfsVisite(v, color, callback);
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

// 添加新的路径
g.addEdge('D', 'F');

// 广度优先算法 能解决  保证每个点的回溯是最近的
var s = g.BFS('A');  // s.pred 和 s.d  回溯路径和距离

console.log(s);

// 最短路径算法
var shortestPath = function (from, to) {  // from 和 to 是起点和终点  'A' => 'F'
  var v = to;  // 设置当前点
  // v 作用是不断的寻找回溯点
  // 通过 while 循环不断的寻找回溯点

  var path = new Stask();

  while (v !== from) {
    path.push(v);
    v = s.pred[v];
  }
  path.push(v);

  var str = '';
  while (!path.isEmpty()) {
    str += path.pop() + '-';
  }

  str = str.slice(0, str.length - 1);
  console.log(str);

}

shortestPath('A', 'F');
