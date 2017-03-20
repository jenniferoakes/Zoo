(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateOfBirth) {
      this.name = name;
      if ( ! (dateOfBirth instanceof Date) ) {
        dateOfBirth = new Date();
      }
      this.dob = dateOfBirth;
    }

    getDob() {
      return this.dob;
    }

    getAge() {
      let currentDate = new Date();
      this.age = currentDate.getFullYear() - this.dob.getFullYear();
      return this.age;
    }

    printName() {
      console.log(this.name);
      return 'this.name';
    }

    toString() {
      return this.name + ' ' + this.dob;
    }


  };


}());
