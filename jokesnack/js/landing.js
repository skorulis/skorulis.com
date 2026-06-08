(function () {
  "use strict";

  function initHero() {
    requestAnimationFrame(function () {
      document.body.classList.add("loaded");
    });
  }

  function initScrollReveals() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      reveals.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initNavScroll() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initHeroVideo() {
    var video = document.querySelector(".hero__video");
    var media = document.querySelector(".hero__media");
    if (!video || !media) return;

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    function showFallback() {
      media.classList.remove("has-video");
    }

    function showVideo() {
      media.classList.add("has-video");
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(showFallback);
      }
    }

    video.addEventListener("error", showFallback);
    video.addEventListener("loadeddata", showVideo);

    if (video.readyState >= 2) {
      showVideo();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHero();
    initScrollReveals();
    initNavScroll();
    initHeroVideo();
  });
})();
