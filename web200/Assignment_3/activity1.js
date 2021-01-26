//Calculate weekly, monthly, and annual gross pay (based on 12 months per year and 52 weeks per year)
main();

function main() {
    let hours = getHours();
    let pay = getPay();
    let week = getWeek(hours, pay);
    let month = getMonth(week)
    let year = getYear(month);
    getResults(week, month, year)
}


function getHours() {
    let hours = document.getElementById('input1').value;
    return hours;
}

function getPay() {
    let pay = document.getElementById('input2').value;
    return pay;
}

function getWeek(hours, pay) {
    let week = pay * hours;
    return week;
}

function getMonth(week) {
    let month = week * 4;
    return month;
}

function getYear(month) {
    let year = month * 13;
    return year;
}

function getResults(week, month, year) {
    document.getElementById("week").innerHTML = ("Weekly pay: " + week);
    document.getElementById("month").innerHTML = ("Monthly pay: " + month);
    document.getElementById("year").innerHTML = ("Annual pay: " + year);
}