// To Do:
// Include fields for name, address, and phone number.
// Allow for multiple toppings per pizza, with at least six toppings to choose from.
// Allow for multiple pizzas per order.
// Include support for at least three pizza sizes, with different prices for toppings based on pizza size.
// Dynamically display order information and price total as pizzas and toppings are added.
// Include 10% sales tax.
// Include a comments section for special notes and/or delivery instructions.
// Your solution will include an Order object, which contains a Customer object, an array of Pizza objects, and a nested array of toppings for each pizza.
// Use AJAX and JSON to submit order information.

"use strict";
let userData = [];

window.addEventListener("load", function () {
    document.getElementById("createAccount").addEventListener("click", createCust);
    document.getElementById("order").addEventListener("click", orderClick);
    document.getElementById("login").addEventListener("click", getCust);
});

// Creates the values for 
function createCust() {

    let orderInfo = orderClick();


    let dataInput = {
        "firstName": `${document.getElementById("firstName").value}`,
        "lastName": `${document.getElementById("lastName").value}`,
        "email": `${document.getElementById("email").value}`,
        "phone": `${document.getElementById("phone").value}`,
        "location": [{
            "address": `${document.getElementById("address").value}`,
            "city": `${document.getElementById("city").value}`,
            "state": `${document.getElementById("state").value}`,
            "postCode": `${document.getElementById("postCode").value}`
        }],
        "pizzas": `${orderArray}`
    };

    userData.push(dataInput);
    console.log(userData);

    let phone = `${document.getElementById("phone").value}`

    return phone;

}

function orderClick() {
    let customer = document.getElementById("phone3").value;

    let phoneNumbers = [];
    var i;
    for (i = 0; i < userData.length; i++) {

    }

    let orderInfo = {
        "Size": "Small",
        "Toppings": "Pepperoni"
    };

    let orderArray = [];
    orderArray.push(orderInfo);

    return orderInfo;
}