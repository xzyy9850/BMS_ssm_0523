// 通过id获取对应dom节点
function getId(id) {
    return document.getElementById(id);
}
// 通过name获取对应dom节点
function getNames(name) {
    return document.getElementsByName(name)
}
// 检查用户名格式
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
// 检查密码格式
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
// 确认密码
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
// 表单内容格式全部正确可以提交
function oksubmit() {
    if (checkName()&& checkPassword()&&confirm()) {
        alert("验证通过");
        return true;
    }
    else {
        alert("验证未通过");
        return false;
    }
}

// function choose() {
//     if (getId("colcheckbox").getAttribute("checked")) {
//         getId("colcheckbox").removeAttribute("checked");
//         for (var i = 0; i < getNames("add").length; i++) {
//             getNames("add")[i].checked=false;
//         }
//     }
//     else {
//         getId("colcheckbox").setAttribute("checked", "checked");
//         for (var i = 0; i < getNames("add").length; i++) {
//             getNames("add")[i].checked=true;
//         }
//     }
// }
