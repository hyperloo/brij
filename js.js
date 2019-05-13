document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });


  $(document).ready(function(){
    $('.carousel').carousel();
  });
      

  $(document).ready(function(){

      $('a.smooth-scroll').on("click", function(e) {
              var anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top
              }, 1000);
              e.preventDefault();
      });
      
  });
  