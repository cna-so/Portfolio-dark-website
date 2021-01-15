$(window).scroll(function () {
  var fromTopPx = 200; // distance to trigger
  var scrolledFromtop = $(window).scrollTop();
  if (scrolledFromtop > fromTopPx) {
    $("nav").addClass("bg-o-dark");
  } else {
    $("nav").removeClass("bg-o-dark");
  }
});

$(".navbar-toggler").click(function () {
  //when navbar-toggler is clicked
  if ($(window).scrollTop() <= 300) {
    //if window scrolled 300px or less from top
    $("nav").toggleClass("bg-o-dark"); //add the solid class to navbar
  }
});
$(document).on("click", 'a[href^="#"]', function (event) {
  $(".navbar-toggler").addClass("collapsed");
  $("#navbar-id").removeClass("show");
});
