/* 
    constructor = special methods for defining the properties and methods of objects
*/

/* function Car(a, b, c, d)
{
    this.make = a,
    this.model = b,
    this.year = c,
    this.color = d
} */

function Car(make, model, year, color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Audi", "R8", 2023, "blue");
const car3 = new Car("Dodge", "Challenger", 2025, "silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();