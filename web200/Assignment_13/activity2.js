// Gets data from form and responds that data has been recieved.

main();

function main() {
    let data = getData();
}

function getData() {
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const postCode = document.getElementById('postCode');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const dateOB = document.getElementById('dateOB');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    });

    
}