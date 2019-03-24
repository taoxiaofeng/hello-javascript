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
// function Person(name,age) { //构造函数  类型
//     this.name = name;
//     this.age = age;
// }

// var p = new Person(); //根据类型创建的实例对象

// //  1、undefined 与null 的区别
// //  undefined 代表定义未赋值
// var a;
// console.log(a); //undefined
// //  null 定义并赋值了，只是值为null
// a = null;
// console.log(a);
// //  2、什么时候给变量赋值为null 呢？
// //   初始赋值为null,表明将要赋值为对象;
// var b = null;

// //确定对象就赋值
// b = ['sss', 12];

// //最后
// b = null //让b指向的对象称为垃圾对象（被垃圾回收器回收）

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


/**
 * 1、什么是数据？
 *      存储在内存中代表特定信息的定西，本质上是0101...
 *      数据的特点：可传递，可运算
 *      一切皆数据
 *      内存中所有操作的目标：数据
 *      算术运算
 *      逻辑运算
 *      赋值
 *      运行函数
 * 2、什么是内存？
 * 内存条通电后产生的可存储数据的空间（临时的）
 * 内存的产生和死亡：内存条(电路板) ==> 通电 ==> 产生内存空间 ==> 存储数据 ==> 处理数据 ==>断电 ==> 内存空间和数据都消失
 * 一块小内存的2个数据
 *      内部存储的数据
 *      地址值
 * 内存分类
 *      栈：全局变量 、 局部变量
 *      堆：对象
 * 3、什么是变量？
 * 可变化的量，由变量名和变量值组成
 * 每个比那辆都对应一块小内存，变量名用来查找对应的内存，变量值就是内存中保存的数据
 * 内存，数据，变量三者之间的关系
 * 4、内存、数据、变量三者之间的关系
 *      内存是用来存储数据的空间
 *      变量是内存的标识
 * 
 * 问题：var a = xxx, a在内存中保存的是什么？
 *      xxx 是基本数据，保存的就是这个数据
 *      xxx 是对象， 保存的是对象的地址值
 *      xxx 是一个变量， 保存的xxx的内存内容（可能是基本数据，也可能是地址值）
 * 
 * 关于引用变量赋值问题
 *      n个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看的是修改之后的数据
 *      2个引用变量指向同一个对象，让其中一个引用变量指向一个对象，另一引用变量依然指向前一个对象。
 *      
 */

// var a = {
//     age: 12
// };
// var b = a;
// a = {
//     name: 'BoB',
//     age: 13
// }
// b.age = 14;
// console.log(b.age, a.name, a.age);

// function fn2(obj) {
//     obj = {
//         age: 15
//     }
// };

// fn2(a);
// console.log(a.age);

/**
 *在js调用函数时传递变量参数时，是值传递还是引用传递
    理解1：都是值(基本/地址值)传递
    理解2：可能是值传递，也可能是引用传递（地址值）
*/

/**
 * JS 引擎如何管理内存
 * 1、内存生命周期
 *      分配小内存空间，得到它的使用权
 *      存储数据，可以反复进行操作
 *      释放小内存空间
 * 2、释放内存
 *      局部变量:函数执行完自动释放
 *      对象： 成为垃圾对象 ==> 垃圾回收器回收
 */     

 var a = 3;
 var obj = {};
 obj = undefined;

 function fn() {
     var b = {};
 }

 fn() //b是自动释放，b所指向的对象是在后面的某个时刻由垃圾回收器回收