const navbar=document.getElementById("navbar")
const navclose=document.getElementById("navclose")
const navbtn=document.getElementById("navbtn")
navbtn.addEventListener("click",()=>{
    navbar.classList.toggle("open")
})
navclose.addEventListener("click",()=>{
    navbar.classList.remove("open")
})