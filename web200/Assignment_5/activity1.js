//This program is to appoximatley convert age into months, days, hours, and seconds
main();

function main() {
    let age = ageSubmit();
    let choice = pickAge();
    let seconds = processSeconds(age);
    let hours = processHours(age);
    let days = processDays(age);
    let months = processMonths(age);
    processAge(seconds, hours, days, months, choice);
}

function ageSubmit() {
    let age = document.getElementById('input1').value;
    return age;
}

function pickAge() {
    let choice = document.getElementById('input2').value;
    return choice;
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

function processAge(seconds, hours, days, months, choice) {
    switch (choice) {
        case ('M'):
        case ('m'):
            document.getElementById("results").innerHTML = ("Your age in months is " + months);
            break;
        case ('D'):
        case ('d'):
            document.getElementById("results").innerHTML = ("Your age in days is " + days);
            break;
        case ('H'):
        case ('h'):
            document.getElementById("results").innerHTML = ("Your age in hours is " + hours);
            break;
        case ('S'):
        case ('s'):
            document.getElementById("results").innerHTML = ("Your age in seconds is " + seconds);
            break;
        default:
            document.getElementById("mistake").innerHTML = ("Thank you for using program!");
    }
}