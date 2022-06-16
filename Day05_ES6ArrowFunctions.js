console.clear();

// ARROW FUNCTIONS  came with JS ES6

// traditional function
function sum(a){
    return a+100;
}
console.log(sum(9)) // 109

//traditional anonymus fucntion = but we can only call this function if we assign a variable (var sum)
var sum1 = function (a){
    return a+100
}
console.log(sum1(10));// 110

// NOTE ARROW FUNCTION => - NEW !!!
// CASE 1: one argument
// step 1 : remove function keyword(function) and function name(sum)
// step 2 : use => (arrow) symbol BETWEEN THE PARAMETER AND THE BODY
// step 3: use variable and store your function

// function sum(a){
//     return a+100
// }

var arrow = (a) => {
    return a+100;
}
console.log(arrow(300));// 400

// 4. OPTIONAL - we can simplify it further(we can remove the paranthesis () and curly braces {} and return keyword)

var arrow = (a) => a+100;
console.log(arrow(350));// 450

// 5. OPTIONAL - simplifying further  NOTE : WE CAN REMOVE THE PARANTHESIS AROUNF THE PARAMETER IF THERE IS ONLY ONE (1) PARAMETER

var arrow = a => a+100;
console.log(arrow(120));// 220

var squares = x => x*x;
console.log(squares(6));// 36

//==================================================================================

// NOTE ARROW FUNCTION => - NEW !!!
// CASE 2: more than one parameter
// traditional
function sum2(a,b){
    return a+b+100;
}
console.log(sum2(2,3));// 105

// With arrow function

var arrow3=(a,b)=>{
    return a+b+100;
}
console.log(arrow3(5,10));// 115

// OPTIONAL
var arrow3=(a,b)=>a+b+100;
console.log(arrow3(50,50));//200
// NOTE: I cannot remove the paranthesis around the parameters because there are more than 1 one paranmeter


//=======================================================================================

// CASE 3: functions with no parameter
var x=14;y=24;
function sum3(){
    return x+y+100;
}
console.log(sum3(2,3));//138

// anonymus funcion
var sumResult3=function (){
    return x+y+100;
}


// Arrow function-we created arrow function with no parameter
// x and y are already predefined ( see above )
var arrow3=()=>{
    return x+y+100;
}
console.log(arrow3())//138

// OPTIONAL
var arrow4=()=>x+y+100;
console.log(arrow4())// 138
// DONE !!!