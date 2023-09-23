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
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
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
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  });
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }
  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

// Add active class on another page linked
// ==========================================
$(window).on("load", function () {
  let menu = document.getElementById("menu");
  menu.onclick = function () {
    menu.classList.toggle("openmenu");
  };
});

// PARTICLE ANIMATION
tsParticles.load({
  id: "tsparticles",
  options: {
    autoPlay: true,
    background: {
      color: { value: "" },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: { color: { value: "#fff" }, opacity: 1 },
      enable: false,
    },
    defaultThemes: {},
    delay: 0,
    fullScreen: { enable: true, zIndex: 1 },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: "push" },
        onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: false, force: 2, smooth: 10 },
        },
        resize: { delay: 0.5, enable: true },
      },
      modes: {
        trail: { delay: 1, pauseOnStop: false, quantity: 1 },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: { distance: 200 },
        bubble: { distance: 200, duration: 0.4, mix: false },
        connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
        grab: {
          distance: 100,
          links: { blink: false, consent: false, opacity: 1 },
        },
        push: { default: true, groups: [], quantity: 2 },
        remove: { quantity: 2 },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 2,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: { factor: 3, radius: 200 },
        light: {
          area: {
            gradient: {
              start: { value: "#ffffff" },
              stop: { value: "#000000" },
            },
            radius: 1000,
          },
          shadow: { color: { value: "#000000" }, length: 2000 },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      collisions: {
        absorb: { speed: 2 },
        bounce: {
          horizontal: {
            random: { enable: false, minimumValue: 0.1 },
            value: 1,
          },
          vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: { enable: true, retries: 0 },
      },
      color: {
        value: "#ff0000",
        animation: {
          h: {
            count: 0,
            enable: true,
            offset: 0,
            speed: 20,
            delay: 0,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
        },
      },
      groups: {},
      move: {
        angle: { offset: 0, value: 90 },
        attract: { distance: 200, enable: false, rotate: { x: 3000, y: 3000 } },
        center: { x: 50, y: 50, mode: "percent", radius: 0 },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        size: false,
        speed: 6,
        spin: { acceleration: 0, enable: false },
        straight: false,
        trail: { enable: false, length: 10, fill: {} },
        vibrate: false,
        warp: false,
      },
      number: {
        density: { enable: true, width: 1920, height: 1080 },
        limit: 0,
        value: 100,
      },
      opacity: {
        random: { enable: false, minimumValue: 0.1 },
        value: 0.5,
        animation: {
          count: 0,
          enable: false,
          speed: 2,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: { value: "#000" },
        enable: false,
        offset: { x: 0, y: 0 },
      },
      shape: { close: true, fill: true, options: {}, type: "circle" },
      size: {
        random: { enable: false, minimumValue: 1 },
        value: { min: 0.1, max: 3 },
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      stroke: { width: 0 },
      zIndex: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
          rate: {
            random: { enable: false, minimumValue: 0 },
            value: { min: 4, max: 9 },
          },
          sizeOffset: true,
        },
      },
      roll: {
        darken: { enable: false, value: 0 },
        enable: false,
        enlighten: { enable: false, value: 0 },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        animation: { enable: false, speed: 0, decay: 0, sync: false },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: { enable: false, frequency: 0.05, opacity: 1 },
        particles: { enable: false, frequency: 0.05, opacity: 1 },
      },
      wobble: { distance: 5, enable: false, speed: { angle: 50, move: 10 } },
      life: {
        count: 0,
        delay: {
          random: { enable: false, minimumValue: 0 },
          value: 0,
          sync: false,
        },
        duration: {
          random: { enable: false, minimumValue: 0.0001 },
          value: 0,
          sync: false,
        },
      },
      rotate: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        animation: { enable: false, speed: 0, decay: 0, sync: false },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: { random: { enable: false, minimumValue: 0 }, value: 45 },
        width: 1,
      },
      links: {
        blink: false,
        color: { value: "#ffffff" },
        consent: false,
        distance: 100,
        enable: true,
        frequency: 1,
        opacity: 0.4,
        shadow: { blur: 5, color: { value: "#000" }, enable: false },
        triangles: { enable: false, frequency: 1 },
        width: 1,
        warp: false,
      },
      repulse: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    motion: { disable: false, reduce: { factor: 4, value: true } },
  },
});

/*

  using 
    - an animated gif of sparkles.
    - an animated gradient as a holo effect.
    - color-dodge mix blend mode
  
*/
var x;
var $cards = $(".card");
var $style = $(".hover");

$cards
  .on("mousemove touchmove", function (e) {
    // normalise touch/mouse
    var pos = [e.offsetX, e.offsetY];
    e.preventDefault();
    if (e.type === "touchmove") {
      pos = [e.touches[0].clientX, e.touches[0].clientY];
    }
    var $card = $(this);
    // math for mouse position
    var l = pos[0];
    var t = pos[1];
    var h = $card.height();
    var w = $card.width();
    var px = Math.abs(Math.floor((100 / w) * l) - 100);
    var py = Math.abs(Math.floor((100 / h) * t) - 100);
    var pa = 50 - px + (50 - py);
    // math for gradient / background positions
    var lp = 50 + (px - 50) / 1.5;
    var tp = 50 + (py - 50) / 1.5;
    var px_spark = 50 + (px - 50) / 7;
    var py_spark = 50 + (py - 50) / 7;
    var p_opc = 20 + Math.abs(pa) * 1.5;
    var ty = ((tp - 50) / 2) * -1;
    var tx = ((lp - 50) / 1.5) * 0.5;
    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}%;`;
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    var opc = `opacity: ${p_opc / 100};`;
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
    // need to use a <style> tag for psuedo elements
    var style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `;
    // set / apply css class and style
    $cards.removeClass("active");
    $card.removeClass("animated");
    $card.attr("style", tf);
    $style.html(style);
    if (e.type === "touchmove") {
      return false;
    }
    clearTimeout(x);
  })
  .on("mouseout touchend touchcancel", function () {
    // remove css, apply custom animation on end
    var $card = $(this);
    $style.html("");
    $card.removeAttr("style");
    x = setTimeout(function () {
      $card.addClass("animated");
    }, 2500);
  });

// Testimonials carousel
var carousel = $(".carousel"),
  currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    transform: "rotateY(" + currdeg + "deg)",
  });
}
