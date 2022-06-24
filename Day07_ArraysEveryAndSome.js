console.clear();
/*
every(); returns true if condition is true for ALL elements
returns false if condition is false
 */

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 40, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

// example: check if all items are less than 12. return true if so
var nums=[5,2,4,1,-9,10];
var items=[5,3,2,true,false,'apple'];

// using arrow function
var isTrue=nums.every(eachNum => eachNum<12);
console.log(isTrue);// true

isTrue=items.every(everyInput => everyInput<14);
console.log(isTrue);// false because items array consists of numbers, string and boolean. This returns false

// some(); returuns a boolean
// returns true if condition is true for at least 1 element]
// returns false otherwise

isTrue=nums.some(input => input<10);
console.log(isTrue); // true


isTrue=nums.some(input => input<0);
console.log(isTrue); // true


//  check if items[] has 'apple'
isTrue=items.some(theInputs => theInputs==='apple');
console.log(isTrue);//true

isTrue=items.some(theInputs => theInputs=='orange');
console.log(isTrue);// false


// reverse() method
var nums=[5,2,4,1,-9,10];
console.log(`ORIGINAL :  ${nums}`);// ORIGINAL :  5,2,4,1,-9,10

nums.reverse();
console.log(`REVERSED : ${nums}`);// REVERSED : 10,-9,1,4,2,5




// sort() method - sorts in ascending order - alphabetical order?
nums.sort();
console.log(`SORTED : ${nums}`)//SORTED : -9,1,10,2,4,5

// example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);// [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// descending order -> sort() + reverse()
nums.reverse();
console.log(`SORTED : ${nums}`)// SORTED : 5,4,2,10,1,-9


// fill() : changes ALL of the items with given the value and RETURNS a NEW array

var nums=[5,2,4,1,-9,10];
var filledNum=nums.fill(1);
console.log(filledNum)// [ 1, 1, 1, 1, 1, 1 ]

// fill(item,startIndex(included), endIndex(excluded)) can take more than 1 parameter
var filledTwo=nums.fill(10,2,5);
console.log(filledTwo)// [ 1, 1, 10, 10, 10, 1 ]

// example with string
var filledString=nums.fill('orange',2,5);
console.log(filledString)// [ 1, 1, 'orange', 'orange', 'orange', 1 ]


/*
Write a function that returns an array filled with incremented numbers:
Example:
 I am creating a function and it will take an input as a number
 I want to write a function that will return an array that will return the length of the input
 for example if I do -> fillNumber(3); so it returns [1,2,3] as an array
 or fillNumber(6); so it returns [1,2,3,4,5,6] as an array
 */

function fillNumber(length){
return Array(length) // creating array with the length of 'length'
.fill(0).map((input,index) => index+1)// I will use map()- i am passing 2 params in it -> it will hold on to the input and index
            // It will take the index and return index+1 in every loop. I want it to start from 1, thats why I do index+1
            // if I don't use the map() everything will be 0

}

console.log(fillNumber(3));// [ 1, 2, 3 ]
console.log(fillNumber(9));// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]



