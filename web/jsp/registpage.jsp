<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 上午 10:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/BMS_ssm/css/bootstrap.min.css" rel="stylesheet">
    <link href="/BMS_ssm/css/ms.css" rel="stylesheet">
    <title>Title</title>
</head>
<body onload="clock()">
<jsp:include page="header.jsp"></jsp:include>
<% request.getSession().setAttribute("loginuser",""); %>
<jsp:include page="navigationbar.jsp"></jsp:include>
<div class="centerdiv">
    <div class="form1divclass">
        <form class="form1class addclass" onsubmit="return checkform()" action="../registUser" method="post">
            <ul class="form1ul">
                <li class="form1li">
                    <span class="text01">用户名</span>
                    <input id="username" name="name" class="form1text" type="text" pattern="^(?=[a-zA-Z])(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{2,20}$"
                           placeholder="请输入用户名"  required>
                    <span id="valname" class="valname"></span>
                </li>
                <li class="form1li">
                    <span class="text01">密码</span>
                    <input id="password" name="password" class="form1text" type="password" pattern="^(?![0-9]+$)[a-zA-Z0-9]{1,8}$"
                           placeholder="请输入密码"  required>
                    <span id="valpassword" class="valpassword"></span>
                </li>
                <li class="form1li">
                    <span class="text01">确认密码</span>
                    <input id="passwordconfirm" class="form1text" type="password" placeholder="请输入密码"
                           required>
                    <span id="valconfirm" class="valpassword"></span>
                </li>
            </ul>
            <input type="submit" value="注册" class="regbtn" id="regist">
        </form>
    </div>
</div>
<jsp:include page="footer.jsp"></jsp:include>
<script src="/BMS_ssm/js/jquery1.12.4.min.js"></script>
<script src="/BMS_ssm/js/jquery-1.12.4.js"></script>
<script src="/BMS_ssm/js/bootstrap.min.js"></script>
<script src="/BMS_ssm/js/registuser.js"></script>
<script src="/BMS_ssm/js/util.js"></script>
</body>
</html>
