
 // Asks user for value and number of expressions to display.

 main();
    
function main (){
    instructions()
    let value = getValue();
    let expressions = getExpressions();
    doMultiplication(value, expressions);
}

function instructions() {
    console.log("Please input a value, then input a number for expressions.");
}

function getValue() {
    value = prompt("Please input a value.");
    return value;
}

function getExpressions() {
    expressions = prompt("Please input amount of expressions.");
    return expressions;
}

function doMultiplication(value, expressions) {
    let multiplication = value * expressions;
    var countdown
    for (countdown > 0; expressions>=1; expressions--) {
        countdown = value * expressions;
        console.log(value + " * " + expressions + " = " + countdown);
    }
    console.log("Thank you for using the program!");
    return multiplication;
}
