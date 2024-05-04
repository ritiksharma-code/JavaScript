/* Functions - A section of reusable code.
                Declare code once, use it whenever you want.
                Call the function to execute that code. */

/* function sayHello(username, age){
    console.log("Hello!");
    console.log(`Hello ${username}!`);
    console.log(`You are ${age} years old!`);
}

sayHello("Ritik", 20);
sayHello("Manas", 21);
sayHello("Vansh", 19); */

function add(x, y){
    let result = x + y;
    return result;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    /* if(number%2 === 0){
        return true;
    }
    else{
        return false;
    } */

    return number % 2 === 0 ? true : false;
}

let answer = add(2, 3);
console.log(answer);

console.log(subtract(5, 2));

console.log(multiply(4, 2));

console.log(divide(12, 4));

console.log(isEven(11));

// email is valid function

function isValidEmail(email){
    /* if(email.includes("@")){
        return true;
    }
    else{
        return false;
    } */

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("ritiksharma0405@gmail.com"));