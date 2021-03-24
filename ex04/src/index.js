class Pets {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk(numberOfLegs) {
    console.log(`${this._name} is ${this.legs}`);
  }
}
class Dog extends Pets {
  constructor (name, legs) {
    super(name);
    this.legs = legs;
  }

  bark() {
    let dogSay = "Pujdo says WUF-WUF";
    return dogSay;
  }
}
let dog = new Dog("Pujdo is walking on 4 legs");
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
