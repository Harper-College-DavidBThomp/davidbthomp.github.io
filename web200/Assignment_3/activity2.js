//This program is to appoximatley convert age into months, days, hours, and seconds
main();

function main() {
    let age = agesubmit();
    let seconds = processSeconds(age);
    let hours = processHours(age);
    let days = processDays(age);
    let months = processMonths(age);
    timeResponse(seconds, hours, days, months);
}

function agesubmit() {
    let age = document.getElementById('input1').value;
    return age;
}

function processSeconds(age) {
    let seconds = age * 31536000;
    return seconds;
}

function processHours(age) {
    let hours = age * 8760;
    return hours;
}

function processDays(age) {
    let days = age * 365;
    return days;
}

function processMonths(age) {
    let months = age * 12;
    return months;
}


function timeResponse(seconds, hours, days, months) {
    document.getElementById("seconds").innerHTML = ("Your age in seconds is " + seconds);
    document.getElementById("hours").innerHTML = ("Your age in hours is " + hours);
    document.getElementById("days").innerHTML = ("Your age in days is " + days);
    document.getElementById("months").innerHTML = ("Your age in months is " + months);
}