console.clear();
// warm up question-select a random data from this array

let myArray = [3,10,'javascript','usa','dallas'];
let randomItem = myArray[Math.ceil(Math.random()*myArray.length-1)];// OR myArray[Math.floor(Math.random()*myArray.length)]
console.log(randomItem);

/*
Spread Operator - also know as ... operator (three dots)
- used to spread out the data from array(very popular), function(not common) or the object(sometimes)
- we use ... in front of the arrays, objects or functions

We can use spread operator with:
1. function calls
2. array literals
3. object literals
*/

// 1. functions. First lets see how JS works - NOT A COMMON USAGE
var minNum = Math.min(2,4,-12,89,100);
console.log(minNum);// -12 because the numbers are already separated/spread out. There are five diffrent data/items.

// for example when we create an array of the same numbers.  We CANNOT use the same logic
const temperatures = [2,4,-12,89,100];
minTemp = Math.min(temperatures);
console.log(minTemp)// NaN - because the data(temperature) in this array is a whole structure data.

// NOTE with spread operator we can spread out this numbers
minTemp = Math.min(...temperatures);// we use the spread operator right in front of the data inside the min( in our case)
console.log(minNum);// -12

// another example. lets create a new array
const favActors = ['Jim','Angelina','Jack'];
// when I log this
console.log(favActors);// [ 'Jim', 'Angelina', 'Jack' ] - I get a single array
// when I log this with sprread operator. Notice that in console.log() --> log() is a function itself. We are passing argument inside this function
console.log(...favActors);// Jim Angelina Jack - I get every single data as single strings. Three different strings

// interesting usage
const myFavNum = '81473874';
console.log(myFavNum);// 814730874
console.log(Math.min(myFavNum));// 814730874 - it will still give me the same output
console.log(Math.min(...myFavNum));// 1 - I am spreading out the numbers and I get the minimum number
// we can pass strings directly in functions with spread operator
console.log(Math.max(...'2893281812'));// 9



// 2. Arrays - most commonm usage of spread operators
// We can spread one array into another array

const existingNumbers = [5,234,51,61];
const newNumbers = [6,18];
// we can combine these arrays in different ways. For example:
var allNums = [existingNumbers,newNumbers];
console.log(allNums)// [ [ 5, 234, 51, 61 ], [ 6, 18 ] ] - we get a 2D array-this can work depending on the task.
//                                                                       But I want to combine them in one array.

// using spread operator
allNums = [...existingNumbers,...newNumbers];
console.log(allNums);// [ 5, 234, 51, 61, 6, 18 ] - I get one single (new) array with all the data from both arrays combined.
console.log(allNums[2]);// 51

// Order matters - we first get the existingNumbers and then newNumbers
allNums = [...newNumbers,...existingNumbers];
console.log(allNums);// [ 6, 18, 5, 234, 51, 61 ]

// + we can insert new items to the existing list - string, number, booelan etc.
allNums = [...newNumbers,true,...existingNumbers,'apple'];
console.log(allNums);// [ 6, 18, true, 5, 234, 51, 61, 'apple' ]

// We can do same thing with strings - works same as number arrays
const languages = ['java','javascript','python'];
const duty = ['develop','test','deploy'];

var skills = [...languages,...duty];
console.log(skills);// [ 'java', 'javascript', 'python', 'develop', 'test', 'deploy' ]


//  We can use spread operator to get the copy of the original array
// lets get the copy of the languages array (above)
var copyOfLanguages = languages; // without using spread operator
console.log(copyOfLanguages);// [ 'java', 'javascript', 'python' ]

// we are not creating a new object here.
// copyOfLanguages and languages point the same place in the memory
// If I make an update on one array the other one will be changed as well
// if we do this: push anything in the copy, it will affect the original. They are in the same memory
copyOfLanguages.push('ruby');
console.log(copyOfLanguages);// [ 'java', 'javascript', 'python', 'ruby' ]
// this is changed as well
console.log(languages);// [ 'java', 'javascript', 'python', 'ruby' ]


// NOTE With spread operator we can make a new copy of the original array
//  When I edit copy, the original array will not be affected
var copyWithSpread = [...languages];
console.log(copyWithSpread);// [ 'java', 'javascript', 'python', 'ruby' ] this is now a new array

// now I will push something into copy
copyWithSpread.push('Apex');
console.log(copyWithSpread);// [ 'java', 'javascript', 'python', 'ruby', 'Apex' ]
console.log(languages);// [ 'java', 'javascript', 'python', 'ruby' ]
// When I make a change in the copy then the original is not affected

// 3. Objects: spread operator can be used with objects
const fullName={
    fName:'James',
    lName:'Bond'
}

// now we want to add some additional info to our user
var userInfo={
fullName, // fullName is inserted as an object
id:1,
username:'007'
}
console.log(userInfo);// { fullName: { fName: 'James', lName: 'Bond' }, id: 1, username: '007' }

// using spread operator
var userInfo={
    ...fullName,
    id:1,
    username:'007'
    }
    console.log(userInfo);// { fName: 'James', lName: 'Bond', id: 1, username: '007' }

    