// Love calculator

// Step 1: get names from user

var name1=prompt('Enter your name')
var name2=prompt('Enter your crushes name')

// Step 2: get random number
var loveScore=Math.random()*100;
console.log(loveScore);// this will give us between 0-0.999

// Step 3: get numbers from 0-100
loveScore=Math.ceil(loveScore);

console.log(`${name1} and ${name2} has a love score of ${loveScore}`);
// Step 4: complete the if statements
if(loveScore>=80){
    console.log('you love each other')
     }else if(loveScore>=50 && loveScore,+80){
         console.log('moderate love')
     }else{
         console.log('not a strong relationship')
     }
