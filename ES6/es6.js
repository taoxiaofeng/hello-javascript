/**
 * 面向对象
 */

 //ES5 面向对象
// function User(name,pass) {
//     this.name = name;
//     this.pass = pass;
// }

// User.prototype.showName = function() {
//     console.log(this.name);
// };

// User.prototype.showPass = function() {
//     console.log(this.pass);
// }

// //ES6继承：
// function VipUser(name,pass,level) {
//     //用call() 方法实现继承
//     User.call(this, name, pass);
//     this.level = level;
// }

// VipUser.prototype = new User();
// VipUser.prototype.constructor = VipUser;

// VipUser.prototype.showLevel = function() {
//     console.log(this.level);
// }

// var v1 = new VipUser('blue', '123456', 3);
// v1.showName();
// v1.showPass();
// v1.showLevel();

//ES6 面向对象  
// 1、class 关键字、构造器和类分开了
// 2、class 里面直接加方法



// 类
// class User {

//     //构造器
//     constructor(name, pass) {
//         this.name = name;
//         this.pass = pass;
//     }

//     showName() {
//         console.log(this.name);
//     }

//     showPass() {
//         console.log(this.pass);
//     }
// }

// //ES6 继承
// class VipUser extends User {
//     constructor(name,pass,level) {
//         // 超类 == 父类
//         super(name,pass);
//         this.level = level;
//     }

//     showLevel() {
//         console.log(this.level);
//     }
// }

// var v1 = new VipUser('blue', '123456',1);
// v1.showName();
// v1.showPass();
// v1.showLevel();

/**
 * 面向对象应用 -- React
 * React：
 * 1、组件化--class
 * 2、JSX JSX==bable==browser.js
 * 
 */
