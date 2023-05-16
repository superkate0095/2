interface Vehicle {
  brand: string;
  model: string;
  year: number;
  startEngine: () => void;
  stopEngine: () => void;
}

class Car implements Vehicle {
  brand: string;
  model: string;
  year: number;
  private engineStarted: boolean;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineStarted = false;
  }

  startEngine(): void {
    if (this.engineStarted) {
      console.log('Engine is already started.');
    } else {
      this.engineStarted = true;
      console.log('Engine started.');
    }
  }

  stopEngine(): void {
    if (this.engineStarted) {
      this.engineStarted = false;
      console.log('Engine stopped.');
    } else {
      console.log('Engine is already stopped.');
    }
  }
}

const myCar: Car = new Car('Toyota', 'Camry', 2022);
console.log(`Brand: ${myCar.brand}`);
console.log(`Model: ${myCar.model}`);
console.log(`Year: ${myCar.year}`);

myCar.startEngine();
myCar.startEngine();

myCar.stopEngine();
myCar.stopEngine();
