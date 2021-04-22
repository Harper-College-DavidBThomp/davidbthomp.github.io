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
    document.getElementById("get").addEventListener("focus", getFocus);
    document.getElementById("post").addEventListener("focus", postFocus);

    document.getElementById("get").addEventListener("click", getClick);
    document.getElementById("post").addEventListener("click", postClick);
});

// Creates a user

function createBasicInfo() {
    let dataInput = new basicInfo(
        `${document.getElementById("firstName").value}`,
        `${document.getElementById("lastName").value}`,
        `${document.getElementById("email").value}`,
        `${document.getElementById("phone").value}`,
        `${document.getElementById("dateOB").value}`);

    dataInput.location = new Location(
        `${document.getElementById("address").value}`,
        `${document.getElementById("city").value}`,
        `${document.getElementById("state").value}`,
        `${document.getElementById("postCode").value}`);

    return dataInput;
}

// GET

function getFocus() {
    document.getElementById("url").innerText =
        "https://raw.githubusercontent.com/DavidBThomp/davidbthomp.github.io/680ee1d6c1b021dd56f8316632544f4ccd4180d7/web200/Assignment_14/test.json";

    document.getElementById("data").innerText = "";
    document.getElementById("response").innerText = "";
}

function getClick() {
    let url = document.getElementById("url").innerText;
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
        let JSONResponse = request.responseText;
        JSONResponse = JSON.parse(JSONResponse);
        document.getElementById("response").innerText = "status: " + request.status + "\n";
        document.getElementById("response").innerText += "responseText:\n" + request.responseText;
    };
    request.send(null);
}

// POST

function postFocus() {
    document.getElementById("url").innerText =
        "https://raw.githubusercontent.com/DavidBThomp/davidbthomp.github.io/main/web200/Assignment_14/test.json";

    let dataInput = createBasicInfo();
    document.getElementById("data").innerText = JSON.stringify(dataInput, null, 2);
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