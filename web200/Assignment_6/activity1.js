 // Asks user for value and number of expressions to display.

 main();

 function main() {
     let value = getValue();
     let expressions = getExpressions();
     doMultiplication(value, expressions);
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
     let multiplication = value * expressions;
     var countdown;
     document.getElementById("results1").innerHTML = (`${value} * ${expressions} = ${multiplication}`);
     while (expressions > 1) {
         expressions = expressions - 1;
         countdown = value * expressions;

         //  Credit for following code to: https://www.w3schools.com/js/js_htmldom_nodes.asp
        
         let para = document.createElement("p");
         let node = document.createTextNode(`${value} * ${expressions} = ${countdown}`);
         para.appendChild(node);
         let element = document.getElementById("div1");
         element.appendChild(para);
     }
     return multiplication;
 }