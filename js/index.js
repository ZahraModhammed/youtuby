$(document).ready(function () {
  $(".first-list").addClass("active");

    $(".nav-item").click(function() {
     $(".nav-item").removeClass("active");
     $(this).addClass("active")  
    });
    $("#toggler").click(function(event){
      $("#wrap").toggleClass("toggled");

      var right = $(".sidebar").css('right');
      if (right == "0px")
      {
          $(".sidebar").css({"right": "-17rem"});
          $(".layler").fadeOut();
      }
  
      else{
         $(".sidebar").css({"right" : "0"});
         $(".layler") .fadeIn();
      }
    });

    $(".layler").click(function(){
       $(".sidebar").css({'right': '-17rem'});
       $(".layler").fadeOut();

    });
    $(".search-icon").click(function () {
      $(".search-input").slideToggle("slow")
      
    })
   
});
