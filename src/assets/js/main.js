$(function () {
  const navBar = $(".nav-bar");

  navBar.slideUp();

  $(".nav-bar__toggle").on("click", function () {
    navBar.slideToggle();
  });
});
