const numbers = [5, 3, 8, 1, 2];

// let sum = 0;
// for(let n of numbers)
//     sum += n;

// console.log(sum)
//Using the reduce function
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);