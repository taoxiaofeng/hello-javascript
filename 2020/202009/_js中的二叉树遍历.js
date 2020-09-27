
/**
 * 二叉树遍历相关例子
 */

var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}
/**
 * 广度优先遍历
 * 广度优先遍历是从二叉树的第一层（根结点）开始，自上至下逐层遍历；在同一层中，按照从左到右的顺序对结点逐一访问。
 * 实现：
 * <!--more-->
 * 使用数组模拟队列。首先将根节点归入队列。当队列不为空的时候，
 * 执行循环：取出队列的一个节点，如果该结点的左子树为非空，则将该结点的左子树入队列；
 * 如果该结点的右子树为非空，则将该结点的右子树入队列。
 */

var levelOrderTraversal = function (node) {
    if (!node) {
        throw new Error('Empty Tree');
    }

    var que = [];
    que.push(node);
    while (que.length !== 0) {
        node = que.shift();
        console.log(node.value);
        if (node.left) {
            que.push(node.left);
        }
        if (node.right) {
            que.push(node.right);
        }
    }
}

console.log(levelOrderTraversal(tree));