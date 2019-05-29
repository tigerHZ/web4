// 商务模块的js
$(".hotel-business .more-down").click(function() {

    if (this.className.indexOf('more-down') > -1) {
        $(".hotel-business").css({
            "height": "auto"
        })
        $(".hotel-business .hotel-picture-display").css({
            "height": "auto"
        })
        $(".hotel-business .seemore span").removeClass("more-down").addClass("more-up")
    } else {
        $(".hotel-business").css({
            "height": "670px"
        })
        $(".hotel-business .hotel-picture-display").css({
            "height": "474px"
        });
        $(".hotel-business .seemore span").removeClass("more-up").addClass("more-down")
    }
})

// 健身的js
$(".hotel-sport .more-down").click(function() {
        if (this.className.indexOf('more-down') > -1) {
            $(".hotel-sport").css({
                "height": "auto"
            })
            $(".hotel-sport .hotel-picture-display").css({
                "height": "auto"
            })
            $(".hotel-sport .seemore span").removeClass("more-down").addClass("more-up")
        } else {
            $(".hotel-sport").css({
                "height": "670px"
            })
            $(".hotel-sport .hotel-picture-display").css({
                "height": "474px"
            })
            $(".hotel-sport .seemore span").removeClass("more-up").addClass("more-down")
        }
    })
    // 餐厅的js
$(".hotel-restaurant .more-down").click(function() {
    if (this.className.indexOf('more-down') > -1) {
        $(".hotel-restaurant").css({
            "height": "auto"
        })
        $(".hotel-restaurant .hotel-picture-display").css({
            "height": "auto"
        })
        $(".hotel-restaurant .seemore span").removeClass("more-down").addClass("more-up")
    } else {
        $(".hotel-restaurant").css({
            "height": "670px"
        })
        $(".hotel-restaurant .hotel-picture-display").css({
            "height": "474px"
        })
        $(".hotel-restaurant .seemore span").removeClass("more-up").addClass("more-down")
    }
})

/*
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
    $(".bigImg").addClass("bigImg");
    // 隐藏
    $("#opacityBottom").bind("click", clickToSmallImg);
    $(".bigImg").bind("click", clickToSmallImg);
    var imgHeight = $(".bigImg").prop("height");
    if (imgHeight < h) {
        $(".bigImg").css({ "top": (h - imgHeight) / 2 + 'px' });

    } else {
        $(".bigImg").css({ "top": '0px' });
    }

    function clickToSmallImg() {
        $("html,body").removeClass("none-scroll");
        $("#opacityBottom").remove();
    }
}*/