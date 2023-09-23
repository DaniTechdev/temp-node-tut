// const OS = require("os")


// //infor about current user
// const user = OS.userInfo()

// console.log(user);
// //method return the system uptime in seconds

// console.log(`The system uptime is ${OS.uptime()} seconds`);

// const currentOS = {
//   name: OS.type(),
//   release: OS.release(),
//   totalMem: OS.totalmem(),
//   freeMeme: OS.freemem()

// }
// console.log(currentOS);

const path = require("path")

console.log(path.sep);

//join path method can be used to normalise path and give te actuall path
const filePath = path.join("/content","subfolder", "text.text")
console.log(filePath);

//basename method of path can be used to get the base of the file path

const base = path.basename(filePath)

console.log(base);

//absolute path can be achieved by resolve( ) method of path

const absolute = path.resolve("content","subfolder","text-txt")


console.log(absolute);

