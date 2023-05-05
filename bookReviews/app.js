// Define a callback function to be called by the Intersection Observer
const callback = (entries, observer) => {
    // Iterate over each entry in the array of IntersectionObserverEntry objects
    entries.forEach(entry => {
        // If the observed element is intersecting the viewport
        if (entry.isIntersecting) {
            // Get the current active section and remove the active class
            const currentActive = document.querySelector('.active');

            if (currentActive) {
                currentActive.classList.remove('active');
            }

            // Add the active class to the observed element
            entry.target.classList.add('active');


            // Set the background color of the document body to the value of the observed element's data-color attribute
            document.body.style.backgroundColor = entry.target.dataset.color;
        }
    });
};

// Select all section elements in the document
const changes = document.querySelectorAll('section');

// Create a new Intersection Observer instance with the defined callback function
const observer = new IntersectionObserver(callback, {
    threshold: 0.5
});

// Observe each section element using the Intersection Observer instance
changes.forEach(change => {
    observer.observe(change);
});

// Scroll Direction

// Initial state

function detectDirection(e) {
    // Find the current active section
    const currentSection = document.querySelector('section.active');

    // Find the next and previous sections
    const nextSection = currentSection.nextElementSibling;
    const prevSection = currentSection.previousElementSibling;

    // Get the direction of the scroll
    const delta = e.deltaY;

    // Scroll to the next or previous section, depending on the scroll direction
    if (delta > 0 && nextSection) {
        nextSection.scrollIntoView({
            behavior: 'smooth'
        })
    } else if (delta < 0 && prevSection) {
        prevSection.scrollIntoView({
            behavior: 'smooth'
        })
    }
}

// Listen for mouse wheel events
window.addEventListener('wheel', e => {
    if (window.innerWidth >= 1024) {
        // Removes Scroll bar - Might be a bit iffy
        document.body.style.overflow = 'hidden';
        e.preventDefault();
        detectDirection(e);
    }
}, {
    passive: false
});

// Injects Link back to DevBThom

const pageElement = 'main'
const button = document.createElement('button');
button.textContent = 'Back to Portfolio';
button.id = 'devbthom'
button.style.position = 'fixed';
button.style.bottom = '200px';
button.style.right = '20px';
button.addEventListener('click', () => {
    window.location.href = 'https://devbthom.com/';
});

const container = document.querySelector(pageElement);
container.appendChild(button);

// End Link Injects