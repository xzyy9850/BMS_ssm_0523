$(function () {
    // 最低消费非负，可以为小数
    $("#consumption").blur(function () {
        var patt = /^\d+(\.\d+)?$/;
        if (!patt.test($("#consumption").val())) {
            $("#consumption").val("");
        }else {
            if($("#consumption").val()>=100000){
                $("#consumption").val("");
            }
        }
    })
    // 添加新的商家，自动生成商家ID

    $("#addmerchantform").submit(function () {
        $.ajax({
            url: "../insertMerchant",
            data: {
                sname: $("#sname").val(),
                stel: $("#stel").val(),
                sclassify: $("input[name='sclassify']:checked").val(),
                saddress: $("#saddress").val(),
                detailadd: $("#detailadd").val(),
                consumption: $("#consumption").val(),
            },
            type: "post",
            dataType: "json",
            timeout: 10000,
            success: function (data) {
                if (data > 0) {
                    alert("添加成功");
                    window.location.reload();
                } else {
                    alert("添加失败！已存在同一商家")
                }
            }
        })
        return false;
    });

})