const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);

  // console.log(this.collectionOfDinosaurs);
};


Park.prototype.removeDinosaur = function (dinosaur) {
  let index = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(index, 1);
  // console.log(this.collectionOfDinosaurs);
};

// Park.prototype.findMostFamousDino = function () {
//
//
//   var obj = this.collectionOfDinosaurs.find(function (dinosaur) { return dinosaur.guestsAttractedPerDay === max.value; });
// // console.log(this.collectionOfDinosaurs);
// console.log(obj);
// };

Park.prototype.findDinoBySpecies = function (dinoSpecies) {

    for (var i = 0; i < this.collectionOfDinosaurs.length; i++) {
      let dinosaur = this.collectionOfDinosaurs[i];
      if (dinosaur.species === dinoSpecies) {
         console.log(dinosaur)
      }
    }};

    // let foundedDinos = [];
    //   for (var i = 0; i < this.collectionOfDinosaurs.length; i++) {
    //     let dinosaur = this.collectionOfDinosaurs[i];
    //     if (dinosaur.species === dinoSpecies) {
    //        foundedDinos.push(dinosaur)// `${dinosaur.name}`
    //     }
    //     console.log(foundedDinos)
    // };


module.exports = Park;


// var objArray = [
//     { id: 0, name: 'Object 0', otherProp: '321' },
//     { id: 1, name: 'O1', otherProp: '648' },
//     { id: 2, name: 'Another Object', otherProp: '850' },
//     { id: 3, name: 'Almost There', otherProp: '046' },
//     { id: 4, name: 'Last Obj', otherProp: '984' }
// ];
