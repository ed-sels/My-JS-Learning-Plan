// const numbers = [1, 2, 3, 4, 5];

// const joined = numbers.join(',');
// console.log(joined); // Output: "1,2,3,4,5"

// Stripping strings of white spaces
const code = 'Yo,  I am   learning   JavaScript   ';
const stripped = code.split(' ');
console.log(stripped); // Output: "Yo,IamlearningJavaScript"

//Joining after stripping
const joinedStripped = stripped.join('-');
console.log(joinedStripped); // Output: "Yo,-I-am-learning-JavaScript"