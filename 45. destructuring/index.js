/* 
    destructuring = extract values from arrays and objects,
                    then assigh them to variables in a convenient way
                    [] = to perform array destructuring
                    {} = to perform object destructuring
                    5 examples
*/

/* 
    ---------- EXAMPLE 1 ----------
    SWAP THE VALUES OF TWO VARIABLES
*/

let a = 1;
let b = 2;

// destructuring = creating an array
[a, b] = [b, a];

console.log(a);
console.log(b);

/* 
    ---------- EXAMPLE 2 ----------
    SWAP 2 ELEMENTS IN AN ARRAY
*/

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

/* 
    ---------- EXAMPLE 3 ----------
    ASSIGN ARRAY ELEMENTS TO VARIABLES
*/

const cars = ["audi", "mercedes", "porshe", "ferrari", "lamborghini"];

const[firstCar, secondCar, thirdCar, ...extraCars] = cars;

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
console.log(extraCars);

/* 
    ---------- EXAMPLE 4 ----------
    EXTRACT VALUES FROM OBJECTS
*/

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

/* const {firstName, lastName, age, job} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); */

const {firstName, lastName, age, job="Unemployed"} = person2; // unemployed is a default value, if there is no value in job variable
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

/* 
    ---------- EXAMPLE 5 ----------
    DESTRUCTURE IN FUNCTION PARAMETERS
*/

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
