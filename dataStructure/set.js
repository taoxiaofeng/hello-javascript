/**
 * 集合
 */
// 区分ES6 中的Set 类
var Set2 = function () {
  var items = [];
  // var length = 0;
  // 集合中查询元素是否存在: has(value)   return boolean
  this.has = function (value) {
    return items.hasOwnProperty(value);
  }

  // 集合是不重複的
  // add 添加元素
  this.add = function (value) { // 如果 value = 3;
    if (!this.has(value)) {
      // false 元素不存在集合中
      items[value] = value;
      // length++;
      // items[3] = 3;
      // 方括號語法  點語法
      return value;

    }
    // true 證明元素純在集合中
    return false;
  }

  // 移除元素
  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      // length--;
      return true;
    } else {
      return false;
    }
  }

  // 清空集合
  this.clear = function () {
    items = {};
    // length = 0;
  }

  // size  集合的大小
  this.size = function () {
    // 第一种方法:  定义length, 通过length 获取集合的大小
    // return length;
    // 第二种方法： 遍历集合
    // var count = 0;
    // for (const key in items) {
    //   if (Object.hasOwnProperty.call(items, key)) {
    //    count++;
    //   }
    // }
    // return count;
    // 第三种方法： 
    // Object.keys() // ES6 中的方法
    return Object.keys(items).length;
  }

  // 提取集合全部值，并以数组的形式返回
  this.value = function () {
    var values = [];
    for (const key in items) {
      if (Object.hasOwnProperty.call(items, key)) {
        if (items.hasOwnProperty(key)) {
          values.push(items[key]);
        }
      }
    }
    return values;
  }

  // 获取并集
  this.union = function (otherSet) {
    var resultSet = new Set2();

    // 1: 把自己的值提取出来
    var arr = this.value();
    for (let i = 0; i < arr.length; i++) {
      resultSet.add(arr[i]);
    }

    // 2: 把另一个 集合的值提取出来
    arr = otherSet.value();
    for (let i = 0; i < arr.length; i++) {
      resultSet.add(arr[i]);
    }
    return resultSet;
  }

  // 获取交集
  this.intersection = function (otherSet) {
    var resultSet = new Set2();
    var arr = this.value();

    for (let i = 0; i < arr.length; i++) {
      if (otherSet.has(arr[i])) {
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  }

  // 获取差集
  this.difference = function(otherSet) {
    var resultSet = new Set2();
    var arr = this.value();
    for (let i = 0; i < arr.length; i++) {
      if(otherSet.has(arr[i])) {
        // otherSet 中存在 则不添加
      } else {
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  }


  // 获取元素
  this.getItmes = function () {
    return items;
  }
}


var A = new Set2();
A.add(1);
A.add(2);
A.add(3);

var B = new Set2();
B.add(2);
B.add(3);
B.add(4);

// var res = A.union(B); // 并集
// var res = A.intersection(B); // 交集
var res = A.difference(B); // 差集
var res2 = B.difference(A); // 差集

console.log(res.value(), res2.value())

// var s = new Set2();
// s.add(1);
// s.add(2);
// s.add(3);

