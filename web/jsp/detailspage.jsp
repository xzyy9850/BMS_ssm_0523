<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 上午 10:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/ms.css" rel="stylesheet">
    <title>Title</title>
</head>
<body onload="clock()">
<jsp:include page="header.jsp"></jsp:include>
<jsp:include page="navigationbar.jsp"></jsp:include>
<div class="backgrounddiv">
    <div class="detailsdiv">
        <!-- form表单查询条件-->
        <form class="form2class">
            <ul class="form2ul">
                <li class="form2li">
                    <span class="text02">商家ID</span>
                    <input class="form2text" type="text"  id="sid" placeholder="请输入商家ID">
                    <span class="text02">商家名</span>
                    <input class="form2text" type="text"  id="sname" placeholder="请输入商家名" >
                    <span class="text02">电话</span>
                    <input class="form2text" type="text"  id="stel" placeholder="请输入电话" >
                </li>
                <li class="form2li">
                    <span class="text02">商家分类</span>
                    <input class="radioclass" type="radio" name="sclassify" value="中餐" >
                    <span class="radiospanclass">中餐</span>
                    <input class="radioclass" type="radio" name="sclassify" value="韩餐">
                    <span class="radiospanclass">韩餐</span>
                    <input class="radioclass" type="radio" name="sclassify" value="日料">
                    <span class="radiospanclass">日料</span>
                    <input class="radioclass" type="radio" name="sclassify" value=""checked>
                    <span class="radiospanclass">全部</span>
                </li>
                <li class="form2li">
                    <span class="text02">商家地址</span>
                    <select class="form2select" id="saddress">
                        <option></option>
                        <option>高新园区</option>
                        <option>沙河口区</option>
                        <option>西岗区</option>
                        <option>中山区</option>
                    </select>
                    <span class="text02">详细地址</span>
                    <input class="detailadd" id="detailadd" type="text">
                </li>
                <li class="form2li">
                    <span class="text02">人均消费</span>
                    <input class="form2text" id="lowconsumption" type="text">
                    <span class="textt">～</span>
                    <input class="form2text" id="highconsumption" type="text">
                    <span class="text02">元/人</span>
                </li>
                <li class="form2li">
                    <input class="form2btn1" type="reset" value="清除">
                    <input class="form2btn2" type="button" id="submit" value="查询">
                </li>
            </ul>
        </form>
        <hr class="hrclass">
        <!-- 根据查询结果和用户需求显示的查询信息-->
        <div class="tableopera">
            <ul class="operaulleft">
                <li class="operalileft">
                    <button class="delectbtnclass" id="delectbtn"><spring:message code="delete"></spring:message>所选</button>
                    <%--<input class="delectbtnclass" type="button" id="delectbtn" value="删除所选">--%>
                </li>
                <li class="operamessage">
                    <span>第</span>
                    <span class="tableline" id="pagination">0</span>
                    <span>页/共</span>
                    <span class="tableline" id="totalpage">0</span>
                    <span>页</span>
                </li>
            </ul>
            <ul class="operaulright">
                <li class="operamessage">
                    <span>条信息</span>
                    <span class="tableline" id="resultspan">0</span>
                    <span>共查到</span>
                </li>
            </ul>
        </div>
        <!-- 商家信息的详细列表-->
        <table class=" table table-striped tableclass" id="resulttable">
            <tr class="tabletrclass" id="firsttr">
                <th>
                    <input id="colcheckbox" type="checkbox" onchange="choose()">
                </th>
                <th>商家ID</th>
                <th>商家名</th>
                <th>电话</th>
                <th>分类</th>
                <th>地址</th>
                <th>详细地址</th>
                <th>人均(元/人)</th>
                <th>    </th>
            </tr>
            <tbody id ="selectalltable"></tbody>
        </table>
        <!-- 列表底部分页按钮-->
        <div class="tablefoot">
            <select name="rownumber" id="rownumber" class="btn btn-default">
                <option value="5">每页显示5行</option>
                <option value="10">每页显示10行</option>
            </select>
            <input class="btn btn-default" type="button" value="首页" id="firstpage">
            <input class="btn btn-default" type="button" value="上一页" id="uppage">
            <input class="btn btn-default" type="button" value="下一页" id="downpage">
            <input class="btn btn-default" type="button" value="末页" id="lastpage">
            <input class="btn btn-default" type="button" value="跳转到" id="jumppage">
            <input class="btn btn-default" type="text" id="jumper">
            <span>页</span>
        </div>
    </div>
</div>

<jsp:include page="footer.jsp"></jsp:include>
<script src="../js/jquery1.12.4.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/util.js"></script>
<script src="../js/selectMerchant.js"></script>
</body>
</html>
