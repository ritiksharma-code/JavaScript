/* 
    eventListener = Listen for specific events to create interactive web pages
                    events: click, mouseover, mouseout
                    .addEventListener(event, (arrow function/callback/anonymous function));
*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// --------- click ---------
myButton.addEventListener("click", (event)=>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

// --------- mouseover ---------
myButton.addEventListener("mouseover", (event)=>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😮";
});

myButton.addEventListener("mouseout", (event)=>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me😃";
});