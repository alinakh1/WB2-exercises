//sample inputs
var federalTaxes = 23;
var salary = 8000;
var AsPersent = federalTaxes / 100;

//calculations
var withheld = salary * AsPersent;
var moneyAfterTaxes = salary - withheld;
//output

console.log("Money witheld for taxes  " + withheld);
console.log("Salary after taxes  " + moneyAfterTaxes);