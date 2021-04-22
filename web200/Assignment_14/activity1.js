// This program demonstrates JavaScript AJAX and JSON.
//
// References:
//   https://en.wikibooks.org/wiki/JavaScript
//   https://jsonplaceholder.typicode.com

"use strict";

// Creates Basic JSON Layout

function basicInfo(
    fName = null,
    lName = null,
    email = null,
    phone = null,
    dOB = null,
    location = null) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.phone = phone;
    this.dOB = dOB;
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
    getURL();

    document.getElementById("get").addEventListener("focus", getFocus);
    document.getElementById("post").addEventListener("focus", postFocus);

    document.getElementById("get").addEventListener("click", getClick);
    document.getElementById("post").addEventListener("click", postClick);
});

// Creates a user

function createBasicInfo() {
    let basic = new basicInfo(
        "John",
        "Smith",
        "jsmith@example.com",
        "123-555-1234",
        "2000-03-20");

    basic.address = new Location(
        "123 Any Street",
        "Hoffman Estates",
        "Illinois",
        "12345");

    return user;
}

// Current URL

function getURL() {
    let currentURL = window.location.href;
    document.getElementById("url").innerText = currentURL;
}

// GET

function getFocus() {
    let url = document.getElementById("url").innerText;


    document.getElementById("data").innerText = "";
    document.getElementById("response").innerText = "";
}

function getClick() {
    let url = document.getElementById("url").innerText;
    url = url.replace('activity1.html', 'test.json');
    console.log(url);

    

    document.getElementById("response").innerText += "responseText:\n" + request.responseText;

}

// POST

function postFocus() {
    document.getElementById("url").innerText =
        "";

    let user = createUser();
    document.getElementById("data").innerText = JSON.stringify(user, null, 2);
    document.getElementById("response").innerText = "";
}

function postClick() {
    let url = document.getElementById("url").innerText;
    let data = document.getElementById("data").innerText;
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        document.getElementById("response").innerText = "status: " + request.status + "\n";
        document.getElementById("response").innerText += "responseText:\n" + request.responseText;
    };
    request.send(data);
}