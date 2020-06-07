/**
 * 克隆对象
 */
function clone(obj) {
    if (typeof obj === 'object') {
        let cloneobj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloneobj[key] = clone(obj[key]);
            }
        }
        return cloneobj;
    } else {
        return obj;
    }
}

/**
 * 测试 clone 函数
 */
let obj = {
    a: {
        b: {
            c: 'aaa'
        }
    }
}

let cloneobj = clone(obj);
cloneobj.a1 = {
    test: 'aaa'
}
console.log(obj)
console.log(cloneobj);
