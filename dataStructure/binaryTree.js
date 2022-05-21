/**
 * 二叉树
 * 左侧节点值 小于 右侧节点值
 */
var Tree = function () {
  var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  var root = null; //设置为私有变量
  // 插入节点
  var insertNode = function (node, newNode) {
    if (newNode.value > node.value) {
      // 往右走
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      // 往左走
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    }
  }
  this.insert = function (value) {
    var newNode = new Node(value); // 新的节点
    if (root === null) {
      // 空树
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  // 搜索节点
  this.search = function (value) { };

  // 实现私有traverse方法进行递归遍历
  var traverse = function (node, callback) {
    // 跳出递归调用的条件  node => null
    if (node === null) {
      return;
    }

    // callback(node.value, callback); // 8,2,3,9
    // 1、遍历左侧节点 
    traverse(node.left, callback);

    callback(node.value, callback); // 2,3,8,9
    // 2、遍历右侧节点
    traverse(node.right, callback);
    // 3、回调函数
    // callback(node.value, callback); // 3,2,9,8
  }

  // 遍历节点
  this.traverse = function (callback) {
    traverse(root, callback);
  };

  // 删除节点
  this.remove = function (value) { };


  // 测试代码
  this.getRoot = function () {
    return root;
  }
}

var t = new Tree();
t.insert(8);
t.insert(2);
t.insert(3);
t.insert(9);


var print = function (value) {
  console.log('value - ', value);
}

t.traverse(print);

console.log(t.getRoot())

// 递归
// var count = 0;
// var fn = function () {
//   if (count > 5) {
//     return;
//   }
//   count++;
//   fn();
// }

// fn();