/*
 * Rounding numbers

Math.ceil(number) -> rounds up
Math.floor(number) -> rounds down
Math.round(number) -> rouns to closest whole number
number.ToFixed(numofdigit) -> rounds to the number of digit

 */
console.clear();

let myFavNum=15.4567;

let ceiledNum = Math.ceil(myFavNum);
console.log('Ceiled number: '+ ceiledNum);//16

let flooredNum = Math.floor(myFavNum);
console.log("Floored number: "+ flooredNum);//15

let roundedNum = Math.round(myFavNum);
console.log("Rounded number: "+ roundedNum)//15

let fixedNum = myFavNum.toFixed(2);
console.log("To fixed: " + fixedNum);


