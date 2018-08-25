/*
Sometimes, you might find yourself with the following type of conditional.

var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);
Prints: "green"

In this example, the variable color is being assigned to either "green" or "red" based on the value of isGoing. This code works, but it’s a rather lengthy way for assigning a value to a variable. Thankfully, in JavaScript there’s another way.

TIP: Using if(isGoing) is the same as using if(isGoing === true). Alternatively, using if(!isGoing) is the same as using if(isGoing === false).

Ternary operator
The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

conditional ? (if condition is true) : (if condition is false)
To use the ternary operator, first provide a conditional statement on the left-side of the ?. Then, between the ? and : write the code that would run if the condition is true and on the right-hand side of the : write the code that would run if the condition is false. For example, you can rewrite the example code above as:

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);
Prints: "green"

This code not only replaces the conditional, but it also handles the variable assignment for color.

If you breakdown the code, the condition isGoing is placed on the left side of the ?. Then, the first expression, after the ?, is what will be run if the condition is true and the second expression after the, :, is what will be run if the condition is false.
*/

var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

//or

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);
Prints: "green"

//or 
conditional ? (if condition is true) : (if condition is false)