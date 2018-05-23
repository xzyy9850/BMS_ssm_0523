function getId(id) {
    return document.getElementById(id);
}

function getNames(name) {
    return document.getElementsByName(name)
}

// function choose() {
//     if (getId("colcheckbox").getAttribute("checked")) {
//         getId("colcheckbox").removeAttribute("checked");
//         for (var i = 0; i < getNames("add").length; i++) {
//             getNames("add")[i].checked = false;
//         }
//     }
//     else {
//         getId("colcheckbox").setAttribute("checked", "checked");
//         for (var i = 0; i < getNames("add").length; i++) {
//             getNames("add")[i].checked = true;
//         }
//     }
// }

$(function () {
    // 通过点击修改按钮传过来的商家ID，把对应的商家信息显示到页面上
    var sids = $.query.get("sid");
    $.ajax({
        url: "../getNowMerchant",
        data: {sid: sids},
        type: "post",
        dataType: "json",
        timeout: 10000,
        success: function (data) {
            $("#sid").val(data.sid);
            $("#sname").val(data.sname);
            $("#stel").val(data.stel);
            var classify = data.sclassify;
            for (i in $("input[name='sclassify']")) {
                if (classify === $("input[name='sclassify']").eq(i).val()) {
                    $("input[name='sclassify']").eq(i).prop("checked", true);
                }
            }
            var address = data.saddress;
            $("#saddress").val(address);
            $("#detailadd").val(data.detailadd);
            $("#consumption").val(data.consumption);

        }
    })
    // 点击保存，保存修改后的商家信息
    $("#changebtn").click(function () {
        $.ajax({
            url: "../updateMerchant",
            data: {
                sid: $("#sid").val(),
                sname: $("#sname").val(),
                stel: $("#stel").val(),
                sclassify: $("input[name='sclassify']:checked").val(),
                saddress: $("#saddress").val(),
                detailadd: $("#detailadd").val(),
                consumption: $("#consumption").val()
            },
            type: "post",
            dateType: "json",
            success: function (data) {
                if (data > 0) {
                    alert("保存成功！");
                    window.location.href = "detailspage.jsp";
                }
                else {
                    alert("修改失败！")
                }

            }
        })

    })
    // 清空按钮，除了商家ID不可选
    $("#clearbtn").click(function () {
        $("#sname").val("");
        $("#stel").val("");
        $("input[name='sclassify']:checked").prop("checked", false);
        $("#saddress").val("");
        $("#detailadd").val("");
        $("#consumption").val("")
    })
})