//Hoisting is the process of moving the call of a function to before it was declared
//A function can be called before it is declared because of hoisting
walk();

function walk(){
    console.lop('walk');
};

// A named function expression cannot be called before it is defined
run();

const run = function(){
    console.log('run')
};