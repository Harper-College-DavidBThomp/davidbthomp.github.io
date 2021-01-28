//Converts miles into metric or US units depending on type requested. Then requests if user wants to enter other distances.

main();

function main() {
    let mile = getMile();
    let choice = unitChoice();
    let yard = getYard(mile);
    let foot = getFeet(mile);
    let inches = getInches(mile);
    let kilometer = getKilometer(mile);
    let meters = getMeters(kilometer);
    let centimeters = getCentimeters(meters);
    processDistance(yard, foot, inches, kilometer, meters, centimeters, choice);
}

function processDistance(yard, foot, inches, kilometer, meters, centimeters, choice) {
	switch (choice) {
		case ('US'):
		case ('us'):
            document.getElementById("result1").innerHTML = ("Yards: " + yard);
            document.getElementById("result2").innerHTML = ("Feet: " + foot);
            document.getElementById("result3").innerHTML = ("Inches " + inches);
			break;
		case ('metric'):
		case ('Metric'):
            document.getElementById("result1").innerHTML = ("Kilometers: " + kilometer);
            document.getElementById("result2").innerHTML = ("Meters: " + meters);
            document.getElementById("result3").innerHTML = ("Centimeters: " + centimeters);			
            break;
		default:
			document.getElementById("mistake").innerHTML = ("Thank you for using program!");
	}
}

function getMile() {
    mile = document.getElementById('input1').value;
    return mile;
}

function unitChoice() {
    choice = document.getElementById('input2').value;
    return choice;
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