(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.KoalaBear = class KoalaBear extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];
    }

    print() {
      super.print();
      console.log('Creating a KB?');
    }

    static getSpecies () {
      return 'Koala Bear';
    }

    giveBirth(name) {
      let baby = new window.zoo.KoalaBear(name, new Date());
      this.children.push(baby);
      return baby;
    }

    hugTrees(numberOfTrees) {
      return 'I am currently hugging ' + numberOfTrees + ' trees';
    }

    toString() {
      return this.name + ' ' + this.dob;
    }

  };

}());
