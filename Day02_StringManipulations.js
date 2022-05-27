// STRING MANIPULATIONS
// prompt is used to get data from user. The return type is string

// let usersName=prompt('Please enter your name')
// console.log('My name is '+ usersName)

console.clear()

 // Getting input from user, using length and backtick
// let input=prompt('Write your tweet');

// let tweetLen=input.length;

// let maxLen=280;

// console.log(`Sent : ${tweetLen}. Remaining : ${maxLen-tweetLen}`);

// let userName=prompt("Enter your name");
// console.log(userName);

console.clear()


// let userName=prompt('Enter your name')

// getting the first letter and converting to upper case and all remaining letters to lowercase
// let properName=userName.slice(0,1).toUpperCase()+userName.slice(1).toLowerCase();
// console.log(properName);


// get the length of string
let str1 = 'I love javascript';
let len = str1.length;
console.log(len);

//indexOf
//find index of love

let indexOfLove=str1.indexOf('love')
console.log(indexOfLove);

/*
slice(start, end(optional))
substring(start, end(optional))
Note: if there is no end index, then end index will be the last index
Note: when slice(-3), returns LAST 3 characters. For last charachter just put negative 1 (-1)
Note: when substring(-5) returns all characters starting from 0.
Note: when substring(5,1) => same as substring(1,5)
*/

console.log(str1.slice(3)); //ove javascript
console.log(str1.slice(-4));//ript
console.log(str1.slice(5,1)); // returns empty string


console.log(str1.substring(3)); //ove javascript
console.log('substring: ' + str1.substring(-4));// substring: I love javascript
console.log(str1.substring(5,1)); // lov






