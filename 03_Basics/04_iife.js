//Immediately Invoked Functoin Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);   
})();

((name)=>{
    //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Pavan')