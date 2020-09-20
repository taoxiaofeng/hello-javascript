function insert(ary) {

    // 1、准备一个新数组，用来存储抓到手里的牌，开始先抓一张牌进来
    let handle = [];
    handle.push(ary[0]);

    // 2、从第二项开始一次抓抓牌，一直把台面上的牌抓光
    for (let i = 1; i < ary.length; i++) {
        // A 是新抓的牌
        let A = ary[i];
        // 和 handle 手里的牌依次比较(从后向前比)
        for (let j = handle.length - 1; j >= 0; j--) {
            // 每一次要比较的手里的牌
            let B = handle[j];
            // 如果当前新牌A 比 要比较的牌B大了， 把A 放到B 的后面
            if (A > B) {
                handle.splice(j + 1, 0, A);
                break;
            }

            // 已经比到第一项， 我们把新牌放到手里最前面即可
            if (j === 0) {
                handle.unshift(A);
            }

        }

    }
    return handle;

}

let ary = [12, 8, 24, 16, 1];
console.log(insert(ary));