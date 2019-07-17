

// PROVIDES Smart Scrolling function for single HTML Portfolio

$(document).ready(function(){
    $("ul.nav li a[href^='#']").click(function(){
        //quick fix - need to place function that provides clean outputs and Home reports name
        $("#navTag").text($(this).attr("href"));
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 400);
    });
});