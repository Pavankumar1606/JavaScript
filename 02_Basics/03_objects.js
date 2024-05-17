//singleton
//Object.create           //another way of creating aan object bit it also creates a constructer

//object literals
const mySym=Symbol("key1")

const JsUser={
    name:"Pavan",
    "full name":"kumar",
    [mySym]:"myKey1",
    age:23,
    location:"Hyderabad",
    email:"pavan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="Pavan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="Pavan@google.com"
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);  // we use "this" keyword to refernce the same object which we were in. 
}
console.log(JsUser.greeting());  // greeting fives function reference 
                                 // greeting() executes the functoin and gives output
console.log(JsUser.greetingTwo());