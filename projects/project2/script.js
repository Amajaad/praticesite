const navbtn=document.getElementById("nav-btn");
const navclose=document.getElementById("nav-close");
const navbar=document.getElementById("navbar");

navbtn.addEventListener("click" ,() =>{
    navbar.classList.add("open")
    navbar.classList.remove("close")
})
navclose.addEventListener("click" ,()=>{
    navbar.classList.add("close")
})
