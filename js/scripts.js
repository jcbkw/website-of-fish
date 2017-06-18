$(function () {
  $(".mobile-menu-icon").on("click", function (event){
    $(".primary-nav").toggleClass('active');
    $(this).toggleClass("open");
  });
  $(".go-premium p a").on('click', function(event){
    if (! $(".modal").hasClass('active')) {
      $(".modal-learn-more").fadeIn();
    }
  })
  $('.close-modal a').on("click", function (event){
    $(".modal-learn-more").fadeOut();
  });  
});