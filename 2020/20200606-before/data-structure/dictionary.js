/**
 * Dictionary 类骨架
 * 需要声明一些映射/字典所能使用的方法
 * set(key, value):向字典中添加新元素
 * delete(key):通过使用键值来从字典中移除键值对应的数据值
 * has(key):如果某个键值存在于这个字典中，则返回true,反之则返回false.
 * get(key):通过键值查找特定的数值并返回。
 * clear():将整个字典中的所有元素全部删除。
 * size():返回字典多包涵元素的数量。与数组的length属性类似。
 * keys():将字典所包涵的所有键名以数组形式返回。
 * values():将字典所包含的所有数值以数组形式返回。
 */
function Dictionary() {

    //与set类类似，我们将在一个Object的实例而不是数组中存储元素。
    var items = {};

    // 如果某个键值存在于这个字典中，则返回true,反之则返回false.
    this.has = function (key) {
        return key in items;
    };

    // 向字典中添加新元素
    this.set = function (key, value) {
        items[key] = value;
    };

    // 通过使用键值来从字典中移除键值对应的数据值
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    // 将整个字典中的所有元素全部删除。
    this.clear = function () {
        items = {};
    } 

    // 返回字典多包涵元素的数量。与数组的length属性类似。
    this.size = function () {
        return Object.keys(items).length;
    }

    // 通过键值查找特定的数值并返回。
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    // 将字典所包含的所有数值以数组形式返回。
    this.values = function () {
        var values = [];
        for (const key in items) {
            if (this.has(key)) {
                values.push(items[key]);

            }
        }
        return values;
    };

    // 将字典所包涵的所有键名以数组形式返回。
    this.keys = function () {
        return Object.keys(items);
    }

    // 返回item 变量的方法
    this.getItems = function () {
        return items;
    }
}

/**
 * 使用 Dictionary 类
 */

// var dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');

// //  has(key):如果某个键值存在于这个字典中，则返回true,反之则返回false.
// console.log(dictionary.has('Gandalf'));

// // 返回字典多包涵元素的数量
// console.log(dictionary.size());

// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));





