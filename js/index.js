$(document).ready(function () {
    //
    const urlHref=["","./index/llgwbit.html","./index/rdcenter.html","./index/lleducation.html","./media/media.html",""];
    $('.contentadiv>div').click(function () {
        console.log($(this).index());
        let index=($(this).index());

        window.location.href=urlHref[index];
    });
    $(".bitulli:eq(0)>li").click(function () {
        $(".bitulli:eq(0)>li").removeClass("selectnava");
        $(this).addClass("selectnava");
    });
});