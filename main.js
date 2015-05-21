$(document).ready(function(){

  
$('.slide01').fadeIn(500).delay(2000).fadeOut(500);
      
$('.slide02').delay(3000).fadeIn(500).delay(2000).fadeOut(500);
    
$('.slide03').delay(6000).fadeIn(500).delay(2000).fadeOut(500);

 function slider(){
 
 $('.slide01').fadeIn(500).delay(2000).fadeOut(500); //500+2000+500 = 3000
      
 $('.slide02').delay(3000).fadeIn(500).delay(2000).fadeOut(500); //3000+500+2000+500 = 6000
    
 $('.slide03').delay(6000).fadeIn(500).delay(2000).fadeOut(500); //6000+500+2000+500 = 9000
   }
  
  var sliderInterval = setInterval(slider, 12000);
  
  
});