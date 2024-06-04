

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
// console.log(loginUserMessage("Pavan"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500,2000,3000))

const user={
    username:"Pavan",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:300
})

const myNewArray=[200, 400, 500, 600]

function returnSecondValue(getAarray){
    return getAarray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400, 500, 1000]));