// let a: unknown;
// a = 10; // 可以赋值为数字
// a = true; // 可以赋值为布尔值
// a = "hello"; // 可以赋值为字符串

// let x: string;
// if (typeof a === "string") {
//     x = a; // 只有在类型检查后才能安全地赋值
// } else {
//     x = "default"; // 如果不是字符串，提供默认值
// }

// // 第二种
// x = a as string; // 使用类型断言，但需要确保 a 实际上是字符串类型

// console.log(`x: ${x}`); // 输出 x 的值


// let a: string;
// a = "hello"; // 正常赋值
// if(typeof a === 'string') {
//     console.log(a.toUpperCase()); // 正常使用
// } else {
//    console.log(a)
// }

// type LogFunc = () => void;

// // function f1(): void {
// //     return undefined;
// // }

// function f1(): LogFunc {
//     return () => {
//         console.log("Function f1 executed");
//     };
// }
// f1(); // 调用 f1 函数

// const src = [1,2,3];
// const dst = [0];
// src.forEach(el => dst.push(el))

  //  function Demo(): void {
  //     // return 666;// 会报错：不能将类型“number”分配给类型“void”
  //  }

// console.log(`dst -- `, dst)

// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     speak(): string {
//         return `我叫 ${this.name}，今年 ${this.age} 岁。`;
//     }
// } 
// class Student extends Person {
//     studentId: number;

//     constructor(name: string, age: number, studentId: number) {
//         super(name, age); // 调用父类的构造函数
//         this.studentId = studentId;
//     }

//     override speak(): string {
//         return `${super.speak()} 我的学号是 ${this.studentId} `;
//     }
// }

// const student = new Student("小明", 20, 12345);
// console.log(student.speak()); // 输出: 我叫 小明，今年 20 岁。 我的学号是 12345

// class Person {
//   public name: string; // 公有属性，可以在类外部访问
//   private age: number; // 私有属性，只能在类内部访问
//   protected address: string; // 受保护属性，可以在类及其子类中访问

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   public getAge(): number {
//     return this.age; // 可以在类内部访问私有属性
//   }
// }
// class Employee extends Person {
//   private position: string; // 私有属性，只能在 Employee 类内部访问

//   constructor(name: string, age: number, address: string, position: string) {
//     super(name, age, address);
//     this.position = position;
//   }

//   public getPosition(): string {
//     // 访问父类中受保护的属性
//     console.log(`Address: ${this.address}`); // 可以访问受保护属性
//     return this.position; // 可以在子类中访问私有属性
//   }
// }
// // 使用属性修饰符
// let person = new Person("Alice", 30, "Wonderland");
// console.log(person.name); // 可以访问公有属性
// console.log(person.getAge()); // 可以通过公有方法访问私有属性
// let employee = new Employee("Bob", 25, "Wonderland", "Developer");
// console.log(employee.name); // 可以访问公有属性
// console.log(employee.getPosition());

/**
 * 泛型函数
 */
// function logData<T, U>(data1: T, data2: U): T | U {
//   return Date.now() % 2 === 0 ? data1 : data2; // 返回 data1 或 data2，取决于当前时间戳的奇偶性
// }
// logData<string, boolean>("Hello, TypeScript!", true); // 输出: Hello, TypeScript!
// logData<number, string>(42, '42'); // 输出: 42

// interface PersonInterface<T> {
//   name: string;
//   age: number;
//   data: T; // 泛型属性
// }

// type JobInfo = { 
//   title: string;
//   company: number;
// };

// let p: PersonInterface<JobInfo> = {
//   name: "Alice",
//   age: 30,
//   data: {
//     title: "Software Engineer",
//     company: 12345
//   }
// };

// 泛型类
// class GenericClass<T> {
//   private items: T[] = [];

//   addItem(item: T): void {
//     this.items.push(item);
//   }

//   getItems(): T[] {
//     return this.items;
//   }
// }
// let stringClass = new GenericClass<string>();
// stringClass.addItem("Hello");
// let numberClass = new GenericClass<number>();
// numberClass.addItem(42);
// console.log(stringClass.getItems()); // 输出: ["Hello"]
// console.log(numberClass.getItems()); // 输出: [42]
// 泛型接口
// interface GenericInterface<T> {
//   value: T;
//   getValue(): T;
// }
// class GenericImplementation<T> implements GenericInterface<T> {
//   constructor(public value: T) {}

//   getValue(): T {
//     return this.value;
//   }
// }
// let stringImpl = new GenericImplementation<string>("Hello, World!");
// let numberImpl = new GenericImplementation<number>(42);
// let objectImpl = new GenericImplementation<object>({ key: "one", value: 1 });
// console.log(stringImpl.getValue()); // 输出: "Hello, World!"
// console.log(numberImpl.getValue()); // 输出: 42
// console.log(objectImpl.getValue()); // 输出: { key: "one", value: 1 }

/**
 * 装饰器
 */

// function CustomString(target: Function) {
//   // 装饰器函数
//   target.prototype.toString = function () {
//     // 重写 toString 方法
//     return JSON.stringify(this);
//   }

//   // 针对对象添加封锁
//   Object.seal(target.prototype);
// }
// @CustomString
 
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("张三", 30);
// console.log(p1.toString()); // 输出: {"name":"张三","age":30}

// interface Person {
//   x: number; // 定义一个新的属性
// }

// Person.prototype.x = 99; // 添加一个新的属性
// console.log(p1.x); // 输出: x

/**
 * 装饰器返回值会把所装饰的类替换为装饰器返回的类
 * 这意味着原来的类会被新的类替换
 * 所以在使用装饰器时要注意这一点
 */

// function Demo(target: Function) {
//   return class {
//     test() {
//       console.log(200);
//       console.log(300);
//       console.log(400);
//     }
//   }
// }

// // @Demo
// class Person {
//   test() {
//     console.log(100);
//   }
// }
// console.log(Person)

/**
 * new  表示: 该类型是可以用new操作符调用
 * ...args 表示: 构造器可以接受【任意数量】的参数
 * any[] 表示: 构造器可以接受【任意类型】的参数
 * {} 表示: 返回类型是对象(非null、非undefined的对象)。
 */

// type Constructor = new (...args: any[]) => {};

type Constructor = {
  new (...args: any[]): {};
  wife: string
}

// 需求是fn是一个类
function test(fn: Constructor) {}

class Person {
  static wife = "小红"; // 静态属性
}

test(Person); // 正常