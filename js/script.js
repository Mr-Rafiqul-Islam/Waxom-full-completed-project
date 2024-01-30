//  Sticky Header
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 600) {
    $(".navbar").addClass("sticky_header");
  } else {
    $(".navbar").removeClass("sticky_header");
  }
});

// for mixit up
var containerEl = document.querySelector(".all_projects");

var mixer = mixitup(containerEl);
