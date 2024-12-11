window.addEventListener('DOMContentLoaded', function () {

    const con = document.getElementById('con');
    function genrate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomvalue = genrate(1, 100);
    document.getElementById('randomnum').innerHTML = randomvalue;
    console.log(randomvalue)
    con.addEventListener('click', function () {

        const tries = parseInt(document.getElementById('tries').value);
        const inp = parseInt(document.getElementById('inp').value);

        if (inp === randomvalue) {
            console.log("yes");
            document.getElementById('randomnum').classList.add("show");
        }
        else {
            const tries = document.getElementById('tries');
            const trynum = parseInt(tries.textContent) + 1;
            document.getElementById('tries').innerHTML = trynum;
        }
    })

}
)