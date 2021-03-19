 // Take input from HTML and create Biblography

 main();

 function main() {
     doClean();
     let inputs = getValues();
     biblio(inputs);
 }

 function doClean() {
    cleanDiv= document.getElementById('bibliography').innerHTML = "";
}
 
 function getValues() {
     inputs = {};
     inputs.title = document.getElementById('title').value.trim();
     inputs.fname = document.getElementById('fname').value.trim();
     inputs.lname = document.getElementById('lname').value.trim();
     inputs.year = new Date(document.getElementById('date').value.trim());
     inputs.pub = document.getElementById('pub').value.trim();
     inputs.city = document.getElementById('city').value.trim();
     inputs.state = document.getElementById('state').value.trim();

     if (Number(inputs.title.length) <= 0 || Number(inputs.fname.length) <= 0 || Number(inputs.lname.length) <= 0 || Number(inputs.year.length) <= 0 || Number(inputs.pub.length) <= 0 || Number(inputs.city.length) <= 0 || Number(inputs.state.length) <= 0) {
        document.getElementById("bibliography").innerHTML = ("Make sure inputs are filled");
        return;
     }
    return inputs;
}

function biblio(inputs) {
    document.getElementById("bibliography").innerHTML = (`${inputs.lname}, ${inputs.fname.substring(0, 1).toUpperCase()}. (${inputs.year.getFullYear()}) ${inputs.title}. ${inputs.city}, ${inputs.state.toUpperCase()}: ${inputs.pub}.`);
}
