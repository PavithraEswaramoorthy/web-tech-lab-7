const readline = require("readline-sync");
var calculator = require('./calculator');
let a = Number(readline.question());
let b = Number(readline.question());
console.log("Addition : "+calculator.add(a,b));
console.log("Subtraction : "+calculator.subtract(a,b));
console.log("Multiplication : "+calculator.multiply(a,b));
console.log("Division : "+calculator.division(a,b));
console.log("Modulo : "+calculator.modulo(a,b));