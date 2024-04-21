/* Ternary operator = a shortcut to if{} and else{} statements
                      helps to assign a variable base on a condition.
                      condition ? codeIfTrue : codeIfFalse;
*/

/* age = 20;
let message = age >= 18 ? "You're an adult!" : "You're a minor!";
console.log(message); */

/* let time = 19;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting); */

/* let isStudent = true;
let message = isStudent ? "You are a student!" : "You are not a student!";
console.log(message); */

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount-purchaseAmount * (discount/100)}`);