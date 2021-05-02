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
    let indexUser = getUserPhone();
    if (indexUser < 0) {

    let dataInput = {
        "firstName": `${document.getElementById("firstName").value}`,
        "lastName": `${document.getElementById("lastName").value}`,
        "email": `${document.getElementById("email").value}`,
        "phone": `${document.getElementById("phone").value}`,
        "location": {
            "address": `${document.getElementById("address").value}`,
            "city": `${document.getElementById("city").value}`,
            "state": `${document.getElementById("state").value}`,
            "postCode": `${document.getElementById("postCode").value}`
        },
        "pizzas": [
        ]
    };

    userData.push(dataInput);

    // Clears inputs
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("postCode").value = "";

    document.getElementById("createInfo").innerHTML = "Account Created.";


} else {

    document.getElementById("createInfo").innerHTML = "Account Already Exists.";

}
}

function orderClick() {

    let indexUser = getUserPhone();

    if (indexUser < 0) {
        console.log("Customer not real");
    } else {
        console.log("Customer real");

        let size = document.getElementById("size").value;

        let pepperoni = document.getElementById("pepperoni").checked;
        let bacon = document.getElementById("bacon").checked;
        let sausage = document.getElementById("sausage").checked;
        let pineapple = document.getElementById("pineapple").checked;
        let onions = document.getElementById("onions").checked;
        let olives = document.getElementById("olives").checked;
        let bellpepper = document.getElementById("bellpepper").checked;
        let mushrooms = document.getElementById("mushrooms").checked;

        let toppings = "";

        if (pepperoni) {
            toppings += "Pepperoni ";
        } 
        if (bacon) {
            toppings += "Bacon ";
        }
        if (sausage) {
            toppings += "Sausage ";
        }
        if (pineapple) {
            toppings += "Pineapple ";
        }
        if (onions) {
            toppings += "Onions ";
        }
        if (olives) {
            toppings += "Olives ";
        }
        if (bellpepper) {
            toppings += "Bellpepper ";
        }
        if (mushrooms) {
            toppings += "Mushrooms ";
        }

        toppings = toppings.trim();

        //Get the amount of pizzas ordered and add one

        let order = {
            "pizza1": {
                "topping": `${toppings}`,
                "size": `${size}`
            },
        }
       userData[indexUser].pizzas.push(order);
       
    }

}


// Checks if the customer exists, and if so their index number in userdata

function getUserPhone() {
    let login = "";

    let login1 = document.getElementById("phone").value;
    let login2 = document.getElementById("phone1").value;
    let login3 = document.getElementById("phone2").value;

    if (login1 === "" && login2 === "") {
        login = login3;
    } else if (login2 === "" && login3 === "") {
        login = login1;
    } else if (login1 === "" && login3 === "") {
        login = login2;
    } else {
        document.getElementById("createAccount").innerHTML = "Only 1 login field may have a value at a time, please try again.";
    }

    let phoneNumbers = [];
    var i;
    for (i = 0; i < userData.length; i++) {
        phoneNumbers.push(userData[i].phone);
    }

    // Checks Phone Numbers against customer input login phone number
    let indexUser = phoneNumbers.indexOf(login);

    // if (indexUser< 0) {
    //     console.log("Customer not real");
    // } else {
    //     console.log("Customer real");
    // }

    return indexUser;

}