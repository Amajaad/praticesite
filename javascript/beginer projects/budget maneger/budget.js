const name=document.getElementById('name').value;

document.getElementById('addbudget').addEventListener('click', function (event) {
    const budget = parseFloat(document.getElementById('budget').value);
    document.getElementById('total').value = budget;
    document.querySelector('#total').innerHTML = `${budget} $`;
});
document.getElementById('addexp').addEventListener('click', function (event) {
const tr=document.createElement('tr');
const name=document.getElementById('name').value;
const price = parseFloat(document.getElementById('price').value);

tr.innerHTML=`
<td>${name}</td>
  <td>${price} $</td>
  <td><button class="btn btn-danger remove" id="remove">
    Remove
  </button></td>
`;
document.querySelector('tbody').append(tr);
const total=document.getElementById('total');
const newvalue=parseFloat(total.value) - price;
total.value=newvalue;
document.querySelector('#total').innerHTML = `${newvalue} $`;
tr.querySelector('.remove').addEventListener('click',function(event)
{
    tr.remove();
    const total=document.getElementById('total');
const returnvalue=parseFloat(total.value) + price;
total.value=returnvalue;
document.querySelector('#total').innerHTML = `${returnvalue} $`;
if(returnvalue.value<0)
{
    total.classList=("text-danger fw-bold ")
}
})
});