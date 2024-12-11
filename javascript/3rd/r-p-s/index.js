
const sign = document.getElementsByClassName('sign');
const player = document.getElementById("player").innerText;
const winner = document.getElementById("winner");
const picksign = () => {
    Array.from(sign).forEach(sign => sign.addEventListener('click', handleclick));
}

function handleclick(e) {
    const signs = ["rock", "paper", "scissor"];
    // Generate a random index 
    const randomIndex = Math.floor(Math.random() * signs.length);
    // Get the random word from the array 
    const randomWord = signs[randomIndex];
    console.log(randomWord);
    var playesign = e.target;
    var player = playesign.getAttribute("num");
    console.log(player);
    if ((player == "rock" && randomWord == "scissor") || (player == "scissor" && randomWord == "paper") || player == "paper" && randomWord == "rock") {
        winner.innerText = "player won";
    }
    else if (player == randomWord) {
        winner.innerText = "draw";
    }
    else {
        winner.innerText = "cpu won";
    }
}

picksign();