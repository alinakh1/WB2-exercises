// Define 2 variables for a student : Name and Major
var studentName = "Kate";
var studentMajor = "HIST";

console.log("student: " + studentName);
//let's see the department office based on the major

if (studentMajor == "BIOL") 
{
    console.log("Major: Biology "  + "\Advising location: Science Bldg, Room 310 ");
}
else if (studentMajor == "CSCI")
{
    console.log("Major: Computer Science "  + "\Advising location: Sheppard Hall, Room 314 ");
}
else if (studentMajor == "ENG")
{
    console.log("Major: English "  + "\Advising location: Kerr Hall, Room 201 ");
}
else if (studentMajor == "HIST")
{
    console.log("Major: History "  + "\Advising location: Kerr Hall, Room 314 ");
}
else if (studentMajor == "MKT")
{
    console.log("Major: Marketing "  + "\nAdvising location: Westly Hall, Room 310 ");
}
else 
{
    console.log(studentName + "Major: unknown");
}