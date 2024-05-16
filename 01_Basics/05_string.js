
const gameName=new String('pavan-kumar-pk')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4)

console.log(newString)

const anotherString=gameName.slice(-4, 5)
console.log(anotherString)

const newStringOne="   Pavan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://pavan.com/pavan%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('pavan'))

console.log(gameName.split('-'));