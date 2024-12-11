const ansarr = []
const ansbtn1 = document.querySelector('.a1');
const ansbtn2 = document.querySelector('.a2');
const ansbtn3 = document.querySelector('.a3');
const ansbtn4 = document.querySelector('.a4');
const ansbtn5 = document.querySelector('.a5');

ansbtn1.addEventListener('click', function (event) {

    const answer1 = document.querySelector('#q1a').value;

    ansarr.push(answer1);
    console.log(ansarr);
    if (answer1 == "c") {
        let score = parseFloat(document.getElementById("score").innerText);
        document.getElementById("score").innerText = score + 1;
    }
}
);
ansbtn2.addEventListener('click', function (event) {
    const answer2 = document.querySelector('#q2a').value;
    ansarr.push(answer2);
    console.log(ansarr);
    if (answer2 == "c") {
        let score = parseFloat(document.getElementById("score").innerText);
        document.getElementById("score").innerText = score + 1;
    }
});

ansbtn3.addEventListener('click', function (event) {
    const answer3 = document.querySelector('#q3a').value;
    ansarr.push(answer3);
    console.log(ansarr);
    if (answer3 == "c") {
        let score = parseFloat(document.getElementById("score").innerText);
        document.getElementById("score").innerText = score + 1;
    }
});

ansbtn4.addEventListener('click', function (event) {
    const answer4 = document.querySelector('#q4a').value;
    ansarr.push(answer4);
    console.log(ansarr);
    if (answer4 == "c") {
        let score = parseFloat(document.getElementById("score").innerText);
        document.getElementById("score").innerText = score + 1;
    }
});

ansbtn5.addEventListener('click', function (event) {
    const answer5 = document.querySelector('#q5a').value;
    ansarr.push(answer5);
    console.log(ansarr);
    if (answer5 == "c") {
        let score = parseFloat(document.getElementById("score").innerText);
        document.getElementById("score").innerText = score + 1;
    }
});
