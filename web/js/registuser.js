// 通过id获取对应dom节点
function getID(id) {
    return document.getElementById(id);
}

// 通过name获取对应dom节点
function getNames(name) {
    return document.getElementsByName(name);
}

// 定义用户名输入状态
var checkuser = false;
// 定义密码输入状态
var checkpwd = false;
// 定义确认密码状态
var confpwd = false;

// 注册，如果用户名可用，密码和确认密码一致，注册成功
function checkform() {
    if (checkuser == true && checkpwd && confpwd) {
        return true;
    } else {
        return false;
    }
}

$(function () {
    // 用户名输入框失去焦点后，异步判断用户名是否已存在
    $("#username").blur(function () {
        var username = $("#username").val();
        if ("" == username || null == username) {
            $("#valname").html("用户名不能为空");
            checkuser = false;
        } else {
            if (!getId("username").validity.patternMismatch) {
                $.ajax({
                    url: "../selectUser",
                    data: {name: username},
                    type: "post",
                    datatype: "json",
                    timeout: 2000,
                    success: function (data) {
                        var record = data;
                        if (record > 0) {
                            $("#valname").html("用户名已存在");
                            checkuser = false;
                        } else {
                            $("#valname").html("用户名可以使用");
                            checkuser = true;
                        }
                    }
                })
            } else {
                if ((/^[0-9]/).test(name)) {
                    $("#valname").html("不能用数字开头");
                } else if ((/^[A-Za-z]+$/).test(name)) {
                    $("#valname").html("不能为纯英文字母");
                } else {
                    $("#valname").html("不能使用特殊字符");
                }
                checkuser = false;
            }
        }
    });

    // 密码输入框失去焦点后，检查密码格式
    $("#password").blur(function () {
        var pwd = $("#password").val();
        if (getID("password").validity.valueMissing) {
            $("#valpassword").html("密码不能为空");
            checkpwd = false;
        } else {
            if (!getID("password").validity.patternMismatch) {
                checkpwd = true;
            } else {
                if (pwd.length > 8) {
                    $("#valpassword").html("密码不能超过8位");
                }else if((/[0-9]+/).test(pwd)){
                    $("#valpassword").html("密码不能为纯数字");
                }
                checkpwd = false;
            }
        }
    });
    // 确认密码输入框失去焦点后，检查密码和确认密码是否一致
    $("#passwordconfirm").blur(function () {
        if (getID("passwordconfirm").validity.valueMissing) {
            getID("valconfirm").innerHTML = "请再次输入密码";
            confpwd = false;
        } else {
            if ($("#passwordconfirm").val() == $("#password").val()) {
                $("#valconfirm").html("确认密码通过");
                confpwd = true;
            } else {
                $("#valconfirm").html("两次密码不一样");
                confpwd = false;
            }
        }
        var checkform = false;
        $("#regist").click(function () {
            if (checkuser && checkpwd && confpwd) {
                checkform = true;
            } else {
                checkform = false;
            }
        })
    });

})
