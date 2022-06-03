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
  // 搜索节点(和遍历节点逻辑类似)
  this.search = function (value) { };

  // 实现私有traverse方法进行递归遍历
  var traverse = function (node, callback) {
    // 跳出递归调用的条件  node => null
    if (node === null) {
      return;
    }

    // callback(node.value, callback); // 8,2,3,9   前序遍历
    // 1、遍历左侧节点 
    traverse(node.left, callback);

    callback(node.value, callback); // 2,3,8,9     中序遍历
    // 2、遍历右侧节点
    traverse(node.right, callback);
    // 3、回调函数
    // callback(node.value, callback); // 3,2,9,8   后序遍历 (查找文件 使用 后序遍历， 最先找到文件)
  }

  // 遍历节点
  this.traverse = function (callback) {
    traverse(root, callback);
  };

  //  调用min时存在两种情况
  // 1、树为空
  // 2、树不为空
  // 实现内部min方法
  var min = function (node) {
    if (node === null) {
      return null;
    }
    while (node && node.left) {
      node = node.left;
    }
    console.log(`node -- `, node);
    return node.value;
  }

  // 获取最小值
  this.min = function () {
    return min(root);
  }

  // 实现内部max方法
  var max = function (node) {
    if (node === null) {
      return null;
    }
    while (node && node.right) {
      node = node.right;
    }
    console.log(`node -- `, node);
    return node.value;
  }

  // 获取最大值
  this.max = function () {
    return max(root);
  }


  var findMinNode = function (node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  // 删除节点(内部方法)
  var removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (node.key < key) {
      node.right = removeNode(node.right, key);
      return node;
    } else if (node.key > key) {
      node.left = removeNode(node.left, key);
      return node;
    } else {
      // 删除节点
      // 1、叶子节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 2、只有一个子节点
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  }

  // 删除节点
  // 1、删除最后节点
  // 2、删除中间节点
  /**
   * 二叉树条件
   * b < a < c
   * d < b < e < a
   * 一、移除节点b后，新的节点(B)需要满足的条件
   *    d < B < e < a
   *    1、替换为节点d, 即 d -> B
   *    2、替换为节点e
   * 二、移除节点a后，新的节点(A)需要满足的条件
   *    b < A < c
   *    e < d < b < A
   *    最好的方式就是替换为c
   * 
   * 一句话总结：要替换为右侧子树的最小节点
   * @param {*} key 
   * 对外暴露的方法 
   */
  this.remove = function (key) {
    root = removeNode(root, key);
  };


  // 测试代码
  this.getRoot = function () {
    return root;
  }
}

var t = new Tree();

t.insert(11);
t.insert(8);
t.insert(6);
t.insert(9);
t.insert(12);


var print = function (value) {
  console.log('value - ', value);
}

t.traverse(print);

console.log(t.getRoot())

// 递归
var count = 0;
var fn = function () {
  if (count > 5) {
    return;
  }
  count++;
  fn();
}

fn(); 