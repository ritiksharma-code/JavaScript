// string methods = allow you to manipulate and work with text (strings)

let userName = "ritiksharma-code";

console.log(userName.charAt(0));        // character at index 0

console.log(userName.indexOf("t"));     // first occurence of t / returns index

console.log(userName.lastIndexOf("a"));     // last occurence of a / returns index

console.log(userName.length);       // returns the length of a string

userName = "    ritiksharma-code"

userName = userName.trim();     // trims the white spaces at the start and end of the string
console.log(userName);

userName = userName.toUpperCase();      // converts to all uppercase
console.log(userName);

userName = userName.toLowerCase();      // converts to all lowercase
console.log(userName);

userName = userName.repeat(3);          // repeats the string given number of times
console.log(userName);

userName = " ritiksharma-code";
let result = userName.startsWith(" ");      // returns a boolean value if the string starts with a specific character or not.
console.log(result);
if(result){
    console.log("Your username can't begin with ' '.");
}
else{
    console.log(userName);
}

userName = "ritiksharma-code";
result = userName.endsWith("e");            // returns a boolean value if the string ends with a specific character or not.
console.log(result);

userName = "ritiksharma code";
result = userName.includes(" ");
console.log(result);
if(result){
    console.log("Your username can't include ' '.");
}
else{
    console.log(userName);
}


let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);       // pad the string with 0s until its 15 characters long

phoneNumber = "1234567890"
phoneNumber = phoneNumber.padEnd(15, 7);
console.log(phoneNumber);