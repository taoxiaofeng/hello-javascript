// 将数组扁平化并去除其中重复数据
// 最终得到一个升序且不重复的数组
var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 12, [13]]]],
  10
];

// 最终转换结果 ：[1,2,3,4,5,6,7,8,9,10,11,12,13]
// 1、数组扁平化
// 2、 去重
// 3、 排序

// 1、数组扁平化
Array.prototype.flat = function () {
  const result = this.map(item => {
    if (Array.isArray(item)) {
      return item.flat();
    }
    return [item];
  });
  return [].concat(...result);
}

// 2、去重
Array.prototype.unique = function () {
  return [...new Set(this)];
}

//3、排序
/**
 * 正数 a> b 倒序
 * 0 顺序不变
 * 负数 a, b a< b 升序
 */
const sortFn = (a, b) => a - b;

console.log(arr.flat().unique().sort(sortFn));

