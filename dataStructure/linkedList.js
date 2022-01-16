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
    this.append = function(element) {
        var node  = new Node(element);
        // node = {
        //  element: element
        //  next: null    
        // }

        if(head == null) {
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
    

    // 获取一下头部
    this.getHead = function() {
        return head;
    }
}