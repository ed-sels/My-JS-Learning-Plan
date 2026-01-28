// let numbers = [1,2,3,4,5]

//Method 1: Setting length to 0
// numbers = []
// console.log(numbers);

// Method 2: Using splice
numbers = [1,2,3,4,5]
// numbers.splice(0, numbers.length)
// console.log(numbers);

//Method 4: Using pop method
//Not recommended when the array has a lot of elements due to performance issues
while(numbers.length > 0){
    numbers.pop();
}
console.log(numbers);