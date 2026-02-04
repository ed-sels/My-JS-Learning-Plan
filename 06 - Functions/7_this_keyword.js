//Using the this keyword to print members of an object from a function
const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.getFullName());