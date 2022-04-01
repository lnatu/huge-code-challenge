const featuredData = [];

$(function () {
  const navBar = $(".nav-bar");

  $(".nav-bar__toggle").on("click", function () {
    navBar.toggleClass("visible");
    $(this).toggleClass("active");
  });

  /**
   * Handle scrolling
   */
  const follow = (offset) => {
    $(".intro .intro-thumb").css({ "--move": offset + "px" });
  };

  $(window).on("scroll", function () {
    const offsetTop = $(this).scrollTop();

    follow(offsetTop);
  });
});
