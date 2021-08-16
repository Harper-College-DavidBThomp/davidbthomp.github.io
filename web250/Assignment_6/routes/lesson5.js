// This program reads a user-selected text file of Storms.
// Converts Winds to MPH and Saffir-Simpson Scale Category
//
// File format:
// Date,Storm,MaximumSustainWinds
// November 3, 1970,1970 Bhola cyclone,240 km/h
//
//  https://www.mathsisfun.com/temperature-conversion.html
//  https://en.wikibooks.org/wiki/JavaScript
//  https://www.npmjs.com/package/express-fileupload

const express = require('express')
const fs = require("fs");
const handlebars = require('handlebars');
const router = express.Router()

router.get("/", function (request, response) {
    let source = fs.readFileSync("./templates/lesson5.html");
    let template = handlebars.compile(source.toString());
    let data = {
        table: ""
    }
    result = template(data);
    response.send(result);
});

router.post("/", function (request, response) {
    let result = "";

    if (!request.files || Object.keys(request.files).length == 0) {
        result = "No file selected"
    } else {
        let file = request.files.file; 
        result += "<h2>" + file.name + "</h2>"; //Top Title of file uploaded
        result += processFile(file) //Runs processFile
    }

    let source = fs.readFileSync("./templates/lesson5.html");
    let template = handlebars.compile(source.toString());
    let data = {
        table: result //Result from table in handlebars template of table
    }
    result = template(data);
    response.send(result);
});

function processFile(file) {
    let result = "<table><tr><th>Date</th><th>Storm</th><th>MaximumSustainWinds</th><th>MilesPerHour</th><th>Saffir-SimpsonScale</th></tr>"; //Provides top 2 Table names
    let text = file.data.toString(); //Converts file data to stirngs
    let lines = text.trim().split("\n"); //New lines after celcius are split in new array


    // forEach doesn't return a value. Using global.forEach instead.
    global.forEach = "";

    lines.forEach(processLine); //calls to process each line in array

    result += global.forEach; //adds each global foreach from processLine
    delete global.forEach; 

    result += "</table>"; //Ends table
    return result //returns full table
}

function processLine(line) {
    // skip heading
    let index = line.indexOf("Date,Storm,MaximumSustainWinds,MilesPerHour,Saffir-SimpsonScale"); //returns first occurance of string entered
    if (index >= 0) {
        return;
    }

    //find date
    let dateStart = line.charAt(0); //Find the first string of "," 
    let dateEnd = line.indexOf(","); //finds the first last index of "," which is after the storm
    if (dateStart < 0 || dateEnd < 0) { //If , or second , is not found, then the file is invalid
        global.forEach += "Invalid file format1";
        return
    } //If invalid then reutrn invalid file format, if valid keeps going

    // find storm
    let start = line.indexOf(","); //Find the first string of "," 
    let end = line.lastIndexOf(","); //finds the first last index of "," which is after the storm
    if (start < 0 || end < 0) { //If , or second , is not found, then the file is invalid
        global.forEach += "Invalid file format2";
        return
    } //If invalid then reutrn invalid file format, if valid keeps going

    //find wind
    let windStart = line.lastIndexOf(","); //Find the first string of "," 
    let windEnd = line.lastIndexOf("k"); //finds the first last index of "," which is after the storm
    if (windStart < 0 || windEnd < 0) { //If , or second , is not found, then the file is invalid
        global.forEach += "";
        return
    } //If invalid then reutrn invalid file format, if valid keeps going

    let date = (line.substring(dateStart - 2, dateEnd - 10));
    let storm = (line.substring(start + 1, end)); //Starts at the "," and takes anything between that and the end, which is the end of the number
    let wind = (line.substring(windStart + 1, windEnd - 1)); //Starts at the last index of "," and take anything between that and windEnd, which is "k"
    let milesPer = wind * 0.621371;  //Maths to get miles per hour



    global.forEach += "<tr><td>" + date + "</td>";
    global.forEach += "<td>" + storm + "</td>"; //Adds each array to table element
    global.forEach += "<td>" + wind + " km/h" + "</td>"; //adds each fahrenheit element to table
    global.forEach += "<td>" + milesPer.toFixed(2) + " mp/h" + "</td>";

    if (wind >= 157) {
        let scale = "Category Five";
        global.forEach += "<td style=\"color:red\">" + scale  + "</td></tr>";
    } else if (wind < 157 && wind >= 130) {
        scale = "Category Four";
        global.forEach += "<td style=\"color:darkorange\">" + scale  + "</td></tr>";
    } else if (wind < 130 && wind >= 110) {
        scale = "Category Three";
        global.forEach += "<td style=\"color:orange\">" + scale  + "</td></tr>";
    } else if (wind < 110 && wind >= 96) {
        scale = "Category Two";
        global.forEach += "<td style=\"color:yellow\">" + scale  + "</td></tr>";
    } else {
        scale = "Category One";
        global.forEach += "<td style=\"color:lightyellow\">" + scale  + "</td></tr>";
    }
}

module.exports = router;