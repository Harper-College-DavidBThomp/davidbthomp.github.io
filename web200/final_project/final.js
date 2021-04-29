// To Do:
// Allow for multiple pizzas per order.
// Include support for at least three pizza sizes, with different prices for toppings based on pizza size.
// Dynamically display order information and price total as pizzas and toppings are added.
// Include 10% sales tax.
// Include a comments section for special notes and/or delivery instructions.
// Your solution will include an Order object, which contains a Customer object, an array of Pizza objects, and a nested array of toppings for each pizza.
// Use AJAX and JSON to submit order information.

"use strict";

// Creates Basic JSON Layout

function basicInfo(
    firstName = null,
    lastName = null,
    email = null,
    phone = null,
    location = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.location = location;
}

function Location(
    address = null,
    city = null,
    state = null,
    postal = null) {
    this.address = address;
    this.city = city;
    this.state = state;
    this.postal = postal;
}

// Listens and updates based on focus and click

window.addEventListener("load", function () {
    getJSONInfo();
    document.getElementById("post").addEventListener("click", postClick);
});

// Gets information from webpage or local file

function getJSONInfo() {
    let url = "/order.json";
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
        let JSONResponse = request.responseText;
        JSONResponse = JSON.parse(JSONResponse);
        console.log(JSONResponse);
    };
    request.send(null);
}

// Creates a user

function createBasicInfo() {
    let dataInput = new basicInfo(
        `${document.getElementById("firstName").value}`,
        `${document.getElementById("lastName").value}`,
        `${document.getElementById("email").value}`,
        `${document.getElementById("phone").value}`);

    dataInput.location = new Location(
        `${document.getElementById("address").value}`,
        `${document.getElementById("city").value}`,
        `${document.getElementById("state").value}`,
        `${document.getElementById("postCode").value}`);

    return dataInput;
}

// POST


function postClick() {
    let dataInput = createBasicInfo();
    let JSONdataInput = JSON.stringify(dataInput, null, 2);
    console.log(JSONdataInput);
    
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        document.getElementById("response").innerText = "status: " + request.status + "\n";
        document.getElementById("response").innerText += "responseText:\n" + request.responseText;
    };
    request.send(data);
}