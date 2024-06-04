

function sayMyName(){
    console.log("P");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("n");
}
// sayMyName

// function addTwoNumbers(number1, number2){
//    console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
//   let result=number1+number2
//   console.log("Pavan");

return number1+number2
}

const result=addTwoNumbers(3,5)

// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pavan"))
console.log(loginUserMessage("Pavan"))
console.log(loginUserMessage("Pavan"))
