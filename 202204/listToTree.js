// 列表数据
// 列表数据
const list = [
  { id: 01, pid: null },
  { id: 02, pid: null },
  { id: 03, pid: 01 },
  { id: 04, pid: 03 },
  { id: 05, pid: 01 },
  { id: 06, pid: 03 },
  { id: 07, pid: 02 },
  { id: 09, pid: 02 },
  { id: 10, pid: 07 },
  { id: 11, pid: 07 },
]

// 转换后的数据
// const tree = [
//   { 
//     id: 01,
//     pid: null,
//     children: [
//       { 
//         id: 03,
//         pid: 01,
//         children: [
//           { id: 04, pid: 03 },
//           { id: 06, pid: 03 },
//         ]
//       },
//       { id: 05, pid: 01 },
//     ]
//   },
//   { 
//     id: 02, 
//     pid: null,
//     children: [
//       { 
//         id: 07,
//         pid: 02,
//         children: [
//           { id: 10, pid: 07 },
//           { id: 11, pid: 07 },
//         ]
//       },
//       { id: 09, pid: 02 },
//     ]
//   },
// ]


/**
 * @description 查找包含自身节点的父代节点
 * @param list 列表数据
 * @param id 节点id
 * @param pid 节点的父id
 */
// function listToTree(list, id, pid) {
//   list.forEach((node) => {
//     const pNode = list.find((row) => row[id] === node[id]);
//     console.log(`pNode -- `, pNode)
//     console.log(`node -- `, node)

//     if (pNode) {
//       pNode.children = pNode.children || [];
//       pNode.children.push(node);
//     }
//   });
//   return list.filter((node) => !node[pid]);
// }

// const treeNode = listToTree(list, 'id', 'pid');

// console.log(`treeNode -- `, treeNode);

/**
 * @description 查找包含自身节点的父代节点
 * @param list 列表数据
 * @param id 节点 id
 * @param pid 节点的父id
 */
 function listToTree2(list, id, pid) {
  list.forEach((node) => {
    const pNdoe = list.find((row) => row[id] === node[pid])

    if (pNdoe) {
      pNdoe.children = pNdoe.children || []
      pNdoe.children.push(node)
    }
  })
  return list.filter((node) => !node[pid])
}

const treeNode2 = listToTree2(list, 'id', 'pid')
console.log(`treeNode2 -- `, treeNode2)

