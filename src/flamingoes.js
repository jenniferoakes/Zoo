(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  let window.zoo.Flamingoes = class Flamingoes extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateofBirth);
    }

    print() {
      super.print();
      console.log('creating an flamingo?');
    }
  };


}());
