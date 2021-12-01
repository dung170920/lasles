$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button class="slick-prev pull-left" type="button"><i class="far fa-arrow-left"></i></button>`,
  nextArrow: `<button class="slick-next pull-right" type="button"><i class="far fa-arrow-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

const toggle = document.querySelector(".menu-toggle");
const menuItem = document.querySelector(".menu");
toggle.addEventListener("click", function () {
  menuItem.classList.add("active");
});
window.addEventListener("click", function (e) {
  if (!menuItem.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menuItem.classList.remove("active");
  }
});
