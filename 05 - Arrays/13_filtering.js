const numbers = [5, 3, 8, 1, 2];

// Filter numbers greater than 3
const filtered_numbers = numbers.filter(n => n > 3);

// console.log(filtered_numbers); // Output: [5, 8]

//Mapping the array
const items = filtered_numbers.map(n => '<li>' + n + '</li>');
console.log(items); // Output: ['<li>5</li>', '<li>8</li>']

//Joining the array elements into a string
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html); // Output: <ul><li>5</li><li>8</li></ul>

//Mapping to an object
const mapped_objects = filtered_numbers.map(n => ({ value: n }));
console.log(mapped_objects); // Output: [ { value: 5 }, { value: 8 } ]