//= require jquery

window.onload = function () {
  learnMore = document.querySelector('.learn-more')

  $('.learn-more').click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#about-me").offset().top
      }, 2000);
  });
}
