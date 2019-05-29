$(".job li").click(function() {
    $(this).siblings().addClass("list-item").removeClass("list-item-focus")
    $(this).removeClass("list-item").addClass("list-item-focus")
})