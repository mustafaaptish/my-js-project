console.clear();

// NESTED OBJECTS


/*
Create an object
Name: personInfo
fName: Jim -> string
lName: Carrey -> string
age: 50 -> number
address={street=6th Ave., city=NYC, state=NY}
-> we will create all of these inside an object(inside person info)
hobbies=soccer, fishing, golf, hunting.

Finally we will create a function that returns the salary of this guy
salary=function that returns '100K yearly'

We will have 6 objects
*/
console.clear();
const personInfo={
  fName:'Jim',
    lName: 'Carrey',
      age:50,
        address:{
          street:'6th Ave',
          city: 'NYC',
          state: 'NY'
        },
  hobbies: ['soccer','fishing','hunting'],
  salary: function(){
    return '100K yearly'
  }

}
// OBJECT WITHIN AN OBJECT
// address:{
//           street:'6th Ave',
//           city: 'NYC',
//           state: 'NY'
//         },

// ARRAY WITHIN AN OBJECT
// hobbies: ['soccer','fishing','hunting'],

console.log('whole info: '+personInfo);
console.log(personInfo.hobbies);// ["soccer", "fishing", "hunting"]
console.log(personInfo.fName);// "Jim"

// we ccan use multiple . to get the data from nested objects
console.log(personInfo.address.street);// "6th Ave"


// we can do this:
const myState=personInfo.address.state;
console.log('My state is '+myState); // "My state is NY"

// getting the data from hobbies array
console.log(personInfo.hobbies);// ["soccer", "fishing", "hunting"]

// getting fishing-use the index just like in Java
console.log(personInfo.hobbies[1]);// "fishing"
console.log(personInfo.hobbies[2]);// "hunting"
console.log(personInfo.hobbies[3]);// undefined when there is no such index/ there is no assigned value in this index

