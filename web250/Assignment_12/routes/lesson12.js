// This program uses MongoDB to login, password encryption, and different page results
//
// References:
//  https://en.wikibooks.org/wiki/JavaScript
//  https://zellwk.com/blog/async-await-express/
//  https://docs.mongodb.com/drivers/node/usage-examples

const express = require("express");
const fs = require("fs");
const {
    unregisterDecorator
} = require("handlebars");
const handlebars = require('handlebars');
const mongodb = require("mongodb")
const bcrypt = require("bcrypt");
const {
    count
} = require("console");
const {
    request
} = require("express");
const router = express.Router();

// Requires a Mongo installation to manage the database.
// Use of a Docker container is recommended.
// See https://en.wikiversity.org/wiki/Docker/MongoDB .
// If both the Node website and Mongo are running in containers, 
// use 172.17.0.2 for the mongodb host address.
// If the Node website and/or Mongo are running locally, use 127.0.0.1
// for the mongodb host address.

// const HOST = "mongodb://172.17.0.2";
// const HOST = "mongodb://mongo-server";
// mongodb://localhost:27017 for Local server

// Logins Already Created:
// Brendan, Password
// admin, admin
// user, user

const HOST = "mongodb://mongo-server";
const DATABASE = "pizzaOrder";
const COLLECTION = "users";
const COLLECTIONORDER = "orders";



router.get("/", async (request, response) => {
    let username = request.cookies.username;
    if (username = "j:null") {
        username = null;
    }
    let userid = request.session.userid;
    result = build_form(username, userid);
    response.send(result);
});

router.post("/", async (request, response) => {
    let result = "";
    let userid = "";
    let username = request.body.username;
    let password = request.body.password;
    let status = request.body.status;
    let createLogin = request.body["createLogin"];
    let updateLogin = request.body["updateLogin"];
    let login = request.body["log-in"];
    let logout = request.body["log-out"];
    let forgetme = request.body["forget-me"];
    let reload = request.body["reload"];

    let generatedHashedPassword = generateHashedPassword(password);

    let inputConfirmed = "";


    await findCollections();

    try {

        if (await findBaseUsers() === null) {
            await insertBaseUsers();
        }

        if (createLogin) {
            if (!await usernameExists(username)) {
                await insertNewUser(username, generatedHashedPassword, status);
                username = null;
                inputConfirmed = "Login and Password info recorded, please login again.";
                result = build_form(username, userid, inputConfirmed);
                response.cookie("username", username);
                response.send(result);
            } else {
                inputConfirmed = "Username already exists or is taken, please create unique username and password.";
                username = null;
                result = build_form(username, userid, inputConfirmed);
                response.cookie("username", username);
                response.send(result)
            }

        } else if (updateLogin) {

            if (await usernameExists(username)) {
                await updateUser(username, generatedHashedPassword, status);
                let userid = await updateUser(username, generatedHashedPassword, status);
                username = null;
                inputConfirmed = "User login has been updated, please login again."
                result = build_form(username, userid, inputConfirmed);
                response.cookie("username", username);
                response.send(result);
            } else {
                username = null;
                inputConfirmed = "User doesn't exist, please submit valid username."
                result = build_form(username, userid, inputConfirmed);
                response.cookie("username", username);
                response.send(result);
            }

        } else if (login) {


            let user = await findSingleUser(username);
            if (await usernameExists(username)) {
                if (await authenticateUser(username, password)) {

                    if (request.session.page_views) {
                        request.session.page_views++;
                        inputConfirmed = ("You successfully logged in " + request.session.page_views + " times");
                    } else if (request.session.page_views = 1) {
                        inputConfirmed = ("Welcome to this page for the first time!");
                    }

                    let userid = user._id;
                    let status = user.status;
                    request.session.userid = userid;

                    if (status === "employee") {
                        result = build_formEmployee(username, userid, inputConfirmed);
                    } else if (status === "manager") {
                        result = build_formManager(username, userid, inputConfirmed);
                    } else if (status === 'disable') {
                        inputConfirmed = "This account has been disabled."
                        result = build_formCustomer(username, userid, inputConfirmed);
                    } else if (status === "customer") {
                        result = build_formCustomer(username, userid, inputConfirmed);
                    }


                    response.cookie("username", username);
                    response.send(result);
                } else {

                    if (request.session.fail_views) {
                        request.session.fail_views++;
                        inputConfirmed = "Invalid password, please try again. There have been " + request.session.fail_views + " failed login attempts."
                    } else if (request.session.fail_views = 1) {
                        inputConfirmed = ("Welcome to this fail login attempt page for the first time!");
                    }

                    result = build_form(username, userid, inputConfirmed);
                    response.cookie("username", username);
                    response.send(result);
                }
            } else {
                let inputConfirmed = "Invalid username, please try again.";
                username = null;
                result = build_form(username, userid, inputConfirmed);
                response.cookie("username", username);
                response.send(result)
            }

        } else if (logout) {

            request.session.destroy();
            let username = request.cookies.username;
            let userid = null;
            result = build_form(username, userid, inputConfirmed);
            response.send(result);

        } else if (forgetme) {

            request.session.destroy();
            result = build_form(null, null);
            response.cookie("username", "", {
                expires: 0
            });
            response.send(result);

        } else if (reload) {

            response.redirect(request.originalUrl);

        }

    } catch (error) {
        result = error;
    }
});

function build_formCustomer(username, userid, inputConfirmed) {
    let cookie = !!username;
    let session = !!userid;
    if (username && userid) {
        welcome = "Welcome back " + username + "! You are logged in."
    } else if (username) {
        welcome = "Welcome back " + username + "! Please log in.";
    } else {
        welcome = "Welcome! Please log in.";
    }

    let source = fs.readFileSync("./templates/lesson12customer.html");
    let template = handlebars.compile(source.toString());
    let data = {
        cookie: cookie,
        session: session,
        welcome: welcome,
        username: username,
        table: inputConfirmed
    }
    result = template(data);
    return result;
}

function build_formEmployee(username, userid, inputConfirmed) {
    let cookie = !!username;
    let session = !!userid;
    if (username && userid) {
        welcome = "Welcome back " + username + "! You are logged in."
    } else if (username) {
        welcome = "Welcome back " + username + "! Please log in.";
    } else {
        welcome = "Welcome! Please log in.";
    }

    let source = fs.readFileSync("./templates/lesson12employee.html");
    let template = handlebars.compile(source.toString());
    let data = {
        cookie: cookie,
        session: session,
        welcome: welcome,
        username: username,
        table: inputConfirmed
    }
    result = template(data);
    return result;
}

function build_formManager(username, userid, inputConfirmed) {
    let cookie = !!username;
    let session = !!userid;
    if (username && userid) {
        welcome = "Welcome back " + username + "! You are logged in."
    } else if (username) {
        welcome = "Welcome back " + username + "! Please log in.";
    } else {
        welcome = "Welcome! Please log in.";
    }

    let source = fs.readFileSync("./templates/lesson12manager.html");
    let template = handlebars.compile(source.toString());
    let data = {
        cookie: cookie,
        session: session,
        welcome: welcome,
        username: username,
        table: inputConfirmed
    }
    result = template(data);
    return result;
}

// Also does this have to be async? Nothing awaiting...
function build_form(username, userid, inputConfirmed) {
    let cookie = !!username;
    let session = !!userid;
    if (username && userid) {
        welcome = "Welcome back " + username + "! You are logged in."
    } else if (username) {
        welcome = "Welcome back " + username + "! Please log in.";
    } else {
        welcome = "Welcome! Please log in.";
    }

    let source = fs.readFileSync("./templates/lesson12.html");
    let template = handlebars.compile(source.toString());
    let data = {
        cookie: cookie,
        session: session,
        welcome: welcome,
        username: username,
        table: inputConfirmed
    }
    result = template(data);
    return result;
}

async function findCollections() {
    const client = mongodb.MongoClient(HOST);
    await client.connect();

    const database = client.db(DATABASE);

    const collection = database.collection(COLLECTION);
    const collectionOrder = database.collection(COLLECTIONORDER);

    const usersDocument = await getUsers(collection);
    const orderDocuemnt = await getOrders(collectionOrder);


}

async function getUsers(collection) {
    return new Promise(function (resolve, reject) {
        collection.find().toArray(function (err, documents) {
            if (err)
                reject(err);
            else
                resolve(documents);
        });
    });
}

async function getOrders(collectionOrder) {
    return new Promise(function (resolve, reject) {
        collectionOrder.find().toArray(function (err, documents) {
            if (err)
                reject(err);
            else
                resolve(documents);
        });
    });
}

async function userExists(username, password) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const filter = {
        username: username,
        password: password
    };
    const count = await collection.countDocuments(filter);
    await client.close();
    return !!(count);
}

async function usernameExists(username) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const filter = {
        username: username
    };
    const count = await collection.countDocuments(filter);
    await client.close();
    return !!(count);
}


async function insertNewUser(username, password, status) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const document = {
        username: username,
        password: password,
        status: status
    };
    await collection.insertOne(document);
    await client.close();
}

async function findBaseUsers() {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);

    const filter = {
        username: "employee"
    };

    let baseUser = await collection.findOne(filter);
    await client.close();
    return baseUser;
}

async function insertBaseUsers() { // Clean up and make insert multiple users
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);
    const employee = {
        username: "employee",
        password: "$2b$10$3a/yKpp2TDIkCl8MbQe1nelRhJDox0TleZodsQXcKq2yRQV4BDCPu",
        status: "employee"
    };

    const manager = {
        username: "manager",
        password: "$2b$10$hx9gYevjOrJSCgytWB8GWOPhU5IkF4sQSZVJafyFJfIv1nIMWkh7G",
        status: "manager"
    };

    const disabledUser = {
        username: "disabled user",
        password: "$2b$10$.IagCDjlAqKJgwmrn.N2a.PUx.Fw41i0i3zK00N.OKuqf0JkvCgzG",
        status: "disabled"
    };

    const customer = {
        username: "customer",
        password: "$2b$10$Ue/NxrUKcDjx7VYz38RKSuIweaemYH8g52qops.iJfyaGrDh7LAv.",
        status: "customer"
    }


    await collection.insertOne(employee);

    await collection.insertOne(manager);

    await collection.insertOne(disabledUser);

    await collection.insertOne(customer);

    await client.close();
}

async function updateUser(username, password, status) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);

    const filter = {
        username: username
    };

    const update = {
        "$set": {
            "username": username,
            "password": password,
            "status": status
        }
    };

    await collection.updateOne(filter, update);
    await client.close();
}

async function findSingleUser(username) {
    const client = mongodb.MongoClient(HOST);
    await client.connect();
    const database = client.db(DATABASE);
    const collection = database.collection(COLLECTION);

    const filter = {
        username: username
    };

    let user = await collection.findOne(filter);
    await client.close();
    return user;
}



// Use this function to generate hashed passwords to save in 
// the users list or a database.
// Does this have to be async or will run instantly due to hoisting?       -----------------------------------------------------------------
function generateHashedPassword(password) {
    let salt = bcrypt.genSaltSync();
    generatedHashedPassword = bcrypt.hashSync(password, salt);
    return generatedHashedPassword;
}



async function authenticateUser(username, password) {

    let user = await findSingleUser(username);
    let hashedCorrectPassword = user.password;

    if (bcrypt.compareSync(password, hashedCorrectPassword)) {

        return true;

    } else {

        return null;

    }
}



module.exports = router;