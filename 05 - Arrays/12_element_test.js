const numbers = [5, -1, 3, 8, 1, 2];

// Thhe every() method tests whether all elements in the array pass the test implemented by the provided function.
const positiveNumbers = numbers.every(function(value) {
    return value >= 0;
});

console.log(positiveNumbers); // Output: true

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
const hasNegativeNumber = numbers.some(function(value) {
    return value < 0;
});

console.log(hasNegativeNumber); // Output: true

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const includesThree = numbers.includes(3);
console.log(includesThree); // Output: true