/* spread operator = ... allows an iterable such as an array
                     or string to be expanded into seperate
                     elements (unpacks the elements)
*/

/* let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);     // if not using spread operator, it will return NaN
let min = Math.min(...numbers);     // if not using spread operator, it will return NaN
console.log(numbers);
console.log(max);
console.log(min); */

let username = "Ritik Sharma";
let letters = [...username];
console.log(letters);

letters = [...username].join("-");
console.log(letters);

console.log("---------------------------------");

let fruits = ["apple", "banana", "mango"];
let vegetables = ["potato", "onion", "tomato"];
console.log(fruits);
console.log(vegetables);

let newfruits = [...fruits];
console.log(newfruits);

let foods = [...fruits, ...vegetables, "eggs", "milk"];     // combining two arrays and adding more elements
console.log(foods);