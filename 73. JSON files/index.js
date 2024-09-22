/* 
    JSON = (JavaScript Object Notation) data-interchange format
           used for exchanging data between a server and a application
           JSON files (key:value) OR [value1, value2, value3] OR [{}, {}, {}]

           JSON.stringfy() = convert a JS object to a JSON string
           JSON.parse() = converts a JSON string to a JS object
*/

// ==================== stringfy() ====================

/* const names = ["Spongbob", "Patrick", "Squidward", "Sandy"];
console.log(names);

const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["Jellyfishing", "karate", "cooking"],
};
console.log(person);

const people = [
  {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Patrick",
    age: 34,
    isEmployed: false,
  },
  {
    name: "Squidward",
    age: 50,
    isEmployed: true,
  },
  {
    name: "Sandy",
    age: 27,
    isEmployed: false,
  },
];
console.log(people);

// const jsonString = JSON.stringify(names);
// const jsonString = JSON.stringify(person);
const jsonString = JSON.stringify(people);
console.log(jsonString); */

// ==================== parse() ====================

const jsonNames = `["Spongbob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "karate", "cooking"],}`;
const jsonPeople = `[{name: "Spongebob", age: 30, isEmployed: true,},
                {name: "Patrick", age: 34, isEmployed: false,},
                {name: "Squidward", age: 50, isEmployed: true,},
                {name: "Sandy", age: 27, isEmployed: false,},]`;

// console.log(jsonNames);
// const parsedData = JSON.parse(jsonNames);

// console.log(jsonPerson);
// const parsedData = JSON.parse(jsonPerson);

/* console.log(jsonPeople);
const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);
 */


// fetch("person.json")
// fetch("names.json")
fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value)))
// .then(values => values.forEach(value => console.log(value.name)));
// .catch(error => console.error(error));


