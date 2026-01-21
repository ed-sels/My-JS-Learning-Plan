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