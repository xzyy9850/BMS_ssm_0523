// 通过id获取对应dom节点
function getId(id) {
    return document.getElementById(id);
}
// 通过name获取对应dom节点
function getNames(name) {
    return document.getElementsByName(name)
}
// 导航栏时钟
function clock() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var dayOfMonth = (date.toString().split(" "))[2];
    var years = (date.toString().split(" "))[3];
    var time = (date.toString().split(" "))[4];
    getId("current_time").innerText = years + "-" + month + "-" + dayOfMonth + " " + time;
    setTimeout("clock()", 1000);
}
$(document).ready(function () {
    // 导航栏鼠标滑过时，显示隐藏的添加和查询按钮
    $("#manage").mouseover(function () {
        $("#updownimg").attr("src", "/BMS_ssm/images/up.png");
        $("#managediv").fadeIn(1000);
    })
    // $("#manage").mouseleave(function () {
    //     $("#updownimg").attr("src", "../images/down.png");
    //     $("#managediv").fadeOut(1000);
    // })
    // 鼠标离开隐藏区域时，隐藏该区域
    $("#managediv").mouseleave(function () {
        $("#updownimg").attr("src", "/BMS_ssm/images/down.png");
        $("#managediv").fadeOut(1000);
    })
    // $("#managediv").mouseover(function () {
    //     $("#updownimg").attr("src", "../images/down.png");
    //     $("#managediv").fadeIn(1000);
    // })

    // 点击查询按钮判断是否登录
    $("#jumpselectpagebtn").click(function () {
        if($("li[name='log']").text()!="请登录"){
            window.location.href="detailspage.jsp";
        }else {
            alert("请登录！");
            window.location.href="loginpage.jsp";
        }
    })
    // 点击添加按钮判断是否登录
    $("#jumpaddpagebtn").click(function () {
        if($("li[name='log']").text()!="请登录"){
            window.location.href="addpage.jsp";
        }else {
            alert("请登录！");
            window.location.href="loginpage.jsp";
        }
    })
});