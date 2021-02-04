 // Asks user for value and number of expressions to display.

 main();

 function main() {
     doClean();
     let value = getValue();
     let expressions = getExpressions();
     doMultiplication(value, expressions);
 }

 function doClean() {
     cleanDiv = document.getElementById("div1").innerHTML = "";
     cleanP = document.getElementById("Array").innerHTML = "";
 }

 function getValue() {
     value = document.getElementById('input1').value;
     return value;
 }

 function getExpressions() {
     expressions = document.getElementById('input2').value;
     return expressions;
 }

 function doMultiplication(value, expressions) {
     var countdown;
     var goodArray = [];
     for (countdown > 0; expressions >= 1; expressions--) {
         countdown = value * expressions;
         goodArray.push(Number(countdown));


         // Credit for following code to: https://www.w3schools.com/js/js_htmldom_nodes.asp

         let para = document.createElement("p");
         let node = document.createTextNode(`${value} * ${expressions} = ${countdown}`);
         para.appendChild(node);

         let element = document.getElementById("div1");
         element.appendChild(para);
     }
     document.getElementById("Array").innerHTML = (`The results in an array display are [${goodArray}].`);
 }