<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 上午 10:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/BMS_ssm/css/bootstrap.min.css" rel="stylesheet">
    <link href="/BMS_ssm/css/ms.css" rel="stylesheet">
    <title>Title</title>
</head>
<body onload="clock()">
<jsp:include page="header.jsp"></jsp:include>
<%--<% ActionContext.getContext().getSession().put("loginuser",""); %>--%>
<jsp:include page="navigationbar.jsp"></jsp:include>
<div class="centerdiv">
    <div class="form1divclass">
        <form class="form1class"  onsubmit="return oksubmit()" action="../loginUser" method="post">
            <ul class="form1ul">
                <li class="form1li">
                    <span class="text01">用户名</span>
                    <input class="form1text" type="text"  placeholder="请输入用户名" required id="username" name="name" onblur="checkName()">
                    <span id="valname" class="valname"></span>
                </li>
                <li class="form1li">
                    <span class="text01">密码</span>
                    <input class="form1text" type="password" placeholder="请输入密码" required id="password" name="password" onblur="checkPassword()">
                    <span id="valpassword" class="valpassword"></span>
                </li>
            </ul>
            <input type="submit" value="登录" class="loginbtn">
        </form>
    </div>
</div>
<jsp:include page="footer.jsp"></jsp:include>
<script src="/BMS_ssm/js/jquery1.12.4.min.js"></script>
<script src="/BMS_ssm/js/bootstrap.min.js"></script>
<script src="/BMS_ssm/js/util.js"></script>
<script src="/BMS_ssm/js/usercheck.js"></script>

</body>
</html>
