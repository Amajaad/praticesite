
document.getElementById('confirm').addEventListener('click', function () {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    let name = "amjad"
    let word = "1234"
    if (user == name && password == word) {
        result.innerHTML=""
 
  result.innerHTML=`
         <h5 class="text-warning">you did log in succesfully</h5>
  `
 

    }
    else 
    {
       
        result.innerHTML=`
         <h5 class="text-danger">invalid credentials</h5>
        `;
      
    }
})