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

  const { id: id2, name: name2, age } = list4[0];
  console.log(`id2 -- `, id2, ` name2 -- `, name2, ` age -- `, age);
}

// demo5();

/**
 * 6、默认值
 */

const demo6 = () => {
  const props = { banana: '🍌', apple: undefined, orange: '🍊' };
  const { banana, apple = '🍎🍏' } = props;

  // console.log(`banana -- `, banana);
  // console.log(`apple -- `, apple);
  // 需要注意 如果需要结构的对象中的属性值是 ‘’ 空字符串 或者 null 时，解构赋的初始值是被覆盖的。
  const props2 = { one: '壹', two: null, three: '' };
  const { one = '1', two = '贰', three = '叁' } = props2;

  // console.log(`one --`, one);
  // console.log(`two --`, two);
  // console.log(`three --`, three);

  // ---------------- 数组
  const [ten, twenty, thirty = 30] = [10, 20, undefined];
  console.log(`thirty -- `, thirty)
}
// demo6();

/**
 * 7、解构正则表达式
 */

const demo7 = () => {
  const email = `youxiangzhurenmigncheng@163.com`;
  // const email = `qqhao@qq.com`;
  const [originalString, username, address, tld] = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(email);

  console.log(`originalString -- `, originalString);
  console.log(`username -- `, username);
  console.log(`address -- `, address);
  console.log(`tld -- `, tld);
}

// demo7();

/**
 * 8、嵌套解构
 */
const demo8 = () => {
  const fruits = { banana: '🍌', child: [{ apple: '🍎🍏', }, { orange: '🍊' }] }
  const { banana, child: [{ apple: curApple }] } = fruits;
  console.log(`curApple -- `, curApple);

  // 这样是获取不到 child 的
  // console.log(`child -- `, child);
}

// demo8();

/**
 * 9、动态对象键
 */

const demo9 = () => {
  const fruits = {
    banana: "I'm a banana 🍌",
    cherry: "I'm a cherry 🍒"
  };

  const key = 'banana';
  const { [key]: curFruits } = fruits;

  console.log(curFruits)

}

// demo9();

/**
 * 10、解构函数参数
 */
const demo10 = () => {
  const fruits = {
    banana: "I'm a banana 🍌",
    cherry: "I'm a cherry 🍒",
    apple: "I'm a apple 🍎",
    orange: "I'm a orange 🍊",
  };

  const getFruits = ({ apple, banana }) => {
    console.log(`apple -- `, apple);
    console.log(`banana -- `, banana);
  }

  getFruits(fruits);
}

demo10();


