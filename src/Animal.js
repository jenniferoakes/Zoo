(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

    /**
    * Constructs a new animal
    * @param {String} name       Name of the Animal
    * @param {Date} dateOfBirth  Date the Animal was born
    * @throws {TypeError}        When the name is not a string OR the date of birth is not a date
    * @return {void}
    */
    constructor(name, dateOfBirth) {

      if ( typeof(name) !== 'string' || name.length < 1 ) {
        let theError = new TypeError("Please input a name with '' around the value");
        throw theError;
        // console.log('not a string!');
      }

      if ( ! (dateOfBirth instanceof Date) ) {
        dateOfBirth = new Date();
      }

      this.name = name;
      console.log(dateOfBirth);
      this.dob = dateOfBirth;
    }

    /**
    * Returns date of birth
    * @param {Date} dateOfBirth Date the animal was born
    * @return {Date}
    */
    getDob() {
      return this.dob;
    }

    /**
    * Calculates the current age of the Animal in whole years
    * @return {Number} the current age of the animal
    */
    getAge() {
      let currentDate = new Date();
      this.age = currentDate.getFullYear() - this.dob.getFullYear();
      return this.age;
      //might not need variable here since I use it only one time
    }

    /**
    * Prints name of animal
    * @param {String} name   Name of animal
    * @return {String}
    */
    printName() {
      console.log(this.name);
      return this.name;
    }

    /**
    * Returns name and date of birth
    * @param {String} string   String to include name and date of birth
    * @return {String}
    */
    toString() {
      return this.name + ' ' + this.dob;
    }


  };


}());
