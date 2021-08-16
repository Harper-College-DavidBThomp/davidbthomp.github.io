// Calculates the average of numbers entered.
   
main();   

function main() {
    instructions();
    let amount = getAmount();
    let average = getAverage(amount);
    displayAverage(average);
}

function instructions() {
    console.log("This program will average out a set of numbers.")
}

function getAmount() {
    amount = prompt("How many numbers will be entered.");
    return amount;
}

function getAverage(amount) {
    let total = 0;
    let count = 0;

    console.log("Please enter scores.");
    while (count < amount) {
        scores = prompt("");
        count = count + 1;
        total += Number(scores);
    }

    return total / amount;
}

function displayAverage(average) {
    console.log("The average is " + average + ".");
}
