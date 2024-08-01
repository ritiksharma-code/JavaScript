/* 
    nested objects = Objects inside of other Objects.
                     Allows you to represent more complex data structures
                     Child Objects is enclosed by a Parent Object

                     person{Address{}, ContactInfo{}}
                     ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

/* const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bottom",
        country: "Internatinal water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
} */

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",
                                            "Bottom", 
                                            "International waters");

const person2 = new Person("Patrick", 37, "128 Conch St.",
                                            "Bottom", 
                                            "International waters");

const person3 = new Person("Squidward", 45, "126 Conch St.",
                                            "Bottom", 
                                        "International waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
for(const property in person1.address){
    console.log(person1.address[property]);
}