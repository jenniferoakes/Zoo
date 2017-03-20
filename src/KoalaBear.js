(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  let window.zoo.KoalaBear = class KoalaBear extends Animal {
    constructor(name, dateOfBirth) {
      super(name, dateofBirth);
    }
  };

}());
