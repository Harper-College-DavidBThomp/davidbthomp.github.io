// This program creates and displays a temperature database
// with options to insert, update, and delete records.
//
// References:
//  https://en.wikibooks.org/wiki/JavaScript
//  https://zellwk.com/blog/async-await-express/
//  https://docs.mongodb.com/drivers/node/usage-examples

const e = require("express");
const express = require("express");
const fs = require("fs");
const { unregisterDecorator } = require("handlebars");
const handlebars = require('handlebars');
const mongodb = require("mongodb")
const router = express.Router();

// Requires a Mongo installation to manage the database.
// Use of a Docker container is recommended.
// See https://en.wikiversity.org/wiki/Docker/MongoDB .
// If both the Node website and Mongo are running in containers, 
// use 172.17.0.2 for the mongodb host address.
// If the Node website and/or Mongo are running locally, use 127.0.0.1
// for the mongodb host address.

// const HOST = "mongodb://172.17.0.2";
// mongodb://localhost:27017 for Local server

const HOST = "mongodb://mongo-server";
const DATABASE = "pizzaOrder";
const COLLECTION = "orders";

router.get("/", async (request, response) => {
    let result = "";

    try {
        result = await getData();
    } catch (error) {
        result = error;
    }

    let source = fs.readFileSync("./templates/lesson10.html");
    let template = handlebars.compile(source.toString());
    let data = {
        table: result
    }
    result = template(data);
    response.send(result);
});

router.post("/", async (request, response) => {
    let result = "";
    let firstNameQuery = request.body.firstNameQuery;

    try {
        // Button Information
        let submit = request.body.action;
        let update = request.body.update;
        let order = request.body.order;

        //CODE IS NOT VERY DRY

        if (submit) {
            // Customer Info
            let firstName = request.body.firstName.trim();
            let lastName = request.body.lastName.trim();
            let address = request.body.address.trim();
            let phoneNumber = request.body.phoneNumber.trim();

            // Pizza Toppings
            let size = request.body.size;
            let pepperoni = request.body.pepperoni;
            let bacon = request.body.bacon;
            let sausage = request.body.sausage;
            let noToppings = "";

            if (pepperoni === undefined) {
                pepperoni = "";
            }
            if (bacon === undefined) {
                bacon = "";
            }
            if (sausage === undefined) {
                sausage = "";
            }
            if ((pepperoni === undefined) || (bacon === undefined) || (sausage === undefined)) {
                noToppings = "No Toppings";
            }

            await custInfoExists(firstName, lastName, address, phoneNumber, size, pepperoni, bacon, sausage, noToppings);
            await insertCustInfo(firstName,lastName,address, phoneNumber, size, pepperoni, bacon, sausage, noToppings);

        } else if (update) {
            // Customer Info
            let firstName = request.body.firstName.trim();
            let lastName = request.body.lastName.trim();
            let address = request.body.address.trim();
            let phoneNumber = request.body.phoneNumber.trim();
            await updateCustInfo(firstName,lastName,address,phoneNumber);
        } else if (order) {
            // Pizza Toppings
            let size = request.body.size;
            let pepperoni = request.body.pepperoni;
            let bacon = request.body.bacon;
            let sausage = request.body.sausage;
            let noToppings = "No Toppings";

            if (pepperoni === undefined) {
                pepperoni = "";
            }
            if (bacon === undefined) {
                bacon = "";
            }
            if (sausage === undefined) {
                sausage = "";
            }
            if ((pepperoni === "True") || (bacon === "True") || (sausage === "True")) {
                noToppings = "";
            }
            await updatePizzaInfo(firstNameQuery, size, pepperoni, bacon, sausage, noToppings);
        }


        result = await getData(order, firstNameQuery);
    } catch (error) {
        result = error;
    }

    let source = fs.readFileSync("./templates/lesson10.html");
    let template = handlebars.compile(source.toString());
    let data = {
        table: result
    }
    result = template(data);
    response.send(result);
});

async function getData(order, firstNameQuery) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);

    let documents = "";
    const defaultPage = await getDocuments(collection);
    const query = await getQuery(collection, firstNameQuery);

    if (order) {
        documents = query;
    } else {
        documents = defaultPage;
    }

    let result = "<table><tr><th>ID</th>";
    result += "<th>First Name</th>";
    result += "<th>Last Name</th>";
    result += "<th>Address</th>";
    result += "<th>Phone Number</th></tr>";
    for (i = 0; i < documents.length; i++) {
        result += "<tr><td>" + documents[i]._id + "</td>";
        result += "<td>" + documents[i].firstName + "</td>";
        result += "<td>" + documents[i].lastName + "</td>";
        result += "<td>" + documents[i].address + "</td>";
        result += "<td>" + documents[i].phoneNumber + "</td></tr>";
    }
    result += "</table>";

    if (order) {
        result += "<br><table><tr><th>Size</th>";
        result += "<th>Pepperoni</th>";
        result += "<th>Bacon</th>";
        result += "<th>Sausage</th>";
        result += "<th>No Toppings</th></tr>";
        for (i = 0; i < documents.length; i++) {
            result += "<tr><td>" + documents[i].size + "</td>";
            result += "<td>" + documents[i].pepperoni + "</td>";
            result += "<td>" + documents[i].bacon + "</td>";
            result += "<td>" + documents[i].sausage + "</td>";
            result += "<td>" + documents[i].noToppings + "</td></tr>";
        }
        result += "</table>";
    }

    await client.close();
    return result;
}

async function getDocuments(collection) {
    return new Promise(function (resolve, reject) {
        collection.find().toArray(function (err, documents) {
            if (err)
                reject(err);
            else
                resolve(documents);
        });
    });
}

async function getQuery(collection, firstNameQuery) {
    return new Promise(function (resolve, reject) {
        collection.find( { firstName: firstNameQuery } ).toArray(function (err, documents) {
            if (err)
                reject(err);
            else
                resolve(documents);
        });
    });
}

async function custInfoExists(firstName, lastName, address, phoneNumber,size, pepperoni, bacon, sausage, noToppings) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const filter = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        size: size,
        pepperoni: pepperoni,
        bacon: bacon,
        sausage: sausage,
        noToppings: noToppings
    };
    const count = await collection.countDocuments(filter);
    await client.close();
    return !!(count);
}

async function insertCustInfo(firstName, lastName,address ,phoneNumber, size, pepperoni, bacon, sausage, noToppings) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const document = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        size: size,
        pepperoni: pepperoni,
        bacon: bacon,
        sausage: sausage,
        noToppings: noToppings
    };
    await collection.insertOne(document);
    await client.close();
}

async function updateCustInfo(firstName,lastName,address,phoneNumber) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const filter = {
        firstName: firstName
    };
    const update = {
        "$set": {
            "lastName": lastName,
            "address": address,
            "phoneNumber": phoneNumber,
        }
    };
    await collection.updateOne(filter, update);
    await client.close();
}

async function updatePizzaInfo(firstNameQuery, size, pepperoni, bacon, sausage, noToppings) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const filter = {
        firstName: firstNameQuery
    };
    const update = {
        "$set": {
            "size": size,
            "pepperoni": pepperoni,
            "bacon": bacon,
            "sausage": sausage,
            "noToppings": noToppings
        }
    };
    await collection.updateOne(filter, update);
    await client.close();
}
module.exports = router;