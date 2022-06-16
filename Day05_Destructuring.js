/*
1. Object DESTRUCTURING
2. FUNCTION DESTRUCTURIG
3. Array DESTRUCTURING
*/

console.clear();

// Normal way to read data from aray
const x = [1,2,3,4,5];
console.log(x[2]);

//Desctructuring
const [y,z]=x;
console.log(y);//1
console.log(z);//2

//===================================

// OBJECT DESTRUCTURING overview

const user = {
    id: 42,
    isVerified: true
};

//traditional way to get data
console.log(user.id);
console.log(user['id']);

// we are using {} to destructure- [] is for arrays, {} is for objects.
// we are taking id and isVerified object out of user object
const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true


// DESTRUCTURING:
// - Array DESTRUCTURING
// - Object DESTRUCTURING

console.clear();
//NOTE 1. Object DESTRUCTURING
// I will create a user object and it will have the following data:

const users={
    fName:'Sam',
    location:'Dallas',
    email:'sam@fakeemail.com'
}

console.log(users.fName);
console.log(users.location);
console.log(users.email);

// OR

// var myName=users.fName;
// var myLocation=users.location;
// var myEmail=users.email;

// console.log(myName);
// console.log(myLocation);
// console.log(myEmail);

// these are the traditional ways ↑↑↑↑↑↑↑↑↑↑

// Destructuring the objects
// benefit is that we can access the data directly without . or [] notation
// NOTE: key names MUST match to the original object - otherwise data will be undefined
var {fName,location} = users // i destructured the users data - i only took fName and location from it
console.log(fName)//Sam
console.log(location);// Dallas


//=========================================

//NOTE 2.FUNCTION DESTRUCTURING
// we sre dtoring the user info inside the function
function getUser(){
    return {
        name2:'Johny',
        location2:'Mexico',
        email2:'johny@gmail.com'
    }
}

// destructrurig the function
var {name2,location2,email2}=getUser();
// now I can get each of the single data after I assigned the function into an object. It returns an object
console.log('name :'+name2,'location :'+location2,'email :'+email2);

// NOTE 3.ARRAY DESTRUCTURING
// I am creating an array
var user1 = ['tim','LA','tim@yahoo.com'];
//without destructuring
var userName=user1[0]
var locationTim=user1[1]
var emailTim=user1[2]
console.log(userName)
console.log(locationTim)
console.log(emailTim)


// with destructuring
var [userName,locationTim,emailTim] = user1 // thats it
// I can reach the data without using indexes now
console.log(userName)
console.log(locationTim)
console.log(emailTim)

// we can change the variable names in the arrays UNLIKE objects as there arent't keys here.(objects have keys to match(key=value), arrays dont)
var [userName,userLocation,userEmail] = user1
console.log(userName)
console.log(userLocation)
console.log(userEmail)