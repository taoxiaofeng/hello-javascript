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
// function upperCase(strings, ...values) {
//   let result = '';
//   for (let i = 0; i < strings.length; i++) {
//     result += strings[i];
//     if (i < values.length) {
//       result += values[i];
//     }
//   }
//   return result.toUpperCase();
// }

// // 使用示例
// let x = "Hello";
// let y = "World";

// const s1 = upperCase`1${x}2${y}3`;
// console.log(s1); // 1HELLO2WORLD3


/**
 * 使用标签函数自动转移模版字符串中的特殊字符，防止XSS攻击
 */
// function safeHtml(strings, ...values) {
//   let result = strings[0];
//   for (let i = 0; i < strings.length; i++) {
//     let val = String(values[i - 1]);
//     result += val.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//     result += strings[i];
//   }
//   return result;
// }

// function safeHtml(strings, ...values) {
//   let result = strings[0];
//   for (let i = 1; i < strings.length; i++) {
//     let val = String(values[i - 1]);
//     result += val.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//     result += strings[i];
//   }
//   return result;
// }

// let userSuppliedInput = "<img src=x onerror=alert('XSS') />";
// const result = safeHtml`<div>${userSuppliedInput}</div>`;
// console.log(`first: ${result}`); // <div><img src=x onerror=alert('XSS')></div>

/**
 * 创建DSL
 * 标签函数可以用于解析模版字符串中的特定语法， 从而创建DSL(领域特定语言)
 */

// 例如实现一个css标签函数
const css = String.raw;



const color = 'red';
const fontSize = 20;
const style = css`color: ${color}; font-size: ${fontSize}px;`;

console.log(style)
