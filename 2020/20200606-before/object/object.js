// var person = {
//     name: "Nicholas",
//     age: 29,
//     job: "Software Engineer",

//     sayName: function () {
//         alert(this.name);
//     }
// }

// var person = {};
// Object.defineProperty(person, "name", {
//     // writable: false, //不可写入 只读的
//     configurable: false, //不可配置
//     value: "Nicholas"
// });

// document.write(person.name);
// delete person.name;
// documen.write(person.name);

// var book = {
//     _year: 2004,
//     edition: 1
// }

// Object.defineProperty(book, "year", {
//     get: function () {
//         this._year;
//     },
//     set: function (newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// })

//定义访问器的旧有方法
// book.__defineGetter__("year", function(){
//     return this._year;
// });

// book.__defineGetter__("year", function(newValue) {
//     if(newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//     }
// });

// book.year = 2005;
// alert(book.edition);// 2
// document.write(`${book._year}:${book.edition}`)

// var book = {};

// Object.defineProperties(book, {
//     _year: {
//         value: 2004
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get: function () {
//             return this._year;
//         },
//         set: function (newValue) {
//             if (newValue > 2004) {
//                 this._year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }
//     }
// });

// var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
// alert(descriptor.value); //2004
// alert(descriptor.configurable); // false
// alert(typeof descriptor.get); // undefined

// var descriptor = Object.getOwnPropertyDescriptor(book, "year");
// alert(descriptor.value); //undefined
// alert(descriptor.enumerable); // false
// alert(typeof descriptor.get); // "function"

//工厂模式
// function createPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         alert(this.name);
//     }
//     return o;
// }

// //构造函数模式
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     // this.sayName = function () {
//     //     console.log(this.name);
//     // }
//     this.sayName = sayName;
// }

// function sayName() {
//     console.log(this.name);
// }

// var person1 = Person("Nicholas", 29, "Software Engineer");
// var person2 = Person("Greg", 27, "Doctor");
// console.log(person1, person2);

// //当做构造函数使用
// var person = new Person("Nicholas", 29, "Software Engineer");
// person.sayName();

// //作为普通函数调用
// Person("Greg", 27, "Doctor"); //添加到window
// window.sayName();

// //在另一个对象作用域中调用
// var o = new Object();
// Person.call(o, "Kristen", 25, "Nures");
// o.sayName();

//原型模式
function Person() {}
Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
    console.log(this.name);
}

var person1 = new Person();
var person2 = new Person();
// person1.sayName();
// person2.sayName();
// console.log(person1.sayName == person2.sayName);
person1.name = 'Greg';  //实例中添加一个同名属性
console.log(person1.name, person1.hasOwnProperty('name'), 'name' in person1); //hasOwnProperty() 检测一个属性是否存在该对象的实例中
console.log(person2.name, person2.hasOwnProperty('name'), 'name' in person2);  //in 操作符 会在通过对象能够访问给定属性时返回true

delete person1.name;
console.log(person1.name, person1.hasOwnProperty('name'), 'name' in person1);

//判断对象属性是否存在原型上
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

console.log(hasPrototypeProperty(person1, 'name'));

person1.name = 'xiaoming';
console.log(hasPrototypeProperty(person1, 'name'));