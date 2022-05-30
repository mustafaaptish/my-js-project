/*
Ternary


*/
console.clear();
const x=5, y=6;

x>y ? console.log('Logic 1') : console.log('Logic 2');// Logic 2

const isExpensive=x>4 ? 'Expensive' : 'Cheap';
console.log(isExpensive);//"Expensive"

const result=x>4 ? (y<4 ? 'logic 1' : 'logic 2') : 'logic 3';
console.log(result); //"logic 2" -> 5 is greater than 4, it hten runs the next code -> (y<4 ?
// y(6) is less than 4 -> not true, then it will print logic 2


//Random number generator in js
// Math.random() returns random decimals between 0.99999
// Write a code to get random number between 0-9(inclusive)
//Step 1: creating random number between 0-0.999999..
var num=Math.random();
console.log(num);

//Step 2: multiply by 10
num*=10;

//Step 3: Math.floor() to round the number to the nearest small whole number
num=Math.floor(num);
console.log(num);//4,2 etc. Its generating a random number.

let num1=Math.ceil(num);
console.log(num1);










































