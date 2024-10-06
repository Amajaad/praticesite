// ### Math Object
// 1. Write a function to find the maximum of two numbers using Math.max.
// function findmax(num1,num2)
// {
//     console.log(Math.max(num1,num2))
// }
// findmax(6,4)
// 2. Write a function to find the minimum of two numbers using Math.min.
// function findmin(num1,num2)
// {
//     console.log(Math.min(num1,num2))
// }
// findmin(6,4)
// 3. Write a function to generate a random number between 0 and 1 using Math.random.
//console.log(Math.random())
// 4. Write a function to round a number to the nearest integer using Math.round.
// function roundnum(float)
// {
//     console.log(Math.round(float))
// }
// roundnum(1.6)
// 5. Write a function to round a number up to the nearest integer using Math.ceil.
// function ceilnum(float)
// {
//     console.log(Math.ceil(float))
// }
// ceilnum(1.1)
// // 6. Write a function to round a number down to the nearest integer using Math.floor.
// function floornum(float)
// {
//     console.log(Math.floor(float))
// }
// floornum(1.6)
// 7. Write a function to calculate the square root of a number using Math.sqrt.
// function sqrtnum(float)
// {
//     console.log(Math.sqrt(float))
// }
// sqrtnum(9)
// 8. Write a function to calculate the absolute value of a number using Math.abs.
// function absnum(float)
// {
//     console.log(Math.abs(float))
// }
// absnum(-1.6)
// 9. Write a function to calculate the power of a number using Math.pow.
// function pownum(float)
// {
//     console.log(Math.pow(float,4))
// }
// pownum(2)
// 10. Write a function to find the sine of an angle in radians using Math.sin.
// function roundnum(float)
// {
//     console.log(Math.sin(float))
// }
// roundnum(135)
// ### Finding Object in Array
// 11. Write a function to find the first object in an array that matches a given condition using Array.prototype.find.
// function findobj(arr)
// {

//    let found= arr.find((i)=>i%2==0)
// console.log(found)


// }
// findobj([1,5,3,2])
// 12. Write a function to find the index of the first object in an array that matches a given condition using Array.prototype.findIndex.
// function findfirstobj(arr)
// {

//    let found= arr.findIndex((i)=>i%2==0)
// console.log(found)


// }
// findfirstobj([1,4,5,3,2])
// 13. Write a function to filter objects in an array that match a given condition using Array.prototype.filter.
// function filterobj(arr)
// {

//    let found= arr.filter((i)=>i%2==0)
// console.log(found)


// }
// filterobj([1,5,3,2,4,8])
// 14. Write a function to check if an array contains an object that matches a given condition using Array.prototype.some.
// function someobj(arr)
// {

//    let found= arr.some((i)=>i%2==0)
// console.log(found)


// }
// someobj([1,5,3,2])
// 15. Write a function to check if all objects in an array match a given condition using Array.prototype.every.
// function everyobj(arr)
// {

//    let found= arr.every((i)=>i%2==0)
// console.log(found)


// }
// everyobj([1,5,3,2])
// ### Iterating an Array
// 16. Write a function to log each element of an array using a for loop.
// function logeach(arr)
// {
//     for(let i=arr.length-arr.length;i<=arr.length; i++)
//     {
//         console.log(arr[i])
//     }
// }
// logeach([1,4,1])
// 17. Write a function to log each element of an array using a for...of loop.
// function logeachof(arr)
// {
//     for(let i of arr)
//     {
//         console.log(i)
//     }
// }
// logeachof([1,4,1])
// 18. Write a function to log each element of an array using Array.prototype.forEach.
// function logeach(arr)
// {
// arr.forEach((i)=>console.log(i));
// }
// logeach([1,4,1])
// 19. Write a function to create a new array with each element doubled using Array.prototype.map.
// function mapdoublearray(arr)
// {
// arr.map((i)=>console.log(i*2));
// }
// mapdoublearray([1,4,1])
// 20. Write a function to create a new array with only the even numbers using Array.prototype.filter.
// function logeach(arr)
// {
// let even=arr.filter((i)=>i%2==0);
// console.log(even)
// }
// logeach([1,4,1,2])
// ### Sorting and Reversing an Array
// 21. Write a function to sort an array of numbers in ascending order using Array.prototype.sort.
// function sortarray(arr)
// {
//     arr.sort((a,b)=>a-b);
//     console.log(arr)
// }
// sortarray([1,41,2])
// 22. Write a function to sort an array of numbers in descending order using Array.prototype.sort.
// function sortarray(arr)
// {
//     arr.sort((a,b)=>b-a);
//     console.log(arr)
// }
// sortarray([1,41,2])
// 23. Write a function to reverse the elements of an array using Array.prototype.reverse.
// function reversearray(arr)
// {
//     arr.reverse();
//     console.log(arr)
// }
// reversearray([1,41,2])
// 24. Write a function to sort an array of strings alphabetically using Array.prototype.sort.
// function sortarray(arr)
// {
//     arr.sort();
//     console.log(arr)
// }
// sortarray(["cat","dog","apple"])
// 25. Write a function to sort an array of objects by a specific property using Array.prototype.sort.

// ### Testing the Array Method every and some
// 26. Write a function to check if all elements in an array are positive using Array.prototype.every.
// 15. Write a function to check if all objects in an array match a given condition using Array.prototype.every.
// function everyobjispostive(arr)
// {

//    let found= arr.every((i)=>i>0)
// console.log(found)


// }
// everyobjispostive([1,5,3,-2])
// 27. Write a function to check if some elements in an array are positive using Array.prototype.some.
// function someobjispostive(arr)
// {

//    let found= arr.some((i)=>i>0)
// console.log(found)


// }
// someobjispostive([-1,-5,-3,-2])
// 28. Write a function to check if all elements in an array are even using Array.prototype.every.
// function everyobjiseven(arr)
// {

//    let found= arr.every((i)=>i%2==0)
// console.log(found)


// }
// everyobjiseven([1,5,3,-2])
// 29. Write a function to check if some elements in an array are even using Array.prototype.some.
// function someobjiseven(arr)
// {

//    let found= arr.some((i)=>i%2==0)
// console.log(found)


// }
// someobjiseven([1,5,3,-2])
// 30. Write a function to check if all objects in an array have a specific property using Array.prototype.every.
// function everyobjhas(arr)
// {

//    let found= arr.every((i)=>i>4)
// console.log(found)


// }
// everyobjhas([1,5,3,-2])
// ### Spread Operators
// 31. Write a function to merge two arrays using the spread operator.
// function combinearrays(arr,arr2)
// {
// let combined=[...arr,...arr2]
// combined.sort()
// console.log(combined)

// }
// combinearrays([1,4,1,2],[2,4,1])
// 32. Write a function to create a copy of an array using the spread operator.
// function arraycopy(arr)
// {
//     let arrcopy=[...arr]
//     console.log(arrcopy)
// }
// arraycopy([2,4,1])
// 33. Write a function to add elements to an array using the spread operator.
// function addtoarray(arr)
// {

//     arr=[...arr,..."3434"]
// console.log(arr)
// }
// addtoarray([1])
// 34. Write a function to combine properties of two objects using the spread operator.
// function combineprop(obj, obj2) {

//     let agesum = [obj.age+obj2.age]
//     console.log(agesum)
// }
// combineprop({
//     age: 14,
// }, {
//     age: 12,
// })
// 35. Write a function to pass an array as arguments to a function using the spread operator.
// function pass()
// {
// let passedarr=["one","two","three"]
// passedto(...passedarr);
// }
// function passedto(a,b,c)
// {
// console.log(a,b,c)
// }
// pass()
// ### Joining Array
// 36. Write a function to join all elements of an array into a string using Array.prototype.join.
// function joinarr(arr)
// {
//     let joined=arr.join("")
//     console.log(joined)
// }
// joinarr(["a","b","s"])
// 37. Write a function to join elements of an array with a specific delimiter using Array.prototype.join.
// function joinarr(arr)
// {
//     let joined=arr.join(",")
//     console.log(joined)
// }
// joinarr(["a","b","s"])
// 38. Write a function to concatenate two arrays using Array.prototype.concat.
// function concatarr(arr,arr2)
// {
//     let combined=arr.concat(arr2)
//     console.log(combined)
// }
// concatarr([1,3,2],[4,1,1])
// 39. Write a function to join nested arrays into a single array using Array.prototype.flat.
// function flatnestedarray(arr)
// {
// let flatten=arr.flat()
// console.log(flatten)
// }
// flatnestedarray([[1,4,12],[1,5,12]])
// 40. Write a function to split a string into an array and then join it back to a string.
// function what(str,arr)
// {
// for(let i in str)
// {
// arr.push(str[i])
// }
// console.log(arr)
// arr.join("")
// let joined=arr.join("")
// console.log(joined)
// }
// what("flower",[])
// ### Mapping an Array
// 41. Write a function to create a new array with the square of each element using Array.prototype.map.
// function sqrt(arr)
// {
//     arr.map((i)=>console.log(Math.sqrt(i)))
//     console.log(arr)
// }
// sqrt([4,9])
// 42. Write a function to create a new array with the length of each string using Array.prototype.map.
// function maplength(arr)
// {
// arr.map((i)=>console.log(i.length))
// }
// maplength(["app","door","beehive"])
// 43. Write a function to create a new array with each element incremented by 1 using Array.prototype.map.
// function incby1(arr)
// {
//     arr.map((i)=>console.log(i+=1))

// }
// incby1([4,9])
// 44. Write a function to create a new array with each object property modified using Array.prototype.map.
// function modobjprop(objarr)
// {
//     objarr=[
//         {age:32},{age:29},{age:22}
//     ]
//    let mod= objarr.map((i)=>i.age-12)
//    console.log(mod)
// }
// modobjprop()
// 45. Write a function to create a new array with the first letter of each string capitalized using Array.prototype.map.

// ### Reducing an Array
// 46. Write a function to calculate the sum of all elements in an array using Array.prototype.reduce.
// function reducesum(arr)
// {
//     let reducessum = arr.reduce(function(num,sum){return sum+num;});
// console.log(reducessum)
// }
// reducesum([3,12,1])
// 47. Write a function to calculate the product of all elements in an array using Array.prototype.reduce.

// 48. Write a function to find the maximum number in an array using Array.prototype.reduce.
// function reducemax(arr)
// {
// let max=arr.reduce((i)=>Math.max(...arr))
// console.log(max)
// }
// reducemax([122,4,12])
// 49. Write a function to count the occurrences of each element in an array using Array.prototype.reduce.
// function reduceoccurrences(arr,occ) {
  
//      arr.reduce(function (){ 
//         occ={}
//         for(let i of arr){if (occ[i]){occ[i]+=1}else{occ[i]=1}}})
       
//         console.log(occ)
// }
// reduceoccurrences([1,1,2,4,4,4])
// 50. Write a function to create an object from an array of key-value pairs using Array.prototype.reduce.

// ### Error Handling
// 51. Write a function that throws a SyntaxError.
// function synerror(a,b)
// {
// let a=0
// }
// synerror(2,0)
// 52. Write a function that throws a ReferenceError.
// function referror(a,b)
// {
// console.log(c)
// }
// referror(2,1)
// 53. Write a function that throws a TypeError.
// function typeerror(a)
// {
// a.toUpperCase()
// }
// typeerror(true)
// 54. Write a function that throws a RangeError.
// function synerror(a)
// {

// console.log(a.toFixed(3313))

// }
// synerror(2.41212)
// 55. Write a function that throws a custom error with a message.
// function customerror(a)
// {
//     if(a==0)
//     {
//         throw new Error("the number must be postive")
//     }
// }
// customerror(0)
// ### Handling Errors with Try, Catch, and Finally
// 56. Write a function that catches and logs errors using a try...catch block.
// function customerror(a,b)
// {
//     if(a==0)
//     {
//         throw new Error("the number must be postive")
//     }
// }

// try{customerror(0,0)}
// catch(e)
// {
//     console.log(e)

// }
// 57. Write a function that uses try...catch to handle a ReferenceError.
// function referror(a,b)
// {
// console.log(c)
// }
// try{referror(2,1)}
// catch(e)
// {
//     console.log(e)
// }
// 58. Write a function that uses try...catch to handle a TypeError.
// function typeerror(a)
// {
// a.toUpperCase()
// }

// try{typeerror(2,1)}
// catch(e)
// {
//     console.log(e)
// }
// 59. Write a function that uses try...catch to handle a RangeError.
// function rangeerror(a)
// {

// console.log(a.toFixed(3313))

// }
// try{rangeerror()}
// catch(e)
// {
//     console.log(e)
// }
// 60. Write a function that uses try...catch and a finally block to always log a message.
