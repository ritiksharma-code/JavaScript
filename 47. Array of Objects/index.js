// Array of Objects

const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}]

console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

/* fruits.push({name: "grapes", color: "purple", calories: 62});

console.log(fruits);

fruits.pop();
console.log(fruits); */

// fruits.splice(1, 2);
console.log(fruits);

// -------------- forEach() ---------------

/* fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories)); */

// -------------- map() -------------------

/* const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories); */

// -------------- filter() ----------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruits);

const highCalFruits = fruits.filter(fruit => fruit.calories >=100);
console.log(highCalFruits);

// -------------- reduce() ----------------

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);
console.log(maxFruit);
console.log(maxFruit.calories);

const minFruit = fruits.reduce((min, fruit) =>
                                fruit.calories < min.fruit ?
                                fruit : min)
console.log(minFruit);
console.log(minFruit.calories);