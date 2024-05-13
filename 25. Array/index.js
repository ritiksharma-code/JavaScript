// array = a variable like structure that can hold more than 1 value

let fruits =  ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "coconut"

console.log(fruits[1]);
console.log(fruits);

fruits.push("orange");      // adds an element at the end of the array
console.log(fruits[3]);
console.log(fruits);

fruits.pop();               // removes an element from the end of the array
console.log(fruits);

fruits.unshift("mango");    // adds an element to the beginning of the array
console.log(fruits);

fruits.shift();             // removes an element from the beginning of the array
console.log(fruits);

let numOfFruits = fruits.length;    // .length property is used to get the length of the array
console.log(numOfFruits);

let index = fruits.indexOf("apple");       // returns the index of the given value in an array
console.log(index);                         // returns -1 if the element not found


for(let i = 0; i < fruits.length; i++){     // printing the elements in an array using for loop
    console.log(fruits[i]);
}

console.log("---------------");

for(let i = fruits.length - 1; i >= 0; i--)     // printing the elements in an array in reverse using for loop
{
    console.log(fruits[i]);
}

console.log("---------------");

for(let fruit of fruits)            // enhanced for loop for printing the elements of an array
{
    console.log(fruit);
}

console.log("---------------");

fruits.sort();          // sorts the elements in an array in alphabetical order
console.log(fruits);

console.log("---------------");

fruits.sort().reverse();    // sorts the elements in an array in reverse alphabetical order
console.log(fruits);