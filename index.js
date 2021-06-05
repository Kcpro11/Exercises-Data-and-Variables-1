// 1. Declare and assign the variables here:

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
const milesPerKilometer = 0.621;
let milesToMars = distanceToMarsKm*milesPerKilometer;
let hoursToMars = milesToMars/shuttleSpeedMph;
let daysToMars = hoursToMars/24;
let milesToMoon = distanceToTheMoonKm*milesPerKilometer;
let hoursToMoon = milesToMoon/shuttleSpeedMph;
let daysToMoon = hoursToMoon/24;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof milesPerKilometer);


// Code your solution to exercises 3 and 4 here:

console.log(shuttleName + ' will take ' + daysToMars + ' days to reach Mars.');
console.log(shuttleName + ' will take ' + daysToMoon + ' days to reach the Moon.');




// Code your solution to exercise 5 here:
