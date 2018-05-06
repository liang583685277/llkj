$(document).ready(function () {
    //
    const urlHref=["","./index/llgwbit.html","./index/jionus.html","./index/lleducation.html","",""];
    $('.contentadiv>div').click(function () {
        // window.open("./media/llgwbit.html");
        console.log($(this).index());
        let index=($(this).index());

        window.location.href=urlHref[index];
    });
});