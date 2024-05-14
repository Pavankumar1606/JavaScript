// Primitive datatypes

// 7 types: String , Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id==anotherId)

const bigNumber=11111111111111111111111n    // BigInt example



//Refernce (Non primitive)

//Array, Objects, Functions

const heros=["pavan", "kumar", "uday", "kiran"]; //Array
let myObj={
    name:"hitesh",
    age:23,    
}                                               // Object

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof scoreValue)

