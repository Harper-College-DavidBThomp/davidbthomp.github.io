function navToggle() {
    const navBarLinks = document.getElementsByClassName('navBarLinks')[0];
    navBarLinks.classList.toggle('active')
}

// Injects Link back to DevBThom

const pageElement = 'main'
const button = document.createElement('button');
button.textContent = 'Back to Portfolio';
button.id = 'devbthom'
button.style.position = 'fixed';
button.style.bottom = '100px';
button.style.right = '20px';
button.addEventListener('click', () => {
    window.location.href = 'https://devbthom.com/';
});

const container = document.querySelector(pageElement);
container.appendChild(button);

// End Link Injects