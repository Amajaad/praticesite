// ### Values and Variables
// 1. Declare a variable using let and assign it a number value.
// let number=2;
// 2. Declare a constant using const and assign it a string value.
// const string="a string";
// 3. Reassign a variable declared with let.
// let number=2;
// number*=2;
// console.log(number);
// 4. Try to reassign a constant and observe the error.
// const number=2;
// number*=2;
// console.log(number);
// ### Data Types
// 5. Create variables of different data types: string, number, boolean, null, undefined, object, and array.
// let vari=["string",2,true,null,undefined,Object,[1,2,3]];
// vari.flat(2);
// console.log(vari);
// 6. Use typeof to log the data type of each variable.
// let vari=["string",2,true,null,undefined,Object,[1,2,3]];

// for(let i in vari)
// {
//     vari.flat(2);
//     console.log(typeof(vari[i]));
// }

// 7. Convert a number to a string and log the result.
// let num =2;
// num ="two";
// console.log(num);
// 8. Convert a string to a number and log the result.
// let string = "two";
// string=2;
// console.log(string);
// 9. Create an object with different data types as properties.
// let object={
//      name :"ahmad",
//      age:23,
//     graduite:"web dev",
//     experice:false,

// }
// console.log(object);
// ### let, const and var
// 10. Declare a variable with var inside a function and log it outside the function.
// function varible()
// {
// var inside="inner";
// return inside;
// }
// console.log(varible());
// 11. Declare a variable with let inside a block and log it outside the block.
// function varible()
// {
// let inside="inner";
// return inside;
// }
// console.log(varible());
// 12. Declare a variable with const and attempt to change its value.

// 13. Declare multiple variables in a single statement using let.
// let  a,b,c;
// a=1;
// b=2;
// c=3;
// console.log(a,b,c);
// 14. Use const for an array and push a new element to the array.
// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// ### Basic Operators
// 15. Perform addition, subtraction, multiplication, and division operations on two numbers.
// function operations(a,b)
// {
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a%b);

// }
// operations(14,3);
// 16. Use the modulus operator to find the remainder of a division.
// let num1=4;
// let num2=5;
// console.log(num1%num2);
// 17. Use the increment operator to increase a variable's value by 1.
// let num=10;
// num++;
// console.log(num);
// 18. Use the decrement operator to decrease a variable's value by 1.
// let num=10;
// num--;
// console.log(num);
// 19. Perform compound assignment (+=, -=, *=, /=) on variables.
//     function operations(a)
// {
//     console.log(a+=4);
//     console.log(a-=4);
//     console.log(a*=4);
//     console.log(a/=5);

// }
// operations(10);
// ### Strings and Template Literals
// 20. Create a string using single quotes, double quotes, and backticks.
// // 21. Use template literals to embed variables in a string.
// let greet = "hello";
// let name="amjad";
// let job="web dev";
// let template=`${greet} my name is ${name} and my job is ${job}`;
// console.log(template);
// 22. Concatenate two strings using the + operator.
// 21. Use template literals to embed variables in a string.
// let greet = "hello";
// let name="amjad";
// let job="web dev";

// console.log(greet +" my name is " + name +" and my job is " +job);
// 23. Find the length of a string using the .length property.
// let greet = "hello";
// let name="amjad";
// let job="web dev";
// let template=`${greet} my name is ${name} and my job is ${job}`;
// console.log(template.length);
// 24. Extract a substring using the substring method.
// let substring ="heat";
// console.log(substring.substring(1));
// ### if else Statements
// 25. Write an if statement that logs a message if a variable is greater than 10.
// let value=11;
// if(value>10)
// {
//     console.log("meassage!");
// }
// 26. Write an else statement that logs a different message if the variable is not greater than 10.
// let value=1;
// if(value>10)
// {
//     console.log("meassage!");
// }
// else
// {
//     console.log("no message?");
// }
// 27. Write an if-else statement to check if a number is even or odd.
// let num=1;
// if(num%2==0)
// {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// 28. Write an if-else statement to check if a string is empty.
// let str="";
// if(str.length<=0)
// {
//     console.log ("its empty")
// }
// 29. Write an if-else statement to check if a number is positive, negative, or zero.
// let numb=-4;
// if (numb>0)
// {
//     console.log("this number is postive");
// }
// else if(numb==0)
// {
//     console.log("this is a zero")
// }
// else if(numb<0)
//     {
//         console.log("this is a negative number")
//     }
// ### Multi if else Statements
// 30. Write a multi if-else statement to check the range of a number (e.g., 0-10, 11-20, etc.).
// let num =12;
// if(num=0 || num<=10)
// {
//     console.log("this number range is from 0 to 10");
// }
// else if(num>10 || num<=20)
//     {
//         console.log("this number range is from 11 to 20");
//     }
// 31. Write a multi if-else statement to determine the grade based on a score.
// let grade=90;
// if (grade<=49)
// {
//     console.log("you didn't pass");
// }
// else if (grade ==50 || grade<80)
// {
//     console.log("you barley passed");
// }
// else if (grade ==80 || grade<=100)
//     {
//         console.log("you passed with a good grade");
//     }
// 32. Write a multi if-else statement to categorize the time of day (morning, afternoon, evening).
// let time=18;
// if(time==5 || time<13)
// {
//     console.log("its morning");
// }
// else if(time==18 || time<21)
// {
//     console.log("its evening");
// }
// else if(time==13 || time<=17)
//     {
//         console.log("its afternoon");
//     }
// 33. Write a multi if-else statement to check the age category (child, teenager, adult, senior).
// let age=18;
// if (age ==1 || age<13)
// {
//     console.log("you are a child");
// }
// else if (age ==13 || age<19)
//     {
//         console.log("you are a teenager");
//     }
//     else if (age ==19 || age<65)
//         {
//             console.log("you are a adult");
//         }
//         else if (age >=65)
//             {
//                 console.log("you are a senior");
//             }
// 34. Write a multi if-else statement to check the size of a t-shirt (small, medium, large).
// let size="lg";
// if (size =="sm")
// {
//     console.log("small");
// }
// else if (size=="md")
//     {
//         console.log("medium");
//     }
//     else if (size =="lg")
//         {
//             console.log("large");
//         }

// ### Type Conversion
// 35. Convert a boolean to a string and log the result.
// let bool ="true";

// console.log(bool);
// 36. Convert a string to a boolean and log the result.

// 37. Convert a number to a boolean and log the result.
// 38. Use parseInt to convert a string to an integer.

// console.log(parseInt("2"));
// 39. Use parseFloat to convert a string to a floating-point number.
// console.log(parseFloat("2"));
// ### Truthy and Falsy Values
// 40. Write a function that logs whether a given value is truthy or falsy.
// let bool=true;
//     console.log(bool);
// 41. List all the falsy values in JavaScript.
// 42. Use an if statement to check a truthy value.
// let bool=0;
// if(bool==true)
// {
//     console.log(true);
// }
// else if(bool==false)
// {
// console.log(false);
// }
// 43. Use a ternary operator to check a falsy value.
// let bool=true
// let result=
// bool==true?"true":"false"
// console.log(result)
// 44. Create a variable with a falsy value and change it to a truthy value.
// let bool=false;
// bool=true;
// console.log(bool);
// ### Equality Operators == vs === and prompt function
// 45. Compare two variables using == and === and log the results.
// let a=1;
// if (a==="1")
// {
//     console.log(true);
// }
// else if(a==1)
// {
//     console.log(false);
// }

// 46. Use prompt to take user input and compare it with a predefined value using ==.
// let value=10;
// let apromt = Number(prompt("enter your number"))
// if(apromt==value)
// {
//     console.log("this number is equal to the value");
// }
// else if (apromt<value)
// {
//     console.log("this number is smaller than the value");
// }
// else if(apromt>value)
// {
//     console.log("this number is greater than the value");
// }
// 47. Use prompt to take user input and compare it with a predefined value using ===.
// let value=10;
// let apromt = Number(prompt("enter your number"))
// if(apromt===value)
// {
//     console.log("this number is equal to the value");
// }
// else if(apromt < value)
// {
//     console.log("this number is smaller than the value");
// }
// else if (apromt > value)
// {
//     console.log("this number is greater than the value");
// }
// 48. Explain the difference between == and === in a comment.
//"==" is asking for the same value
//"===" is asking for the same value and type
// 49. Use == to compare two different data types and log the result.

// ### Logical Operators
// 50. Use && to combine two boolean expressions and log the result.
// let a=true;
// let b=true;
// if(a && b)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }
// 51. Use || to combine two boolean expressions and log the result.
// let a=false;
// let b=false;
// if(a || b)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }
// 52. Use ! to invert a boolean value and log the result.
// let a=true;
// let b=true;
// if(!a && !b)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }
// 53. Combine && and || in a single expression and log the result.
// let a=true;
// let b=false;
// if(a && b)
// {
//     console.log("both coondations are true");
// }
// else if(a || b)
// {
//     console.log("one of the condations is false");
// }

// 54. Write a function that takes two boolean values and returns their logical AND.
// function condation (bool1,bool2)
// {
//     if (bool1 && bool2)
//     {
//         return("both condations are true");
//     }
//     else
//     {
//         return("one or both condations are false");
//     }
//     return;
// }
// console.log(condation(true,false));

// ### The switch Statement
// 55. Write a switch statement to check the value of a variable and log different messages.
// let value = "6";
// switch (value) {
//   case "1":
//   case "2":
//   case "3":
//   case "4":
//     console.log("this number is smaller than five");
//    break;
//   case "5":
//   case "6":
//   case "7":
//     console.log("this number is greater than five");
//     break;
//   default:
//   case "5":
//     console.log("this number is five");
// }
// 56. Use switch to categorize a number into different ranges.
// let num = 10;

// switch (num) {
//   case 1:
//     console.log("this number range is 0-10");
//     break;
//   case 2:
//     console.log("this number range is 0-10");
//     break;
//   case 3:
//     console.log("this number range is 0-10");
//     break;
//   case 4:
//     console.log("this number range is 0-10");
//     break;
//   case 5:
//     console.log("this number range is 0-10");
//     break;
//   case 6:
//     console.log("this number range is 0-10");
//     break;
//   case 7:
//     console.log("this number range is 0-10");
//     break;
//   case 8:
//     console.log("this number range is 0-10");
//     break;
//   case 9:
//     console.log("this number range is 0-10");
//     break;
//     case 10:
//         console.log("this number range is greater 0-9");
//         break;
// }
// 57. Use switch to check the day of the week based on a number.
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("we are in monday");
//     break;
//   case 2:
//     console.log("we are in tuesday");
//     break;
//   case 3:
//     console.log("we are in wednesday");
//     break;
//   case 4:
//     console.log("we are in thrusday");
//     break;
//   case 5:
//     console.log("we are in friday");
//     break;
//   case 6:
//     console.log("we are in saturday");
//     break;
//   case 7:
//     console.log("we are in ");
//     break;
// }
// 58. Write a switch statement with a default case.
// let num =0;
// switch(num)
// {
//     case 1:
//     case 2:
//     case 3:
//         console.log("this number is greater than 0");
//         break;
//        default:
//         console.log("please enter a number")
// }
// 59. Use switch to log the name of a month based on its number.
// let month = 3;
// switch (month) {
//   case 1:
//     console.log("we are in january");
//     break;
//   case 2:
//     console.log("we are in february");
//     break;
//   case 3:
//     console.log("we are in march");
//     break;
//   case 4:
//     console.log("we are in april");
//     break;
//   case 5:
//     console.log("we are in may");
//     break;
//   case 6:
//     console.log("we are in june");
//     break;
//   case 7:
//     console.log("we are in july");
//     break;
//     case 8:
//     console.log("we are in august");
//     break;
//     case 9:
//     console.log("we are in september");
//     break;
//     case 10:
//     console.log("we are in october");
//     break;
//     case 11:
//     console.log("we are in november");
//     break;
//     case 12:
//     console.log("we are in december");
//     break;
// }
// ### The Conditional Ternary Operator
// // 60. Use the ternary operator to check if a number is positive.
// let num=-1;
// let message=(num>0)? 'postive' : 'negative';

// console.log(message);

// 61. Use the ternary operator to check if a string is empty.
// let message="";
// let result=(message.length<=0)?'this string is empty':`this message has ${message.length} letters`;
// console.log(result);
// 62. Use the ternary operator to assign a value based on a condition.

// 63. Use nested ternary operators to check multiple conditions.
// 64. Write a function that returns "yes" or "no" based on a boolean value using the ternary operator.
// let bool=true
// let result=
// bool==true?"true":"false"
// console.log(result);
// ### Functions
// 65. Write a function that takes two numbers and returns their sum.
// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(1,3);
// 66. Write a function that takes a string and returns it in uppercase.
// function upper(string)
// {
//     let up=string.toUpperCase();
// console.log(up);
// }
// upper("milk");
// 67. Write a function that takes an array and returns its length.7
// function arrlength(arr)
// {
//     let len=arr.length;
//     console.log(len);
// }
// arrlength([1,2,3]);
// 68. Write a function that takes a number and returns its square.
// function squared(num)
// {
//     let square=num*num;
//     console.log(square);
// }
// squared(12);
// 69. Write a function that takes no arguments and logs a message.
// function noargs()
// {
// let meassage="apple";
// return meassage;
// }
// console.log(noargs());
// ### Function Declarations vs Expressions
// 70. Declare a function using a function declaration.
// let func = function() {

// }
// 71. Declare a function using a function expression.
// function func()
// {}
// 72. Compare the behavior of function declarations and expressions.
// 73. Use a function expression to create an anonymous function.
// let anonymous = function(a,b)
// {
//     return a+b;
// }
// console.log(anonymous());
// 74. Use a function declaration to create a named function.
// function anonymous (a,b)
// {
//     return a+b;

// }
// anonymous(1,2);
// ### Arrow Functions
// 75. Write a function using the arrow function syntax.
// 76. Convert a regular function to an arrow function.
// 77. Use an arrow function with no arguments.
// 78. Use an arrow function with a single argument.
// 79. Use an arrow function with multiple arguments.

// ### Functions Calling Other Functions
// 80. Write a function that calls another function inside it.
// function outside()
// {
//     function inside()
//     {
// console.log("inside");
//     }
//  return inside();
// }
// outside();
// 81. Write a function that takes a function as an argument and calls it.
// function outside(inside)
// {
//   inside = function ()
//   {
//     console.log("inside");
//   }
//     return inside();
// }
// outside();
// 82. Write a function that returns another function.
// 83. Write a function that calls itself (recursion).
// 84. Use a higher-order function to process an array.

// ### Reviewing Functions
// 85. Review and rewrite a function to improve its performance.

// 86. Review and rewrite a function to improve its readability.
// 87. Review and add comments to a function explaining its purpose.
// 88. Refactor a function to use a different approach or algorithm.
// 89. Write a test function to check the correctness of another function.

// ### Introduction to Arrays
// 90. Create an array with different data types as elements.
// let arr = [1,"1",1.00,true];
// console.log(arr);
// 91. Access the first and last elements of an array.
// let arr=[1,2,3,4];
// console.log(arr[0],arr[3])
// 92. Add a new element to the end of an array.
// let arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);
// 93. Remove the first element of an array.
// let arr=[1,2,3,4];
// arr.shift();
// console.log(arr);
// 94. Find the length of an array.
// let arr=[1,2,3,4];

// console.log(arr.length);
// ### Basic Array Operations
// 95. Use push to add elements to an array.
// let arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);
// 96. Use pop to remove the last element from an array.
// let arr=[1,2,3,4];
// arr.pop();
// console.log(arr);
// 97. Use shift to remove the first element from an array.
// let arr=[1,2,3,4];
// arr.shift();
// console.log(arr);
// 98. Use unshift to add elements to the beginning of an array.
// let arr=[1,2,3,4];
// arr.unshift(0);
// console.log(arr);
// 99. Use indexOf to find the index of an element in an array.
// let arr=[1,2,3,4];
// console.log(arr.indexOf(4));
// 100. Use includes to check if an array contains a specific element.
// let arr=[1,2,3,4];

// console.log(arr.includes(0));

// ### Introduction to Objects
// 101. Create an object with different properties.
// const obj={
//     name:'Anthony',
//     age:'20',
// }

// 102. Access an object's property using dot notation.
// const obj={
//         name:'Anthony',
//         age:'20',
//     }
//     console.log("my name is " + obj.name + " my and age is " + obj.age);
// 103. Access an object's property using bracket notation.
// const obj ={
//     name:"tom",
//     age:24,
// }
// obj["age"]=100
// console.log(obj);
// 104. Add a new property to an object.
// const obj ={
//     name:"tom",
//     age:24,
// }
// obj["job"]="web developer"
// console.log(obj);
// 105. Delete a property from an object.
// const obj ={
//     name:"tom",
//     age:24,
// }
// delete obj.age
// console.log(obj);
// ### For loop
// 106. Write a for loop to iterate over an array and log each element.
// let arr = [1,2,3];
// for(let i in arr)
// {
//     console.log(i);
// }
// 107. Write a for loop to iterate from 1 to 10 and log each number.

// for (let i = 0; i <= 10; i++) {

//     console.log(i);
// }
// 108. Write a for loop to iterate over an object's properties.
// const obj=
// {
//     name:"alex",
//     age:15,
//     city:"istanbul",
// }
// for (let i in obj)
// {
//     console.log(obj[i]);
// }
// 109. Use a for loop to find the sum of numbers in an array.
// function getsum(arr,sum)
// {
// for(let i=0; i<arr.length; i++)
// {

//     sum +=arr[i];

// }
// console.log(sum);
// }
// getsum([1,2,3],0);
// 110. Use a for loop to create a new array with squared numbers.
// let arr =[1,2,3];
// for(let i in arr)
// {
//     console.log(arr[i]**2);
// }

// ### While loop
// 111. Write a while loop to log numbers from 1 to 10.
// let num=1;
// while(num<=10)
// {
// console.log(num++);
// }
// 112. Write a while loop to iterate over an array until a condition is met.
// for (let i = 1; i <= 10; i++) {

//     while(i>3){
//     console.log(true);
//     break;
//     }
// }

// 113. Use a while loop to find the maximum number in an array.

// 114. Use a while loop to log each character of a string.

// 115. Write a while loop to count down from 10 to 1.
// for (let i = 10; i >= 1; i--) {

//     console.log(i);
// }
// ### Do while loop
// 116. Write a do-while loop to log numbers from 1 to 10.
// let i =1;
// do
// {
// console.log(i++);
// }
// while(i<=10)
// 117. Write a do-while loop to iterate over an array until a condition is met.
// let arr=[1,2,3,4,5,6,7]
// for(let i in arr)
// {
// do{
//     console.log(true);
//     continue;
// }
// while(arr[i]>=8)
// }
// 118. Use a do-while loop to find the minimum number in an array.
// let  arr=[1,2,3,4,5,1]
// for(let i=0; i<=arr.length; i++)
// {
//     do 
//     {
//         console.log(arr[i]);
//  break;
//     }
//     while(!arr[i]>Math.min(arr[i]) || !arr[i]<Math.min(arr[i]));
//     break;
// }
// 119. Use a do-while loop to log each character of a string.
// let str="bodycam";
// for(let i in str)
// {
//    do{
//     console.log(str[i]);
//    }
//    while(str[i]<str.length)
// }
// 120. Write a do-while loop to count up from 1 to 10.
// let num=1;
// do
// {
//     console.log(num++);
// }
// while(num<=10)
// ### For in loop
// 121. Write a for-in loop to iterate over an object's properties.
// const obj=
// {
//     city:"istanbul",
//     street:"ex st.",

// }
// for(let prop in obj)
// {
//     console.log(prop);
// }
// 122. Use a for-in loop to log the keys of an object.
// const obj=
// {
//     city:"istanbul",
//     street:"ex st.",

// }
// for(let prop in obj)
// {
//     console.log(obj[prop]);
// }
// 123. Use a for-in loop to log the values of an object.

// 124. Write a for-in loop to find a property in an object.
// const obj=
// {
//     city:"istanbul",
//     street:"ex st.",

// }
// for(let prop in obj)
// {
//     console.log(obj.city);
// }
// 125. Write a for-in loop to count the number of properties in an object.
// const obj={
//     name:"amjad",
//     city:"istanbul",
//     country:"turkey",
// }
// for(let prop in obj)
// {
//     let count=obj.length;
//     console.log(obj.length);
// }
// ### For of loop
// 126. Write a for-of loop to iterate over an array and log each element.
// let arr =[1,2,3,4]
// for(let i of arr)
// {
//     console.log(i);
// }
// 127. Use a for-of loop to find the sum of numbers in an array.
// function ofsum(arr,sum)
// {
//     for(let i of arr)
//     {
//         i<=arr.length;

//         sum += i;

//     }
//      console.log(sum);
// }
// ofsum([1,2,3,4,1],0)
// 128. Use a for-of loop to log each character of a string.
// let str="body"
// for(let char of str)
// {
//     console.log(char);
// }
// 129. Write a for-of loop to create a new array with doubled numbers.
// let arr=[1,3,4,5]
//     doubled=[];
// for(let num of arr)
// {
// doubled.push(num*2)
// }
// console.log(doubled);
// 130. Write a for-of loop to find a specific element in an array.
// let arr=[1,2,3,4]
// let element=[]
// for(let i of arr)
// {
//     if(i%2 && i>2)
//     {
//     element.push(arr[i]);
//     }
// }

// for(let x in element)
// {
//     console.log(element[x]);
// }
// ### Break and continue
// 131. Use break to exit a loop when a condition is met.
// let num =1;


// do 
// {
//     console.log(num++);
//     break;
// }    
// while(num%3)


// 132. Use continue to skip an iteration when a condition is met.
// let num =0;


// do 
// {
//     console.log(num++);
//     continue;
// }    
// while(num%3==2)

// 133. Write a loop with break to find the first even number in an array.
// let num=0;
// do{
//     num++
//    console.log(num);
// }
// while(num%2)
// 134. Write a loop with continue to log all odd numbers in an array.
// let arr =[1,5,2,4,7]
// let even=[]
// for(let i=0; i<=arr.length; i++)
// {
// if(arr[i]%2)
// {
//     even.push(arr[i]);
//     console.log(even)
// }

// }
// 135. Use break in a while loop to exit early.

// ### Infinite loops
// 136. Write a function that causes an infinite loop and explain why it happens.
// let num=0;
// do{
//     console.log(num++)
// }
// while(num>0)
//it's infinte because there are infinte numbers greater than zero
// 137. Fix an infinite loop by adding a termination condition.
// let num=0;
// do{
//     console.log(num++)

// }
// while(num>0 && num<3)
// 138. Write a loop that increments a counter indefinitely and explain its behavior.

// 139. Write an infinite loop using while and true.
// let num=2
// do
// {
//     let num=0;
// do{
//     console.log(num++)
// }
// while(num>0)
// }
// while(num%2==true)

// 140. Write an infinite loop using for and a condition that never becomes false.
// let num=0
// for(let i=1; i>num; i++)
// {
//     console.log(i++)
// }
// ### Nested Loops
// 141. Write a nested for loop to log a multiplication table.
// let a=3
// let arr=[[a*1],[a*2],[a*3],[a*4],[a*5]]
// for(let i in arr)
// {
//     console.log(arr[i])
// }

// 142. Use nested loops to iterate over a 2D array.

// 143. Write a nested loop to find the transpose of a matrix.

// 144. Write a nested loop to log a pattern (e.g., a triangle of stars).

// 145. Use nested loops to flatten a 2D array into a 1D array.

// ### String Methods charAt toUpperCase toLowerCase includes startsWith endsWith
// 146. Use charAt to log the first character of a string.
// let str="milk"
// console.log(str.charAt(0))
// 147. Use toUpperCase to convert a string to uppercase.
// let str="job"
// console.log(str.toUpperCase())
// 148. Use toLowerCase to convert a string to lowercase.
// let str="BANANA"
// console.log(str.toLowerCase())
// 149. Use includes to check if a string contains a specific substring.
// let str="school"
// if(str.includes("s"))
// {
//     console.log(true)
// }
// 150. Use startsWith to check if a string starts with a specific substring.
// let str="bandana"
// if(str.startsWith("band"))
// {
//     console.log(true);
// }
// 151. Use endsWith to check if a string ends with a specific substring.
// let str="bandana"
// if(str.endsWith("ana"))
// {
//     console.log(true);
// }
// ### String Methods Search IndexOf lastIndexOf
// 152. Use search to find the position of a substring in a string.
// let str="apple"
// console.log(str.search("pple"))
// 153. Use indexOf to find the first occurrence of a substring.
// let str="apple"
// console.log(str.indexOf("le"))
// 154. Use lastIndexOf to find the last occurrence of a substring.
// let str="banana"
// console.log(str.lastIndexOf("a"))
// 155. Use indexOf to find a character in a string.
// 156. Use lastIndexOf to find a character in a string from the end.

// ### String Methods toString, Concat, split
// 157. Use toString to convert a number to a string.
// let num=0;
// let str=num.toString()
// console.log(str)
// 158. Use concat to concatenate two strings.
// let str1="cat"
// let str2="dog"
// console.log(str1.concat(str2))
// 159. Use split to split a string into an array of substrings.
// let str="upaside"
// let spl=str.split("");
// console.log(spl)
// 160. Use concat to join multiple strings.
// let n1="up"
// let n2="side"
// let n3="down"
// console.log(n1.concat(n2 , n3))
// 161. Use split to split a string by spaces.
// let str="house"
// console.log(str.split(" "))
// ### String Methods slice, subStr, subString
// 162. Use slice to extract a part of a string.
// let str="apple"
// console.log(str.slice(0,3))
// 163. Use substr to extract a part of a string with a specific length.
// let str="panda"
// console.log(str.substring(1,4))
// 164. Use substring to extract a part of a string between two indices.

// 165. Compare the behavior of slice, substr, and substring.
// let str="app"
// console.log(str.slice(str.length-1));
// console.log(str.substr(1,3));
// console.log(str.substring(1,2));
// 166. Use slice to extract the last 3 characters of a string.
// let str="apples"
// console.log(str.slice(str.length-3));
// ### Escape Sequences
// 167. Use \n to add a newline in a string.
// let str="power \n fuel"
// console.log(str);
// 168. Use \t to add a tab in a string.
// let str="power \t fuel"
// console.log(str);
// 169. Use \\ to add a backslash in a string.
// let str="power \\ fuel"
// console.log(str);
// 170. Use \' to add a single quote in a string.
// let str="power \' fuel"
// console.log(str);
// 171. Use \" to add a double quote in a string.
// let str="power \" fuel \""
// console.log(str);
// ### Object Basics with Dot Bracket Notation
// 172. Access an object's property using dot notation.
// let obj={
// name:"john",
// country:"germany",
// }
// console.log(obj.name);
// 173. Access an object's property using bracket notation.
// let obj={
//     name:"john",
//     country:"germany",
//     }
//     let cou=obj["country"]
//     console.log(cou);
// 174. Add a new property to an object using dot notation.
// let obj={
//     name:"john",
//     country:"germany",
//     }
//     obj.car="bmw"
//     console.log(obj.car);
// 175. Add a new property to an object using bracket notation.
// let obj={
//     name:"john",
//     country:"germany",
//     }
//     obj["age"]=20
//     console.log(obj.age);
// 176. Delete a property from an object using dot notation.
// let obj={
//     name:"john",
//     country:"germany",
//     }
//     delete(obj["name"]);
//     console.log(obj);
// ### Adding, Modifying Deleting Properties
// 177. Add a new property to an object.

// 178. Modify an existing property of an object.
// let obj={
//     name:"john",
//     country:"germany",
//     age:20,
//     }
//     obj.age +=12
//     console.log(obj.age);
// 179. Delete a property from an object.
// 180. Check if a property exists in an object using in.
// let obj={
//     name:"john",
//     country:"germany",
//     }
//     console.log(`name` in obj);
// 181. Use Object.keys to list all the properties of an object.
// let obj={
//     name:"john",
//     country:"germany",
//     }
//     console.log(Object.keys(obj));
// ### Object Methods This Keyword
// 182. Create an object with a method that uses this to access its properties.
// let obj={
//     name:"john",
//     country:"germany",
//      sentence: function()
//      {
//         console.log(`hello my name is ${this.name} and i come from ${this.country}`)
// }
//     }
//     console.log(obj.sentence());
// 183. Use this in a method to call another method of the same object.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,
//      calcage: function()
//      {
//        console.log(2024-this.birthyear

//        )
// }
//     }
//     console.log(obj.calcage());
// 184. Use this in a method to return a formatted string with object properties.
// let obj={
//     name:"john",
//     country:"germany",
//     age:20,
//      types: function()
//      {
//         console.log(typeof(this.country),typeof(this.name),typeof(this.age))
// }
//     }
//     console.log(obj.types());
// 185. Explain the behavior of this in a comment.

// 186. Write a function that loses the context of this and explain why.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,
//      calcage: function()
//      {
//        console.log(2024-this.birthyear

//        )
// }
//     }
//     console.log(this.calcage());
//the (this.) method is calling the property outside the object

// ### Traversing Object Entries
// 187. Use for-in to iterate over an object's properties.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,
//      calcage: function()
//      {
//        console.log(2024-this.birthyear

//        )
// }
//     }
// for(let prop in obj)
// {
//     console.log(prop);
// }
// 188. Use Object.keys to iterate over an object's keys.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,
//      calcage: function()
//      {
//        console.log(2024-this.birthyear

//        )
// }
//     }
//     console.log(Object.keys(obj));
// 189. Use Object.values to iterate over an object's values.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,
//      calcage: function()
//      {
//        console.log(2024-this.birthyear

//        )
// }
//     }
//     console.log(Object.values(obj));
// 190. Use Object.entries to iterate over an object's key-value pairs.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,
//      calcage: function()
//      {
//        console.log(2024-this.birthyear

//        )
// }
//     }
//     console.log(Object.entries(obj));
// 191. Write a function that logs each key-value pair of an object.
// function keylog(obj)
// {
//     obj={
//         name:"alaa",
//         country:"turkey",
//         city:"istanbul",
//         age:20,

//     }
//     for(let i in obj)
//     {
//         console.log(Object.keys(obj),Object.values(obj))
//     break;
//     }
// }
// keylog();
// ### Object Destructuring
// 192. Use destructuring to extract properties from an object.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,

// }

//  const{name,country,birthyear}=obj;
//  console.log(name,country,birthyear)
// 193. Use destructuring to assign default values to properties.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,

// }

//  let{name,country,birthyear}=obj;
//  name="ali";
//  country="germany";
//  birthyear=2000;
//  console.log(name,country,birthyear)
// 194. Use destructuring to rename properties.
// let obj={
//     name:"john",
//     country:"germany",
//     birthyear:2004,

// }

//  let{name:{isim},country:{city},birthyear:{age}}=obj;
//  isim="amjad"
// city="istanbul"
// age=23
//  console.log(isim,city,age)
// 195. Use destructuring in a function parameter.
// function objdes(obj=name,city,age)
// {

// name="amjad";
// city="istanbul"
// age=20;
// console.log(name,city,age)
// }
// objdes();
// 196. Destructure nested objects.
// let obj={
//     book:
//     {
// genre:"adventure",
// demographic:"16+",
//     }
// }
// const{genre,demographic}=obj.book;
// console.log(genre,demographic);
// ### Cloning an Object
// 197. Use the spread operator to clone an object.
// let obj = {
//     name: "john",
//     country: "germany",
//     birthyear: 2004,
//     calcage: function () {
//         console.log(2024 - this.birthyear

//         )
//     }
// }
// let objcopy={...obj}
// console.log(objcopy)
// 198. Use Object.assign to clone an object.
// let obj = {
//     name: "john",
//     country: "germany",
//     birthyear: 2004,
//     calcage: function () {
//         console.log(2024 - this.birthyear

//         )
//     }
// }
// let objcopy=Object.assign({},obj)
// console.log(objcopy)
// 199. Write a function that performs a deep clone of an object.
//function Cloning(obj)
// {
//  obj = {
//     name: "john",
//     country: "germany",
//     birthyear: 2004,
//     calcage: function () {
//         console.log(2024 - this.birthyear

//         )
//     }
// }
// let objcopy={...obj}
// console.log(objcopy)
// }
// Cloning();
// 200. Compare the behavior of shallow and deep clones
