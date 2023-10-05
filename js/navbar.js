// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "a", function (e) {
    $("#navbarSupportedContent ul a").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  }, 0);
});
$(window).on("scroll", function () {
  setTimeout(function () {
    test();
  }, 0);
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 0);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  }, 0);
});

// --------------add active class-on another-page move----------
// jQuery(document).ready(function ($) {
//   // Get current path and find target link
//   var path = window.location.pathname.split("/").pop();

//   // Account for home page with empty path
//   if (path == "") {
//     path = "index.html";
//   }
//   var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
//   // Add active class to target link
//   target.parent().addClass("active");
// });

// Add active class on another page linked
// ==========================================
$(window).on("load", function () {
  let menu = document.getElementById("menu");
  menu.onclick = function () {
    menu.classList.toggle("openmenu");
  };
});
