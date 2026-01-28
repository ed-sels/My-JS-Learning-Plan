const first = [1, 2, 3];
const second = [4, 5, 6];

//Combining two arrays
const combined = first.concat(second);
console.log('Combined Array:', combined);

//Slicing an array
const slice = combined.slice(1, 4); // from index 1 to index 4 (not inclusive)
console.log('Sliced Array:', slice);

//Slicing from a specific index to the end
const sliceToEnd = combined.slice(2);
console.log('Sliced to End Array:', sliceToEnd);

// for reference types of array methods used in other files
// concat() - combines two or more arrays and returns a new array
// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)      
