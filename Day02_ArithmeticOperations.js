


/*
Arithmetic operations
+, -, *, /,%,++, --, **
% remainder / modulus

x++ : post increment. first use x, then add 1
++x : pre increment. first add 1, then use x

x-- : post decrement. first use x, then substract 1
--x : pre decrement. first substract 1, then use x

*/

console.clear();

let x=12;
let y=3;

console.log(x++);  // 12
console.log(x);   //  13
console.log(++x);  // 14

x++ // x=x+1
console.log(x) //15

x+=5 //x=x+5
console.log(x)//20

x*=2 //x=x*2
console.log(x)//40

x/=3
console.log(x)



console.log(y--); //3
console.log(y)   //2
console.log(--y) //1

y+=9
console.log(y) //10

y%=3 // remainder  = 1

console.log(y) // 1

y%=4 // remainder  = 2
console.log(y+ ' this should be 2')


console.log(y**3)



