// const = a variable that can't be changed once you assigned them

const PI = 3.14159;     // the naming convention for constants is in all uppercase if (Primitive Datatype) Number or boolean, String does not follow this convention
let radius;
let circumference;

/* radius = window.prompt("Enter the radius of a circle.");     // Window prompt method
radius = Number(radius);

circumference = 2 * PI * radius; */

document.getElementById("mySubmit").onclick = function(){       // HTML input method
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}