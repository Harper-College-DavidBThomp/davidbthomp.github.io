// Calculates the average of numbers entered.

main();

function doClean() {
    document.getElementById("average").innerHTML = "";
    document.getElementById("hidden").innerHTML = "";
    document.getElementById("numbers").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    document.getElementById("average").innerHTML = "";
}

function main() {
    getInputs();
    let array = getArray();
    display(array);
    let total = getTotal(array);
    average(array, total);
}

function getInputs() {
    let userInputs = (document.getElementById('input1').value);
    if (userInputs != "") {
        document.getElementById("hidden").innerHTML += `${userInputs};`;
    } else {
        document.getElementById("done").innerHTML = `Please press reset button to reset`
    }
}

function getArray() {
    let arrayValues = document.getElementById("hidden").innerHTML;
    let array = arrayValues.split(";")
    for (var i = 0; i < array.length; i++) {
        array[i] = +array[i];
    }
    array.pop();
    return array;
}

function display(array) {
    document.getElementById("numbers").innerHTML = `The numbers entered so far are ${array}`;
}

function getTotal(array) {
    let total = array.reduce(function (a, b) {
        return a + b;
    }, 0);

    document.getElementById("total").innerHTML = `The total of numbers entered is ${total}`;
    return total;
}

function average(array, total) {
    let average = total / array.length;
    document.getElementById("average").innerHTML = `The average of numbers so far are ${average.toFixed(2)}`;
}




// function getAverage(amount) {
//     let total = 0;
//     var count;
//     scoreCount = [];

//     for (count = 0; count < amount; count++) {
//         scores = prompt("Please input scores");
//         total += Number(scores);
//         scoreCount.push(scores);
//     }
//     average = total / amount;
//     document.getElementById("array").innerHTML = (`The numbers entered in an array were ${scoreCount}.`)
//     return average;
// }

// function displayAverage(average) {
//     document.getElementById("result").innerHTML = (`The average is ${average}.`);
// }