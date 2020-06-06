/**
 * 计算可能值的总数
 * @param lowerValue 最小值
 * @param upperValue 最大值
 */
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

// var num = selectFrom(2, 10); // 介于2和10之间（ 包括 2 和 10）的一个数
// alert(num);

var colors = ["red","green","blue","yellow","black","purple","brown"];
var color = colors[selectFrom(0, colors.length-1)];
document.write(color);
