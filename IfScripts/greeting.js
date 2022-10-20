//Defining a variable with a giving ratio 0-23 hours


var currentHour = 2 ;

// declare a loop - as we have 3 greetings we will use if-else if statement 
if (currentHour <= 10) 
{
    greeting = "Good morning!";
}
else if (currentHour > 10 && currentHour <=17 ) 
{
    greeting = "Good day!";
}
else { // currentHour >= 17   
    greeting = "Good evening!";
}
//displaying output 
console.log(greeting);
   