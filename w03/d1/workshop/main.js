$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $(".section_one").css({"opacity" : "0.5"})
      $(".nav_bar").css({"background-color" : "#da9eb5"})
    }
    else{
      $(".section_one").css({"opacity" : "1"})
      $(".nav_bar").css({"background-color" : "#f4eaee"})
    }
  })
})

$(document).ready(function(){
  $(window).scroll(function(){

    if($(this).scrollTop()>1500){
      $(".section_two").css({"opacity" : "0.5"})
      $(".nav_bar").css({"background-color" : "#d38ba7"})
    }
    else{
      $(".section_two").css({"opacity" : "1"})
    }
  })
})

$(document).ready(function(){
  $(window).scroll(function(){

    if($(this).scrollTop()>1400){
    $(".content_two").css({"transform" : "translateY(0px)"})
    }
    else{

    $(".content_two").css({"transform" : "translateY(200px)"})
    }
  })
})


$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>2200){
      $(".section_three").css({"opacity" : "0.5"})
      $(".nav_bar").css({"background-color" : "#cc7999"})
    }
    else{
      $(".section_three").css({"opacity" : "1"})
    }
  })
})

$(document).scroll(function() {
  //  console.log($(document).scrollTop());
})


/* Slider (work in progress)
 * 03/09/2015 by Andrew Errico
 */

// $(function() {
//
//     // slider type
//     $t = "slide"; // opitions are fade and slide
//
//   	//variables
//     $f = 2000,  // fade in/out speed
//     $s = 5000,  // slide transition speed (for sliding carousel)
//     $d = 5000;  // duration per slide
//
//     $n = $('.slide').length; //number of slides
//     $w = $('.slide').width(); // slide width
//   	$c = $('.section_two').width(); // container width
//    	$ss = $n * $w; // slideshow width
//
//
//       function timer() {
//         $('.timer').animate({"width":$w}, $d);
//         $('.timer').animate({"width":0}, 0);
//     }
//
//
//   // fading function
//     function fadeInOut() {
//       timer();
//         $i = 0;
//         var setCSS = {
//             'position' : 'absolute',
//             'top' : '0',
//             'left' : '0'
//         }
//
//         $('.slide').css(setCSS);
//
//         //show first item
//         $('.slide').eq($i).show();
//
//
//         setInterval(function() {
//           timer();
//             $('.slide').eq($i).fadeOut($f);
//             if ($i == $n - 1) {
//                 $i = 0;
//             } else {
//                 $i++;
//             }
//             $('.slide').eq($i).fadeIn($f, function() {
//                 $('.timer').css({'width' : '0'});
//             });
//
//         }, $d);
//
//     }
//
//     function slide() {
//       timer();
//         var setSlideCSS = {
//             'float' : 'left',
//             'display' : 'inline-block',
//           	'width' : $c
//         }
//         var setSlideShowCSS = {
//             'width' : $ss // set width of slideshow container
//         }
//         $('.slide').css(setSlideCSS);
//         $('.slideshow').css(setSlideShowCSS);
//
//
//         setInterval(function() {
//             timer();
//             $('.slideshow').animate({"left": -$w}, $s, function(){
//                 // to create infinite loop
//                 $('.slideshow').css('left',0).append( $('.slide:first'));
//             });
//         }, $d);
//
//     }
//
//     if ($t == "fade") {
//         fadeInOut();
//
//     } if ($t == "slide") {
//         slide();
//
//     } else {
//
//     }
// });
