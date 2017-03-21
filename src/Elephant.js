(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Elephant = class Elephant extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];
    }
    print() {
      super.print();
      console.log('Creating an elephant?');
    }

    static getSpecies() {
      return 'Elephant';
    }

    giveBirth(name) {

    if (typeof(name) !== 'string') {
      let theError = new TypeError("Please input a name with '' around the value");
      throw theError;
    }
      let baby = new window.zoo.Elephant(name, new Date());
      this.children.push(baby);
      return baby;
    }

    beCute(trunklength) {
      trunklength = Number(trunklength);
      if(! Number.isFinite(trunklength)) {
        let theError = new TypeError("Please input a number");
        throw theError;
      }
      return 'I am cute because of my ' + trunklength + ' foot trunk';
    }

    toString() {
      return this.name + ' ' + this.dob;
    }

  };

}());
