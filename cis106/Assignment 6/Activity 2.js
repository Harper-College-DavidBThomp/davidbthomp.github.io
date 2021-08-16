//Approximatley convert age into days, hours, and seconds

main();

function main(){
    let age = getAge();

    let seconds = getSeconds(age);
    let hours = getHours(age);
    let days =  getDays(age);
    let months = getMonths(age);

    displayResults(seconds, hours, days, months);
}

function getAge(){
    let age = prompt("Input age in years: ");
    return age;
}

function getSeconds(age){
    let seconds = age * 31536000; 
    return seconds;
}
    
function getHours(age){
    let hours = age * 8760;
    return hours;
}
    
function getDays(age){
    let days = age * 365;
    return days;
}

function getMonths(age){
    let months = age * 12;
    return months;
}

function displayResults(seconds, hours, days, months){
    console.log("age in seconds: ",seconds);
    console.log("age in hours: ", hours);
    console.log("age in days: ", days);
    console.log("age in months: ", months);
}
