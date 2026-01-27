const subjects = [
  { name: 'Mathematics', score: 85 },
  { name: 'English', score: 92 },
  { name: 'Science', score: 78 },
  { name: 'History', score: 88 },
];

//Checkinng if there is any subject with a score greater than 90
console.log(subjects.includes({ name: 'English', score: 92 })); // returns false
console.log(subjects.includes({ name: 'English', score: 92 })); // returns false

//The above method doesn't work on reference types hence try this below
const course = subjects.find(function(course){
    return course.name === 'English' && course.score === 92;
})

console.log(course)