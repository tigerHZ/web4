$(document).ready(function() {
    $(".menu").click(function() {
        $(".menu-dir").show().css({
            "z-index": "3"
        })
        $(".pop-item-bg").toggle();
        $('body,html').addClass('none-scroll');
    });
    $(".pop-item-exit").click(function() {
        $(".menu-dir").hide();
        $(".pop-item-bg").hide();
        $('body,html').removeClass('none-scroll');
    });
});

// 图片放大函数
$("li img").click(function() {
    var imgsrc = $(this).attr("src");
    var opacityBottom = '<div id="opacityBottom" style="display: none"><img class="bigImg" src="' + imgsrc + '" ></div>';
    $(document.body).append(opacityBottom);
    toBigImg(); //变大函数
})

function toBigImg() {
    $("#opacityBottom").addClass("opacityBottom");
    $("#opacityBottom").show();
    $("html,body").addClass("none-scroll"); //锁定网页下层不可滑动
    /*点击图片或者空白处即隐藏大图*/
    $("#opacityBottom").bind("click", clickToSmallImg);
    $(".bigImg").bind("click", clickToSmallImg);

    function clickToSmallImg() {
        $("html,body").removeClass("none-scroll");
        $("#opacityBottom").remove();
    }
}

$(function() {
    // var mySwiper = new Swiper('.swiper-container', {
    //     autoplay: 5000, //可选选项，自动滑动
    //     loop: true, //可选选项，开启循环
    //     paginationClickable: true,
    //     autoplayDisableOnInteraction: false
    //
    // });
})