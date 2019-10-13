class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: string[];
    astronauts: string[];
  
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