// Defining years needed to check for a leap year

//Also a year is Leap if it completely divides by 4

var year1 = 1900;
var year2 = 1950;
var year3 = 1999;
var year4 = 2000;
var year5 = 2001;
var year6 = 2012;


// Now we will give a condition using If else statement
if (year1 % 4 === 0) {
year1 = true
    }
    else {
    year1 = false
    };

if (year2 % 4 === 0) {
year2 = true
    }
    else {
    year2 = false
    };

if (year3 % 4 === 0) {
year3 = true
    }
    else {
    year3 = false
    };

if (year4 % 4 === 0) {
year4 = true
    }
    else {
    year4 = false
    };

if (year5 % 4 === 0) {
year5 = true
    }
    else {
    year5 = false
    };

if (year6 % 4 === 0) {
year6 = true
    }
    else {
    year6 = false
    };

console.log(year1);
console.log(year2);
console.log(year3);
console.log(year4);
console.log(year5);
console.log(year6);