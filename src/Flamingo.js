(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  let window.zoo.Flamingo = class Flamingo extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateofBirth);
    }

    print() {
      super.print();
      console.log('creating an flamingo?');
    }
  };


}());
