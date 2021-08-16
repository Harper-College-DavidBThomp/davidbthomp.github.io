//Calculate weekly, monthly, and annual gross pay (based on 12 months per year and 52 weeks per year)
main();

function main(){
    var hours;
    hours = getHours();
    var pay;
    pay = getPay();
    var week;
    week = getWeek(hours, pay);
    var month;
    month = getMonth(week)
    var year;
    year = getYear(month);
    var results;
    results = getResults(week, month, year);
}

function getHours(){
    var getHours = prompt("Average hours per week");
    return getHours
}

function getPay(){
    var getPay = prompt ("Rate of pay per hour");
    return getPay
}

function getWeek(hours,pay){
    var getWeek = hours * pay;
    return getWeek;
}

function getMonth(week){
    var getMonth = week * 4;
    return getMonth;
}

function getYear(month){
    var getYear = month * 13;
    return getYear;
}

function getResults(week, month, year){
    console.log("Weekly pay: " + week);
    console.log("Monthly pay: " + month);
    console.log("Annual pay: " + year)
}
