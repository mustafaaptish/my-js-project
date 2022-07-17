/*
Constructors:
It is another way of creating objects.

*/

console.clear();

// We have normal functions: they are camelCase. It can return some object -any number, string
function carInfo(brand, model, year){
    return{
        brand, model, year}

};

// we can call it this way: store it in a variable
const carFunction = carInfo('Mercedes','S class',2019);

// we log it:
console.log(carFunction)

// we can get into the function and extract data from it:
console.log(carFunction.brand) // Mercedes
console.log(carFunction.year) // 2019


// Constructor: doing the same using constructor
// Constructors are NOT camelCase. They start with CAPITAL case. Its called PascalCase
// we use this keyword: it is a reference to the object when it is called.
// this is refererring to the objects inside the constructor

function CarInfo(brand,model,year){
this.brand=brand;
this.model=model;
this.year=year;
}

// calling the constructor: I can put it in a constant,
// and pass information during the creation of the constructor
const carConsructor=new CarInfo('Tesla', 'Model X',2021);
console.log(carConsructor);// CarInfo { brand: 'Tesla', model: 'Model X', year: 2021 }
// to get only the brand we can use . notation
console.log(carConsructor.brand);// Tesla
console.log(carConsructor.model);// Model X
console.log(carConsructor.year);// 2021


// NOTE: WE CAN USE BOTH FUNCTIONS OR CONSTRUCTORS
// USAGE AND ACCESSING DATA IS PRETTY MUCH SIMILAR


// another function: Create a function
// function areaOfCircle(r){
//     return {
//         r,
//         result(){
//             console.log('Result')
//         }
//     }
// }

// const myCircleArea1=areaOfCircle(7)

// When creating a constructor:
function AreaOfCircle(r){
    this.r = r;
    this.result = function(){
        console.log('Result :')
    }
}
const myCirlceArea=new AreaOfCircle(10);



const myCircleArea2=new AreaOfCircle(10);
// when we use new keyword:
// 1. it creates an empty object
// 2. then it returns the object from the constructor, wraps ht values of given function and return it as am object


/*
 Create a Person as constructor with 4 params: name, age, hasLicence, language
Name: Jim
age: 20
hasLicence: true
language: English, Spanish, German

Then PRINT ALL of the information one by one
*/
function Person(name, age, hasLicence, language){
    this.name=name;
    this.age=age;
    this.hasLicence=hasLicence;
    this.language=language;

}

const PersonJim=new Person('Jim',20,true,['English','Spanish','German']);
console.log(PersonJim);

console.log(PersonJim.age);// 20
console.log(PersonJim.hasLicence);// true



