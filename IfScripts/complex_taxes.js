// Define 2 variables that will help us to calculate federal tax

var payRate = 10.00;                         // Line 3-5 I'm defining variables for further calculations
var hoursWorked = 50;
var grossPay;

if (hoursWorked <= 40) {                     //Line7-13 is if statement that with a given conditon working less than 40 hours 
grossPay= payRate * hoursWorked;             //will count grossPay without overtime which is how many hours we worked * pay Rate
}
else {                                       //and here we have a second condition and if it was an overtime it will use this cycle
    grossPayOvertime = (payRate * 40) + 1.5 * payRate * (hoursWorked - 40)
    grossPay= grossPayOvertime 
};
//in output it will show the result of annual income
console.log( " Based on hours worked the weekly income will be " + grossPay); 

//declaring new variables to see taxWithheld based on status

var filingStatus = " single ";               //We will use filing status Single for if statement based on the table given for this exercise
var taxWithheld;                             //defining variable that we will count below, without defining that we can't see the output
var taxRate;

if (grossPay <= 12000 && filingStatus == " single ") 
{
    taxRate = 0.05;
    taxWithheld = taxRate * grossPay;
}
else if (grossPay < 12000 && grossPay <= 25000 && filingStatus == " single ") 
{
    taxRate = 0.1;
    taxWithheld = taxRate * annualIncome;
} 
else if (grossPay < 25000 && grossPay <= 75000 && filingStatus == " single ") 
{
    taxRate = 0.15;
    taxWithheld = taxRate * grossPay;
}
else if (grossPay > 75000 && filingStatus == " single ")
{
    taxRate = 0.2;
    taxWithheld = taxRate * grossPay;
};
var netPay = grossPay - taxWithheld;
console.log( " Weekly tax withheld is " + taxWithheld + " $ ");
console.log( " Your net pay " + netPay);


//now we will use the same statements for loint

var filingStatus = " joint ";
var taxWithheld;
var taxRate;

if (grossPay <= 12000 && filingStatus == " joint ") 
{
    taxRate = 0;
    taxWithheld = taxRate * grossPay;
}
else if (grossPay < 12000 && grossPay <= 25000 && filingStatus == " joint ") 
{
    taxRate = 0.06;
    taxWithheld = taxRate * annualIncome;
} 
else if (grossPay < 25000 && grossPay <= 75000 && filingStatus == " joint ") 
{
    taxRate = 0.11;
    taxWithheld = taxRate * grossPay;
}
else if (grossPay > 75000 && filingStatus == " joint ")
{
    taxRate = 0.2;
    taxWithheld = taxRate * grossPay;
};

var netPay = grossPay - taxWithheld;
console.log( " Weekly tax withheld is " + taxWithheld + " $ ");
console.log( " Your net pay " + netPay);