/*  Type Conversion = change te datatype of a value to another
                      (strings, numbers, booleans)
*/

/* let age = window.prompt("How old are you?");
age = Number(age);      // So to prevent it, we will convert the String to Number type using Number function

age+=1;

console.log(age, typeof age);       // when input is 20, the input is 201 (20+1) because 20 is a String datatype
 */

let x = "pizza";
let y = "pizza";
let z = "pizza";

// When x, y & z is not defined the x will be NaN, y will be undefined and z will be false

x = Number(x);          // NaN = Not a Number
y = String(y);
z = Boolean(z);

console.log(x, typeof x);       // NaN = Not a Number
console.log(y, typeof y);
console.log(z, typeof z);