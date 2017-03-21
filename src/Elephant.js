(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Elephant = class Elephant extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];

      if (typeof name !== 'string') {
        let theError = new TypeError("Please input a name with '' around the value");
        throw theError;
        // console.log('not a string!');
      }
    }
    print() {
      super.print();
      console.log('Creating an elephant?');
    }

    static getSpecies() {
      return 'Elephant';
    }

    giveBirth(name) {
      let baby = new window.zoo.Elephant(name, new Date());
      this.children.push(baby);
      return baby;
    }

    beCute(trunklength) {
      return 'I am cute because of my ' + trunklength + ' foot trunk';
    }

    toString() {
      return this.name + ' ' + this.dob;
    }

  };

}());
