// var is a keyword to declare a variable-its like String, int, boolean

const age =10; // does not change

let name='John';// has some restrictions

var lastName='Smith'
var myName // by default this is undefined
console.log(myName)

// i can assign a value to that name
// var variables can be used multiple times
var myName='javascript'
console.log(myName) //javascript

// I may not use var here - I have already declared it
myName='java'
console.log(myName) //java

myName=true
console.log(myName)

myName=6
console.log(myName)

var fName;
var lName;

var fName, lName

var fName='John', lName='Cash' // not a good practice. Do them in different lines
console.log(fName)
console.log(lName)

var firstName='Sam'
var lastName='Walton'
console.log(firstName +' '+lastName )

// let is block scoped - you cannot use let twice for the same variable
// var is function scoped - it has larger scope
// const is most restricted - it does not change. You cannot assign a new value