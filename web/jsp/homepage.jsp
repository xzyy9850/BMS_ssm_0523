<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 上午 10:31
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
<%--<% request.getSession().setAttribute("loginuser",""); %>--%>
<jsp:include page="navigationbar.jsp"></jsp:include>
<div id="carousel-example-generic" class="carousel slide bigimg" data-ride="carousel">
    <!-- 轮播顺序 -->
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <!-- 轮播图 -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="../images/image_05.png" class="img-size" alt="...">
            <div class="carousel-caption">
            </div>
        </div>
        <div class="item">
            <img src="../images/image_11.png" class="img-size" alt="...">
            <div class="carousel-caption">
            </div>
        </div>
        <div class="item">
            <img src="../images/image_17.png" class="img-size" alt="...">
            <div class="carousel-caption">
            </div>
        </div>
    </div>

    <!-- 向左或向右箭头 -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <input type="image" src="../images/earri_left_03.png" class="glyphicon glyphicon-chevron-left">
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <input type="image" src="../images/earri_right_03.png" class="glyphicon glyphicon-chevron-right">
    </a>
</div>
<jsp:include page="footer.jsp"></jsp:include>
<script src="/BMS_ssm/js/jquery1.12.4.min.js"></script>
<script src="/BMS_ssm/js/bootstrap.min.js"></script>
<script src="/BMS_ssm/js/util.js"></script>
</body>
</html>
