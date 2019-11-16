function ajax(url, type = "get", data = {}, success, error) {

    // var xhr = null;
    // if (window.XMLHttpRequest) {
    //     // 不兼容IE6 
    //     xhr = new XMLHttpRequest();
    // } else {
    //     // 兼容 IE6
    //     xhr = new ActiveXObject('Microsoft.XMLHttp');
    // }

    let xhr = new XMLHttpRequest();

    //数据组装
    let arr = [];
    for (const key in data) {
        if (object.hasOwnProperty(key)) {
            arr.push(`${name}=${data[name]}`);
        }
    }
    let strData = arr.join('&');
    if (type == 'post') {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(strData);
    } else if (type == 'get') {
        // 连接  true  同步    false 异步
        xhr.open('GET', `${url}?${strData}`, true);
        // 发送
        xhr.send();
    }


    // 请求头修改： 要放在open() 方法之后执行
    // xhr.setRequestHeader('content-type', 'application/json');




    // 接收
    xhr.onreadystatechange = function () {
        // 4 完成
        if (xhr.readystate === 4) {
            // 成功 -2xx 、304
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                success(xhr.responseText);
            } else {
                error && error()
            }
        }
    };
}