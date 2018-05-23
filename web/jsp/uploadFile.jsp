<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/5/22 0022
  Time: 下午 1:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/BMS_ssm/uploadFile" method="post"  id="form1" enctype="multipart/form-data">
    用户名:<input type="text" name="username" id="username"><br>
    上传文件：<input type="file" name="myf" ><br>
    <input type="file" name="myf" ><br>
    <input type="file" name="myf" ><br>
    <input type="submit" value="提交">
</form>

<input type="button" id="ajaxbtn" value="ajax上传">
<script src="../js/jquery-1.12.4.js"></script>
<script>
    $(function () {
        $("#ajaxbtn").click(function () {

            var dataForm = new FormData($('#form1')[0]);
            $.ajax({
                url:"/BMS_ssm/uploadFile",
                data:dataForm,
                contentType:false,
                processData:false,
                type:"post",
                dataType:"text",
                success:function (data) {
                    alert("成功")
                },
                error:function () {
                    alert("失败");
                }

            })
        })
    })
</script>
</body>
</html>
