const Circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

//Creating a clone of an object using a loop which iterates through the object and copies each property to a new object
const another = {};
for(let key in Circle){
    another[key] = Circle[key];
}

console.log(another);

//Creating a clone of an object using Object.assign() method
const another1 = Object.assign({
    color : 'yellow'
}, Circle);
console.log(another1); 

//Creating a clone of an object using the spread operator
const another2 = {...Circle};
console.log(another2);