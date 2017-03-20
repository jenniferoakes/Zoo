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
      let baby = new window.zoo.Elephant(name, new Date());
      this.children.push(baby);
      return baby;
    }

    goBackToTheWild() {
      
    }

  };


}());
