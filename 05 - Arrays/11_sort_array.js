// const numbers = [5, 3, 8, 1, 2];
// numbers.sort();
// console.log(numbers); // Output: [1, 2, 3, 5, 8]

// //Reversing elements in the array
// reversedNumbers = numbers.reverse();
// console.log(reversedNumbers); // Output: [8, 5, 3, 2, 1]

//Sorting objects in an array
const items = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Jim', age: 30 }
];

sorted_items = items.sort(function(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
} 
);

console.log(sorted_items);