console.clear();
// Arrays

var ages=[10,14,34,16,10];
console.log(ages);
console.log(typeof(ages));// object

// 5. indexOf(item)             -> this returns the first index of the item
// indexOf(item, startingIndex) -> this returns the first index of the item starting from startingIndex
// lastIndexOf(item)            -> returns the last index of the item
// NOTE: returns -1 if there is no matching data
console.log(ages.indexOf(10));
console.log(ages.indexOf(10,1));// 4 . It will start counting from the 1st index and 10 is on index 4. It skips index 0.
console.log(ages.lastIndexOf(10));// 4 . This is the last index of 10!
console.log(ages.indexOf(100)); // -1 . returns -1 if there is NO DATA (like in Java)


// 6. includes(item)
// includes(item, startingIndex)
// NOTE: returns boolean

console.log(ages.includes(10)); // true
console.log(ages.includes(2)); // false
console.log(ages.includes(10,2)); // true . Checkiong if there is 10 starting from index 2.
console.log(ages.includes(14,2)); // false . Checking if ther is 14 startinf from index 2 .
console.log(ages.includes('apple')); // false

// we can put it in a constant/var/let and log it this way OR we can use in our code when needed
const isExist=ages.includes(50);
console.log(isExist);// false

// create a new array

var fruits=['apple','orange','banana',false,10];
console.log(fruits);


