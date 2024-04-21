// RANDOM NUMBER GENERATOR
// Roll dices

/* const min = 50;
const max = 100

let randomNum = Math.floor(Math.random() * (max - min)) + min;      // by multiplying the random function with 6 it will give a random number between 0 and 6 (0,1,2,3,4,5) including decimal places
                                                    // to eliminate decimal portion, we will use the floor method with math function
                                                    // by adding +1 to the full function, we will get the random number starting with 1

console.log(randomNum); */

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}