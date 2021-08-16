//Takes grades and provides max, min,average, and numbers in decending order.
//array.sort credited to https://www.w3schools.com/js/js_array_sort.asp
//node.js credited to https://www.vincentntang.com/read-local-text-file-nodejs/

main();

function main() {
  let file = getFile();
  let array = getArray(file);
  let numbers = getNumbers(array);
  let name = getNames(array);

  arrayMax(numbers);
  arrayMin(numbers);
  arrayAverage(numbers);
}

function getFile() {
  var fs = require('fs');
  var filesync = fs.existsSync('scores.txt')
  if(filesync == false){
      console.log("Please use a file named 'scores' with the extention '.txt'.");
      process.exit(1)
  }else{
      var file = fs.readFileSync('scores.txt', 'utf8'); 
      return file;
  }
}

function getArray(file) {
  var fixfile = file.replace(/\r/g, "");
  var array = fixfile.split(/\n/g);
  return array;
}


function getNumbers(array) {
var numbers = [];
var holder;
  for(var i = 0; i < array.length; i += 1) { 
    holder = array[i].split(",");
    numbers.push(holder[1]);
}
console.log(numbers);
return numbers;
}

function getNames(array) {
  var name = [];
  var holder;
  for(var i = 0; i < array.length; i += 1) { 
    holder = array[i].split(",");
    name.push(holder[0]);
}
console.log(name);
return name;
}

function arrayMax(numbers){
  let max = Math.max.apply(null, numbers);
  console.log("The maximum grade is " + max + ".");
}

function arrayMin(numbers){
  let min = Math.min.apply(null, numbers);
  console.log("The minimum grade is " + min + ".");
}

function arrayAverage(numbers){
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
      sum += Number(numbers[i]);
  }
  let amount = numbers.length;
  let average = (Number(sum) / Number(amount));
  console.log("The average grade is " + average.toFixed(2) + ".");
}
