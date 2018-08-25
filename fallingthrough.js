In some situations, you might want to leverage the "falling-through" behavior of switch statements to your advantage.

For example, when your code follows a hierarchical-type structure.

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.

In this example, based on the successful Exploding Kittens Kickstarter campaign (a hilarious card game created by Elan Lee), each successive tier builds on the next by adding more to the output. Without any break statements in the code, after the switch statement jumps to the "nsfw deck", it continues to fall-through until reaching the end of the switch statement.

Also, notice the default case.

var tier = "none";
var output = "You’ll receive ";

switch (tier) {
  ... 
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
Prints: You’ll receive one copy of the Exploding Kittens card game.