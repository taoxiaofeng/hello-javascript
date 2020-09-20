let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

/** set  */
// let arr = Array.from(new Set(ary));
// console.log(arr);

/**
 * 拿出当前向和后面的内容进行比较
 */
// 方法一：
// for (let i = 0; i < ary.length-1; i++) {
//     let item = ary[i],
//     args = ary.slice(i+1);

//     if(args.indexOf(item) > -1) {
//     //     // 如果包含： 就把当前项删除
//         ary.splice(i,1);  // 1、splice 对原来数组进行改变，如果执行for循环中的 i++ 原来数组的索引改变了， 产生了数组塌陷问题;
//         // 2、产生性能问题，当前项一旦删除，后面索引都会改变
//         // 需要进行 i--
//         i--;
//     }

// }

// 方法二：声明一个空数组
// let arr = [];
// for (let i = 0; i < ary.length; i++) {
//     let item = ary[i],
//         args = ary.slice(i + 1);

//     if (args.indexOf(item) > -1) {

//     } else{
//         arr.push(item);
//     }
// }

// console.log(arr);

// 方法三： 把当前数组浅拷贝一份
// let arr = [...ary];
// for (let i = 0; i < ary.length - 1; i++) {
//     let item = ary[i],
//         args = ary.slice(i + 1);

//     if (args.indexOf(item) > -1) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// 方法四： 把重复的元素 改成null，然后使用 filter 过滤掉
// for (let i = 0; i < ary.length - 1; i++) {
//     let item = ary[i],
//         args = ary.slice(i + 1);

//     if (args.indexOf(item) > -1) {
//         ary[i] = null;
//     }
// }

// ary = ary.filter(item => item != null);
// console.log(ary);

// 方法五： 用该数组的最后一项 替换
// for (let i = 0; i < ary.length - 1; i++) {
//     let item = ary[i],
//         args = ary.slice(i + 1);

//     if (args.indexOf(item) > -1) {
//         ary[i] = ary[ary.length-1];
//         ary.length--;
//         i--;
//     }
// }

// ary = ary.filter(item => item != null);
// console.log(ary);

// 方法六：对象键值对方式 => 拿数组中每一项向新容器中存储，如果已经存储过了，就把当前项删除
// let obj = {};
// for (let i = 0; i < ary.length; i++) {
//     const item = ary[i];
//     if (typeof obj[item] !== 'undefined') {
//         ary[i] = ary[ary.length - 1];
//         ary.length--;
//         i--;
//         continue;
//     }

//     obj[item] = item;

// }
// obj = null;
// console.log(ary);

// 方法七： 通过正则去实现  相邻项的处理方案
ary.sort((a,b) => a-b);
ary = ary.join('@') + '@';
let reg = /(\d+@)\1*/g,
arr = [];
ary.replace(reg,(val, group1) => {
    // arr.push(Number(group1.slice(0, group1.length - 1)));
    arr.push(parseFloat(group1));
});

console.log(arr);
