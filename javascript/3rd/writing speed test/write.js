
const sentence = "The early modern period began approximately in the early 16th century; notable historical milestones included the European Renaissance, the Age of Discovery, and the Protestant Reformation."

let word = document.getElementById("word");
let answerinput = document.getElementById("answerinput");
let answerbtn = document.getElementById("answerbtn");

word.textContent = `${sentence}`
let intid
let minutes = document.getElementById("minutes");
let min = parseInt(minutes.textContent);

let secondsel = document.getElementById("seconds");
let seconds = parseInt(secondsel.textContent);

let mistakes = document.getElementById("mistake");
let mistake = parseInt(mistakes.textContent);

second = 0;
minute = 0;


function starttime() {
    intid = setInterval(() => {

        {
            second++;

            secondsel.textContent = `${second}`;

            if (second >= 60) {
                second = 0;
                minute++;
                minutes.textContent = `${minute}`;
            }
        }
    }, 1000);
}
function stoptime() { clearInterval(intid); }
answerinput.addEventListener('click', starttime);
answerbtn.addEventListener('click', stoptime);

answerbtn.addEventListener('click', () => {
    const userAnswer = answerinput.value.trim();
    let mistake = 0;

    //Compare each character 
    for (let i = 0; i < sentence.length; i++) {
        if (userAnswer[i] !== sentence[i]) {
            mistake++;
            mistakes.textContent = `${mistake}`
            console.log(mistake);
        }
    }
});