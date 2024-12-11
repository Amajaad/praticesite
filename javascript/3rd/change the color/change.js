var canvas = document.getElementById("canvas");
var btns = document.getElementsByClassName("btn");

const changecolor = () => {
    Array.from(btns).forEach(btn => btn.addEventListener('click', handleclick));
}
function handleclick(e)
{
var btn = e.target;
var btncolor = btn.getAttribute("color");
canvas.style.background = btncolor; 
}
changecolor();