// // 1. Write a function printArray that takes an array as an argument and prints each element using a for loop.
// function printArray(array) {
//   for (let i=0; i<array.length;i++) {
//     console.log(array[i]);
//   }
// }
// printArray([4,2,3]);
// // 2. Write a function sumArray that takes an array of numbers as an argument and returns the sum of all the numbers using a for loop.
// function sumArray (arr,sum)
// {

//     for(let num=0; num<arr.length; num++)
//         {
         
// sum +=arr[num];

// }
// console.log(sum);
// }
// sumArray([11,2,3],0);
// // 3. Write a function reverseArray that takes an array as an argument and returns a new array with the elements in reverse order using a for loop.
// function reverseArray (array)
// {
//     array.reverse();
//     console.log(array);
// }
// reverseArray(["E1","E2","E3"]);
// // 4. Write a function logEvenIndexedElements that takes an array as an argument and logs only the elements at even indices using a for loop.
// function logEvenIndexedElements(arr)
// {

//     let even=[];
//     for( i in arr)
//         {
           
//             if(arr[i] % 2!==0)
//                 {
//                     even.push(arr[i]);
//                 }
              
//         }
//  console.log(even);       
// }
// logEvenIndexedElements([2,3,5,12]);
// // 5. Write a function sumArrayWhile that takes an array of numbers as an argument and returns the sum of all the numbers using a while loop.
// function sumArrayWhile(arr )
// {
//    let whilesum=0;
// let i=0;
// while( i < arr.length)
//     {
//  whilesum += arr[i] ;
// i++;
// }

//     console.log(whilesum);

// }
// sumArrayWhile([11,12,3],0);
// // 6. Write a function printArrayDoWhile that takes an array as an argument and prints each element using a do-while loop.
// function printArrayDoWhile(arr)

// {
//     let el;
//     do
//     {
//         console.log(arr);
        
//     }
//     while( el in arr);
//     el++;
// }
// printArrayDoWhile([1,2,3]);
// // 7. Write a function doubleArray that takes an array of numbers as an argument and returns a new array with each number doubled using a for loop.
// function doubleArray (arr)
// {
//     emarr=[];
//     for(let i in arr)
//         {
//         emarr.push(arr[i]*2);
//         }
    
//         console.log(emarr);
// }
// doubleArray([12,3,7]);
// // 8. Write a function filterEvenNumbers that takes an array of numbers as an argument and returns a new array with only the even numbers using a for loop.
// function filterEvenNumbers(arr)
// {

//     let even=[];
//     for( i in arr)
//         {
           
//             if(arr[i] % 2==0)
//                 {
//                     even.push(arr[i]);
//                 }
              
//         }
//  console.log(even);       
// }
// filterEvenNumbers([2,3,1,4]);
// 9. Write a function findMax that takes an array of numbers as an argument and returns the maximum number using a for loop.
// function findMax(arr)
// {
//     let i;
//     let min =Math.max(...arr);
//     for( i of arr)
//         {
          
//         }
//         console.log(min);
// }
// findMax([1,2,3,-1,-12]);
// 10. Write a function findMin that takes an array of numbers as an argument and returns the minimum number using a for loop.
// function findMin(arr)
// {
//     let i;
//     let min =Math.min(...arr);
//     for( i of arr)
//         {
          
//         }
//         console.log(min);
// }
// findMin([1,2,3,-1,-12]);
// 11. Write a function printArrayForOf that takes an array as an argument and prints each element using a for...of loop.
// function printArrayForOf(arr)
// {


//     for(let i of arr)
//         {
// console.log(arr[i]);

//         }
        
//       return arr;
// }
// printArrayForOf([0,1,2,3,4,]);

// 17. Write a function sumSquares that takes an array of numbers as an argument and returns the sum of the squares of all the numbers using map and reduce.
// 18. Write a function flattenArray that takes a nested array (an array of arrays) and returns a flat array (a single array with all elements) using a for loop.
// function flattenArray(arr)
// {
// let flat=arr.flat(1);
// for (let i=arr.length+1; i<=arr.length; i++)
// {
//     flat.push(arr[i]);
// }
// console.log(flat);
// }
// flattenArray([1,23,3,[1,2,3,3]]);
// 19. Write a function nestedSum that takes a nested array of numbers and returns the sum of all the numbers using a for loop.
// function flattenArray(arr)
// {
//     let flatsum=0;
// let flat=arr.flat(1);
// for (let i=arr.length+1; i<=arr.length; i++)
// {
//     flat.push(arr[i]);
// }
// for (let x in flat)
// {
//     flatsum += flat[x];
// }
// console.log(flatsum);
// }
// flattenArray([1,23,3,[1,2,3,3]]);
// 20. Write a function deepSum that takes a deeply nested array of numbers (e.g., an array of arrays of arrays) 
//and returns the sum of all the numbers using recursion.
// function flattenArray(arr)
// {
//     let flatsum=0;
// let flat=arr.flat(2);
// for (let i=arr.length+1; i<=arr.length; i++)
// {
//     flat.push(arr[i]);
// }
// for (let x in flat)
// {
//     flatsum += flat[x];
// }
// console.log(flatsum);
// }
// flattenArray([1,23,3,[1,2,3,3,[1,2,3]]]);
// 21. Write a function mergeAndSortArrays that takes two arrays of numbers as arguments, merges them into one array,
// sorts the array in ascending order, and returns the sorted array using a for loop.


function mergeAndSortArrays(arr1,arr2)
{
    let sorted=[];
let merged=[];
for (let x=arr1.length-arr1.length; x<arr1.length; x++)
{
merged.push(arr1[x]);
}

for (let y in arr2)
    {
    merged.push(Math.max(arr2[y]));
    }
    for(let i=0; i<merged.length; i++)
    {
    sorted.push(merged[i]);
    }

console.log(sorted);
}
mergeAndSortArrays([1,3,2],[4,5,6]);


// 22. Write a function uniqueElements that takes an array and returns a new array with only the unique elements using a for loop.

// function uniqueElements(arr){
//     let unique = [];
//     for(let i = 0 ; i < arr.length; i++){
//         if(!unique.includes(arr[i])){
//            unique.push(arr[i]); 
//         }
//     }
//     return unique;
// }


// console.log(uniqueElements([1,2,3,4,4,5,5]));


// 23. Write a function rotateArray that takes an array and a number n,
// and returns a new array that is rotated n times to the right using a for loop.
// function rotateArray(arr,n)
// {
//     for (let i in arr)
//     {
//         arr.unshift(arr[i])*n;
//     continue;
//     arr.push(arr[i])*n;
//     }
    

//     console.log(arr);
// }
// rotateArray([1,2,3],1);
// 24. Write a function countOccurrences that takes an array and a value,
// and returns the number of occurrences of the value in the array using a for loop.
//function countOccurrences(arr,value)
// {
//     const Occurrences={};
//     for(let i of arr)
//         {
// if(Occurrences[i])
//     {
//         Occurrences[i]+=1;
        
//     }
//     else 
//     {
        
//         Occurrences[i] =1;
//     }
//         }
//         console.log(Occurrences);
// }
// countOccurrences([1,2,3,1],1);
// 25. Write a function appendToArray that takes an array and a value,
// and returns a new array with the value appended using push.
// function appendToArray(arr)
// {
// arr.push(`appended`);
// console.log(arr);
// }
// appendToArray([0,1,2,3]);
// 26. Write a function prependToArray that takes an array and a value, and returns a new array with the value prepended using unshift.
// function prependToArray(arr)
// {
// arr.unshift("unshifted");
// console.log(arr);
// }
// prependToArray([0,1,2,3]);
// 27. Write a function removeLastElement that takes an array and returns a new array with the last element removed using pop.
// function removeLastElement(arr)
// {
// arr.pop();
// console.log(arr);
// }
// removeLastElement([0,1,2,3]);
// 28. Write a function removeFirstElement that takes an array and returns a new array with the first element removed using shift.
// function removeFirstElement(arr)
// {
// arr.shift();
// console.log(arr);
// }
// removeFirstElement([0,1,2,3]);
// 29. Write a function containsValue that takes an array and a value, and returns true if the array contains the value using includes.
// function containsValue()
// {
//     let arr=["+","-"];
//     let value="+";
//     if(arr.includes(value))
//         {
//             console.log(true);
//         }
//         else
//         {
//             console.log(false);
//         }
// }
// containsValue(); 
// 30. Write a function findIndex that takes an array and a value, and returns the index of the value in the array using indexOf.
// function findIndex()
// {
// let arr= [1,2,3];
// let value=2;
// console.log(arr.indexOf(value));
// }
// findIndex();
// 31. Write a function filterGreaterThan that takes an array and a number n, and returns
// a new array with only the elements greater than n using a for loop and if statement.
// function filterGreaterThan(arr,n)
// {
//     let greater=[];
   
//     for(let i=0; i<arr.length; i++)
//         {
//             if(i>n-1)
//                 {
//                     greater.push(arr[i]);
//                 }
                
//         }
    
//         console.log(greater);
// }
// filterGreaterThan([1,2,3,4,5],1);
// 32. Write a function replaceNegatives that takes an array of numbers
// and replaces all negative numbers with 0 using a for loop and if-else statement.
// function replaceNegatives (arr) {
//     emarr=[];
//     for(let i in arr)
//         {
//             if(arr[i]<0)
//                 {
//                     emarr.push(arr[i]*-0);
//                 }
//        else
//        {
//         emarr.push(arr[i]*1);
//        }
//         }
    
//         console.log(emarr);
// }
// replaceNegatives([-1,-3,7]);
// 33. Write a function countVowels that takes a string and returns the number of vowels in the string using a for loop and switch statement.
//  function countVowels(str)
//  {
    
//      let vowelcount=0;
//  for(let i = 0; i <= str.length; i++)
//      {
//  switch(str[i]) {
//      case 'a':
   
//      case 'e':
   
//      case 'u':
   
//      case 'o':
       
//      case 'i':
//         vowelcount++;

//      break;
//      default : break;
//  }
//      }
//    return  vowelcount;
//  }
//  console.log(countVowels("corea seu")) ;
// 34. Write a function findFirstEven that takes an array of numbers and returns the first even number found using a for loop and if statement.

// function findFirstEven(arr)
// {
//     let firsteven=[];
//     for(let i in arr)
//     {
// if(arr[i]%2==0)
// {
//     firsteven.push(arr[i]);
// break;
// }

//     }
    
//     console.log(firsteven);
// }
// findFirstEven([1,2,3,4,2]);

// 35. Write a function categorizeNumbers that takes an array of numbers and returns an object with two properties:
// evens and odds, which are arrays containing the even and odd numbers, respectively, using a for loop and if-else statement.
// function categorizeNumbers(arr)
// {
//     let odd=[];
//     let even=[];
//     for( i in arr)
//         {
           
//             if(arr[i] % 2 == 0)
//                 {
//                     even.push(arr[i]);
//                 }
//                 else 
//                     {
//                         odd.push(arr[i]);
//                     }
              
//         }
//  console.log(even,odd);       
// }
// categorizeNumbers([2,3,1,4,7,9,1,2]);



