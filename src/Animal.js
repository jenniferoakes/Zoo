(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

    /**
     * Constructs a new animal
     * @param {String} name       Name of the Animal
     * @param {Date} dateOfBirth  Date the Animal was born
     * @return {void} 
     */
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
    /**
     * Gets the current age of the Animal in whole years
     * @return {Number} the age of the animal
     */
    getAge() {
      let currentDate = new Date();
      this.age = currentDate.getFullYear() - this.dob.getFullYear();
      return this.age;

      //might not need variable here since I use it only one time
    }

    printName() {
      console.log(this.name);
      return this.name;
    }

    toString() {
      return this.name + ' ' + this.dob;
    }


  };


}());
