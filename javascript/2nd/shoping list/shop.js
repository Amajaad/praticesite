
function add1() {
    const total = document.getElementById('total');
    const price = document.getElementById('price1').textContent;
    const item = document.createElement('tr');
    const count = document.getElementById('count');
    const newcount = parseFloat(count.textContent) + 1;
    const newval = parseFloat(total.textContent) + 30;
    total.textContent = newval;
    item.innerHTML = `
     
                      <td class="text-info col-6 text-center">item1</td>
                      <td class="col-6 text-center">
                        <span class="bg-warning px-3 rounded-pill">${price}</span>
                      </td>
                 
    `
    document.querySelector('tbody').appendChild(item);
    count.textContent = newcount;
}
function add2() {
    const total = document.getElementById('total');
    const price = document.getElementById('price2').textContent;
    const item = document.createElement('tr');
    const count = document.getElementById('count');
    const newcount = parseFloat(count.textContent) + 1;
    const newval = parseFloat(total.textContent) + 10;
    total.textContent = newval;
    item.innerHTML = `
     
                      <td class="text-info col-6 text-center">item2</td>
                      <td class="col-6 text-center">
                        <span class="bg-warning px-3 rounded-pill">${price}</span>
                      </td>
                 
    `
    document.querySelector('tbody').appendChild(item);
    count.textContent = newcount;
}
function add3() {
    const total = document.getElementById('total');
    const price =document.getElementById('price3').textContent;
    const item = document.createElement('tr');
    const count =document.getElementById('count');
    const newcount = parseFloat(count.textContent) + 1;
 const newval = parseFloat(total.textContent) + 15;
total.textContent= newval;
    item.innerHTML = `
     
                      <td class="text-info col-6 text-center">item3</td>
                      <td class="col-6 text-center">
                        <span class="bg-warning px-3 rounded-pill">${price}</span>
                      </td>
                 
    `
    document.querySelector('tbody').appendChild(item);
 count.textContent =newcount;
}
function add4() {
    const total = document.getElementById('total');
    const price =document.getElementById('price4').textContent;
    const item = document.createElement('tr');
    const count =document.getElementById('count');
    const newcount = parseFloat(count.textContent) + 1;
 const newval = parseFloat(total.textContent) + 5;
total.textContent= newval;
    item.innerHTML = `
     
                      <td class="text-info col-6 text-center">item4</td>
                      <td class="col-6 text-center">
                        <span class="bg-warning px-3 rounded-pill">${price}</span>
                      </td>
                 
    `
    document.querySelector('tbody').appendChild(item);
 count.textContent =newcount;
}
document.getElementById('cop').addEventListener('click',function(){
    const coptext= document.getElementById('coptext').value;
if(coptext==="discount")
{
    const total = document.getElementById('total');
    const discount = parseFloat(total.textContent) /2;
    total.textContent = discount;
}
});