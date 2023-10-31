let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const reviewContainer = document.getElementById("review-container");

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "Profile picture of Indyah Almay",
    text: "a delightful swirl of happiness in every bite.",
    name: "Indyah Almay",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    alt: "Profile picture of Edward Cullen",
    text: "the perfect remedy for a bad day and the ultimate celebration on a good one.",
    name: "Edward Jones",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/770/462/564/pretty-girl-pictures-1920x1200-wallpaper-preview.jpg",
    alt: "Profile picture of Heather",
    text: "a scoop of pure bliss in every bite.",
    name: "Heather White",
  },
];

function populateDisplay() {
  reviews.forEach((review) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.addEventListener("mouseover", showCard);
    cardElement.addEventListener("mouseleave", blurCard);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", review.img);
    imageElement.setAttribute("alt", review.alt);
    imageContainer.append(imageElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = review.text;
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");
    nameContainer.textContent = review.name;

    cardElement.append(imageContainer, paragraphElement, nameContainer);

    reviewContainer.append(cardElement);
  });
}
populateDisplay();

function showCard() {
  this.classList.add("active");
}

function blurCard() {
  this.classList.remove("active");
}
