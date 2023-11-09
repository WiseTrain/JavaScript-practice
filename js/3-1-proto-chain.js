// Prototype chain for animals
"use strict";
// Step 1: Create the "Animal" constructor
function Animal(type, message) {
    this.type = type;
    this.message = message;
}

// Step 2: Add a method to the "Animal" prototype
Animal.prototype.makeSound = function() {
    console.log("sound:", this.message);
}

// Step 3: Create the "Cat" constructor
function Cat(name) {
    // Inherit properties from the "Animal" constructor and set custom properties
    Animal.call(this, "cat", "Meow!");
    this.name = name;
}

// Step 4: Create the "Dog" constructor
function Dog(name) {
    // Inherit properties from the "Animal" constructor and set custom properties
    Animal.call(this, "dog", "WOOF!");
    this.name = name;
}

// Step 5: Set up prototype inheritance for "Cat" and "Dog"
Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Step 6: Create instances of "Cat" and "Dog"

// TESTS: 
const c1 = new Cat("Alex"); 
console.log(c1.name, c1.type, c1.message);
c1.makeSound();

const d1 = new Dog("Snoopy");
console.log(d1.name, d1.type, d1.message);
d1.makeSound();

// 
console.log("\nTesting:");
console.log("Is c1 an instance of Cat?", c1 instanceof Cat); // true
console.log("Is c1 an instance of Animal?", c1 instanceof Animal); // true
console.log("Is d1 an instance of Dog?", d1 instanceof Dog); // true
console.log("Is d1 an instance of Animal?", d1 instanceof Animal); // true