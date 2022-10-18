
//sample inputs
var people = 38;
var vansSeat = 15;
var vanCost = 250;

//calculations
var howManyVansNeeded = Math.ceil(people / vansSeat);
var costToRentVan = vanCost * howManyVansNeeded;

//output

console.log("Vans needed for 38 people  " + howManyVansNeeded);
console.log("To rent vans for 38 people will be  " + costToRentVan);