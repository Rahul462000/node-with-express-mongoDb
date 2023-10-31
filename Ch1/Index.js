// now importing the exported funciton
//1. old method here the Lib file is store in lib variable
const lib = require("./Lib.js");
// const fs = require("fs");
// for new method in const sum and sub make a package.json file with value{
//   "type": "module"
// }

// reading a file here
// this method will take time
// const txt = fs.readFileSync("demo.txt", "utf-8");
// console.log(txt);
// optimise method
// this will run the sum funtion first
// fs.readFile("demo.txt", "utf-8", (err, text) => {
// performance.now() gives us the time of execution
//   console.log("performance for file read", performance.now());
//   console.log(text);
// });

// old method with funtion
// console.log(lib.sum(2, 4), lib.sub(5, 4));
// console.log("performance for sum&sub", performance.now());
// console.log(`the sum is ${lib.sum(5, 5)} and sub is ${lib.sub(5, 4)}`);
// const a = 5;

// 2 new method this is tree structure assignment method
// import { sum, sub } from "./Lib.js";
// console.log(`the sum is ${sum(2, 5)} and sub is ${sub(5, 6)}`);

//  -------------------------------------------------------------------------------
const express = require("express");
console.log("hello world");
const server = express();
server.listen(8080);
