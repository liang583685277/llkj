$(document).ready(function () {
    // 导航栏开启与关闭
    $("#headerIconNav").click(function () {
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