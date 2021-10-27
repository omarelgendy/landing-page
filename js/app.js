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
const pageSections = Array.from(document.querySelectorAll("section"));
//Creating an array storing all the sections in the page
const navMenu = document.getElementById("navbar__list");
//Storing the nav menu unordered list to perform operations on it using js

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function sectionViewStatus(sec) {
    //To check weither the section is in view or not
    let secPosition = sec.getBoundingClientRect();
    //Storing the coordinates of the section in view
    return (secPosition.top >= 0)
    //Returning a boolean value weither the section is active or not
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createItemsList() {
    //To Make a list of Sections to be used in the navigation menu
    for (section of pageSections) {
        //To loop through all sections and build their existance in the nav menu
        nameOfSection = section.getAttribute('data-nav');
        //Storing the name of the section to be written in the nav menu
        linkOfSection = section.getAttribute('id');
        //Storing link of section to be used in the anchor of the nav menu element
        listItem = document.createElement('li');
        //Creating an item to be then added to the UL of the nav menu unordered list
        listItem.innerHTML = `<a class = 'menu__link' href ='#${linkOfSection}'> ${nameOfSection} </a>`;
        //Modifying the inner html of the element we just created to set the name and the anchor
        navMenu.appendChild(listItem);
        //Adding the list item to the nav menu unordered list
    }
}

// Add class 'active' to section when near top of viewport

function addActiveStatus() {
    //Adding Active class to the section if in view and removing it if not in view
    for (section of pageSections) {
        //Looping through all of the sections of the page
        if (sectionViewStatus(section)) {
            //Calling the helping function which indicates weither the section is in view or not and using the returned boolean value as a conditional check
            if (!section.classList.contains('your-active-class')) {
                //Checking that the class active does not currently exist for the section being viewed
                section.classList.add('your-active-class')
                //Adding the class active to the section being viewed
            }
        } else {
            //Statement excuted when the section is not viewed
            section.classList.remove('your-active-class')
            //Removing the class active from the class list of the section
        }
    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createItemsList()
//Calling the function to build the nav menu

// Scroll to section on link click
document.addEventListener('scroll', addActiveStatus)
//Adding an event listener to call the function everytime we scroll through the screen

// Set sections as active


