'use strict';
// var myInterval = setInterval(function(){
//   console.log(new Date());
// },1000);

$(function(){
  //$('.text-muted').css('color','red');
  //configuration
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM for speeding your Jscript operation make the search only ones and store reuslts in variables
  var $slider = $('#slider');
  var $slidecontainer = $slider.find('.slides');
  var $slide =$slidecontainer.find('.slide');

  // setInterval(function(){
  //   // console.log(new Date());
  //   //$('#slider .slides').animate({'margin-left': -720},1000)
  //   //$('#slider .slides').animate({'margin-left': '-='+width}, animationSpeed);
  //   $slidecontainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
  //     currentSlide++;
  //     if(currentSlide == $slides.length){
  //       currentSlide = 1;
  //       $slidecontainer.css('margin-left', 0);
  //     }
  //   });
  // }, pause);
  //set the interval
    //animate margin left
    //if it is last slide go to position 1(0px)
  var myinterval;
  //resume on mouseleave
  function startSlider(){
    myinterval=setInterval(function(){
      // console.log(new Date());
      //$('#slider .slides').animate({'margin-left': -720},1000)
      //$('#slider .slides').animate({'margin-left': '-='+width}, animationSpeed);
      $slidecontainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
        currentSlide++;
        if(currentSlide == $slide.length){
          currentSlide = 1;
          $slidecontainer.css('margin-left', 0);
        }
      });
    }, pause);
  }
  //listen for mouserenter and pause
  function pauseSlider(){
    clearInterval(myinterval);
  }
  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  startSlider();

});
