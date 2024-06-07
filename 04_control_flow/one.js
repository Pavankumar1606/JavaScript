// if

// const isUserLoggedIn=true
// const temperature=41

// if(temperature===52){
//     console.log("less than 50");
// }else{
//     console.log("temperature is grater than 50");
// }
// console.log("Executed");
//<,>,<=,>=,==,!=,==,!==

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power${power}`);
// }
// console.log(`user power${power}`);


const balance=1000

// if(balance>500)console.log("test"),console.log("test2");

// if(balance<500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less then 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitcard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn&&debitcard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle|| loggedInFromEmail){
    console.log("User logged in");
}
