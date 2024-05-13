/* 
Rest parameters = (..rest) allow a function work with a variable number of arguments
                  by bundling them into an array.
                  
                  spread = explands an array into individual elements
                  rest = bundles separate elements into an array

                  opposite of spread operator
*/

/* function openFridge(...foods){
    console.log(...foods);      // use of spread operator
}

function getFood(...foods){
    return foods;               // use of rest operator
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods); */

// program for sum of numbers

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;   // can also be written as result = result + number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`your total is ${total}.`);

// program for average of numbers

function getAverage(...numbers){
    let result = 0;
    let avg = 0;
    for(let number of numbers){
        result += number;
        // avg = result/number;
        // avg = result/numbers.length;
    }
    return result/numbers.length;
}

const avg = getAverage(75, 100, 43, 53, 92, 91, 68);
console.log(`your average is ${avg.toFixed(2)}.`);

// we can also use rest parameters to combine strings together

function combineString(...strings){
    return strings.join(" ");
}

const fullname = combineString("Mr.", "Spongebob", "Squarepants", "III");
console.log(`Hello, ${fullname}.`);