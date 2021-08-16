//Takes grades and provides max, min,average, and numbers in decending order.
//array.sort credited to https://www.w3schools.com/js/js_array_sort.asp
//node.js credited to https://www.vincentntang.com/read-local-text-file-nodejs/

main();

function main() {
    try {
        let file = getFile();
        let array = getArray(file);
        let numbers = getNumbers(array);
        let name = getNames(array);

        displayArray(name,numbers)
        arrayMax(numbers);
        arrayMin(numbers);
        arrayAverage(numbers);
    } catch {
        console.log("An unexpected error occurred.")
    }
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
    holder[1] = holder[1].trim();
    holder[1] = Number(holder[1])
    if (isNaN(holder[1]) == true){
      console.log("One or more scores may contain invalid scores, which have been removed.")
    }else {
      numbers.push(holder[1]);
    }
  } 
  return(numbers);
}

function getNames(array) {
  var name = [];
  var holder;
  for(var i = 0; i < array.length; i += 1) { 
    holder = array[i].split(",");
    holder[0] = holder[0].trim();
    if (isNaN(holder[0]) == true){
      name.push(holder[0])
    }else {
      console.log("One or more names contain invalid charcters, which have been removed.")
    }
  }
return name;
}

function displayArray(name,numbers) {
  for(var i = 0; i < name.length; i += 1) { 
    console.log(name[i] + ": " + numbers[i])
  }
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
