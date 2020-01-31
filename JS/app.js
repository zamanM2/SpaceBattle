class ussSwarch {
constructor(){

  this.hull= 20;
  this.firepower= 5;
  this.accuracy= .7;
  }
}

class alienShips {
  constructor(){

  this.maxHull= 6;
  this.minHull =3;

  this.maxFirepower=4 ;
  this.minFirepower=2 ;

  this.maxAccuracy=.6 ;
  this.minAccuracy= .8;

  this.hull= Math.random() * (max - min) + min;
  this.firepower= Math.random() * (max - min) + min;
  this.accuracy= Math.random() * (max - min) + min;
  }

}

// function randomSpec(){
//   for(let i=0; i <= 6; i++){
// //     while (i < ) {
// //   text += "The number is " + i;
// //   i++;
// // }
//   }

//   Math.random()
// }

console.log("this is working")
