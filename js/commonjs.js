$(document).ready(function () {
    // 导航栏开启与关闭
    $("#headerIconNav").click(function () {
        $("header>nav").toggle(300);
    });
    $("header>nav>a").click(function () {
        $("header>nav").hide();
    });
});