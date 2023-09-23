// const amount = 9;

// if (amount<10){
//   console.log("small number");
// } else{
//   console.log("large number");
// }


// console.log(`Hey it's my first node app!!!!!`);


// console.log(_dirname);

// setInterval(()=>{
//   console.log("hello world");
// },1000)

//MODULE
//common , every file is module(by default)
//modules-Encapsulated code(only share minimun)

// const {john,peter} = require('./4-name');
const names = require("./4-name")
//note name here is an imported object
const sayHi = require('./5-utils');
require("./7-mind-granade")

// sayHi("Daniel Tochukwu Nneji");
// sayHi(names.john);
// sayHi(names.peter);

