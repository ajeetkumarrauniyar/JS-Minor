// Encapsulation example

class Car {
  constructor(brand, model) {
    this._brand = brand;
    this._model = model;
  }

  getBrand() {
    return this._brand;
  }

  setBrand(brand) {
    this._brand = brand;
  }

  getModel() {
    return this._model;
  }

  setModel(model) {
    this._model = model;
  }

  start() {
    console.log(`${this._brand} ${this._model} is starting.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getBrand()); // Toyota
myCar.setBrand("Honda");
console.log(myCar.getBrand()); // Honda

//Yahaan pe Car class ke properties _brand aur _model ko humne private banaya aur unko get/set methods ke through access kiya.
