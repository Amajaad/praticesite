const cards = document.querySelectorAll(".i");
const score = parseFloat(document.getElementById('score'));
let hasFlippedCard = false;
let firstCard, secondCard;
const arr = [];

function flipCard() {
  this.classList.add("flipped");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {

  if (
    firstCard.id === secondCard.id
  ) {
    disableCards();
    addtoscore();
    arr.push(1);
    if (arr.length === 6) {
      const results = document.createElement('div');
   
      results.innerHTML = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<div > See Results</div>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">you win</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body row" id="fres">
        <div class="col-6"><div class="fs-4 fw-semibold d-block">your time</div>
<div class="">${time}</div></div>
<div class="col-6"><div class="fs-4 fw-semibold d-block">your score</div>
<div class="score" id="scoree"></div></div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary reset" data-bs-dismiss="modal">Restart</button>
       <a href="index.html" class="btn btn-primary">Choose another theme</a>
      </div>
    </div>
  </div>
</div>
`

document.querySelector('#re').append(results);
results.querySelector('.reset').addEventListener('click',function(){
  location.reload();
})
    }
  } else {
    unflipCards();
    takefromscore();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

}
function addtoscore() {
  const score = document.getElementById('score');
  const returnvalue = parseFloat(score.textContent) + 10;
  score.textContent = returnvalue;
  
  document.querySelector('#score').innerHTML = `${returnvalue}`;

}
function takefromscore() {
  const score = document.getElementById('score');
  const returnvalue = parseFloat(score.textContent) - 2;
  score.textContent = returnvalue;

  document.querySelector('#score').innerHTML = `${returnvalue}`;
  document.querySelector('.total').innerHTML=returnvalue;
}
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
  }, 900);
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//timer
let timer;
let time = 0;
let timerStarted = false;

function startTimer() {
  if (!timerStarted) {
    timerStarted = true;
    timer = setInterval(() => {
      time++;
      document.getElementById('time').textContent = time;
    }, 1000);
  }

}
