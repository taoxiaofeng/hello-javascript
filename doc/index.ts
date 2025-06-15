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
function logData<T>(data: T): void {
    console.log(data);
}
logData<string>("Hello, TypeScript!"); // 输出: Hello, TypeScript!
logData<number>(42); // 输出: 42