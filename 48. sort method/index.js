/* 
    sort() = method used to sort element of an array in place.
             sorts elements as strings in lexicographic order, not alphabetical
             lexicographic = (alphabets + numbers + symbols) as strings
*/

/* let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2 , 9, 3, 8, 4, 7, 5, 6];

fruits.sort();
console.log(fruits);

// numbers.sort();         // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] 
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);          // reverse order
console.log(numbers);
 */


const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}]

// people.sort((a, b) => a.age - b.age);
// console.log(people);
// people.sort((a, b) => b.age - a.age);
// console.log(people);

// people.sort((a, b) => a.gpa - b.gpa);

people.sort((a, b) => a.name - b.name);
console.log(people);