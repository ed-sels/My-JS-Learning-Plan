//String primitive
const str1 = "Hello, World!";

//String object
const str2 = new String("Hello, World!");

//Accessing string properties and methods
console.log(str1.length); //Length of the string
console.log(str1.toUpperCase()); //Convert to uppercase
console.log(str1.indexOf("World")); //Find index of substring
console.log(str1.slice(0, 5)); //Extract substring

//Comparing string primitive and string object
console.log(typeof str1); // "string"
console.log(typeof str2); // "object"
console.log(str1 === str2); // false
console.log(str1 == str2); // true
console.log(str1.includes("Hello")); // true
