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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const pageSections = Array.from(document.querySelectorAll('section'))
const navMenu = document.getElementById('navmenu_list')



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function itemsList() {
    //To Make a list of Sections to be used in the navigation menu
    for (section of sections) {
        nameOfSection = section.getAttribute('data-nav')
        linkOfSections = section.getAttribute('id')
        //Line below is creating an item to be then added to the UL of the nav menu
        listItem = document.createElement('li')
        listItem.innerHTML = `<a class = 'menuItem' href ='${linkOfSection}'> ${nameOfSection} </a>`
        navMenu.appendChild(listItem);
    }
}
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


