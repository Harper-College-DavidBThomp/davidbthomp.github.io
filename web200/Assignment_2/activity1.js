//Calculate weekly, monthly, and annual gross pay (based on 12 months per year and 52 weeks per year)
main();

function main() {
    var hours = prompt("Average hours per week");
    var rate = prompt("Rate of pay per hour");

    var week = hours * rate;
    var month = week * 4;
    var annual = month * 12;

    document.getElementById("week").innerHTML = ("Weekly pay: " + week);
    document.getElementById("month").innerHTML = ("Monthly pay: " + month);
    document.getElementById("year").innerHTML = ("Annual pay: " + annual);
}