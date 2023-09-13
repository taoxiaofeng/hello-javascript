/**
 * 创建一个防抖函数，用于限制高频触发的函数调用
 * @param {Function} fn 需要进行防抖处理的原函数
 * @param {number} delay 延迟时间，单位毫秒
 * @param {boolean} [immediate=false] 是否立即执行
 * @returns {Function} 返回一个防抖处理后的函数
 */

function debounce(fn, delay, immediate = false) {
  let timer = null;

  // 返回一个新的函数， 这个函数是防抖处理过的
  return function () {
    // 保存函数调用时的上下文和参数，用于later调用
    const context = this;
    const args = arguments;

    // 延后函数的实际执行
    const later = function () {
      // 延迟函数执行完毕，清空定时器
      timer = null;
      // 如果immediate参数为false, 函数在延后结束后执行
      if (!immediate) {
        // 使用到之前保存的上下文和参数
        fn.apply(context, args);
      }
    };

    // 判断是否应立即执行函数
    const shouldCallNow = immediate && !timer;

    // 清除之前设置过的延时(如果有的话)
    clearTimeout(timer);

    // 设定新的延时
    timer = setTimeout(later, delay);

    // 如果immediate参数为true 并且延时不存在，则立即执行函数
    if (shouldCallNow) {
      fn.apply(context, args);
    }
  };
}

