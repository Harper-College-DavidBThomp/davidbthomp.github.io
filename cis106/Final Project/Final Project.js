//Takes values from webpage and converts into arrays for names, descriptions, calories, and price. Also displays average cost, calories, and amount of items on menu.
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    let text = requestPage();
    let array = getArray(text);
    let name = getName(array);
    let description = getDescription(array);
    let calorie = getCalorie(array);
    let price = getPrice(array);

    arrayAmounts(name, description, calorie, price);
    displayMenuStats(name, calorie, price);
    do {
        let number = promptItem(name);
        displayItem(name, description, calorie, price, number);
        repeat = doRepeat();
    } while (repeat == "Y" || repeat == "y");
}


function requestPage() {
    let request = new XMLHttpRequest();
    let url = ('https://www.w3schools.com/xml/simple.xml');
    request.open("GET", url, false);
    request.onreadystatechage = function() {
        if (request.readystate === 4) {
            if (request.status === 404) {
                console.log(
                    "The webapge doesn't appear to be up or existing."
                );
            }
        }
    }
    request.send(null);
    return request.responseText;
}

function getArray(text) {
    var fixfile = text.replace(/\r\n\s+/g, "");
    var breakText = fixfile.split('>');
    breakText.splice(0, 2);
    breakText.pop();
    breakText.pop();

    var goodarray = [];
    var holder;
    for (var i = 0; i < breakText.length; i += 1) {
        holder = breakText[i].split('<')[0];
        goodarray.push(holder);
    }
    var array = goodarray.filter(String);
    return array;
}

function getName(array) {
    try {
        var name = [];
        for (var i = 0; i < array.length; i += 4) {
            array[i].trim();
            array[i].length >= 2;
            array[i].replace(/\s+/, " ");
            name.push(String(array[i]));
        }
        return name;
    } catch {
        console.log("One or more of the names are invalid.");
    }
}

function getDescription(array) {
    try {
        var description = [];
        for (var i = 2; i < array.length; i += 4) {
            array[i].trim();
            array[i].length >= 2;
            array[i].replace(/\s+/, " ");
            description.push(String(array[i]));
        }
        return description;
    } catch {
        console.log("One or more of the descriptions are invalid.");
    }
}

function getCalorie(array) {
    try {
        var calorie = [];
        for (var i = 3; i < array.length; i += 4) {
            array[i].trim();
            array[i].length >= 1;
            array[i].replace(/\s+/, "");
            calorie.push(Number(array[i]));
        }
        return calorie;
    } catch {
        console.log("One or more of the calorie inputs are invalid.");
    }
}

function getPrice(array) {
    try {
        var price = [];
        var test;
        for (var i = 1; i < array.length; i += 4) {
            array[i].trim();
            array[i].length >= 1;
            array[i].replace(/\s+/, "");
            test = array[i].replace("$", '');
            price.push(Number(test));
        }
        return price;
    } catch {
        console.log("One or more of the price inputs are invalid.");
    }
}

function arrayAmounts(name, description, calorie, price) {
    if (name.length = description.length = calorie.length = price
        .length) {
        return;
    } else {
        console.log(
            "One or more of the value for either name, description, calories, or price is missing."
        )
    }
}

function displayMenuStats(name, calorie, price) {
    console.log("There are " + name.length + " items on the menu.")

    var totalcalories = calorie.reduce(function(a, b) {
        return a + b
    }, 0)
    console.log("The average amount of calories per item are " +
        totalcalories / calorie.length + ".")

    var totalprice = price.reduce(function(a, b) {
        return a + b
    }, 0)
    console.log("The average price per item is $" + (totalprice /
        price.length).toFixed(2) + ".")
}

function promptItem(name) {
    console.log('\n')
    for (var i = 0; i < name.length; i += 1) {
        var addition = (i + 1);
        console.log(addition + ") " + name[i])
    }

    var valid = true;
    while (valid) {
        number = prompt('\n' +
            "What item would you like to get the description, calories, and price for? Please use numbers to represent item"
        );
        if (isNaN(number) == false && number > 0 && number <= name
            .length) {
            return number;
            valid = false;
        } else {
            console.log("Please input a valid value");
        }
    }
}

function displayItem(name, description, calorie, price, number) {
    console.log('\n' + "Name - " + name[number - 1]);
    console.log("Description - " + description[number - 1]);
    console.log("Calories - " + calorie[number - 1]);
    console.log("Price - $" + price[number - 1]);

    //The way data is displayed on final project page

    //for(var i = 0; i < name.length; i += 1) { 
    //console.log("Name - " + name[i]);
    //console.log("Description - " + description[i]);
    //console.log("Calories - " + calorie[i]);
    //console.log("Price - $" + price[i]);
    //}
}

function doRepeat() {
    repeat = prompt(
        "\nIf you would like to get values for another item, input 'Y', otherwise input anything else to exit program."
    );
    return repeat;
}
