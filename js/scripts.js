$(function () {
  $(".mobile-menu-icon").on("click", function (event){
    $(".primary-nav").toggleClass('active');
    $(this).toggleClass("open");
  });
  $(".go-premium p a").on('click', function(event){
    if (! $(".modal").hasClass('active')) {
      $(".modal").addClass("active").fadeIn();
    }
  })
  $('.close-modal a').on("click", function (event){
    $(".modal").removeClass("active").fadeOut();
  });  
});