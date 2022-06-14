/*
  FOR EACH LOOP:
-array.forEach(function parameter)
-Normal for loop does not take function parameter
-forEach loop will give the entire data from array without using index
-When we need to use index, then use regular for loop
 */
console.clear();



const array1 = ['a','b','c'];
const array2 = [1,2,3];

// to get all the data from array1
array1.forEach(
    function(eachItem){
        console.log(eachItem) // this prints a b c in order
    }
)

// to get all the data from array2
array2.forEach(eachItem =>  console.log(eachItem))// 1 2 3

