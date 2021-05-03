// To Do:
// Dynamically display order information and such as price total as pizzas and toppings are added.
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
            "pizzas": []
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

        document.getElementById("createInfo").innerHTML = "<h2>Account Created.</h2>";


    } else {

        document.getElementById("createInfo").innerHTML = `<h2>Account linked with phone number "${document.getElementById("phone").value}" already exists.</h2>`;
        document.getElementById("phone").value = "";

    }
}

function orderClick() {
    let indexUser = getUserPhone();

    var price;

    if (price === undefined || price === "") {
        price = +0;
    }
    
    if (indexUser < 0) {
        document.getElementById("orderPizzas").innerHTML = `<h2>Customer doesn't exist for phone number "${document.getElementById("phone1").value}".</h2>`;
        document.getElementById("phone1").value = "";
    } else {

        let size = document.getElementById("size").value;

        if (size ==="Small") {
            price += +5.99
        } else if (size === "Medium") {
            price += +7.99
        } else if (size === "Large") {
            price += +9.99
        } else if (size === "X-Large") {
            price += +12.99
        }
        

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
            price += 0.99;
        }
        if (bacon) {
            toppings += "Bacon ";
            price += 0.99;
        }
        if (sausage) {
            toppings += "Sausage ";
            price += 0.99;
        }
        if (pineapple) {
            toppings += "Pineapple ";
            price += 0.99;
        }
        if (onions) {
            toppings += "Onions ";
            price += 0.99;
        }
        if (olives) {
            toppings += "Olives ";
            price += 0.99;
        }
        if (bellpepper) {
            toppings += "Bellpepper ";
            price += 0.99;
        }
        if (mushrooms) {
            toppings += "Mushrooms ";
            price += 0.99;
        }

        if (toppings === ""){
            toppings += "None";
        }

        toppings = toppings.trim();


        let salad = document.getElementById("salad").checked;
        let wings = document.getElementById("wings").checked;
        let fries = document.getElementById("fries").checked;

        let sides = "";

        if (salad) {
            sides += "salad ";
        }
        if (wings) {
            sides += "wings ";
        }
        if (fries) {
            sides += "fires ";
        }
        if (sides === ""){
            sides += "None";
        }

        sides = sides.trim();



        //Get the amount of pizzas ordered and add one to array in JSON

        let order = {
            "pizza": {
                "topping": `${toppings}`,
                "size": `${size}`,
                "sides": `${sides}`,
                "price": `${price}`
            },
        }
        userData[indexUser].pizzas.push(order);


        let fullPrice = 0;
        var i;
        for (i = 0; i < userData[indexUser].pizzas.length; i++) {
            price = Number(userData[indexUser].pizzas[i].pizza.price);
            fullPrice += price;
            document.getElementById("orderPizzas").innerHTML = `<h2>You have ordered ${i + 1} Pizzas for phone number "${document.getElementById("phone1").value}".</h2>`;
            document.getElementById("orderPizzas").innerHTML += `<h2>The price for the order is: $${fullPrice}.</h2>`;
        }

        document.getElementById("phone1").value = "";
        pepperoni = document.getElementById("pepperoni").checked = false;
        bacon = document.getElementById("bacon").checked = false;
        sausage = document.getElementById("sausage").checked = false;
        pineapple = document.getElementById("pineapple").checked = false;
        onions = document.getElementById("onions").checked = false;
        olives = document.getElementById("olives").checked = false;
        bellpepper = document.getElementById("bellpepper").checked = false;
        mushrooms = document.getElementById("mushrooms").checked = false;

        salad = document.getElementById("salad").checked = false;
        wings = document.getElementById("wings").checked = false;
        fries = document.getElementById("fries").checked = false;
    }

}

function getCust() {
    let indexUser = getUserPhone();

    if (indexUser < 0) {
        document.getElementById("CustomerData").innerHTML = `<h2>Phone number: "${document.getElementById("phone2").value}" doesn't exist, please create an account and try again.</h2>`;
        document.getElementById("phone2").value = "";
    } else {
        document.getElementById("CustomerData").innerHTML = `<h2>Customer Information:</h2><br>`;
        document.getElementById("CustomerData").innerHTML += `<h3>First Name: ${userData[indexUser].firstName}</h3><br>`;
        document.getElementById("CustomerData").innerHTML += `<h3>Last Name: ${userData[indexUser].lastName}</h3><br>`;
        document.getElementById("CustomerData").innerHTML += `<h3>Phone Number: ${userData[indexUser].phone}</h3><br>`;
        document.getElementById("CustomerData").innerHTML += `<h3>Address: ${userData[indexUser].location.address}, ${userData[indexUser].location.city}, ${userData[indexUser].location.state}</h3><br><br>`;
        document.getElementById("CustomerData").innerHTML += `<h2>Pizza's Ordered:</h2><br>`;


        // Read out Pizzas and Toppings
        var i;
        for (i = 0; i < userData[indexUser].pizzas.length; i++) {
            document.getElementById("CustomerData").innerHTML += `<h3>Pizza #${i + 1}</h3><br>`;
            document.getElementById("CustomerData").innerHTML += `<h3>Size: ${userData[indexUser].pizzas[i].pizza.size}</h3><br>`;
            document.getElementById("CustomerData").innerHTML += `<h3>Toppings: ${userData[indexUser].pizzas[i].pizza.topping}</h3><br>`;
            document.getElementById("CustomerData").innerHTML += `<h3>Sides: ${userData[indexUser].pizzas[i].pizza.sides}</h3><br><br>`;
        }

        
        let orderPrice1 = orderPrice();
        // document.getElementById("CustomerData").innerHTML += `<h3>Price: ${userData[indexUser].pizzas[i].pizza.price}</h3><br><br>`
        document.getElementById("CustomerData").innerHTML += `<h2>You have ordered ${i} Pizzas for phone number "${document.getElementById("phone2").value}".</h2>`;
        document.getElementById("CustomerData").innerHTML += `<h2>Price: $${orderPrice1}</h2>`;


        document.getElementById("phone2").value = "";
    }
}

// Gets order Price 
function orderPrice() {
    let indexUser = getUserPhone();
    let orderPrice1 = 0;
    var i;
    for (i = 0; i < userData[indexUser].pizzas.length; i++) {
        let price = Number(userData[indexUser].pizzas[i].pizza.price);
        orderPrice1 += price;
    }
    console.log(orderPrice1);
    return orderPrice1;
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
        document.getElementById("CustomerData").innerHTML = "Only 1 phone field may have a value at a time, please try again.";
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