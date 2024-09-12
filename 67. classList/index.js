/* 
    classList = Element property in JavaScript used to interact
                with an element's list of classes (CSS classes)
                Allows you to make reusable classes for many elements
                across your webpage.

    add()
    remove()
    toggle(Remove if present, Add if not)
    replace(oldClass, newClass)
    contains()
*/

const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

// ================ add() ================
// myButton.classList.add("enabled");

// ================ remove() ================
// myButton.classList.remove("enabled");

// ================ toggle() ================
/* myButton.addEventListener("mouseover", (event)=>{
    // event.target.classList.add("hover");
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", (event)=>{
    // event.target.classList.remove("hover");
    event.target.classList.toggle("hover");
}); */

// ================ replace() ================
/* myButton.classList.add("enabled");
myButton.addEventListener("click", (event)=>{
    event.target.classList.replace("enabled", "disabled");
}); */

// ================ contains() ================
/* myH1.classList.add("enabled");
myButton.classList.add("enabled");
myH1.addEventListener("click", (event)=>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
});
myButton.addEventListener("click", (event)=>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
}); */

let buttons = document.querySelectorAll(".myButtons");
buttons.forEach((button)=>{
    button.classList.add("enabled");
});
/* buttons.forEach((button)=>{
    button.classList.remove("enabled");
}); */

buttons.forEach((button)=>{
    button.addEventListener("mouseover", (event)=>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach((button)=>{
    button.addEventListener("mouseout", (event)=>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        if(event.target.classList.contains("disabled")){
            // event.target.classList.replace("disabled", "enabled");
            event.target.textContent += '🤬';
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
        
    });
});