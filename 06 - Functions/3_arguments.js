// function sum(){
//     let total = 0;
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5));

//Using the rest operator
function sum(...args){
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum(1,2,3,4,5));