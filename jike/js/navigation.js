define(["jQuery.min"],function(){
// 职业课程
    $(".navbox-margin1").hover(function() {
        $("#panel-item1").css({
            "background": "#F7F7F7"
        });
        $(".angle1").css("display", "block");
    }, function() {
        $("#panel-item1").css({
            "background": "#fff"
        });
        $(".angle1").css("display", "none");
    });

    $("#panel-item1").hover(function() {
        $(".angle1").css("display", "block");
    }, function() {
        $(".angle1").css("display", "none");
    });
    // 就业学习
    $(".navbox-margin2").hover(function() {
        $("#panel-item2").css({
            "background": "#F7F7F7"
        });
        $(".angle2").css("display", "block");
    }, function() {
        $("#panel-item2").css({
            "background": "#fff"
        });
        $(".angle2").css("display", "none");
    });
    $("#panel-item2").hover(function() {
        $(".angle2").css("display", "block");
    }, function() {
        $(".angle2").css("display", "none");
    });
    // 极客社区
    $(".navbox-margin3").hover(function() {
        $("#panel-item3").css({
            "background": "#F7F7F7"
        });
        $(".angle3").css("display", "block");
    }, function() {
        $("#panel-item3").css({
            "background": "#fff"
        });
        $(".angle3").css("display", "none");
    });
    $("#panel-item3").hover(function() {
        $(".angle3").css("display", "block");
    }, function() {
        $(".angle3").css("display", "none");
    });
    // 极客+
    $(".navbox-margin4").hover(function() {
        $("#panel-item4").css({
            "background": "#F7F7F7"
        });
        $(".angle4").css("display", "block");
    }, function() {
        $("#panel-item4").css({
            "background": "#fff"
        });
        $(".angle4").css("display", "none");
    });
    $("#panel-item4").hover(function() {
        $(".angle4").css("display", "block");
    }, function() {
        $(".angle4").css("display", "none");
    });
});