// === compares VALUES  and DATA Types.If both true then return true,
// otherwise returns false

// == compares only the values

const s1=5; //data type of s1 is number

console.log(s1==5);//true
console.log(s1=='5');//true

console.log(s1===5);//true
console.log(s1==='5');//false

console.log(s1!=='5');//true


var light='green'
if(light==='green'){
    console.log('go')
}else{
    console.log('stop')
}

// if there is NO character inside the if statement
// --> (0, false, null, undefined "", Nan) ==> result is false

if(0){
    console.log(true)
}else{
    console.log(false)
}


