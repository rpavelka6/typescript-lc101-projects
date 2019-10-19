import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;
  
    constructor(name: string, totalCapacityKg: number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
    }
  
    sumMass( items: Payload[] ): number {
      // Returns the sum of all items using each item's massKg property
      let sumOfAllItems: number = 0;
      for (let i = 0; i < items.length; i++) {
        sumOfAllItems += items[i].massKg;
      }
      return sumOfAllItems;
    }

    currentMassKg(): number {
      return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
      return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo) {
      if (this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true;
      } else {
          return false;
      }
    }

    addAstronaut(astronaut: Astronaut) {
      // Call canAdd method with astronaut array passed in to see if enough space to add astronaut to rocket
      if (this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
        return true;
      } else {
          return false;
      }
    }
}