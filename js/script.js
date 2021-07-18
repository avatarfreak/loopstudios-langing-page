const menuToggle = document.querySelector(".navbar__toggler");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", (evt) => {
  nav.classList.toggle("active");
  openMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
});

//Intersection observer API

//get all background image selector as an Array
const items = document.querySelectorAll(".gallery .gallery__item-bg-img");

const imageOptions = {};

//collect all background image selector and stage for observing
const target = (items, observer) => {
  items.forEach((item) => {
    observer.observe(item);
  });
};

//mechanism for image transition
const imageToReveal = (entries) => {
  entries.forEach((entry) => {
    let elem = entry.target;
    if (entry.isIntersecting) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
};

//Invoke IntersectionObserver
const Observer = new IntersectionObserver(imageToReveal, imageOptions);
target(items, Observer);
