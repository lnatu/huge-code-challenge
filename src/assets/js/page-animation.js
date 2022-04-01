gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    nav: "¥196,977",
    netAssets: "7,309,193 million",
    dayChange: "¥1,094",
    issued: "3,710,686,634 shares",
  },
  {
    nav: "¥250,000",
    netAssets: "1,509,000 million",
    dayChange: "¥3,100",
    issued: "1,210,555,124 shares",
  },
  {
    nav: "¥350,900",
    netAssets: "2,455,789 million",
    dayChange: "¥8,153",
    issued: "4,644,133,200 shares",
  },
  {
    nav: "¥650,000",
    netAssets: "12,456,322 million",
    dayChange: "¥6,000",
    issued: "3,888,154,021 shares",
  },
];

$(function () {
  gsap.to(".intro .js-stagger", {
    scrollTrigger: {
      trigger: ".intro",
      start: "200px top",
      end: "bottom center",
      scrub: 2,
    },
    y: -100,
    stagger: 0.1,
  });

  gsap.to(".team .js-stagger", {
    scrollTrigger: {
      trigger: ".team",
      start: "top top",
      end: "bottom center",
      scrub: 2,
    },
    y: -100,
    stagger: 0.1,
  });

  let renderCompleted = true;
  const featuredItem = $(".featured-indexes__item");

  $(featuredItem).on("click", function () {
    if (!renderCompleted) return;

    renderCompleted = false;

    featuredItem.removeClass("active");
    $(this).addClass("active");

    const getData = data[+$(this).data("index")];

    gsap.fromTo(
      ".featured-content .js-stagger",
      {
        opacity: 0,
        x: 100,
        stagger: 0.2,
        ease: "Power4.easeOut",
        onComplete() {
          renderData(getData);
        },
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "Power4.easeOut",
        onComplete() {
          renderCompleted = true;
        },
      }
    );
  });
});

function renderData(data) {
  $(".featured-summary__list .featured-summary__item").each(function (_, item) {
    $(item).find(".featured-summary__text.navv").text(data.nav);
    $(item).find(".featured-summary__text.netAssets").text(data.netAssets);
    $(item).find(".featured-summary__text.dayChange").text(data.dayChange);
    $(item).find(".featured-summary__text.issued").text(data.issued);
  });
}
