$(document).ready(function(){
    $("#container").addClass("start");
    $("nav li").click(function(){
		$("#container").css("max-height", "100%");
		var id=$(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");

        $(".content").removeClass("prev this next");

        $("#" + id).addClass("this").prevAll().addClass("prev");

        $("#" + id).nextAll().addClass("next");

    });
    $(".logo_box").click(function(){
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        $("#container").css("max-height", "1200px");
    });
    $(".roll_left").click(function(){
        $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    });
    $(".roll_right").click(function(){
        $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    })


});

