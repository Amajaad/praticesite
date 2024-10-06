let num1 = Number(prompt("Enter your first number"));
let opr = String(prompt("Enter your operator"));

let num2 = Number(prompt("Enter your second number"));
if (opr === "*") {
 alert(num1 * num2);
} else if (opr === "-") {
 alert(num1 - num2);
} else if (opr === "/") {
 alert(num1 / num2);
} else if (opr === "+") {
 alert(num1 + num2);
}
