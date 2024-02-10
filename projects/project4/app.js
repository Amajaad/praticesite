const navbtn = document.getElementById("nav-btn");
const navclose = document.getElementById("nav-close");
const navbar = document.getElementById("navbar");
navbtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
navclose.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
