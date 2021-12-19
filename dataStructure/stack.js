//es5
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

// 10 转 2
var divBy2 = function (number) {
  var stack = new Stask();
  var yushu;

  var string2 = '';

  while (number > 0) {
    yushu = number % 2;
    stack.push(yushu);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    string2 += stack.pop();
  }
  
  return string2;
}