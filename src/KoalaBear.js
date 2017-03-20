(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.KoalaBear = class KoalaBear extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }

    print() {
      super.print();
      console.log('creating an flamingo?');
    }

    static getSpecies () {
    return 'Koala Bear';
  }

  };

}());
