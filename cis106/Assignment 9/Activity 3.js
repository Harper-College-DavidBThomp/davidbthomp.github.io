//Converts miles into metric or US units depending on type requested. Then requests if user wants to enter other distances.

main();

function main() {
	do {
		let mile = getMile();
		choice = pickUnit();
        processDistance(mile, choice);
		repeat = doRepeat();
	} while (repeat == "Y" || repeat == "y");
}

function getMile() {
	mile = prompt("Input distance in  miles", "20");
	return mile;
}

function processDistance(mile, choice) {
	switch (choice) {
		case ('US'):
		case ('us'):
            let yard = calculateYard(mile);
            let foot = calculateFoot(mile);
            let inches = calculateInches(mile);
			console.log("That is " + yard + " yards, " + foot + " feet, and " + inches + " inches.");
			break;
		case ('metric'):
		case ('Metric'):
            let kilometer = calculateKilometer(mile);
            let meters = calculateMeters(kilometer);
            let centimeters = calculateCentimeters(meters);
			console.log("That is " + kilometer + " kilometers, " + meters + " meters, and " + centimeters + " centimeters.");
			break;
		default:
			console.log("Please enter \'US\' or \'Metric\'.");
	}
}

function calculateYard(mile) {
    let yard = mile * 1760;
    return yard;
}

function calculateFoot(mile) {
	let foot = mile * 5280;
    return foot;
}

function calculateInches(mile) {
	let inches = mile * 63360;
    return inches;
}

function calculateKilometer(mile) {
	let kilometer = mile * 1.609344;
    return kilometer;
}

function calculateMeters(kilometer) {
	let meters = kilometer * 1000;
    return meters;
}

function calculateCentimeters(meters) {
	let centimeters = meters * 100;
    return centimeters;
}

function pickUnit() {
	choice = prompt("Would you like that distance in US or metric units?");
    return choice;
}

function doRepeat() {
	repeat = prompt("Would you like to calculate another distance? (Y)es or (N)o?");
	return repeat;
}
