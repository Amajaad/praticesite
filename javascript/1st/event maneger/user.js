//note input data 
const note = document.getElementById("note");
//event input data from
const title = document.getElementById("title");
const desc = document.getElementById("desc");
//task input data from
const task = document.getElementById("task");
//buttons
const addnote = document.getElementById("addnote");
const addevent = document.getElementById("addevent");
const addtask = document.getElementById("addtask");
//target
const notes = document.getElementById("notes");
const events = document.getElementById("events");
const tasks = document.getElementById("tasks");
const removenotes = document.getElementById("removenotes");
addnote.addEventListener('click', function (event) {
    const tr1 = document.createElement('tr');
    const p1 = document.createElement('p');

    p1.innerHTML = "Note: "
 
    p1.className = "text-bg-success rounded p-3 fw-semibold";
    tr1.append(p1);
    p1.innerHTML = document.getElementById("note").value;
    document.querySelector("#notes").append(tr1);
});
addevent.addEventListener('click', function (event) {
    const tr2 = document.createElement('tr');
    const detail = document.createElement('details');
    const summary = document.createElement('summary');
    const p2 = document.createElement('p');
    detail.append(summary, p2);
    detail.className = "card text-bg-secondary fs-4 col-md-12 p-2 fw-semibold"
    summary.innerHTML = "event: "
    p2.className = "text-bg-danger-subtle rounded p-3 fs-6 fw-semibold";
    tr2.append(detail);
    summary.innerHTML += document.getElementById("title").value;
    p2.innerHTML = document.getElementById("desc").value;
    document.querySelector("#events").append(tr2);
});
addtask.addEventListener('click', function (event) {
    const tr3 = document.createElement('tr');
    const p3 = document.createElement('p');
    p3.innerHTML = "task: "
    p3.className = "text-bg-dark rounded p-3 fs-6 fw-semibold col-md-12";
    tr3.append(p3);
    p3.innerHTML += document.getElementById("task").value;

    document.querySelector("#tasks").append(tr3);
});
removenotes.addEventListener('click', function (event) {
    document.getElementById('anote');
    anote.className = "bg-dark d-none";
    anote.innerHTML = null;

}
);