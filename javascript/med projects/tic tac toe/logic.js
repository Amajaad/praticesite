const cells = Array.from(document.getElementsByClassName('cell'));
const restartbtn = document.getElementById('restartbtn');
const playertext = document.getElementById('playertext');
const spaces = Array(9).fill(null);
const playerx = "x";
const playero = "o";
console.log(spaces)
let currentplayer = playerx;

const wincombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let winblock = getComputedStyle(document.body).getPropertyValue('--winblock');

const startgame = () => {
    cells.forEach(cell => cell.addEventListener('click', handleclick));
}
//this func handles filling the innertext and  
function handleclick(tile) {
    const id = tile.target.id;
    //checks if the space contains a id
    if (!spaces[id]) {
        spaces[id] = currentplayer;
        //filling the innertext
        tile.target.innerText = currentplayer
        //checks if the player got one of the wining combos
        if (playerhaswon() !== false) {
            playertext.innerHTML = `${currentplayer} has won`;
            let winingtiles = playerhaswon();
            winingtiles.map(cell => cells[cell].style.backgroundColor = winblock)
            return
        }
        //switching players
        currentplayer = currentplayer == playerx ? playero : playerx;

    }
}
function playerhaswon() {
    for (const combo of wincombos) {
        let [a, b, c] = combo;
        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
            cells.forEach(cell => cell.removeEventListener('click', handleclick));
        }

    }
    return false;
}
restartbtn.addEventListener('click', restart);
function restart() {
    cells.forEach(cell => cell.addEventListener('click', handleclick));
    //return the spaces id to null
    spaces.fill(null)
    //clears the cells
    cells.forEach(cell => {
        cell.innerText = ''
        cell.style.backgroundColor = '';
    });
    playertext.innerHTML = '';
    currentplayer = playerx;
}
startgame();