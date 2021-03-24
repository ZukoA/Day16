class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getPerson() {
    return "Name: ${this.name}, Email: ${this.email}, Age: ${this.age}";
  }
}
getPerson();
module.exports = Person;
