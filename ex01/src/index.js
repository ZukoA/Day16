class Car {
  constructor(manufacturer, model, production) {
    bmw.manufacturer = manufacturer;
    bmw.model = model;
    bmw.production = production;
  }
}
const bmw = new Car("BMW", "BMW X3", 2003);
console.log(bmw.manufacturer);
console.log(bmw.model);
console.log(bmw.production);

module.exports = Car;
