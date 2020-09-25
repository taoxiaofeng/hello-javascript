/**
 * 防抖节流实现
 */

// 防抖实现
function debounce(fn, delay = 300) {
    // 默认300ms
    let timer;
    return function () {
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args); // 改变this指向为调用 debounce所指向对象
        }, delay);
    }
}

// debounce 函数测试
window.addEventListener('scroll', debounce(() => {
    console.log('拖动滚动条出发防抖事件');
}, 1000))