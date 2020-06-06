class Promise {
    constructor(executor) {
        //参数校检
        if (typeof executor != 'function') {
            throw new TypeError(`Promise resolve ${executor} is not a function`)
        }

        this.initValue();
        this.initBind();

        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error)
        }

    }

    // 绑定 this
    initBind() {
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }

    // 初始化值
    initValue() {
        this.value = null; // 终值
        this.reason = null; // 据因
        this.state = Promise.PENDING; // 状态
        this.onFulfilledCallbacks = []; // 成功回调
        this.onRejectedCallbacks = []; // 失败回调
    }

    resolve(value) {
        // 成功后一系列的操作(状态的改变，成功回调的执行)
        if (this.state === Promise.PENDING) {
            this.state = 'fulfilled';
            this.value = value;
            this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
        }
    }

    reject(reason) {
        // 失败后一系列的操作(状态的改变，失败回调的执行)
        if (this.state === Promise.PENDING) {
            this.state = Promise.REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
        }
    }

    then(onFulfilled, onRejected) {
        // 参数校验
        if (typeof onFulfilled !== 'function') {
            onFulfilled = function (value) {
                return value;
            }
        }

        if (typeof onRejected !== 'function') {
            onRejected = function (reason) {
                throw reason;
            }
        }

        if (this.state === Promise.FULFILLED) {
            //使用setTimeOut() 模拟异步操作
            setTimeout(() => {
                onFulfilled(this.value);
            })
        }

        if (this.state === Promise.REJECTED) {
            setTimeout(() => {
                onRejected(this.reason);
            })
        }

        if (this.state === Promise.PENDING) {
            this.onFulfilledCallbacks.push(value => {
                setTimeout(() => {
                    onFulfilled(this.value);
                })
            });

            this.onRejectedCallbacks.push(reason => {
                setTimeout(() => {
                    onRejected(this.reason);
                })
            })
        }
    }

}

Promise.PENDING = 'pending';
Promise.FULFILLED = 'fulfilled';
Promise.REJECTED = 'rejected';


module.exports = Promise;