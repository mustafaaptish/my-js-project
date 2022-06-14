

/*
MAP
-a method of an array
-takes function as a parameter
-returns a new array by using each item from the original array

*/

console.clear();
// let me define an array
var numbers=[3,56,2,48,5]


//1. function to calculate items * 2
function double(x){
    return x*2
}

// How to use this function with MAP? What we can do here is to use the array map () method
// map() will take a function and we can pass the function name in ()- it will take the items inside the function
// and return a new array. We do not need to create a loop to do that
/*
getting each number from numbers array
and using inside the double function
we are adding >>> newNumbers1 array as a new array <<<
*/
const newNumbers1=numbers.map(double)
console.log(newNumbers1)// [ 6, 112, 4, 96, 10 ] - it takes the items from numbers array and *2

//example
const testArray=[5,6,7,8].map(double);
console.log(testArray);// [ 10, 12, 14, 16 ]

//another one
var testArray2=[3,4].map(double);
console.log(testArray2)// [ 6, 8 ]

// we can also pass the whole function directly inside the map. The ruslt will be the same
const newNumbers2=numbers.map(
    function double(x){
        return x*2
    }
)
console.log(newNumbers2);// [ 6, 112, 4, 96, 10 ]

// Arrow functions with Map
// the meaning of this is: get each number from numbers array and multiply by 3 and store in newNumbers3 array
const newNumbers3=numbers.map(x => x*3) // this is automatically returning an array
console.log(newNumbers3)// [ 9, 168, 6, 144, 15 ]


// NOTE How can I achieve the same thing without map function?
// using forEach loop - it is powerful
// 1. we create empty array
const newNumbers4=[];
// 2. we can push each item inside this array (push method).
// we take all the numbers from numbers array
// and push "x*3" expression inside the newNumbers4 array. We have to store it somewhere, thats why we created >> const newNumbers4=[];

numbers.forEach(
    x => newNumbers4.push(x*3)
)
console.log(newNumbers4)// [ 9, 168, 6, 144, 15 ]

// ⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡ - this is not neccessary when we can use map ()


// =============================

