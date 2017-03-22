(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.KoalaBear = class KoalaBear extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];
    }
    /**
     * Prints out new Elephant
     * @param {Object} name   Name of the koalabear
     * @param {Object} date   Date the koalabear was born
     */
    print() {
      super.print();
      console.log('Creating a KB?');
    }

    static getSpecies () {
      return 'Koala Bear';
    }

    /**
     * Makes it possible for elephant to give birth
     * @param {String} name       Name of baby koala bear
     * @param {Date} dateOfBirth  Date baby koala bear was born
     */
    giveBirth(name) {
      let baby = new window.zoo.KoalaBear(name, new Date());
      this.children.push(baby);
      return baby;
    }

    /**
     * Returns number of trees Koala Bear is holding
     * @param {Number} number   Number of trees koala bear holds
     * @return {String}
     */
    hugTrees(numberOfTrees) {
      return 'I am currently hugging ' + numberOfTrees + ' trees';
    }

    /**
     * Returns name and date of birth for flamingo
     * @param {String} name     Name of koala bear
     * @param {Date} date       Birthdate of koala bear
     * @return {String}
     */
    toString() {
      return this.name + ' ' + this.dob;
    }

  };

}());
