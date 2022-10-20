let codeDep = 20;
let nameOfDep;

switch(codeDep)
{
case 1:
    nameOfDep = "Marketing";
break;
case 5:
    nameOfDep = "Human Resources";
break;
case 10:
    nameOfDep = "Accounting";
break;
case 12:
    nameOfDep = "Legal";
break;
case 18:
    nameOfDep = "IT";
break;
case 20:
    nameOfDep = "Customer Relations";
break;
default:
    nameOfDep = "<unknown>";
break;
}

console.log("name of Department is " + nameOfDep);