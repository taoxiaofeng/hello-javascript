/**
 * 1、分类
 * 基本（值）类型
 * String:任意字符串
 * Number:任意的数字
 * boolean: true/false
 * undefined: undefined
 * null:null
 * 对象（引用）类型
 * Object:任意对象
 * Function:一种特别的对象（可以执行）
 * Array: 一种特别的对象（数值下标,内部数据是有序的）
 * 2、判断
 * typeOf 数值 / 字符串 / 布尔类型   不能判断 null与object object与array
 * instanceOf : 判断对象的具体类型
 * ===
 */
//1、基本
//typeOf 返回数据类型的字符串表达
// var a;
// console.log(a, typeof a , typeof a ==='undefined', typeof a === undefined);
// console.log(undefined === 'undefined');

// a = 3;
// console.log(typeof a === 'number');
// a = 'sss';
// console.log(typeof a === 'string');
// a = true;
// console.log(typeof a === 'boolean');
// a = null;
// console.log(typeof a === 'object');

// //2、对象
// var b1 = {
//     b2:[1, 'abc', console.log],
//     b3: function () {
//         console.log('b3');
//         return function() {
//             return 'xfzhang';
//         }
//     }
// }

// console.log(b1 instanceof Object, b1 instanceof Array);
// console.log(b1.b2 instanceof Array, b1.b2 instanceof Array);
// console.log(b1.b3 instanceof Function, b1.b3 instanceof Object);
// console.log(typeof b1.b3 === 'function');
// console.log(typeof b1.b2[2] === 'function');
// b1.b2[2](4);
// console.log(b1.b3()());


//  var obj = {
//      name:'tom',
//      age:12
//  }
//  function test() {
//      var a = 3;
//  }

//  var arr = [3, 'abc'];
//  arr[1];

/**
 * 实例：实例对象
 * 类型：类型对象
 */
function Person(name,age) { //构造函数  类型
    this.name = name;
    this.age = age;
}

var p = new Person(); //根据类型创建的实例对象

//  1、undefined 与null 的区别
//  undefined 代表定义未赋值
var a;
console.log(a); //undefined
//  null 定义并赋值了，只是值为null
a = null;
console.log(a);
//  2、什么时候给变量赋值为null 呢？
//   初始赋值为null,表明将要赋值为对象;
var b = null;

//确定对象就赋值
b = ['sss', 12];

//最后
b = null //让b指向的对象称为垃圾对象（被垃圾回收器回收）

//3、严格区分数据类型  和 变量类型
/**
 *数据的类型
 *   基本类型
 *   对象类型
 *变量的类型（变量内存值类型）
    基本类型：保存的就是基本类型数据
    引用类型：保存的就是地址
 *
*/


