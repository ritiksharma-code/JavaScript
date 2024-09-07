/* 
    setTimeout() = function in JavaScript that allow you to schedule
                   the execution of a function after an amount of time (milliseconds)
                   Times are approximate (varies based on the workload of the JavaScript runtime env.)

                   setTimeout(callback, delay);
                   clearTimeout(timeoutId) = can cancel a timeout before it triggers
*/

/* function sayHello(){
    window.alert("Hello");
} */

// setTimeout(function(sayHello, 3000);
// setTimeout(function(){window.alert("Hello")}, 3000);
// setTimeout(()=>window.alert("Hello"), 3000);

// const timeoutId = setTimeout(()=>window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => {
        window.alert("Hello");
    }, 3000);
    console.log("STARTED!");
}


function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED!");
}