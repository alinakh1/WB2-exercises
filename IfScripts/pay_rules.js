// Given variables to calculate gross pay
var payRate1 = 12.50;
var hoursWorked1 = 20;
var grossPay1;

//Using If statement
if (hoursWorked1<=40) {
grossPay1= payRate1 * hoursWorked1;
}
else {
grossPay1= 1.5 * payRate1 * hoursWorked1
};


// Given variables to calculate gross pay
var payRate2 = 25.00;
var hoursWorked2 = 40;
var grossPay2 = 250;

//Using If statement
if (hoursWorked2<=40) {
    grossPay2= payRate2 * hoursWorked2;
    }
    else {
        grossPay2= (payRate2 * 40) + 1.5 * payRate2 * (hoursWorked2 - 40)
    };



// Given variables to calculate gross pay
var payRate3 = 17.30;
var hoursWorked3 = 45;
var grossPay3 = 250;

//Using If statement
if (hoursWorked3<=40) {
    grossPay3= payRate3 * hoursWorked3;
    }
    else {
    grossPay3= (payRate3 * 40) + 1.5 * payRate3 * (hoursWorked3 - 40)
    };

    // Let's count and see the resut
    console.log(grossPay1);
    console.log(grossPay2);
    console.log(grossPay3);

