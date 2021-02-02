// Calculates the average of numbers entered.
   
main();   

function main() {
    let amount = getAmount();
    let average = getAverage(amount);
    displayAverage(average);
}

function getAmount() {
    amount = document.getElementById('input1').value;
    return amount;
}

function getAverage(amount) {
    let total = 0;
    var count;
    
    for (count = 0;count < amount; count++) {
        scores = prompt("Please input scores");
        total += Number(scores);
    }
    average = total/amount;
    return average;
}

function displayAverage(average) {
    document.getElementById("result").innerHTML = (`The average is ${average}.`);
}