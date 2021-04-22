// Gets data from form and responds that data has been recieved.

main();

function main() {
    getData();
}

function getData() {
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = document.getElementById('firstName').value; //get the value for firstname
    document.getElementById('inputs').innerHTML = ("Form has been submitted.");
});
}