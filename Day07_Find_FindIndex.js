console.clear();

// find();
// it will return the first item that matches the condition

var nums=[5,37,3,-6,11,16,2,90];
var myNum=nums.find(
    eachNum => eachNum > 10
);
console.log(myNum);//37 returned the first number that is greater than 10(our condition)


// findIndex(); will return the index of the item that matches the condition
myNum=nums.findIndex(
    eachNum => eachNum > 10
);
console.log(myNum);// 1 - index of the first number that is greater than 10 is 1.
                    // And this number is 37.But we care about the index only here
