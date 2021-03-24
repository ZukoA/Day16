class Dog extends Pets {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }

  dogLegs() {
    console.log("${this._name} is ${this.legs}");
  }
}

let dog = new Dog("Pujdo is walking on 4 legs");
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
