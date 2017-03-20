(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Flamingo = class Flamingo extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }
    print() {
      super.print();
      console.log('creating an flamingo?');
    }

    static getSpecies () {
    return 'Flamingo';
  }

  };


}());
