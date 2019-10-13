// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway: number): number {
    let milesToMars: number = kilometersToMars * milesPerKilometer;
    let hoursToMars: number = milesToMars / speedMph;
    let daysToMars: number = hoursToMars / 24;
    return daysToMars;
}


// Call the function and print the outputs for the Mars trip and the moon trip:
let daysToMars = getDaysToLocation(kilometersToMars);
console.log(`${spacecraftName} will take ${daysToMars} days to reach Mars!`);
let daysToMoon = getDaysToLocation(kilometersToTheMoon);
console.log(`${spacecraftName} will take ${daysToMoon} days to reach the Moon!`);