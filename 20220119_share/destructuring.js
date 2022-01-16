import { list, list2, list3, list4, obj1 } from './mock.js';
// 10个JS结构赋值相关的知识点
/**
 * 1、忽略值
 * Igoring values
 */
const demo1 = () => {
  // 示例1-1
  const [aa, , cc] = list;
  console.log(`aa -- `, aa, ' cc -- ', cc);

  // 示例1-2
  const [aa1, , cc1] = list2;
  console.log(`aa1 -- `, aa1, ' cc1 -- ', cc1);
}

// demo1();

/**
 * 2、分配剩余值
 */
const demo2 = () => {
  // 示例2-1
  const [a, b, ...residue] = list;
  console.log('a -- ', a);
  console.log('b -- ', b);
  console.log('residue -- ', residue);

  // 示例2-2
  const { one, two, ...residueItem } = obj1;
  console.log('one -- ', one);
  console.log('two -- ', two);
  console.log('residueItem -- ', residueItem);
}
// demo2();

/**
 * 3、组合数组和对象结构
 */
const demo3 = () => {
  // 示例3-1
  const [, { job }, { name }] = list3;

  console.log(`item 2 - job -- `, job, ` -- item 3 - name -- `, name);
}

// demo3();

/**
 * 4、交换数组中的变量
 */

// 冒泡排序
let arr = [3, 1, 5, 4, 7, 6, 0, 2];

function bubbleSort(arr) {
  let length = arr.length;
  // 遍历次数为length-1次
  for (let i = 0; i < length - 1; i++) {
    // 当前遍历的比较次数为length - 当前遍历次数
    for (let j = 0; j < length - i - 1; j++) {
      // 如果前一个数 大于 后一个数 就交换两数位置
      if (arr[j] > arr[j + 1]) {
        // 之前的写法 定义一个临时变量来实现交换两个数的位置
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // 使用解构的方法来交换两个数的位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      };
    };
  };
  return arr;
};

// console.log(`bubbleSort(arr) -- `, bubbleSort(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]

/**
 * 5、重命名变量
 */
const demo5 = () => {
  const { id, name, job } = list3[0];

  console.log(`id -- `, id, ` name -- `, name, ` job -- `, job);

  const { id:id2, name:name2, age } = list4[0];
  console.log(`id2 -- `, id2, ` name2 -- `, name2, ` age -- `, age);
}

demo5();



