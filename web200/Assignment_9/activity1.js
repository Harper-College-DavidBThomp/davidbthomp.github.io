 // Asks user for value and number of expressions to display.

 main();

 function main() {
     getDate();
 }


 function getDate() {
     date = new Date();
     let hourTime = date.getHours();
     let minTime = date.getMinutes();
     let secTime = date.getSeconds();
     let year = date.getFullYear();
     let getMonths = date.getMonth();
     let day = date.getDate();
     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var meridiem;

     if (hourTime >= 12) {
         meridiem = "PM";
     } else {
         meridiem = "AM";
     }

     document.getElementById("date").innerHTML = `The date is ${months[getMonths]} ${day}, ${year}`;
     document.getElementById("time").innerHTML = `The time is ${hourTime - 12}:${minTime}:${secTime} ${meridiem}`;
     setInterval(getDate, 1000);
 }