/* 
    .reduce() = reduce the elements of a array to a single value
*/

/* const prices = [5, 10, 30, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next)
{
    return previous + next;
} */

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element)
{
    return Math.max(accumulator, element);
}

function getMin(accumulator, element)
{
    return Math.min(accumulator, element);
}