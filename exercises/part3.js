// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var milesToMars = kilometersToMars * milesPerKilometer;
    var hoursToMars = milesToMars / speedMph;
    var daysToMars = hoursToMars / 24;
    return daysToMars;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
var daysToMars = getDaysToLocation(kilometersToMars);
console.log(spacecraftName + " will take " + daysToMars + " days to reach Mars!");
var daysToMoon = getDaysToLocation(kilometersToTheMoon);
console.log(spacecraftName + " will take " + daysToMoon + " days to reach the Moon!");
