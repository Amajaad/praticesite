// Task: Declare the following variables in Java and print their values:

//tell time
let year = 2024;
let month = 6;
let timestamp = 1622810248;
const time = `the current year is ${year} and it,s the ${month}th month and the time stamp is ${timestamp}`;
console.log(time);

//weather
let temperature = "25f";
let issunny = true;
console.log(`is the weather sunny ? ${issunny}`);
console.log(`what is the temperature ? it,s ${temperature}`);
//values
let initial = "C";
let pi = 3.14159;
const initialvalue = `what is the initial value ? the initial value is ${initial}`;
const pivalue = `what is the value of pi ? the value of pi is ${pi}`;
console.log(initialvalue);
console.log(pivalue);
//Task 1: Grade Calculation Based on Marks
let Grade = 50;
let failinggrade = "you failed";
let passinggrade = "you pass";
if (Grade > 50) {
  console.log(passinggrade);
} else if (Grade < 49) {
  console.log(failinggrade);
} else if ((Grade = 50)) {
  console.log("you barley pass");
}
//task2: find the largest number of three
let num1 = 5;
let num2 = 1;
let num3 = 4;
console.log("the biggest number is " + Math.max(num1, num2, num3));
//Task 3: Check if a Number is Positive, Negative, or Zero
let v1 = 1;
let v2 = -1;
let v3 = 0;
if (v1 > 0) {
  console.log(` ${v1} is a postive number `);
} else v2 < 0;
{
  console.log(`${v2} is a negative number`);
}
if (v3 == 0) {
  console.log(`${v3} has no value`);
}
//Task 4: Determine the Season Based on Month
let Season = 1;
if (Season < 4) {
  console.log("the sesaon is winter");
} else if (Season < 7) {
  console.log("the season is summer");
} else if (Season < 10) {
  console.log("the season is spring");
} else if (Season < 13) {
  console.log("the season is fall");
}
