/**
 * 数据拦截
 */

// 一、利用 toString() 方法实现
// var a = {
//     i: 0,
//     toString() {
//         return ++this.i;
//     }

//     // 所有数据类型 检测他的数据类型时  第一步先调用 valueOf()  然后再调用 toString() 方法
//     // valueOf() {
//     //     return ++this.i;
//     // }
// }

// 二、 使用 Object.defineProperty() 方法 数据劫持实现

// let obj = {
//     name: ''
// };

// Object.defineProperty(obj, 'name', {
//     get() {
//         console.log("获取");
//     },
//     set() {
//         console.log("设置");
//     }
// });
// window = global;

// var i = 0;
// Object.defineProperty(window, 'a', {

//     get() {
//         return ++i;
//     },

//     set() {

//     }
// })

// 三、 使用队列的方式
var a = [1,2,3];

a.toString = a.shift;
if(a == 1 && a == 2 && a == 3) {
    console.log("条件成立");
}


