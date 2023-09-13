/**
 * 创建一个节流函数，用于限制高频触发的函数调用。
 *
 * @param {Function} fn - 需要进行节流处理的原函数。
 * @param {number} threshold - 时间阈值，单位为毫秒。
 * @param {boolean} [trailing=true] - 是否在阈值结束后触发。
 * @returns {Function} 返回节流处理后的函数。
 */
function throttle(fn, threshold, trailing = true) {
  let lastTime = 0; // 上次执行的时间
  let timer = null; // 定时器

  return function() {
    const context = this; // 保存上下文
    const args = arguments; // 保存参数
    const now = new Date().getTime(); // 当前时间

    // 如果距离上次执行的时间小于时间阈值，则设置一个定时器以便在时间阈值结束后执行
    if (now - lastTime < threshold) {
      clearTimeout(timer);
      if (trailing) {
        timer = setTimeout(() => {
          lastTime = now;
          fn.apply(context, args);
        }, threshold);
      }
    } else {
      // 如果已经超过了时间阈值，则立即执行
      lastTime = now;
      fn.apply(context, args);
    }
  };
}

// 使用示例
// const throttledFunction = throttle(function() {
//   console.log('Throttled function executed');
// }, 200);

// window.addEventListener('scroll', throttledFunction);
