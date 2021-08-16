// Asks user for year, the calculates if year is a leap year. Then asks usr for
// month number and will display amount of days in that month. 
// Will continue entering numbers until user inputs number >1 and <12.


main();

function main() {
    let year = getYear();
    if( calcLeapYear(year) ) {
        do {
            var month;
            month = getMonth();
            leapYearMonths(month);
    }while (month >= 1 && month <= 12)
}

function instuctions() {
    console.log("Calculates if year input is leap year and how many days " +
        "in month.");
}

function getYear() {
    var year = prompt("Input year to see if that year is a leap year.");
    return year;
}

function calcLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log("This is a leap year.");
        return true;
    } else {
        console.log("This is not a leap year.");
        return false;
    }
}

function getMonth() {
    var month = prompt("Input number of month to see days that for " + 
        "previously input year.");
    return month;
}

function yearMonths(month) {
    var months = ["0 is not a month and", "January" , "Febuary", "March",
        "April", "May", "June", "July", "August", "September", "October",
        "November", "December"]
    var daysYear = ["no", "31", "28", "31", "30", "31", "30", "31", "31",
        "30", "30", "31", "30"]
    console.log(months[month] + " has " + daysYear[month] + " days.")
}

function leapYearMonths(month){
    var months = ["0 is not a month and", "January" , "Febuary", "March",
        "April", "May", "June", "July", "August", "September", "October",
        "November", "December"]
    var daysLeapYear = ["no", "31", "29", "31", "30", "31", "30", "31", "31",
        "30", "30", "31", "30"]
    console.log(months[month] + " has " + daysLeapYear[month] + " days.")
}
