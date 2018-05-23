// 通过id获取对应dom节点
function getId(id) {
    return document.getElementById(id);
}
// 导航栏时钟和页面倒计时
var countdowntime = 3;
function timeclock() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var dayOfMonth = (date.toString().split(" "))[2];
    var years = (date.toString().split(" "))[3];
    var time = (date.toString().split(" "))[4];
    getId("current_time").innerText = years + "-" + month + "-" + dayOfMonth + " " + time;
    getId("runTime").innerText = countdowntime;
    countdowntime--;
    setTimeout("timeclock()", 1000);
}
