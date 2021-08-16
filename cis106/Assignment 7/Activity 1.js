//Calculate weekly, monthly, and annual gross pay (based on 12 months per year and 52 weeks per year)
main();

function main(){
    getInstructions();
    let hours = getHours();
    let pay = getPay();
    let week = getWeek(hours, pay);
    let month = getMonth(week)
    let year = getYear(month);
    getResults(week, month, year)
}

function getInstructions(){
  console.log("This program will calculate your payrate, including over time based on average weekly hours and pay.");
}

function getHours(){
    hours = prompt("Average hours per week", "20");
    return hours;
}

function getPay(){
    pay = prompt("Rate of pay per hour", "20");
    return pay;
}

function getWeek(hours,pay){
  if (hours > 40){
    week = (pay * 40) +((hours - 40) * (pay * 0.5));
    return week;
   }
   else{
    week = pay * hours;
    return week;
  }
}

function getMonth(week){
    let month = week * 4;
    return month;
}

function getYear(month){
    let year = month * 13;
    return year;
}

function getResults(week, month, year){
    console.log("Weekly pay: " + week);
    console.log("Monthly pay: " + month);
    console.log("Annual pay: " + year)
}
