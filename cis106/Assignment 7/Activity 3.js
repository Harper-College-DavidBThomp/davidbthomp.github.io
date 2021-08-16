//Converts miles to yards, feet, and inches.

main();

function main(){
  let mile = getMile();
  let yard = getYard(mile);
  let foot = getFeet(mile);
  let inches = getInches(mile);
  let kilometer = getKilometer(mile);
  let meters = getMeters(kilometer);
  let centimeters = getCentimeters(meters);
  let choice = pickUnit(yard,foot,inches,kilometer,meters,centimeters);
}

function getMile(){
    mile = prompt("Input distance in  miles", "20");
    return mile
}

function getYard(mile){
    yard = mile * 1760;
    return yard;
}

function getFeet(mile){
    foot = mile * 5280; 
    return foot;
}

function getInches(mile){
    inches = mile * 63360;
    return inches;
}

function getKilometer(mile){
    kilometer = mile * 1.609344;
    return kilometer;
}

function getMeters(kilometer){
    meters = kilometer * 1000;
    return meters;
}

function getCentimeters(meters){
    centimeters = meters * 100;
    return centimeters;
}

function pickUnit(yard,foot,inches,kilometer,meter,centimeters){
    choice = prompt("Would you like that distance in US or metric units?")
    switch(choice){
        case ('US'):
        case ('us'):
            console.log("That is " + yard + " yards, " + foot + " feet, and " + inches + " inches.")
            break;
        case ('metric'):
        case ('Metric'):
            console.log("That is " + kilometer + " kilometers, " + meters + " meters, and " + centimeters + " centimeters.")
            break;
        default:
            console.log("Please enter \'US\' or \'Metric\'.")
        }
}
