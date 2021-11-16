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
const sectionsOfPage = document.querySelectorAll(".section")
//Storing all sections of the page in a variable called sections of page to access it easily
const listOfBar = document.getElementById("navbar__list")
//Getting the Unordered list containing the bar to easily access it

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function addActiveStat() {
    /* 
    The function loops through all of the sections
    Then it stores their coordinates in a variable named position
    Then it checks whether the section is being viewed by the user or not
        by checking if the section's top coordinates exists in the screen
    If the section is in view it adds a class called your-active-class to mark the section as active
    */
    for (sec of sectionsOfPage) {
        if (sec.getBoundingClientRect().top >= -400 &&
        sec.getBoundingClientRect().bottom <= 150) {
            sec.classList.add('your-active-class')
        }
        else {
            sec.classList.remove('your-active-classList')
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar() {
    /*
    The function loops through all the sections of the page
    Then it creates a new element and modifies its inner HTML to set its name to the name of the section
        and its class to the class of the section and its link to the id of the section
    Then it adds the element ot the Unordered list which contains the elements of the bar
    */
    for (sec of sectionsOfPage) {
        item = document.createElement("li")
        item.innerHTML = `<a class="menu__link" href="#${sec.getAttribute("id")}"> ${sec.getAttribute("data-nav")} </a>`
        listOfBar.appendChild(item)
    }
}
buildNavBar()
// Add class 'active' to section when near top of viewport
//function editClassStat() {
    /* 
    The function simply calls the two helper function
    */
    //removeActiveStat()
//    addActiveStat()
//}


// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
*/
document.addEventListener('scroll', addActiveStat())
// Build menu 



// Scroll to section on link click

// Set sections as active


