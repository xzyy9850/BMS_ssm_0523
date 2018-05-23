<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 上午 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="naverdiv">
    <ul class="naverul">
        <a href="/BMS_ssm/jsp/loginpage.jsp" class="hrefloging">
            <li>登录</li>
        </a>
        <a href="/BMS_ssm/jsp/registpage.jsp">
            <li>注册</li>
        </a>
        <a>
            <li id="manage">
                <img src="/BMS_ssm/images/down.png" id="updownimg">
                商家管理
            </li>
        </a>
        </li>
    </ul>
    </ul>

    <ul class="naverul-right">
        <% String name =(String)session.getAttribute("loginuser");
        %>
        <% if(!"".equals(name)&&name!=null){%>
            <li class="dis" name="log"><%=name%>已登录</li>
        <%}else {%>
            <li class="dis" name="log">请登录</li>
        <%}%>
    </ul>
</div>
<div id="managediv" class="managediv">
    <!--左-->
    <a  id="jumpselectpagebtn">
        <div class="managedivleft" >
            <img src="/BMS_ssm/images/timg.jpg" class="leftrightimg">
            <span class="leftrightimgtext">查询</span>
        </div>
    </a>
    <!--右-->
    <a id="jumpaddpagebtn">
        <div class="managedivright">
            <img src="/BMS_ssm/images/zj.jpg" class="leftrightimg">
            <span class="leftrightimgtext">添加</span>
        </div>
    </a>
</div>
