$(document).ready(function () {
    // 导航栏开启与关闭
    $("#headerIconNav").click(function () {
        var classstr=$(this).find("span");
        if (classstr.attr("class").indexOf("icon-gather")>0){
            classstr.attr("class","header-icon-color icon-cancel");
        }
        else {
            classstr.attr("class","header-icon-color icon-gather");
        }
        $("header>nav").toggle(300);
    });
    $("header>nav>a").click(function () {
        // 显示手机页面点击后隐藏导航栏
        let windowwidth=$(window).width();
        if (windowwidth<800){
            $("header>nav").hide();
        }
    });
});