// Calculates the average of numbers entered.

main();

function main() {
    doClean();
    let date = getDate();
    convertDate(date);
    // displayAverage(average);
}

function doClean() {
    document.getElementById("date").innerHTML = "";
}

function getDate() {
    date = document.getElementById('input1').value; //Returns Date in format YYYY-MM-DD UTC Time
    return date;
}

function convertDate(date) {
    let currentTime = new Date().getHours();

    date = `${date}T${currentTime}:00:00Z`

    let goodDate = new Date(date);
    let month = goodDate.getMonth();
    let day = goodDate.getDate();
    let year = goodDate.getFullYear();

    let nameMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("date").innerHTML = `The date is ${nameMonths[month]} ${day}, ${year}`;
}