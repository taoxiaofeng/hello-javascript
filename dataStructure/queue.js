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
  this.front = function() {
    return items[0];
  }
  
  // 检查队列是否为空
  this.isEmpty = function() {
    return items.length === 0;
  }

  // 队列大小
  this.size = function() {
    return items.length;
  }
}         