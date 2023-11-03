// requiring the sillyname package
// var generatedName = require("sillyname");

// first node package
import generateName from "sillyname";
// second node package
import superHeroes from "superHeroes";

// superheo package module
const name = superHeroes.random();
console.log(`our superHero is ${name}.`);
//
// sillyname package
var sillyName = generateName();
console.log(` My name is ${sillyName}.`);
//
