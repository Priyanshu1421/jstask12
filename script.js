// Write a JS program that calculate compound interest use variables and opetators.

let p = 15000;
let r = 5;
let t = 3;
let n = 4;

let a = p*(1+(r/n))^n*t ;

console.log("The Compound Interest after", t , "years is:", a);