
const desc = document.getElementById('desc');
const amountInput = document.getElementById('amountInput');
const categoryInput = document.getElementById('categoryInput');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totaltableofdet = document.getElementById('totalExpenses');
const filterCategory = document.getElementById('filterCategory');

let tableofdet = [];

addExpenseBtn.addEventListener('click', () => {
    const description = desc.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (description && amount && category) {
        tableofdet.push({ description, amount, category });
        rendertableofdet();
        calculateTotaltableofdet();
        desc.value = '';
        amountInput.value = '';
        categoryInput.value = 'Food';

    }
});
filterCategory.addEventListener('change', rendertableofdet);
function rendertableofdet() {
    const filter = filterCategory.value;
    const filtertableupdate = filter === 'All' ? tableofdet : tableofdet.filter(expense => expense.category === filter);
    expenseList.innerHTML = '';
    filtertableupdate.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${expense.description} - $${expense.amount} - ${expense.category}</span><button onclick="removeExpense(${index})">remove</button>`;
        expenseList.appendChild(li);

    });

}
function calculateTotaltableofdet() {
    const total = tableofdet.reduce((sum, expense) => sum + expense.amount, 0);
    totaltableofdet.textContent = `total tableofdet $${total.toFixed(2)}`;
}
function removeExpense(index) {
    tableofdet.splice(index, 1);
    rendertableofdet();
    calculateTotaltableofdet();

}
rendertableofdet();