$(document).ready(function(){
    $(window).scroll(function(){
        $(".seciton_one").css("opacity", 1 - $(window).scrollTop() / ($('.section_one').height() / 2));
    });
});
