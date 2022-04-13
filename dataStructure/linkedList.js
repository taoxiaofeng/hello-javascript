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
                current = current.next;
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

        }
    }

    // 获取一下头部
    this.getHead = function () {
        return head;
    }
}

// 测试
var l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);

l.insert(1, 10);