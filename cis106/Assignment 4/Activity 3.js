//Converts miles to yards, feet, and inches

console.log("How far is it?");

var mile = prompt("Input distance in miles.", "20");

var yard = mile * 1760;
var foot = yard * 3;
var inches = foot * 12;

console.log("That is " + yard + " yards, " + 
    foot + " feet, and " + 
    inches + " inches.");
