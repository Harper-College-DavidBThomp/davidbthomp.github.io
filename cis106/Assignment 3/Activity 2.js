//This program is to appoximatley convert age into months, days, hours, and seconds
var age = prompt("Enter your age in years", "20");

var seconds = age * 31536000;
var hours = age * 8760;
var days = age * 365;
var months = age * 12;

console.log("age in seconds",seconds);
console.log("age in hours", hours);
console.log("age in days", days);
console.log("age in months", months);
