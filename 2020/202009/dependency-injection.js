/**
 * 依赖注入(Dependency Injection)   或者  控制反转 （ Inverse of Control ）
 * 思想：模块A 调用 模块B， 把B作为参数传入模块A
 * 实现： 高阶函数 => 依赖注入
 */

let DingDing = function () {
    return {
        productName: 'DingDing',
        useVideo: function () {
            console.log('正在使用钉钉');
        }
    }
}

let TencentMeeting = function () {
    return {
        productName: 'TencentMeeting',
        useVideo: function () {
            console.log("正在使用腾讯会议");
        }
    }
}

// let student_mormal = function() {
//     DingDing().useVideo();
//     TencentMeeting(),useVideo();
// }

// student_mormal();

let student_DI = function (fn) {
    fn().useVideo();
}

student_DI(TencentMeeting);

/**
 * 高阶函数例子
 */
// function wrapper(fn) {
//     fn.sayName = 'xiaoming';
//     return fn;
// }

