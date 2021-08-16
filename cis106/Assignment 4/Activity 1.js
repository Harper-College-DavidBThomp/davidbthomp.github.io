// Calculate weekly, monthly, and annual gross pay (based on 12 months 
// per year and 52 weeks per year)

console.log("Payment calculator");
var hours = prompt("Average hours per week");
var rate = prompt("Rate of pay per hour");

var week = hours * rate;
var month = week * 4;
var annual = month * 12;

console.log("Weekly pay: " + week);
console.log("Monthly pay: " + month);
console.log("Annual pay: " + annual);
