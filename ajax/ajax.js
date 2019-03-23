$(function(){
    //成为焦点  错误信息隐藏
    $(".list input").on('focus',function(){
        $(this).next().hide();
    });

    //失去焦点 为空判断 格式校验
    $(".list .name").on('blur',function(){
        var value = $(this).val();
        var filter = /^[\u4e00-\u9fa5]{2,4}$/; //正则
        if(value == '') {
            $(this).next().show().text("用户名不能为空");
        } else if(!filter.text(value)) {
            $(this).next().show().text("用户名格式错误");
        } else {
            $(this).next().hide();
        }
    });
})