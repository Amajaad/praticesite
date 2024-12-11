
//fonts functions
function makeBold() {
  const inputText = document.getElementById('area');
  inputText.classList.remove("text-decoration-underline");
  inputText.classList.add("fw-bold");


}

function makeitalic() {
  const inputText = document.getElementById('area');
  inputText.classList.remove("fw-bold");
  inputText.classList.remove("text-decoration-underline");
  inputText.classList.add("fst-italic");

}
function makeunder() {
  const inputText = document.getElementById('area');
  inputText.classList.remove("fst-italic");
  inputText.classList.remove("fw-bold");
  inputText.classList.add("text-decoration-underline");


}
//add a list item
document.getElementById('add-li').addEventListener('click', function () {

  const ol = document.createElement('ol');
  const li = document.createElement('li');
  ol.append(li);
  document.querySelector('#area').append(ol);



})
document.getElementById('add-uli').addEventListener('click', function () {

  const ol = document.createElement('ul');
  const li = document.createElement('li');
  ol.append(li);
  document.querySelector('#area').append(ol);



})
//add a image
document.getElementById('add-img').addEventListener('click', function () {
  const inputText = document.getElementById('area');
  const l = prompt("enter image url");
  const li = document.createElement('div');
  li.classList.add('d-block');
  li.innerHTML = `
 <div class="">
 <br>
 <img src="${l}" alt="">
 </div>
  `
  inputText.append(li);

})
//save
function savecon() {
  const inputText = document.getElementById('area');
  const content = inputText.innerHTML;
  localStorage.setItem('areacontent', content);
}
function downloadcontent() {
  const inputText = document.getElementById('content');
  const content = inputText.innerHTML;
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'download.html';
  document.body.appendChild(link); // Append the link to the body
  link.click();
  document.body.removeChild(link); // Remove the link after clicking
  URL.revokeObjectURL(url); // Corrected method name
}
