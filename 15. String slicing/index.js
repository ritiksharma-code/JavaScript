// string slicing = creating a substring from a portion of another string

//                  string.slice(start, end)

const fullName = "Ritik Sharma";

/* let firstName = fullName.slice(0, 5);       // ending index is exclusive so it will not be included
console.log(firstName);

let lastName = fullName.slice(6, 12);       // even if we remove the ending index, it will still read to the last index.
console.log(lastName);

lastName = fullName.slice(6);
console.log(lastName);

let firstChar = fullName.slice(0, 1);       // can be used to return the first character
let lastChar = fullName.slice(-1);          // -1 will be the last index, -2 will be second last index and so on
console.log(firstChar);
console.log(lastChar); */

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "ritiksharma@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);