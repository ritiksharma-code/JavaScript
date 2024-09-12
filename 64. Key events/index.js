/* 
    eventListener = Listen for specific events to create interactive web pages
                    events: keydown, keypress
                    .addEventListener(event, (arrow function/callback/anonymous function));
*/

const myBox = document.getElementById("myBox");
const moveAmount = 30;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event)=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

document.addEventListener("keydown", (event)=>{
    // console.log(event);
    // console.log(event.key);
    // console.log(`Key down = ${event.key}`);
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event)=>{
    // console.log(`Key up ${event.key}`);
    myBox.textContent = "😃";
    myBox.style.backgroundColor = "lightblue";
});
