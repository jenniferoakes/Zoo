(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Flamingo = class Flamingo extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];
    }

    /**
    * Prints out new Elephant
    * @param {Object} name   Name of the flamingo
    * @param {Object} date   Date the flamingo was born
    */
    print() {
      super.print();
      console.log('Creating a flamingo?');
    }

    static getSpecies () {
      return 'Flamingo';
    }
    /**
    * Makes it possible for flamingo to give birth
    * @param {String} name       Name of baby flamingo
    * @param {Date} dateOfBirth  Date baby flamingo was born
    */
    layEggs(name) {
      let baby = new window.zoo.Flamingo(name, new Date() );
      this.children.push(baby);
      return baby;
    }

    /**
    * Returns standing time for Flamingo
    * @param {Time} time   Number of minutes flamingo stands
    * @return {String}
    */
    standingTime(time) {
      return 'I can stand on one leg for ' + time + ' minutes';
    }

    /**
    * Returns name and date of birth for flamingo
    * @param {String} name     Name of flamingo
    * @param {Date} date       Birthdate of flamingoe
    * @return {String}
    */
    toString() {
      return this.name + ' ' + this.dob;
    }

  };


}());
