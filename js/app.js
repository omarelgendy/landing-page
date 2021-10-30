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
const sectionsOfPage = document.querySelectorAll("section")
//Storing all sections of the page in a variable called sections of page to access it easily
const listOfBar = document.getElementById("navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addActiveStat() {
    for (sec of sectionsOfPage) {
        const position = sec.getBoundingClientRect()
        if (position.top >= 0) {
            if (!sec.classList.contains("your-active-class")) {
                sec.classList.add("your-active-class")
            }
            }    }
}

function removeActiveStat() {
    for (sec of sectionsOfPage) {
        const position = sec.getBoundingClientRect()
        if (!position.top >= 0 || position.bottom <= 100)
            if (sec.classList.contains('your-active-class')) {
                sec.classList.remove("your-active-class")
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
    for (sec of sectionsOfPage) {
        item = document.createElement("li")
        item.innerHTML = `<a class="menu__link" href="#${sec.getAttribute("id")}"> ${sec.getAttribute("data-nav")} </a>`
        listOfBar.appendChild(item)
    }
}
buildNavBar()
// Add class 'active' to section when near top of viewport
function editClassStat() {
    removeActiveStat()
    addActiveStat()
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click


// Set sections as active


