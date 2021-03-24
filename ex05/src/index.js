class Microsoft {
    constructor(name) {
      this._name = name;
    }
//getter
    get name() {
        return this._name;
    }
//setter
    set name(newName) {
        this._name = newName;
    }
    occupation henry() {
        console.log("is a philanthropist!");
      }
};
 class Facebook {
     constructor(name, age) {
         super(name);
         this._age = age;

     }
     occupation henry() {
        console.log("William Henry Gates III");
      }
 }

henry.occupation();
elliot.occupation();
elliot.studentAge();

module.exports = {
    Microsoft,
    Facebook
}