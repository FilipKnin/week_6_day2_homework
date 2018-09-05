const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;



  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 60);
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 70);
  })
  describe('Park', function() {

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    // park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    // park.addDinosaur(dinosaur1);
    // park.addDinosaur(dinosaur2);
    // // park.findMostFamousDino();
    //
    // const actual = park.findMostFamousDino();
    // assert.deepStrictEqual(actual, dinosaur2);

  });


  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findDinoBySpecies('t-rex');
    assert.deepStrictEqual(actual, dinosaur1 )
  });

  it('should be able to remove all dinosaurs of a particular species');

});
