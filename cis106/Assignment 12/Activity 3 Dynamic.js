//Takes grades and provides max, min,average, and numbers in decending order.
//array.sort credited to https://www.w3schools.com/js/js_array_sort.asp

main();

function main() {
    instructions();
    let grades = dynamicArray();
    let order = displayOrder(grades);
    arrayMax(grades);
    arrayMin(grades);
    arrayAverage(order, grades);
}

function instructions() {
    console.log("This program will get the average, min, max, and sort grades in decending order.");
}

function dynamicArray() {
    let grades = [];
    var scores = 0;
    console.log("Please input grades, once a negative grade is entered the program will calulcate results.");
    do {
        var scores = prompt("");
        grades.push(Number(scores));
    }while (scores >= 0);
    grades.pop();
    return grades;
}

function displayOrder(grades) {
    let order = grades.sort(function(a, b){return b-a});
    console.log("The grades sorted from highest to lowest are " + order + ".");
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

function arrayAverage(order, grades){
    var sum = 0;
    for (var i = 0; i < order.length; i++){
        sum += Number(order[i]);
    }
    let amount = grades.length;
    let average = (Number(sum) / Number(amount));
    console.log("The average grade is " + average + ".");
}
