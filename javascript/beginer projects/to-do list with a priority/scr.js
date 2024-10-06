document.getElementById("btn-add").addEventListener('click', function () {
    const modal = document.getElementById('modal');
    const desc = document.getElementById('desc').value;
    const priority = document.getElementById('priority').value;
    if (desc && priority==="High") {
        const task = document.createElement('div');
task.className="tas"
        task.innerHTML = `

  
            <div class=" text-bg-primary col-12 rounded mt-2 p-3">
            <div class="fw-bold ">Priority: ${priority} <span class="float-end"><button class="btn remove"> <input type="checkbox" class="form-check-input bg-warning  check"></button></span></div>
            <div class="fw-light txt">${desc}</div>
          
               
       
            </div>
           
`

        document.querySelector('#high').append(task);
        console.log(task)
        task.querySelector(".remove").addEventListener('click',function()
        {
       task.remove();
     document.querySelector('.txt').classList=("text-decoration-line-through")
        })
    }
    else if (desc && priority==="Medium") {
        const task = document.createElement('div');
task.id="tas"
        task.innerHTML = `

  
            <div class=" text-bg-primary col-12 rounded mt-2 p-3">
            <div class="fw-bold ">Priority: ${priority} <span class="float-end"><button class="btn remove"> <input type="checkbox" class="form-check-input bg-warning  check"></button></span></div>
            <div class="fw-light">${desc}</div>
         
               
       
            </div>
           
`

        document.querySelector('#med').append(task);
        console.log(task);
        task.querySelector(".remove").addEventListener('click',function()
        {
       task.remove();
       desc.className="text-decoration-line-through"
        })
    }
    else if (desc && priority==="Low") {
        const task = document.createElement('div');
task.id="tas"
        task.innerHTML = `

  
            <div class=" text-bg-primary col-12 rounded mt-2 p-3">
            <div class="fw-bold ">Priority: ${priority} <span class="float-end"><button class="btn remove"> <input type="checkbox" class="form-check-input bg-warning  check"></button></span></div>
            <div class="fw-light">${desc}</div>
             
          
               
               
       
            </div>
           
`

        document.querySelector('#low').append(task);
        console.log(task)
        task.querySelector(".remove").addEventListener('click',function()
        {
       task.remove();
        })
    }
  
})