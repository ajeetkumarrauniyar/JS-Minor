// Polymorphism example

class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.speak(); // The dog barks.
myCat.speak(); // The cat meows.

// Yahaan pe `speak` method ko `Dog` aur `Cat` classes ne alag-alag tareeke se implement kiya.
