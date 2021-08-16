//Converts miles to yards, feet, and inches

main();

function main(){
  var mile;
  mile = getMile();
  var yard;
  yard = getYard(mile);
  var foot;
  foot = getFeet(yard);
  var inches;
  inches = getInches(foot);
  var results
  results = getResults(yard,foot,inches);
}

function getMile(){
    var getMile = prompt("Input distance in miles", "20");
    return getMile
}

function getYard(mile){
    var getYard = mile * 1760;
    return getYard;
}

function getFeet(yard){
    var foot = yard * 3; 
    return foot;
}

function getInches (foot){
    var inches = foot * 12;
    return inches;
}

function getResults(yard,foot,inches){
console.log("That is " + yard + " yards, " + foot + " feet, and " + inches + " inches.");
}
