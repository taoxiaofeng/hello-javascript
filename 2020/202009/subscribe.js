// 自定义一个时间管理对象
var eventManager = {};

// 事件管理列表
eventManager.list = [];

// 监听事件
eventManager.subscribe =function (key, fn) {
    // 判断该事件是否被监听
    if(!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn);
}


// 发布事件
eventManager.publish = function() {
    // 利用arguments取参数
    let key = [].shift.call(arguments), fns = this.list[key];
    if(!fns || fns.length === 0) {
        return false;
    }

    //依次调用相关函数
    fns.forEach((fn) => {
        fn.apply(this, arguments);
    });
}

/**
 * 测试
 */

eventManager.subscribe('fire', function (person) {
    console.log(person + '订阅了fire事件');
});

eventManager.publish('fire', '小红'); // 小红订阅了fire事件
eventManager.publish('fire', '小明'); // 小明订阅了fire事件

