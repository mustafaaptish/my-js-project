/*
  FILTER:
WHEN WE WANT TO USE A CONDITION, WE CAN USE FILTER.
IT WILL ONLY RETURN THE DATA THAT MEETS SPECIFIC CONDITION.

 */

var numbers = [8,1,4,6,12,66];
// return/store numbers that are greater than 10 using filter. filter () is like invisible if statement
// it returns a new array, thats why we have to assign it to const,var or let

const filteredArray=numbers.filter(
    function(eachNumber){
       return eachNumber>10
    }
)
console.log(filteredArray)// [ 12, 66 ]

// arrow function
const filteredArray1 = numbers.filter(eachNumber => eachNumber>10)
console.log(filteredArray1)//[ 12, 66 ]





