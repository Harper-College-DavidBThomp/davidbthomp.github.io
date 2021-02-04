// Calculates the average of numbers entered.
   
main();   

function main() {
    doClean();
    let amount = getAmount();
    let average = getAverage(amount);
    displayAverage(average);
}

function doClean() {
    cleanResult = document.getElementById("result").innerHTML = "";
}

function getAmount() {
    amount = document.getElementById('input1').value;
    return amount;
}

function getAverage(amount) {
    let total = 0;
    var count; 
    scoreCount = [];
    
    for (count = 0;count < amount; count++) {
        scores = prompt("Please input scores");
        total += Number(scores);
        scoreCount.push(scores);
    }
    average = total/amount;
    document.getElementById("array").innerHTML += (`The numbers entered in an array were ${scoreCount}.`)
    return average;
}

function displayAverage(average) {
    document.getElementById("result").innerHTML += (`The average is ${average}.`);
}