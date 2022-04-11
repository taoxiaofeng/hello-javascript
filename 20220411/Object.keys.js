/**
 * 1、返回的属性具有什么特性？
 * 2、包括继承的属性吗？
 * 3、返回的属性顺序是什么样的？
 * 4、属性中有Symbol值，返回的顺序是什么样的？
 * 5、属性中有负数和小数，返回的顺序是什么样的？
 * 6、Object.keys(null) && Object.keys(undefined)
 * 7、Object.keys(123);
 * 8、Object.keys('123');
 */

// 1、返回的属性具有什么特性？
// 对象中具有可枚举特性的属性
// 示例1
const obj1 = {
  'a': 'aa',
  'b': 'bb',
  'c': 'cc'
}
// console.log(Object.keys(obj1)) 

// 示例2
const obj2 = Object.create({}, {
  getFoo: {
    value: () => this.foo,
    // 创建getFoo 属性时，默认的 enumerable false
    // 设置enumerable属性的值为true,通过Object.keys() 方法就可以获取到 getFoo属性
    enumerable: true
  }
});

obj2.foo = 1;
// console.log(Object.keys(obj2));

// 2、包括继承的属性吗？
class A {
  constructor(name) {
    this.name = name;
  }
}

class B extends A {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const b = new B('cat', 18);
// console.log(Object.keys(b)); // 包括继承的属性


// 3、返回的属性顺序是什么样的？
// Number: 大于0的整数，进行排序返回
// String: 按照定义的顺序返回
// Symbol: 过滤掉， 不返回
const sa = Symbol('a');
const obj3 = {
  5: '5',
  a: 'a',
  1: '1',
  c: 'c',
  3: '3',
  b: 'b'
};
obj3[sa] = 'sa';
// console.log(Object.keys(obj3));

// Symbol: 过滤掉， 不返回
// console.log(Object.keys({
//   5: '5',
//   [Symbol('a')]: 'Symbol',
//   3: '3',
//   b: 'b'
// })); 

// 5、属性中有负数和小数，返回的顺序是什么样的？
// Number: 大于0的整数，进行排序返回
// 对于负数和小数，不进行排序，当做字符串处理
// console.log(Object.keys({
//   3: '3',
//   1: '1',
//   '-1': '-1',
//   0.2: '0.2'
// }))

// 6、Object.keys(null) && Object.keys(undefined)
// 传入的变量 -> 对象 
// console.log(Object.keys(null)) // 报错
// console.log(Object.keys(undefined)) // 报错
// 7、Object.keys(123);
// Number => Number(123)
console.log(Object.keys(123)); // []
// 8、Object.keys('123');
// 字符串 => String(123)
// new String('123')
console.log(Object.keys('123'));
console.log(new String('123'));




