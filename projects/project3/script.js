const navbtn = document.getElementById("nav-btn");
const navclose = document.getElementById("nav-close");
const navbar = document.getElementById("nav-bar");
navbtn.addEventListener("click", () => {
  navbar.classList.add("close");
});
navclose.addEventListener("click",()=>{

    navbar.classList.toggle("close")
})