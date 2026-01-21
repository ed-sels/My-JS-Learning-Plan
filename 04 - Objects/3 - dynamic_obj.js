const circle = {
    radius: 1,
}

//Add new properties to the object
circle.color = 'red';
circle.draw = function() {
    console.log('draw');
};

//Delete a property
delete circle.radius;

//Output object
console.log(circle);