//户型的js
$(".housedetail-type span").click(function() {
        if (this.className.indexOf('more-down') > -1) {
            $(".housedetail-type").css({
                "height": "auto"
            })
            $(".housedetail-type .picture-display").css({
                "height": "auto"
            })
            $(".housedetail-type .seemore span").removeClass("more-down").addClass("more-up")
        } else {
            $(".housedetail-type").css({
                "height": "440px"
            })
            $(".housedetail-type .picture-display").css({
                "height": "260px"
            })
            $(".housedetail-type .seemore span").removeClass("more-up").addClass("more-down")
        }
    })
    // 楼盘照片的js
$(".housedetail-picture .more-down").click(function() {
    if (this.className.indexOf('more-down') > -1) {
        $(".housedetail-picture").css({
            "height": "auto"
        })
        $(".housedetail-picture .picture-display").css({
            "height": "auto"
        })
        $(".housedetail-picture .seemore span").removeClass("more-down").addClass("more-up")
    } else {
        $(".housedetail-picture").css({
            "height": "440px"
        })
        $(".housedetail-picture .picture-display").css({
            "height": "260px"
        })
        $(".housedetail-picture .seemore span").removeClass("more-up").addClass("more-down")
    }
})

//block里面的小类筛选
$(".aim-choose li").click(function() {
    $(this).siblings().addClass("list-item").removeClass("list-item-focus")
    $(this).removeClass("list-item").addClass("list-item-focus")
})