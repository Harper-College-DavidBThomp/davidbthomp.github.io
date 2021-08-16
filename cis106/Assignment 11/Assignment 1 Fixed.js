//Takes grades and provides max, min,average, and numbers in decending order.

main();

function main() {
    instructions();
    let amount = getAmount();
    let grades = fixedArray(amount);
    let order = displayOrder(grades);
    arrayMax(grades);
    arrayMin(grades);
    arrayAverage(order, amount);
}

function instructions() {
    console.log("This program will get the average, min, and max for grades.");
}

function getAmount() {
    amount = prompt("How many scores would you like to enter?");
    console.log("Please input scores.");
    return amount;
}

function fixedArray(amount) {
    var grades = new Array(amount);
    var index = 0;
    while (index < amount) {
        var scores = prompt("");
        grades[index] = scores;
        index++;
    }
    return grades;
}

function displayOrder(grades) {
    let order = grades.sort(function(a, b){return a-b});
    console.log("The grades sorted from lowest to highest are " + order + ".");
    return order;
}

function arrayMax(grades){
    let max = Math.max.apply(null, grades);
    console.log("The maximum grade is " + max + ".");
}

function arrayMin(grades){
    let min = Math.min.apply(null, grades);
    console.log("The minimum grade is " + min + ".");
}

function arrayAverage(order, amount){
    var sum = 0;
    for (var i = 0; i < order.length; i++){
        sum += Number(order[i]);
    }
    let average = (Number(sum) / Number(amount));
    console.log("The average grade is " + average + ".");
}
