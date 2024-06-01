const menuitems1 = document.getElementById("menu");

const menubtn = document.getElementById("menu-btn");
const menu = document.getElementById("navbar");
const cbtn = document.getElementById("nav-close");
const obtn = document.getElementById("nav-btn");
menubtn.addEventListener("click", () => {
  menuitems1.classList.toggle("slide");
});
obtn.addEventListener("click", () => {
  menu.classList.add("show");
});
cbtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
