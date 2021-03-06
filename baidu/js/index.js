$(document).ready(function() {
    localStorage = window.localStorage;
    var i = 1;
    var key = "theme";
    // 更换皮肤
    $(".skin_img_content img").hover(function() {
        i = $(this).attr("id");
        $(".skin_content img").attr("src", 'photo/style' + i + '.jpg');
    });
    $(".skin_img_content img").click(function() {
        i = $(this).attr("id");
        $(".bg-container img").attr("src", 'photo/style' + i + 's.jpg');
        localStorage.setItem(key, i);
    });
    window.onload = function() {
        var i=localStorage.getItem("theme");
        if (i>0) {
        $(".bg-container img").attr("src", 'photo/style' + i + 's.jpg');
        }

    }
    // 换肤
    $(".s-skin").click(function() {
        $(".bodystyle").slideDown();
    });

    // 换肤收起
    $(".s-skin-up").click(function() {
        $(".bodystyle").slideUp();
    });
    // 点击皮肤显示已选按钮
    var i = 1;
    $(".skin_img_content img").click(function() {
        i = $(this).attr("id");
        $('.img-choose' + i + '').css("display", "block");
    });
    
    // 右边栏
    $(".more-menu").hover(function() {
        $(".img-menu").css("display", "block");
    }, function() {
        $(".img-menu").css("display", "none");
    });
    // 我的关注
    $(".menu_mine").click(function(e) {

        $("#news-innercon").hide();
        $(".nav-container").hide();
        $(".video-wrapper").hide();
        $(".myconcern-container").show();

        $(".menu_mine").css({
            "background-color": "#9a9da2",
            "color": "#fff",
            "font-weight": "bold",
            "background-image": "none"
        });
        $(".menus-item").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $(".mine-icon").css("background-position", "-144px 0");

    });
    // 我的导航
    $(".myconcern-container").click(function() {
        $(".nav-blank").toggle();

    });
    // 推荐
    $("#menus-item1").click(function() {

        $("#news-innercon").show();
        $(".nav-container").hide();
        $(".video-wrapper").hide();
        $(".myconcern-container").hide();
        $("#menus-item1").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": " #fff"
        });
        $(".menu_mine").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item2").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item3").css({
            "background-color": "#fff",
            "color": "#333"
        });
    });
    // 导航
    $("#menus-item2").click(function() {

        $("#news-innercon").hide();
        $(".video-wrapper").hide();
        $(".nav-container").show();
        $("#menus-item2").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": " #fff"
        });

        $("#menus-item1").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $(".menu_mine").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item3").css({
            "background-color": "#fff",
            "color": "#333"
        });

    });
    // 视频
    $("#menus-item3").click(function() {

        $("#news-innercon").hide();
        $(".nav-container").hide();
        $(".myconcern-container").hide();
        $(".video-wrapper").show();
        $("#menus-item3").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": " #fff"
        });
        $("#menus-item1").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item2").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $(".menu_mine").css({
            "background-color": "#fff",
            "color": "#333"
        });
    });
});
