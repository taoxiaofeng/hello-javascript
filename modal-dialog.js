// $(function() {
var shadeIndex = 0;
var notificationIndex = 0;
var msgCount = 0;

// 浏览器监听关闭
window.onbeforeunload = function(e) {
    e = e || window.event;

    // 兼容IE8和Firefox 4之前的版本
    if (e) {
        e.returnValue = '关闭提示';
    }

    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    return '关闭提示';
};

// 封装一个 showModalDialog
var has_showModalDialog = !!window.showModalDialog; //定义一个全局变量判定是否有原生showModalDialog方法
if (!has_showModalDialog && !!(window.opener)) {
    window.onbeforeunload = function() {
        window.opener.hasOpenWindow = false; //弹窗关闭时告诉opener：它子窗口已经关闭
    }
}
//定义window.showModalDialog如果它不存在
if (window.showModalDialog == undefined) {
    window.showModalDialog = function(url, mixedVar, features) {
        // if (window.hasOpenWindow) {
        //     alert("您已经打开了一个窗口！请先处理它"); //避免多次点击会弹出多个窗口
        //     window.myNewWindow.focus();
        //     return false;
        // }
        window.hasOpenWindow = true;
        if (mixedVar) var mixedVar = mixedVar;
        //因window.showmodaldialog 与 window.open 参数不一样，所以封装的时候用正则去格式化一下参数
        if (features) var features = features.replace(/(dialog)|(px)/ig, "").replace(/;/g, ',')
            .replace(/\:/g, "=");
        //window.open("Sample.htm",null,"height=200,width=400,status=yes,toolbar=no,menubar=no");
        //window.showModalDialog("modal.htm",obj,"dialogWidth=200px;dialogHeight=100px"); 
        var left = (window.screen.width - parseInt(features.match(/width[\s]*=[\s]*([\d]+)/i)[
                1])) /
            2;
        var top = (window.screen.height - parseInt(features.match(/height[\s]*=[\s]*([\d]+)/i)[
            1])) / 2;
        window.myNewWindow = window.open(url, mixedVar, features);
    }
}



function createShade() {
    // removeAppointNode(nodeListToArr(document.body.childNodes || []), 'shade-node');
    $('#shade-node').remove();
    var shadeDiv = document.createElement('div');
    shadeDiv.setAttribute('shade-index', shadeIndex++);
    shadeDiv.setAttribute('id', 'shade-node')
        // shadeDiv.style.cssText =
        //     'position: absolute;' +
        //     'top: 0;' +
        //     'right: 0;' +
        //     'bottom: 0;' +
        //     'left: 0;' +
        //     'background: rgba(0,0,0,.3)';
    document.body.appendChild(shadeDiv);
    _showModalDialog();

    // 打开 showModalDialog 后关闭， 关闭获取消息的定时器
    // clearInterval(taskInterval);
}

// 创建消息通知
function createNotification() {

    // removeAppointNode(nodeListToArr(document.body.childNodes || []), 'notification-node');
    // if ($('#notification-node').length > 1) {
    $('#notification-node').remove();
    // }
    // var html = '<!DOCTYPE html>' +
    //     '<html lang="en">' +
    //     '<head>' +
    //     '<meta charset="UTF-8">' +
    //     '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    //     '<title>消息提醒</title>' +
    //     '<style>' +
    //     '.dialog-box{width:100%;height:120px;line-height:120px;color:#333333;font-size:14px;text-align:center;background:#48dbfb;}' +
    //     '</style>' +
    //     '</head>' +
    //     '<body>' +
    //     '<div class="dialog-box" id="dialog-box">' +
    //     ' 您有<b>' + msgCount + '</b>条新的消息，请点击查看。' +
    //     '</div>' +
    //     '</body>' +
    //     '</html>';
    // var notificationEl = document.createElement('iframe');
    var notificationEl = document.createElement('div');
    notificationEl.style.cssText = 'width:350px;height:96px;color:#333333;font-size:14px;padding:10px;text-align:center;background: #48dbfb;' +
        'position:absolute;right:10px;bottom:10px;z-index:9999;cursor:pointer;border-radius:4px;';
    notificationEl.innerHTML = '<div style="color:#333333;font-weight:600;position:absolute;top:10px;left:10px;">审方消息提醒：</div><div style="line-height:96px;">您有<b>' + msgCount + '</b>条新的消息，请点击查看。</div><iframe id="iframe1" src="about:blank" frameBorder="0" marginHeight="0" marginWidth="0"' +
        'style="position:absolute; visibility:inherit; top:0px;left:0px;width:350px;height:96px;z-index:-1; filter:alpha(opacity=0);"></iframe>';
    // notificationEl.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
    notificationEl.setAttribute('id', 'notification-node');
    // notificationEl.setAttribute('src', 'dialog.html');
    // notificationEl.setAttribute('width', '360px');
    // notificationEl.setAttribute('height', '140px');
    // notificationEl.setAttribute('align', 'right');
    // notificationEl.setAttribute('frameborder', '0');
    // notificationEl.setAttribute('style', 'position: fixed;bottom: 10px;right: 10px;');
    // notificationEl.setAttribute('name', 'iframeChild');
    notificationEl.setAttribute('notification-index', notificationIndex++);
    document.body.appendChild(notificationEl);

    // $('#notification-node')[0].click(function() { //点击iframe
    //     console.log(111)
    // });

    // setTimeout(function() {
    //     var childWindow = document.getElementById("notification-node").contentWindow;
    //     // if (childWindow.document.readyState == "complete") {
    //     //     // childWindow.document.body.innerHTML = '<div class="dialog-box"> 您有<b> ' + msgCount + '</b>条新的消息，请点击查看。</div>'
    //     // }

    //     // childWindow.addEventListener("click", function(e) {
    //     //     alert("111");
    //     //     // notificationIndex--;
    //     //     childWindow.parent.postMessage(true);
    //     // }, false)

    //     // childWindow.parent.postMessage(true);
    //     $(childWindow).bind("click", function(e) {
    //         // document.body.removeChild(notificationEl);
    //         notificationIndex--;
    //         createShade();
    //     })
    // }, 100);


    notificationEl.onclick = function() {
        document.body.removeChild(notificationEl);
        notificationIndex--;
        createShade();
    }
};

// window.addEventListener('message', function(e) {
//     if (e.data) {
//         notificationIndex--;
//         createShade();
//     }

//     // alert(e.data);

// }, false);

// 删除 body 中指定的dom 节点
function removeAppointNode(nodeList, id) {
    for (var i = 0, len = nodeList.length; i < len; i++) {
        if (nodeList[i].id == id) {
            document.body.removeChild(nodeList[i]);
        };
    }
};

// nodelist 转 Array  => 兼容低版本 IE 写法
function nodeListToArr(data) {
    var arr = [];
    try {
        //ie8及以下不支持
        arr = Array.prototype.slice.call(data);
    } catch (e) {
        //兼容写法
        var len = data.length;
        for (var i = 0; i < len; i++) {
            arr.push(data[i]);
        }
    };
    return arr;
};

// 显示 showModalDialog
function _showModalDialog() {
    var iWidth = 800;
    var iHeight = 600;
    var url =
        "http://10.1.1.120:9999/client/index.html?userId=09&userName=%E7%8E%8B%E8%90%8C%E8%90%8C3&organizationCode=H0003&deptId=1900000&inPatientArea=1900001&groupId=1";
    // 以浏览器窗口来计算
    // 获得窗口的垂直位置 
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    // 获得窗口的水平位置 
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;

    var winOption = "dialogWidth:800px;dialogHeight:600px;dialogTop:" + iTop + ";dialogLeft:" +
        iLeft +
        ";center:yes;resizable:yes;scroll:yes;status=0;"

    window.showModalDialog(url, '审方消息客户端', winOption);

};

// 获取消息
function accessToTask() {
    var xmlhttp;
    var result;
    var nowDate = new Date().getTime();
    var tempUrl = 'auditcenter/api/v1/reject/backTaskCount?&t=' + nowDate;
    var tempParams = {
        deptId: "1900000",
        "groupId": "1",
        "inPatientArea": "1900001",
        "nameOrBedno": null,
        "organizationCode": "H0003",
        "status": 0,
        "userId": "09",
        "userName": "王萌萌3"
    }

    $.ajax({
            url: tempUrl,
            type: "POST",
            data: JSON.stringify(tempParams),
            dataType: 'json',
            contentType: "application/json;charset=UTF-8",
            success: function(res) {
                if (res.code == '200') {
                    msgCount = res.data.unCount;
                    if (msgCount > 0) {
                        createNotification();
                    }
                } else {

                }
            },
            error: function(res) {

            }
        })
        // if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        //     xmlhttp = new XMLHttpRequest();
        // } else { // code for IE6, IE5
        //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // xmlhttp.onreadystatechange = function() {
        //     if (xmlhttp.readyState == 4) {
        //         if (xmlhttp.status == 200) {
        //             if (xmlhttp.response) {
        //                 console.log(xmlhttp.response);
        //                 result = JSON.parse(xmlhttp.response);
        //                 msgCount = result.data.unCount;
        //             }
        //             if (msgCount > 0) {
        //                 createNotification();
        //             }
        //         } else {
        //             clearInterval(taskInterval);
        //         }
        //     }
        // }

    // xmlhttp.open('POST', tempUrl, true);
    // xmlhttp.setRequestHeader('Content-type', 'application/json;charset-UTF-8');
    // xmlhttp.send(JSON.stringify(tempParams));
    // setInterval(function() {
    //     arguments.callee();
    // }, 2000)
}
// accessToTask();
taskPolling();

// 轮询获取消息
// var taskInterval = null;

function taskPolling() {
    taskInterval = setInterval(function() {
        accessToTask();
    }, 2000);
}

// 实时监听 showModalDialog 是否关闭
var taskIntervalCount = 0;
var dialogStatusMonitor = setInterval(function() {
    if (window.myNewWindow) {
        if (window.myNewWindow.closed) {
            taskPolling();
        }
    }
}, 1000);

$(function() {
        // 创建遮罩
        $('#create-shade').click(function() {
            createShade();
        });

        // 创建通知
        $('#create-notification').click(function() {
            createNotification();
        });
    })
    // var _opener = function (child) {
    // }
    // })