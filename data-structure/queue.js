/**
 *   enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
 *   dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
 *   front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不
 *  做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
 *   isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
 *   size()：返回队列包含的元素个数，与数组的length属性类似。
 */
function Queue() {
    //这里是属性和方法
    let items = [];

    //向队列尾部添加一个（或多个）新的项。
    this.enqueue = function(element) {
        items.push(element);
    }

    //移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    this.dequeue = function() {
        return items.shift();
    }

    //只有enqueue方法和dequeue方法可以添加和移除元素，这样就确保了Queue类遵循先进先出原则。

    //返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息）。
    this.front = function() {
        return items[0];
    }

    //检查队列是否为空  如果队列中不包含任何元素，返回true，否则返回false。
    this.isEmpty = function() {
        return items.length === 0;
    }

    //队列大小
    this.size = function() {
        return items.length;
    }

    //打印队列元素   返回队列包含的元素个数，与数组的length属性类似。
    this.print = function() {
        console.log(items.toString);
    }

    //使用Queue类
    let queue = new Queue();
    console.log(queue.isEmpty()); //输出true;

    //向队列中添加元素
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");
    queue.enqueue("D");

    //删除队列中的元素
    queue.dequeue();

    //打印
    queue.print();

    //队列大小
    queue.size();
}