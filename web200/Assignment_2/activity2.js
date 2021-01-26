//This program is to appoximatley convert age into months, days, hours, and seconds
main();

function main() {
    let age = prompt("How old are you?");
    let seconds = age * 31536000;
    let hours = age * 8760;
    let days = age * 365;
    let months = age * 12;
    document.getElementById("seconds").innerHTML = ("Your age in seconds is " + seconds);
    document.getElementById("hours").innerHTML = ("Your age in hours is " + hours);
    document.getElementById("days").innerHTML = ("Your age in days is " + days);
    document.getElementById("months").innerHTML = ("Your age in months is " + months);
}