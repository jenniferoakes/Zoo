(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Flamingo = class Flamingo extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.children = [];
    }
    print() {
      super.print();
      console.log('Creating a flamingo?');
    }

    static getSpecies () {
    return 'Flamingo';
  }

    layEggs(name) {
      let baby = new window.zoo.Flamingo(name, new Date() );
      this.children.push(baby);
      return baby;
    }

    standingTime(time) {
      return 'I can stand on one leg for ' + time + ' minutes';
    }

    toString() {
      return this.name + ' ' + this.dob;
    }

  };


}());
