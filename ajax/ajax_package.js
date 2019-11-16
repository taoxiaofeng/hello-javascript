function ajax(options) {


    options = options || {};
    options.type = options.type || 'get';
    options.data = options.data || {};
    options.dataType = options.dataType || 'text';



    let xhr = new XMLHttpRequest();

    //数据组装
    let arr = [];
    for (const key in options.data) {
        arr.push(`${name}=${options.data[key]}`);
    }
    let strData = arr.join('&');
    if (options.type == 'post') {
        xhr.open('POST', options.url, true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(strData);
    } else if (options.type == 'get') {
        // 连接  true  同步    false 异步
        xhr.open('GET', `${options.url}?${strData}`, true);
        // 发送
        xhr.send();
    }


    // 请求头修改： 要放在open() 方法之后执行
    // xhr.setRequestHeader('content-type', 'application/json');




    // 接收
    xhr.onreadystatechange = function () {
        // 4 完成
        if (xhr.readyState === 4) {
            // 成功 -2xx 、304
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                let data = xhr.responseText;
                switch (option.dataType) {
                    case "json":
                        if(window.JSON && window.JSON.parse) {
                            data = JSON.parse(data);
                        } else {
                            data = eval(data);
                        }
                        
                        break;
                    case "xml":
                        data = this.responseXML;
                        break;

                    default:
                        data = xhr.responseText;
                        break;
                }
                options.success && options.success(data);
            } else {
                options.error && options.error()
            }
        }
    };
}