//If number is divisible by 3, return "Fizz".
//If number is divisible by 5, return "Buzz".
//If number is divisible by both 3 and 5, return "FizzBuzz".
//If number is not divisible by either 3 or 5, return the input.
let output = FizzBuzz(15);
console.log(output); // FizzBuzz

function FizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';

    if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}