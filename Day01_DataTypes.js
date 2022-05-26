/*
Primitive Data Type in JS
string, number, boolean, null, undefined
*/

// string
console.clear()
var myName = 'javascript'

console.log(typeof(myName))

// number - it is known as number literal
// we only have number datatype. No int, double, byte...

var myNum=20
console.log(typeof(myNum))

var myNum=20.9
console.log(typeof(myNum))

var myNum=-20.9
console.log(typeof(myNum))

var myNum=20/0// Infinity is considered as a number
console.log(myNum)
console.log(typeof(myNum))

//num+string
var num1 = 20+'a'
console.log(num1) //20a
console.log(typeof(num1)) // string

//string+num
var num2 = 'a'+20
console.log(num2) // a20
console.log(typeof(num2)) // string


/*
boolean:
True or False
*/

var isExist=true;
console.log(isExist)
console.log(typeof(isExist))

var isExist=false;
console.log(isExist)
console.log(typeof(isExist))

/*
null
*/

var pickedColor=null
console.log(pickedColor);// null
console.log(typeof(pickedColor)) //object


// undefined
var selectedCar
console.log(selectedCar); // undefined
console.log(typeof(selectedCar)) // undefined

var selectedCar=undefined; // same as not assigning anything. But we can do it explicitly
console.log(selectedCar) // undefined
console.log(typeof(selectedCar)) // undefined


let age=10;
console.log(age)

age=11;
console.log(age)



