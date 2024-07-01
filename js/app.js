/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
// End Global Variables

// Start Helper Functions
// Creates a navigation item for each section
function createNavItem(section) {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = section.getAttribute('data-nav'); // Using getAttribute to access data attribute
    navLink.href = `#${section.id}`;
    navLink.classList.add('menu__link');
    navItem.appendChild(navLink);
    return navItem;
}

// Checks if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
}

// Sets the active state for sections and corresponding navigation items based on their visibility in the viewport
function setActiveSection() {
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            navLink.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('active');
        }
    });
}
// End Helper Functions

// Begin Main Functions
// Builds the navigation menu dynamically based on the sections
function buildNav() {
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.getAttribute('data-nav'); 
        navLink.href = `#${section.id}`;
        navLink.classList.add('menu__link');
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
}

// Adds event listeners to the navigation items for smooth scrolling
function addNavListeners() {
    navList.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.nodeName === 'A') {
            document.querySelector(event.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}
// End Main Functions

// Begin Events
// Build menu 
buildNav();

// Scroll to section on link click
addNavListeners();

// Set sections as active
document.addEventListener('scroll', setActiveSection);
// End Events
