/*
REDUCE function:
the format is like:
array.reduce((accumulator, eachItemInTheArray)) => {
    functionBody}

-it accumulates (increments) the values
-is used to hold onto the accumulated value
-reduce() iterates (loops through the data) and accumulates the array values.
We can hold onto the each number from the array
*/
console.clear();
// this is how it works
// eachNumber  :  8,     1,           4,                 6,                12,                    66
// accumulator :  8,   8+1=9,      8+1+4=13,         8+1+4+6=19,      8+1+4+6+12=31,      8+1+4+6+12+31+61=97
var numbers = [8,1,4,6,12,66];

const result=numbers.reduce(
    function(accumulator,eachNumber){
        return accumulator+eachNumber
    }
)
console.log(result)// 97

// using arrow function
const result1=numbers.reduce(  (accumulator,eachNumber) => accumulator+eachNumber)
console.log(result1)//97

let myNums=[1,2,3,4,5,6,7,8,9];
const newArray=myNums.reduce((accumulate, allNumbers) => accumulate+allNumbers);
console.log(newArray);// 45


