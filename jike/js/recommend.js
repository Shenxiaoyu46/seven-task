define(["jQuery.min"], function() {

    // recommend-问答悬浮
    $(".question1").hover(function() {
        $(".question1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content").show();
        $(".tab-content2").hide();
        $(".tab-content3").hide();
        $(".tab-content4").hide();
    }, function() {
        $(".question1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });
    $(".tab-content").hover(function() {
        $(".question1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
    }, function() {
        $(".question1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });

    // wiki悬浮
    $(".wiki1").hover(function() {
        $(".wiki1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content2").show();
        $(".tab-content").hide();
        $(".tab-content3").hide();
        $(".tab-content4").hide();
    }, function() {
        $(".wiki1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });
    $(".tab-content2").hover(function() {
        $(".wiki1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
    }, function() {
        $(".wiki1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });
    // 课程悬浮
    $(".lesson1").hover(function() {
        $(".lesson1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content3").show();
        $(".tab-content2").hide();
        $(".tab-content").hide();
        $(".tab-content4").hide();
    }, function() {
        $(".lesson1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });
    $(".tab-content3").hover(function() {
        $(".lesson1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
    }, function() {
        $(".lesson1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });
    // 社群悬浮
    $(".group1").hover(function() {
        $(".group1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content4").show();
        $(".tab-content3").hide();
        $(".tab-content2").hide();
        $(".tab-content").hide();
    }, function() {
        $(".group1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });
    $(".tab-content4").hover(function() {
        $(".group1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
    }, function() {
        $(".group1").css({
            "background": "#FCFCFC",
            "color": "rgb(0, 0, 0)",
            "border-bottom": "1px solid #F5F5F5"
        });
    });

    // 推荐板块
    $("#hove1").mouseenter(function() {
        $(".move-list").show();
        $(".start-list").hide();
        $(".question1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content").show();
        $(".tab-content2").hide();
        $(".tab-content3").hide();
        $(".tab-content4").hide();

    });
    $("#hove2").mouseenter(function() {
        $(".move-list").show();
        $(".start-list").hide();
        $(".wiki1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content2").show();
        $(".tab-content").hide();
        $(".tab-content3").hide();
        $(".tab-content4").hide();

    });
    $("#hove3").mouseenter(function() {
        $(".move-list").show();
        $(".start-list").hide();
        $(".lesson1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content3").show();
        $(".tab-content2").hide();
        $(".tab-content").hide();
        $(".tab-content4").hide();

    });
    $("#hove4").mouseenter(function() {
        $(".move-list").show();
        $(".start-list").hide();
        $(".group1").css({
            "background": "#fff",
            "color": "#35b558",
            "border-bottom": "none"
        });
        $(".tab-content4").show();
        $(".tab-content3").hide();
        $(".tab-content2").hide();
        $(".tab-content").hide();

    });
    $(".recommend").mouseleave(function() {
        $(".move-list").hide();
        $(".start-list").show();
    });


});
