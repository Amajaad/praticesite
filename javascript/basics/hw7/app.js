// جافا سكربت تاسك javascript 45 2

// Arrays
// Write a function to create an array with the numbers 1 to 10.
// function onetoten(arr,num)
// {
// while(num<=10)
// {
//     arr.push(num++);

// }
// console.log(arr);
// }
// onetoten([],0)

// Write a function to add a new element to the end of an array.
// function addtoarray(arr)
// {
//     arr.push(3)
//     console.log(arr)
// }
// addtoarray([1,2])
// Write a function to remove the first element from an array.
// function remove1st(arr)
// {
//     arr.shift();
//     console.log(arr)
// }
// remove1st([1,2,4])
// Write a function to find the length of an array.
// function arraylength(arr)
// {
//     let arrlength=arr.length;
//     console.log(arrlength)
// }
// arraylength([1,3,4,2])
// Write a function to access the third element of an array.
// function thirdelement(arr)
// {
// arr[2]="three"
// console.log(arr)
// }
// thirdelement([1,2,3,4])
// Write a function to update the second element of an array.
//function secondelement(arr)
// {
//     arr[1]="two"
//     console.log(arr)
// }
// secondelement([1,2,4])
// Write a function to check if an array includes a specific element.
// function arrayinclude(arr)
// {
//     if(arr.includes(2))
//     {
//         console.log(true)
//     }
//     else
//     {
//         console.log(false)
//     }
// }
// arrayinclude([1,2,4])
// Write a function to find the index of a specific element in an array.
// function findindex(arr)
// {
//     console.log(arr.indexOf(3))
// }
// findindex([1,2,4])
// Write a function to join all elements of an array into a string.
// function joinarray(arr)
// {


// console.log(arr.toString())

// }
// joinarray(["c","a","t"])
// Write a function to split a string into an array of words.
// function strtoarr(arr,str)
// {
//     for(let i in str)
//     {
//         arr.push(str[i])
//     console.log(arr)

//     }

// }
// strtoarr([],"dog")
// Objects
// Write a function to create an object representing a person with properties name and age.
// let user ={
//     name:"mike",
//     age:20,
// }
// console.log(user)
// Write a function to add a new property to an existing object.
// let user ={
//     name:"mike",
//     age:20,
// }
// user.bodyweight="82.03kg"
// console.log(user)
// Write a function to delete a property from an object.
// let user ={
//     name:"mike",
//     age:20,
// }
// delete(user.age)
// console.log(user)
// Write a function to update the value of an existing property in an object.
// let user ={
//     name:"mike",
//     age:20,
// }
// user.age=21
// console.log(user)
// Write a function to access the value of a specific property using dot notation.
// let user ={
//     name:"mike",
//     age:20,
// }
// console.log(user.age)
// Write a function to access the value of a specific property using bracket notation.
// let user ={
//     name:"mike",
//     age:20,
// }
// console.log(user["age"])
// Write a function to check if an object has a specific property.
// function findprop(obj, arr) {

//     for (let i in obj) {
//        arr.push(i);
//     }

//     if(arr.includes("age"))
//     {
//         console.log("this objest has the proprerty")
//     }
//     else
//     {
//         console.log("not avilable")
//     }
// }
// findprop({
//     name: "amjad",
//     age: 21,
//     weight: "82kg",
// }, [])
// Write a function to loop through all properties of an object using a for...in loop.
// function objloop(obj)
// {
//     obj={
//         name:"amjad",
//         age:21,
//         weight:"82kg",
//     }
//     for(let i in obj)
//     {
//         console.log(obj[i])
//     }
// }
// objloop()
// Write a function to convert an object to an array of its keys.
// function objkeys(obj, arr) {

//     for (let i in obj) {
//        arr.push(i);
//     }
//     console.log(arr)
// }
// objloop({
//     name: "amjad",
//     age: 21,
//     weight: "82kg",
// }, [])
// Write a function to convert an object to an array of its values.
// function objvalue(obj, arr) {

//     for (let i in obj) {
//        arr.push(obj[i]);
//     }
//     console.log(arr)
// }
// objvalue({
//     name: "amjad",
//     age: 21,
//     weight: "82kg",
// }, [])
// Loops
// Write a for loop to print the numbers from 1 to 10.
// let num=1;
// for(let i=1; i<=10; i++)
// {
//     console.log(num++)
// }
// Write a while loop to print the numbers from 1 to 10.
// let num=1;
// while(num<=10)
// {
//     console.log(num++)
// }
// Write a do...while loop to print the numbers from 1 to 10.
// let num=1;
// do
// {
//     console.log(num++)
// }
// while(num<=10)

// Write a for...in loop to print all properties of an object.
// let customer={
//     name:"ahmad bassam",
//     no:74,
// }
// for(let i in customer)
// {
//     console.log(i)
// }
// Write a for...of loop to print all elements of an array.
// let customer=[
//     "ahmad bassam",
//     74,
// ]
// for(let i of customer)
// {
//     console.log(i)
// }
// Write a loop to find the sum of all numbers in an array.
// let arr=[1,3,41,12]
// let sum =0;
// for(let i in arr)
// {
//     sum +=arr[i];
// }
// console.log(sum)
// Write a loop to find the maximum number in an array.
// let arr=[ 1,4,12,41,42,99]
// let max=[]
// for(let i=arr.length-1; i<=arr.length; i++)
// {
//     max.push(Math.max(arr[i]))
//     console.log(max);
//     break;
// }
// Write a loop to print all even numbers from 1 to 20.
//let num=1;
// for (let i=1; i<=20; i++)
// {

// if (i%2)
// {
//     continue;

// }
// console.log(i)
// }
// Write a loop to print all odd numbers from 1 to 20.
// for (let i=1; i<=20; i++)
//     {
    
//     if (i%2==false)
//     {
//         continue;
    
//     }
//     console.log(i)
//     }
// Write a loop to calculate the factorial of a number.


// Break and Continue
// Write a loop that prints numbers from 1 to 10, but stops when it reaches 5.
// let num=1;
// for (let i=0; i<=10; i++)
// {
//     while(num<=5)
//     {
//         console.log(num++)
//     }
// }
// Write a loop that prints numbers from 1 to 10, but skips 5.
// let num=1;
// for (let i=1; i<=10; i++)
// {

// if (i===5)
// {
//     continue;

// }
// console.log(i)
// }
// Infinite Loops
// Write an infinite loop using while(true).
// Nested Loops
// Write a nested loop to log a multiplication table.
// let arr=[[2*1],[2*2],[2*3],[2*4],[2*5]]
// let multiplier=2
// for(let i in arr)
// {
//     console.log(arr[i])
// }
// Write a nested loop to iterate over a 2D array.
// Write a nested loop to find the transpose of a matrix.
// Write a nested loop to log a pattern (e.g., a triangle of stars).
// Write a nested loop to flatten a 2D array into a 1D array.
// String Methods
// Write a function to convert a string to uppercase.
// function lowercase(str)
// {
//     console.log(str.toUpperCase())
// }
// lowercase("sheep")
// Write a function to convert a string to lowercase.
// function lowercase(str)
// {
//     console.log(str.toLowerCase())
// }
// lowercase("LAMAA")
// Write a function to find the first occurrence of a substring in a string.
// function lastoccuraence(str)
// {
//     console.log(str.indexOf("man"))
// }
// lastoccuraence("batmanman")
// Write a function to find the last occurrence of a substring in a string.
// function lastoccuraence(str)
// {
//     console.log(str.lastIndexOf("man"))
// }
// lastoccuraence("batmanman")
// Write a function to check if a string starts with a specific substring.
// function checkstart(str)
// {
//     if(str.startsWith("para"))
//     {
//         console.log(true)
//     }
// }
// checkstart("paradise")
// Write a function to check if a string ends with a specific substring.
// function checkend(str)
// {
//     if(str.endsWith("ise"))
//     {
//         console.log(true)
//     }
// }
// checkend("paradise")
// Write a function to split a string into an array of substrings.
// function splitarr(arr,str)
// {
//     str.substring(1,4)
//     arr.push(str.split(""))
//     console.log(arr)
// }
// splitarr([],"mamammamamama")
// Write a function to concatenate two strings.
// function concatenate(str,str2)
// {
//     let con=str.concat(str2)
    
//     console.log(con)
// }
// concatenate("car","house")
// Write a function to extract a substring from a string using slice.
// let str ="bananas"
// let sub=str.slice(1,4)
// console.log(sub)
// Write a function to extract a substring from a string using substring.
// let str ="bananas"
// let sub=str.substring(1,4)
// console.log(sub)
// Escape Sequences
// Write a string that includes a newline character.
// let str="name: \n amjad"
// console.log(str)
// Write a string that includes a tab character.
// let str="name: \t amjad"
// console.log(str)