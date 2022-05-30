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

