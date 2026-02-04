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