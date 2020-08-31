var shadeIndex = 0;
var notificationIndex = 0;
var msgCount = 0;
var _deptId = '',
    _userId = '',
    _userName = '';

// ����������ر�
window.onbeforeunload = function(e) {
    e = e || window.event;

    // ����IE8��Firefox 4֮ǰ�İ汾
    if (e) {
        e.returnValue = '�ر���ʾ';
    }

    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    return '�ر���ʾ';
};

// ��װһ�� showModalDialog
var has_showModalDialog = !!window.showModalDialog; //����һ��ȫ�ֱ����ж��Ƿ���ԭ��showModalDialog����
if (!has_showModalDialog && !!(window.opener)) {
    window.onbeforeunload = function() {
        window.opener.hasOpenWindow = false; //�����ر�ʱ����opener�����Ӵ����Ѿ��ر�
    }
}
//����window.showModalDialog�����������
if (window.showModalDialog == undefined) {
    window.showModalDialog = function(url, mixedVar, features) {
        // if (window.hasOpenWindow) {
        //     alert("���Ѿ�����һ�����ڣ����ȴ�����"); //�����ε���ᵯ���������
        //     window.myNewWindow.focus();
        //     return false;
        // }
        window.hasOpenWindow = true;
        if (mixedVar) var mixedVar = mixedVar;
        //��window.showmodaldialog �� window.open ������һ�������Է�װ��ʱ��������ȥ��ʽ��һ�²���
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

    // �� showModalDialog ��رգ� �رջ�ȡ��Ϣ�Ķ�ʱ��
    // clearInterval(taskInterval);
}

// ������Ϣ֪ͨ
function createNotification() {
    // removeAppointNode(nodeListToArr(document.body.childNodes || []), 'notification-node');
	$('#notification-node').remove();
    var notificationEl = document.createElement('div');
    notificationEl.style.cssText =
        'width: 360px;' +
        'height: 120px;' +
        'line-height:120px;' +
        'color:#333333;' +
        'font-size:14px;' +
        'padding:10px;' +
        'text-align:center;' +
        'background: #48dbfb;' +
        'position: absolute;' +
        'right: 10px;' +
        'bottom: 10px;' +
        'z-index: 9999;' +
        'cursor: pointer;';
    notificationEl.innerHTML = '����<b>' + msgCount + '</b>���µ���Ϣ�������鿴��<iframe id="iframe1" src="about:blank" frameBorder="0" marginHeight="0" marginWidth="0"' +  
'style="position:absolute; visibility:inherit; top:0px;left:0px;width:360px;height:120px;z-index:-1; filter:alpha(opacity=0);opacity:0;"></iframe>';
    notificationEl.setAttribute('id', 'notification-node');
    notificationEl.setAttribute('notification-index', notificationIndex++);
    document.body.appendChild(notificationEl);

    notificationEl.onclick = function() {
        document.body.removeChild(notificationEl);
        notificationIndex--;
        createShade();
    }
};

// ɾ�� body ��ָ����dom �ڵ�
function removeAppointNode(nodeList, id) {
    for (var i = 0, len = nodeList.length; i < len; i++) {
        if (nodeList[i].id == id) {
            document.body.removeChild(nodeList[i]);
        };
    }
};

// nodelist ת Array  => ���ݵͰ汾 IE д��
function nodeListToArr(data) {
    var arr = [];
    try {
        //ie8�����²�֧��
        arr = Array.prototype.slice.call(data);
    } catch (e) {
        //����д��
        var len = data.length;
        for (var i = 0; i < len; i++) {
            arr.push(data[i]);
        }
    };
    return arr;
};

// ��ʾ showModalDialog
function _showModalDialog() {
    var iWidth = 800;
    var iHeight = 600;
    var url =
        "http://192.168.191.47:9999/client/index.html?userId=" + _userId + "&userName=" + _userName + "&organizationCode=12370600493502999Y&deptId=" + _deptId + "&inPatientArea=&groupId=";
    // �����������������
    // ��ô��ڵĴ�ֱλ�� 
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    // ��ô��ڵ�ˮƽλ�� 
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;

    var winOption = "dialogWidth:800px;dialogHeight:600px;dialogTop:" + iTop + ";dialogLeft:" +
        iLeft +
        ";center:yes;resizable:yes;scroll:yes;status=0;"

    window.showModalDialog(url, '����Ϣ�ͻ���', winOption);

};

// ��ȡ��Ϣ
var _count = 0;

function accessToTask(deptId, userId, userName) {
    //console.log(_count++, 'deptId:', deptId, 'userId:', userId, 'userName:', userName);
    //alert(deptId + "," + userId + "," + userName + "");
	if(deptId) { _deptId = deptId };
	if(userId) { _userId = userId };
	if(userName) { _userName = userName };
    var tempUrl = 'http://192.168.191.47:9999/auditcenter/api/v1/reject/backTaskCount';
    var tempParams = {
        "deptId": _deptId,
        "groupId": "",
        "inPatientArea": "",
        "nameOrBedno": "",
        "organizationCode": "12370600493502999Y",
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
                    alert('�ӿڵ����쳣');
					clearInterval(taskInterval);
                }
            },
            error: function(res) {
				clearInterval(taskInterval);
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
}
accessToTask();

// ��ѯ��ȡ��Ϣ
var taskInterval = null;
taskInterval = setInterval(function() {
    accessToTask();
}, 2000);

// ʵʱ���� showModalDialog �Ƿ�ر�
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
    // ��������
    $('#create-shade').click(function() {
        createShade();
    });

    // ����֪ͨ
    $('#create-notification').click(function() {
        createNotification();
    });
})