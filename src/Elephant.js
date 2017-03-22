(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  /**
   * creates a new Elephant in the zoo
   * @param {String} name       Name of the Elephant
   * @param {Date} dateOfBirth  Date the Elephant was born
   * @return {void}
   */
  window.zoo.Elephant = class Elephant extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];
    }
    /**
     * Prints out new Elephant
     * @param {Object} name   Name of the elephant
     * @param {Object} date   Date the elephant was born
     */
    print() {
      super.print();
      console.log('Creating an elephant?');
    }

    //I am not sure what this is doing below
    static getSpecies() {
      return 'Elephant';
    }

    /**
     * Makes it possible for elephant to give birth
     * @param {String} name       Name of baby elephant
     * @param {Date} dateOfBirth  Date baby elephant was born
     * @return {}
     */
    giveBirth(name) {

    if (typeof(name) !== 'string') {
      let theError = new TypeError("Please input a name with '' around the value");
      throw theError;
    }
      let baby = new window.zoo.Elephant(name, new Date());
      this.children.push(baby);
      return baby;
    }
    /**
     * Returns trunklength value
     * @param {Number} Number Length of trunk
     * @return {Number}
     */
    beCute(trunklength) {
      trunklength = Number(trunklength);
      if(! Number.isFinite(trunklength)) {
        let theError = new TypeError("Please input a number");
        throw theError;
      }
      return 'I am cute because of my ' + trunklength + ' foot trunk';
    }
    /**
     * Strings together name and date of birth
     * @param {String} name       Name of elephant
     * @param {Date} dateOfBirth  Birthdate of elephant
     */
    toString() {
      return this.name + ' ' + this.dob;
    }

  };

}());
