/**
 * 事件的绑定、解绑、触发
 */
class Event {
    constructor() {
        this._cache = {}; // 用于存储绑定的事件
    }

    // 绑定
    on(type, callback) {
        if (!this._cache[type]) {
            this._cache[type] = [];
        }
        // indexOf这个方法先注意一下
        // if (this._cache[type].indexOf(callback) === -1) {
        //     this._cache[type].push(callback);
        // }
        // 通过 函数名称去判断 
        let flag = false;
        this._cache[type].forEach((val, index) => {
            if (val.name === callback.name) {
                flag = true;
            }
        });
        if (!flag) {
            this._cache[type].push(callback);
        }
    }

    // 解绑
    off(type, callback) {
        if (!this._cache[type]) {
            console.error(new Error('this type is not defined'));
        } else {
            // if (this._cache[type].indexOf(callback) !== -1) {
            //     this._cache[type].splice(this._cache[type].indexOf(callback), 1);
            // }
            this._cache[type].forEach((val, index) => {
                if (val.name == callback.name) {
                    this._cache[type].splice(index, 1);
                }
            })
        }
    }

    // 触发方法
    trigger(type, data) {
        if (this._cache[type]) {
            this._cache[type].forEach((val) => {
                val(data);
            })
        }
    }
}

let e = new Event();
e.on('click', function clg() {
    console.log('hello world clg')
})

e.on('click', function clg() {
    console.log('hello world clg')
})

e.on('click', function clg2() {
    console.log('hello world clg2')
})

// e.off('click', function clg() {
//     console.log('off hello world')
// })


// e.off('click', function clg2() {
//     console.log('off hello world')
// })

e.trigger('click');
console.log(e);