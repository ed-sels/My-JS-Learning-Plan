numbers = [10, 20, 30, 40, 50];
console.log(numbers); // Output: [10, 20, 30, 40, 50]

// Add element to the end of the array
numbers.push(60);
console.log(numbers); // Output: [10, 20, 30, 40, 50, 60]

//Add elements to the beginning of the array
numbers.unshift(0);
console.log(numbers); // Output: [0, 10, 20, 30, 40, 50, 60]

//Add elements to any given index of the array
numbers.splice(3, 0, 25); // Insert 25 at index 3...the 0 argument means no elements are removed
console.log(numbers); // Output: [0, 10, 20, 25, 30, 40, 50, 60]