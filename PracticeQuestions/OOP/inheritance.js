 // Inheritance example

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} is starting.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();
myCar.drive();

// Yahaan pe `Car` class ne `Vehicle` class ko inherit kiya, jisse `Car` ko `start` method mil gaya.
