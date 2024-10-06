//1-Task: Create two variables, myAge and myFriendAge,
// and assign them your age and your friend's age, respectively. Log both variables to the console.
let myAge = 20;
let myFriendAge = 21;
let ourage=`my age is ${myAge} and my freind age is ${myFriendAge}`;
console.log(ourage);
//2-Task: Declare a variable city without assigning it a value,
// then later assign it the name of your favorite city. Log the variable before and after assigning the value.
let city;
city = "istanbul";
let favcity=`my favorite city is ${city}`;
console.log(favcity);
//3-Task: Declare a variable using var, let, and const. Try to reassign values to each and note the behavior.
var astring0="5 is bigger than five";
astring0 = "5 is bigger than seven";
let astring ="5 is bigger than five";
astring="5 is bigger than seven";
const astring2 = "5 is bigger than five";
// astring2 = "5 is bigger than seven";
console.log(astring0 + " (a var can be changed)");
console.log(astring + " (a let can be changed)");
console.log(astring2 + " (a const can't be changed)");
//4-Task: Use arithmetic operators to calculate the area of a rectangle
// with width 5 and height 8. Store the result in a variable and log it.
let rectanglewidth=5;
let rectangleHeight=8;
let rectanglearea=rectangleHeight * rectanglewidth ;
console.log("the area of the rectengle is " + rectanglearea);
//5-Task: Use the increment operator to increase a variable counter by 1 and log the result.
let incopreator= 7;
incopreator ++;
console.log(incopreator);
//6-Task: Create a template literal that includes a variable name and a greeting message.
let greeting="hello how are you";
let greetedname = " ahmad";
console.log(greeting +  greetedname);
//7-Task: Concatenate two strings using both the + operator and a template literal.
let emploeyename ="ahmad";
let emploeyejob="software engineering";
let employeintrodaction=`my name is ${emploeyename}`;
let employequalifacation=` and my job is ${emploeyejob}`;
console.log(employeintrodaction + employequalifacation);

//8-Task: Write an if/else statement that logs a message based on whether a variable isMember is true or false.
let isMember = true;
if (isMember)
    {
        console.log("you are a member");
    }
    else
    {
        console.log("you are not a member");
    }
//10-Task: Compare two variables using == and ===, and log the results. Explain the difference in comments.
let variable ="change";
//when using === the varible must be the same type and the same value
if (variable === "change")
  {
    console.log("valid");
  }
//when using === the varible dosen't have to be the same type it just needs to hold the same value
  else if (variable == "change")
    {
      console.log("not valid");
    }
//11-Task: Write an expression using Boolean operators that evaluates to true only if two variables are both true.
let bool1=true;
let bool2=true;
if(bool1 && bool2)
  {
    console.log("both condations are true");
  }
else 
{
  console.log("the condation is false");
}
//12-Task: Prompt the user for their age and log a message based on whether they are a minor or an adult.
let userage = Number(prompt("enter your age"));
if (userage > 18)
{
  console.log("your age is above 18");
}
else if (userage < 18)
  {
    console.log("you are a minor");
  }
//13-Task: Use the logical OR operator to provide a default value if a variable is falsy.
let bool3 = false;
let bool4 = false;
if (bool3 || bool4)
{
  console.log("one of the condations is true");
}
else
{
  console.log("both of the condations are false");
}

//14-Task: Write a switch statement that logs a different message for different days of the week.
let currentday="friday";
if (currentday === "sunday")
  {
    console.log("today is sunday");
  }
else if (currentday === "monday")
{
  console.log("today is monday")
}
else if (currentday === "tuesday")
  {
    console.log("today is tuesday")
  }
else if (currentday === "wednesday")
  {
    console.log("today is wednesday")
  }
else if (currentday === "thursday")
  {
    console.log("today is thursday")
  }
else if (currentday === "friday")
  {
    console.log("today is friday")
  }
else if (currentday === "saturday")
  {
    console.log("today is saturday");
  }
  //15-Task: Use the conditional (ternary) operator to log a message based on a variable's value.
  let Boolean1=true;
  let boolean2=false;
  if (Boolean1 && boolean2)
    {
      console.log("both values are true");
    }
    else if (!Boolean1 && !boolean2 )
      {
        console.log ("both values are false");
      }
      else if (Boolean1 || boolean2)
        {
          console.log("one of the values is true");
        }
//15-Task: Use the conditional (ternary) operator to log a message based on a variable's value.
let isconnected=false;
if (isconnected)
  {
    console.log("online");
  }
  else 
  {
    console.log("offline");
  }
//task-16:calc
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
