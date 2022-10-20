// Defining years needed to check for a leap year

//Also a year is Leap if it completely divides by 4

var year1 = 1900;
var year2 = 1950;
var year3 = 1999;
var year4 = 2000;
var year5 = 2001;
var year6 = 2012;


// Now we will give a condition using If else statement
//for year 1900
if (year1 % 4 === 0) {
year1 = "a leap year ";
    }
    else {
    year1 = "not a leap year ";
    };

//for year 1950    
if (year2 % 4 === 0) { 
    year2 = "a leap year ";
    }
    else {
    year2 = "not a leap year ";
    };
//for year 1999    
if (year3 % 4 === 0) {
year3 = "a leap year ";
    }
    else {
    year3 = "not a leap year ";
    };
//for year 2000    
if (year4 % 4 === 0) {
year4 = "a leap year ";
    }
    else {
    year4 = "not a leap year ";
    };
//for year 2001  
if (year5 % 4 === 0) {
year5 = "a leap year ";
    }
    else {
    year5 = "not a leap year ";
    };
//for year 2012
if (year6 % 4 === 0) {
year6 = "a leap year ";
    }
    else {
    year6 = "not a leap year ";
    };

console.log( " 1900 is " + year1);
console.log( " 1950 is " + year2);
console.log( " 1999 is " + year3);
console.log( " 2000 is " + year4);
console.log( " 2001 is " + year5);
console.log( " 2012 is " + year6);