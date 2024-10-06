//Task-1: Write a function greet that logs "Hello, World!" to the console. Call the function.
function greet()
{
    console.log("hello world");
}
greet();
//Task-2: Write a function square that takes one parameter and returns its square.
// Call the function with an example argument.
function square()
{
    let parameter=6;
    console.log(parameter*parameter);
}
square();
//Task-3: Create a function expression that calculates the area of a rectangle and assign it to a variable calculateArea.
//Call the function with example arguments.
const expression = function (rectangleheight,rectanglewidth)
{
    let calculateArea= "the area of rectangle is "  + rectangleheight * rectanglewidth;
return calculateArea;
}
console.log(expression(3,4));
//Task-4: Write a function greetUser that takes a username and a greeting message with default value "Hello".
// If no greeting message is provided, it should use the default.
function greetUser(username,greeting)
{
    greetingmessage=`${greeting} ${username}`;
    console.log(greetingmessage);
    if(greeting==null)
        {
            console.log("defult");
        }
}
greetUser("waled","hello how are you" );
//Task-5: Write a function add that takes two parameters and returns their sum.
function add(num1 ,num2)
{
    console.log(num1 +num2);
return
}
add(2,12);
//Task-6: Write a function outer that declares a variable outerVar, 
//then declares and calls an inner function inner that logs outerVar to the console.
function outer()
{
let outervar="outer varible";
function inner()
{
    console.log(outervar);
}
return inner();
}
outer();
//Task: Demonstrate function hoisting by calling a function hoistedFunction before it is declared.
hoisting();
function hoisting()
{
    console.log("hoistedfunction");
    
}

//Task-8: Write a function executeCallback that takes a callback function as a parameter and calls it.

function executeCallback (callback)
{
    
    function callback()
{
console.log("this is a callback");

}
return callback();    
}
executeCallback();
//Task-9: Write a function createMultiplier that returns a new function which multiplies
// a given number by a specified multiplier.
function createMultiplier(multi1)
{
    function multiplier()
    { 
console.log(multi1*5);
    }
    return multiplier();
}
createMultiplier(1);