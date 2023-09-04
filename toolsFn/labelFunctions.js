// const name = '张三';

// const s1 = `Hello \n ${name}`;

// const s2 = String.raw`Hello \n ${name}`;

// console.log(s1, s2)

/**
 * 实现一个简易的String.raw
 */
// function myRaw(strings, values) {
//   let result = '';
//   for (let i = 0; i < strings.length; i++) {
//     result += strings.raw?.[i] || strings[i];
//     if (i < values.length) {
//       result += values[i];
//     }
//   }
//   console.log(result);
//   return result;
// }

// const strings = ["你好", "我是", "", "谢谢"];

// const values = [1,2,3];

// console.log(myRaw(strings, values)); 

/**
 * 身份标签
 * 使用标签函数定义身份标签
 */
// const markup = `<div><h1>Test</h1></div>`;
// const style = `display: flex; flex-align: center;`;

// 使用 String.raw 分别重命名html和css
// const html = String.raw;
// const css = String.raw;
// const markup = html`<div>
//   <h1>Test</h1>
// </div>`;
// const style = css`display: flex; flex-align: center;`;

/**
 * 自定义标签函数 - 将模版字符串转换为大写形式
 */
function upperCase(strings, ...values) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result.toUpperCase();
}

// 使用示例
let x = "Hello";
let y = "World";

const s1 = upperCase`1${x}2${y}3`;
console.log(s1); // 1HELLO2WORLD3