// 通过id获取对应dom节点
function getId(id) {
    return document.getElementById(id);
}

// 通过name获取对应dom节点
function getNames(name) {
    return document.getElementsByName(name)
}

// 全选框：全选或者全不选
function choose() {
    if (getId("colcheckbox").getAttribute("checked")) {
        getId("colcheckbox").removeAttribute("checked");
        for (var i = 0; i < getNames("add").length; i++) {
            getNames("add")[i].checked = false;
        }
    }
    else {
        getId("colcheckbox").setAttribute("checked", "checked");
        for (var i = 0; i < getNames("add").length; i++) {
            getNames("add")[i].checked = true;
        }
    }
}

$(function () {
    // 最低消费非负，可以为小数
    $("#lowconsumption").blur(function () {
        var patt = /^\d+(\.\d+)?$/;
        if (!patt.test($("#lowconsumption").val())) {
            $("#lowconsumption").val("");
        }
    })
    // 最高消费非负，可以为小数
    $("#highconsumption").blur(function () {
        var patt = /^\d+(\.\d+)?$/;
        if (!patt.test($("#highconsumption").val())) {
            $("#highconsumption").val("");
        }
    })
    // 点击查询按钮时根据条件查询商家信息
    $("#submit").click(function () {
        if($("#lowconsumption").val()==null||$("#lowconsumption").val()==""){
            $("#lowconsumption").val(0);
        }
        $.ajax({
            url: "/BMS_ssm/selectAllMerchant",
            data: {
                sid: $("#sid").val(),
                sname: $("#sname").val(),
                stel: $("#stel").val(),
                sclassify: $("input[name='sclassify']:checked").val(),
                saddress: $("#saddress").val(),
                detailadd: $("#detailadd").val(),
                lowconsumption: $("#lowconsumption").val(),
                highconsumption: $("#highconsumption").val(),
                pagination: 0,
                rownumber: $("#rownumber").val()
            },
            type: "post",
            dataType: "json",
            timeout: 2000,
            success: function (data) {
                var result = "";
                var merchant = data.merchantList;
                var count = data.count;
                result += "<tr class='tabletrclass' id='firsttr'>" +
                    "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                    "<th>商家ID</th>" +
                    "<th>商家名</th>" +
                    "<th>电话</th>" +
                    "<th>分类</th>" +
                    "<th>地址</th>" +
                    "<th>详细地址</th>" +
                    "<th>人均(元/人)</th>" +
                    "<th></th>" +
                    "</tr>"
                for (i in merchant) {
                    result += "<tr>";
                    result += "<td><input type='checkbox' name='add'></td>"
                    result += "<td>" + merchant[i].sid + "</td>";
                    result += "<td>" + merchant[i].sname + "</td>";
                    result += "<td>" + merchant[i].stel + "</td>";
                    result += "<td>" + merchant[i].sclassify + "</td>";
                    result += "<td>" + merchant[i].saddress + "</td>";
                    result += "<td>" + merchant[i].detailadd + "</td>";
                    result += "<td>" + merchant[i].consumption + "</td>";
                    result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                    result += "</tr>";
                }

                $("#resulttable").html(result);
                $("#resultspan").html(count);
                $("#pagination").html(1);
                if (count % $("#rownumber").val() != 0) {
                    $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                } else {
                    $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                }
            }
        })
    })
    // 点击删除所选按钮，删除对应行，并把数据库删除标致改为1
    var num = 0;
    $("#delectbtn").click(function () {
            if ($("input[name=add]:checked").prop("checked")) {
                ;
                var checks = [];
                $("#resulttable").find(":checkbox:checked").each(function () {
                    if ($(this).parent().next().text() != "商家ID") {
                        checks.push($(this).parent().next().text());
                        $(this).parent().parent().remove();
                        $("#resultspan").html(($("#resultspan").text()) - 1);
                        num++;
                        if ($("#resultspan").html() % $("#rownumber").val() != 0) {
                            $("#totalpage").html(Math.ceil($("#resultspan").html() / $("#rownumber").val()));
                        } else {
                            $("#totalpage").html(Math.ceil($("#resultspan").html() / $("#rownumber").val()));
                        }
                    }
                })
                $.ajax({
                    url: "/BMS_ssm/deleteMerchant",
                    data: {checks: checks},
                    type: "post",
                    dataType: "json",
                    timeout: 10000,
                    success: function (data) {
                    }
                })
                alert("已成功删除" + num + "条商家");
                num = 0;
            }
        }
    )

    // 点击首页，固定跳转到查询第一页
    $("#firstpage").click(function () {
        var curpage = parseInt($("#pagination").text());
        var totpage = parseInt($("#totalpage").text());
        if (totpage != 0 && curpage != 0) {
            $.ajax({
                url: "../selectMerchant",
                data: {
                    // sid: $("#sid").val(),
                    // sname: $("#sname").val(),
                    // stel: $("#stel").val(),
                    // sclassify: $("input[name='sclassify']:checked").val(),
                    // saddress: $("#saddress").val(),
                    // detailadd: $("#detailadd").val(),
                    // lowconsumption: $("#lowconsumption").val(),
                    // highconsumption: $("#highconsumption").val(),
                    pagination: 0,
                    rownumber: $("#rownumber").val()
                },
                type: "post",
                dataType: "json",
                timeout: 2000,
                success: function (data) {
                    var result = "";
                    var merchant = data.merchantList;
                    var count = data.count;
                    result += "<tr class='tabletrclass' id='firsttr'>" +
                        "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                        "<th>商家ID</th>" +
                        "<th>商家名</th>" +
                        "<th>电话</th>" +
                        "<th>分类</th>" +
                        "<th>地址</th>" +
                        "<th>详细地址</th>" +
                        "<th>人均(元/人)</th>" +
                        "<th></th>" +
                        "</tr>"
                    for (i in merchant) {
                        result += "<tr>";
                        result += "<td><input type='checkbox' name='add'></td>"
                        result += "<td>" + merchant[i].sid + "</td>";
                        result += "<td>" + merchant[i].sname + "</td>";
                        result += "<td>" + merchant[i].stel + "</td>";
                        result += "<td>" + merchant[i].sclassify + "</td>";
                        result += "<td>" + merchant[i].saddress + "</td>";
                        result += "<td>" + merchant[i].detailadd + "</td>";
                        result += "<td>" + merchant[i].consumption + "</td>";
                        result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                        result += "</tr>";
                    }
                    $("#resulttable").html(result);
                    $("#resultspan").html(count);
                    $("#pagination").html(1);
                    if (count % $("#rownumber").val() != 0) {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    } else {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    }
                }
            })
        }
    })
    // 点击末页,固定跳转到查询最后一页
    $("#lastpage").click(function () {
        if ($("#totalpage").text() > 0) {
            var totpage = parseInt($("#totalpage").text());
            $.ajax({
                url: "../selectMerchant",
                data: {
                    // sid: $("#sid").val(),
                    // sname: $("#sname").val(),
                    // stel: $("#stel").val(),
                    // sclassify: $("input[name='sclassify']:checked").val(),
                    // saddress: $("#saddress").val(),
                    // detailadd: $("#detailadd").val(),
                    // lowconsumption: $("#lowconsumption").val(),
                    // highconsumption: $("#highconsumption").val(),
                    pagination: totpage - 1,
                    rownumber: $("#rownumber").val()
                },
                type: "post",
                dataType: "json",
                timeout: 2000,
                success: function (data) {
                    var result = "";
                    var merchant = data.merchantList;
                    var count = data.count;
                    result += "<tr class='tabletrclass' id='firsttr'>" +
                        "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                        "<th>商家ID</th>" +
                        "<th>商家名</th>" +
                        "<th>电话</th>" +
                        "<th>分类</th>" +
                        "<th>地址</th>" +
                        "<th>详细地址</th>" +
                        "<th>人均(元/人)</th>" +
                        "<th></th>" +
                        "</tr>"
                    for (i in merchant) {
                        result += "<tr>";
                        result += "<td><input type='checkbox' name='add'></td>"
                        result += "<td>" + merchant[i].sid + "</td>";
                        result += "<td>" + merchant[i].sname + "</td>";
                        result += "<td>" + merchant[i].stel + "</td>";
                        result += "<td>" + merchant[i].sclassify + "</td>";
                        result += "<td>" + merchant[i].saddress + "</td>";
                        result += "<td>" + merchant[i].detailadd + "</td>";
                        result += "<td>" + merchant[i].consumption + "</td>";
                        result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                        result += "</tr>";
                    }
                    $("#resulttable").html(result);
                    $("#resultspan").html(count);
                    $("#pagination").html($("#totalpage").html())
                    if (count % $("#rownumber").val() != 0) {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    } else {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    }
                }
            })
        }
    })
    // 点击下一页，跳转到当前页的下一页
    // 如果当前已是最后一页，则跳转到最后一页
    $("#downpage").click(function () {
        var curpage = parseInt($("#pagination").text());
        var totpage = parseInt($("#totalpage").text())
        if (curpage < totpage) {
            $.ajax({
                url: "../selectMerchant",
                data: {
                    // sid: $("#sid").val(),
                    // sname: $("#sname").val(),
                    // stel: $("#stel").val(),
                    // sclassify: $("input[name='sclassify']:checked").val(),
                    // saddress: $("#saddress").val(),
                    // detailadd: $("#detailadd").val(),
                    // lowconsumption: $("#lowconsumption").val(),
                    // highconsumption: $("#highconsumption").val(),
                    pagination: curpage,
                    rownumber: $("#rownumber").val()
                },
                type: "post",
                dataType: "json",
                timeout: 2000,
                success: function (data) {
                    var result = "";
                    var merchant = data.merchantList;
                    var count = data.count;
                    result += "<tr class='tabletrclass' id='firsttr'>" +
                        "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                        "<th>商家ID</th>" +
                        "<th>商家名</th>" +
                        "<th>电话</th>" +
                        "<th>分类</th>" +
                        "<th>地址</th>" +
                        "<th>详细地址</th>" +
                        "<th>人均(元/人)</th>" +
                        "<th></th>" +
                        "</tr>"
                    for (i in merchant) {
                        result += "<tr>";
                        result += "<td><input type='checkbox' name='add'></td>"
                        result += "<td>" + merchant[i].sid + "</td>";
                        result += "<td>" + merchant[i].sname + "</td>";
                        result += "<td>" + merchant[i].stel + "</td>";
                        result += "<td>" + merchant[i].sclassify + "</td>";
                        result += "<td>" + merchant[i].saddress + "</td>";
                        result += "<td>" + merchant[i].detailadd + "</td>";
                        result += "<td>" + merchant[i].consumption + "</td>";
                        result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                        result += "</tr>";
                    }
                    $("#resulttable").html(result);
                    $("#resultspan").html(count);
                    $("#pagination").html(curpage + 1);
                    if (count % $("#rownumber").val() != 0) {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    } else {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    }
                }
            })
        }
        // else if(curpage==totpage){
        //     var tot = parseInt($("#totalpage").text());
        //     $.ajax({
        //         url: "../selectMerchant",
        //         data: {
        //             sid: $("#sid").val(),
        //             sname: $("#sname").val(),
        //             stel: $("#stel").val(),
        //             sclassify: $("input[name='sclassify']:checked").val(),
        //             saddress: $("#saddress").val(),
        //             detailadd: $("#detailadd").val(),
        //             lowconsumption: $("#lowconsumption").val(),
        //             highconsumption: $("#highconsumption").val(),
        //             pagination: tot - 1,
        //             rownumber: $("#rownumber").val()
        //         },
        //         type: "post",
        //         dataType: "json",
        //         timeout: 2000,
        //         success: function (data) {
        //             var result = "";
        //             var merchant = data.merchantList;
        //             var count = data.count;
        //             result += "<tr class='tabletrclass' id='firsttr'>" +
        //                 "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
        //                 "<th>商家ID</th>" +
        //                 "<th>商家名</th>" +
        //                 "<th>电话</th>" +
        //                 "<th>分类</th>" +
        //                 "<th>地址</th>" +
        //                 "<th>详细地址</th>" +
        //                 "<th>人均(元/人)</th>" +
        //                 "<th></th>" +
        //                 "</tr>"
        //             for (i in merchant) {
        //                 result += "<tr>";
        //                 result += "<td><input type='checkbox' name='add'></td>"
        //                 result += "<td>" + merchant[i].sid + "</td>";
        //                 result += "<td>" + merchant[i].sname + "</td>";
        //                 result += "<td>" + merchant[i].stel + "</td>";
        //                 result += "<td>" + merchant[i].sclassify + "</td>";
        //                 result += "<td>" + merchant[i].saddress + "</td>";
        //                 result += "<td>" + merchant[i].detailadd + "</td>";
        //                 result += "<td>" + merchant[i].consumption + "</td>";
        //                 result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
        //                 result += "</tr>";
        //             }
        //             $("#resulttable").html(result);
        //             $("#resultspan").html(count);
        //             $("#pagination").html($("#totalpage").html())
        //             if (count % $("#rownumber").val() != 0) {
        //                 $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
        //             } else {
        //                 $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
        //             }
        //         }
        //     })
        // }
    })
    // 点击上一页，跳转到当前页的上一页
    // 如果当前已是第一页，则跳转到第一页
    $("#uppage").click(function () {
        var curpage = parseInt($("#pagination").text());
        var totpage = parseInt($("#totalpage").text())
        if (curpage > 1) {
            $.ajax({
                url: "../selectMerchant",
                data: {
                    // sid: $("#sid").val(),
                    // sname: $("#sname").val(),
                    // stel: $("#stel").val(),
                    // sclassify: $("input[name='sclassify']:checked").val(),
                    // saddress: $("#saddress").val(),
                    // detailadd: $("#detailadd").val(),
                    // lowconsumption: $("#lowconsumption").val(),
                    // highconsumption: $("#highconsumption").val(),
                    pagination: curpage - 2,
                    rownumber: $("#rownumber").val()
                },
                type: "post",
                dataType: "json",
                timeout: 2000,
                success: function (data) {
                    var result = "";
                    var merchant = data.merchantList;
                    var count = data.count;
                    result += "<tr class='tabletrclass' id='firsttr'>" +
                        "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                        "<th>商家ID</th>" +
                        "<th>商家名</th>" +
                        "<th>电话</th>" +
                        "<th>分类</th>" +
                        "<th>地址</th>" +
                        "<th>详细地址</th>" +
                        "<th>人均(元/人)</th>" +
                        "<th></th>" +
                        "</tr>"
                    for (i in merchant) {
                        result += "<tr>";
                        result += "<td><input type='checkbox' name='add'></td>"
                        result += "<td>" + merchant[i].sid + "</td>";
                        result += "<td>" + merchant[i].sname + "</td>";
                        result += "<td>" + merchant[i].stel + "</td>";
                        result += "<td>" + merchant[i].sclassify + "</td>";
                        result += "<td>" + merchant[i].saddress + "</td>";
                        result += "<td>" + merchant[i].detailadd + "</td>";
                        result += "<td>" + merchant[i].consumption + "</td>";
                        result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                        result += "</tr>";
                    }
                    $("#resulttable").html(result);
                    $("#resultspan").html(count);
                    $("#pagination").html(curpage - 1);
                    if (count % $("#rownumber").val() != 0) {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    } else {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    }
                }
            })
        } else if (curpage == 1) {
            $.ajax({
                url: "../selectMerchant",
                data: {
                    sid: $("#sid").val(),
                    sname: $("#sname").val(),
                    stel: $("#stel").val(),
                    sclassify: $("input[name='sclassify']:checked").val(),
                    saddress: $("#saddress").val(),
                    detailadd: $("#detailadd").val(),
                    lowconsumption: $("#lowconsumption").val(),
                    highconsumption: $("#highconsumption").val(),
                    pagination: 0,
                    rownumber: $("#rownumber").val()
                },
                type: "post",
                dataType: "json",
                timeout: 2000,
                success: function (data) {
                    var result = "";
                    var merchant = data.merchantList;
                    var count = data.count;
                    result += "<tr class='tabletrclass' id='firsttr'>" +
                        "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                        "<th>商家ID</th>" +
                        "<th>商家名</th>" +
                        "<th>电话</th>" +
                        "<th>分类</th>" +
                        "<th>地址</th>" +
                        "<th>详细地址</th>" +
                        "<th>人均(元/人)</th>" +
                        "<th></th>" +
                        "</tr>"
                    for (i in merchant) {
                        result += "<tr>";
                        result += "<td><input type='checkbox' name='add'></td>"
                        result += "<td>" + merchant[i].sid + "</td>";
                        result += "<td>" + merchant[i].sname + "</td>";
                        result += "<td>" + merchant[i].stel + "</td>";
                        result += "<td>" + merchant[i].sclassify + "</td>";
                        result += "<td>" + merchant[i].saddress + "</td>";
                        result += "<td>" + merchant[i].detailadd + "</td>";
                        result += "<td>" + merchant[i].consumption + "</td>";
                        result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                        result += "</tr>";
                    }
                    $("#resulttable").html(result);
                    $("#resultspan").html(count);
                    $("#pagination").html(1);
                    if (count % $("#rownumber").val() != 0) {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    } else {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    }
                }
            })
        }
    })
    // 下拉选框每页显示多少行，并把查询结果动态显示在页面上
    $("#rownumber").change(function () {
        var curpage = parseInt($("#pagination").text());
        var totpage = parseInt($("#totalpage").text());
        if (totpage != 0 && curpage != 0) {
            $.ajax({
                url: "../selectMerchant",
                data: {
                    // sid: $("#sid").val(),
                    // sname: $("#sname").val(),
                    // stel: $("#stel").val(),
                    // sclassify: $("input[name='sclassify']:checked").val(),
                    // saddress: $("#saddress").val(),
                    // detailadd: $("#detailadd").val(),
                    // lowconsumption: $("#lowconsumption").val(),
                    // highconsumption: $("#highconsumption").val(),
                    pagination: 0,
                    rownumber: $("#rownumber").val()
                },
                type: "post",
                dataType: "json",
                timeout: 2000,
                success: function (data) {
                    var result = "";
                    var merchant = data.merchantList;
                    var count = data.count;
                    result += "<tr class='tabletrclass' id='firsttr'>" +
                        "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                        "<th>商家ID</th>" +
                        "<th>商家名</th>" +
                        "<th>电话</th>" +
                        "<th>分类</th>" +
                        "<th>地址</th>" +
                        "<th>详细地址</th>" +
                        "<th>人均(元/人)</th>" +
                        "<th></th>" +
                        "</tr>"
                    for (i in merchant) {
                        result += "<tr>";
                        result += "<td><input type='checkbox' name='add'></td>"
                        result += "<td>" + merchant[i].sid + "</td>";
                        result += "<td>" + merchant[i].sname + "</td>";
                        result += "<td>" + merchant[i].stel + "</td>";
                        result += "<td>" + merchant[i].sclassify + "</td>";
                        result += "<td>" + merchant[i].saddress + "</td>";
                        result += "<td>" + merchant[i].detailadd + "</td>";
                        result += "<td>" + merchant[i].consumption + "</td>";
                        result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                        result += "</tr>";
                    }
                    $("#resulttable").html(result);
                    $("#resultspan").html(count);
                    $("#pagination").html(1);
                    if (count % $("#rownumber").val() != 0) {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    } else {
                        $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                    }
                }
            })
        }
    })
    // 跳转到第几页，如果大于最大页数，则跳转到末页
    $("#jumppage").click(function () {
        if ("" != $("#jumper").val() || $("#jumper").val() != null) {
            var jumper = parseInt($("#jumper").val());
            var totpage = parseInt($("#totalpage").text())
            if (jumper <= totpage && jumper > 0) {
                $.ajax({
                    url: "../selectMerchant",
                    data: {
                        // sid: $("#sid").val(),
                        // sname: $("#sname").val(),
                        // stel: $("#stel").val(),
                        // sclassify: $("input[name='sclassify']:checked").val(),
                        // saddress: $("#saddress").val(),
                        // detailadd: $("#detailadd").val(),
                        // lowconsumption: $("#lowconsumption").val(),
                        // highconsumption: $("#highconsumption").val(),
                        pagination: jumper - 1,
                        rownumber: $("#rownumber").val()
                    },
                    type: "post",
                    dataType: "json",
                    timeout: 2000,
                    success: function (data) {
                        var result = "";
                        var merchant = data.merchantList;
                        var count = data.count;
                        result += "<tr class='tabletrclass' id='firsttr'>" +
                            "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                            "<th>商家ID</th>" +
                            "<th>商家名</th>" +
                            "<th>电话</th>" +
                            "<th>分类</th>" +
                            "<th>地址</th>" +
                            "<th>详细地址</th>" +
                            "<th>人均(元/人)</th>" +
                            "<th></th>" +
                            "</tr>"
                        for (i in merchant) {
                            result += "<tr>";
                            result += "<td><input type='checkbox' name='add'></td>"
                            result += "<td>" + merchant[i].sid + "</td>";
                            result += "<td>" + merchant[i].sname + "</td>";
                            result += "<td>" + merchant[i].stel + "</td>";
                            result += "<td>" + merchant[i].sclassify + "</td>";
                            result += "<td>" + merchant[i].saddress + "</td>";
                            result += "<td>" + merchant[i].detailadd + "</td>";
                            result += "<td>" + merchant[i].consumption + "</td>";
                            result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                            result += "</tr>";
                        }
                        $("#resulttable").html(result);
                        $("#resultspan").html(count);
                        $("#pagination").html(jumper);
                        if (count % $("#rownumber").val() != 0) {
                            $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                        } else {
                            $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                        }
                    }
                })
            } else if (jumper > totpage && totpage > 0) {
                $.ajax({
                    url: "../selectMerchant",
                    data: {
                        sid: $("#sid").val(),
                        sname: $("#sname").val(),
                        stel: $("#stel").val(),
                        sclassify: $("input[name='sclassify']:checked").val(),
                        saddress: $("#saddress").val(),
                        detailadd: $("#detailadd").val(),
                        lowconsumption: $("#lowconsumption").val(),
                        highconsumption: $("#highconsumption").val(),
                        pagination: totpage - 1,
                        rownumber: $("#rownumber").val()
                    },
                    type: "post",
                    dataType: "json",
                    timeout: 2000,
                    success: function (data) {
                        var result = "";
                        var merchant = data.merchantList;
                        var count = data.count;
                        result += "<tr class='tabletrclass' id='firsttr'>" +
                            "<th><input id='colcheckbox' type='checkbox' onchange='choose()'></th>" +
                            "<th>商家ID</th>" +
                            "<th>商家名</th>" +
                            "<th>电话</th>" +
                            "<th>分类</th>" +
                            "<th>地址</th>" +
                            "<th>详细地址</th>" +
                            "<th>人均(元/人)</th>" +
                            "<th></th>" +
                            "</tr>"
                        for (i in merchant) {
                            result += "<tr>";
                            result += "<td><input type='checkbox' name='add'></td>"
                            result += "<td>" + merchant[i].sid + "</td>";
                            result += "<td>" + merchant[i].sname + "</td>";
                            result += "<td>" + merchant[i].stel + "</td>";
                            result += "<td>" + merchant[i].sclassify + "</td>";
                            result += "<td>" + merchant[i].saddress + "</td>";
                            result += "<td>" + merchant[i].detailadd + "</td>";
                            result += "<td>" + merchant[i].consumption + "</td>";
                            result += "<td><button class='alterbtn'name='updatebtn' onclick=update('" + merchant[i].sid + "')>修改</button>";
                            result += "</tr>";
                        }
                        $("#resulttable").html(result);
                        $("#resultspan").html(count);
                        $("#pagination").html($("#totalpage").html())
                        if (count % $("#rownumber").val() != 0) {
                            $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                        } else {
                            $("#totalpage").html(Math.ceil(count / $("#rownumber").val()));
                        }
                    }
                })
            }
        }
    })
})


function update(sid) {
    // 带商家ID跳转到修改页面
    window.location.href = "updatapage.jsp?sid=" + sid;
}