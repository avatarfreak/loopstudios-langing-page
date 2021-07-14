const menuToggle = document.querySelector(".navbar__toggler");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", (evt) => {
  nav.classList.toggle("active");
  openMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
});
