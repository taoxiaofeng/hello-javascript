
var jkxyModule = function(vip) {
    //声明私有成员
    var Yvip = document.getElementById(vip);
    YQ = '12345679';

    return {
        //公开的成员
        add:function(t) {
            if(t >= 12) {
                var Yv = t;
                Yvip.innerHTML = "年费：" + Yv + "--群：" + YQ;
            } else {
                var Mv = t;
                Yvip.innerHTML = "月费：" + Mv;
            } 
        }
    }
}

var jm = new jkxyModule("vip");
jm.add(12);