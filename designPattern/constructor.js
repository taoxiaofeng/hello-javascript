/**
 * 构造器模式 Constructor
 * 构造器的好处在于通过不同实体分开创建属性和方法。
 * 通过类或者构造函数创建的实例通常继承了所有的属性和方法，但是如果使用构造器，我们可以只应用我们需要的“步骤”来创建对象，这样就更灵活。
 */

// ES5
// function Student(name, gender, score, quality) {
//   this.name = name;
//   this.gender = gender;
//   this.score = score;
//   this.quality = quality;
// this.sumScore = function () {
//   return this.score + this.quality;
// }
// }

// ES6
// class Student {
//   constructor(name, gender, score, quality) {
//     this.name = name;
//     this.gender = gender;
//     this.score = score;
//     this.quality = quality;
//   }

//   sumScore() {
//     return this.score + this.quality;
//   }
// }

// var whh = new Student('王花花', '男', 30, 50);
// var lsd = new Student('李栓蛋', ' 女', 28, 60);

// console.log(whh.sumScore())

// console.log(whh);
// console.log(lsd)

// --------------------------------------------
// 构造器模式
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
function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log("我叫" + this.name + "，我今年" + this.age + "岁");
  };
}


var employee3 = new Employee("王花花", 20);
var employee4 = new Employee("李栓蛋", 21);

console.log(employee3.say());
console.log(employee4.say());
