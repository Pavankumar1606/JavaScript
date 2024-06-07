const user={
    username:"Pavan",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this.username);
// }

// chai()

// const chai=function (){
//     let username="Pavan"
//     console.log(this.username);

// }
const chai= ()=>{
    let username="Pavan"
    console.log(this);                       

}
// chai()

// const addTwo=(num1, num2)=>{
//    return num1+num2
// }                                             // return is userd when only curly braces====>{}
// const addTwo=(num1, num2)=> num1+num2


const addTwo=(num1, num2)=>  ({username:"Pavan"})     // return is not used for simple brackets


console.log(addTwo(3,4))

const myArray=[2,3,4,5,6]

myArray.forEach()