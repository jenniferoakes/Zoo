(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Elephant = window.zoo.Elephant;
  let Flamingo = window.zoo.Flamingo;
  let KoalaBear = window.zoo.KoalaBear;
  // let Employee = window.zoo.Employee;
  // let Russell = new Employee('Russell', new Date('1/1/2000'), 'sandy brown');
  // console.log( Russell.getAge() );

  let dave = new Animal('Dave', new Date('1/1/2000'));
  dave.printName();
  let theAge = dave.getAge();
  console.log(theAge);
  console.log( dave.toString() );
  console.log( dave.getDob() );

  try {
    let jordan = new Animal(45, new Date('1/1/1950'));
  } catch(err) {
    if (err instanceof TypeError) {
      console.warn( err.message );
    } else {
      throw err;
    }
  }

  let jordan = new Animal('Jordan', new Date('1/1/1950'));
  jordan.printName();
  console.log( jordan.getAge() );
  console.log( jordan.toString() );
  console.log( jordan.getDob() );

  try {
    let chuck = new Elephant (45, new Date('1/8/1983'));
  } catch(err) {
    if (err instanceof TypeError) {
      console.warn( err.message );
    } else {
      throw err;
    }
  }

  try {
    let bigfoot = new Elephant ("Bigfoot", new Date('1/10/2000'));
    bigfoot.giveBirth(true);
  } catch(err) {
    if (err instanceof TypeError) {
      console.warn( err.message );
    } else {
      throw err;
    }
  }

  try {
    let tinytrunk = new Elephant ("tinytrunk", new Date('3/4/2011'));
    tinytrunk.beCute('5');
  } catch(err) {
    if (err instanceof TypeError) {
      console.warn( err.message );
    } else {
      throw err;
    }
  }

  try {
    let tiniestTrunk = new Elephant ("tiniest trunk", new Date('3/8/2011'));
    tiniestTrunk.beCute('this is a string not a number');
  } catch(err) {
    if (err instanceof TypeError) {
      console.warn( err.message );
    } else {
      throw err;
    }
  }

  let chuck = new Elephant ("Chuck", new Date('1/8/1983'));
  chuck.printName();
  console.log( chuck.getAge() );
  console.log( chuck.toString() );
  console.log( chuck.getDob() );
  console.log( Elephant.getSpecies() );
  console.log( chuck.giveBirth('Chuckie'));
  console.log( chuck.giveBirth('Chuckster'));
  console.log( chuck.giveBirth('Chuckette'));
  console.log( chuck.children );
  console.log( chuck.beCute(2));
  console.log( chuck.toString() );



  let ginger = new Flamingo ('Ginger', new Date('1/11/1968'));
  ginger.printName();
  console.log( ginger.getAge() );
  console.log( ginger.toString() );
  console.log( ginger.getDob() );
  console.log( Flamingo.getSpecies() );
  console.log( ginger.layEggs('Cinnamon'));
  console.log( ginger.layEggs('Pepper'));
  console.log( ginger.layEggs('Basil'));
  console.log( ginger.layEggs('Peprika'));
  console.log( ginger.children );
  console.log( ginger.standingTime(4) );
  console.log( ginger.toString());


  let summer = new KoalaBear ('Summer', new Date('1/12/1972'));
  summer.printName();
  console.log( summer.getAge() );
  console.log( summer.toString() );
  console.log( summer.getDob() );
  console.log( KoalaBear.getSpecies() );
  console.log( summer.giveBirth('Autumn'));
  console.log( summer.giveBirth('Spring'));
  console.log( summer.giveBirth('Winter'));
  console.log( summer.children );
  console.log( summer.hugTrees(8) );
  console.log( summer.toString() );

}());
