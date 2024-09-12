/* 
    NodeList = Static collection of HTML elements by (id, class, element)
               can be created by using querySelectorAll()
               Similar to an array, but no (map, filter, reduce) but have forEach()
               NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// ================ ADD HTML/CSS PROPERTIES ================

/* buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😃";
}); */

// ================ CLICK EVENT LISTENER ================

/* buttons.forEach(button => {
    button.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "tomato";
    });
}); */

// ================ MOUSEOVER + MOUSEOVER EVENT LISTENER ================

/* buttons.forEach(button => {
    button.addEventListener("mouseover", (event)=>{
        event.target.style.backgroundColor = "hsl(202, 100%, 40%)";
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", (event)=>{
        event.target.style.backgroundColor = "hsl(202, 100%, 60%)";
    });
}); */

// ================ ADD AN ELEMENT ================

/* const newButton = document.createElement("button");     // STEP 1
newButton.textContent = "Button 5";                     // STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton);                   // STEP 3

buttons = document.querySelectorAll(".myButtons");      // we have to update it manually because nodeLists are static collection.
console.log(buttons); */

// ================ REMOVE AN ELEMENT ================

buttons.forEach(button => {
    button.addEventListener("click", (event)=>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");  // manually update the nodeList again
        console.log(buttons);
    })
})