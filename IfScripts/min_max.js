// Creating 3 variables

var a = 45;
var b = 55;
var c = 20;
var max;
var min;

if (a > b && a > c)                     //give the condition that variable 
{
    max = a;
}
else if (b > a && b > c) 
{
    max = b; 
}
else
{
max = c;
}

console.log( " The maximum variable is " + max);

//counting what 

if (a < b && a < c)                     //give the condition that variable 
{
    min = a;
}
else if (b < a && b < c) 
{
    min = b; 
}
else
{
min = c;
}

console.log( " The minimum variable is " + min);