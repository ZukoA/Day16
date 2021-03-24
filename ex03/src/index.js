class Person {
  constructor(message) {
    this._message = message;
  }

  static display() {
    console.log("Static method is invoked from Person class");
  }

  static showMassage() {
    console.log("Static method is invoked from Person class");
  }
}

var message = new Person();
Person.showMassage();
module.exports = Person;
