console.clear();

var person = {
  fName: 'John',
  lName:'Cash',
  age:18,
  isEmployed:true

}
console.log(person.fName);

// we can edit values using . or [] notation
person.fName='Sam'; // from this point on the value of fName is 'Sam'
console.log(person.fName);//"Sam"

console.log(person.isEmployed);//true
person.isEmployed=false;
console.log(person.isEmployed);//false


// changing lName and age using [] notation
console.log(person.lName);// "Cash"
person['lName']='Smith';
console.log(person['lName']);//"Smith"

// editing the value using a NEW KEY. We  put fName in a new temporary variable.Not Common

var newName='fName';
person[newName]='William';

console.log(person);
// [object Object] {
//   age: 18,
//   fName: "William",
//   isEmployed: false,
//   lName: "Smith"
// }

