(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Elephants = window.zoo.Elephants;
  // let Flamingoes = window.zoo.Flamingoes;
  // let KoalaBears = window.zoo.KoalaBearts;

  let dave = new Animal('Dave', new Date('1/1/2000'));
  dave.printName();
  let theAge = dave.getAge();
  console.log(theAge);
  let jordan = new Animal('Jordan', new Date('1/1/1950'));
  jordan.printName();
  console.log( jordan.getAge() );
  console.log(jordan.toString() );


  // let chuck = new Elephants ('Chuck');
  // console.log(chuck);
  //
  // let ginger = new Flamingoes ('Ginger');
  // console.log(Ginger);
  //
  // let summer = new KoalaBears ('Summer');
  // console.log(summer);
}());
