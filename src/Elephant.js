(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Elephant = class Elephant extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateofBirth);
    }
    print() {
      super.print();
      console.log('creating an elephant?');
    }
  };


}());
