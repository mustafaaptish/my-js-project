/*
FUNCTION INTRO:

*/

//1. declaring function:

function greet(){
    console.log('Hello World')
  }

  //2. calling the function
  greet();


  // 3.Declaring function with 1 parameter

  function greetPeople(name){
    //console.log('Hello '+name);
    console.log(`Hi ${name}`);
    }

  //we pass the data inside the parameter
  greetPeople('Sam');


  // 5. Declaring function with multiple parameters

  function personInfo(fName,lName,age,location,isWorking){
    console.log(`${fName}, ${lName}, ${age}, ${location}, ${isWorking}`)
  }

  //6. calling the function
  personInfo('Ahmet', 'Bayram', 18, 'LA',true);//"Ahmet, Bayram, 18, LA, true"
  personInfo('Ahmet', 'Bayram', 18);//"Ahmet, Bayram, 18, undefined, undefined"
  personInfo('Ahmet', 'Bayram', 'LA',true);//"Ahmet, Bayram, LA, true, undefined"


  function add(x,y,z){
    return x/y/z;
  }

  console.log(add(23,2,2));

  console.log(add(10,2,2));

/*
Functions:
perform an action
calculate a value
*/
console.clear();

function sum(){
  var num1=5;
  var num2=4;
  var total=num1+num2;
//  return num1+num2; we can also do this
  return total;
}

// calling the function
console.log(sum());// we ususally don't do console.log() for functions
// but just for learning purposes

// OR

//we can also do this. We can use var , let or const. We used const here
// but this is extra work/ redundant
const result=sum()+10;
console.log(result);//19

//Create a function
//this will return the square of the function
function square(s){
  return s*s;
}

//calling/using the function
console.log(square(8));//64
console.log(square()); //Nan - undefined - Not A Number

console.log(square(3,3,5,6,true, 'javascript'))//result will be 9. Only the first digit matters here.

// we can again when we have a function we can put it in a variable and to some other operations
const result1=square(8)-1;
console.log(result1);//63

// We can assign DEFAULT values in the function parameter (came with ES6 -> 2016)
function addNumbers(num1=2,num2=3,num3=4){
  return num1+num2+num3;
}
console.log(addNumbers()); // 9  using default values 2+3+4=9
// if you add only 1 or 2 numbers in this function, you will get Nan- it needs 3 parameters
console.log(addNumbers(5,6,4));// Overwriting default values 5+6+4=15


console.clear();

// we can first use a function and then declare it-not common but we can do it.
// calling the function
add(2,5)//7

// declaring the function
function add(x,y){
  console.log(x+y);
}

add(4,7);//11

// above "function" is the keyword and "add" is the name
// we can create functions without name. It is called anonymus function-its common
// I need to put that in a container

// var sum=function add(x,y){
//   console.log(x+y);
// }

//After we assign it we can remove the function name
var sum=function(x,y){
  console.log(x+y);
}

// calling the function
sum();// NaN
sum(3,8);//11
sum(3,8,5)// undefined


// Create anonymus function with 3 parameters

var total=function(x,y,z){
  console.log(x*y*z);
}

total(3,4,10)//120








