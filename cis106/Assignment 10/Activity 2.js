//Calculates average of grade scores.

main();   

function main() {
    instructions();
    do { 
        getGrade();
        repeat = doRepeat();
    } while (repeat == "Y" || repeat == "y")
}

function instructions() {
    console.log("Please input scores, when done input any negative number to calculate average.");
}

function getGrade() {
    let count = 0;
    let total = 0;
    
    do {
        scores = prompt('Enter a value for scores');
        if (scores >= 0) {
            total = total + Number(scores);
            count = count + 1;
        }
    } while (scores >= 0);
    average = total / count;
    console.log("The average is " + average + ".");
}

function doRepeat() {
	repeat = prompt("Would you like to calculate another distance? (Y)es or (N)o?");
	return repeat;
}
