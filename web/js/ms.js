function getId(id) {
    return document.getElementById(id);
}

function getNames(name) {
    return document.getElementsByName(name)
}

function clock() {
    var date = new Date();
    // var a = date.getSeconds();
    // var b = date.getMinutes();
    // var c = date.getHours();
    var month = date.getMonth() + 1;
    var dayOfMonth = (date.toString().split(" "))[2];
    var years = (date.toString().split(" "))[3];
    var time = (date.toString().split(" "))[4];
    // document.write(time1);
    // return time1;
    // var time = c + ":" + b + ":" + a;
    getId("current-time").innerText = years + "-" + month + "-" + dayOfMonth + " " + time;
    setTimeout("clock()", 1000);
}

function checkName() {
    if (getId("username").validity.valueMissing) {
        getId("valname").innerHTML = "请输入用户名";
        return false;
    } else {
        if (!getId("username").validity.patternMismatch) {
            getId("valname").innerHTML = "用户名验证通过";
            return true;
        } else {
            getId("valname").innerHTML = "用户名为a-z,3-6位";
            return false;
        }
    }
}

function checkPassword() {
    if (getId("password").validity.valueMissing) {
        getId("valpassword").innerHTML = "密码不能为空";
        return false;
    } else {
        if (!getId("password").validity.patternMismatch) {
            getId("valpassword").innerHTML = "密码验证通过";
            return true;
        } else {
            getId("valpassword").innerHTML = "密码不能超过10位";
            return false;
        }
    }
}

function confirm() {
    if (getId("passwordconfirm").validity.valueMissing) {
        getId("valconfirm").innerHTML = "请再次输入密码";
        return false;
    }else{
        if (getId("passwordconfirm").value == getId("password").value) {
            getId("valconfirm").innerHTML = "确认密码通过"
            return true;
        }
        else {
            getId("valconfirm").innerHTML = "密码不一致"
            return false;
        }
    }
}

function oksubmit() {
    if (checkName()==true && checkPassword()==true) {
        alert("验证通过");
        return true;
    }
    else {
        alert("验证未通过");
        return false;
    }
}

function choose() {
    if (getId("colcheckbox").getAttribute("checked")) {
        getId("colcheckbox").removeAttribute("checked");
        for (var i = 0; i < getNames("add").length; i++) {
            getNames("add")[i].checked=false;
        }
    }
    else {
        getId("colcheckbox").setAttribute("checked", "checked");
        for (var i = 0; i < getNames("add").length; i++) {
            getNames("add")[i].checked=true;
        }
    }
}

$(document).ready(function () {
    $("#manage").mouseover(function () {
        $("#updownimg").attr("src", "images/up.png");
        $("#managediv").fadeIn(1000);
    })
    $("#managediv").mouseleave(function () {
        $("#updownimg").attr("src", "images/down.png");
        $("#managediv").fadeOut(1000);
    })
});