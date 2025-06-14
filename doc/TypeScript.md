# TypeScript

1. **JavaScript** 的困扰
   - JavaScript 是动态类型语言，缺乏类型检查，容易导致运行时错误。
   - JavaScript 代码可读性差，容易出现有漏洞的逻辑错误。
   - JavaScript 访问不存在的属性没有报错提示。
   - JavaScript 低级的拼写错误。
2. **tsconfig.json**
   - target: 编译目标，指定 ECMAScript 版本。
   - module: 模块系统，指定使用的模块化规范（如 CommonJS、ES6 等）。
   - strict: 启用严格模式，开启所有严格类型检查选项。
   - outDir: 输出目录，指定编译后的 JavaScript 文件存放位置。
   - include: 指定要编译的文件或目录。
   - exclude: 指定不编译的文件或目录。
   - compilerOptions: 编译器选项，配置 TypeScript 编译器的行为。
   - lib: 指定编译时包含的库文件。
   - allowJs: 允许编译 JavaScript 文件。
   - noImplicitAny: 禁止隐式的 any 类型。
   - noUnusedLocals: 禁止未使用的局部变量。
   - noUnusedParameters: 禁止未使用的函数参数。
   - noImplicitReturns: 禁止函数没有返回值。
   - noFallthroughCasesInSwitch: 禁止 switch 语句的 fallthrough 情况。
   - esModuleInterop: 允许默认导入非 ES 模块。
   - skipLibCheck: 跳过库文件的类型检查。
   - forceConsistentCasingInFileNames: 强制文件名大小写一致。
   - resolveJsonModule: 允许导入 JSON 模块。
   - isolatedModules: 确保每个文件都是独立的模块。
   - allowSyntheticDefaultImports: 允许合成默认导入。
   - noEmit: 不生成输出文件，仅进行类型检查。
   - noEmitOnError: 在有错误时不生成输出文件。
   - moduleResolution: 模块解析策略，指定如何解析模块导入。
   - experimentalDecorators: 启用实验性的装饰器特性。
   - baseUrl: 基础目录，用于解析非相对模块名。
   - paths: 模块路径映射，用于简化模块导入。
   - incremental: 启用增量编译，提升编译速度。
   - declaration: 生成声明文件（.d.ts）。
   - sourceMap: 生成源映射文件，便于调试。
   - outFile: 将所有输出文件合并为一个文件。
   - allowSyntheticDefaultImports: 允许合成默认导入。
   - noImplicitThis: 禁止隐式的 this 类型。
   - alwaysStrict: 强制在每个文件中启用严格模式。
   - useDefineForClassFields: 使用 ECMAScript 的类字段定义方式。
   - downlevelIteration: 支持 ES6 的迭代器和生成器。
   - emitDecoratorMetadata: 生成装饰器元数据，用于依赖注入等场景。
   - importHelpers: 使用 tslib 库来减少输出文件的大小。
   - stripInternal: 删除标记为 `@internal` 的代码。
   - noImplicitOverride: 禁止未显式覆盖基类方法。
   - exactOptionalPropertyTypes: 精确处理可选属性的类型。
   - useUnknownInCatchVariables: 在 catch 语句中使用 unknown 类型。
   - preserveConstEnums: 保留 const 枚举，避免编译时删除。
   - allowUnreachableCode: 允许不可达代码。
   - noUncheckedIndexedAccess: 禁止未检查的索引访问。
   - emitBOM: 在输出文件中添加字节顺序标记（BOM）。
   - disableSizeLimit: 禁用编译器的大小限制。
   - traceResolution: 跟踪模块解析过程，便于调试模块导入问题。
3. **常用命令**
   - `tsc`：编译 TypeScript 文件。
   - `tsc --init`：初始化 TypeScript 项目，生成 `tsconfig.json` 文件。
   - `tsc --watch`：监视文件变化，自动重新编译。
   - `tsc --noEmit`：仅进行类型检查，不生成输出文件。
   - `tsc --project <path>`：指定项目的 `tsconfig.json` 文件进行编译。
   - `tsc --version`：查看 TypeScript 编译器版本。
   - `tsc --help`：查看 TypeScript 编译器的帮助信息。
4. **类型注解**
   - 基本类型：`number`, `string`, `boolean`, `void`, `null`, `undefined`, `any`, `unknown`。
   - 特殊类型：`never`（表示永远不会发生的类型）。
   - 字面量类型：`"hello"`, `42`, `true`。
   - 字符串字面量类型：`"red" | "green" | "blue"`。
   - 数字字面量类型：`1 | 2 | 3`。
   - 布尔字面量类型：`true | false`。
   - 对象字面量类型：`{ name: string; age: number }`。
   - 可枚举类型：`enum Direction { Up, Down, Left, Right }`。
   - 数组类型：`number[]`, `Array<string>`。
   - 元组类型：`[string, number]`。
   - 联合类型：`string | number`。
   - 交叉类型：`{ name: string } & { age: number }`。
   - 枚举类型：`enum Color { Red, Green, Blue }`。
   - 函数类型：`(param: string) => void`。
   - 对象类型：`{ name: string; age: number }`。
   - 可选属性：`{ name?: string }`。
   - 只读属性：`readonly name: string`。
   - 类型别名：`type Point = { x: number; y: number }`。
   - 接口：`interface Person { name: string; age: number }`。
   - 泛型：`function identity<T>(arg: T): T { return arg; }`。
   - 类型断言：`let str: any = "hello"; let len: number = (str as string).length;`。
   - 索引签名：`{ [key: string]: number }`。
   - 映射类型：`type Readonly<T> = { readonly [P in keyof T]: T[P] }`。
   - 条件类型：`T extends U ? X : Y`。
   - 模板字面量类型：`type Greeting = `Hello, ${string}`。
   - 内置类型：`Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`。
5. **类型推断**
   - TypeScript 可以根据变量的初始值自动推断类型。
   - 函数参数和返回值类型可以通过上下文推断。
   - 使用 `infer` 关键字在条件类型中进行类型推断。
   - 类型推断可以减少显式类型注解，提高代码可读性。
6. **类型保护**
   - 使用 `typeof` 进行基本类型检查：`if (typeof value === "string") { ... }`。
   - 使用 `instanceof` 检查对象实例：`if (value instanceof Date) { ... }`。
   - 自定义类型保护函数：`function isString(value: any): value is string { return typeof value === "string"; }`。
   - 使用 `in` 操作符检查对象属性：`if ("name" in obj) { ... }`。
   - 使用类型谓词在函数中缩小类型范围：`function isPerson(obj: any): obj is Person { return "name" in obj && "age" in obj; }`。
7. **装饰器**
   - 装饰器是 TypeScript 的实验性特性，用于在类、方法、属性或参数上添加元数据。
   - 使用 `@decorator` 语法定义装饰器。
   - 类装饰器：`function MyClassDecorator(target: Function) { ... }`。
   - 方法装饰器：`function MyMethodDecorator(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) { ... }`。
   - 属性装饰器：`function MyPropertyDecorator(target: Object, propertyKey: string | symbol) { ... }`。
   - 参数装饰器：`function MyParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) { ... }`。
   - 装饰器工厂：可以接受参数的装饰器函数。
   - 使用 `emitDecoratorMetadata` 选项生成装饰器元数据。
8. **命名空间与模块**
   - 命名空间（Namespace）：用于组织代码，避免全局作用域污染。
     - 定义：`namespace MyNamespace { export class MyClass { ... } }`
     - 使用：`let obj = new MyNamespace.MyClass();`
   - 模块（Module）：用于分离代码，支持 ES6 模块化。
     - 导出：`export class MyClass { ... }`
     - 导入：`import { MyClass } from './my-module';`
   - 使用 `export =` 和 `import = require()` 语法进行 CommonJS 模块化。
   - 使用 `export default` 和 `import MyClass from './my-module';` 进行 ES6 模块化。
9. **高级类型**
   - 映射类型：`type Readonly<T> = { readonly [P in keyof T]: T[P] }`。
   - 条件类型：`T extends U ? X : Y`。
   - 模板字面量类型：`type Greeting = `Hello, ${string}`。
   - 内置类型：`Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`。
   - 索引类型查询：`keyof T` 获取对象的键名类型。
   - 映射类型与条件类型结合使用，创建复杂的类型转换。
10. **TypeScript 与 JavaScript 的区别**
    - TypeScript 是 JavaScript 的超集，支持静态类型检查。
    - TypeScript 支持类、接口、泛型等面向对象编程特性。
    - TypeScript 提供更强大的类型系统，支持类型推断和类型保护。
    - TypeScript 编译为标准的 JavaScript，可以在任何支持 JavaScript 的环境中运行。
    - TypeScript 提供更好的 IDE 支持和代码提示功能。
11. **TypeScript 的优势**
    - 提高代码可读性和可维护性，减少运行时错误。
    - 支持静态类型检查，提前发现潜在问题。
    - 提供更好的 IDE 支持，增强代码提示和自动补全功能。
    - 支持面向对象编程，增强代码组织能力。
    - 兼容现有的 JavaScript 代码，可以逐步迁移到 TypeScript。
    - 社区活跃，有丰富的第三方库和工具支持。
12. **TypeScript 的劣势**
    - 学习曲线较陡，特别是对于初学者。
    - 编译过程增加了构建时间和复杂性。
    - 需要额外的配置和工具支持，如 `tsconfig.json` 和编译器选项。
    - 某些 JavaScript 特性（如动态类型）在 TypeScript 中需要特殊处理。
    - 可能会引入额外的类型定义文件，增加项目复杂度。
13. **TypeScript 的应用场景**
    - 大型项目：TypeScript 的类型系统可以帮助管理复杂的代码库，提高可维护性。
    - 团队协作：静态类型检查可以减少团队成员之间的误解和错误。
    - 前端开发：TypeScript 在 React、Angular、Vue 等前端框架中得到广泛应用。
    - Node.js 开发：TypeScript 可以用于编写服务器端代码，提供更好的类型安全。
    - 库和框架开发：TypeScript 可以帮助创建更可靠的库和框架，提供更好的用户体验。
14. **TypeScript 的未来**
    - TypeScript 继续发展，增加对新 ECMAScript 特性的支持。
    - 社区和生态系统不断壮大，提供更多的工具和库。
    - 与 JavaScript 的兼容性持续增强，支持更广泛的应用场景。
    - TypeScript 在前端和后端开发中的使用将继续增长，成为主流选择。
    - 未来可能会引入更多的语言特性，如更强大的类型系统和更灵活的装饰器。

# TypeScript 相关资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)

```typescript
// TypeScript unknown 类型的变量赋值
// unknown 会强制开发者在使用之前进行类型检查，从而提供更强的类型安全性。
let a: unknown;
a = 10; // 可以赋值为数字
a = true; // 可以赋值为布尔值
a = "hello"; // 可以赋值为字符串

let x: string;
if (typeof a === "string") {
  x = a; // 只有在类型检查后才能安全地赋值
} else {
  x = "default"; // 如果不是字符串，提供默认值
}

// 第二种
x = a as string; // 使用类型断言，但需要确保 a 实际上是字符串类型
```

```typescript
// TypeScript never 的含义和使用场景
// never 类型表示一个永远不会发生的值，通常用于函数永远不会返回的情况。
function error(message: string): never {
  throw new Error(message); // 这个函数永远不会返回
}
// never 一般是TypeScript 推断出来的
let a: string;
a = "hello"; // 正常赋值
if (typeof a === "string") {
  console.log(a.toUpperCase()); // 正常使用
} else {
  console.log(a); // 这里不会执行，因为 a 已经被推断为never 类型
}
```

```typescript
// TypeScript 中object类型和Object类型的区别
// object 类型表示非原始类型的值，可以是对象、数组、函数等
let obj: object;
obj = { name: "Alice" }; // 可以赋值为对象
obj = [1, 2, 3]; // 可以赋值为数组
// Object 类型是所有非原始类型的超类型，包括对象、数组、函数等
// 类型是Object的变量可以调用Object方法的类型（除了null和undefined的任何值）
let obj2: Object;
obj2 = { name: "Bob" }; // 可以赋值为对象
obj2 = [4, 5, 6]; // 可以赋值为数组
obj2 = () => {}; // 可以赋值为函数
obj2 = "string"; // 也可以赋值为字符串，但不推荐，因为字符串是原始类型
obj2 = 42; // 也可以赋值为数字，但不推荐，因为数字是原始类型
obj2 = true; // 也可以赋值为布尔值，但不推荐，因为布尔值是原始类型
// 使用 object 类型时，不能访问属性或方法，需要进行类型断言或类型检查
let obj3: object = { name: "Charlie" };
if (typeof obj3 === "object" && obj3 !== null) {
  console.log((obj3 as { name: string }).name); // 使用类型断言访问属性
} else {
  console.log("obj3 is not an object");
}
```

```typescript
// TypeScript 中索引签名
interface StringArray {
  [index: number]: string; // 索引签名，表示可以通过数字索引访问字符串
}
let myArray: StringArray = ["hello", "world"];
console.log(myArray[0]); // 输出 "hello"
// TypeScript 中的映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P]; // 将类型 T 的所有属性变为只读
};
type Person = {
  name: string;
  age: number;
  [key: string]: any; // 可索引签名，允许其他属性
  address?: string; // 可选属性
};
type ReadonlyPerson = Readonly<Person>; // ReadonlyPerson 的属性都是只读的
// 使用 ReadonlyPerson
let person: ReadonlyPerson = { name: "Alice", age: 30 };
// person.name = "Bob"; // 错误：不能修改只读属性
// TypeScript 中的条件类型
```

```typescript
// TypeScript 中的元祖类型
type Tuple = [string, number]; // 定义一个元组类型，包含一个字符串和一个数字
let myTuple: Tuple = ["hello", 42]; // 创建一个元组
myTuple[0]; // 访问元组的第一个元素，类型为 string
myTuple[1]; // 访问元组的第二个元素，类型为 number

let myTuple2: [string, number, boolean?] = ["world", 100]; // 定义一个包含三个元素的元组
let myTuple3: [string, ...number[]] = ["hello", 1, 2, 3]; // 定义一个包含字符串和任意数量数字的元组
```

```typescript
// TypeScript 中的枚举
enum Direction {
  Up, // 枚举成员默认从 0 开始
  Down,
  Left,
  Right,
}
// 数字枚举是有反向映射的
console.log(Direction.Up); // 输出 0
console.log(Direction[0]); // 输出 "Up"
// 字符串枚举
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let move: Direction = Direction.Up; // 使用枚举
console.log(move); // 输出 "UP"

// 内联枚举
const enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
// 使用内联枚举
let color: Color = Color.Red; // 使用内联枚举
console.log(color); // 输出 "RED"
// 所谓内联枚举，就是在编译时将枚举值直接替换为字符串或数字，而不是生成一个对象。可以减少生成的JavaScript 代码量, 并提高运行时性能。
```

```typescript
// TypeScript 中的联合类型
type StringOrNumber = string | number; // 定义一个联合类型，可以是字符串或数字
function printValue(value: StringOrNumber): void {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else if (typeof value === "number") {
    console.log("Number value:", value);
  }
}
printValue("Hello"); // 输出 "String value: Hello"
printValue(42); // 输出 "Number value: 42"
// TypeScript 中的交叉类型
type Person = {
  name: string;
  age: number;
};
type Address = {
  street: string;
  city: string;
};
type PersonWithAddress = Person & Address; // 定义一个交叉类型，包含 Person 和 Address 的所有属性
function printPersonWithAddress(person: PersonWithAddress): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
  console.log(`Street: ${person.street}, City: ${person.city}`);
}
let personWithAddress: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Wonderland",
};
printPersonWithAddress(personWithAddress); // 输出完整的个人信息和地址
```

```typescript
// TypeScript void 类型的特殊情况
// 1、定义函数时直接指定函数的返回值类型为void时会有严格的返回值类型校验
// function Demo(): void {
//    return 666; // // 会报错：不能将类型“number”分配给类型“void”
// }
// 2、先定义函数的类型，并指定函数的返回值类型是 void
type LogFunc = () => void;
function f1(): LogFunc {
  return 66; // 可以正常返回
}

/**
 * TypeScript 对 void 的行为有一些“宽松设计”：
 * 当函数类型的返回值是 void 时，允许返回任意类型的值，只要调用
 * 者不依赖该返回值。
 * 所以：
 * •	(): void 意味着 “我不关心返回什么”；
 * •	而不是 “必须什么都不返回”。
 */
```
