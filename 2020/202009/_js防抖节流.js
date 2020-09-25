/**
 * 防抖节流实现
 */

// 防抖实现
// function debounce(fn, delay = 300) {
//     // 默认300ms
//     let timer;
//     return function () {
//         var args = arguments;
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, args); // 改变this指向为调用 debounce所指向对象
//         }, delay);
//     }
// }



// 节流  
// 方法一： 设置一个标志
// function throttle(fn, delay) {
//     let flag = true;
//     return () => {
//         if (!flag) { return; }
//         flag = false;
//         timer = setTimeout(() => {
//             fn();
//             flag = true;
//         }, delay);
//     };
// }

// 方法二： 使用时间戳
function throttle(fn, delay) {
    let startTime = new Date();
    return () => {
        let endTime = new Date();
        if(endTime - startTime >= delay) {
            fn();
            startTime = endTime;
        } else {
            return;
        }
    }
}


// // debounce / throttle 函数测试
// window.addEventListener('scroll', debounce(() => {
//     console.log('拖动滚动条出发防抖事件');
// }, 1000))

window.addEventListener('scroll', throttle(() => {
    console.log('拖动滚动条出发防抖事件');
}, 1000))

