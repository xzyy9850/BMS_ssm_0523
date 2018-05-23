<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/4/20 0020
  Time: 上午 10:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/ms.css" rel="stylesheet">
    <title>Title</title>
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>
<jsp:include page="navigationbar.jsp"></jsp:include>
<div class="background2div">
    <div class="adddiv2">
        <form class="form3class">
            <ul class="form3ul">
                <li class="form3li">
                    <span class="text02">商家ID</span>
                    <input class="form2text" id="sid" type="text" disabled>
                    <span class="text02">商家名</span>
                    <input class="detailadd" type="text" id="sname" placeholder="请输入商家名" required>
                </li>
                <li class="form3li">
                    <span class="text02">电话</span>
                    <input class="form2text" type="text" id="stel" placeholder="请输入电话" required>
                    <span class="text02">商家分类</span>
                    <input class="radioclass" type="radio" name="sclassify" value="中餐">
                    <span class="radiospanclass">中餐</span>
                    <input class="radioclass" type="radio" name="sclassify" value="韩餐">
                    <span class="radiospanclass">韩餐</span>
                    <input class="radioclass" type="radio" name="sclassify" value="日料">
                    <span class="radiospanclass">日料</span>
                </li>
                <li class="form3li">
                    <span class="text02">商家地址</span>
                    <select class="form2select" id="saddress" required>
                        <option></option>
                        <option>高新园区</option>
                        <option>沙河口区</option>
                        <option>西岗区</option>
                        <option>中山区</option>
                    </select>
                    <span class="text02">详细地址</span>
                    <input class="detailadd" id="detailadd" type="text" required>
                </li>
                <li class="form3li">
                    <span class="text02">人均消费</span>
                    <input class="form2text" id="consumption" type="text" required>

                </li>
                <li class="form3li">
                    <input class="form2btn1" type="button" value="清空" id="clearbtn">
                    <input class="form2btn2" type="button" value="保存" id="changebtn">
                </li>
            </ul>
        </form>
    </div>
</div>

<jsp:include page="footer.jsp"></jsp:include>
<script src="../js/jquery-1.12.4.js"></script>
<script src="../js/jquery1.12.4.min.js"></script>
<script src ="../js/jquery.params.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/update.js"></script>
<script src="../js/util.js"></script>
</body>
</html>
