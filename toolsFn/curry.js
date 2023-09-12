/**
 * 函数柯里化示例
 */
// 定义一个curry函数，接受一个fn作为参数
function curry(fn) {
  // 获取fn函数的参数个数
  const arity = fn.length;

  // 返回一个新的函数，该函数接收一系列参数（...args）
  return function curried(...args) {
    // 检查是否已提供足够的参数来调用原函数
    if (args.length >= arity) {
      // 如果是，则调用原函数
      // 原函数依赖于特定的 this 上下文时  return fn.apply(this, args);
      // return fn.apply(this, args);
      // 函数使用当前this上下文时
      return fn(...args);
    } else {
      // 否则， 返回一个新的函数
      return function (...moreArgs) {
        // 这个新函数将接受更多的参数（...moreArgs），然后与之前的参数一起传递给 curried 函数
        return curried(...args, ...moreArgs);
      };
    }
  };
}

// 定义一个add函数，接受三个参数
function add(x, y, z) {
  return x + y + z;
}

// 将add函数转换为柯里化函数
const curriedAdd = curry(add);

// 调用curriedAdd函数，测试柯里化函数的功能
console.log(curriedAdd(1, 2, 3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6
