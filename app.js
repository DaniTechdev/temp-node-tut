//npm - globl command comes with node;
//npm --version

//local dependency -use at only this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName> (mac)
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important infr about project/packages etc)

//ways to install create package.json

//manual approach (create packge.json in the root, create properities etc)
// npm init (step by step, press enter to skip)
//npm init -y (everything default)



const _ = require("lodash")


const items = [1,[2,3, [4]]]

const newItems = _.flatMapDeep(items)
console.log(newItems);