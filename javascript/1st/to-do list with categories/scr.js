document.getElementById("btn-add").addEventListener('click', function () {

    const desc = document.getElementById('desc').value;
    const category = document.getElementById('category').value;


    if (desc && category === "personal") {
        const task = document.createElement('div');
        task.className = "pertask taskk"

        task.innerHTML = `

  
            <div class=" text-bg-bg-dark col-12 rounded mt-2 p-3 text-white" style="background-color: 	#606969;">
            <div class="fw-bold dilval">category: ${category} <span class="float-end"><button class="btn remove"> <input type="checkbox" class="form-check-input bg-danger  check"></button></span></div>
            <div class="fw-light txt">${desc}</div>
          
               
       
            </div>
           
`

        document.querySelector('#personal').append(task);

        task.querySelector(".remove").addEventListener('click', function () {
            task.remove();

        })

    }
    else if (desc && category === "work") {
        const task = document.createElement('div');
        task.className = "worktask taskk"
        task.id = "worktask"
        task.innerHTML = `

  
            <div class="two text-white col-12 rounded mt-2 p-2" style="background-color:#696969;">
            <div class="fw-bold filval">category: ${category} <span class="float-end"><button class="btn remove"> <input type="checkbox" class="form-check-input bg-primary  check"></button></span></div>
            <div class="fw-light">${desc}</div>
         
               
       
            </div>
           
`

        document.querySelector('#work').append(task);

        task.querySelector(".remove").addEventListener('click', function () {
            task.remove();
            desc.className = "text-decoration-line-through"
        })
    }
    else if (desc && category === "shoping") {
        const task = document.createElement('div');
        task.className = "shoptask taskk"
        task.innerHTML = `

  
            <div class="three text-white col-12 rounded mt-2 p-3" style="background-color:#696969;">
            <div class="fw-bold filval">category: ${category} <span class="float-end"><button class="btn remove"> <input type="checkbox" class="form-check-input bg-warning  check"></button></span></div>
            <div class="fw-light">${desc}</div>
             
          
               
               
       
            </div>
           
`

        document.querySelector('#shoping').append(task);

        task.querySelector(".remove").addEventListener('click', function () {
            task.remove();
        })
    }


})
