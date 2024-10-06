//Task-1: Write a function addToArray that takes an array and an element as arguments,
// adds the element to the array, and returns the new array.
 function addToArray(array1,element)
{
array1.push(element);
   
   console.log(array1);
}
addToArray([1,2,3],"pop");
//Task: Write a function removeFromArray that takes an array and an element as arguments,
// removes the element from the array using indexOf and splice, and returns the new array.
 function removeFromArray(array,element)
 {
 array.splice(2,1);

 console.log(array);
 }
removeFromArray([1,2,3],3);

//Task: Write a function addToFront that takes an array and an element as arguments,
// adds the element to the front of the array using unshift, and returns the new array.
function addToFront (array1 , element)
{
    
    array1.unshift(element);
    
    console.log(array1);
}
addToFront([1,2,3,4],11);
//Task: Write a function removeFromEnd that takes an array as an argument,
// removes the last element from the array using pop, and returns the removed element.
function removeFromEnd (array1)
{
    
    array1.pop();
    
    console.log(array1);
}
removeFromEnd([1,2,3,4]);

//Task: Write a function addToEnd that takes an array and an element as arguments,
// adds the element to the end of the array using push, and returns the new array.
function addToEnd (array , element)
{
   array.push(element);
   console.log(array);
}
addToEnd([1,2],5);
//Task: Write a function findElement that takes an array and an element as arguments and returns the index of the element using indexOf.
// If the element is not found, return -1.
function findElement (array2,element)
{
if(array2.includes(element))
    {
        console.log(array2.indexOf(element));
    }
    else
    {
        console.log(-1);
    }
    
}
findElement( [1,2,3] , 3);
//Task: Write a function elementExists that takes an array and an element as arguments
// and returns true if the element is found in the array using includes, otherwise false.
function elementExists (array,element)
{
if(array.includes(element))
    {
console.log(true);
    }
    else
    {
        console.log(false);
    }

}

elementExists([1,2,3],5);
//Task: Write a function isArrayEmpty that takes an array as an argument
// and returns true if the array is empty, otherwise false.
function isArrayEmpty (array)
{
 if (array[0]==null)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}
isArrayEmpty([]);
//Task: Write a function checkFirstElement that takes an array and an element as arguments
// and checks if the first element of the array is equal to the given element.
// Return true if they are equal, otherwise false.
function checkFirstElement(array,elemenet)
{
if (array[0]==elemenet)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}
checkFirstElement([1,2,3] , 1);
//Task: Write a function getDayName that takes a number between 0 and 6 as an argument
// and returns the corresponding day of the week using a switch statement.
function getDayName(day) {
    switch(day){
        case 1:
            console.log ("It's Monday");
        break;
        case 2:
            console.log ("It's Tuesday");
        break;

        case 3:
            console.log ("It's Wednsday");
        break;

        case 4:
            console.log ("It's Thursday");
        break;

        case 5:
            console.log ("It's Friday");
        break;

        case 6:
            console.log ("It's Saturday");
        break;

        case 7:
            console.log ("It's Sunday");
        break;

        default:
            console.log ("Not a valid day");
        break;
    }
}
getDayName(1);