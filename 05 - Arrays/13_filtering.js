const numbers = [5, 3, 8, 1, 2];

// Filter numbers greater than 3
const filtered_numbers = numbers.filter(value => {
    return value > 3;
});

console.log(filtered_numbers); // Output: [5, 8]

//Mapping the array
filtered_numbers.map(value => {
    console.log(value * 2);
});