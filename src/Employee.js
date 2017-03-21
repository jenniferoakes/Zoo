(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let window.zoo.Employee = class Employee extends window.zoo.Animal {

    constructor(name, dateOfBirth, hairColor) {
      super(name, dateOfBirth);
      this.hairColor = hairColor;
      this.legs = 2;
      this.arms = 2;
    }

    getAge() {
      super.getAge(); //here super is pointing to the parent class to whatever it extends
    }
  };



}());
