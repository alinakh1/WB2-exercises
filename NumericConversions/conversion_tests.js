//Description: This script tests various numeric
//              conversion techniques
//Author: Alina K. Newprogrammer

//Defining variables
var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

//performing tasks

//Tasks for variable a
a1 = parseInt(a);
a2 = parseFloat(a);
a3 = Number(a);
a4 = +a;
console.log("ParseInt(" + a + ")" + ": " + a1)
console.log("ParseFloat(" + a + ")" + ": " + a2)
console.log("Number(" + a + ")" + ": " + a3)
console.log("+(" + a + ")" + ": " + a4)

console.log( "the a1" + a1); console.log( "The a2" + a2); console.log(a3); console.log(a4);
//Tasks for variable b
b1 = parseInt(b);
b2 = parseFloat(b);
b3 = Number(b);
b4 = +b;
console.log(b1); console.log(b2); console.log(b3); console.log(b4);
//Tasks for variable c
c1 = parseInt(c);
c2 = parseFloat(c);
c3 = Number(c);
c4 = +c;
console.log(c1); console.log(c2); console.log(c3); console.log(c4);
//Tasks for variable d
d1 = parseInt(d);
d2 = parseFloat(d);
d3 = Number(d);
d4 = +d;
console.log(d1); console.log(d2); console.log(d3); console.log(d4);
//(a2); (a3); (a4);