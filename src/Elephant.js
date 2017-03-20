(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Elephant = class Elephant extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }
    print() {
      super.print();
      console.log('Creating an elephant?');
    }

    static getSpecies() {
    return 'Elephant';
  }

  };


}());
