/**
 * 字典 dictionary
 */

// var Dictionary = function () {
//   var items = {};

//   // 检查健是否存在
//   this.has = function (key) {
//     // return items.hasOwnProperty(key);
//     return key in items;
//   }

//   this.set = function (key, value) {
//     items[key] = value;
//   }

//   this.delete = function (key) {
//     if (this.has(key)) {
//       delete items[key];
//       return true;
//     }
//     return false;
//   }

//   this.get = function (key) {
//     if (this.has(key)) {
//       return items[key];
//     }
//     return undefined;
//   }

//   // 获取私有变量items
//   this.getItems = function () {
//     return items;
//   }

//   // 字典其他操作
//   // 以列表返回字典的值
//   this.values = function () {
//     var values = [];
//     for (const key in items) {
//       if (this.has(key)) {
//         values.push(items[key])
//       }
//     }
//     return values;
//   }

//   // 获取全部健名称
//   this.keys = function() {
//     return Object.keys(items);
//   }
// }

// var d = new Dictionary();


// d.set('price', 200);
// d.set('name', '测试')

// console.log(d.getItems());
// console.log(d.has('price'));
// console.log(d.has('price2'));
// console.log(d.delete('price2'));
// console.log(d.delete('price'));
// console.log(d.getItems());
// console.log(d.get('price'));
// console.log(d.get('name'));
// console.log(d.values());
// console.log(d.keys());

/**
 * 哈希表
 */
var HashTable = function () {
  var items = [];

  // 散列表
  // key => number => items[number]
  // ASCII a => 97
  // Jobs => J74  o111   b98   s115
  // key => hashCode  散列值        
  var loseloseHashCode = function (key = []) { // Jobs
    var hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }

  // 添加
  this.put = function (key, value) {
    // key = Jobs value = jobs@qq.com
    var position = loseloseHashCode(key);
    // position 398 % 13
    console.log(position + ' -- ' + value);
    items[position] = value;
  }

  // 删除
  this.remove = function (key) {
    items[loseloseHashCode(key)] = undefined;
  }

  // 获取 item
  this.get = function (key) {
    return items[loseloseHashCode(key)];
  }

  // 获取 items
  this.getItems = function () {
    return items;
  }

}

// 测试代码
var ht = new HashTable();
// ht.put('Jobs', 'Jobs@qq.com');
// ht.put('Bob', 'Bob@qq.com');

// 散列冲突 ： key  hashCode 一样 导致值会被存储到相同的位置，导致值覆盖的问题   
ht.put('Donnie', 'Donnie@qq.com');
ht.put('Ana', 'Ana@qq.com');

/**
 * 链表
 */
var LinkedList = function () {
  // 链表头
  var head = null; // Object null
  // 链表长度
  var length = 0;

  // 辅助类： 节点
  var Node = function (element) {
    this.element = element; // 自己本身
    this.next = null; // 下一项内容
  }

  // 链表尾部添加元素
  this.append = function (element) {
    var node = new Node(element);
    // node = {
    //  element: element
    //  next: null    
    // }

    if (head == null) {
      head = node;
    } else {
      var current = head;
      while (current.next) {
        current = current.next;  // 向下查找
      }
      // while 循环执行完以后， current 已经是链表最后一项了
      current.next = node;
    }
    length++;
  }

  // 链表的某一个位置添加元素
  this.insert = function (position, element) {
    // 规避越界问题
    if (position > -1 && position < length) {
      var node = new Node(element);
      if (position == 0) {
        var current = head;
        head = node;
        head.next = current;
      } else {
        var index = 0;
        var current = head;
        var previous = null;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = node;
        node.next = current;
      }
      length++;
    }
  }

  // 链表的每一位置删除元素
  // 类似于数组的splice
  // 数据结构中没有移除的概念，需要用的时候拿出来用 使用 return
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      if (position == 0) {
        var current = head;
        head = current.next;
      } else {
        var current = head;
        var previous = null;
        var index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        // 跳出循环的时候 index == position
        previous.next = current.next;
      }
      length--;
      return current;
    }
    return null;
  }
  // 获取某个元素的位置
  this.indexOf = function (element) {
    var current = head;
    var index = 0;
    while (current) {
      if (current.element == element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // removeAt(position)  删除某个位置的元素
  // indexOf(element)    获取某个元素的位置
  this.remove = function (element) {
    // length--
    return this.removeAt(this.indexOf(element));
  }

  // 链表是否为空
  this.isEmpty = function () {
    return length == 0;
  }

  // 链表的长度
  this.size = function () {
    return length;
  }

  // 获取一下头部
  this.getHead = function () {
    return head;
  }
}

var HashTable_L = function () {
  var table = [];
  var loseloseHashCode = function (key = []) { // Jobs
    var hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (table[position]) {
      table[position].append(value);
    } else {
      var l  = new LinkedList();
      table[position] = l;
      table[position].append(value);
    }
  }

  this.getTable = function() {
    return table;
  }
}

// 测试方法
var hl = new HashTable_L();
// hl.put('Ana', 'abcd');

hl.put('Donnie', 'Donnie@qq.com');
hl.put('Ana', 'Ana@qq.com');

// console.log(hl.getTable());
console.log(hl.getTable()[13].getHead());




