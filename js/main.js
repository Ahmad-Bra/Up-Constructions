// swiper
const swiper = new Swiper(".slide-1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
});

new Swiper(".slide-2", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// animation on scroll
AOS.init();

// services details
document.querySelector(".logo").onclick = () => {
  window.open("/assests/img/hero-carousel/hero-carousel-2.jpg", "_self");
};

document.querySelectorAll(".services .card-services").forEach((card) => {
  card.addEventListener("click", (e) => openTargetPage(e));
});
function openTargetPage() {
  window.open("services-details.html", "_self");
}

document.querySelectorAll(".services-2 .box-services .box").forEach((box) => {
  box.addEventListener("click", () => {
    window.open("index.html", "_self");
  });
});

let allWorkType = document.querySelectorAll(".services-3 .ty");
let lis = document.querySelectorAll(".services-3 .choose-type li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    allWorkType.forEach((ty) => {
      ty.style.cssText = "display: none; ";
    });
    document.querySelector(e.target.dataset.type).style.cssText =
      "display: block; ";
  });
});

//protfoilio

let filterItem = document.querySelectorAll(".portfolio .filter-item");
let filterLis = document.querySelectorAll(".portfolio ul li");
filterLis.forEach((li) => {
  li.addEventListener("click", function () {
    filterLis.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
    filterItem.forEach((item) => {
      item.style.cssText =
        "display : none ; animation: img-animate-back .3s linear";
    });
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
      el.style.cssText = "display : block; animation: img-animate .5s linear";
    });
  });
});

// blog
document.querySelectorAll(".blog .blogger").forEach((blog) => {
  blog.addEventListener("click", () => {
    window.open("blog-details.html", "_self");
  });
});
let btnScroll = document.querySelector(".scroll-top");
// scrollToTop
window.onscroll = () => {
  if (window.scrollY >= 500) {
    btnScroll.style.cssText = " cssText: block ; opacity: 1;";
  } else {
    btnScroll.style.cssText = " display :none; opacity: 0;";
  }
};
btnScroll.onscroll = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

//pure counter
new PureCounter({
  selector: ".purecounter",
});

const glightbox = GLightbox({
  selector: ".glightbox",
});

// navbar
let navbar = document.querySelector(".heading .navbar");
let navToggle = document.querySelector(".landing .toggle");
let navClose = document.querySelector(".navbar .close");

document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("toggle")) {
    navbar.classList.add("active");
  }
  if (e.target.classList.contains("close")) {
    e.target.parentElement.classList.remove("active");
  }
  if (navbar.classList.contains("active")) {
    document.querySelector(".section .next").style.cssText = "z-index: 0;";
    document.querySelector(".section .prev").style.cssText = "z-index: 0;";
  } else {
    document.querySelector(".section .next").style.cssText = "z-index: 10;";
    document.querySelector(".section .prev").style.cssText = "z-index: 10;";
  }
});

let preloaderScreen = document.getElementById("preloader");

if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
