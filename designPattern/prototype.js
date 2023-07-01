/**
 * 原型模式 prototype
 * 原型允许把一个对象作为蓝图创建另一个对象，新对象继承原对象的属性和方法。
 * 原型链继承的结果和使用类相似，只是更为灵活，因为属性和方法可以不通过同一个类在对象之间共享。
 */

// function Student(name, gender, score, quality) {
//   this.name = name;
//   this.gender = gender;
//   this.score = score;
//   this.quality = quality;
//   // 使用原型解决
//   // this.sumScore = function () {
//   //   return this.score + this.quality;
//   // }
// }

//   // 使用原型解决
// Student.prototype.sumScore = function () {
//   return this.score + this.quality;
// }


// var whh = new Student('王花花', '男', 30, 50);
// var lsd = new Student('李栓蛋', ' 女', 28, 60);
// // 缺点：每次创建实例时，都会创建一个新的内存来存放变量，浪费内存

// console.log(whh.sumScore())

// console.log(whh);
// console.log(lsd)
//------------------------------------------------
// 原型模式
// var employee1 = {
//   name: "王花花",
//   age: 20,
// };

// var employee2 = {
//   name: "李栓蛋",
//   age: 21,
// };
// 以上写法，如果数据变量较多，代码重复度高，不利于维护
// 以下写法，可以解决上述问题
// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
  
//   // 构造函数模式 每次new实例都会创建一个新的say方法，浪费内存
//   // this.say = function () {
//   //   console.log("我叫" + this.name + "，我今年" + this.age + "岁");
//   // };
// }

// // 使用原型解决，把say方法放到原型上，所有实例共享
// Employee.prototype.say = function () {
//   console.log("我叫" + this.name + "，我今年" + this.age + "岁");
// };


// var employee3 = new Employee("王花花", 20);
// var employee4 = new Employee("李栓蛋", 21);

// console.log(employee3.say());
// console.log(employee4.say());

// ------------------------------------------------
// 使用ES6语法 class 关键字 实现 构造器模式 和 原型模式
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // ES6 class 语法糖，把say方法放到原型上，所有实例共享
  say() {
    console.log(`this -- `, this)
    console.log("我叫" + this.name + "，我今年" + this.age + "岁");
  }
}

var employee3 = new Employee("王花花", 20);
var employee4 = new Employee("李栓蛋", 21);
console.log(employee3.say());
console.log(employee4.say());
