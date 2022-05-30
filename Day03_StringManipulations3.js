/*
String Manipulations: Day03_StringManipulations3.js


*/

console.clear();
//concat() : used to concatenate the string
let fName='John'
let lName='Walker'

console.log(fName+' '+lName); //"John Walker"

console.log(fName.concat(lName)); //JohnWalker

//trim()
//clears front and back of the string

//I will define a let
let words=' Today is Wednesday '
words.trim();
// it will return another variable as string, and I will put that in a container:

let trimmed=words.trim();
console.log(trimmed);//"Today is Wednesday"

//charAt('index') : return the character at that index. index starts from 0
let charAt4=words.charAt(4);
console.log(charAt4);// a

//split('character') : returns an array that is splitted from this character
let splitted=words.split(' '); // split words from ' ' and return as array
console.log(splitted);// ["", "Today", "is", "Wednesday", ""]

let trimSplitted=trimmed.split(' ')
console.log(trimSplitted);//["Today", "is", "Wednesday"] - we removed(trimmed) the spaces from the array

let states="AL,AK,AZ,AR,TX,NY,NF,FL";

let listOfStatesAsArray=states.split(',');
console.log(listOfStatesAsArray);//["AL", "AK", "AZ", "AR", "TX", "NY", "NF", "FL"]
//getting data from array is easier then a strinr(array methods etc.)