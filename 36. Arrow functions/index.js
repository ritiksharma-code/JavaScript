/* 
    arrow functions = a concise way to write function expressions good for
                      simple functions that you use only once (parameters) => some code    
*/

/* function hello()
{
    console.log("Hello!");
} */

// without arrow function:

/* const hello = function(){
    console.log("Hello!");
} */

// with arrow function:

/* const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old!`)};

hello("Ritik", 20); */


// setTimeout(() => console.log("Hello!"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);