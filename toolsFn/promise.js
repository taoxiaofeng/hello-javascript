/**
 * 简单promise实现
 */
class MyPromise {
  constructor(executor) {
    this.status = "pending"; // Promise当前的状态
    this.value = undefined; // Promise的值
    this.reason = undefined; // Promise的原因
    this.onResolvedCallbacks = []; // Promise resolve时的回调函数集
    this.onRejectedCallbacks = []; // Promise reject时的回调函数集

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
    if (this.status === "pending") {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

// 使用MyPromise
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve("success");
    reject('请求失败！！！')
  }, 1000);
});

p.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
