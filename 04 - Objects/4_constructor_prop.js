//Constructor function property
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
// Check the constructor property
console.log(another.constructor); // Outputs: Circle function

// circle.constructor