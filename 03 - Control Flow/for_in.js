const person = {
    name : 'Gale',
    age : 22
};

//Prints keys in object
for(let key in person){
    console.log(key, person[key]);
}

const fruits = ['Banana', 'Apple', 'Orange', 'Guava'];

for (let index in fruits){
    console.log(index, fruits[index])
}