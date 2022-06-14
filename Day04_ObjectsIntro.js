/*

JS objects
json- javascript object notation
In JS the reference types are:

Function

Object
{} is used to create an object
: is used to create key-value pairs
, is used to add multiple key-value pairs

Arrays

*/

console.clear();
// this is not an object
var fName='John';
var lName='Cash';
var age=18;

console.log(`${fName} ${lName} ${age}`)

//we are creating object. person object with 4 data
// the curly braces are used to create an object-this is json format

var person = {
  fName: 'John',
  lName:'Cash',
  age:18,
  isEmployed:true

}

//calling the data from person object
//NOTE: we can call data using . notation or [] notation
// . notation is more common
console.log(person)// getting entire person object [object Object] {
//                                                    age: 18,
//                                                    fName: "John",
//                                                    lName: "Cash"
//                                                   }

// calling fName from personusing .notation. We can get the data using this
console.log(person.fName);//"John"

console.log(person.lName);
console.log(person.age);
console.log(person.isEmployed);

// getting the type of
console.log(typeof(person.lName));// "string"
console.log(typeof(person.isEmployed));// "boolean"


//calling single data from person using [] (square bracket) notation
//pass the value as a string when using [] notation
console.log(person['fName']);//"John"
console.log(typeof(person['fName'])); //"string"
