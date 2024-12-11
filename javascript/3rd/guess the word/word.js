var messages = [
    "By the skin of your ______", "Easier said than ____", "Draw the ____"
];
var answers = ["teeth", "done", "line"];
const result = document.getElementById("result");
var idiom = document.getElementById("idiom");
const inp = document.getElementById("inp");
var guess = document.getElementById("guess");

var messageindex = 0;

idiom.textContent = messages[messageindex];
inp.addEventListener('click', () => {
    if (guess.value == answers[messageindex]) {
        console.log("yes");
        messageindex += 1 % messages.length;
        idiom.textContent = messages[messageindex];
        result.innerHTML = "true";
    }
    else if (guess.value !== answers[messageindex] || guess.value == "") {
        console.log("no");
        result.innerHTML = "false";
    }
    guess.value = "";


    if (messageindex == messages.length) {
        result.innerHTML = "you passed";
    }
});
