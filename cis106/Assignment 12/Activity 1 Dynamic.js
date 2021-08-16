//Takes grades and provides max, min,average, and numbers in decending order.

main();

function main() {
    instructions();
    let grades = dynamicArray();
    arrayMax(grades);
    arrayMin(grades);
    arrayAverage(grades);
}

function instructions() {
    console.log("This program will get the average, min, and max.");
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

function arrayMax(grades){
    let max = Math.max.apply(null, grades);
    console.log("The maximum grade is " + max + ".");
}

function arrayMin(grades){
    let min = Math.min.apply(null, grades);
    console.log("The minimum grade is " + min + ".");
}

function arrayAverage(grades){
    var sum = 0;
    for (var i = 0; i < grades.length; i++){
        sum += Number(grades[i]);
    }
    let amount = grades.length;
    let average = (Number(sum) / Number(amount));
    console.log("The average grade is " + average + ".");
}
