/* 
    class = (ES6 feature) provides a more structured and cleaner way to work with
            objects compared to traditional constructor functions
            ex. static keyword, encapsulation, inheritance
*/

class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("hat", 100.00);

const salesTax = 0.05;
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);