console.clear();

var friendList=['sam','tom','tim','john','bob'];

// 1. push()    : add element at the end of the array
friendList.push('Margarita');
console.log(friendList);// [ 'sam', 'tom', 'tim', 'john', 'bob', 'margarita' ]

// 2. unshift() : add element at the beginning of the array
friendList.unshift('Mustafa');
friendList.unshift(4);//   [ 4, 'Mustafa', 'sam', 'tom', 'tim', 'john', 'bob', 'Margarita' ]
console.log(friendList);// [ 'Mustafa', 'sam', 'tom', 'tim', 'john', 'bob', 'Margarita' ]

// 3. pop()     : remove the last element of the array
friendList.pop()
console.log(friendList);// [ 4, 'Mustafa', 'sam', 'tom', 'tim', 'john', 'bob' ]

// 4. shift()   : remove the first element of the array
friendList.shift();
console.log(friendList);// [ 'Mustafa', 'sam', 'tom', 'tim', 'john', 'bob' ]
