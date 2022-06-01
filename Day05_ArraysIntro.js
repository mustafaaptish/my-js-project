/*
ARRAYS:
Are special types of objects
We use index to get the values in array
We use [] to create arrays
*/

console.clear();

// Declaring array:
// 1. way
var friendList=['sam','tom','john','bob'];
console.log(friendList);
console.log(typeof(friendList));// "object"
// 2. way
var myFriendList=new Array('sam','tom','john','bob');
console.log(myFriendList);

// getting the values from the array using index
console.log(friendList[3]);// "bob"

// when index is out of bound
console.log(friendList[5]);// undefined

//  there are better ways to manipulate data in Arrays than using indexes

// Editing arrays:
