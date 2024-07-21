/* 
    Object = A collection of related properties and/or methods can represent
               real world objects (people, products, places)
               object = {key:value,
                         function()}
*/

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log("Hi! I am Spongebob!")},
    eat: () => {console.log("I'm eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey, I'm Patrick...")},
    eat: () => {console.log("I'm eating a pizza")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();