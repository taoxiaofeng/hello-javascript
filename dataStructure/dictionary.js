/**
 * 字典 dictionary
 */

var Dictionary = function () {
  var items = {};

  // 检查健是否存在
  this.has = function (key) {
    // return items.hasOwnProperty(key);
    return key in items;
  }

  this.set = function (key, value) {
    items[key] = value;
  }

  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  }

  this.get = function (key) {
    if (this.has(key)) {
      return items[key];
    }
    return undefined;
  }

  // 获取私有变量items
  this.getItems = function () {
    return items;
  }

  // 字典其他操作
  // 以列表返回字典的值
  this.values = function () {
    var values = [];
    for (const key in items) {
      if (this.has(key)) {
        values.push(items[key])
      }
    }
    return values;
  }

  // 获取全部健名称
  this.keys = function() {
    return Object.keys(items);
  }
}

var d = new Dictionary();


d.set('price', 200);
d.set('name', '测试')

// console.log(d.getItems());
// console.log(d.has('price'));
// console.log(d.has('price2'));
// console.log(d.delete('price2'));
// console.log(d.delete('price'));
// console.log(d.getItems());
// console.log(d.get('price'));
// console.log(d.get('name'));
// console.log(d.values());
console.log(d.keys());





