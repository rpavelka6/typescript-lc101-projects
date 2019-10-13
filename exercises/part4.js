var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;
// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(nameInput, speedInput) {
        this.milesPerKilometer = 0.621;
        this.spaceCraft = nameInput;
        this.speedMph = speedInput;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesToMars = kilometersAway * this.milesPerKilometer;
        var hoursToMars = milesToMars / this.speedMph;
        var daysToMars = hoursToMars / 24;
        return daysToMars;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(spaceShuttle.spaceCraft + " will take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to reach Mars!");
console.log(spaceShuttle.spaceCraft + " will take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon!");
