// Abstraction example

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting.`);
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();
myCar.drive();

// Note: Yahaan pe, humne Car class banaya jo ki car ki important properties aur methods ko represent karta hai. Internal working jaise engine kaise start hota hai, yeh sab hidden hai.
