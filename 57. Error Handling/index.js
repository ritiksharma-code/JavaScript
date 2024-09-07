/* 
    Error = An Object that is created to represent a problem that occurs
            Occur often with user input or establishing a connection

            NETWORK ISSUES
            PROMISE REJECTION
            SECURITY ERRORS

    Error Handling:
    try{ } = Encloses code with might potentially cause an error
    catch{ } = Catch and handle any thrown Errors from tty{ }
    finally{ } = (optional) Always executes. Used mostly for clean up
                 ex. close files, close connections, release resources
*/

// console.lag("Hello");   // TypeError
// console.log(x);         // x is not defined

/* try{
    console.log(x);
    // NETWORK ISSUES
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!") */


try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by 0.")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number.");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error)
}
console.log("You have reached the end!")