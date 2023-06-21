const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let trex;
  let raptor;
  let tricerotops;
  let dinosaurs;
  let park;

  beforeEach(function () {
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    raptor = new Dinosaur('raptor', 'carnivore', 30);
    tricerotops = new Dinosaur('tricerotops', 'herbivore', 20);
    dinosaurs = [trex, raptor, tricerotops]
    park = new Park('Jurassic Park', 12, dinosaurs)
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 12);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    let diplodocus = new Dinosaur('diplodocus', 'herbivore', 10);
    park.addDinosaur(diplodocus);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurByName(raptor);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDinosaur();
    assert.deepStrictEqual(actual, trex);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(actual, [trex]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 100);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 36500);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 438000);
  });

  it('should be able to removie dinosaur by species', function(){
    park.removeDinosaurBySpecies('raptor');
    assert.deepStrictEqual(park.dinosaurs, [trex, tricerotops]);
  });

  it('should return an object detailing diet types of Dinosaurs', function(){
    const actual = park.dietTypes();
    assert.deepStrictEqual(actual, {'carnivores': 2, 'herbivores': 1, 'omnivores': 0});
  });

});
