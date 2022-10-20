// Define 2 variables for a student : Name and Major
var studentName = "Kate";
var studentMajor = "MKT";

console.log("student: " + studentName);
//let's see the department office based on the major

if (studentMajor == "BIOL") 
{
console.log("Major: Biology "  + " \nAdvising location: Science Bldg, Room 310 ");
}
else if (studentMajor == "CSCI")
{
console.log("Major: Computer Science "  + "\nAdvising location: Sheppard Hall, Room 314 ");
}
else if (studentMajor == "ENG")
{
console.log("Major: English "  + "\nAdvising location: Kerr Hall, Room 201 ");
}
else if (studentMajor == "HIST")
{
console.log("Major: History "  + "\nAdvising location: Kerr Hall, Room 314 ");
}
else if (studentMajor == "MKT")
{
console.log("Major: Marketing "  + "\nAdvising location: Westly Hall, Room 310 ");
}
else 
{
console.log(studentName + "Major: unknown");
}