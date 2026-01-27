numbers = [10, 20, 30, 40, 50];

console.log(numbers.indexOf(30)); // returns 2
console.log(numbers.indexOf(60)); // returns -1
console.log(numbers.indexOf(50)); // returns -1...returns -1 if the element is not found

console.log(numbers.lastIndexOf(20)); // returns 1
console.log(numbers.lastIndexOf(50)); // returns 4

//Checking if an element exists in the array by comparing the index to -1
if (numbers.indexOf(40) !== -1) {
    console.log("40 is found in the array");
} else {
    console.log("40 is not found in the array");
}

//or
console.log(numbers.indexOf(40) !== -1 );

//Using includes() method
console.log(numbers.includes(20)); // returns true
console.log(numbers.includes(60)); // returns false