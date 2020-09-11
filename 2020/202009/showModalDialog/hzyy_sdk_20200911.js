var shadeIndex = 0;
var notificationIndex = 0;
var msgCount = 0;
var _deptId = '',
    _userId = '',
    _userName = '',
    _pollingUrl = 'http://10.1.1.71:9999';

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
    //removeAppointNode(nodeListToArr(document.body.childNodes || []), 'shade-node');
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
    $('#notification-node').remove();
    var notificationEl = document.createElement('div');
    notificationEl.style.cssText = 'width:350px;height:96px;color:#333333;font-size:14px;padding:10px;text-align:center;background: #48dbfb;' +
        'position:fixed;right:10px;bottom:10px;z-index:9999;cursor:pointer;';
    notificationEl.innerHTML = '<div style="color:#333333;font-weight:600;position:absolute;top:10px;left:10px;">审方消息提醒：</div><div style="line-height:96px;">您有<b>' + msgCount + '</b>条新的消息，请点击查看。</div><iframe id="iframe1" src="about:blank" frameBorder="0" marginHeight="0" marginWidth="0"' +
        'style="position:absolute; visibility:inherit; top:0px;left:0px;width:350px;height:106px;z-index:-1; filter:alpha(opacity=0);opacity:0;"></iframe>';
    notificationEl.setAttribute('id', 'notification-node');
    notificationEl.setAttribute('notification-index', notificationIndex++);
    document.body.appendChild(notificationEl);

    notificationEl.onclick = function() {
        document.body.removeChild(notificationEl);
        notificationIndex--;
        createShade();
    }
};

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
        _pollingUrl + "/client/index.html?userId=" + _userId + "&userName=" + _userName + "&organizationCode=H0003&deptId=" + _deptId + "&inPatientArea=&groupId=";
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
var _count = 0;

function accessToTask(deptId, userId, userName, pollingUrl) {
    //console.log(_count++, 'deptId:', deptId, 'userId:', userId, 'userName:', userName);
    //alert(deptId + "," + userId + "," + userName + "");
    if (deptId) { _deptId = deptId };
    if (userId) { _userId = userId };
    if (userName) { _userName = userName };
    if (pollingUrl) { _pollingUrl = pollingUrl };
    // 本地测试使用了 nginx 代理，所以请求地址不用拼接 url
    // 如果未采用 nginx 转发的形式，请求url 需要拼接ip 和端口号
    // 示例： var tempUrl = 'http://10.1.1.71:9999/auditcenter/api/v1/reject/backTaskCount';
    // 或者  var tempUrl = _pollingUrl + '/auditcenter/api/v1/reject/backTaskCount';
    var tempUrl = '/auditcenter/api/v1/reject/backTaskCount';
    var tempParams = {
        "deptId": _deptId,
        "groupId": "1",
        "inPatientArea": "1900001",
        "nameOrBedno": "",
        "organizationCode": "H0003",
        "status": 0,
        "userId": _userId,
        "userName": _userName
    }

    $.ajax({
        url: tempUrl + '?t=' + new Date().getTime(),
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
                alert('接口调用异常');
                clearInterval(taskInterval);
            }
        },
        error: function(res) {
            clearInterval(taskInterval);
        }
    })
}
accessToTask();

// 轮询获取消息
var taskInterval = null;
taskInterval = setInterval(function() {
    accessToTask();
}, 2000);

// 实时监听 showModalDialog 是否关闭
// var taskIntervalCount = 0;
// var dialogStatusMonitor = setInterval(function() {
//     if (window.myNewWindow) {
//         // if (window.myNewWindow.closed && taskIntervalCount == 0) {
//         //     taskInterval = setInterval(function() {
//         //         accessToTask();
//         //     }, 2000);
//         // }
//     }
// }, 1000);
// var _opener = function (child) {
// }

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