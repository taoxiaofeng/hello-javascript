/**
 * JS树结构操作:查找、遍历、筛选、树和列表相互转换
 */
let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1'
      },
      {
        id: '1-2',
        title: '节点1-2'
      }
    ]
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1'
      }
    ]
  }
];

/**
 * 广度优先遍历
 * 广度优先的思路是，维护一个队列，队列的初始值为树结构根节点组成的列表，重复执行以下步骤直到队列为空：
 * 取出队列中的第一个元素，进行访问相关操作，然后将其后代元素（如果有）全部追加到队列最后。
 * 下面是代码实现，类似于数组的forEach遍历，我们将数组的访问操作交给调用者自定义，即一个回调函数：
 */

function treeForeach(tree, func) {
  let node, list = [...tree];
  while (node = list.shift()) {
    func(node);
    node.children && list.push(...node.children);
  }
}

treeForeach(tree, node => { console.log(node.title) })
