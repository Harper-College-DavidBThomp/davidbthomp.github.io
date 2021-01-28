  //Calculates average of grade scores.

main();   

function main() {
    getGrade();
}

function getGrade() {
    let count = 0;
    let total = 0;
    
    do {
        scores = prompt('Averages set of numbers, insert numbers and whenc complete enter a negative number.');
        if (scores >= 0) {
            total = total + Number(scores);
            count = count + 1;
        }
    } while (scores >= 0);
    average = total / count;
    document.getElementById("results1").innerHTML = (`The average is ${average}.`);
}