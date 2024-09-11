/* 
    DOM = DOCUMENT OBJECT MODEL
    Object() that represents the page you see in the web browser
    an provides you with an API to interact with it.
    Web browser constructs the DOM when it loads an HTML document,
    and structures all the elements in a tree-like representation.
    JavaScript can access the DOM to dynamically change the content,
    structure, and style of a web page.
*/

// document.getElementById("")
/* document.title = "My Website"
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

console.log(document);
console.dir(document); */

const username = "Ritik Sharma";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;