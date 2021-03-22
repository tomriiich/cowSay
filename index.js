const logMe = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm ${logMe.name} and I learn at ${logMe.campus}`,
	e : "oO",
	T : "U "
}))