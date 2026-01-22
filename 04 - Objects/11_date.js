const date1 = new Date('January 1, 2022 00:00:00');
const date2 = new Date('December 31, 2022 23:59:59');

// Compare the two dates
if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else if (date1 > date2) {
    console.log('date1 is later than date2');
} else {
    console.log('date1 is the same as date2');
}

// Output the dates
console.log('Date 1:', date1.toString());
console.log('Date 2:', date2.toString());
const now = new Date();
console.log('Current Date:', now.toDateString());
console.log('Current Time:', now.toTimeString());
console.log(now.toISOString());