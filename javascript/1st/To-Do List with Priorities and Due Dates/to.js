
document.getElementById('btn-add').addEventListener('click', function (event) {
  const desc = document.getElementById("desc").value;
  const due = document.getElementById("due").value;

  if (desc && due) {
    const task = document.createElement('div');
    task.classList.add('row', 'justify-content-center', 'mt-3');
    task.innerHTML = `
      <div class="text-bg-primary rounded p-3">
        <dd class="border-bottom fw-bold">${due}</dd>
        <dt class="fw-light fs-6">${desc}</dt>
        <button class="btn btn-warning mt-2 btncheck">
          <i class="bi bi-check2">awd</i>
        </button>
        <button class="btn btn-danger mt-2 btn-remove">
          <i class="bi bi-x"></i>
        </button>
      </div>
    `;

    document.querySelector('#taskbody').append(task);

    task.querySelector('.btncheck').addEventListener('click', function (event) {
      // task.querySelector('div').classList.add('bg-warning', 'text-white');
      // task.querySelector('.btn-check').classList.replace('btn-warning', 'btn-secondary');
      // document.querySelector("#combody").append(task);

      document.querySelector("#combody").append(task);
    });

    task.querySelector('.btn-remove').addEventListener('click', function () {
      task.remove();
    });
  }
});
