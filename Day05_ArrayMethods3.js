// 7. splice
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// splice(start)
const months = ['Jan', 'March', 'April', 'June'];
//months.splice(1);// [ 'Jan']
console.log(months);// [ 'Jan' ] -> deletes everything after first index


// splice(start, deleteCount)
//months.splice(1,2); // deletes ONLY 2 after the first index INCLUDING the first index
console.log(months);// [ 'Jan', 'June' ]
//months.splice(1,1); // means: START from index 1 and DELETE ONLY 1 item
console.log(months);// [ 'Jan', 'April', 'June' ]
//months.splice(2,1);// deletes April
console.log(months);// [ 'Jan', 'March', 'June' ]
//months.splice(2,2);
console.log(months);// deletes last two

// splice(start, deleteCount, item1) - this will insert an item
//months.splice(2,1,'September');// it will delete ONLY 1 item AFTER second INDEX + it WILL INSERT 'September' in SECOND index
console.log(months);

// splice(start, deleteCount, item1, item2, itemN)
// months.splice(2,1,'May','June','July','August'); // it will INSERT all of these elements in the place of index 2
console.log(months); // [ 'Jan', 'March', 'May', 'June', 'July', 'June' ]

// inserting data WITHOUT DELETING anything. splice(2,0,'someData') => when we put 0 we do NOT delete anything.
//                                             This makes the delete action.If its 0 we do not delete anything.
// months.splice(2,0,'May','June','July','August');
// console.log(months); //   ['Jan', 'March','May', 'June', 'July', 'August', 'April', 'June']

//months.splice(2,0,'May','June'); // inserting 'May','June' from second index WITHOUT DELETING any data
//console.log(months); // [ 'Jan', 'March', 'May', 'June', 'April', 'June' ]

// NOTE negative number means starting from the last index
//months.splice(-4,2);// go to -4 index (4th index from back and delete 2 items)
console.log(months);// [ 'April', 'June' ]



// 8. concat - combines arrays
var cars=['audi','bmw','mercedes','jaguar','land rover'];
var drinks=['water','coke','whiskey','beer','tea','coffee'];
const combo = cars.concat(drinks);
console.log(combo); // ['audi','bmw','mercedes','jaguar','land rover','water','coke','whiskey','beer','tea','coffee']


// 9. slice(startIndex(included),endIndex(excluded)) - this will cut certain part of the array. Similir to substring
var slicedArray=combo.slice(1,5);
console.log(slicedArray);//[ 'bmw', 'mercedes', 'jaguar', 'land rover' ]

var myCombo=combo.slice(2); // returns from index 2 till endIndex
console.log(myCombo);


const slicedCars=cars.slice(-1); // start from the end index and return the last index of that array
console.log(slicedCars); //'land rover'

//NEXT PART