// Take a dogs name and age and convert into dog years (1 human year = 7 dog years)
main();

function main(){
    let name = getName();
    let age = getAge();
    
    let humanAge = getHumanAge(age);
    
    displayResults(name,humanAge);
}
    
function getName(){
    let name = prompt("Enter Dog's Name", "Max");
    return name;
}
    
function getAge(){
    let age = prompt("Enter Dog's Age", "4");
    return age;
}
    
function getHumanAge(age){
    let humanAge = age * 7;
    return humanAge;
}

function displayResults(name,humanAge){
    console.log(name + " is " + humanAge + " in human years!");
}
