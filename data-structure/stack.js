/**
 * 栈数据结构
 * 栈是一种遵从后进先出（LIFO）原则的有序集合。
 * 新添加的或待删除的元素都保存在栈的同一端，称作栈顶，
 * 另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 * 为我们的栈声明一些方法。
 *  push(element(s))：添加一个（或几个）新元素到栈顶。
 *  pop()：移除栈顶的元素，同时返回被移除的元素。
 *  peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
 *  isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
 *  clear()：移除栈里的所有元素。
 *  size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
 */
// 创建栈  创建一个类来标识栈
function Stack() {

    // 声明 items 数组来保存栈里的元素
    let items = [];

    // 声明 _push 方法 : 添加一个（或几个）新元素到栈顶
    this._push = function(element) {
        items.push(element);
    }

    //  声明 _pop 方法：移除栈顶的元素，同时返回被移除的元素。
    this._pop = function(element) {
        return items.pop();
    }

    // 只能用push和pop方法添加和删除栈中元素，这样一来，我们的栈自然就遵从了LIFO原则。
    // 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
    this._peek = function() {
        // 因为类内部是用数组保存元素的，所以访问数组的最后一个元素可以用 length - 1
        return items[items.length-1]; 
    }

    // 查找栈是否为空 如果栈里没有任何元素就返回true，否则返回false。
    this.isEmpty = function() {
        return items.length === 0;
    }

    // 返回栈里的元素个数。这个方法和数组的length属性很类似。
    this._size = function() {
        return items.length;
    }

    // 移除栈里的所有元素。
    this._clear = function() {
        items = [];
    }

    // 辅助方法 print 将栈里的元素都输出到控制台
    this._print = function() {
        console.log(items.toString());
    }
}

//使用 stack 类
// let stack = new Stack();
// console.log(stack.isEmpty());

// // 添加元素
// stack._push(5);
// stack._push(8);

// console.log(stack._peek());

// stack._push(11);
// console.log(stack._size()); 
// console.log(stack.isEmpty());

// stack._push(15);

// stack._pop();
// stack._pop();

// console.log(stack._size());

// stack._print();