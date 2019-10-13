let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


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
class Spacecraft {
    spaceCraft: string;
    speedMph: number;
    milesPerKilometer: number = 0.621;
    constructor(nameInput: string, speedInput: number) {
        this.spaceCraft = nameInput;
        this.speedMph = speedInput;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesToMars: number = kilometersAway * this.milesPerKilometer;
        let hoursToMars: number = milesToMars / this.speedMph;
        let daysToMars: number = hoursToMars / 24;
        return daysToMars;
    }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(`${spaceShuttle.spaceCraft} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars!`);
console.log(`${spaceShuttle.spaceCraft} will take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach the Moon!`);
