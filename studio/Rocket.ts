class Rockets {
    name: string;
    totalCapacityKg: number;
    cargoItems: array = [];
    astronauts: array = [];
  
    constructor(name: string, totalCapacityKg: number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
    }
  
    sumMass( items: Payload[] ): number {

    }

    currentMassKg(): number {

    }

    canAdd(item: Payload): boolean {

    }

    addCargo(cargo: Cargo) {

    }
}