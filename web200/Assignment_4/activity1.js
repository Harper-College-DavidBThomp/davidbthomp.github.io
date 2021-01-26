//Converts miles to yards, feet, and inches.

main();

function main() {
    let mile = getMile();
    let yard = getYard(mile);
    let foot = getFeet(mile);
    let inches = getInches(mile);
    let kilometer = getKilometer(mile);
    let meters = getMeters(kilometer);
    let centimeters = getCentimeters(meters);
    result(yard, foot, inches, kilometer, meters, centimeters);
}

function getMile() {
    mile = document.getElementById('input1').value;
    return mile
}

function getYard(mile) {
    yard = mile * 1760;
    return yard;
}

function getFeet(mile) {
    foot = mile * 5280;
    return foot;
}

function getInches(mile) {
    inches = mile * 63360;
    return inches;
}

function getKilometer(mile) {
    kilometer = mile * 1.609344;
    return kilometer;
}

function getMeters(kilometer) {
    meters = kilometer * 1000;
    return meters;
}

function getCentimeters(meters) {
    centimeters = meters * 100;
    return centimeters;
}

function result(yard, foot, inches, kilometer, meters, centimeters) {
    document.getElementById("yard").innerHTML = ("Yards: " + yard);
    document.getElementById("foot").innerHTML = ("Feet: " + foot);
    document.getElementById("inches").innerHTML = ("Inches " + inches);
    document.getElementById("kilometer").innerHTML = ("Kilometers: " + kilometer);
    document.getElementById("meter").innerHTML = ("Meters: " + meters);
    document.getElementById("centimeters").innerHTML = ("Centimeters: " + centimeters);
}