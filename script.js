const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function page3() {
  let elemC = document.querySelector(".elem-container");
  let fixed = document.querySelector(".fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  //  WHEN I HAVE ONLY ONE ELEMMENT
  // var elem1 = document.querySelector("#elem1");
  // elem1.addEventListener("mouseenter", function () {
  //   var image = elem1.getAttribute("data-image");
  //   fixed.style.backgroundImage = `url(${image})`; //Template literals
  // });

  //WHEN I HAVE MULTIPLE ELEMENT

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

page3();
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

swiperAnimation();
