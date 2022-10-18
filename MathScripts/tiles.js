//inputs
//Converting meters into Foot
var a = 3.2808;
//Actual dimensions of the room, using meters multiplied by foot
var length = 12 * a;  //length=39
var width = 6 * a;  //width=19
var lengthFeet = Math.trunc(length);
var widthFeet = Math.trunc(width);
//calculations

var roomDimension = Math.trunc(length * width);  /*Math.trunc to return the integer part, 
//calculated square footage of the room */
var boxes = Math.trunc(roomDimension / 12);  /*Calculated how maby boxes we need by taking 
square footage of the room divided by 12 tiles in a box */
//output
console.log(lengthFeet);
console.log(widthFeet);
console.log("The room dimension " + roomDimension + " square foot ");
console.log("The boxes needed to tile the room " + boxes);