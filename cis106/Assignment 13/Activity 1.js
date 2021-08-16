//Takes users first and last name to print name in form "Lastname, F."
//Refrence to https://www.youtube.com/watch?v=8IEI-7fj2j4


main();

function main() {
    var name = getName();
    var names = fixName(name);
    makeName(names);
}


function getName() {
    name = prompt("What is your first and last name?", "");
        if (name.length >= 1) {
        return name;
        } else {
        console.log("Please input valid words for name.");
        main();
        }
}

function fixName(name) {
    var whitespace = name.replace (/\s+/g, ' ');
    var capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
    var names = whitespace.split(" ").map(capitalize);
    name.trim();
    return names;
}

function makeName(names) {
    var first = names[0].charAt(0);
    var last = names[names.length - 1];
    console.log(last + " " + first + ".");
}
