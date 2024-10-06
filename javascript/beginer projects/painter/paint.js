const canvas = document.getElementById('canvas');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

// Canvas offset
const offsetX = canvas.offsetLeft;
const offsetY = canvas.offsetTop;

// Canvas dimensions
const canvaswidth = window.innerWidth - offsetX;
const canvasheight = window.innerHeight - offsetY;


let painting = false;
let startX;
let startY;

const draw = (e) => {
    if (!painting) {
        return;
    }
    ctx.lineWidth = linewidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - offsetX, e.clientY - offsetY);
}

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('click', e => {
    if (e.target.id === 'color') {
        ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === 'linewidth') {
        linewidth = e.target.value;
    }
});

canvas.addEventListener('mousedown', (e) => {
    painting = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
});

canvas.addEventListener('mouseup', e => {
    painting = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
