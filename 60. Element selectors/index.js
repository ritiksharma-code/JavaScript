/* 
    element selectors = Methods used to target and manipulate HTML elements
                        They allow you to select one or multiple HTML elements
                        from the DOM (Document Object Model)

    1. document.getElementById()            ELEMENT OR NULL
    2. document.getElementsClassName()      HTML COLLECTION
    3. document.getElementsBytagName()      HTML COLLECTION
    4. document.querySelector()             ELEMENT OR NULL
    5. document.querySelectorAll()          NODELIST
*/

/* const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = 'yellow';
myHeading.style.textAlign = 'center';
console.log(myHeading);

const fruits = document.getElementsByClassName("fruits"); */
// console.log(fruits);
// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "red";
// fruits[2].style.backgroundColor = "blue";

// Iterating using advanced for loop
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// HTML collections can't use forEach() so we have to typecast to an array
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
// });

/* const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements); */
// h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

/* Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});  */

// const element = document.querySelector(".fruits");
// const element = document.querySelector("ol");        // no matches, so NULL
// console.log(element);
// element.style.backgroundColor = "yellow";

/* const fruits = document.querySelectorAll(".fruits");
fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "red"; */

const foods = document.querySelectorAll("li");
/* foods[0].style.backgroundColor = "yellow";
foods[1].style.backgroundColor = "red";
foods[2].style.backgroundColor = "blue";
foods[3].style.backgroundColor = "green";
foods[4].style.backgroundColor = "grey";
foods[5].style.backgroundColor = "purple"; */
console.log(foods);     // it will give us a nodelist
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});