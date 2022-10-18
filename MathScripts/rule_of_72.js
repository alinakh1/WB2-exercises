//inputs
var interestRateAsPercent = 5;
var rule = 72;
var balance = 100000;
var newBalance = balance * 2;
//calculations
var yearsToDouble = rule / interestRateAsPercent;

//output
console.log("At a " + interestRateAsPercent + 
" your savings account will be worth " + newBalance.toFixed(2) + 
" in " + yearsToDouble.toFixed(1) + 
" years");