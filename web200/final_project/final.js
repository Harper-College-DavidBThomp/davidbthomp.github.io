// To Do:
// Allow for multiple pizzas per order.
// Include support for at least three pizza sizes, with different prices for toppings based on pizza size.
// Dynamically display order information and price total as pizzas and toppings are added.
// Include 10% sales tax.
// Include a comments section for special notes and/or delivery instructions.
// Your solution will include an Order object, which contains a Customer object, an array of Pizza objects, and a nested array of toppings for each pizza.
// Use AJAX and JSON to submit order information.

// Refernce:

"use strict";

// Full JSON Array 

let data = [];

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
    document.getElementById("post").addEventListener("click", postClick);
    document.getElementById("login").addEventListener("click", getCust);
});

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

// Gets all JSON Info

function getFullData(data) {
    let datafull = data;
    return datafull;
}


// POST

function postClick() {
    let dataInput = createBasicInfo();
    let dataFull = getFullData(data);

    // Gets Phone Numbers for possible Logins into possible logins array
    let possibleLogins = [];
    var i;
    for (i = 0; i < data.length; i++) {
        possibleLogins.push(dataFull[i].phone);
    }


    // Checks Phone Numbers against customer input login phone number
    let requestLogin = possibleLogins.indexOf(dataInput.phone);

    if (requestLogin < 0) {
        data.push(dataInput);
        document.getElementById("CreateAccount").innerHTML = "<h2>Customer Account Created.</h2>"
    } else {
        document.getElementById("CreateAccount").innerHTML = "<h2>Customer already exists.</h2>";
    }
}

// Reads Full Data and parses by Phone Number

function getCust() {
    let login = document.getElementById("phone2").value;
    let dataFull = getFullData(data);

    // Gets Phone Numbers for possible Logins into possible logins array
    let possibleLogins = [];
    var i;
    for (i = 0; i < data.length; i++) {
        possibleLogins.push(dataFull[i].phone);
    }


    // Checks Phone Numbers against customer input login phone number
    let goodLogin = possibleLogins.indexOf(login);

    if (goodLogin < 0) {
        document.getElementById("CustomerData").innerHTML = "<h2>User doesn't exist, please create an account and try again.</h2>"
    } else {
        document.getElementById("CustomerData").innerHTML = "<h2>Customer Information and Pizza's Ordered:</h2>"
    }

}