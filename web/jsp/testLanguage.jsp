<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/5/22 0022
  Time: 上午 9:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<spring:message code="select" var="btnselect"></spring:message>
<form action="/BMS_ssm/testLanguage"method="post">
    <input type="text" id="username" name="username"><br>
    <input type="radio" name="local" value="en_US">en_US
    <input type="radio" name="local" value="zh_CN">zh_CN
    <br>
    <input type="submit" value="${btnselect}">
</form>
<button id="testbtn"><spring:message code="select"></spring:message></button>
<a href="/BMS_ssm/changeLanguage?locale=en_US">英文</a>
<a href="/BMS_ssm/changeLanguage?locale=zh_CN">中文</a>
</body>
</html>
