/*
ARRAYS:
Are special types of objects
We use index to get the values in array
We use [] to create arrays
*/

console.clear();

// Declaring array:
// 1. way
var friendList=['sam','tom','tim','john','bob'];
console.log(friendList);
console.log(typeof(friendList));// "object"
// 2. way
var myFriendList=new Array('sam','tom','tim','john','bob');
console.log(myFriendList);

// getting the values from the array using index
console.log(friendList[3]);// john

// when index is out of bound
console.log(friendList[5]);// undefined

//  there are better ways to manipulate data in Arrays than using indexes

// Editing arrays:
//  change john as Mary
friendList[3]='Mary';
console.log(friendList[3]);// Mary - this is how we change the data of an array

// my goal now is to Add Data: adding data in the index of 5. Do it 'alex'
friendList[5]='alex';
console.log(friendList);// [ 'sam', 'tom', 'tim', 'Mary', 'bob', 'alex' ]
console.log(friendList[5]);// alex

// adding data in the index of 7

friendList[7]='samantha';
console.log(friendList);// ["sam", "tom", "tim", "Mary", "bob", "alex", undefined, "samantha"] - We are getting undefined for
                                                                                                // index 6 which is NOT good


// NOTE: When working with arays:
// 1. if there is already data in that index, then previous data will be overriden-we are changing data in that index.
// 2. if there is no data in that index, thenthe new data will be inserted in that index-we are adding data in that index.
// NOTE if there is a GAP between the last index and inserted index then the gap indexes will be undefined-see friendList[]