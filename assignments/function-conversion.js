// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

// arrow syntax 
const myFunction = () => {
    console.log("Function was invoked!");
};
myFunction();

/* streamlined arrow syntax 
 const myFunction = () => console.log("Function was invoked!");
*/

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

// arrow syntax 
const anotherFunction = (param) => {
    return param;
};
anotherFunction("Example");

/* steamlined arrow function
const anotherFunction = param => param;
*/

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

// arrow syntax 
const add = (param1, param2) => {
    return param1 + param2;
};
add(1,2);

/* streamlined arrow syntax
const add = (param1, param2) => param1 + param2;
*/

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

// arrow syntax 
const subtract = (param1, param2) => {
    return param1 - param2;
}; 
subtract(1,2);

/* streamlined arrow syntax 
const subtract = (param1, param2) => param1 - param2;
*/

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);