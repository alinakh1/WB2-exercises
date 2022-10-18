var length = 39;
var width = 19;
//calculations

var roomDimension = Math.trunc(length * width);
var roomDimensionWithOverage = roomDimension + (roomDimension* 0.1); 
var boxes = Math.trunc(roomDimension / 12);  
//output
console.log("The room dimension " + roomDimensionWithOverage + " square foot ");
console.log("The boxes needed to tile the room " + boxes);