/* 
    DOM navigation = The process of navigating through the structure of an HTML document using JavaScript

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

// ---------- .firstElementChild ----------

/* const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; */

/* const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}) */

// ---------- .lastElementChild ----------

/* const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow"; */

/* const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
}) */

// ---------- .nextElementSibling ----------
// next sibling of last child does'nt exist

/* const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; */

// ---------- .previousElementSibling ----------
// previous sibling of first child doesn't exist

/* const element = document.getElementById("vegetables");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow"; */

// ---------- .parentElement ----------

/* const element = document.getElementById("carrots");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow"; */

// ---------- .children ----------
const element = document.getElementById("fruits");
const children = element.children;
// console.log(children);
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow"
})