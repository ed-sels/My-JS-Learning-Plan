const Circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

//Enumerating keys and values
for(let key in Circle){
    console.log(key, Circle[key]);
}

//Enumerating only keys
for(let key in Circle){
    console.log(key);
}

//Objects are not iterable so the for...of loop will not work here
// for(let key of Circle){
//     console.log(key);
// }

//However, we can use Object.keys to get an array of keys and then use for...of
for(let key of Object.keys(Circle)){
    console.log(key);
}

//Similarly, we can use Object.entries to get an array of [key, value] pairs
for(let [key, value] of Object.entries(Circle)){
    console.log(key, value);
}
//Checking if a property exists in an object
if('radius' in Circle){
    console.log('Circle has a radius property');
}

Object.keys(Circle)
