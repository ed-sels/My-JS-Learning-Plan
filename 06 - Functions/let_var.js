//Using var and let in terms of scope
function testScope() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
    }
    console.log(varVariable); // This will work, var is function-scoped
    console.log(letVariable); // This will throw an error, let is block-scoped
}

testScope();

//var => function-scoped
//let, const => block-scoped
// In general, prefer let and const over var to avoid scope-related issues.

// Example of const
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.14159; // This will throw an error, as const variables cannot be reassigned

// Example of let
let count = 0;
count += 1;
console.log(count); // 1