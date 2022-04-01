$(function () {
  let loadedCount = 0; // current number of images loaded
  let imagesToLoad = $("img").length; // number of images
  let loadingProgress = 0; // timeline progress - starts at 0

  $("img")
    .imagesLoaded({})
    .progress(function () {
      loadProgress();
    });

  // progress timeline
  const progressTl = gsap.timeline({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete,
  });

  progressTl
    // tween the progress bar width
    .to($(".loader-progress"), 1, {
      width: "calc(100% - 3px)",
      ease: Linear.easeNone,
    });

  function loadProgress() {
    // one more image has been loaded
    loadedCount++;

    loadingProgress = loadedCount / imagesToLoad;

    //  GSAP tween of progress bar timeline
    gsap.to(progressTl, 0.7, {
      progress: loadingProgress,
      ease: Linear.easeNone,
    });
  }

  // as the progress bar width updates and grows we put the percentage loaded in the screen
  function progressUpdate() {
    // the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);

    // we put the percentage in the screen
    $(".loader-text").text(loadingProgress + "%");
  }

  function loadComplete() {
    //  preloader out
    var preloaderOutTl = new TimelineMax();

    preloaderOutTl
      .to(".loader", {
        autoAlpha: 0,
        ease: Back.easeInOut,
        duration: 0.3,
        onComplete() {
          $(".loader").remove();
        },
      })
      .to(".overlay", {
        y: "100%",
        ease: Power4.easeOut,
        duration: 1,
        onComplete() {
          $(".overlay").remove();
        },
      });

    return preloaderOutTl;
  }
});
