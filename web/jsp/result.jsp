<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 下午 1:02
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

<body onload="timeclock()">
<jsp:include page="header.jsp"></jsp:include>
<jsp:include page="navigationbar.jsp"></jsp:include>
<div class="centerdiv">
    <div class="form1divclass">
        <div class="form1class">
            <div class="resultclass">
                <!-- 前端页面接收请求传回的参数，根据参数不同，给用户不同的提示-->
                <!-- 0：注册失败，并跳转回注册页面-->
                <!-- 1：注册成功，并跳转到登录页面-->
                <!-- 2：登录失败，并跳转回登录页面-->
                <!-- 3：登录成功，并跳转到查询页面-->
            <%--<% int result = Integer.parseInt(request.getParameter("result")); %>--%>
            <%--<% int result = (Integer) request.getSession().getAttribute("result");%>--%>
               <% int result = (Integer)(request.getAttribute("result")); %>
            <% out.write("");
                if ( result == 1) {
                    out.write("注册成功，");
                } else if (result == 0) {
                    out.write("注册失败，");
                }else if (result == 3) {
                    out.write(session.getAttribute("loginuser")+"登录成功，");
//                    out.write("登录成功，");

                }else if (result == 2) {
                    out.write("用户名或密码错误，");
                }%>
            <span id="runTime"></span>
            <% if (result == 1) {
                out.write("秒后跳转到登录页面 ");
                response.setHeader("refresh", "3;URL=/BMS_ssm/jsp/loginpage.jsp");
            } else if (result == 0) {
                out.write("秒后跳转到注册页面 ");
                response.setHeader("refresh", "3;URL=/BMS_ssm/jsp/registpage.jsp");
            }else if (result == 2) {
                out.write("秒后跳转到登录页面 ");
                response.setHeader("refresh", "3;URL=/BMS_ssm/jsp/loginpage.jsp");
            }else if (result == 3) {
                out.write("秒后跳转到商家管理 ");
                response.setHeader("refresh", "3;URL=/BMS_ssm/jsp/detailspage.jsp");
            }
            %>
            </div>
        </div>
    </div>
</div>

<jsp:include page="footer.jsp"></jsp:include>
<script src="/BMS_ssm/js/jquery1.12.4.min.js"></script>
<script src="/BMS_ssm/js/bootstrap.min.js"></script>
<script src="/BMS_ssm/js/onlyforresult.js"></script>
</body>
</html>
