/* How to accept user input
    1/ Easy way  = window prompt
    2. Professional way = HTML textbox */


// WINDOW PROMPT
/* let username= window.prompt("What's your username?");;
console.log(username); */

// input via HTML
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}